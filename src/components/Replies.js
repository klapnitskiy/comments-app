import React from "react";
import Reply from "./Reply";
export default function Replies({replies, commentId}) {
    const replyElements = replies.filter(reply => reply.commentId === commentId).map(filteredReply => {
        return <Reply key={filteredReply.id} {...filteredReply} />
    })

    return (
        <div className='mt-[24px]'>
            {replyElements}
        </div>
    )
}