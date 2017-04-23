import test from 'ava';
import reverser from '../src/index.js';
const rev = new reverser();
test('reverse hello', t => {
  t.is(rev.reverse('hello'), 'olleh');
});
