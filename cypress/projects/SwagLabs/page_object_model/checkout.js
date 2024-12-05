export class checkout {

    fnField = '#first-name'
    lnField = '#last-name'
    zipField = '#postal-code'
    continueBtn = '#continue'
    finishBtn = '#finish'
    success = '#complete-header'

    firstName(val) {
        cy.get(this.fnField)
            .should('be.visible')
            .type(val)
    }

    lastName(val) {
        cy.get(this.lnField)
            .should('be.visible')
            .type(val)
    }

    zip(int) {
        cy.get(this.zipField)
            .should('be.visible')
            .type(int)
    }

    clickContinue() {
        cy.get(this.continueBtn)
            .should('be.visible')
            .click()
    }

    clickFinish() {
        cy.get(this.finishBtn)
            .should('be.visible')
            .click()
    }

    verifySuccess() {
        cy.contains('Thank you for your order!')
            .should('be.visible')
    }
}