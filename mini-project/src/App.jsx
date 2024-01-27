import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import SignUp from "./pages/SignUp";
import BlogCard from "./components/BlogCard";
import Footer from "./components/Footer";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <BlogCard />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
