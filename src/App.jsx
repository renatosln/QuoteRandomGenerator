
import QuoteBox from "./components/QuoteBox";
import quoteDB from "./db/quotes.json";
import colors from "./db/colors.js";
import { useState } from "react";

function App() {
  const getRandomElementFromArray = (array) => {
    const randomIndex = Math.floor(array.length * Math.random());
    return array[randomIndex]
  }

  const [quote, setQuote] = useState(getRandomElementFromArray(quoteDB));
  const [color, setColor] = useState(getRandomElementFromArray(colors));


  const getNewValues = () => {
    const newQuote = getRandomElementFromArray(quoteDB);
    const newColor = getRandomElementFromArray(colors);
    setQuote(newQuote);
    setColor(newColor);
  }

  const backgroundObject = {
      backgroundColor: color
    }

    const colorObject = {
      color : color
    }
  

  return (
    <div className="App" style={backgroundObject}>
      <QuoteBox
        quote={quote}
        getNewValues = {getNewValues}  
        backgroundObject = {backgroundObject}
        colorObject = {colorObject}
      />
    </div>
  )
}

export default App
