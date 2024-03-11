
function encode() {
      const input = document.getElementById('input').value;
      const encoded = caesarCipher(input, 3); //shift value
      displayResult(encoded);
    }
  
function decode() {
      const input = document.getElementById('input').value;
      const decoded = caesarCipher(input, -3); //opposite shift value for decoding
      displayResult(decoded);
    }
  
function caesarCipher(str, shift) {
      return str.replace(/[a-zA-Z]/g, function(char) {
        const isUpperCase = char === char.toUpperCase();
        const offset = isUpperCase ? 65 : 97;
        return String.fromCharCode((char.charCodeAt(0) - offset + shift + 26) % 26 + offset);
      });
    }
  
function displayResult(result) {
      const output = document.getElementById('output');
      output.value = result;
      output.classList.add('#output');
  
      // Clear shimmer effect 
      setTimeout(() => {
        output.classList.remove();
      }, 2000);
    }
