import post from "./MyPosts.module.css";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

function MyPosts(props) {
    let postsComponents = props.posts.map( p => <Post key={p.id} likesCount={p.likesCount}  message={p.message} key={p.id}/>);

    return (
        <div className={post.posts}>
            <h3>Мои посты</h3>
            <NewPost onAddPost={props.addPost}/>
            {postsComponents}
        </div>
    );
}

export default MyPosts;