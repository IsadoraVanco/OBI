var numeroIngredientes, numeroNaoCombinam;
var naoCombinam = [];

scanf("%d%d\n", "numeroIngredientes", "numeroNaoCombinam");

var total = 0;
for(var i = 1; i <= numeroIngredientes; i++){
	total += i;
}

var totalNaoCombinam = 0;
for(var i = 1; i <= numeroNaoCombinam; i++){
	for(var j = 1; j < i; j++){
		totalNaoCombinam += j;
	}
}

combinacoes = (total - totalNaoCombinam) + 1;

printf("%d", combinacoes);