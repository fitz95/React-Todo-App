import { Routes, Route } from 'react-router-dom';
import Home from 'routes/Home';
import About from 'routes/About';
import Login from 'routes/Login';
import Profile from 'routes/Profile';
// import NotMatch from 'routes/NotMatch';
import NotFound from 'routes/NotFound';

function TodoApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route path="profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default TodoApp;
