import { useState } from "react";
import "./ToggleSwitch.css";

export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

  const setStyleToggle = { backgroundColor: isOn ? "#4caf50" : "" };

  const toggleSwitchClass = isOn ? "on" : "off";

  return (
    <div
      className="toggle-switch"
      style={setStyleToggle}
      onClick={handleToggleSwitch}
    >
      <div className={`switch ${toggleSwitchClass}`}>
        <span className="switch-state"> {isOn ? "on" : "off"} </span>
      </div>
    </div>
  );
};
