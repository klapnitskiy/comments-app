// import React, {createContext, useState} from "react";
// import useFetch from "../components/useFetch";
// import faker from "faker";
//
// export const CommentContext = createContext();
//
// const CommentContextProvider = (props) => {
//     const {data: comments, isPending, error} = useFetch('http://localhost:8000/comments')
//     const [newComments, setNewComments] = useState(
//
//     )
//     // handleAdd
//     const addComment = async (e, body) => {
//         e.preventDefault()
//
//         const faker = require('faker');
//         const newComment = {id: faker.datatype.uuid() , name: faker.name.findName(), body, avatar: faker.image.avatar(), date: 1633095057};
//
//         // await fetch('http://localhost:8000/comments', {
//         //     method: 'POST',
//         //     headers: {"Content-Type": "application/json"},
//         //     body: JSON.stringify(newComment),
//         // })
//         setNewComments([...newComments, newComment])
//     }
//     // handleDelete
//     const deleteComment = async (id) => {
//
//         setNewComments(newComments.filter(newComment => newComment.id !== id))
//
//             // await fetch('http://localhost:8000/comments/' + id, { method: "DELETE" });
//             // await fetch('http://localhost:8000/comments')
//             //     .then(res => {
//             //         return res.json()
//             //     })
//             //     .then(data => {
//             //         setNewComments(data)
//             //     })
//     }
//
//     return (
//         <CommentContextProvider value={{newComments, }}>
//
//         </CommentContextProvider>
//     )
//
// }