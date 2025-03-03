import PropTypes from "prop-types";

const Filter = ({ newFilter, handleFilterChange }) => {
  return (
    <div>
      filter shown with
      <input
        style={{ margin: "0 0 5px 5px" }}
        value={newFilter}
        onChange={handleFilterChange}
      />
    </div>
  );
};

Filter.propTypes = {
  newFilter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

Filter.displayName = "Filter";
export default Filter;
