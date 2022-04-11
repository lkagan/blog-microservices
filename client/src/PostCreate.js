import axios from 'axios';
import { useState } from "react";

const PostCreate = () => {
  const [title, setTitle] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/posts', { title })
      .then(res => {
          console.log(res)
          setTitle('')
      })
      .catch(err => console.log(err));
  }

    return <div>
        <form action="" onSubmit={onSubmit}>
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
            <button className="btn btn-primary mt-3">Submit</button>
        </form>
    </div>;
}

export default PostCreate;