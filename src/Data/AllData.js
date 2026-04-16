import React, { createContext, useState , useEffect} from 'react'

const apiValue = createContext();

function AllData({ children }) {
    const [text , setText] = useState([]);
    useEffect (() =>{
        fetch("/assets/js/api.json")
        .then ((item)=>{
            return item.json();
        })
        .then ((element)=>{
            setText(element.products);
        })
    },[]) ;
  return (
    <apiValue.Provider value={text}>
    {children}
    </apiValue.Provider>
  )
}

export {AllData,apiValue} ;