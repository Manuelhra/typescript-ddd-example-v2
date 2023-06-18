import httpStatus from "http-status"

describe('Invoke service Courses', () => {
    it('Create course and response status code should be 201 and the response should be empty', () => {
        cy.request({
        method: 'PUT',
        url: '/courses/ef8ac118-8d7f-49cc-abec-78e0d05af80a',
        body: { name: 'The best course', duration: "5 hours" },
        })
        .then((response) => {
            const { status, body } = response;
            expect(status).equal(httpStatus.CREATED);
            expect(body).to.equal(undefined);
        })
    })
})