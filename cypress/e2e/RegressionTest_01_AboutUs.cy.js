import HomePage from "../support/page_objects/HomePage";

describe('about us', () => {

  var homepage;

  beforeEach(function() {
    cy.visit('https://www.demoblaze.com');
    homepage = new HomePage();
  });

  it('verify clicking to close button will close popup', () => { 
    homepage.clickToHeaderMenu('About us');
    homepage.isVideoModalDisplayed();
    homepage.clickToVideoModalCloseButton();
  })
})