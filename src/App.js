import './App.css';
import NumToBinary from './NumToBinary';
import BinaryToNum from './BinaryToNum';
import TextToBinary from './TextToBinary';
import BinaryToText from './BinaryToText';
import { useState } from 'react';

function App() {
  //for num to binary
  const [num, setNum] = useState(0);
  const [numOut, setNumOut] = useState('');

  //for text to binary
  const [text, setText] = useState('');
  const [textOut, setTextOut] = useState('');

  //for binary to text
  const [binaryNum, setBinaryNum] = useState('');
  const [binaryNumOut, setBinaryNumOut] = useState('');

  const [numBinary, setNumBinary] = useState(0);
  const [numBinaryOut, setNumBinaryOut] = useState('');


  const convertNum = (e) => {
    e.preventDefault();
    let newNum = NumToBinary(num);
    setNumOut(newNum);
  }

  const convertText = (e) => {
    e.preventDefault();
    let newText = TextToBinary(text);
    setTextOut(newText);
  }

  const convertBinaryToText = (e) => {
    e.preventDefault();
    let newBinary = BinaryToText(binaryNum);
    setBinaryNumOut(newBinary);
  }

  const convertBinaryToNum = (e) => {
    e.preventDefault();
    let newBinary = BinaryToNum(numBinary);
    setNumBinaryOut(newBinary);
  }

  return (
    <div className="App">
      <h1 className="logo">Binary_Fun</h1>
      <div className="wrapper">
        <div className="halve">
          <div className="container">
              <h2>Number To Binary</h2>
              <div className="process-binary">

              </div>
              <div className="num-form">
                <input onChange={(e) => setNum(e.target.value)} type="number" placeholder="Enter a number" min={0} />
                <button onClick={(e) => convertNum(e)}>Convert</button>
                <h4>Binary Output: </h4>
                <div>
                  <p>{numOut}</p>
                </div>
              </div>
          </div>
          <div className="container">
              <h2>Binary To Number</h2>
              <div className="process-binary">

              </div>
              <div className="num-form">
                <input onChange={(e) => setNumBinary(e.target.value)} type="text" placeholder="Enter binary" />
                <button onClick={(e) => convertBinaryToNum(e)}>Convert</button>
                <h4>Binary Output: </h4>
                <div>
                  <p>{numBinaryOut}</p>
                </div>
              </div>
          </div>
        </div>
        <div className="halve">
          <div className="container">
              <h2>Text To Binary</h2>
              <div className="process-binary-txt">

              </div>
              <div className="text-form">
                <input onChange={(e) => setText(e.target.value)} type="text" placeholder="Enter a sentence" />
                <button onClick={(e) => convertText(e)} >Convert</button>
                <h4>Binary Output: </h4>
                <div>
                  <p>{textOut}</p>
                </div>
              </div>
          </div>
          <div className="container">
              <h2>Binary To Text</h2>
              <div className="process-txt-binary">

              </div>
              <div className="text-form">
                <input onChange={(e) => setBinaryNum(e.target.value)} type="text" placeholder="Enter Binary" />
                <button onClick={(e) => convertBinaryToText(e)} >Convert</button>
                <h4>Binary Output: </h4>
                <div>
                  <p>{binaryNumOut}</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
