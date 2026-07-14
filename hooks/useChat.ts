"use client";

import { useState } from "react";
import { Message } from "@/types/chat";

export function useChat() {

    const [messages,setMessages]=useState<Message[]>([]);

    function sendMessage(text:string){

        const newMessage:Message={

            id:crypto.randomUUID(),

            role:"user",

            content:text,

            createdAt:new Date(),

        };

        setMessages((prev)=>[...prev,newMessage]);

    }

    return{

        messages,

        sendMessage,

    }

}