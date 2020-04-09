function check() {

    let question1 = document.quiz.question1.value;
    let question2 = document.quiz.question2.value;
    let question3 = document.quiz.question3.value;
    let question4 = document.quiz.question4.value;
    let question5 = document.quiz.question5.value;
    let question6 = document.quiz.question6.value;
    let question7 = document.quiz.question7.value;
    let question8 = document.quiz.question8.value;
    let question9 = document.quiz.question9.value;
    let question10 = document.quiz.question10.value;
    let question11 = document.quiz.question11.value;
    let question12 = document.quiz.question12.value;
    let question13 = document.quiz.question13.value;
    let question14 = document.quiz.question14.value;
    let question15 = document.quiz.question15.value;
    let correct = 0;


    if (question1 === "Arthur") {
        correct++;
    }
    if (question2 === "Grail") {
        correct++;
    }
    if (question3 === "Coconuts") {
        correct++;
    }
    if (question4 === "NI") {
        correct++;
    }
    if (question5 === "Shrubberry") {
        correct++;
    }
    if (question6 === "Bunny") {
        correct++;
    }
    if (question7 === "Duck") {
        correct++;
    }
    if (question8 === "Anthrax") {
        correct++;
    }
    if (question9 === "Scottland") {
        correct++;
    }
    if (question10 === "Doune") {
        correct++;
    }
    if (question11 === "Patsy") {
        correct++;
    }
    if (question12 === "Silly") {
        correct++;
    }
    if (question13 === "Tim") {
        correct++;
    }
    if (question14 === "African") {
        correct++;
    }
    if (question15=== "Trojan") {
        correct++;
    }

    let pictures = ["img/very.gif", "img/good.gif", "img/bad.gif"];
    let messages = ["Great job!", "That's just okay", "You really need to do better"];
    let score;

    if (correct === 0) {
        score = 2;
    }

    if (correct > 0 && correct < 10) {
        score = 1;
    }

    if (correct >10 && correct=== 15) {
        score = 0;
    }

    document.getElementById("after_submit").style.visibility = "visible";

    document.getElementById("message").innerHTML = messages[score];
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
    document.getElementById("picture").src = pictures[score];
}