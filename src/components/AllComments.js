import Comment from "./Comment";
import React from "react";

export default function AllComments({comments, replies}) {
    return (
        <div className='border-t mt-[32px] pt-[32px]'>
            {comments.map(comment => {
                return (
                    <Comment key={comment.id} {...comment} replies={replies} />
                )
            })}
        </div>
    )
}