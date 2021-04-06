const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (url_api) => {
    try {
        console.time();

        const data = await fetchData(url_api);
        const { count } = data.info;
        const { id } = data.results[0];

        const character = await fetchData(`${url_api}${id}`);
        const { name } = character;

        const origin = await fetchData(character.origin.url);
        const { dimension } = origin;
        
        console.timeEnd()
        
        console.log(count);
        console.log(name);
        console.log(dimension);
    } catch (error) {
        console.error(error);
    }
}
console.log('Before');
anotherFunction(API);
console.log('After');