export default class reverser {
  constructor() {

  }
  reverse(_input) {
    let sp = _input.split();
    let rev = sp.reverse();
    let fin = rev.join()
    return fin;
  }

}