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
            oWins();
            playAgain();
          }
        }
      }
    }
    function xWins(){
      xcount = 0
      winX = window.confirm('X Won?')
      if (winX == true){
        xcount++
        $('.winners').html(xcount)
      }
    }
    function oWins() {
     ocount = 0
     winO = window.confirm('X Won?')
     if (winO == true) {
       ocount++
       $('.winners').html(ocount)
     }
   }

  }

  function playAgain(){
    $('.playAgain').click(function(){
      $('td').empty('.o')
      $('td').empty('.x')
    });
  // all td remove class o x
  //make clickable

  }

});
