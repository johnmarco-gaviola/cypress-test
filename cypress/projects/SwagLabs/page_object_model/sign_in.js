export class signIn {
    
    loginBtn = '#login-button'
    userName = '#user-name'
    password = '#password'

    clickLogin() {
        cy.get(this.loginBtn)
            .should('be.visible')
            .click()
    }

    enterUsername(username) {
        cy.get(this.userName)
            .should('be.visible')
            .type(username)
    }

    enterPassword(password) {
        cy.get(this.password)
            .should('be.visible')
            .type(password)
    }
}