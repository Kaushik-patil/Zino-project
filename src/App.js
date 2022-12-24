import React, { useContext  } from "react";
import { DragDropContext  } from "react-beautiful-dnd";
import "./App.css";
import Card1 from "./cards/Card1";
import Card2 from "./cards/Card2";
import Card3 from "./cards/Card3";
import Card4 from "./cards/Card4";
import {data} from './ContextApi';

 const App = () => {
  const {card1data,setCard1data } = useContext(data);
  const {card2data,setCard2data } = useContext(data);
  const {card3data,setCard3data } = useContext(data);
  const {card4data,setCard4data } = useContext(data);

  const onDragEnd = (result) => {
       console.log(result);
       const{source,destination} = result ;
       if(!destination) return ;
       if(destination.droppableId===source.droppableId && destination.index===source.index){
        return ;
       }

       let add ;
       let data1 = card1data ;
       let data3 = card3data ;
       let data2 = card2data ;
       let data4 = card4data ;

       if(source.droppableId==="droppablecard1"){
         add = data1[source.index];
         data1.splice(source.index,1);
        }else if(source.droppableId==="droppablecard2"){
          add = data2[source.index];
         data2.splice(source.index,1);
        }else if(source.droppableId==="droppablecard3"){
          add = data3[source.index];
         data3.splice(source.index,1);
        }else{
        add = data4[source.index];
        data4.splice(source.index,1);
       }



     if(destination.droppableId==="droppablecard1"){    
      data1.splice(destination.index,0,add);
      }else if(destination.droppableId==="droppablecard2"){
        data2.splice(destination.index,0,add);
      }else if(destination.droppableId==="droppablecard3"){
        data3.splice(destination.index,0,add);
      }else {
        data4.splice(destination.index,0,add);
      }

      setCard1data(data1);
      setCard2data(data2);
      setCard3data(data3);
      setCard4data(data4);

  }


  return (
    <div className="app">
    <div className="header"><h4>Zino - Project-1</h4></div>
    <DragDropContext onDragEnd={onDragEnd}>
    <div className="main_content">

     <div className="outer-div">
      <h5>RED</h5>
     <Card1  />
     </div>


     <div className="outer-div">
      <h5>Blue</h5>
     <Card2   /> 
     </div>


     <div className="outer-div">
      <h5>GREEN</h5>
     <Card3  />
     </div>


     <div className="outer-div">
      <h5>BLACK</h5>
     <Card4  /> 
     </div>
      
      
      
    </div>

    
    </DragDropContext>
</div>
  );
};

export default App;
