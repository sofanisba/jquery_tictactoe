$(document).ready(function(){
  var turn = 0;
  $('td').click(function(){
    var self = $(this);

    if (turn % 2){
      self.html('O')
    }else{
      self.html('X')
    }

    self.off('click');
    turn ++;

  });
});
