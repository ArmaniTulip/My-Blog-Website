import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Armani');

    const handleSubmit= (e) => {
        e.preventDefault();
        const blog = {title, body, author};

        console.log(blog);
        
    }

    return (
        <div className="create">
        <h2>Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
            <label>Blog Title:</label>
            <input
             type="text"
             required 
             value={title}
             onChange={(e) => setTitle(e.target.value)}/>
            <label>Blog body:</label>
            <textarea
                required 
                value={body}
                onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <label>Blog Author:</label>
            <select
            value = {author}
            onChange={(e)=> setAuthor(e.target.value)}
            >
                <option value="Armani">Armani</option>
                <option value="Marissa">Marissa</option>
            </select>
            <button>Add Blog</button>
        </form>
        </div>
        
      );
}
 
export default Create;