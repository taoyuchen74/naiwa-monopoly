// Open the actual phone toolbar before interacting with a secondary map control.
export async function openMapTools(page) {
  const toggle = page.locator('#mapToolsToggle');
  if ((await toggle.isVisible()) && (await toggle.getAttribute('aria-expanded')) === 'false') {
    await toggle.click();
  }
}
