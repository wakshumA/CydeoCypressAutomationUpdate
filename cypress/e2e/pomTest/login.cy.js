import { auth } from '../../support/pages/auth'
import { navigateTo } from '../../support/pages/navigation'

describe('Auth: Login user with different ways', () => {
    // navigation to the test page
    beforeEach('navigate to login page', () => {
        cy.clearAllCookies();
        navigateTo.loginPage(); // this function we called it from our POM
    })

    it('Happy Path scenario using POM function', () => {
       // auth.login('hardcoded variables') -- not a good way
       cy.fixture('user').then((user) => {
        auth.login(user.user2.username, user.user2.password);
       })
       // let's call our custom command to verify the text
       cy.textExists('You logged into a secure area!');
       auth.logout();
    } )
} )