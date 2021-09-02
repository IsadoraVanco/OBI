// Exercicio 2

var S, A, B;
var total = 0;
scanf("%d\n", "S");
scanf("%d\n", "A");
scanf("%d\n", "B");

for(var i = A; i <= B; i++){
	var n = i.toString();
	var soma = 0;

	for(var x = 0; x <= n.length - 1; x++){
		var inteiro = parseInt(n[x], 10); 
		soma += inteiro;
	}

	if(soma == S){
		total++;
	}
}

printf("%d", total);