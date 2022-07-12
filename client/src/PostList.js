import { useEffect } from "react";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";
import { useAppContext } from "./appContext";

const PostList = () => {
    const { posts, fetchPosts } = useAppContext();

    useEffect(() => {
        fetchPosts();
    }, []);

    const renderedPosts = Object.values(posts).map(post => {
        return (
            <div
                className="card"
                style={ { width: '30%', margin: '10px' } }
                key={ post.id }
            >
                <div className="card-body">
                    <h3>{ post.title }</h3>
                    <CommentList comments={ post.comments }/>
                    <CommentCreate postId={ post.id }/>
                </div>
            </div>
        )
    })
    return <div className={ "d-flex flex-row flex-wrap " }>
        { renderedPosts }
    </div>
}

export default PostList;