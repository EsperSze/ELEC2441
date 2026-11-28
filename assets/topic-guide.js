(() => {
  const main = document.querySelector('main');
  const rail = document.createElement('aside');
  rail.className = 'topic-rail';
  rail.hidden = true;
  main.prepend(rail);

  const compact = matchMedia('(max-width: 899px)');
  const guides = new Map();
  for (const panel of main.querySelectorAll('section[role="tabpanel"]')) {
    if (!/^lt[1-9]$/.test(panel.id)) continue;
    const guide = document.createElement('details');
    const title = document.createElement('summary');
    title.textContent = panel.id.toUpperCase() + ' contents';
    const links = document.createElement('nav');
    links.setAttribute('aria-label', title.textContent);
    guide.append(title, links);

    for (const heading of panel.querySelectorAll('h2, details > summary')) {
      if (heading.closest('dialog')) continue;
      const label = heading.textContent.trim()
        .replace(/\s*(?:·\s*pp?\.\s*.*|\((?:based on )?pp?\.\s*[^)]*\))$/i, '').trim();
      const slug = label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      const base = panel.id + '-' + slug;
      let id = base;
      for (let suffix = 2; document.getElementById(id); suffix++) id = base + '-' + suffix;
      heading.id = id;
      heading.classList.add('topic-anchor');
      if (heading.tagName === 'H2') heading.tabIndex = -1;
      const link = document.createElement('a');
      link.href = '#' + id;
      link.textContent = label;
      if (heading.tagName === 'H2') link.className = 'topic-group';
      links.append(link);
    }
    guides.set(panel.id, guide);
  }

  function displayGuide(id) {
    const guide = guides.get(id);
    rail.hidden = !guide;
    if (!guide) return;
    if (rail.firstChild !== guide) rail.replaceChildren(guide);
    guide.open = !compact.matches;
    guide.querySelector('[aria-current]')?.removeAttribute('aria-current');
  }
  compact.addEventListener('change', () => {
    if (rail.firstChild) rail.firstChild.open = !compact.matches;
  });
  document.addEventListener('lecturechange', event => displayGuide(event.detail));

  function followLocation() {
    const id = location.hash.slice(1);
    const target = document.getElementById(id);
    if (target?.classList.contains('topic-anchor')) {
      const panel = target.closest('[role="tabpanel"]');
      showPage(panel.id, id);
      for (let disclosure = target.closest('details'); disclosure;
           disclosure = disclosure.parentElement.closest('details')) {
        disclosure.open = true;
      }
      rail.querySelector('a[href="#' + id + '"]').setAttribute('aria-current', 'location');
      target.focus({preventScroll: true});
      target.scrollIntoView({block: 'start'});
    } else if (target?.matches('main > [role="tabpanel"]')) {
      showPage(id);
    }
  }
  rail.addEventListener('click', event => {
    const link = event.target.closest('a');
    if (link && link.hash === location.hash && !event.ctrlKey && !event.metaKey &&
        !event.shiftKey && !event.altKey) {
      event.preventDefault();
      followLocation();
    }
  });
  window.addEventListener('hashchange', followLocation);
  followLocation();
})();
