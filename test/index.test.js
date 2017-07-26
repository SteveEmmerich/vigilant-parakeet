import test from 'ava';
import reverser from '../src/index.js';
/*const rev = new reverser();
test('reverse hello', t => {
  t.is(rev.reverse('hello'), 'olleh');
});*/
test('reverse', t => {
  t.is(reverser('hello'), 'olleh')
  t.is(reverser('goodbye'), 'eybdoog')
})
