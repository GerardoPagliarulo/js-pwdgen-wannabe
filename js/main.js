// Richiesta Nome 
var name = prompt('Qual è il tuo nome?');

console.log(name);

// Richiesta Cognome
var surname = prompt('Qual è il tuo cognome?');

console.log(surname);

// Richiesta Colore 
var color = prompt('Qual è il tuo colore preferito?');

console.log(color);

document.getElementById('password').innerHTML = name + surname + color;