const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage')


let loginPage

test.beforeEach(({ page }) => {
    loginPage = new LoginPage(page)
})

test('Validar login como administrador', async ({ page }) => {
    await loginPage.visit()


})