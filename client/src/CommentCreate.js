import axios from "axios";
import { useState } from "react";

const CommentCreate = ({postId}) => {

    const [comment, setComment] = useState('');

    const submit = async (e) => {
        e.preventDefault();

        if(comment.trim() === '') {
            return;
        }

        const response = await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            comment
        });

        if(response.status === 200) {
            setComment('');
        }


    }
    return <div>
        <form action="" onSubmit={submit}>
            <div className="form-group mb-3">
                <label htmlFor="">New Comment</label>
                <input
                    type="text"
                    className="form-control"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    </div>
}

export default CommentCreate;