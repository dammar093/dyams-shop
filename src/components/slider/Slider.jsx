import React, { useState } from 'react'
import slider1 from '../../assets/slider-image/slider1.jpg'
import slider2 from '../../assets/slider-image/slider2.jpg'
import './Slider.css'
import { Link } from 'react-router-dom'
import { FaAngleLeft,FaAngleRight } from "react-icons/fa6";



const Slider = () => {

  const [index,setIndex] = useState(0)
  const sliderData = [ 
    {
    id:1,
    image:slider1,
    h5:"Trending 2024",
    h2:"faux lether",
    h3:"biker jacket",
    p:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, saepe ut mollitia culpa",
    p1:"doloremque quaerat corrupti asperiores pariatur similique id!"
  
  },
  {
    id:2,
    image:slider2,
    h5:"Trending 2024",
    h2:"zara shop",
    h3:"shop by lookbook",
    p:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, saepe ut mollitia culpa",
    p1:"doloremque quaerat corrupti asperiores pariatur similique id!"
  
  } 
  ]

  const handelClick =(direction) =>{
      if(direction === "prev"){
        setIndex(index > 0 ? index -1 : sliderData.length-1)
      }
      else{
        setIndex(index < sliderData.length-1? index +1 : 0 )

      }
  }

  return (
    <div className='slider' >
         <div className="image-slide">
          {
            
            sliderData.map((data)=>{
              return(
                <div className="slide" key={data.id}  style={{
                  transform:`translateX(${index * -100}vw)`
                }}>
                <img src={data.image} alt="slider-image" />
                    <div className="desc">
                      <h5>{data.h5}</h5>
                      <h2>{data.h2}</h2>
                      <h3>{data.h3}</h3>
                      <p>{data.p} <br /> {data.p1}</p>
                    <Link to="products" className='btn'>shop now</Link>
                    </div>
             </div>
              )
            })
          }
          
         </div> 
           <FaAngleLeft  className='prev cursor' onClick={()=>handelClick("prev")}/>
           <FaAngleRight className='next cursor' onClick={()=>handelClick("next")}/>
    </div>
  )
}

export default Slider