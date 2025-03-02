import PropTypes from "prop-types";
import Content from "./Content";
import Total from "./Total";

const Course = ({ courses }) => {
  return (
    <div>
      {courses?.map((course) => {
        return (
          <div key={course.id}>
            <h2>{course.name}</h2>
            <Content course={course} />
            <Total course={course} />
          </div>
        );
      })}
    </div>
  );
};

Course.propTypes = {
  courses: PropTypes.array.isRequired,
};

Course.displayName = "Course";
export default Course;
