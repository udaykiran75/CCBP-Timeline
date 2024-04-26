import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, tagsList, duration} = courseDetails

  return (
    <>
      <div className="courseTitle-duration-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle color="#171f46" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <ul className="course-tags-list">
        {tagsList.map(eachTag => (
          <li className="tagItem" key={eachTag.id}>
            <p className="tagName">{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
export default CourseTimelineCard
