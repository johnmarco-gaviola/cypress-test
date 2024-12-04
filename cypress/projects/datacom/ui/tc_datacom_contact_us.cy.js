import { beforeEach } from "mocha"
import { ContactUs } from "../pom_contact_us/po_contact_us.js"

const dccontactus = new ContactUs()

describe('Datacom > Contact Us: Cypress Test', () => {

    beforeEach(() => {
        cy.readFile('../cypress-test/cypress/projects/datacom/testdata/datacom-testdata.json').then((testdata) => { 
            cy.visit(testdata.url)
        })
    })

    it('Verify Header and Text', () => {
        dccontactus.verifyHeader()
        dccontactus.verifyText()
    })

    it('Verify Navigation Tabs and Sub Tabs', () => {
        dccontactus.verifyNavItems()
        dccontactus.verifySubTabs('New Zealand', 10)
        dccontactus.verifySubTabs('Australia', 8)
        dccontactus.verifySubTabs('Asia', 3)
    })

    it('Verify Address, Number, and email for New Zealand', () => {
        dccontactus.verifyOfficeDetails('New Zealand')
    })

    it('Verify Address, Number, and email for Australia', () => {
        dccontactus.verifyOfficeDetails('Australia')
    })

    it('Verify Address, Number, and email for Asia', () => {
        dccontactus.verifyOfficeDetails('Asia')
    })
})