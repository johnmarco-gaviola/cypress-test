export class cartpage {

    checkoutBtn = '#checkout'

    verifyCart(item) {
        if (item === 'BackPack'){
            cy.contains('Sauce Labs Backpack')
                .should('be.visible')
        } else if (item === 'BikeLight') {
            cy.contains('Sauce Labs Bike Light')
                .should('be.visible')
        } else if (item === 'Jacket') {
            cy.contains('Sauce Labs Fleece Jacket')
                .should('be.visible')
        } else if (item === 'Tshirt') {
            cy.contains('Sauce Labs Bolt T-Shirt')
                .should('be.visible')
        } else if (item === 'Onesie') {
            cy.contains('Sauce Labs Onesie')
                .should('be.visible')
        } else if (item === 'Redshirt')
            cy.contains('T-Shirt (Red)')
                .should('be.visible')
    }

    clickCheckout() {
        cy.get(this.checkoutBtn)
            .should('be.visible')
            .click()
    }
}