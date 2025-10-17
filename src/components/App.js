
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const suggestion = ["Mumbai","Delhi","Jhansi","Haryana"]
  const[text, settext] = useState("")
  const[show, setshow] = useState([])

  useEffect(() =>{
    if(text == "" )return
    const res = suggestion.filter((items) =>{
      return items.toLowerCase().includes(text.toLowerCase())
    })
      setshow(res)
  },[text])
  return (
    <div>
        {/* Do not remove the main div */}
        <input value={text} onChange={(e) =>{
          settext(e.target.value)
        }}/>
        <ul>
          {show.map((items) =>{
            return <li onClick={() =>{
              settext(items)
            }}>{items}</li>
          })}
        </ul>
    </div>
  )
}

export default App
