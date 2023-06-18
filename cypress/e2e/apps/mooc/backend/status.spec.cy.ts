describe('Status server',() => {
  it('Get 200 on request /status', () => {
    cy.request('GET', '/status')
    .then((response) => {
      expect(response.status).to.equal(200);
      assert.equal(response.status, 400, 'Match');
    });
  })
})