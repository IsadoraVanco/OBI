// Exercicio 1

var N, M, K, P; 
var palavraTemp, senhaCorreta; 
var senha = [];
var palavras = [];
var possibilidades = [];
var ultimaLetra = ''; 

scanf("%d%d%d\n", "N", "M", "K"); 

scanf("%s\n", "palavraTemp");

for(var i = 0; i < palavraTemp.length; i++){
	senha.push(palavraTemp[i]);
}

for(var i = 0; i < M; i++){
	scanf("%s\n", "palavras[i]");
}

scanf("%d", "P");

// analisando
while(palavras.length > 1){
	var resultado = '';

	for(var i = 0; i < senha.length; i++){
	
		if(senha[i] == "#"){
			resultado += palavras[i];
		}else{
			resultado += senha[i];
		}

	}
}

senhaCorreta = possibilidades[P - 1];

printf("%s", senhaCorreta);