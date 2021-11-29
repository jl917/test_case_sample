import { rules } from './';

describe('rules', () => {
  test('rules has max-params', () => {
    // Assert
    expect(rules['max-params']).toBeTruthy();
  });
});
