import React, { useContext} from 'react'
import {  Droppable, Draggable } from "react-beautiful-dnd";
import '../App.css'
import { data } from "../ContextApi";

const Card1 = () => {

  const {card1data,setCard1data } = useContext(data);
 

 const add=()=>{
  if(card1data.length<=7){
  let obj ={
    id: Math.floor(Math.random()*1000).toString(),
    content:` Red card ${Math.floor(Math.random()*1000).toString()}`
  } 
  setCard1data([...card1data,obj]);
  console.log(card1data);
}else{
  alert("Cant accept more than 8 cards")
}
 }

 const remove=(a)=>{
  const filtered_data = card1data.filter((curr_elem,index)=>{
    return index !==a;
  })
  setCard1data(filtered_data);
 }

   
 


  return (
    
    <div className='card-container'>
    
      <button onClick={add}>ADD</button>

    {<Droppable droppableId="droppablecard1">
          {(provided, snapshot) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>

              {card1data.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div className="card1" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
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

export default Card1