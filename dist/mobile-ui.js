// Keep the portrait player drawer independent from the modal/turn action layer.
export function mountPlayerDrawer(root) {
  mountMapTools(root);
  const content = root.querySelector('.welcome-content'),
    talent = root.querySelector('#talentPreview');
  if (content && talent) content.append(talent);
  const button = root.querySelector('#playersToggle'),
    sidebar = root.querySelector('#playerSidebar');
  if (!button || !sidebar) return;
  const update = (expanded) => {
    root.dataset.playersExpanded = String(expanded);
    button.setAttribute('aria-expanded', String(expanded));
    button.textContent = expanded ? '收起奶伴与资产' : '查看奶伴与资产';
  };
  update(false);
  button.addEventListener('click', () => update(button.getAttribute('aria-expanded') !== 'true'));
  const sheet = root.querySelector('#sheet'),
    collapse = root.querySelector('#collapseSheet');
  collapse?.addEventListener('click', () => {
    if (sheet.dataset.panel === 'handoff') return;
    const collapsed = sheet.classList.toggle('is-collapsed');
    sheet.setAttribute('aria-modal', 'true');
    collapse.setAttribute('aria-expanded', String(!collapsed));
    collapse.setAttribute('aria-label', collapsed ? '展开面板' : '折叠面板');
    collapse.textContent = collapsed ? '展开' : '收起';
  });
  const observer = new MutationObserver(() => {
    if (sheet.hidden) {
      sheet.classList.remove('is-collapsed');
      collapse?.setAttribute('aria-expanded', 'true');
      if (collapse) collapse.textContent = '收起';
    }
  });
  observer.observe(sheet, { attributes: true, attributeFilter: ['hidden'] });
  root.querySelector('#sheet')?.addEventListener('pointerdown', (e) => e.stopPropagation());
}

// Compact layouts expose the same controls on demand, including after manual rotation.
function mountMapTools(root) {
  const button = root.querySelector('#mapToolsToggle'),
    tools = root.querySelector('#mapTools');
  if (!button || !tools) return;
  const update = (expanded) => {
    root.dataset.toolsExpanded = String(expanded);
    button.setAttribute('aria-expanded', String(expanded));
    button.textContent = expanded ? '收起' : '工具';
  };
  update(false);
  button.addEventListener('click', () => update(button.getAttribute('aria-expanded') !== 'true'));
  root.addEventListener('pointerdown', (e) => {
    if (!tools.contains(e.target) && !button.contains(e.target)) update(false);
  });
  const sheet = root.querySelector('#sheet');
  if (sheet)
    new MutationObserver(() => {
      if (!sheet.hidden) update(false);
    }).observe(sheet, { attributes: true, attributeFilter: ['hidden'] });
  root.addEventListener('keydown', (e) => {
    if (
      e.key === 'Escape' &&
      root.dataset.compact === 'true' &&
      root.dataset.toolsExpanded === 'true'
    ) {
      e.preventDefault();
      e.stopPropagation();
      update(false);
      button.focus({ preventScroll: true });
    }
  });
  let previous = '';
  window.addEventListener('gamelayoutchange', () => {
    const layout = root.dataset.compact + ':' + root.dataset.layout;
    if (layout !== previous) {
      const focused = tools.contains(root.ownerDocument.activeElement);
      update(false);
      if (focused && root.dataset.compact === 'true') button.focus({ preventScroll: true });
      previous = layout;
    }
  });
}
