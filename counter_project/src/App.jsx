import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//   let [counter,setCounter] = useState(10) 
 
// //  // let counter_value = 5 
// //  const addvalue = () => {
// //   if (counter >= 20) {
// //     setCounter(counter + 1)
// //  } else {
// //   console.log("Counter cannot go above twenty")
// //  }
// //     //console.log("clicked",counter)
// //    // counter_value = counter_value + 1;
// //     //setCounter(counter+1)
    
// // const remove_value = () => {
  
// //   if (counter > 0) {
// //     setCounter(counter - 1)
// //   } else {
// //     console.log("Counter cannot go below zero")
// //   }

// //   }

// const addvalue = () => {
//   if (counter < 20) {
//     setCounter(counter + 1)
//   } else {
//     console.log("Counter cannot go above twenty")
//   }
// }

// const remove_value = () => {
//   if (counter > 0) {
//     setCounter(counter - 1)
//   } else {
//     console.log("Counter cannot go below zero")
//   }
//  }
 
//   return (
//     <>
//     <h1>home page</h1>
//     <p>counter value {counter}</p>
//     <button onClick={addvalue}>add value{counter}</button>
//     <br/>
//     <button onClick = {remove_value}>remove{counter}</button>
//     </>
//   )
// }
function App() {
let [counter,setCounter]= useState(15)

const add_value = () => {
  setCounter(previous_counter => previous_counter +1 )
  setCounter(previous_counter => previous_counter +1 )
  setCounter(previous_counter => previous_counter +1 )
}
const remove_value = () => {
  setCounter(counter-1)
}

  return(
    <>
    <h1>counter project</h1>
    <p>counter value {counter}</p>
    <button onClick ={add_value} >add value{counter}</button>
    <button onClick={remove_value}>remove value{counter}</button>
    
    
    </>
  )
}
export default App
