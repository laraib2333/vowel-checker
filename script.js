function checkVowel() {
    let input = document.getElementById("charInput").value;

    if (input.length !== 1) {
        document.getElementById("resultMessage").innerText = "Please enter a single character.";
        return;
    }

    input= input.toLowerCase();

    let message;
    if (input === 'a' || input === 'e' || input === 'i' || input === 'o' || input === 'u') {
        message = `${input} is a vowel`; 
    } else {
        message = `${input} is not a vowel`;
    }
    
    document.getElementById("Message").innerText = message;
}