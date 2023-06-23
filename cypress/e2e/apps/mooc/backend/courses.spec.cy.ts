import httpStatus from "http-status";

import { CreateCourseRequestMother } from "../../../../../test/context/mooc/courses/application/CreateCourseRequestMother";

describe('Invoke service Courses', () => {
    it('Create course and response status code should be 201 and the response should be empty', () => {
        const request = CreateCourseRequestMother.random();

        cy.request({
        method: 'PUT',
        url: '/courses/ef8ac118-8d7f-49cc-abec-78e0d05af80a',
        body: request,
        })
        .then((response) => {
            const { status, body } = response;
            expect(status).equal(httpStatus.CREATED);
            expect(body).to.equal(undefined);
        })
    });

    it('The request data to create a course is invalid, and the response status should be 422."', () => {
        const temp = CreateCourseRequestMother.random();
        const request = { ...temp, duration: CreateCourseRequestMother.invalidCourseDurationType() };

        cy.request({
            method: 'PUT',
            url: '/courses/ef8ac118-8d7f-49cc-abec-78e0d05af80a',
            body: request,
            failOnStatusCode: false,
        })
        .its('status')
        .should('equal', httpStatus.UNPROCESSABLE_ENTITY);
    })
})