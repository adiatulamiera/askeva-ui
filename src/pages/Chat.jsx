// File: src/pages/Chat.jsx
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

function Chat() {
  const [messages, setMessages] = useState([
    { from: 'Eva', text: "Hi! I'm Eva. How can I assist you today?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { from: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5005/webhooks/rest/webhook', {
        sender: 'user',
        message: input,
      });

      const botReplies = response.data.map(reply => ({
        from: 'Eva',
        text: reply.text,
      }));

      setMessages(prev => [...prev, ...botReplies]);
    } catch (error) {
      console.error('Error talking to Rasa:', error);
      setMessages(prev => [
        ...prev,
        { from: 'Eva', text: 'Sorry, I had trouble replying. Please try again.' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white p-4 font-body">
      <h2 className="text-3xl text-center font-heading text-secondary mb-6">AskEva Chat</h2>

      <div className="flex-1 h-[calc(100vh-12rem)] border rounded-md p-4 overflow-y-auto space-y-3 bg-soft">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-xs px-4 py-2 rounded-xl shadow ${
              msg.from === 'user'
                ? 'ml-auto bg-primary text-white'
                : 'mr-auto bg-gray-200 text-gray-800'
            }`}
          >
            {msg.text}
          </div>
        ))}

        {loading && (
          <div className="mr-auto bg-gray-300 text-gray-600 px-4 py-2 rounded-xl shadow animate-pulse max-w-xs">
            Eva is typing...
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="mt-4 flex">
        <input
          className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none placeholder:italic"
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-secondary text-white px-6 rounded-r-md hover:bg-purple-500"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
