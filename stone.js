class Stone {
    constructor(x, y) {
      var options = {
        'density':12,
        'friction': 1.0,
        'restitution':0.5
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 100;
      this.height = 20;
      World.add(world, this.body);
    };
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("grey");
			fill("black");
			//draw the ellipse here to display the rubber ball

			pop()
	}

}