import PropTypes from "prop-types";

const Persons = ({ persons, newFilter, deletePerson }) => {
  return (
    <ul>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(newFilter.toLowerCase())
        )
        .map((person) => (
          <li key={person.id}>
            {person.name} {person.number}
            <button onClick={() => deletePerson(person.id)}>delete</button>
          </li>
        ))}
    </ul>
  );
};

Persons.propTypes = {
  persons: PropTypes.array.isRequired,
  newFilter: PropTypes.string.isRequired,
  deletePerson: PropTypes.func.isRequired,
};

Persons.displayName = "Persons";
export default Persons;
