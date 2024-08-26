import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null)//([
    //     {title: 'My New Website', body: 'lorem ipsum..', author: 'Armani', id: 1},
    //     {title: 'Welcome party', body: 'lorem ipsum..', author: 'Marissa', id: 2},
    //     {title: 'Web dev top tips', body: 'lorem ipsum..', author: 'Mason', id: 3}
    // ]);

    const [name, setName] = useState('Armani');



    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            setBlogs(data);
        })
    }, []);

    return(
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />}
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'Armani' )} title="Armani's Blogs" />}
            
        </div>
    );
}

   
 


export default Home;