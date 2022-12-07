import HomePageUI from "../page_interfaces/homePageUI";
import DataFaker from "../utils/DataFaker";
require('cypress-xpath');

class HomePage {
    clickToSignInHeaderButton() {
        cy.get(HomePageUI.SIGN_IN_HEADER_BUTTON).click();
    }

    enterToUserNameTextbox() {
        cy.get(HomePageUI.SIGN_IN_USERNAME_TEXTBOX).type(DataFaker.getRandomUserName());
    }

    enterToPasswordTextbox() {
        cy.get(HomePageUI.SIGN_IN_PASSWORD_TEXTBOX).type("123456");
    }

    clickToSignUpButton() {
        cy.xpath(HomePageUI.SIGN_UP_BUTTON).click();
    }
}

export default HomePage;