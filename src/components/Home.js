import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';


import {User} from './User'
import {Post} from './Post'
// import {Ref} from './atoms/Ref'
import {IO} from './atoms/IO'
import { Layout } from "../components/template/Layout"

import ComponentContext from './atoms/ComponentContext'

export const Home = () => {
    const { user } = useAuthContext();

    const navigate = useNavigate();
    const handleLogout = () => {
        signOut(auth);
        navigate('/login');
      };

    return (
    <Layout>
      <h1 className='text-[28px]'>ホームページ{user? user.email: ""}</h1>
      <button onClick={handleLogout}>ログアウト</button>
      <Link to="/testapi">test</Link>
      {/* <Pdf /> */}
      <ComponentContext />
      <User/>
      <Post />
      <IO c_name="tes">3333</IO>
    </Layout>
  );;
};
