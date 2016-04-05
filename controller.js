
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas/*, butLine, butRect, spinner, colorButton*/) {
	//var currEditingMode=this.selectColor();
	//var currLineWidth = this.selectLineWidth();
	//var currEditingMode = editingMode.rect;
	//this.currLineWidth = 5
	//this.currColour = '#000000';
	//var currColour = this.selectColor();
	this.currentShape = 0;
	//var startX = 100
	//var startY = 100

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	dnd = new DnD(canvas, this);
	//dr = new Drawing();
	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart=function(dnd){
		/*if (this.currEditingMode){
			this.currentShape = new Line(,this.currLineWidth,this.Colour)
		}else{
			this.currentShape = new Rectangle(,this.currLineWidth,this.Colour)
		}*/
		//console.log(this.currEditingMode)
		if (document.getElementById('butRect').checked){
			this.currentShape = new Rectangle(dnd.getInitX(),dnd.getInitY(),0,0,document.getElementById('spinnerWidth').value,document.getElementById('colour').value)
		}else{
			this.currentShape = new Line(dnd.getInitX(),dnd.getInitY(),dnd.getInitX(),dnd.getInitY(),document.getElementById('spinnerWidth').value,document.getElementById('colour').value)
		}
		//startX=dnd.getMousePosition().x()
		//startY=dnd.getMousePosition().y()
	}
	
	this.onInteractionUpdate=function(dnd){
		ctx.fillStyle = '#F0F0F0'; // set canvas' background color
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		/*if (currEditingMode==1){
			fig = new Line(dnd.getMousePosition().x(),dnd.getMousePosition().y(),dnd.getFinalX(),dnd.getFinalY(),this.currLineWidth,this.currColour)
		}else{
			fig = new Rectangle(dnd.getMousePosition().x(),dnd.getMousePosition().y(),dnd.getFinalX()-startX,dnd.getFinalY()-startY,this.currLineWidth,this.currColour)
		}*/
		this.currentShape.endX = dnd.getFinalX()
		this.currentShape.endY = dnd.getFinalY()
		//Dessiner l'ensemble Drawing
		drawing.paint(ctx)
		this.currentShape.paint(ctx)
	}
	
	this.onInteractionEnd=function(dnd){
		ctx.fillStyle = '#F0F0F0'; // set canvas' background color
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		/*if (currEditingMode==1){
			//fig = new Line(dnd.getMousePosition().x(),dnd.getMousePosition().y(),dnd.getFinalX(),dnd.getFinalY(),this.currLineWidth,this.currColour)
			fig.endX = dnd.getFinalX()
			fig.endY = dnd.getFinalY()
		}else{
			//fig = new Rectangle(dnd.getMousePosition().x(),dnd.getMousePosition().y(),dnd.getFinalX(),dnd.getFinalY(),this.currLineWidth,this.currColour)
			fig.endX = dnd.getFinalX()
			fig.endY = dnd.getFinalY()
		}*/
		this.currentShape.endX = dnd.getFinalX()
		this.currentShape.endY = dnd.getFinalY()
		//fig.paint(ctx)
		drawing.addFigure(this.currentShape)
		drawing.paint(ctx)
	}
	
	/*this.selectColor=function(evt){
		//console.log("couleur")
		//this.currColour=colorButton.value;
		return colorButton.value
		//console.log(this.currColour)
	}.bind(this)
	
	this.selectLineWidth=function(evt){
		//console.log("LW")
		//this.currLineWidth=spinner.value.toString();
		return spinner.value
		//console.log(this.currLineWidth)
	}.bind(this)
	
	this.selectRect=function(evt){
		//console.log("Rect")
		//this.currEditingMode=editingMode.rect;
		return editingMode.rect
		//console.log(this.currEditingMode)
	}.bind(this)
	
	this.selectLine=function(evt){
		//console.log("Line")
		//this.currEditingMode=editingMode.line;
		return editingMode.line
		//console.log(this.currEditingMode)
	}.bind(this)
	
	colorButton.addEventListener('change',this.selectColor,false)
	spinner.addEventListener('change',this.selectLineWidth,false)
	butLine.addEventListener('click',this.selectLine,false)
	butRect.addEventListener('click',this.selectRect,false)*/
};


