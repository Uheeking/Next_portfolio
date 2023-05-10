import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [isHovering, setIsHovering] = useState(false);

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangeText = (e) => {
    setText(e.target.value);
  };
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const borderbox = {
    border: "1px solid black",
    width: "100%",
    padding: "12px 10px",
    margin: " 8px 0",
    display: "inline-block",
    borderRadius: "4px",
    boxSizing: "border-box",
  };

  const submitbtn = {
    width: "100%",
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "14px 20px",
    margin: "8px 0",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const hoverbtn = {
    width: "100%",
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "14px 20px",
    margin: "8px 0",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    backgroundColor: "#45a049",
  };

  const forms = {
    borderRadius: "5px",
    backgroundColor: "#f2f2f2",
    padding: "20px",
  };

  return (
    <div>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit} style={forms}>
        <div>
          이름
          <input
            type="text"
            value={name}
            onChange={onChangeName}
            style={borderbox}
          />
        </div>
        <div>
          휴대폰번호
          <input
            type="text"
            value={phone}
            onChange={onChangePhone}
            style={borderbox}
          />
        </div>
        <div>
          이메일
          <input
            type="text"
            value={email}
            onChange={onChangeEmail}
            style={borderbox}
          />
        </div>
        <div>
          전할 내용
          <br />
          <input
            type="textarea"
            value={text}
            onChange={onChangeText}
            style={borderbox}
          />
        </div>
        <button
          style={isHovering ? hoverbtn : submitbtn}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          제출
        </button>
      </form>
    </div>
  );
}
