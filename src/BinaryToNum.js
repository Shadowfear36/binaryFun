function BinaryToNum(binary) {
    const binaryChunks = binary.match(/.{1,8}/g); // Split the binary into 8-bit chunks
    const decimalValues = binaryChunks.map((chunk) => parseInt(chunk, 2)); // Convert each chunk to decimal
    const numericResult = parseInt(decimalValues.join(''), 10); // Combine decimal values
  
    return numericResult;
  }

export default BinaryToNum;