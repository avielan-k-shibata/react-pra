import { useAxios } from "../hooks/useAxios";

export const Post  = () => {
    const {data} = useAxios('https://jsonplaceholder.typicode.com/posts');
    return (
        <div>
            <h1>ユーザ一覧</h1>
            <ul>
                {data.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}