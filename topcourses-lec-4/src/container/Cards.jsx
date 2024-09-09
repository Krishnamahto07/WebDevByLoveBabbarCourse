import React from 'react'
import {Card} from './Card'
export const Cards = ({courses,category}) => {
    let coursesArr = []

    const getCourses =()=>{
        if(category === "All")
        Object.values(courses).forEach((courseCategory) => {
            courseCategory.forEach((course)=>{
                coursesArr.push(course);
            })
        })
        else coursesArr = courses[category];
    }

    getCourses()
  return (
    <div className='cards'>
        {
            coursesArr && coursesArr.map((course)=>{
                return <Card key={course.id} course={course} />
            })
        }
            
    </div>
  )
}
