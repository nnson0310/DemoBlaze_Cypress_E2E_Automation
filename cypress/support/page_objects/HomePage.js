import HomePageUI from "../page_interfaces/homePageUI";

class HomePage {
    clickToSignInHeaderButton() {
        cy.get(HomePageUI.SIGN_IN_HEADER_BUTTON).click();
    }

    enterToUserNameTextbox(username) {
        cy.get(HomePageUI.SIGN_IN_USERNAME_TEXTBOX).type(username);
    }

    enterToPasswordTextbox(password) {
        cy.get(HomePageUI.SIGN_IN_PASSWORD_TEXTBOX).type(password);
    }

    clickToSignUpButton() {
        cy.xpath(HomePageUI.SIGN_UP_BUTTON).click();
    }

    verifySignInAlert(expectedText) {
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contains(expectedText);
        })
    }
}

export default HomePage;