import Part from "./Part";
import PropTypes from "prop-types";

const Content = ({ course }) => {
  return (
    <div>
      {course?.parts?.map((part) => (
        <Part key={part.id} part={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

Content.propTypes = {
  course: PropTypes.object.isRequired,
};

Content.displayName = "Content";
export default Content;
