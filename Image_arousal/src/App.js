import { useState } from 'react';
import './App.css';
import Switchbutton from './components/Switchbutton';

import { imagedata } from './data';

function App() {
  const [currentImg, setCurrentImg] = useState(0);

  function handlePrev() {
    console.log("clicked prev");
    setCurrentImg(currentImg === 0 ? imagedata.length - 1 : currentImg - 1);
  }

  function handleNext() {
    console.log("clicked next");
    setCurrentImg(currentImg === imagedata.length - 1 ? 0 : currentImg + 1);
  }

  return (
    <div className="App">
      <h1>Image Arousal</h1>
      <div className="image-container">
        {imagedata.map(
          (image, index) =>
            currentImg === index && (
              <div key={image}>
                <img src={image} alt="images" className="gallery-image" />
              </div>
            )
        )}
      </div>
      <Switchbutton onSelect={handlePrev}>Previous</Switchbutton>
      <Switchbutton onSelect={handleNext}>Next</Switchbutton>
    </div>
  );
}

export default App;
