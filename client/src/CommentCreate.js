import { useState } from "react";
import axios from "axios";
import { useAppContext } from "./appContext";

const CommentCreate = ({ postId }) => {
    const [comment, setComment] = useState('');
    const { fetchPosts } = useAppContext();

    const addComment = async (comment) => {
        if(comment.trim() === '') {
            return;
        }

        await axios.post(`http://posts.com/posts/${postId}/comments`, {
            comment
        });

        setTimeout(fetchPosts, 100);

        setComment('');
    }

    return (
        <div>
            <form>
                <div className="form-group mb-3">
                    <label htmlFor="">New Comment</label>
                    <input
                        type="text"
                        className="form-control"
                        value={ comment }
                        onChange={ (e) => setComment(e.target.value) }
                    />
                </div>
                <button
                    className="btn btn-primary"
                    type="button"
                    onClick={ () => addComment(comment) }
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default CommentCreate;