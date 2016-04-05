
// Implémenter ici les 4 classes du modèle.
function Drawing() {
	this.figs = new Array();
	
	this.addFigure = function(fig){
		this.figs.push(fig);
	}.bind(this);
	
	this.getForms = function(){
		return this.figs;
	}.bind(this);
}

function Figure(couleur, epaisseur ) {
	this.color = couleur;
	this.strokeWidth = epaisseur;
	
	/*Figure.prototype.getColor = function(){
		//console.log(this.color)
		return Figure.prototype.color;
	}.bind(this)
	Figure.prototype.getWidth = function(){
		return Figure.prototype.strokeWidth
	}.bind(this); */
}

function Rectangle(debutX,debutY,finX,finY,epaisseur,couleur) {
	Figure.call(couleur,epaisseur);
	//console.log(this.color)
	//console.log(this.strokeWidth)
	this.startX = debutX;
	this.startY = debutY;
	this.endX = finX;
	this.endY = finY;
	//
	this.color = couleur;
	this.strokeWidth = epaisseur;
	this.getColor = function(){
		//console.log(this.color)
		return this.color;
	}.bind(this)
	this.getWidth = function(){
		return this.strokeWidth
	}.bind(this); 
	//
	this.getInitX = function(){
		return this.startX;
	}.bind(this)
	this.getInitY = function(){
		return this.startY;
	}.bind(this)
	this.getFinalX = function(){
		//return this.longueur;
		return this.endX-this.startX
	}.bind(this)
	this.getFinalY = function(){
		return this.endY-this.startY;
	}.bind(this)
	
}
Rectangle.prototype = new Figure();

function Line(debutX,debutY,finX, finY,epaisseur,couleur) {
	Figure.call(couleur, epaisseur);
	this.startX = debutX;
	this.startY = debutY;
	this.endX = finX;
	this.endY = finY;
	//
	this.color = couleur;
	this.strokeWidth = epaisseur;
	this.getColor = function(){
		//console.log(this.color)
		return this.color;
	}.bind(this)
	this.getWidth = function(){
		return this.strokeWidth
	}.bind(this); 
	//
	this.getInitX = function(){
		return this.startX;
	}.bind(this)
	this.getInitY = function(){
		return this.startY;
	}.bind(this)
	this.getFinalX = function(){
		return this.endX;
	}.bind(this)
	this.getFinalY = function(){
		return this.endY;
	}.bind(this)
}
Line.prototype = new Figure();
// N'oubliez pas l'héritage !
