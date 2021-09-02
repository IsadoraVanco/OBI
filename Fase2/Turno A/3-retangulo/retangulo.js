var numeroArvores, circunferencia;
var coordenadas = [];
var podeRetangulo = "N";

scanf("%d\n", "numeroArvores");

for(var i = 0; i < numeroArvores; i++){
	scanf("%d", "coordenadas[i]");
	circunferencia += coordenadas[i];
}

// var diametro = 2 * (circunferencia / (2 * Math.PI));
// var lado = (circunferencia - diametro) / 2; 
var lado = Math.max(coordenadas);
var posicao = coordenadas.indexOf(lado);
var 
for(var i = posicao + 1; ; i++){
	if(i == posicao){
		break;
	}
	if(i >= numeroArvores - 1){
		i = 0;
	}

	
}

// for(var i = 0; i < numeroArvores; i++){
// 	if(coordenadas[i+1] - coordenadas[i] === lado ||
// 	coordenadas[i+1] - coordenadas[i] === diametro){
// 		podeRetangulo = "S";
// 	} 
// }

printf("%s", podeRetangulo);