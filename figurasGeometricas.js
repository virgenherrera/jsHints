function figuraGeometrica(ancho,alto){
	this.ancho= ancho;
	this.alto= alto;
};

function triangulo(ancho,alto){
	this.prototype= Object.create(figuraGeometrica.prototype);
	figuraGeometrica.call(this,ancho,alto);
	this.area= function (){
		return(this.ancho*this.alto)/2;
	};
};


function circulo(radio){
	this.prototype= Object.create(figuraGeometrica.prototype);
	figuraGeometrica.call(this,2*radio, 2*radio);
	this.radio= radio;
	this.diametro= this.alto;
	this.area= function(){
		return (Math.PI*Math.pow(this.radio,2));
	};
	
};

function rectangulo(ancho, alto){
	this.prototype= Object.create(figuraGeometrica.prototype);
	figuraGeometrica.call(this,ancho,alto);
	this.area= function(){
		return (this.ancho*this.alto);
	};
};

function cuadrado(lado){
	this.prototype= Object.create(rectangulo.prototype);
	rectangulo.call(this,lado,lado);
};

var Circulo = new circulo(9);
var Rectangulo = new rectangulo(4,5);
var Cuadrado = new cuadrado(5);
var Triangulo= new triangulo(6,8);

console.log(
	Circulo.radio,Circulo.diametro,Circulo.area()
);
console.log(
	Rectangulo.alto,Rectangulo.ancho, Rectangulo.area()
);
console.log(
	Cuadrado.alto, Cuadrado.ancho, Cuadrado.area()
);
console.log(
	Triangulo.alto, Triangulo.ancho, Triangulo.area()
);
console.log(
	Triangulo,Circulo,Cuadrado,Rectangulo
);