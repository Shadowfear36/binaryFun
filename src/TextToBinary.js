function TextToBinary(text) {
    let binaryChunks = [];
  
    // Iterate through each character in the text
    for (let i = 0; i < text.length; i++) {
      // Get the ASCII value of the current character
      const asciiValue = text.charCodeAt(i);
  
      // Convert the ASCII value to binary and pad to 8 bits
      const binaryChunk = asciiValue.toString(2).padStart(8, '0');
  
      // Push the binary chunk to the array
      binaryChunks.push(binaryChunk);
    }
  
    // Join the binary chunks with spaces every 8 bits (binary chunk)
    const binaryString = binaryChunks.join(' ');
  
    return binaryString;
  }

  export default TextToBinary;