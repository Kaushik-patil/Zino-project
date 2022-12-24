import React from 'react'
import {  Droppable, Draggable } from "react-beautiful-dnd";
import { useState,useContext } from 'react';
import '../App.css'
import { data } from "../ContextApi";


const Card4 = () => {
  
  const {card4data,setCard4data } = useContext(data);
 

  const add=()=>{
    if(card4data.length<=7){
   let obj ={
     id: Math.floor(Math.random()*1000).toString(),
     content:` Black card ${Math.floor(Math.random()*1000).toString()}`
   } 
   setCard4data([...card4data,obj]);
   console.log(card4data);
  }else{
    alert("Cant accept more than 8 cards")
  }
  }

  
 const remove=(a)=>{
  const filtered_data = card4data.filter((curr_elem,index)=>{
    return index !==a;
  })
  setCard4data(filtered_data);
 }

 

  return (
    <div className='card-container'>
      <button onClick={add}>Add</button>
    {<Droppable droppableId="droppablecard4">
          {(provided, snapshot) => (
            <div {...provided.droppableProps} ref={provided.innerRef}
              
            >
              {card4data.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div className="card4" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
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

export default Card4