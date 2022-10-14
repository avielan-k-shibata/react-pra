import { useRef } from 'react';
// import { auth } from '../firebase';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useAuthContext } from '../context/AuthContext';
const SignUp = () => {
    const { user } = useAuthContext();
    const emailRef = useRef(null);
    const emailPassword = useRef(null);
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(emailRef.current.value, emailPassword.current.value);
        // createUserWithEmailAndPassword(auth, emailRef.current.value, emailPassword.current.value);
      };
    return (
        <div>
          <h1>ユーザ登録 {user? user.email: ""}</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">メールアドレス</label>
              <input id="email" name="email" type="email" placeholder="email" ref={emailRef}/>
            </div>
            <div>
              <label htmlFor="password">パスワード</label>
              <input id="password" name="password" type="password" ref={emailPassword} />
            </div>
            <div>
              <button>登録</button>
            </div>
          </form>
        </div>
      );
  };
  
  export default SignUp;
  