// Arrays for each part of the story
const nouns = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
const verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
const adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
const secondNouns = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const places = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// Variables to store the parts of the story
let selectedNoun = "";
let selectedVerb = "";
let selectedAdjective = "";
let selectedSecondNoun = "";
let selectedPlace = "";

// Get random word from an array
function getRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Update the selected noun, verb, adjective, etc., when buttons are clicked
document.getElementById("nounButton").addEventListener("click", function() {
    selectedNoun = getRandomWord(nouns);
    document.getElementById("storyDisplay").innerHTML = `Noun selected: ${selectedNoun}`;
});

document.getElementById("verbButton").addEventListener("click", function() {
    selectedVerb = getRandomWord(verbs);
    document.getElementById("storyDisplay").innerHTML = `Verb selected: ${selectedVerb}`;
});

document.getElementById("adjectiveButton").addEventListener("click", function() {
    selectedAdjective = getRandomWord(adjectives);
    document.getElementById("storyDisplay").innerHTML = `Adjective selected: ${selectedAdjective}`;
});

document.getElementById("secondNounButton").addEventListener("click", function() {
    selectedSecondNoun = getRandomWord(secondNouns);
    document.getElementById("storyDisplay").innerHTML = `Second noun selected: ${selectedSecondNoun}`;
});

document.getElementById("placeButton").addEventListener("click", function() {
    selectedPlace = getRandomWord(places);
    document.getElementById("storyDisplay").innerHTML = `Place selected: ${selectedPlace}`;
});

// Function to generate the full story
function generateStory() {
    let story = `${selectedNoun} ${selectedVerb} ${selectedAdjective} ${selectedSecondNoun} ${selectedPlace}.`;
    return story;
}

// Speak the generated story
function speakNow(text) {
    let speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
}

// Button to generate and speak the story
document.getElementById("generateStoryButton").addEventListener("click", function() {
    let story = generateStory();
    document.getElementById("storyDisplay").innerHTML = `Story: ${story}`;
    speakNow(story); // Speak the story out loud
});

// Button to generate a random story in one click
document.getElementById("randomStoryButton").addEventListener("click", function() {
    selectedNoun = getRandomWord(nouns);
    selectedVerb = getRandomWord(verbs);
    selectedAdjective = getRandomWord(adjectives);
    selectedSecondNoun = getRandomWord(secondNouns);
    selectedPlace = getRandomWord(places);
    
    let randomStory = generateStory();
    document.getElementById("storyDisplay").innerHTML = `Random Story: ${randomStory}`;
    speakNow(randomStory); // Speak the random story
});

// Reset the story
document.getElementById("resetButton").addEventListener("click", function() {
    selectedNoun = "";
    selectedVerb = "";
    selectedAdjective = "";
    selectedSecondNoun = "";
    selectedPlace = "";
    document.getElementById("storyDisplay").innerHTML = "Your story will appear here...";
});
/*
Explanation:
Arrays: These hold lists of nouns, verbs, adjectives, etc., from which random words are picked.
Button Listeners: Each button picks a random word from its respective array and updates the display.
generateStory(): This function builds the final sentence by combining the selected words.
speakNow(): This uses the browser's built-in SpeechSynthesis API to read the story out loud.
Random Story: The button generates a complete random story with one click.
Reset: Clears all the selections and story display so you can start over.

*/