import { expect, test } from '@playwright/test';

test('desktop navigation and skip link support keyboard users', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/#content$/);
  await page.getByRole('banner').getByRole('link', { name: 'Projects', exact: true }).click();
  await expect(page).toHaveURL('/projects');
  await expect(page.getByRole('banner').getByRole('link', { name: 'Projects', exact: true })).toHaveAttribute('aria-current', 'page');
});

test('project filtering changes only additional projects and exposes selected state', async ({ page }) => {
  await page.goto('/projects');
  await expect(page.getByText('3 projects shown')).toBeVisible();
  await page.getByRole('button', { name: /^Personal/ }).click();
  await expect(page.getByRole('button', { name: /^Personal/ })).toHaveAttribute('aria-pressed', 'true');
  await expect(page.getByText('1 project shown')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Demo community directory', exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Demo team dashboard', exact: true })).toHaveCount(0);
  await expect(page.getByRole('heading', { name: 'Demo design system', exact: true })).toBeVisible();
  await page.getByRole('button', { name: /^All/ }).click();
  await expect(page.getByText('3 projects shown')).toBeVisible();
});

test('screenshot dialog opens with keyboard, traps focus, and restores it on Escape', async ({ page }) => {
  await page.goto('/projects');
  const trigger = page.getByRole('button', { name: 'Enlarge Demo design system screenshot' });
  await trigger.focus();
  await page.keyboard.press('Enter');
  const dialog = page.getByRole('dialog', { name: 'Demo design system' });
  await expect(dialog).toBeVisible();
  const close = dialog.getByRole('button', { name: 'Close screenshot' });
  await expect(close).toBeFocused();
  /*
    The panel scrolls, so Chrome keeps its scroll container in the tab order for
    keyboard scrolling. Trapping means the cycle never leaves the dialog and
    comes back around to close, not that every Tab lands on the same control.
  */
  const focusIsTrapped = () => page.evaluate(() => !!document.activeElement?.closest('[role="dialog"]'));
  await page.keyboard.press('Tab');
  await expect.poll(focusIsTrapped).toBe(true);
  await page.keyboard.press('Tab');
  await expect(close).toBeFocused();
  await page.keyboard.press('Shift+Tab');
  await expect.poll(focusIsTrapped).toBe(true);
  await page.keyboard.press('Escape');
  await expect(dialog).toBeHidden();
  await expect(trigger).toBeFocused();
});

test('mobile menu supports keyboard dismissal and navigation', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const menu = page.getByRole('button', { name: 'Menu', exact: true });
  await menu.focus();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('menu')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('menu')).toBeHidden();
  await expect(menu).toBeFocused();
  await menu.click();
  await page.getByRole('menuitem', { name: 'Contact', exact: true }).click();
  await expect(page).toHaveURL('/contact');
  await expect(page.getByRole('heading', { name: 'Send a message' })).toBeVisible();
});

test('demo submission reports its local outcome without contacting EmailJS', async ({ page }) => {
  const emailRequests: string[] = [];
  await page.route('**/api.emailjs.com/**', async (route) => {
    emailRequests.push(route.request().url());
    await route.abort();
  });
  await page.goto('/contact?intent=hiring');
  await page.getByLabel('First Name').fill('Demo');
  await page.getByLabel('Last Name').fill('Reviewer');
  await page.getByLabel('Email Address').fill('reviewer@example.com');
  await expect(page.getByLabel('Subject')).toHaveValue('Full-time role or freelance project');
  // By accessible name, not label text: the label carries a required asterisk.
  await page.getByRole('textbox', { name: 'Message', exact: true }).fill('I would like to discuss a frontend project.');
  await page.getByRole('button', { name: 'Try demo submission' }).click();
  await expect(page.getByRole('status')).toContainText('No email was sent or saved.');
  expect(emailRequests).toEqual([]);
});
