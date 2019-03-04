function check(){
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var correct = 0;
    var messages = ["Great job!", "That's just okay", "You really need to do better!"]
    var images = ["images/win.gif","image/okay.gif","image/loss.gif"]
    if (question1=="HTML") {
        correct++;
    }
    if (question2=="React") {
        correct++;
    }
    if (question3=="Angular") {
        correct++;
    }

    var range;
    if (correct < 1){ range = 2; }
    if (correct > 1 && correct < 3 ){ range = 1; }
    if (correct > 2 ){ range = 0; }

document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("message").innerHTML = messages[range];
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";

}