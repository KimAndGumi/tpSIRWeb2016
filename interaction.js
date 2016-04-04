
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
	this.startx = 0;
	this.starty = 0;
	this.endx = 0;
	this.endy = 0;
	this.onClick = false;
	this.canvas = canvas;
	this.interactor = interactor;
	// Developper les 3 fonctions gérant les événements
	this.clic = function(evt){
		//console.log("clic");
		this.startx = getMousePosition(this.canvas,evt).x
		this.starty = getMousePosition(this.canvas,evt).y
		this.onClick = true;
		interactor.onInteractionStart(this);
		//console.log("x = "+this.startx+"\ny = "+this.starty);
	}.bind(this);
	
	this.drag = function(evt){
		if (this.onClick){
		//console.log("drag");	
		this.endx = getMousePosition(this.canvas,evt).x
		this.endy = getMousePosition(this.canvas,evt).y
		interactor.onInteractionUpdate(this);
		/*console.log("x = "+this.startx+" to "+this.endx+
		"\ny = "+this.starty+" to "+this.endy);*/
		}
	}.bind(this);
	
	this.drop = function(evt){
		//console.log("drop");
		
		this.endx = getMousePosition(this.canvas,evt).x
		this.endy = getMousePosition(this.canvas,evt).y
		this.onClick = false;
		interactor.onInteractionEnd(this);
		/*console.log("x = "+this.startx+" to "+this.endx+
		"\ny = "+this.starty+" to "+this.endy);*/
	}.bind(this);
	// Associer les fonctions précédentes aux évènements du canvas.
	this.getInitX = function(){
		return this.startx;
	}
	this.getInitY = function(){
		return this.starty;
	}
	this.getFinalX = function(){
		return this.endx;
	}
	this.getFinalY = function(){
		return this.endy;
	}
	canvas.addEventListener('mousedown', this.clic, false);
	canvas.addEventListener('mousemove', this.drag, false);
	canvas.addEventListener('mouseup', this.drop, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



