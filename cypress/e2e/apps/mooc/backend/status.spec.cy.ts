describe('Status server',() => {
  it('Get 200 on request /status', () => {
    cy.request('GET', 'http://localhost:5000/status')
    .then((response) => {
      expect(response.status).to.equal(200);
    });
  })
})