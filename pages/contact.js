import React from "react";

export default function Contact() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
  return (
    <div>
      <h1>Contact</h1>
      <div>
        <div>
          이름
          <input type="text" />
        </div>
        <div>
          휴대폰번호
          <input type="text" />
        </div>
        <div>
          이메일
          <input type="text" />
        </div>
        <div>
          전할 내용<br />
          <input type="textarea" />
        </div>
        <button>제출</button>
      </div>
    </div>
  );
}
