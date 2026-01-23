// @ts-check
import { test, expect } from '@playwright/test';

test('deve cadastrar um lead na fila de espera', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('button', {name: /Aperte o play/ }).click()

  await expect(
    page.getByTestId('modal').getByRole('heading')
  ).toHaveText('Fila de espera') // Realizar checkpoint no modal
  

  //await page.locator('#name').fill('leo')
  //await page.locator('input[placeholder="Seu nome completo"]').fill('leo') //usando pelo placehoplder
  await page.getByPlaceholder('Seu nome completo').fill('leo teste') //usando pelo placehoplder
  await page.locator('input[name=email]').fill('leoteste@yahoo.com') // Procurar pelo name
  await page.waitForTimeout(10000)

});