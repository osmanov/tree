import verticals from '../verticals.json';
import categories from '../categories.json';
import courses from '../courses.json';
import {Parse} from './index';

const data = Parse(verticals, categories, courses);

test('Parse util result has a valid vertical structure', () => {
	data.forEach(vertical => {
		expect(Object.keys(vertical)).toEqual(["Id","Name","Opened","Categories"]);
		expect(vertical.Categories.length).toBeTruthy();
	})
});

test('Parse util result has a valid categories structure', () => {
	data.forEach(vertical => {
		vertical.Categories.forEach(category=>{
			expect(Object.keys(category)).toEqual(["Id","Name","State","Opened","Courses"]);
			expect(category.Courses.length).toBeTruthy();
		})
	})
});

test('Parse util result has a valid courses structure', () => {
	data.forEach(vertical => {
		vertical.Categories.forEach(category=>{
			category.Courses.forEach(course=>{
				expect(Object.keys(course)).toEqual(["Id","Name","Author","State"]);
				expect(category.Courses.length).toBeTruthy();
			})
		})
	})
});

test('Parse util result has a valid snapshot', () => {
	expect(data).toMatchSnapshot();
});