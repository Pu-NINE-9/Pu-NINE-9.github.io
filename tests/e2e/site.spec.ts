import { expect, test } from '@playwright/test'

test('home hydrates, displays projects and fits the viewport', async ({ page }, testInfo) => {
  const errors: string[] = []
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('console', (message) => {
    if (/hydration.*mismatch/i.test(message.text())) errors.push(message.text())
  })
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('在代码中发光')
  await expect(page.locator('.project-card')).toHaveCount(2)
  await expect(page.locator('.blog-card')).toHaveCount(3)
  await expect(page.locator('.hero-orbit')).toBeVisible()
  await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true)
  await page.screenshot({
    path: `test-results/home-${testInfo.project.name}.png`,
    fullPage: true,
    animations: 'disabled'
  })
  expect(errors).toEqual([])
})

test('project filters and detail routes work', async ({ page }) => {
  await page.goto('/works')
  await expect(page.locator('.project-card')).toHaveCount(4)
  await page.getByRole('button', { name: 'Next.js', exact: true }).click()
  await expect(page.locator('.project-card')).toHaveCount(1)
  await page.locator('.project-card').click()
  await expect(page).toHaveURL(/\/works\/3$/)
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('AI-Search-Tool')
  await expect(page.getByRole('link', { name: '查看源码' })).toHaveAttribute('href', /github.com/)
})

test('blog search, empty state, pagination and markdown work', async ({ page }) => {
  await page.goto('/blog')
  await expect(page.locator('.blog-card')).toHaveCount(6)
  await page.getByRole('button', { name: '加载更多笔记' }).click()
  await expect(page.locator('.blog-card')).toHaveCount(10)
  const search = page.getByRole('textbox', { name: '搜索文章' })
  await search.fill('no-such-note-999')
  await expect(page.getByRole('heading', { name: '还没找到相关笔记' })).toBeVisible()
  await page.getByRole('button', { name: '清除筛选' }).click()
  await search.fill('Winston')
  await expect(page.locator('.blog-card')).toHaveCount(1)
  await page.locator('.blog-card').click()
  await expect(page).toHaveURL(/\/blog\/10$/)
  await expect(page.locator('.markdown-content pre').first()).toBeVisible()
  await expect(page.locator('.markdown-content h2').first()).toHaveAttribute('id', /^heading-/)
  await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true)
})

test('language persists and mobile navigation closes on route change', async ({ page }, testInfo) => {
  await page.goto('/')
  const language = page.getByRole('combobox', { name: 'Language / 语言' })
  await language.click()
  await page.getByRole('option', { name: 'English' }).click()
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Turning ideas')
  await page.reload()
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Turning ideas')
  if (testInfo.project.name === 'mobile') {
    await page.getByRole('button', { name: 'Toggle navigation' }).click()
    await page
      .locator('#mobile-navigation')
      .getByRole('link', { name: /Works|Projects/i })
      .click()
    await expect(page).toHaveURL(/\/works$/)
    await expect(page.locator('#mobile-navigation')).toHaveCount(0)
  }
})

test('unknown routes show the custom 404', async ({ page }) => {
  const response = await page.goto('/unknown-route')
  expect(response?.status()).toBe(404)
  await expect(page.getByRole('heading', { level: 1 })).toContainText('404')
  await page.getByRole('button', { name: '返回首页' }).click()
  await expect(page.getByRole('heading', { level: 1 })).toContainText('在代码中发光')
})
