it("logged in user should be not redirected to login page", async () => {
  await page.goto("http://localhost:3000/modules", {
    waitUntil: "networkidle",
  });
  await expect(page).toMatchTitle("Semester planner");
  await expect(page).toMatchURL(/modules/i);
});

it("user should be able to remove a module", async () => {
  await page.goto("http://localhost:3000/modules", {
    waitUntil: "networkidle",
  });
  const modules = await page.$$(".module");
  await modules[0].click();
  const delButton = await page.$(".modal-footer > .btn-primary");
  await delButton.click();
  await page.goto("http://localhost:3000/modules", {
    waitUntil: "networkidle",
  });
  const modulesAfterRemoving = await page.$$(".module");
  expect(modulesAfterRemoving.length).toBe(13);
});

it("user should be able to add a module", async () => {
  await page.goto("http://localhost:3000/modules", {
    waitUntil: "networkidle",
  });
  await page.getByRole("button", { name: /add modules/i }).click();
  await page.getByRole("button", { name: /composition/i }).click();
  await page.goto("http://localhost:3000/modules", {
    waitUntil: "networkidle",
  });
  const modules = await page.$$(".module");
  expect(modules.length).toBe(14);
});

it("user should be able to logout", async () => {
  await page.goto("http://localhost:3000/modules", {
    waitUntil: "networkidle",
  });
  await page
    .getByRole("button", { name: /log out/i })
    .first()
    .click();
  await new Promise((r) => setTimeout(r, 500)); // firefox and webkit
  await expect(page).toMatchURL("http://localhost:3000/login");
});
