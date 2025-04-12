import PropTypes from "prop-types";

const Notification = ({ message }) => {
  if (!message) {
    return null;
  }

  const style = {
    color: "green",
    background: "lightgrey",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  };

  return <div style={style}>{message}</div>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
