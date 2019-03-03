function wartosc (x) {
	document.getElementById("wyswietlacz").value += x ;

}

function oblicz () {
	var wyswietlacz = document.getElementById("wyswietlacz").value;
	document.getElementById("wyswietlacz").value = eval(wyswietlacz);
}

function wyczysc() {
	document.getElementById("wyswietlacz").value = "";
}