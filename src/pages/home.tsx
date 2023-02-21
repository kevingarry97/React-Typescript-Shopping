import { Link } from "react-router-dom";

const Home = () => {
    return (  
        <>
            <h1>Home</h1>
            <small>Get more on <Link to={'/store'}>Store</Link></small>
        </>
    );
}
 
export default Home;