import React, { useState } from "react";
import axios from "axios";

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
    axios
      .post("http://localhost:3001/", {
        name: name,
        phone: phone,
        email: email,
        text: text,
      })
      .then((result) => {
        console.log(result.data.code);
        if(result.data.code == 200){
          alert(result.data.message)
        }
      })
      .catch((error) => {
        console.error(error);
      });
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
    padding: "30px 50px",
  };

  return (
    <div className="sm:w-3/5 lg:w-2/5">
      <div className="text-3xl italic font-bold">Contact</div>
      <div>프로젝트를 보고 제가 마음에 드신다면 아래의 폼을 작성해서 제출해주세요. 그러면 저에게 연락이 갑니다. </div>
      <form onSubmit={handleSubmit} style={forms} className="darkness">
        <div className="font-semibold">
          이름
        </div>
        <input
            type="text"
            value={name}
            onChange={onChangeName}
            style={borderbox}
          />
        <div className="font-semibold">
          휴대폰번호
        </div>
          <input
            type="text"
            value={phone}
            onChange={onChangePhone}
            style={borderbox}
          />
        <div className="font-semibold">
          이메일
        </div>
          <input
            type="text"
            value={email}
            onChange={onChangeEmail}
            style={borderbox}
          />
        <div className="font-semibold">
          전할 내용
          <br />
        </div>
          <input
            type="textarea"
            value={text}
            onChange={onChangeText}
            style={borderbox}
          />
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
