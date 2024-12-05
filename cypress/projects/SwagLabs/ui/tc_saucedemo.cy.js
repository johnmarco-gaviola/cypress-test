import { signIn } from "../page_object_model/sign_in.js"
import { homepage } from "../page_object_model/homePage.js"
import { cartpage } from "../page_object_model/cart.js"
import { checkout } from "../page_object_model/checkout.js"

const signin = new signIn()
const home = new homepage()
const cart = new cartpage()
const chkout = new checkout()

describe('SwagLabs Cypress Test', () => {

    beforeEach(() => {
        cy.readFile('../cypress-test/cypress/projects/SwagLabs/testdata/swaglabs-testdata.json').then((testdata) => {
            cy.visit(testdata.login.baseUrl)
            signin.enterUsername(testdata.login.username)
            signin.enterPassword(testdata.login.password)
            signin.clickLogin()
        })
    })

    it('Verify Header is Visible', () => {
        home.headerIsVisible()
    })

    it('Add item and proceed to checkout', () => {
        cy.readFile('../cypress-test/cypress/projects/SwagLabs/testdata/swaglabs-testdata.json').then((testdata) => {
            home.addItem('BackPack')
            home.addItem('BikeLight')
            home.addItem('Jacket')
            home.clickCart()
            cart.verifyCart('BackPack')
            cart.verifyCart('BikeLight')
            cart.verifyCart('Jacket')
            cart.clickCheckout()
            chkout.firstName(testdata.data.firstName)
            chkout.lastName(testdata.data.lastName)
            chkout.zip(testdata.data.zip)
            chkout.clickContinue()
            chkout.clickFinish()
            chkout.verifySuccess()
        })
    })

    it('Verify sort functionality by name (A-Z)', () => {
        home.verifySortAZ()
    })

    it('Verify sort functionality by name (Z-A)', () => {
        home.verifySortZA()
    })

    it('Verify sort functionality by Price (Low to High)', () => {
        home.verifySortLoHi()
    })

    it('Verify sort functionality by Price (High to Low)', () => {
        home.verifySortHiLo()
    })

})