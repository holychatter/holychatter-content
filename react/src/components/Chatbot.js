import { useState } from 'react'
import HCNavBar from './HCNavBar';


function Chatbot({language}) {

    function onEnterPress(e) {
        if(e.keyCode == 13 && e.shiftKey == false) {
          e.preventDefault();
          setMessages([...messages, document.getElementById("chatbotInputId").value]);
          document.getElementById("chatbotInputId").value = ""
        }
      }


    const [messages, setMessages] = useState(["toto"])
    return (
        <div style={{ marginLeft: 200 }}>
            <HCNavBar language={language} />
            {
                messages.map((message, index) => (
                    <div key={"msg-${index}"}>
                        {message}
                    </div>
                ))
            }


            <textarea
               id="chatbotInputId"
               // on={(e) => setMessages([...messages, e.target.value])}
                onKeyDown={onEnterPress}
            />
        </div>
    )
}

export default Chatbot
