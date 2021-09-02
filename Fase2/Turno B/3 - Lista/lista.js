// Exercicio 3

var N;
var L = [];
// var novo = [];
var numeroDePalindromos = 0;

scanf("%d\n", "N");

for(var i = 0; i < N; i++){
	scanf("%d", "L[i]");
}

function analisaPalindromo(array = []){
	var palindromo = false;
	for(var i = 0; i < array.length; i++){
		if(array[i] == array[array.length - 1 - i]){
			palindromo = true;
		}else{
			palindromo = false;
			break;
		}
	}
	
	if(palindromo){
		numeroDePalindromos++;
	}
}


function somaItens(array = [], indice){
	var possivel = [];
	for(var i = 0; i < array.length; i++){
		possivel = [];

		if(indice == null){
			for(var j = 0; j < array.length; j++){
				possivel.push(array[j]);
			}
			analisaPalindromo(possivel);
			break;
		}else{
			if(i > 0){
				for(var antes = 0; antes < i; antes++){
					possivel.push(array[antes]);
				}
			}

			if(i < N - 2 && (i > indice || i < indice - 2)){
				possivel.push(array[i] + array[i+1]);
			}
			
			for(var depois = i; depois < N; depois++){
				possivel.push(array[depois]);
			}

			analisaPalindromo(possivel);
		}
	}
}

somaItens(L);

// corre a lista de numero
for(var i = 0; i < N; i++){
	somaItens(L, i);
	for(j = L.length; j > i; j--){
		somaItens(L, j);
	}
}

printf("%d", "numeroDePalindromos");