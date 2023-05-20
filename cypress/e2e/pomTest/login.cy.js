import { auth } from '../../support/pages/auth'
import { navigateTo } from '../../support/pages/navigation'

describe('Auth: Login user with different ways', () => {
    // navigation to the test page
    beforeEach('navigate to login page', () => {
        cy.clearAllCookies();
        navigateTo.loginPage(); // this function we called it from our POM
    })
} )