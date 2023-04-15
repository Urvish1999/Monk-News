
import './App.css';

import React from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News'


const App =()=> {
  
    return (
      <div>
        <Navbar/>
        <News pageSize={9} country="in" category = "health"/>
        
      
       </div>
    )
  }
export default App



// This the code for class based components

// import './App.css';

// import React, { Component } from 'react'
// import Navbar from './Components/Navbar';
// import News from './Components/News'


// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Navbar/>
//         <News pageSize={9} country="in" category = "health"/>
        
      
//        </div>
//     )
//   }
// }


