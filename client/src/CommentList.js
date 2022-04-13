import React, { useEffect } from 'react';
import axios from "axios";

const CommentList = ({ postId }) => {
    const [comments, setComments] = React.useState([]);

    const getComments = () => {
        axios.get(`http://localhost:4001/posts/${postId}/comments`)
            .then(res => { setComments(res.data); })
            .catch(err => { console.log(err); });
    };

    useEffect(() => getComments(), []);

    const renderedComments = comments.map((comment) => {
        return (
            <li key={comment.id}>{comment.content}</li>
        )
    });

    return (
        <ul>{renderedComments}</ul>
    );
};

export default CommentList;