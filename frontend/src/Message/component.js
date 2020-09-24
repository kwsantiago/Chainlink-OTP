import React, { useState } from "react";

const Message = ({ messageText = "" }) => {
  const [messageInput, setMessage] = useState(messageText);

  const setter = (set) => (e) => {
    const { target } = e;
    const { value } = target;
    set(value);
  };
  const logValues = (e) => {
    e.preventDefault();
    console.log({ messageInput });
    return messageInput;
  };
  return (
    <div>
      <label>
        Message Input
        <input type="text" value={messageInput} onChange={setter(setMessage)} />
        <pre>{messageInput}</pre>
        <button onClick={logValues}>Encrypt Text</button>
      </label>
    </div>
  );
};

export default Message;
