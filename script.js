
function decodeFile() {
    const fileInput = document.getElementById('fileInput');
    const decodedMessageDiv = document.getElementById('decodedMessage');
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const content = e.target.result;
            const decodedMessage = decode(content);
            decodedMessageDiv.textContent = decodedMessage;
        };
        reader.readAsText(file);
    } else {
        decodedMessageDiv.textContent = "Please choose a file.";
    }
}
function decode(content) {
    const lines = content.split('\n');
    const pyramid = [];

    // Build the pyramid structure
    for (let i = 0; i < lines.length; i++) {
        const parts = lines[i].trim().split(' ');
        const number = parseInt(parts[0]);
        const word = parts[1];

        if (!isNaN(number) && word) {
            if (!pyramid[number - 1]) {
                pyramid[number - 1] = [];
            }
            pyramid[number - 1].push(word);
        }
    }
    // Flatten the pyramid and join the words
    const flattenedWords = pyramid.flat();
    return flattenedWords.join(' ');
}
