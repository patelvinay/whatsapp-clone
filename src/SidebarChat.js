import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";

import "./SidebarChat.css";

function SidebarChat({ addNewChat }) {
  const [seed, setSeed] = useState("");

  const createChat = () => {
    const roomName = prompt("Please enter name for chat");
    if (roomName) {
      //database stuff
    }
  };

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/bottts/${seed}.svg`} />
      <div className="sidebarChat__info">
        <h2>Room name</h2>
        <p>last message..</p>
      </div>
    </div>
  ) : (
    <div className="sidebarChat" onClick={createChat}>
      <h2>add new chat</h2>
    </div>
  );
}

export default SidebarChat;
