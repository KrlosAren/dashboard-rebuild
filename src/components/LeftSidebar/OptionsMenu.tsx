import React from "react";
import { Settings } from "../../interfaces/index";

const OptionsMenu = ({ setting, icon, color }: Settings) => {
  return (
    <div className="menu__options">
      <h5>{setting}</h5>
      <i className={icon} style={{ color: color }}></i>
    </div>
  );
};

export default OptionsMenu;
