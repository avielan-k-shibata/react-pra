import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';


import {User} from './User'
import {Post} from './Post'
export const Home = () => {
    const { user } = useAuthContext();

    const navigate = useNavigate();
    const handleLogout = () => {
        signOut(auth);
        navigate('/login');
      };

    return (
    <div>
      <h1>ホームページ{user? user.email: ""}</h1>
      <button onClick={handleLogout}>ログアウト</button>
      <Link to="/testapi">test</Link>
      <User/>
      <Post />
    </div>
  );;
};
