// By default in React Event Propogation happens in Bubbling Phase.
// For Capturing phase we need to pass event as 'onClickCapture'

export const EventPropogation = () => {
  const handleGrandparentClick = () => {
    console.log("Grandparent Clicked");
  };
  const handleParentClick = () => {
    console.log("Grandparent Clicked");
  };
  const handleChildClick = (event) => {
    console.log(event);
    console.log("Grandparent Clicked");
  };
  return (
    <section className="container">
      <div className="g-div" onClick={handleGrandparentClick}>
        <div className="p-div" onClick={handleParentClick}>
          <button className="c-div" onClick={handleChildClick}>
            Click Me
          </button>
        </div>
      </div>
    </section>
  );
};
