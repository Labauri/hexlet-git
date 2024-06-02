import _ from 'lodash';

function getLastElement(array) {
    return _.last(array);
}

export default getLastElement;
console.log(getLastElement(['one', 'two']));