import PropTypes from "prop-types";

const Persons = ({ persons, newFilter }) => {
  return (
    <ul>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(newFilter.toLowerCase())
        )
        .map((person) => (
          <li key={person.id}>
            {person.name} {person.number}
          </li>
        ))}
    </ul>
  );
};

Persons.propTypes = {
  persons: PropTypes.array.isRequired,
  newFilter: PropTypes.string.isRequired,
};

Persons.displayName = "Persons";
export default Persons;
