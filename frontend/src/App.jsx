
import Movies from './pages/Movies';
import Home from './pages/Home'
import Navbar from './components/Navbar';
import ReviewForm from './pages/ReviewForm';
import Review from './pages/Review';
import UpdateReview from './pages/ReviewUpdateForm';
import { Routes, Route, Link } from 'react-router-dom';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import { Context } from '../context/Context';
import { useContext } from 'react';
const App = () => {
  const { user } = useContext(Context);
  return (

    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/signin" element={user ? <Home /> : <SignIn />} />
        <Route path='/movies' element={user ? <Movies /> : <SignIn />} />
        <Route path='/reviews/:title/write' element={user ? <ReviewForm /> : <SignIn />} />
        <Route path='/reviews/:title/edit/:id' element={<UpdateReview />} />
        <Route path='/reviews/:title' element={<Review />} />
      </Routes>


    </div >
  )

}



export default App
