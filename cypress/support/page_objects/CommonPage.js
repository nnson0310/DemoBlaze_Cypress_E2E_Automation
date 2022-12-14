import CommonPageUI from "../page_interfaces/CommonPageUI";
var format = require( '@stdlib/string-format' );

class CommonPage {

    clickToSignInHeaderButton() {
        cy.get(CommonPageUI.SIGN_IN_HEADER_BUTTON).click();
    }

    enterToUserNameTextbox(username) {
        cy.get(CommonPageUI.SIGN_IN_USERNAME_TEXTBOX).type(username);
    }

    enterToPasswordTextbox(password) {
        cy.get(CommonPageUI.SIGN_IN_PASSWORD_TEXTBOX).type(password);
    }

    clickToSignUpButton() {
        cy.xpath(CommonPageUI.SIGN_UP_BUTTON).click();
    }

    verifySignInAlert(expectedText) {
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contains(expectedText);
        })
    }

    clickToHeaderMenu(menu) {
        cy.xpath(format(CommonPageUI.HEADER_MENU, menu)).click();
    }

    isVideoModalDisplayed() {
        cy.get(CommonPageUI.VIDEO_MODAL).should('be.visible');
    }

    clickToVideoModalCloseButton() {
        cy.get(CommonPageUI.VIDEO_MODAL).then(($modal) => {
            cy.wrap($modal).find('button.close').click();
        })
    }
}

export default CommonPage;