import React, {useContext} from 'react'
import Replies from "./Replies";
import {CommentContext} from "./AppWrapper";

export default function Comment(props) {
    const { handleDelete } = useContext(CommentContext)

    const {name, date, avatar, body, id, replies} = props

    return (
        <div className='flex gap-x-[32px] mb-[48px] last:mb-0'>
            <div className='min-w-[80px] max-w-[120px]'>
                <img src={avatar} className='max-w-full rounded-[8px]' alt='#' />
            </div>
            <div className='flex flex-col justify-between'>
                <div className='flex flex-col justify-between min-h-[120px]'>
                    <div>
                        <span className='text-text0-700 text-[24px] font-semibold mr-[8px]'>{name}</span>
                        <span className='text-text-400 text-[18px]'>{date}</span>
                    </div>
                    <p className='text-text-700 text-[22px]'>
                        {body}
                    </p>
                    <div>
                        <button className='text-text-400 text-[18px] mr-[24px] last:mr-0'>Edit</button>
                        <button onClick={() => handleDelete(id)} className='text-text-400 text-[18px] mr-[24px] last:mr-0'>Delete</button>
                        <button className='text-text-400 text-[18px] mr-[24px] last:mr-0'>Reply</button>
                    </div>
                </div>
                {replies && <Replies replies={replies} commentId={id} />}
            </div>
        </div>
    )
}