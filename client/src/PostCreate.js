import { useAppContext } from "./appContext";

const PostCreate = () => {
    const { addPost, title, setTitle } = useAppContext();

    return <div>
        <form action="" >
            <div className="form-group">
                <label htmlFor="">Title</label>
                <input
                    value={ title }
                    onChange={ (e) => setTitle(e.target.value) }
                    type="text"
                    className="form-control"
                    id=""
                    placeholder="Title"
                />
            </div>
            <button
                className="btn btn-primary mt-3"
                type="button"
                onClick={ () => addPost() }
            >Submit
            </button>
        </form>
    </div>;
}

export default PostCreate;