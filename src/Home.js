import { useState } from "react";

const Home = () => {

    // let name = 'Armani'
    const [name, setName] = useState('Armani');
    const [age, setAge] = useState(27);

    const handleClick = () => {
      setName('Marissa')
      setAge('29')
    
}

    return ( 
                <div className="home">
                    <h2>Homepage</h2>
                    <p>{name} is {age} years old</p>
                    <button onClick={handleClick}>Click Me</button>
                    
                    
                </div>
            );

}


export default Home;