import test from 'ava';
import reverser from './index.js';

test('reverse hello', t => {
  t.is(reverser().reverse('hello'), 'olleh');
});
