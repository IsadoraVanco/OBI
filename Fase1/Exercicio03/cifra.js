// Prova OBI 2021 - programação nivel 2
// exercicio Cifra de Nlogonia
//versão Saci 1 (com métodos) //testada

var alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "z"];
var consoantes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "x", "z"];

var palavra;
scanf("%s", "palavra");

var soletrado = [];
for(var i = 0; i < palavra.length; i++){ 

	if(consoantes.indexOf(palavra[i]) >= 0){
		soletrado.push(palavra[i]);

		if((alfabeto.indexOf(palavra[i]) >= 0) && (alfabeto.indexOf(palavra[i]) <= 4)){ //de A E
			if(alfabeto.indexOf(palavra[i]) <= 2){
				soletrado.push("a");
			}else{
				soletrado.push("e");
			}
		}else if((alfabeto.indexOf(palavra[i]) >= 4) && (alfabeto.indexOf(palavra[i]) <= 8)){//de E I 
			if(alfabeto.indexOf(palavra[i]) <= 7){
				soletrado.push("e");
			}else{
				soletrado.push("i");
			}
		}else if((alfabeto.indexOf(palavra[i]) >= 8) && (alfabeto.indexOf(palavra[i]) <= 14)){ // de I O
			if(alfabeto.indexOf(palavra[i]) <= 11){
				soletrado.push("i");
			}else{
				soletrado.push("o");
			}
		}else if((alfabeto.indexOf(palavra[i]) >= 14) && (alfabeto.indexOf(palavra[i]) <= 20)){ //de O U
			if(alfabeto.indexOf(palavra[i]) <= 17){
				soletrado.push("o");
			}else{
				soletrado.push("u");
			}
		}else{ // U 
			soletrado.push("u");	
		}

		if(alfabeto.indexOf(palavra[i]) === 24){
			soletrado.push(palavra[i]);
		}else{
          var temp = consoantes.indexOf(palavra[i]);
			soletrado.push(consoantes[temp + 1]);
		}

	}else{
		soletrado.push(palavra[i]);
	}
}

for(var i = 0; i < soletrado.length; i++){
	printf("%s", soletrado[i]);
}