import React from "react";

export default function Reply(props) {

    const {name, body, date, avatar} = props

    return (
        <div className='flex gap-x-[32px] mb-[48px] last:mb-0'>
            <div className='min-w-[80px]'>
                <img src={avatar} className='max-w-full rounded-[8px]' alt='#' />
            </div>
            <div className='flex flex-col justify-evenly min-h-[88]'>
                <div>
                    <span className='text-text0-700 text-[24px] font-semibold mr-[8px]'>{name}</span>
                    <span className='text-text-400 text-[18px]'>{date}</span>
                </div>
                <p className='text-text-700 text-[22px]'>
                    {body}
                </p>
            </div>
        </div>
    )
}