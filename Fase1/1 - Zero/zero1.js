// Prova OBI 2021 - programação nivel 2
// exercicio Zero 
//versão Saci 1 (com métodos) //testada

var quantidadeNumeros;
scanf("%d\n", "quantidadeNumeros");

var numeros = [];
for(var i = 0; i < quantidadeNumeros; i++){
	var temp;
	scanf("%d\n", "temp");
	numeros.push(temp);
}

var numerosCertos = [];
for(var i = 0; i < numeros.length; i++){
	if(numeros[i] > 0){
		numerosCertos.push(numeros[i]);
	}else{
		numerosCertos.splice(-1, 1);
	}
}

var soma = 0;
for(var i = 0; i < numerosCertos.length; i++){
	soma += parseInt(numerosCertos[i], 10);
}

printf("%d", soma);