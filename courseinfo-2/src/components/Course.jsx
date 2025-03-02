import PropTypes from "prop-types";
import Content from "./Content";

const Course = ({ course }) => {
  return (
    <div>
      <h1>{course.name}</h1>
      <Content course={course} />
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
};

Course.displayName = "Course";
export default Course;
