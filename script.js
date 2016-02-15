$(document).ready(function(){
  var turn = 0;

  $('td').click(function(){
    var self  = $(this);

    if (turn % 2){
      self.html('O').addClass('o');
    }else{
      self.html('X').addClass('x');
    }

    self.off('click');
    checkWinner();

    turn ++;

  });
  function checkWinner(){
    var cellX = $('.x')
    var cellO = $('.o')

    for (var i = 0; i < cellX.length; i++){
      for (var y = i+1; y < cellX.length; y++){
        for (var z = y+1; z < cellX.length; z++){
          if(parseInt(cellX[i].id) + parseInt(cellX[y].id) + parseInt(cellX[z].id) === 15){
            xWins();
            playAgain();

          }
        }
      }
    }
    for (var i = 0; i < cellO.length; i++){
      for (var y = i+1; y < cellO.length; y++){
        for (var z = y+1; z < cellO.length; z++){
          if(parseInt(cellO[i].id) + parseInt(cellO[y].id) + parseInt(cellO[z].id) === 15){
            alert('O wins!')
            playAgain();
          }
        }
      }
    }
    function xWins(){
      count = 0
      winX = window.confirm('X Won?')
      if (winX == true){
        count++
        $('#x').html(count)
      }
    }
    // function playAgain(){
    //   again = window.confirm('Play Again?')
    //   if (again == true){
    //     location.reload();
    function playAgain(){
      again = window.confirm('play again?')
      if(again == true){

        $('td').empty('.o')
        $('td').empty('.x')
      }

    }

  }




});
