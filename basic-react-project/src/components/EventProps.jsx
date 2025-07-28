import "../components/EV.css";
export const EventProps = () => {
  const handleOnclick = (user) => {
    alert(`Hey, ${user}!`);
  };

  const handleMouseEnter = () => {
    alert(`Hey, Hovering me!`);
  };

  return (
    <>
      <WelcomeUser
        onClick={() => handleOnclick("Ram")}
        onMouseEnter={handleMouseEnter}
      />
    </>
  );
};

const WelcomeUser = (props) => {
  const { onClick, onMouseEnter } = props;
  const handlegreetings = () => {
    console.log("Good Morning!");
    onClick();
  };
  return (
    <>
      <button onClick={onClick}>Click Me</button>
      <button onMouseEnter={onMouseEnter}>Hover Me</button>
      <button onClick={handlegreetings}>Greetings</button>
    </>
  );
};
