$(document).ready(function() {
  // Code for break length
  $(".min-break").click(function() {
    var initial = parseInt($(".break").text());
    if (initial > 1)
      initial--;
    $(".break").text(initial)
  });
  
  $(".plus-break").click(function() {
    var initial = parseInt($(".break").text());
    initial++;
    $(".break").text(initial)
  });
  
  // Code for session break
  
  $(".min-session").click(function() {
    var initial = parseInt($(".session").text());
    if (initial > 1)
      initial--;
    $(".session").text(initial);
    $(".min").text(initial);
    $(".sec").text("00");
  });
  
  $(".plus-session").click(function() {
    var initial = parseInt($(".session").text());
    initial++;
    $(".session").text(initial)
    $(".min").text(initial);
    $(".sec").text("00");
  });
  
  // Code for running session  
  var flag = 0;
  
  var run_clock = function(min,sec) {
    var ms = 1000;
      var i = 2;
      var j = 1;
      var min2 = min;

      while(min > 0){
      setTimeout(function(){
          while(i < 61){
            if (sec === 0){
              setTimeout(function(){
                $(".sec").text(59);
                sec = 58;
              }, ms);
            }

            setTimeout(function() {
              $(".sec").text(sec);
              sec = sec - 1;
            }, ms*i);
            i++
          }
          i = 2;
        },1000*j-1000);
        setTimeout(function() {
          min2--;
          $(".min").text(min2);

        },1000*j);
        j += 60;
        min--;
      
      }
  };
  
  
  
  $(".clock").click(function() {
    
    if(flag === 0) {
      $('.clock').css('background-color','lightgreen');
      $('.clock').css('color','white');
      $('.session-break').text('SESSION');
      var sec = parseInt($(".sec").text());
      var min = parseInt($(".min").text());
      run_clock(min,sec);
      console.log(min);
      setTimeout(function() {
        $('.clock').css('background-color','coral');
        $('.clock').css('color','white');
        $('.session-break').text('BREAK');
        var bmin = parseInt($(".break").text());
        run_clock(bmin,0)
      }, min*60*1000);
      flag = 1
    }else{
      history.go(0);
    }
  });
  
});