import { useAppContext } from "./appContext";
import { useState } from "react";

const CommentCreate = ({ post }) => {
    const { addComment } = useAppContext();
    const [comment, setComment] = useState('');

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
                    onClick={ () => addComment(post.id, comment) }
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default CommentCreate;