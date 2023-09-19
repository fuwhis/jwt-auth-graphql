import { useEffect, useState } from 'react';
import './assets/scss/global.scss';
// import Layout from './components/Layout';
import Layout from '../src/layouts/index';
import { useAuthContext } from './context/AuthContext';

function App() {
  const [loading, setLoading] = useState(true)
  const { checkAuth } = useAuthContext()

  useEffect(() => {
    const authenticate = async () => {
      await checkAuth()
      setLoading(false)
    }

    authenticate()
  }, [checkAuth])

  if (loading) return <h1>Loading....</h1>
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='profile' element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
      <Layout />
    </div>
  );
}

export default App;
