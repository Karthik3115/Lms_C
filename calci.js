let calcHistory = [];

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        let expression = document.getElementById('display').value;
        let result = eval(expression.replace('×', '*'));
        calcHistory.push(expression + ' = ' + result);
        document.getElementById('display').value = result;
    } catch {
        document.getElementById('display').value = 'Error';
    }
}

function history() {
    let historyDiv = document.getElementById('history');
    historyDiv.innerHTML = '<h3>History:</h3>' + calcHistory.join('<br>');
}

function startVoice() {
    if ('webkitSpeechRecognition' in window) {
        let recognition = new webkitSpeechRecognition();
        recognition.lang = 'en-US';
        recognition.onresult = function(event) {
            let speech = event.results[0][0].transcript.toLowerCase();
            speech = speech.replace(/plus/g, '+')
                          .replace(/minus/g, '-')
                          .replace(/times/g, '*')
                          .replace(/divided by/g, '/')
                          .replace(/equals/g, '=')
                          .replace(/\s/g, '');
            document.getElementById('display').value = speech;
        };
        recognition.start();
    } else {
        alert('Voice recognition not supported');
    }
}




