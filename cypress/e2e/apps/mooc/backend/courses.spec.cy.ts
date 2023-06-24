import httpStatus from "http-status";

describe('Invoke service Courses', () => {
    it('Create course and response status code should be 201 and the response should be empty', () => {
        const id: string = 'ef8ac118-8d7f-49cc-abec-78e0d05af80a';
        const name: string = 'The best';
        const duration: string = '5 hours';

        cy.request({
        method: 'PUT',
        url: '/courses/ef8ac118-8d7f-49cc-abec-78e0d05af80a',
        body: { id, name, duration },
        })
        .then((response) => {
            const { status, body } = response;
            expect(status).equal(httpStatus.CREATED);
            expect(body).to.equal(undefined);
        })
    });

    it('The request data to create a course is invalid, and the response status should be 422."', () => {
        const id: string = 'ef8ac118-8d7f-49cc-abec-78e0d05af80a';
        const name: string = 'The best';
        const duration = 5000;

        cy.request({
            method: 'PUT',
            url: '/courses/ef8ac118-8d7f-49cc-abec-78e0d05af80a',
            body: { id, name, duration },
            failOnStatusCode: false,
        })
        .its('status')
        .should('equal', httpStatus.UNPROCESSABLE_ENTITY);
    })
})