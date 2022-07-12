import { createContext, useContext, useState } from "react";
import axios from "axios";

const appContext = createContext();

const AppContextProvider = ({ children }) => {
    const [posts, setPosts] = useState({});
    const [title, setTitle] = useState('');

    const addPost = async () => {
        try {
            await axios.post('http://localhost:4000/posts', { title })
            setTitle('');
            setTimeout(fetchPosts, 100)
        } catch (err) {
            console.log(err);
        }

    }

    const fetchPosts = async () => {
        const response = await axios.get('http://localhost:4002/posts');
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