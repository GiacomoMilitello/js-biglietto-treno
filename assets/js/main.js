let km = prompt('Inserire chilometri da percorrere');
console.log("chilometri:", km);
let age = prompt('Inserire età del passeggero');
console.log("età:", age);
let price = (km * 0.21);
console.log("prezzo senza sconti:", price)

if (age>=18 && age<=65){
    document.getElementById('price-generated').innerHTML='<p> Prezzo:' + " " + price1 + '</p>';
} else if (age<18){
    const  juniorDiscount= price * 0.2;
    const juniorPrice = price - juniorDiscount;
    const juniorFormatted = juniorPrice.toFixed(2);
    document.getElementById('price-generated').innerHTML='<p> Prezzo:' + " " + juniorFormatted + '</p>';
    console.log("prezzo scontato per minorenni:", juniorFormatted)
} else {
    const  seniorDiscount= price * 0.4;
    const seniorPrice = price - seniorDiscount;
    const seniorFormatted = seniorPrice.toFixed(2);
    document.getElementById('price-generated').innerHTML='<p> Prezzo:' + " " + seniorFormatted + '</p>';
    console.log("prezzo scontato per over65:", seniorFormatted)
}

