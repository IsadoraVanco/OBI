// Prova OBI 2021 - programação nivel 2
// exercicio a Idade de Camila
//versão Saci 1 (com métodos) // testada

var idades = [];
for(var i = 0; i < 3; i++){
	scanf("%d\n", "idades[i]");
	idades.push(i);
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

printf("%d", medio);