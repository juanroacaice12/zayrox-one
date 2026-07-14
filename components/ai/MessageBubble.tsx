import { Message } from "@/types/chat";

interface Props{

message:Message;

}

export default function MessageBubble({

message,

}:Props){

const isUser=message.role==="user";

return(

<div

className={`flex ${isUser?"justify-end":"justify-start"}`}

>

<div

className={`max-w-[80%] rounded-2xl px-5 py-3

${isUser

?"bg-blue-600 text-white"

:"bg-slate-100"

}

`}

>

{message.content}

</div>

</div>

)

}