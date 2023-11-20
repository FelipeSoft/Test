import { useContext, useState } from "react";
import { PostContext } from "../contexts/PostContext";
import { Post } from "../components/Post";
import { useThemeContext } from "../contexts/ThemeContext";

export const PostList = () => {    
    const [post, setPost] = useState({title: "", subtitle: ""});
    const postContext = useContext(PostContext);
    const themeContext = useThemeContext();

    const handlePost = (title: string, subtitle: string) => {
        if(title.trim() === "" || subtitle.trim() === "") return;
        postContext?.dispatch({
            type: "add",
            payload: {
                title: title.trim(),
                subtitle: subtitle.trim()
            }
        })
        setPost({title: "", subtitle: ""});
    }

    const handleRemove = (id: number) => {
        postContext?.dispatch({
            type: "remove",
            payload: {
                id: id
            }
        })
    }

    return (
        <div>
            <form className="flex flex-col max-w-lg gap-4" onSubmit={(e) => e.preventDefault()}>
                <h1 className={themeContext?.theme === "DARK" ? "text-white" : "text-black"}>Novo Post</h1>
                <input value={post.title} onChange={(e) => setPost({...post, title: e.target.value})}  type="text" placeholder={"Título"} className="py-2 px-4 outline-none text-black border-2 border-gray-400"/>
                <input value={post.subtitle} onChange={(e) => setPost({...post, subtitle: e.target.value})} type="text" placeholder={"Subtítulo"} className="py-2 px-4 outline-none text-black border-2 border-gray-400"/>
                <button className="bg-blue-900 py-2 px-4 text-white" onClick={() => handlePost(post.title, post.subtitle)}>PUBLICAR</button>
            </form>
            <div>
                <p className={`mt-4 ${themeContext?.theme === "DARK" ? "text-white" : "text-black"}`}>Total de Posts: { postContext?.posts.length }</p>
                <div className="grid grid-cols-4">
                    {postContext?.posts.map(element => {
                        return <Post onClick={() => handleRemove(element.id)} key={element.id} title={element.title} subtitle={element.subtitle} />
                    })}
                </div>
            </div>
        </div>
    );
}