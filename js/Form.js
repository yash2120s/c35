class Form {
  constructor() {
    this.input = createInput("Name");
     this.button = createButton('Play');
     this.greeting = createElement('h2')

  }
hide(){
  input.hide();
  button.hide();
greeting.hide();
}
  
  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
    
  
    
    input.position(130, 160);
    button.position(250, 200);

    this.button.mousePressed(()=>{
      
this.input.hide()
this.button.hide()

       player.name = this.input.value();
      
      playerCount+=1;
      player.update(player.name)
      player.updateCount(playerCount);
     
      this.greeting.html("Hello " + player.name)
     this.greeting.position(130, 160)
    });

  }
}
