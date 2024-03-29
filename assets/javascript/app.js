$(document).ready(function(){
  
    
    $("#remaining-time").hide();
    $("#start").on('click', trivia.startGame);
    $(document).on('click', '.option', trivia.guessChecker);
    
  })
  
  var trivia = {
    
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    currentSet: 0,
    timer: 20,
    timerOn: false,
    timerId : '',
    
    questions: {
      q1: 'Which WWE Legend bodyslammed Andre The Giant at Wrestlemania III?',
      q2: 'What is the name of Stone Cold Steve Austins finishing move?',
      q3: 'How many times has John Cena been a WWE Heavyweight Champion?',
      q4: 'Which WWE Superstar is also an Olympic Gold Medalist?',
      q5: "Which WWE superstar won the first ever Womens Main event at Wrestlemania 35? ",
      q6: 'WWE Legend Jake Roberts is known for carrying what weapon to the ring?',
      q7: 'Which WWE Superstar is also known as "Mr Wrestlemania"?'
    },
    options: {
      q1: ['The Rock', 'Hulk Hogan', 'The Undertaker', 'John Cena'],
      q2: ['The Peoples Elbow', 'The Stunner', 'The Sharpshooter', 'The Texas Rattlesnake'],
      q3: ['16', '11', '13', '18'],
      q4: ['Trish Stratus', 'The Undertaker', 'Bret Hart', 'Kurt Angle'],
      q5: ['Becky Lynch', 'Charlotte Flair', 'Lita', 'Ronda Rousey'],
      q6: ['A Chair', 'A Bat', 'A Snake', 'A picture of his opponent'],
      q7: ['Bret Hart', 'HHH', 'Shawn Michaels', 'Kurt Angle']
    },
    answers: {
      q1: 'Hulk Hogan',
      q2: 'The Stunner',
      q3: '16',
      q4: 'Kurt Angle',
      q5: 'Becky Lynch',
      q6: 'A Snake',
      q7: 'Shawn Michaels'
    },
    
    startGame: function(){
      trivia.currentSet = 0;
      trivia.correct = 0;
      trivia.incorrect = 0;
      trivia.unanswered = 0;
      clearInterval(trivia.timerId);
      
      $('#game').show();
      
      $('#results').html('');
      
      $('#timer').text(trivia.timer);
      
      $('#start').hide();
  
      $('#remaining-time').show();
      
      trivia.nextQuestion();
      
    },
   
    nextQuestion : function(){
      
   
      trivia.timer = 10;
       $('#timer').removeClass('last-seconds');
      $('#timer').text(trivia.timer);
      
      
      if(!trivia.timerOn){
        trivia.timerId = setInterval(trivia.timerRunning, 1000);
      }
      
      
      var questionContent = Object.values(trivia.questions)[trivia.currentSet];
      $('#question').text(questionContent);
      
    
      var questionOptions = Object.values(trivia.options)[trivia.currentSet];
      
 
      $.each(questionOptions, function(index, key){
        $('#options').append($('<button class="option btn btn-info btn-lg">'+key+'</button>'));
      })
      
    },
    timerRunning : function(){
      if(trivia.timer > -1 && trivia.currentSet < Object.keys(trivia.questions).length){
        $('#timer').text(trivia.timer);
        trivia.timer--;
          if(trivia.timer === 4){
            $('#timer').addClass('last-seconds');
          }
      }
    
      else if(trivia.timer === -1){
        trivia.unanswered++;
        trivia.result = false;
        clearInterval(trivia.timerId);
        resultId = setTimeout(trivia.guessResult, 1000);
        $('#results').html('<h3>Out of time! The answer was '+ Object.values(trivia.answers)[trivia.currentSet] +'</h3>');
      }
   
      else if(trivia.currentSet === Object.keys(trivia.questions).length){
        
     
        $('#results')
          .html('<h3>Thank you for playing!</h3>'+
          '<p>Correct: '+ trivia.correct +'</p>'+
          '<p>Incorrect: '+ trivia.incorrect +'</p>'+
          '<p>Unaswered: '+ trivia.unanswered +'</p>'+
          '<p>Please play again!</p>');
        
        $('#game').hide();
        
        $('#start').show();
      }
      
    },

    guessChecker : function() {
      
      var resultId;
      
      var currentAnswer = Object.values(trivia.answers)[trivia.currentSet];
      
      if($(this).text() === currentAnswer){
        $(this).addClass('btn-success').removeClass('btn-info');
        
        trivia.correct++;
        clearInterval(trivia.timerId);
        resultId = setTimeout(trivia.guessResult, 1000);
        $('#results').html('<h3>Correct Answer!</h3>');
      }

      else{

        $(this).addClass('btn-danger').removeClass('btn-info');
        
        trivia.incorrect++;
        clearInterval(trivia.timerId);
        resultId = setTimeout(trivia.guessResult, 1000);
        $('#results').html('<h3>Better luck next time! '+ currentAnswer +'</h3>');
      }
      
    },

    guessResult : function(){
      
 
      trivia.currentSet++;
      
   
      $('.option').remove();
      $('#results h3').remove();
      
  
      trivia.nextQuestion();
       
    }
  
  }