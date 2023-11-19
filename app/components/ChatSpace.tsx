"use client";
import { argv } from "process";
import React, { useEffect, useRef, useState } from "react";
import { BsFillSendFill } from "react-icons/bs";

interface chat {
    user : string,
    message : string
}

const ChatSpace = ({ user , messages , handleSend } : { user : string , messages : chat[] , handleSend : (data : chat) => void }) => {
  
  const chatInputRef = useRef<HTMLInputElement>(null);


  return (
    <>
      <div
        className="w-3/4 p-2 rounded relative space-y-3"
        style={{ backgroundColor: "#ECF9FF" }}
      >
        <div
          className="p-1 rounded shadow-md"
          id="chat-window"
          style={{ backgroundColor: "rgba(248, 203, 166, 0.7)" , height : '350px' , maxHeight : '380px' , overflow : 'scroll' }}
        >
          {messages.map((item) =>
            item.user === "luffy" ? (
              <div className="chat chat-start p-2" key={item.user}>
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://avatarfiles.alphacoders.com/227/thumb-1920-227700.jpg" />
                  </div>
                </div>
                <div className="chat-bubble rounded-2xl">{item.message}</div>
              </div>
            ) : (
              <div className="chat chat-end p-2" key={item.user}>
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://avatarfiles.alphacoders.com/830/thumb-1920-83064.jpg" />
                  </div>
                </div>
                <div className="chat-bubble rounded-2xl">{item.message}</div>
              </div>
            )
          )}

          {/* chat input */}
        </div>
        <div
          className="w-4/4 rounded relative"
        >
          <form className="flex justify-between form-control flex-row">
            <input type="text" ref={chatInputRef} className="input w-3/4 rounded-md font-mono" id={user} />
            <button className="btn btn-circle btn-primary text-lg" onClick={(event) => {
                event.preventDefault();
                const message = chatInputRef.current?.value! ;
                handleSend({ user : user , message : message });
                document.getElementById(user)!.value = '';                // it works
                const chatWindow = document.getElementById('chat-window');
                chatWindow!.scrollTop = chatWindow!.scrollHeight;
            }}>
              {" "}
              <BsFillSendFill />{" "}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChatSpace;
