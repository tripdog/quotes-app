import Quotes from './Components/Quotes';
import './App.css';
import { useEffect, useState } from 'react';
import Cursor from '../src/Components/Cursor'

function App() {
  // const [loading, setLoading] = useState(true);
  const dotCursor = (e) => {
    const cursor = document.querySelector(".cursor");
    cursor.style.top = `${e.pageY - 14}px`;
    cursor.style.left = `${e.pageX - 14}px`;

    const element = e.target;

    if (element.getAttribute("data-cursorpointer")) {
      cursor.classList.add("cursorHover");
    } else if (element.getAttribute("data-cursorpointermini")) {
      cursor.classList.add("cursorHoverMini");
    } else {
      cursor.classList.remove("cursorHover");
      cursor.classList.remove("cursorHoverMini");
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", dotCursor);

    // setTimeout(() => {
    //   setLoading(false);
    // }, 3000);

    return () => {
      window.removeEventListener("mousemove", dotCursor);
    };
  }, []);

return (
  <> 
  <Cursor /> <Quotes />

  </>

);

}

export default App;