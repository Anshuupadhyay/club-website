import { useState, useEffect, useRef } from "react";
import popSound from "../assets/pop.mp3";

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi! I am Library Buddy 🤖. Ask me about this club." }
  ]);

  const [showTooltip, setShowTooltip] = useState(false); // 👈 NEW

  const hasPlayed = useRef(false);

  useEffect(() => {
    const playSound = () => {
      if (!hasPlayed.current) {
        const audio = new Audio(popSound);
        audio.volume = 0.5;
        audio.play().catch(() => {});
        hasPlayed.current = true;
      }
    };

    window.addEventListener("click", playSound);

    return () => {
      window.removeEventListener("click", playSound);
    };
  }, []);

  // 👉 Show tooltip AFTER animation (same as drop time)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 1200); // match your drop animation duration

    return () => clearTimeout(timer);
  }, []);

  const options = [
    "What is this club about?",
    "What activities are there?",
    "How to join?"
  ];

  const handleClick = (option) => {
  let answer = "";

  if (option === "What is this club about?") {
    answer = "The Raghunandan Tiwari Library & Club is a vibrant space designed to foster a culture of learning, creativity, and collaboration among students. It serves as both a knowledge hub and a community platform, encouraging individuals to explore, grow, and share ideas.";
  } 
  else if (option === "What activities are there?") {
    answer = "We organize reading sessions, workshops, events, and discussions.";
  } 
  else if (option === "How to join?") {
    answer = "You can join by contacting us through the Contact section or visiting the club.";
  } 


  // Add the user's message immediately
  setMessages((prev) => [
    ...prev,
    { type: "user", text: option },
    { type: "bot", text: "..." } // placeholder for thinking
  ]);

  // Delay the actual answer for 2 seconds
  setTimeout(() => {
    setMessages((prev) => {
      const newMessages = [...prev];
      // Replace the last bot message ("...") with the real answer
      newMessages[newMessages.length - 1] = { type: "bot", text: answer };
      return newMessages;
    });
  }, 2000); // 2000ms = 2 seconds
};

  return (
    <div className="chatbot-container">
      
      {open && (
        <div className="chatbot-box">
          <div className="chatbot-header">
            <h4>Library Buddy 🤖</h4>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="chatbot-messages">
         {messages.map((msg, i) => (
  <div key={i} className={msg.type}>
    
    {msg.text === "..." ? (
      <div className="typing-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    ) : (
      msg.text
    )}

  </div>
))}
          </div>

          <div className="chatbot-options">
            {options.map((opt, i) => (
              <button key={i} onClick={() => handleClick(opt)}>
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* FLOATING BUTTON */}
      <div
        className="chatbot-btn bounce-drop"
        onClick={() => setOpen(!open)}
      >
        🤖

        {/* TOOLTIP (ONLY AFTER DROP) */}
        {showTooltip && (
          <div className="chatbot-tooltip">
          Hi, I’m ClubMate 👋
          Need help?
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatBot;