import HomePage from "../support/page_objects/HomePage";
import DataFaker from "../support/utils/DataFaker";

describe('sign up', () => {

  var homepage;

  beforeEach(function() {
    cy.visit('https://www.demoblaze.com');
    homepage = new HomePage();
  });

  it('sign up successfully', () => { 
    homepage.clickToSignInHeaderButton();
    homepage.enterToUserNameTextbox(DataFaker.getRandomUserName());
    homepage.enterToPasswordTextbox("123456");
    homepage.clickToSignUpButton();
    homepage.verifySignInAlert("Sign up successfully.");
  });

  it('sign up with blank username and blank password', () => { 
    homepage.clickToSignInHeaderButton();
    homepage.enterToUserNameTextbox(`{backspace}`);
    homepage.enterToPasswordTextbox(`{backspace}`);
    homepage.clickToSignUpButton();
    homepage.verifySignInAlert("Please fill out Username and Password.");
  })
})