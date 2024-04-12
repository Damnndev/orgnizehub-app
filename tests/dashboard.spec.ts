import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto(
    "http://localhost:3000/organization/org_2bomY8AiYuG9ipzDjql2N13nnlo"
  );
});

test.describe("Testing marketing page", () => {
  test.skip("has title", async ({ page }) => {
    await expect(page).toHaveTitle(/OrganizeHub/);
  });

  test.skip("'Sign up' button click", async ({ page }) => {
    await page.getByRole("link", { name: "Sign up" }).click();
    // Expects page to navigate to /sign-up page.
    await expect(page).toHaveURL(/.*sign-up/);
  });
});
