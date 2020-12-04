const reverse = require('./index');

test('Reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverse('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverse('  abcd')).toEqual('dcba  ');
});

test('Reverse reverses a string', () => {
  expect(reverse('a')).toEqual('a');
});

test('Reverse reverses a string', () => {
  expect(reverse('ab')).toEqual('ba');
});

test('Reverse reverses a string', () => {
  expect(reverse('abc')).toEqual('cba');
});
