import { useState } from 'react'
import './Home.css';

function Home() {

const [players, updatePlayers] = useState([]);

    return (
     <div className="homeScreen">
        
        
        <img width="2000" src="https://clubandresortbusiness.com/wp-content/uploads/2021/09/Marietta-Country-Club.jpg"></img>
     </div>



    );
}

export default Home