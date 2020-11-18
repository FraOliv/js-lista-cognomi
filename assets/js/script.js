// definisco una variabile per chiedere il cognome all'utente


var cognomeUtente = prompt("inserisci il tuo cognome");


var firstLetter = cognomeUtente.slice(0,1);
var firstLetterCap = firstLetter.toUpperCase();
var restoCognome = cognomeUtente.slice(1, cognomeUtente.length);
cognomeUtente = firstLetterCap + restoCognome.toLowerCase();

//definisco una variabile [array] con all'interno una lista di cognomi in ordine randomico

var listaCognomi = [ "Bianchi" , "Rossi" , "Duzioni" , "Balsano" , "Verdi" ];

//inserisco il cognome dell'utente nell'array

listaCognomi.push(cognomeUtente);

//testo con la console che tutto funzioni
console.log(listaCognomi[0]);
console.log(listaCognomi[1]);
console.log(listaCognomi[2]);
console.log(listaCognomi[3]);
console.log(listaCognomi[4]);
console.log(listaCognomi[5]);

//ordino alfabeticamente la lista di cognomi utilizzando "Sort"

listaCognomi.sort();

console.log(listaCognomi);

//calcolo la posizione

for (var i = 0; i < listaCognomi.length; i++) {
1
//Stampo la lista dei cognomi
var Surnames = document.getElementById("Surnames").innerHTML;
document.getElementById("Surnames").innerHTML = Surnames + "<li>" + listaCognomi[i] + "</li>";

//Surnames.innerHTML += "<li>" + listaCognomi[i] +"</li>";


if (cognomeUtente == listaCognomi[i]) {

//stampo la posizione del cognome inserita dall'utente

    position.innerHTML = "Il cognome inserito si trova nella posizione: " + (i +1 );
}

}




  

