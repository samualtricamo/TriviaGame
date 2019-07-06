$(document).ready(function(){
    
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
    
    