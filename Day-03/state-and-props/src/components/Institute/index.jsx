

import './style.css'

function Institute({instructor, course}) {
  return (
    <div className='institute'>
       <p>The instructor is {instructor}</p>
      <p>The course is {course}</p>
    </div>
  )
}

export default Institute
