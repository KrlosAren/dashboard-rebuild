import React, { useContext, useState } from "react";
import { AppContext } from '../../context/AppContext';
import { ChannelProps, Menu } from "../../interfaces/index";
import { randomColor } from "../../utils";
import OptionsMenu from "./OptionsMenu";

const MenuItem = ({ name }: Menu) => {
  const { state } = useContext(AppContext);
  const { channels } = state;
  const [options, setOptions] = useState(true);
  const toggleMenu = (e: React.MouseEvent) => {
    (e.target as HTMLElement).getAttribute("data-menu");
    setOptions(!options);
  };

  return (
    <>
      <div className="menu__item" onClick={toggleMenu}>
        <h4>{name}</h4>
        {options ? (
          <i className="fas fa-chevron-down"></i>
        ) : (
          <i
            className="fas fa-chevron-up"
            style={{ color: "#80ffdb" }}
            onClick={toggleMenu}
            data-menu={name}
          ></i>
        )}
      </div>
      {options === true ||
        (name === "Profile" && (
          <>
            <OptionsMenu setting={"Edit profile"} icon={"fas fa-user-edit"} />
            <OptionsMenu setting={"Security"} icon={"fas fa-lock"} />
          </>
        ))}
      {options === true ||
        (name === "Main" && (
          <>
            <OptionsMenu setting={"Settings"} icon={"fas fa-sliders-h"} />
            <OptionsMenu setting={"Banks"} icon={"fas fa-credit-card"} />
          </>
        ))}
      {options === true ||
        (name === "Tools" && (
          <>
            <OptionsMenu setting={"Call"} icon={"fas fa-phone-volume"} />
            <OptionsMenu setting={"Wifi"} icon={"fas fa-wifi"} />
          </>
        ))}
      {options === true ||
        (name === "Info" && (
          <>
            <OptionsMenu setting={"Help"} icon={"fas fa-question-circle"} />
          </>
        ))}
      {options === true ||
        (name === "Channels" && (
          <>
            {channels.map((channel: ChannelProps) => (
              <OptionsMenu
                setting={channel.channel}
                icon={"fas fa-circle"}
                color={randomColor()}
                key={channel.id}
              />
            ))}
          </>
        ))}
    </>
  );
};

export default MenuItem;
