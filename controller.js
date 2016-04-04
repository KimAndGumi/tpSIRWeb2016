
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	dnd = new DnD(canvas, this);
	dr = new Drawing();
	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart=function(dnd){
		/*if (this.currEditingMode){
			this.currentShape = new Line(,this.currLineWidth,this.Colour)
		}else{
			this.currentShape = new Rectangle(,this.currLineWidth,this.Colour)
		}*/
	}
	
	this.onInteractionUpdate=function(dnd){
		ctx.fillStyle = '#F0F0F0'; // set canvas' background color
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		if (this.currEditingMode){
			fig = new Line(dnd.getInitX(),dnd.getInitY(),dnd.getFinalX(),dnd.getFinalY())
		}else{
			fig = new Rectangle(dnd.getInitX(),dnd.getInitY(),dnd.getFinalX(),dnd.getFinalY())
		}
		//Dessiner l'ensemble Drawing
		dr.paint(ctx)
		fig.paint(ctx)
	}
	
	this.onInteractionEnd=function(dnd){
		ctx.fillStyle = '#F0F0F0'; // set canvas' background color
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		if (this.currEditingMode){
			fig = new Line(dnd.getInitX(),dnd.getInitY(),dnd.getFinalX(),dnd.getFinalY())
		}else{
			fig = new Rectangle(dnd.getInitX(),dnd.getInitY(),dnd.getFinalX(),dnd.getFinalY())
		}
		//fig.paint(ctx)
		dr.addFigure(fig)
		dr.paint(ctx)
	}
};


