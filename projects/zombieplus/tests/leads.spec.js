// @ts-check
import { test, expect } from '@playwright/test';

test('Validar cadastro de lead na fila de espera', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('button', {name: /Aperte o play/ }).click()

  await expect(
    page.getByTestId('modal').getByRole('heading')
  ).toHaveText('Fila de espera') // Realizar checkpoint no modal
  

  //await page.locator('#name').fill('leo')
  //await page.locator('input[placeholder="Seu nome completo"]').fill('leo') //usando pelo placehoplder
  await page.getByPlaceholder('Seu nome completo').fill('leo teste') //usando pelo placehoplder
  await page.locator('input[name=email]').fill('leoteste@yahoo.com') // Procurar pelo name
  await page.getByTestId('modal')
    .getByText('Quero entrar na fila!').click()
  await page.getByText('seus dados conosco').click()
  const content = await page.content()
  console.log(content)

  const message = 'Agradecemos por compartilhar seus dados conosco. Em breve, nossa equipe entrará em contato!'
  await expect(page.locator('.toast')).toHaveText(message)
});

test('Validar tentativa de cadastro com email invalido', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('button', {name: /Aperte o play/ }).click()

  await expect(
    page.getByTestId('modal').getByRole('heading')
  ).toHaveText('Fila de espera') // Realizar checkpoint no modal
  

  await page.getByPlaceholder('Seu nome completo').fill('leo teste') //usando pelo placehoplder
  await page.locator('input[name=email]').fill('leonardo.com.br') // Procurar pelo name
  await page.getByTestId('modal')
    .getByText('Quero entrar na fila!').click()

  await expect(page.locator('.alert')).toHaveText('Email incorreto')
  
});

test('Validar tentativa de cadastro com os campos vazios', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('button', {name: /Aperte o play/ }).click()

  await expect(
    page.getByTestId('modal').getByRole('heading')
  ).toHaveText('Fila de espera') // Realizar checkpoint no modal
  

  await page.getByTestId('modal')
    .getByText('Quero entrar na fila!').click()

  await expect(page.locator('.alert')).toHaveText([
    'Campo obrigatório',
    'Campo obrigatório'
  ])
  
});

test('Validar tentativa de cadastro com o campo Nome vazio', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('button', {name: /Aperte o play/ }).click()

  await expect(
    page.getByTestId('modal').getByRole('heading')
  ).toHaveText('Fila de espera') // Realizar checkpoint no modal
  

   await page.locator('input[name=email]').fill('leonardo@gmail.com.br') // Procurar pelo name
  await page.getByTestId('modal')
    .getByText('Quero entrar na fila!').click()

  await expect(page.locator('.alert')).toHaveText('Campo obrigatório')
  
});

test('Validar tentativa de cadastro com o campo Email vazio', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('button', {name: /Aperte o play/ }).click()

  await expect(
    page.getByTestId('modal').getByRole('heading')
  ).toHaveText('Fila de espera') // Realizar checkpoint no modal
  

  await page.getByPlaceholder('Seu nome completo').fill('leo teste') //usando pelo placehoplder
  await page.getByTestId('modal')
    .getByText('Quero entrar na fila!').click()

  await expect(page.locator('.alert')).toHaveText('Campo obrigatório')
  
});