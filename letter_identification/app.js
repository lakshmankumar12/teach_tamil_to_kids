var startBtnDom = $("#start_btn")
var letterDom = $("#letter")
var correctBtnDom = $("#correct_btn")
var wrongBtnDom = $("#wrong_btn")
var scorecardDom = $("#scorecard")
var correctScoreDom = $("#correct_score")
var wrongScoreDom = $("#wrong_score")
var question_asked = 0;

startBtnDom.on("click", start);
correctBtnDom.on("click", check_correct);
wrongBtnDom.on("click", check_wrong);

var all_letters = [];
var base_consonants = [ '\u0B95', '\u0B99', '\u0B9A', '\u0B9E', '\u0B9F', '\u0BA3', '\u0BA4', '\u0BA8', '\u0BAA', '\u0BAE', '\u0BAF', '\u0BB0', '\u0BB2', '\u0BB5', '\u0BB3', '\u0BB4', '\u0BB1', '\u0BA9'];
var vowels = [ '', '\u0BBE', '\u0BBF', '\u0BC0', '\u0BC1', '\u0BC2', '\u0BC6', '\u0BC7', '\u0BC8', '\u0BCA', '\u0BCB', '\u0BCC', '\u0BCD' ];
var score = {
    "correct":  0,
    "wrong": 0
}

var wrong_letters = {};

init();

function greyout_rightwrong() {
    correctBtnDom.removeClass('active');
    wrongBtnDom.removeClass('active');
    correctBtnDom.addClass('disabled');
    wrongBtnDom.addClass('disabled');
}
function enable_rightwrong() {
    correctBtnDom.removeClass('disabled');
    wrongBtnDom.removeClass('disabled');
    correctBtnDom.addClass('active');
    wrongBtnDom.addClass('active');
}

function generate_letters() {
    for (var c = 0 ; c < base_consonants.length ; ++c) {
        for (var v = 0 ; v < vowels.length; ++v) {
            all_letters.push(base_consonants[c]+vowels[v]);
        }
    }
}

function start() {
    var rand = all_letters[Math.floor(Math.random() * all_letters.length)];
    letterDom.text(rand);
    startBtnDom.text("Next");
    enable_rightwrong()
    question_asked = 1;
    correctBtnDom.focus();
}

function windup_question() {
    greyout_rightwrong();
    question_asked = 0;
    scorecardDom.show();
    startBtnDom.focus();
}

function check_correct() {
    if (!question_asked) {
        windup_question();
        return;
    }
    score['correct'] += 1;
    correctScoreDom.text(score['correct']);
    windup_question();
}

function check_wrong() {
    if (!question_asked) {
        windup_question();
        return;
    }
    score['wrong'] += 1;
    wrongScoreDom.text(score['wrong']);
    windup_question();
    //wrong_letters[letterDom.text()] += 1;
}

function init() {
    generate_letters();
    question_asked = 0;
    scorecardDom.hide();
    greyout_rightwrong();
    startBtnDom.focus()
}


