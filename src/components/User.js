
import { useAxios } from '../hooks/useAxios';
export const User = () => {
    const { data } = useAxios('https://jsonplaceholder.typicode.com/users');

    return (
        <div>
            <h1>ユーザ一覧</h1>
            <ul>
                {data.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}