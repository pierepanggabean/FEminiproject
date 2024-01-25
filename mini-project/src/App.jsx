import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import BlogCard from "./components/BlogCard";

function App() {
  return (
    <div className="App">
      <Header />
      <BlogCard />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
