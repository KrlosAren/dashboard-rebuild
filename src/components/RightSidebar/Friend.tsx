import React from "react";
import { FriendType } from "../../interfaces";

const Friend = ({ friend }: FriendType) => {
  const { img, name } = friend;
  return (
    <div className="friend">
      <img src={img} alt="profile" />
      <div className="friend__info">
        <h4>{name}</h4>
        <p>
          Confirm friend
          <i className="fas fa-plus"></i>
        </p>
      </div>
    </div>
  );
};

export default Friend;
