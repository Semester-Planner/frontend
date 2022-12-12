it("logged in user should be not redirected to login page", async () => {
  await page.goto("http://localhost:3000/modules", {
    waitUntil: "networkidle",
  });
  await expect(page).toMatchTitle("Semester planner");
  await expect(page).toMatchURL(/modules/i);
});
