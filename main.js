var listaCognomi = ["Rossi", "Bianchi", "Verdi", "Neri", "Viola"]
console.log(listaCognomi);
var cognomeUtente = prompt("Qual è il tuo cognome?")
console.log(cognomeUtente);
listaCognomi.push(cognomeUtente)
console.log(listaCognomi);
var listaOrdinata = listaCognomi.sort();
console.log(listaOrdinata);
for (var i = 0; i < listaOrdinata.length; i++) {
    var elementoLista = listaOrdinata[i];
    if (elementoLista == cognomeUtente) {
        console.log(i);
    }
}
// var elementoLista = listaCognomi[i];
// console.log(elementoLista);
// var elementoSuccessivo = listaCognomi[i+1];
// console.log(elementoSuccessivo);
// for (var i = 0; i < listaCognomi.length; i++) {
//     // var elementoLista = listaCognomi[i];
//     // var elementoSuccessivo = listaCognomi[i+1];
//     if (elementoLista[0] > elementoSuccessivo[0]) {
//         elementoLista = listaCognomi[i+1];
//     }
// }
