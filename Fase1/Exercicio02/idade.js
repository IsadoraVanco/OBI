// Prova OBI 2021 - Programação nivel 2
// Exercicio a Idade de Camila 
// versão de navegador testada
var idades = [];
for(var i = 0; i < 3; i++){
	// scanf("%d\n", "idades");
	var n = prompt("Idade:");
	idades.push(n);
}

var medio = 0;
if(idades[0] <= idades[1]){ 
	if(idades[0] <= idades[2]){ 
		if(idades[2] >= idades[1]){
			medio = idades[1];
		}else{
			medio = idades[2];
		}
	}else{
		medio = idades[0];
	}
}else{
	if(idades[1] <= idades[2]){ 
		if(idades[2] >= idades[0]){
			medio = idades[0];
		}else{
			medio = idades[2];
		}
	}else{
		medio = idades[1];
	}
}

// prinf("%d", "medio");
console.log("Camila, por ser a irmã do meio, tem " + medio + " anos.");