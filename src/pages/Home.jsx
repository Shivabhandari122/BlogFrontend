import { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import axios from "axios";

function Home() {
  const [blogs, setBlogs] = useState([]);
  const fetchBlog = async () => {
    const response = await axios.get("http://localhost:3000/blog");
    setBlogs(response.data.data);
  };
  useEffect(() => {
    fetchBlog();
  }, []);
  console.log(blogs);
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-center">
        {blogs.map((blog) => {
          return <Card blogs={blog} />;
        })}
      </div>
    </>
  );
}
export default Home;
