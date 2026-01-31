
const { expect } = require('@playwright/test');
export class LandingPage {


    constructor(page) { 
        this.page = page
    }

    async visit() {
        await this.page.goto('http://localhost:3000/')
    }

    async openLeadModal() {
        await this.page.getByRole('button', {name: /Aperte o play/ }).click()
        
        await expect(
            this.page.getByTestId('modal').getByRole('heading')
        ).toHaveText('Fila de espera') // Realizar checkpoint no modal
  

    }

    async submitLeadForm(name , email) {
        //await page.locator('#name').fill('leo')
        //await page.locator('input[placeholder="Informe seu nome"]').fill('leo') //usando pelo placehoplder
        await this.page.getByPlaceholder('Informe seu nome').fill(name) //usando pelo placehoplder
        await this.page.locator('input[name=email]').fill(email) // Procurar pelo name
        await this.page.getByTestId('modal')
            .getByText('Quero entrar na fila!').click()
    }

    async toastHaveText(message) {
        
        const toast = this.page.locator('.toast')
        
        await expect(toast).toHaveText(message)
        await expect(toast).not.toBeVisible({timeout: 5000}) // o not garante que não esta visivel porem pertence ao html
    }

    async alertHaveText(target) {
        await expect(this.page.locator('.alert')).toHaveText(target)    
    }
}