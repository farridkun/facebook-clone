import React from 'react'
import "./Feed.css";
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            <Post 
                profilePic="https://avatars3.githubusercontent.com/u/50895949?s=460&u=4566407f143de04afa1cba038d735b46e64a94ef&v=4"
                message="This gonne be GIANT!"
                timestamp="This is a timestamp"
                username="farridkun"
                image="https://code.org/shared/images/social-media/codeorg2019_social.png"
            />
            <Post />
            <Post />
        </div>
    )
}

export default Feed
