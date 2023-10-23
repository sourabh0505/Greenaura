import React from 'react'
import './courses.css'

function Courses() {
return (
<div className='courses' id='courses'>
    <h1 className='course-heading'>Quizzes Here! <span>(Get Certificate Over Completion)</span></h1>

    <div className="all-courses">
    <div className='coursecard'>
        <img className='course-image' src="https://img.freepik.com/free-photo/environmental-conservation-garden-children_1150-15276.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697587200&semt=sph"/>
        <div className="coursecardbody">
            <h3 className='course-title'>Fundamentals of Renewable energy Quiz</h3>
            <p className='course-text'>Learn about fundamentals of renewable energy. If you are a novice the this short course is a perfect stepping stone to build career in the green future...</p>
            <div className="course-quiz-btn">
            <a target='_blank' href="https://drive.google.com/file/d/1YD_1_IRJw2f7HmUmlx64sH2ZlrWcTDuv/view"><button className='course-btn'>Learn More</button></a>
            <a target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLScTV7r8YyHE_RC-ovL4lmTLghMLRYdrbKjeaXx-kTNka-49bQ/viewform?vc=0&c=0&w=1&flr=0"><button className='quiz-btn'>Start the Quiz</button></a>
            </div>
        </div>
    </div>

    <div className='coursecard'>
        <img className='course-image' src="https://c1.wallpaperflare.com/preview/917/285/137/environmental-protection-nature-conservation-ecology-eco.jpg"/>
        <div className="coursecardbody">
            <h3 className='course-title'>Photovoltaics Systems and Smart Grids Quiz</h3>
            <p className='course-text'>If you have a question that how light is actually converted into electricity and what is the footprint of photovoltaic systems then this course will go through all information you need to understand about solar energy...</p>
            <div className="course-quiz-btn">
            <a target='_blank' href="https://drive.google.com/file/d/1YGz3R066043jzolnplkg6ciqUOToOhpA/view"><button className='course-btn'>Learn More</button></a>
            <a target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLSe3gu3lsVoNL_oAeLE9BwCtA4wmnV5KE-P4ObKSvfVQf2D7WQ/viewform?vc=0&c=0&w=1&flr=0"><button className='quiz-btn'>Start the Quiz</button></a>
            </div>

        </div>
    </div>

    <div className='coursecard'>
        <img className='course-image' src="https://cordmagazine.com/wp-content/uploads/2020/05/Effects-of-Environmental-Degradation-Main-1.jpg"/>
        <div className="coursecardbody">
            <h3 className='course-title'>Introduction to Electric Vehicles Quiz</h3>
            <p className='course-text'>Excited about transition of automobile industry and want basic technical knowledge of electric vehicles? Check out this mini course. Tailored for beginners who are passionate about working of such marvellous machines...</p>
            <div className="course-quiz-btn">
            <a target='_blank' href="https://drive.google.com/file/d/1YHvDAv3Gb1qF8YNxzT6mIYy7xXbN6cT0/view?usp=drivesdk"><button className='course-btn'>Learn More</button></a>
            <a target='_blank' href="https://www.google.com/url?q=https://docs.google.com/forms/d/e/1FAIpQLSesXMoXPdSSE2SMaiHy4iThJjvpC9SkezIuFxIQX1C3C0mgZA/viewform?vc%3D0%26c%3D0%26w%3D1%26flr%3D0%26usp%3Dmail_form_link&source=gmail&ust=1697649062756000&usg=AOvVaw0sxc5HKrle67fuoQWLukaR"><button className='quiz-btn'>Start the Quiz</button></a>
            </div>
        </div>
    </div>
    </div>

</div>
)
}

export default Courses