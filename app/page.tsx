"use client";
import NavBar from "./components/NavBar";
import ChatSpace from "./components/ChatSpace";
import { useEffect, useState } from "react";
import { GetAllData } from "./utility/GetAllData";

interface chat {
  user : string,
  message : string
}

export default function Home() {
  const [messages , setMessage] = useState<chat[]>([]);
  
  useEffect(() => {
    const GetChats = async () => {
        const response = await GetAllData("/api/getchat", {});
        setMessage(response.data);
      };

    GetChats();
  },[])

    const SendChats = async (data : chat) => {
      const response = await GetAllData("/api/sendchat", {message : data.message , user : data.user});
    };
    
    
    const handleSend = async (data : chat) => {
      if (data.message !== '') {
        setMessage([...messages , data]);
        await SendChats(data);
      }
      else console.log('say nothing');
  }


  return (
    <>
      <div className="flex flex-col gap-2 w-2/4 items-center h-3/4 transition-all hover:scale-100">
          <NavBar from="luffytaro" />
          <ChatSpace user="luffy" handleSend={handleSend} messages={messages} />
      </div>
      <div className="flex flex-col gap-2 w-2/4 items-center h-3/4 transition-all hover:scale-100">
          <NavBar from="zoro"  />
          <ChatSpace user="zoro" handleSend={handleSend} messages={messages} />
      </div>
    </>
  );
}
