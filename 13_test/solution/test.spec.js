const test = require('./test');

describe('test', () => {
  test('First test description', () => {
    // Replace this comment with any other necessary code, and update the expect line as necessary

    expect(test()).toBe('');
  });
  
  test.skip('Second test description', () => {
    // Replace this comment with any other necessary code, and update the expect line as necessary

    expect(test()).toBe('');
  });
});
