import classes from './Post.module.css';


const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://archilab.online/images/1/123.jpg'/>
            {props.message}
            <div>
                <span>Like</span> {props.likes}
            </div>
        </div>
    )
}

export default Post;