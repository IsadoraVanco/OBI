// Prova OBI 2021 - programação nivel 2
// exercicio Zero 

//testada (com métodos e versão de navegador)

var quantidadeNumeros = prompt("Quantidade de números:");

var numeros = [];
for(var i = 0; i < quantidadeNumeros; i++){
	var temp = prompt("Número:");
	numeros.push(temp);
}

var numerosCertos = [];
for(n in numeros){
	if(numeros[n] > 0){
		numerosCertos.push(numeros[n]);
	}else{
		numerosCertos.splice(-1, 1);
	}
}

var soma = 0;
for(var i = 0; i < numerosCertos.length; i++){
	soma += parseInt(numerosCertos[i]);
}

console.log("A soma dos números é de " + soma);