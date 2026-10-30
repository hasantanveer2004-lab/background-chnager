import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div
    // width or height browser screen jitni kar do or transition duration 200ms/.2s 
    className="w-screen h-screen duration-200"
    style={{backgroundColor:color}}>

      {/* fixed :  means element fixed kardo scroll par b change na hou
          flex : means div elements ko one dimensional kar do row/column
          flex-wrap : means agar elements ak line may nahi a rahay tou next line par lay jao 
          justify-center : means flex items ko horizontal direction may centre kar do
          inset-x-0 : means element ko left aur right dono taraf se screen
          ke edges tak stretch kar do.*/}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex wrap justify-center bg-white shadow-lg gap-3
        px-3 py-2 rounded-xl">

          <button
          onClick= {() => {setColor("red")}}
          className="outline-none px-3 py-1 rounded-xl" 
          style={{backgroundColor:"red"}}>Red</button>

          <button 
          onClick={() => setColor("green")}
          className="outline-none px-3 py-1 rounded-xl" 
          style={{backgroundColor:"green"}}>Green</button>

          <button
          onClick={() => setColor("blue")}
          className="outline-none px-3 py-1 rounded-xl" 
          style={{backgroundColor:"blue"}}>Blue</button>

          <button
          onClick={() => setColor("orange")}
          className="outline-none px-3 py-1 rounded-xl" 
          style={{backgroundColor:"orange"}}>Orange</button>

          <button
          onClick={() => setColor("purple")}
          className="outline-none px-3 py-1 rounded-xl" 
          style={{backgroundColor:"purple"}}>purple</button>
        </div>
    </div> 
    </div>


    // own practice
    // <div className="w-full h-screen" 
    // style={{backgroundColor:color}}>
    //   <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 rounded-xl">
    //     <div className="flex flex-wrap justify-center px-3 py-2 
    //     text-white gap-3 bg-black  rounded-xl">
    //       <button onClick={() => setColor("red")} 
    //        className="outlook-none px-3 py-2 rounded-xl"
    //       style={{backgroundColor:("red")}}>red</button>

    //       <button onClick={() => setColor("green")}
    //       className="outlook-none px-3 py-3 rounded-xl"
    //       style={{backgroundColor:("green")}}>
    //       green</button>

    //        <button onClick={() => setColor("yellow")}
    //       className="outlook-none px-3 py-3 rounded-xl"
    //       style={{backgroundColor:("yellow")}}>
    //       yellow</button>

    //        <button onClick={() => setColor("purple")}
    //       className="outlook-none px-3 py-3 rounded-xl"
    //       style={{backgroundColor:("purple")}}>
    //       purple</button>
    //     </div>
    //   </div>
    // </div>
  )
}

export default App
