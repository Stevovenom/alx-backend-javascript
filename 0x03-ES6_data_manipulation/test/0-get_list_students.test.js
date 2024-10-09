import getListStudents from '../0-get_list_students.js';

describe('getListStudents function', () => {
	test('should return an array of 3 students', () => {
		const students = getListStudents();
		expect(students).toHaveLength(3);
	});

	test('should return correct student objects', () => {
		const students = getListStudents();
		expect(students).toEqual([
			{id: 1, firstName: 'Guillaume', location: 'San Francisco' },
			{id: 2, firstName: 'James', location: 'Columbia'},
			{id: 5, firstName: 'Serena', location: 'San Francisco'},
		]);
	});
});
