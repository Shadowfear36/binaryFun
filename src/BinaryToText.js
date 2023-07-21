function BinaryToText(binary) {
    let text = '';
  
    // Pad the binary string to ensure each chunk is 8 bits long
    const paddedBinary = binary.padStart(Math.ceil(binary.length / 8) * 8, '0');
  
    // Break the binary string into 8-bit chunks
    for (let i = 0; i < paddedBinary.length; i += 8) {
      const chunk = paddedBinary.slice(i, i + 8);
  
      // Convert the 8-bit binary chunk to its decimal equivalent
      const decimalValue = parseInt(chunk, 2);
  
      // Map the decimal value to its ASCII character
      const char = String.fromCharCode(decimalValue);
  
      // Append the character to the text
      text += char;
    }
  
    return text;
  }

  export default BinaryToText;