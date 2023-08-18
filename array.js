const hobbies = ['jogar vôlei','cozinhar','dormir'];
console.log(hobbies)
console.log(hobbies[0]);
console.log(hobbies[1]);
console.log(hobbies[2]);

hobbies[2] = 'comer';
console.log(hobbies);

console.log(hobbies.length);

hobbies.push('ler livros');
console.log(hobbies);

hobbies.pop();
console.log(hobbies);

let posicao = hobbies.indexOf('jogar vôlei');
hobbies.splice(posicao, 1);
console.log(hobbies)

const hobbiesLealo = ['cantar','comer', 'jogar vôlei', 'escutar música'];

const todosOsHobbies =
hobbies.concat(hobbiesLealo);
console.log(todosOsHobbies);

hobbiesMusicais = ['cantar', 'escutar música'];
hobbiesEsportivos = ['jogar vôlei'];

const categoriasDeHobbies = [hobbiesMusicais, hobbiesEsportivos];
console.log(hobbiesMusicais[1]);

console.log(categoriasDeHobbies[0][1]);