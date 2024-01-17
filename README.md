# Decryption-Test

Testing a decryption code to decode any string.
This function should read an encoded message from a .txt file and return its decoded version as a string.

Input Format:
The input is a text file (message_file.txt) with lines containing a number followed by a word. The numbers form a pyramid structure, increasing by one number per line.

Decoding Process:

The code reads the contents of the file line by line.
For each line, it extracts the number and word.
It forms a pyramid structure based on these numbers.

Decoding Logic:

At each level of the pyramid, it extracts the word corresponding to the highest number in that level.
Words are concatenated in the order they appear in the pyramid.

Output:
The final output is the decoded message formed by concatenating the selected words based on the pyramid structure.
