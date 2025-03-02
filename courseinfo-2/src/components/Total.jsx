import PropTypes from "prop-types";

const Total = ({ course }) => {
  const sum = course.parts.reduce((acc, part) => {
    return acc + part.exercises;
  }, 0);
  return <p style={{ fontWeight: "bold" }}>total of {sum} exercises</p>;
};

Total.propTypes = {
  course: PropTypes.object.isRequired,
};

Total.displayName = "Part";
export default Total;
