import React from 'react'
import {  Droppable, Draggable } from "react-beautiful-dnd";
import { useState ,useContext} from 'react';
import '../App.css';
import { data } from "../ContextApi";


const Card3 = (props) => {
 
  const {card3data,setCard3data } = useContext(data);
 
  

  const add=()=>{
    if(card3data.length<=7){
   let obj ={
     id: Math.floor(Math.random()*1000).toString(),
     content:` Green card ${Math.floor(Math.random()*1000).toString()}`
   } 
   setCard3data([...card3data,obj]);
   console.log(card3data);
  }else{
    alert("Cant accept more than 8 cards")
  }

  }
 
  
 const remove=(a)=>{
  const filtered_data = card3data.filter((curr_elem,index)=>{
    return index !==a;
  })
  setCard3data(filtered_data);
 }



  return (
    <div className='card-container'>
      <button onClick={add}>Add</button>
    {<Droppable droppableId="droppablecard3">
          {(provided, snapshot) => (
            <div {...provided.droppableProps} ref={provided.innerRef}
              
            >
              {card3data.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div className="card3" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <div className='delete-btn' onClick={()=>remove(index)}>X</div>
                      <h4 contentEditable="true">{item.content}</h4>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable> }
         
    </div>
  )
}

export default Card3