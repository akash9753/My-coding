// import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { getPosts } from "../api";
import Home from "../pages/Home";
import { Login } from "../pages";
import Loader from "./Loader";
import Navbar from "./Navbar";
// import { useAuth } from "../hooks";
import Signup from "../pages/Signup";
import { useAuth } from "../providers/AuthProvider";
import { Settings } from "../pages";

// const About = () => {
//   return <h1>About</h1>
// }
const UserInfo = () => {
  return <h1>User</h1>
}
const Page404 = () => {
  return <h1>404</h1>
}

function App() {
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(true);
  const auth = useAuth();
  // useEffect(() => {

  //   const fetchPosts = async () => {
  //     const response = await getPosts();
  //     console.log('response', response)
  //     if (response.success) {
  //       setPosts(response.data.posts)
  //     }
  //     setLoading(false);
  //   }
  //   fetchPosts()

  // }, [])

  if (auth.loading) {
    return <Loader />
  }

  return (
    <div className="App">
      {/* <Navbar />
      <Router>
        <Route exact path="/">
          <Home posts={posts} />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/user/asdasd">
          <UserInfo />
        </Route>

      </Router> */}
      
      <Router>
      <Navbar /> 
      <Routes>
        <Route exact path="/" element={<Home posts={[]}/>}/>
        <Route exact  path="/login" element={<Login/>}/>
        <Route exact  path="/register" element={<Signup/>}/>
        <Route exact  path="/user/asdasd" element={<UserInfo/>}/>
        <Route exact  path="*" element={<Page404/>}/>
        <Route exact  path="/settings" element={<Settings/>}/>
      </Routes>
      
    </Router>

    </div>
  );
}

export default App;
