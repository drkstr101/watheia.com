import { site } from '@waweb/content';

describe('home', () => {
  beforeEach(() => cy.visit('/'));

  it('title SHOULD display company tagline', () => {
    // Custom command example, see `../support/commands.ts` file
    // cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    cy.get('h1').should('have.text', site.description);
  });
});
