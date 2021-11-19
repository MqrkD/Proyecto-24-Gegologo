class Stone {
    constructor(x,y) {
        var options = {
            'density':0.8,
            'friction': 0.9,
            'density':12
          };
          this.body = Bodies.rectangle(x, y, 50, 50, options);
          this.width = 150;
          this.height = 40;
          World.add(world, this.body);

    }

    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("gray");
        rect(pos.x, pos.y, this.width, this.height);
      }
    };