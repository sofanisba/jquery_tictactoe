$(document).ready(function(){
  var turn = 0;

  $('td').on('click', function(){
    var self  = $(this);

    if (turn % 2){
      self.html('O').addClass('o');
    }else{
      self.html('X').addClass('x');
    }

    self.attr('disabled')
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
      winX = window.confirm('X Won?')
      if (winX == true){
        $('table').attr('disabled','disabled')
        $('#x').append('I')
      }
    }
    function oWins() {
     winO = window.confirm('O Won?')
     if (winO == true) {
       $('table').attr('disabled','disabled')
       $('#o').append('I')
     }
   }

  }
  playAgain();

  function playAgain(){
    $('.playAgain').click(function(){
      for (i = 0; i < $('td').length; i++){
        $($('td')[i]).removeAttr('disabled')
        $('table').removeAttr('disabled')
      }
      $('td').empty('.o')
      $('td').empty('.x')
      $('td').removeClass('o x')


    });
  // all td remove class o x
  //make clickable
  }


});
