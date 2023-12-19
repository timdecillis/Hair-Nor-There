import { compose } from 'redux';

console.log(compose)
const makeLouder = string => string.toUpperCase();
const repeatThree = string => string.repeat(3);
const embolden = string => string.bold();

const composed = compose(makeLouder, repeatThree, embolden);

console.log(composed('hello'));