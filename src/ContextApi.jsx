import React, { createContext, useEffect, useState } from 'react'
export const data= createContext([]);


const ContextApi = ({children}) => {
    
  const[card1data,setCard1data] = useState([]);
  const[card2data,setCard2data] = useState([]);
  const[card3data,setCard3data] = useState([]);
  const[card4data,setCard4data] = useState([]);

  return (
    <data.Provider value={{card1data,setCard1data,card2data,setCard2data,card3data,setCard3data,card4data,setCard4data}}>
     {children}
     </data.Provider>
  )
}

export default ContextApi