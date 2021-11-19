class Iron {
    constructor(x,y) {
        var options = {
            'density':0.8,
            'friction': 3,
            'density':30
          };
          this.body = Bodies.rectangle(x, y, 50, 50, options);
          this.width = 150;
          this.height = 40;
          World.add(world, this.body);

    }

    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("lightgray");
        rect(pos.x, pos.y, this.width, this.height);
      }
    };