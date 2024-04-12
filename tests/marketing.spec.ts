import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/");
});

test.describe("Testing marketing page", () => {
  test("has title", async ({ page }) => {
    await expect(page).toHaveTitle(/OrganizeHub/);
  });

  test("'Sign up' button click", async ({ page }) => {
    await page.getByRole("link", { name: "Sign up" }).click();
    // Expects page to navigate to /sign-up page.
    await expect(page).toHaveURL(/.*sign-up/);
  });

  test("'Get started' button click", async ({ page }) => {
    await page.getByRole("link", { name: "Get started" }).click();
    // Expects page to navigate to /sign-up page.
    await expect(page).toHaveURL(/.*sign-up/);
  });

    test("'Log in' button click and navigate to dashboard menu", async ({ page }) => {
      await page.getByRole("link", { name: "Log in" }).click();
      // Expects page to navigate to /sign-in page.
      await expect(page).toHaveURL(/.*sign-in/);

      await page.getByRole("button", { name: "Continue with Google" }).click();

      await expect(
        page.getByRole("button", { name: "Next" })
      ).toBeVisible();

       await page.fill('input[type="email"]', "jane+clerk_test@example.com");

      await page.getByRole("button", { name: "Next" }).click();

       await page.fill('input[type="password"]', "424242");

      await page.getByRole("button", { name: "Next" }).click();

       await expect(page).toHaveURL(/.*/);

    });
});
