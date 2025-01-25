import { assets } from "../../assets/assets";

const CourseCard = ({ course }) => {
  return (
    <div>
      <img src={course.courseThumbnail} alt="" />
      <div>
        <h3>{course.courseTitle}</h3>
        <p>{course.educator.name}</p>
        <div>
          <p>4.5</p>
          <div>
            {[...Array(5)].map((_, i) => (
              <img key={i} src={assets.star} alt="" />
            ))}
          </div>
          <p>22</p>
        </div>
        <p>
          {(
            course.coursePrice -
            (course.discount * course.course) / 100
          ).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CourseCard;
