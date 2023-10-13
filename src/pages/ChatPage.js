import React, { useState, useEffect } from "react";
import axios from "axios";

function ChatPage() {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    fetchChats();
  }, []);

  const fetchChats = async () => {
    await axios
      .get("/api/chats")
      .then((resp) => {
        let { data } = resp;
        setChats(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {chats.map((chat) => {
        return <div key={chat._id}>{chat?.chatName}</div>;
      })}
    </div>
  );
}

export default ChatPage;
