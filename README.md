<div align = center>
  <div><h1>⚗️</h1></div>


## Text ecryption with Caesar's Cipher and symbolic algorithm



</div>



<strong>A very simple text encrypter using Caesar's Cipher (with a shift of 3) and a symbolic encryption algorithm.</strong>

### How it works

Night Cipher works with two main steps. First a word is encrypted with Caesar's Cipher and then translated into symbols and positions represented by numbers using a symbol system that I explain further on.

  ### 🔻 The Caesar's Cipher
Night Cipher is inspired in Caesar's Cipher of a shift of 3 (which I used to write a decoder disponible in [Codepen](https://codepen.io/peppermintbird/pen/WNWrymO) inspired on [freeCodeCamp's Caesar's Cipher tutorial](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher), though I didn't use ROT13, which has a shift of... well, 13). Caesar's Cipher is a substitution cipher where each letter in the plaintext is shifted a certain number of places down or up the alphabet. 
              
In the case of a shift of 3, each letter is replaced by the letter three positions down the alphabet. For example:

 
  ⊷ Plaintext: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 
 
  ⊶ Ciphertext: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C 

 The encrypting system of Night Cipher inherits the core idea of substitution from Caesar's Cipher. In Caesar's Cipher, each letter in the plaintext is shifted by a fixed number of positions in the alphabet. In Night Cipher, however, the position of a letter is assigned by its location in a container represented by a symbol. 
  

  ### 🔻The symbol system

 In this system, each batch of three letters (e.g., ABC, DEF...), being Y Z the exception, is defined as a container, which in turn is represented by a symbol. 

  <img style="width: 80%" src="https://github.com/peppermintbird/alura-one-challenge-text-decoder/assets/148541376/bfc6be1a-29a0-4484-8e14-e4798e1c7613">

<h5></h5>

The symbols are disposed as follows,

<img style="width: 14%" src="https://github.com/peppermintbird/alura-one-challenge-text-decoder/assets/148541376/03b01b1e-2f21-442c-8edf-13587158db78">


<h1> </h1>

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


### Examples

No especial characters or space is supported, so you can use an underscore to add space.

🔓 **Original**
> "Hello_world"

> "Easy_as_childbirth" - _Finn the human_

> "Dont_let_the_dragon_drag_on_man" - _Jake the dog_

🔐 **Encrypted**
> 2$2#3%3%3¨2#2(3¨3&3%1#

> 2#1@1*2!2#1@1*2#3@2$3$3%1#2@3$3&2*2$

> 1#3¨2¨2*2#3%2#2*2#2*2$2#2#1#3&1@1$3¨2¨2#1#3&1@1$2#3¨2¨2#1¨1@2¨

### Final notes

The downside of this algorithm is that it was first designed for the English alphabet. It assumes that the input message consists of characters from the English alphabet (A-Z) and may not work properly with messages containing characters from other languages or non-alphabetic characters. If I try to type,

> Olá, mundo! (Brazilian Portuguese)

or

> こんにちは、世界！(Japanese) 

 ✕　I should get an error message.


### Curiosity

As if this encoder wasn't weird enough, there are some Easter eggs in the code. Some words can be encrypted as drawings <i>or songs</i>.  

### License


