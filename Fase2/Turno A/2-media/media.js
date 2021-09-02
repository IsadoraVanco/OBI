var A, B, C;
scanf("%d%d", "A", "B");

var media;
media = Math.trunc((A + B) / 3); 

var menor = Math.min([A, B]);
var medio;

if(menor == A){
	medio = B;
}else{
	medio = A;
}

for(var i = 0; i != menor;){
	C = i;

	if(medio > C && menor < C){
		medio = C;
	}else if(menor >= C){
		medio = menor;
		menor = C;
	}

	if((A + B + C) / 3 == medio){
		break;
	}

	if(media < 0){
		i--;
	}else{
		i++;
	}
}

printf("%d", C);