var startBtnDom = $("#start_btn")
var letterDom = $("#letter")
var correctBtnDom = $("#correct_btn")
var wrongBtnDom = $("#wrong_btn")

startBtnDom.on("click", start);
startBtnDom.on("click", check_correct);
startBtnDom.on("click", check_wrong);

all_letters = [];
base_consonants = [ '\u0B95', '\u0B99', '\u0B9A', '\u0B9E', '\u0B9F', '\u0BA3', '\u0BA4', '\u0BA8', '\u0BAA', '\u0BAE', '\u0BAF', '\u0BB0', '\u0BB2', '\u0BB5', '\u0BB3', '\u0BB4', '\u0BB1', '\u0BA9'];
vowels = [ '', '\u0BBE', '\u0BBF', '\u0BC0', '\u0BC1', '\u0BC2', '\u0BC6', '\u0BC7', '\u0BC8', '\u0BCA', '\u0BCB', '\u0BCC', '\u0BCD' ];

init();

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
    correctBtnDom.focus();
}

function check_correct() {

}

function check_wrong() {

}

function init() {
    generate_letters();
    startBtnDom.focus();
}


