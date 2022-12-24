import React from 'react'
import {  Droppable, Draggable } from "react-beautiful-dnd";
import { useState,useContext } from 'react';
import { data } from "../ContextApi";


const Card2 = () => {
 
  const {card2data,setCard2data } = useContext(data);

  

 const add=()=>{
  if(card2data.length<=7){
  let obj ={
    id: Math.floor(Math.random()*1000).toString(),
    content:` Blue card ${Math.floor(Math.random()*1000).toString()}`
  } 
  setCard2data([...card2data,obj]);
  console.log(card2data);
}else{
  alert("Cant accept more than 8 cards")
}
 }

   
 
 const remove=(a)=>{
  const filtered_data = card2data.filter((curr_elem,index)=>{
    return index !==a;
  })
  setCard2data(filtered_data);
 }

 
  return (
    <div className='card-container'>
      <button onClick={add}>Add</button>
    {<Droppable droppableId="droppablecard2">
          {(provided, snapshot) => (
            <div {...provided.droppableProps} ref={provided.innerRef}
              
            >
              {card2data.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div className="card2" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                         <div  className='delete-btn' onClick={()=>remove(index)}>X</div>
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

export default Card2