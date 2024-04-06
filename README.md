<div align = center>
  <h1>
   <div>⚗️</div><br>
    Text ecryption with phonemic cipher and symbolic algorithm
  </h1>
</div> 

> 🚧  Under development 

### How it works

Night Cipher works as the input word is phonemically encoded and then translated into symbols and positions represented by numbers using a symbol system that I explain further on.

The encrypting system of Night Cipher inherits the core idea of substitution from Caesar's Cipher. In Caesar's Cipher, each letter in the plaintext is shifted by a fixed number of positions in the alphabet. In Night Cipher, however, the position of a letter is assigned by its location in a container represented by a symbol. 

  
#### The symbol system

 In this system, each batch of three letters (e.g., ABC, DEF...), being Y Z the exception, is defined as a container, which in turn is represented by a symbol. 

  <img style="width: 80%" src="https://github.com/peppermintbird/alura-one-challenge-text-decoder/assets/148541376/bfc6be1a-29a0-4484-8e14-e4798e1c7613">

<h5></h5>

The symbols are disposed as follows,

<img style="width: 14%" src="https://github.com/peppermintbird/alura-one-challenge-text-decoder/assets/148541376/03b01b1e-2f21-442c-8edf-13587158db78">

---

We began by defining a function to encrypt text using a custom encryption logic which maps each letter in its symbol container and the corresponding symbol. Below, we have a character (e.g., 'A', 'B', 'C'...) defined by an array. The first element of this array represents the position and the second element represents the symbol associated with the character.

    // Encryption algorithm mapping
    const symbolMapping = {
        'A': ['1', '!'],
        'B': ['2', '!'],
        'C': ['3', '!'],
        'D': ['1', '@'],
        'E': ['2', '@'],
        'F': ['3', '@'],
        'G': ['1', '#'],
        'H': ['2', '#'],
        'I': ['3', '#'],
        .
        .
        .


#### Problems
Despite its functionality, Night Cipher has some issues that need to be addressed:

- It was first designed for the English alphabet, so it may not work properly with characters from other languages or non-alphabetic characters.
- The encryption algorithm's length can be inconsistent and inefficient, especially with duplication of characters.
    - An alternative approach, inspired by run-length encoding, could potentially address this issue by compressing repetitive sequences of characters.





