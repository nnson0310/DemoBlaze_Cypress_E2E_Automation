import HomePage from "../support/page_objects/HomePage";

describe('empty spec', () => {

  var homepage;

  beforeEach(function() {
    cy.visit('https://www.demoblaze.com');
    homepage = new HomePage();
  });

  it('passes', () => { 
    homepage.clickToSignInHeaderButton();
    homepage.enterToUserNameTextbox();
    homepage.enterToPasswordTextbox();
    homepage.clickToSignUpButton();
  })
})