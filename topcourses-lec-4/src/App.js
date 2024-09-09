import React, { useEffect, useState } from 'react';
import "./App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {filterData} from './data';
import {apiUrl} from './data';

import Navbar from './container/Navbar';
import { Button } from './container/Button';
import { Cards } from './container/Cards';
  function App(){
    // const notify = () => toast("Wow so easy!");

    const [courses , setCourses] = useState([]);
    const [category, setCategory] = useState(filterData[0].title);
    const clickHandler = (data,e) =>{
      setCategory(data.title)
    }
    useEffect(()=>{
      const fetchData = async() =>{
        try {
          const res = await fetch(apiUrl);
          const output = await res.json();
          setCourses(output.data);

        } catch (error) {
          toast.error("Something went wrong!");
          console.log(error)
        }
      }
      fetchData();
    },[])
    return (
      <div className='wrapper'>
        <Navbar/>
        {/* Buttons section  */}
        <section className='btn-container'>
          {
            filterData.map((data,i)=>{
              if(category === data.title) return (<div key={data.id} className="selected" ><Button data={data} clickHandler={()=>clickHandler(data)} key={data.id}/></div>)
              else return(<Button data={data} clickHandler={()=>clickHandler(data)} key={data.id} />)
            })
          }
        </section>
        
        <Cards courses={courses} category={category} />

        <ToastContainer />
      </div>
    );
  }

export default App;