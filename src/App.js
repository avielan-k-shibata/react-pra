// import logo from './logo.svg';
import './App.css';
import 'react-csv-importer/dist/index.css';
import SignUp from './components/SignUp';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { TestApi } from './page/TestApi';

import { AuthProvider } from './context/AuthContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
function App() {


  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />

              </PrivateRoute>
            }
          />
          <Route
            path="/testapi"
            element={
              <PrivateRoute>
                <TestApi />

              </PrivateRoute>
            }
          />
                    <Route element={<PublicRoute />}>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Route>
          {/* <Route path="/testapi" element={<PrivateRoute><TestApi /><PrivateRoute />} /> */}
        </Routes>
      </BrowserRouter>

    </AuthProvider>
  );
}

export default App;
