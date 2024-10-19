import { useState } from "react"

function App() {
const [color , setColor] =  useState("olive")
  return (
    <>

    <div className="w-full h-screen duration-200"
    style={{backgroundColor : color}}
    
    >
      
      <div className="fixed flex flex-wrap justify-center bottom-12  inset-x-0 ps-2"><h1 className="fixed flex flex-wrap justify-center bottom-60  inset-x-60 ps-2"><button className="outline-none px-4 py-1 text-black rounded-full shadow-lg"
          style={{backgroundColor:"white"}}>click below</button></h1>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button  onClick={()=> setColor("red")}
          className="outline-none px-4 py-1 text-white rounded-full shadow-lg"
          style={{backgroundColor:"red"}}
          >Red</button>
          <button  onClick={()=> setColor("green")} className="outline-none px-4 py-1 text-white rounded-full shadow-lg"
          style={{backgroundColor:"green"}}
          >green</button>
          <button  onClick={()=> setColor("blue")} className="outline-none px-4 py-1 text-white rounded-full shadow-lg"
          style={{backgroundColor:"blue"}}
          >Blue</button>
          <button  onClick={()=> setColor("yellow")} className="outline-none px-4 py-1 text-white rounded-full shadow-lg"
          style={{backgroundColor:"yellow"}}
          >Yellow</button>
          <button   onClick={()=> setColor("black")} className="outline-none px-4 py-1 text-white rounded-full shadow-lg"
          style={{backgroundColor:"black"}}
          >Black</button>
          <button   onClick={()=> setColor("brown")} className="outline-none px-4 py-1 text-white rounded-full shadow-lg"
          style={{backgroundColor:"brown"}}
          >Brown</button>
        </div>
      </div>
    </div>
    
   </>
   
  )
}

export default App
