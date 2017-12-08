import verticals from '../verticals.json';
import categories from '../categories.json';
import courses from '../courses.json';
import {Union} from './index';

test('Union', () => {
    expect(Union(verticals,categories,courses)).toBe(2);
  });