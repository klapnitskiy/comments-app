import React, {useEffect, useState} from "react";
import WriteComment from "./WriteComment";
import AllComments from "./AllComments";
import useFetch from "./useFetch";

export const CommentContext = React.createContext()

export default function AppWrapper() {

    const {data: comments, isPending, error} = useFetch('http://localhost:8000/comments')
    const {data: replies} = useFetch('http://localhost:8000/replies')

    const [newComments, setNewComments] = useState({comments})

    const commentContextValue = {
        handleDelete,
        handleAdd,
    }

    useEffect(() => {
        setNewComments(comments)
    }, [comments])

    async function handleDelete(id) {

        await fetch('http://localhost:8000/comments/' + id, { method: "DELETE" });
        await fetch('http://localhost:8000/comments')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setNewComments(data)
            })

        // const updateComments = comments.filter((comment) => comment.id !== id);
        // setNewComments(updateComments);
        // console.log(newComments);
        // console.log('test')
    }

    async function handleAdd(e, body) {
        e.preventDefault()

        const faker = require('faker');
        const newComment = {id: faker.datatype.uuid() , name: faker.name.findName(), body, avatar: faker.image.avatar(), date: 1633095057};

        await fetch('http://localhost:8000/comments', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newComment),
        })
        // fetch('http://localhost:8000/comments')
        //     .then(res => {
        //         return res.json()
        //     })
        //     .then(data => {
        //         setNewComments(data)
        //     })
        setNewComments([...newComments, newComment])
    }

    return (
        <CommentContext.Provider value={commentContextValue}>
            <div className="min-h-screen min-w-full bg-other-100">
                <div className='max-w-[1200px] mx-auto bg-white px-[88px] py-[48px]'>
                    <div className='flex flex-col'>
                        <WriteComment />
                        {error && <div>{error}</div>}
                        {isPending && <div>Loading...</div>}
                        {newComments && newComments.length > 0 && <AllComments comments={newComments} replies={replies} />}
                    </div>
                </div>
            </div>
        </CommentContext.Provider>
    )
}