import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import React from 'react';
import styles from '../styles/home.module.css'
 import { getPosts } from "../api";
const Home = () => {

   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
  
  useEffect(() => {

    const fetchPosts = async () => {
      const response = await getPosts();
      console.log('response', response)
      if (response.success) {
        setPosts(response.data.posts)
      }
    //   setLoading(false);
    }
    fetchPosts()

  }, [])

    return (
        <div className={styles.postsList}>
            {posts.map((post,index) =>{
                return(
                    <div className={styles.postWrapper} key={`post-${post._id}`}>
                    <div className={styles.postHeader}>
                        <div className={styles.postAvatar}>
                            <img src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png" alt="user-pic" />
      
                            <div>
                                <span className={styles.postAuthor}>{post.user.name}</span>
                                <span className={styles.postTime}>a minute ago</span>
                            </div>
                        </div>
                        <div className={styles.postContent}>{post.content}</div>
      
                        <div className={styles.postActions}>
                            <div className={styles.postLike}>
                                <img src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" alt="likes-icon" />
                                <span>5</span>
                            </div>
                            <div className={styles.postCommentsIcon}>
                                <img src="https://img.icons8.com/external-sbts2018-flat-sbts2018/344/external-comment-social-media-basic-1-sbts2018-flat-sbts2018.png" alt="" />
                                <span>2</span>
                            </div>
                        </div>
                        <div className={styles.postCommentBox}>
                            <input type="Start typing a comment" />
                        </div>
      
                        <div className={styles.postCommentList}>
                            <div className={styles.postCommentItem}>
                                <div className={styles.postCommentHeader}>
                                    <span className={styles.postCommentAuthor}>Bill</span>
                                    <span className={styles.postCommentTime}>a minute ago</span>
                                    <span className={styles.postCommentLikes}></span>
                                </div>
                                <div className={styles.postCommentContent}>Random comment</div>
                            </div>
                        </div>
                    </div>
                </div>
                )
              
            })}
            
        </div>
    )
};
Home.propTypes = {
    posts: PropTypes.array.isRequired
}
export default Home;