export class ContactUs {
    
    header = '.cmp-title__text '
    text = '.cmp-text  '
    items = '.cmp-location__nav__items'
    location_container = '.cmp-location__location-container'
    office = '.cmp-location__location__name'
    address = '.cmp-location__location__address'
    phone = ".cmp-location__location__phone "
    email = ".cmp-location__location__email"

    

    verifyHeader() {
        cy.get(this.header)
          .should('be.visible')
          .contains('Our locations')
    }
    
    verifyText() {
        cy.get(this.text)
          .should('be.visible')
    }

    verifyNavItems() {
        cy.get(this.items)
          .should('be.visible')
        cy.get(this.items)
          .children('li')
          .should('have.length', 3)
    }

    navigateRegion(region) {
        cy.get(this.items)
          .contains(region)
          .should('be.visible')
          .click()
    }

    verifySubTabs(region, length) {
        this.navigateRegion(region)
        cy.get(`[region="${region}"]`).within(() => {
            cy.get(this.location_container)
                .should('be.visible')
                .should('have.length', length)
        })
    }

    verifyOfficeDetails(region) {
        this.navigateRegion(region);
    
        cy.readFile('cypress/projects/datacom/fixtures/office.json').then((data) => {
            const regionData = data[region.toLowerCase()];
    
            if (regionData) {
                let officeNames = [];
    
                cy.get(`[region="${region}"]`).within(() => {
                    cy.get(this.office).each(($text, index) => {
                        const officeName = $text.text().trim();
                        officeNames.push(officeName);
                        cy.log(`Extracted office name: ${officeName}`);
                    }).then(() => {
                        // Collapse the first office
                        cy.get(this.office).eq(0).click();
                        cy.log('Collapse the first office')
                        officeNames.forEach((officeName, index) => {

                            cy.get(this.office).eq(index).click();
    
                            cy.get(this.location_container).eq(index).within(() => {

                                const officeData = regionData[officeName.toLowerCase()];
    
                                if (officeData) {

                                    cy.get(this.address).invoke('text').then((actualAddress) => {
                                        cy.log(`Actual address for ${officeName}: ${actualAddress.trim()}`);
                                        expect(actualAddress.trim()).to.equal(officeData.address);
                                    });
    
                                    cy.get(this.phone).invoke('text').then((actualPhone) => {
                                        cy.log(`Actual phone for ${officeName}: ${actualPhone.trim()}`);
                                        expect(actualPhone.trim()).to.equal(officeData.number);
                                    });
    
                                    cy.get(this.email).invoke('text').then((actualEmail) => {
                                        cy.log(`Actual email for ${officeName}: ${actualEmail.trim()}`);
                                        expect(actualEmail.trim()).to.equal(officeData.email);
                                    });
                                } else {
                                    cy.log(`No matching data found for ${officeName} in the fixture.`);
                                }
                            });
                        });
                    });
                });
            } else {
                cy.log(`No data found for region ${region}`);
            }
        });
    }
}