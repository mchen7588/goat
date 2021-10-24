import { groupBy, identity } from '../../src';

describe('identity', () => {
  test('given 1 parameter then return the parameter supplied to it', () => {
    // Given
    const one = identity(1);
    // When
    const actual = one();
    // Then
    expect(actual).toBe(1);
  });
  test('given a hello, world parameter then return the parameter supplied to it', () => {
    // Given
    const helloWorld = identity('hello, world');

    // When
    const actual = helloWorld();

    // Then
    expect(actual).toBe('hello, world');
  });
});

describe('groupBy', () => {
  test('given a list of students then it groups the list by name', () => {
    // Given
    const students = [
      { name: 'Yordis', score: 95 },
      { name: 'Yordis', score: 83 },
      { name: 'Abby', score: 100 },
      { name: 'Jack', score: 43 },
      { name: 'Jack', score: 100 },
    ];
    const byFirstName = groupBy((person) => person.name);

    // When
    const actual = byFirstName(students);

    // Then
    expect(actual).toEqual({
      Yordis: [
        { name: 'Yordis', score: 95 },
        { name: 'Yordis', score: 83 },
      ],
      Abby: [{ name: 'Abby', score: 100 }],
      Jack: [
        { name: 'Jack', score: 43 },
        { name: 'Jack', score: 100 },
      ],
    });
  });
});
