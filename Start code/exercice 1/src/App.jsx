import React, { useState } from "react";
export default function App() {
  const [width, setWidth] = useState(0);

  const getScoreBarStyle = () => {
    // 1- Compute width
    const scoreWidth = `${width * 10}%`;
    
    // 2- Compute color (optional)
    let scoreColor = `#f3bc47`;
    if(width >= 8){
      scoreColor = "#20fc03";
    }
    else if(width >= 4){
      scoreColor = "#c6fc03";
    }
    else if(width >= 2){
      scoreColor = "#fc7703";
    }
    else{
      scoreColor = "#fc1c03";
    }
    
    // 3 - Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };
  function changeWidth(event){
    setWidth(event.target.value);
  };
  console.log("component re-render");
  
  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input type="number" min="0" max="10" onChange={changeWidth}></input>

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
