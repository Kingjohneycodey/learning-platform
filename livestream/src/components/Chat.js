import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../actions/chatActions";
import { Send } from "lucide-react"; // Import the send icon
import "../styles/chat.css";

const socket = io("http://localhost:5001");

const Chat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("chatMessage", (msg) => {
      dispatch(addMessage(msg));
    });
  }, [dispatch]);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("chatMessage", message);
      setMessage("");
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>
          <Send size={20} /> {/* Send Icon */}
        </button>
      </div>
    </div>
  );
};

export default Chat;
