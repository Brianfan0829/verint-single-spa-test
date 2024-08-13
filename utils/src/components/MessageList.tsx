import React from "react";
import { MyEvent } from "../event-bus";

interface MessageListProps {
  messages: MyEvent[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => (
  <ul>
    {messages.map((msg, idx) => {
      const date = new Date(msg.timestamp);
      const formattedDate = date.toLocaleDateString("en-GB", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
      });
      return (
        <li key={idx}>
          {msg.message} <small>({formattedDate})</small>
        </li>
      );
    })}
  </ul>
);

export default MessageList;
