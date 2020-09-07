import React, {useState} from 'react'
import './TextStyler.css'

function TextStyler(props) {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked(!clicked);
  }

  return (
    <span onClick={clickHandler}>
      {props.children}
    </span>
  )
}

export default TextStyler
