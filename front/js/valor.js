$(document).ready(function () {

    var story = [
        {m: "Jonah..."},
        {question: "Wake up, Jonah... Wake up...", answers: [
            {m: "<span class='option-one'>yes?</span>", next: "holy"},
            {m: "<span class='option-two'>go away.</span>", next: "atanic"},
        ]},
        { label: "holy", m: "This world needs you, Jonah...", next: "holya" },
        { label: "atanic", m: "Please... You're our only hope...", next: "holya" },
        { label: "holya" },
        { m: "This is the last message." }
    ];

    function execute_game() {
        var current_line = 0;
        //while (current_line < story.length) {
          var current_step = story[current_line];
          if (undefined !== current_step.m) {
            display_message(current_step.m);
            if (undefined !== current_step.next) {
              current_line = find_label(current_step.next);
            } else {
              current_line = current_line + 1;
              var step = current_step;
              story.forEach(function (step){
                console.log(step);
              });
              
              
            }
      
          } else if (undefined !== current_step.question) {
            $('#text-box').click(function(){
                
                display_message(current_step.question + current_step.answers);
            });
      
            // display the question: current_step.question
            // display the answers: current_step.answers
            // choose an answer
            // and change current_line accordingly
      
          }
        //}
      }

      function display_message(message){
        $('#text-box').append(message);
       };
    //   execute_game();

    checkTextboxValue();
    
    $('.begin-button').click(function(){
        execute_game();
        $('.begin-button').hide();
        $('.valor-header').hide();
        checkTextboxValue();
    });
});

function checkTextboxValue() {
    if ($('#text-box').html() === '') {
        $('#text-box').hide();
    } else {
        $('#text-box').show();
        $('#text-box').append('');
    }
}