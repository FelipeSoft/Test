import { posts } from "@/app/api/api";
import { useState, useEffect } from "react";
import { PostType } from "@/app/types/PostType";
import { LoadingScreen } from "./LoadingScreen";

export const Post = () => {
    const [getPosts, setPosts] = useState<PostType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        handleGetPosts();
    }, []);

    const handleGetPosts = async () => {
        const postsFromServer = await posts();
        setPosts(postsFromServer);
        setLoading(false);
    }

    return ( 
        <div className="overflow-x-hidden bg-black text-white">
            <LoadingScreen loading={loading} />
            <ul>
                {getPosts.map((post) => {
                    return <li>ID: {post.id} - Título: {post.title}</li>
                })}
            </ul>
        </div>
    )
}