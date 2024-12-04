export class homepage {
    
    header = '.app_logo'
    itemBackPack = '#add-to-cart-sauce-labs-backpack'
    itemBikeLight = '#add-to-cart-sauce-labs-bike-light'
    itemJacket = '#add-to-cart-sauce-labs-fleece-jacket'

    headerIsVisible() {
        cy.get(this.header)
            .should('be.visible')
            .should('contain', 'Swag Labs')
    }

    addBackpack() {
        cy.get(this.itemBackPack)
            .should('be.visible')
            .click()
    }

    addBikeLight() {
        cy.get(this.itemBikeLight)
            .should('be.visible')
            .click()
    }

    addJacket() {
        cy.get(this.itemJacket)
            .should('be.visible')
            .click()
    }

}