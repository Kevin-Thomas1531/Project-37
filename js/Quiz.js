class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    this.handleElements();
    //write code to change the background color here
    fill("Yellow");
    //write code to show a heading for showing the result of Quiz
 for(var plr in allcontestants){
     var correctAns = "2";
     if(correctAns === allcontestants[plr].answer)
     fill("Green");
     else
     fill("Red");


 }
    //call getContestantInfo( ) here
    Player.getPlayersInfo()

    //write condition to check if contestantInfor is not undefined
  if(allcontestants !== undefined){}
    //write code to add a note here
  text("Note: Contestant who answered correct are highlighted in green color!",130,230);
    //write code to highlight contest who answered correctly
    
  }

}
