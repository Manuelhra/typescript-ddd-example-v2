describe('CourseCreator', () => {
    it('Should create a valid course', async () => {
        const repository = {
            save: jest.fn(),
        };

        const creator = new CourseCreator();
        const id = 'some-id';
        const name = 'some-name';
        const duration = 'some-duration';
        const expectedCourse = new Course(id, name, duration);

        await creator.run(id, name, duration);
        
        expect(repository.save).to.have.been.called(expectedCourse);
    })
})