// Prova OBI 2021 - programação nivel 2
// exercicio Zero 
//versão Saci 2 (sem métodos) 

var quantidadeNumeros;
scanf("%d\n", "quantidadeNumeros");

var numeros;
var numerosCertos = [];
var soma = 0;

for(var i = 0; i < quantidadeNumeros; i++){
	scanf("%d\n", "numeros");
   
   if(numeros > 0){
		if(numerosCertos.length === 0){
			numerosCertos[0] = numeros;
		}else{
			numerosCertos[i] = numeros;
		}
	}else{
		if(numerosCertos.length === 0){
			numerosCertos[0] = 0;
		}else{
			numerosCertos[-1] = 0;
           numerosCertos[i] = 0;
		}		
	}
}

for(var i = 0; i < numerosCertos.length; i++){
	soma += parseInt(numerosCertos[i], 10);
}

printf("%d", soma);