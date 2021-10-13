import React, { useContext } from "react";
import { AppContext } from 'src/context/AppContext';
import { FriendProps } from "../../interfaces";
import Friend from "./Friend";

const FriendsRequest = () => {
  const { state } = useContext(AppContext);
  const { contactRequest } = state;

  return (
    <div className="friend__container">
      <h2>Friends Request</h2>
      {contactRequest.map((friend: FriendProps) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </div>
  );
};

export default FriendsRequest;
