// @ts-check
const { test, expect } = require('@playwright/test');
const { LadingPage } = require('./pages/LandingPage');

test('Validar cadastro de lead na fila de espera', async ({ page }) => { 
  const landingPage = new LadingPage(page)

  await landingPage.visit()
  await landingPage.openLeadModal()     
  await landingPage.submitLeadForm('Leonardo', 'leoteste@gmail.com')

  const message = 'Agradecemos por compartilhar seus dados conosco. Em breve, nossa equipe entrará em contato!'
  await landingPage.toastHaveText(message)
});  

test('Validar tentativa de cadastro com email invalido', async ({ page }) => {
  const landingPage = new LadingPage(page)

  await landingPage.visit()
  await landingPage.openLeadModal()     
  await landingPage.submitLeadForm('Leonardo', 'leoteste.gmail.com')

  await landingPage.alertHaveText('Email incorreto')
  
});

test('Validar tentativa de cadastro com os campos vazios', async ({ page }) => {
    const landingPage = new LadingPage(page)

  await landingPage.visit()
  await landingPage.openLeadModal()     
  await landingPage.submitLeadForm('', '')

  await landingPage.alertHaveText([
    'Campo obrigatório',
    'Campo obrigatório'
  ])
  
});

test('Validar tentativa de cadastro com o campo Nome vazio', async ({ page }) => {
    const landingPage = new LadingPage(page)

  await landingPage.visit()
  await landingPage.openLeadModal()     
  await landingPage.submitLeadForm('', 'leoteste@gmail.com')

  await landingPage.alertHaveText('Campo obrigatório')
  
});

test('Validar tentativa de cadastro com o campo Email vazio', async ({ page }) => {
    const landingPage = new LadingPage(page)

  await landingPage.visit()
  await landingPage.openLeadModal()     
  await landingPage.submitLeadForm('Leonardo', '')

  await landingPage.alertHaveText('Campo obrigatório')
  
});