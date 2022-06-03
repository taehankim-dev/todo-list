import { useState } from 'react';
// import Footer from './Components/Footer';
import Main from './Components/Main';
import Todo from './Components/Todo';

import main_bg01 from './assets/main_bg01.jpg';

function checkHeight(){
  let height = window.innerHeight;
  return height;
}

function App() {
  const [mode, setMode] = useState('showTodo');
  let _article;

  let _height = checkHeight();

  if(mode === 'welcome'){
    _article = <Main onClickEvent={()=>{setMode('showTodo')}} />
  } else if(mode === 'showTodo'){
    _article = <Todo onClickEvent={()=>{setMode('welcome')}}/>
  }
  console.log("render App")
  return (
    <div className="App" style={{backgroundImage: `url(${main_bg01})`, backgroundSize:'cover', height:_height}}>
      <article>
        {_article}
      </article>
      
      {/* <Footer /> */}
    </div>
  );
}

export default App;
