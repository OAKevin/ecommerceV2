import Home from "../../src/pages/Home";
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})
describe('Home Page', () => {
  it('should render without errors', () => {
    cy.visit('/');
    cy.contains('section');
    cy.contains('ul.navigation');
    cy.contains('img[src="sources/pic1.jpg"]');
  });
});
describe('Video Source Change', () => {
  it('should change video source when clicking on the first navigation element', () => {
    cy.visit('/');
    cy.get('li:nth-child(1)').click();
    cy.get('#slider').should('have.attr', 'src', 'sources/video1.mp4');
  });
});
describe('Video Source Change', () => {
  it('should change video source when clicking on the second navigation element', () => {
    cy.visit('/');
    cy.get('li:nth-child(2)').click();
    cy.get('#slider').should('have.attr', 'src', 'sources/video2.mp4');
  });
});
describe('Video Source Change', () => {
  it('should change video source when clicking on the third navigation element', () => {
    cy.visit('/');
    cy.get('li:nth-child(3)').click();
    cy.get('#slider').should('have.attr', 'src', 'sources/video3.mp4');
  });
});
