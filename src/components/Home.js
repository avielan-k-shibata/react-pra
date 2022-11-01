import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

import { PDFViewer } from '@react-pdf/renderer';
import {User} from './User'
import {Post} from './Post'
// import {Ref} from './atoms/Ref'
import {Pdf} from './atoms/Pdf'

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
      <button onClick={handleLogout} className="btn btn-outline">ログアウト</button>
      <Link to="/testapi">test</Link>
      <button className="btn btn-outline">Button</button>
<button className="btn btn-outline btn-primary">Button</button>
<button className="btn btn-outline btn-secondary">Button</button>
<button className="btn btn-outline btn-accent">Button</button>

<div className="alert alert-info shadow-lg">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <span>New software update available.</span>
  </div>
</div>
      <PDFViewer>
      <Pdf />

      </PDFViewer>
      <ComponentContext />
      <User/>
      <Post />
      <IO c_name="tes">3333</IO>
    </Layout>
  );;
};
