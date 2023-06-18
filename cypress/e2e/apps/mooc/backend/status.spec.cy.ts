import httpStatus from 'http-status';

describe('Invoke service Status',() => {
  it('The response staus code should be 200', () => {
    cy.request('GET', '/status')
    .its('status')
    .should('equal', httpStatus.OK);
  });
});