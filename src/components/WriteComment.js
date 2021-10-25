import React, {useContext, useState} from "react";
import {CommentContext} from "./AppWrapper";

export default function WriteComment() {
    const { handleAdd } = useContext(CommentContext)

    const [body, setBody] = useState('');

    return (
        <div className='flex gap-x-[32px]'>
            <div className='max-w-[120px] min-w-[80px]'>
                <img src={'https://avatarfiles.alphacoders.com/269/269951.jpg'} className='max-w-full rounded-[8px]' alt='#' />
            </div>
            <form onSubmit={(e) => handleAdd(e, body)} className='w-full flex flex-col items-end gap-[16px]'>
                <textarea value={body} onChange={(e) => setBody(e.target.value)} required className='h-[120px] w-full border-other-300 px-[24px] py-[16px] resize-none border border-other-300 rounded-[8px] outline-none text-[22px]' placeholder='Your message' />
                <button className='text-[20px] px-[50px] py-[14px] bg-secondary-300 text-white w-min rounded-[3px]'>
                    Send
                </button>
            </form>
        </div>
    )
}