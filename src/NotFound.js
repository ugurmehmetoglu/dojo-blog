import {Link} from 'react-router-dom'

const NotFound = () => {
    return ( 
        <div className="notfound">
            <h2>Sorry</h2>
            <p>That page is not exist!</p>
        <Link to="./">Link for the homepage</Link>
        </div>
     );
}
 
export default NotFound;