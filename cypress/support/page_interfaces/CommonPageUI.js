const SIGN_IN_HEADER_BUTTON = "a#signin2";
const SIGN_IN_USERNAME_TEXTBOX = "input#sign-username";
const SIGN_IN_PASSWORD_TEXTBOX = "input#sign-password";
const SIGN_UP_BUTTON = "//button[text()='Sign up']";
const HEADER_MENU = "//div[@id='navbarExample']//a[contains(text(), '%s')]";
const VIDEO_MODAL = "div#videoModal";

class CommonPageUI {
    static get SIGN_IN_USERNAME_TEXTBOX() {
        return SIGN_IN_USERNAME_TEXTBOX;
    }

    static get SIGN_IN_PASSWORD_TEXTBOX() {
        return SIGN_IN_PASSWORD_TEXTBOX;
    }

    static get SIGN_IN_HEADER_BUTTON() {
        return SIGN_IN_HEADER_BUTTON;
    }

    static get SIGN_UP_BUTTON() {
        return SIGN_UP_BUTTON;
    }

    static get HEADER_MENU() {
        return HEADER_MENU;
    }

    static get VIDEO_MODAL() {
        return VIDEO_MODAL;
    }
}

export default CommonPageUI;