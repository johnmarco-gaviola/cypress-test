export class homepage {
    
    header = '.app_logo'
    itemBackPack = '#add-to-cart-sauce-labs-backpack'
    itemBikeLight = '#add-to-cart-sauce-labs-bike-light'
    itemJacket = '#add-to-cart-sauce-labs-fleece-jacket'
    itemTshirt = '#add-to-cart-sauce-labs-bolt-t-shirt'
    itemOnesie = '#add-to-cart-sauce-labs-onesie'
    itemRedShirt = '#add-to-cart-test.allthethings()-t-shirt-(red)'
    cart = '.shopping_cart_link'
    container = '.inventory_item_description'
    sortDropDown = '.product_sort_container'
    invName = '.inventory_item_name'
    invPrice = '.inventory_item_price'

    headerIsVisible() {
        cy.get(this.header)
            .should('be.visible')
            .should('contain', 'Swag Labs')
    }

    clickCart() {
        cy.get(this.cart)
            .should('be.visible')
            .click()
    }

    addItem(item) {
        if (item === 'BackPack') {
            cy.get(this.itemBackPack)
                .should('be.visible')
                .click()
        } else if (item === 'BikeLight') {
            cy.get(this.itemBikeLight)
                .should('be.visible')
                .click()
        } else if (item === 'Jacket') {
            cy.get(this.itemJacket)
                .should('be.visible')
                .click()
        } else if (item === 'Tshirt') {
            cy.get(this.itemTshirt)
                .should('be.visible')
                .click()
        } else if (item === 'Onesie') {
            cy.get(this.itemOnesie)
                .should('be.visible')
                .click()
        } else if (item === 'Redshirt')
            cy.get(this.itemRedShirt)
                .should('be.visible')
                .click()
    }

    verifySortAZ() {
        cy.get(this.sortDropDown)
            .should('be.visible')
            .select('az');

        cy.get(this.invName)
            .then((items) => {
                const itemNames = [...items].map(item => item.innerText);
                const sortedNames = [...itemNames].sort();
                expect(itemNames).to.deep.equal(sortedNames);
        });
    }

    verifySortZA() {
        cy.get(this.sortDropDown)
            .should('be.visible')
            .select('za');

        cy.get(this.invName)
            .then((items) => {
                const itemNames = [...items].map(item => item.innerText);
                const sortedNames = [...itemNames].sort().reverse();
                expect(itemNames).to.deep.equal(sortedNames);
        });
    }

    verifySortLoHi() {
        cy.get(this.sortDropDown)
            .should('be.visible')
            .select('lohi');

        cy.get(this.invPrice)
            .then((prices) => {
                const price = [...prices].map(price => parseFloat(price.innerText.replace('$', '')));
                const sortedPrices  = [...price].sort((a, b) => a - b);
                expect(price).to.deep.equal(sortedPrices);
        });
    }

    verifySortHiLo() {
        cy.get(this.sortDropDown)
            .should('be.visible')
            .select('hilo');

        cy.get(this.invPrice)
            .then((prices) => {
                const price = [...prices].map(price => parseFloat(price.innerText.replace('$', '')));
                const sortedPrices  = [...price].sort((a, b) => b - a);
                expect(price).to.deep.equal(sortedPrices);
        });
    }

}