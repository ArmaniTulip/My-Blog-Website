import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My New Website', body: 'lorem ipsum..', author: 'Armani', id: 1},
        {title: 'Welcome party', body: 'lorem ipsum..', author: 'Marissa', id: 2},
        {title: 'Web dev top tips', body: 'lorem ipsum..', author: 'Mason', id: 3}
    ]);

    return(
        <div className="home">

        {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author} </p>

            </div>
        ))}

        </div>
    );
}

   
 


export default Home;