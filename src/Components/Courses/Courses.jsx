import React from 'react'
import './courses.css'

function Courses() {
return (
<div className='courses' id='courses'>
    <h1 className='course-heading'>Courses</h1>

    <div className="all-courses">
    <div className='coursecard'>
        <img className='course-image' src="https://media.istockphoto.com/id/178639670/photo/garden-greenhouse.jpg?s=612x612&w=0&k=20&c=U9aD4qA14Ziw8d6I0-8zl-BjGqaxRupMPDSY-63s9ao="/>
        <div className="coursecardbody">
            <h3 className='course-title'>Green House Effects</h3>
            <p className='course-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, repellat tenetur odio eius doloremque cum ea ratione accusantium! Impedit libero, doloremque laudantium ea fuga!</p>
            <button className='course-btn'>View Course</button>
        </div>
    </div>

    <div className='coursecard'>
        <img className='course-image' src="https://media.istockphoto.com/id/178639670/photo/garden-greenhouse.jpg?s=612x612&w=0&k=20&c=U9aD4qA14Ziw8d6I0-8zl-BjGqaxRupMPDSY-63s9ao="/>
        <div className="coursecardbody">
            <h3 className='course-title'>Green House Effects</h3>
            <p className='course-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex natus necessitatibus magnam consectetur cupiditate tempora molestiae nostrum saepe ipsam laborum delectus fugiat facilis, reprehenderit dolore?</p>
            <button className='course-btn'>View Course</button>

        </div>
    </div>

    <div className='coursecard'>
        <img className='course-image' src="https://media.istockphoto.com/id/178639670/photo/garden-greenhouse.jpg?s=612x612&w=0&k=20&c=U9aD4qA14Ziw8d6I0-8zl-BjGqaxRupMPDSY-63s9ao="/>
        <div className="coursecardbody">
            <h3 className='course-title'>Green House Effects</h3>
            <p className='course-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nemo repellat incidunt error aliquid. Laudantium veritatis nulla numquam dolore soluta? Obcaecati exercitationem ex vel minus!</p>
            <button className='course-btn'>View Course</button>
        </div>
    </div>
    </div>

</div>
)
}

export default Courses