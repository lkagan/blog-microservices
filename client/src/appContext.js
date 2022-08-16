import { createContext, useContext, useState } from "react";
import axios from "axios";

const appContext = createContext();

const AppContextProvider = ({ children }) => {
    const [posts, setPosts] = useState({});
    const [title, setTitle] = useState('');

    const addPost = async () => {
        try {
            await axios.post('http://posts.com/posts', { title })
            setTitle('');
            setTimeout(fetchPosts, 100)
        } catch (err) {
            console.log(err);
        }
    }

    const fetchPosts = async () => {
        const response = await axios.get('http://posts.com/posts');
        setPosts(response.data);
    }

    return (
        <appContext.Provider
            value={ {
                posts,
                title,
                setTitle,
                fetchPosts,
                addPost,
            } }
        >
            { children }
        </appContext.Provider>
    );
}

const useAppContext = () => {
    return useContext(appContext);
}

export { useAppContext, AppContextProvider };