import { test as setup } from "@playwright/test";
import Clerk from "@clerk/nextjs";

type ClerkType = typeof Clerk;

const authFile = "playwright/.auth/user.json";

setup("authenticate", async ({ page }) => {
  await page.goto("http://localhost:3000/sign-in");
  await page.waitForLoadState("networkidle");

  const data = {
    strategy: "password",
    identifier: process.env.PLAYWRIGHT_E2E_USER_EMAIL || "",
    password: process.env.PLAYWRIGHT_E2E_USER_PASSWORD || "",
  };

  await page.evaluate(async (data) => {
    // wait function as promise
    const wait = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    const wdw = window as Window & typeof globalThis & { Clerk: ClerkType };

    /** clear the cookies */
    document.cookie.split(";").forEach(function (c) {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });

    const clerkIsReady = (
      window: Window & typeof globalThis & { Clerk: ClerkType }
    ) => {
      return wdw.Clerk && wdw.Clerk.isReady();
    };

    while (!clerkIsReady(wdw)) {
      await wait(100);
    }

    const res = await wdw.Clerk.client?.signIn.create(data);

    if (!res) {
      throw new Error(`Failed to sign in`);
    }

    await wdw.Clerk.setActive({
      session: res.createdSessionId,
    });
  }, data);

  await page.context().storageState({ path: authFile });
});
