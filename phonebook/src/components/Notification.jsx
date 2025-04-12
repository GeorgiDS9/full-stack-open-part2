import PropTypes from "prop-types";

const Notification = ({ message }) => {
  if (!message) {
    return null;
  }

  const style = {
    color: message.type === "error" ? "red" : "green",
    background: "lightgrey",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  };

  return <div style={style}>{message.message}</div>;
};

Notification.propTypes = {
  message: PropTypes.shape({
    message: PropTypes.string,
    type: PropTypes.oneOf(["success", "error"]),
  }),
};

Notification.displayName = "Notification";
export default Notification;
