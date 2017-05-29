$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var animalInput= $("input#animal").val();
    var exclamation1Input = $("input#exclamation1").val();
    var exclamation2Input = $("input#exclamation2").val();
    var verb1Input = $("input#verb1").val();
    var verb2Input = $("input#verb2").val();
    var adjective1Input = $("input#adjective1").val();
    var adjective2Input = $("input#adjective2").val();
    var adjective3Input = $("input#adjective3").val();
    var adjective4Input = $("input#adjective4").val();

    $(".person1").append(person1Input);
    $(".person2").append(person2Input);
    $(".animal").append(animalInput);
    $(".exclamation1").append(exclamation1Input);
    $(".exclamation2").append(exclamation2Input);
    $(".verb1").append(verb1Input);
    $(".verb2").append(verb2Input);
    $(".adjective1").append(adjective1Input);
    $(".adjective2").append(adjective2Input);
    $(".adjective3").append(adjective3Input);
    $(".adjective4").append(adjective4Input);



    $("#story").show();

    event.preventDefault();
  });
});
