// You can code JavaScript here

function speak() {
    var voice = new SpeechSynthesisUtterance();
    voice.text = "Happy Teachers Day to all my dear teachers enjoy this day with lots of fun.                From Tanish Kapur";
    speechSynthesis.speak(voice);
}