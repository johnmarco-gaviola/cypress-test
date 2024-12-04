import { beforeEach } from "mocha"
import { signIn } from "../pom_login/sign_in.js"
import { homepage } from "../pom_home_page/homePage.js"

const signin = new signIn()
const home = new homepage()

describe('Datacom > Contact Us: Cypress Test', () => {

    before(() => {
        cy.readFile('../cypress-test/cypress/projects/SwagLabs/testdata/swaglabs-testdata.json').then((testdata) => {
            cy.visit(testdata.url)
            signin.enterUsername(testdata.username)
            signin.enterPassword(testdata.password)
            signin.clickLogin()
        })
    })

    it('Verify Header is Visible', () => {
        home.headerIsVisible()
    })

    it('Add to cart', () => {

    })

})