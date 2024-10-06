import React from 'react'
import CounterPage from './pages/CounterPage';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoList from './components/Todo/TodoList';


function App() {
  return (
    <div className='page-container'>
        <div className='content-wrap'>
            <Header/>
                <Routes>
                    <Route path='/' element={<TodoList/>}/>
                    <Route path='/counter' element={<CounterPage/>} />
                </Routes>
        </div> 
        <Footer/>
    </div>
  )
}

export default App;