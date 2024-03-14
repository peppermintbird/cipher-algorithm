<div align = center>
  <img style = "width: 9%;" src="https://github.com/peppermintbird/alura-one-challenge-text-decoder/assets/148541376/7a70e5b1-2217-4718-b47e-01f3bbc4b133">


## Text Decoder Challenge - Alura + Oracle

[![Oracle Next Education](https://img.shields.io/badge/Oracle-Next%20Education-deepgray?style=flat&logo=oracle&logoColor=white)](https://www.oracle.com/br/education/oracle-next-education/)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fpeppermintbird%2Falura-one-challenge-text-decoder.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fpeppermintbird%2Falura-one-challenge-text-decoder?ref=badge_shield) [![Jekyll site CI](https://github.com/peppermintbird/alura-one-challenge-text-decoder/actions/workflows/jekyll-docker.yml/badge.svg)](https://github.com/peppermintbird/alura-one-challenge-text-decoder/actions/workflows/jekyll-docker.yml)
</div>



<strong>A very simple text encrypter using Caesar's Cipher (with a shift of 3) and a symbolic encryption algorithm.</strong>

### How it works

Night Cipher works with two main steps. First a word is encrypted with Caesar's Cipher and then translated into symbols and positions represented by numbers using a symbol system that I explain further on.

  ### 🔻 The Caesar's Cipher
Night Cipher is inspired in Caesar's Cipher of a shift of 3 (which I used to write a decoder disponible in [Codepen](https://codepen.io/peppermintbird/pen/WNWrymO)). Caesar's Cipher is a substitution cipher where each letter in the plaintext is shifted a certain number of places down or up the alphabet. 
              
In the case of a shift of 3, each letter is replaced by the letter three positions down the alphabet. For example:

 
  <h6>⊷ ⒈ Plaintext: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</h6>  
 
  <h6>⊶ ⒉ Ciphertext: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C</h6>  

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

No especial characters or space is supported, so you can use an underscore to add space. You will notice that the length of the words duplicate using this symbol system.

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

 ✕　I'll get an error message.


### Curiosity

For those wondering why I put a Spotify playlist on the page, it was because I wrote the main code on a midnight sprint since I couldn't sleep. Afterwards, I just enjoyed listening to it while revising the code, so I let it stay. 

### License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fpeppermintbird%2Falura-one-challenge-text-decoder.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fpeppermintbird%2Falura-one-challenge-text-decoder?ref=badge_large)

### CC License
