import React, { useState } from 'react';
import './Main.scss';

function checkDay(){
  let nowDate = new Date();
  let year = String(nowDate.getFullYear()).slice(2,4);
  let month = addZero(nowDate.getMonth()+1);
  let date = addZero(nowDate.getDate());
  let hour = addZero(nowDate.getHours());
  let min = addZero(nowDate.getMinutes());
  let day = nowDate.getDay();
  let dayName;
  if(day === 1){
    dayName = "Mon";
  } else if(day === 2){
    dayName = "Tue";
  } else if(day === 3){
    dayName = "Wed";
  } else if(day === 4){
    dayName = "Thu";
  } else if(day === 5){
    dayName = "Fri";
  } else if(day === 6){
    dayName = "Sat";
  } else if(day === 7){
    dayName = "Sun";
  } 

  let obj = {
    year : year, 
    month : month,
    date : date,
    hour : hour,
    min : min,
    day : dayName,
  }

  return obj;
}

function addZero(value){
  return value < 10 ? "0"+value : value;
}

function Main(props){
  let nowDay = checkDay();

  const [min, setMin] = useState(nowDay.min);
  const [hour, setHour] = useState(nowDay.hour)
  
  setInterval(()=>{
    nowDay = checkDay();
    setMin(nowDay.min)
    setHour(nowDay.hour)
  }, 60000)

  
  
  console.log("render Main")
  return(
    <>
      <div >
        <div className='mainBox clockBox'>
          <p>{nowDay.day+"."}</p>
          <p>{hour} : {min}</p>
          <p>{nowDay.year}. {nowDay.month}. {nowDay.date}.</p>
        </div>
        <div className='mainBox buttonBox'>
          <button onClick={(e)=>{
            e.preventDefault();
            props.onClickEvent()
          }}>Show To Do List</button>
        </div>
      </div>
    </>
  )
}

export default Main;