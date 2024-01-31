
import { Outlet, Link } from 'react-router-dom';

export default function Root() {
    return (
      <>
        <h1>Welcome to the Home Page!</h1>
        <Link to={`alejandro-test-page`}><h1>Alejandro's Test Page</h1></Link>
        <Link to={`ashton-test-page`}><h1>Ashton's Test Page</h1></Link>
        <Link to={`jaskirat-test-page`}><h1>Jaskirat's Test Page</h1></Link>
        <Link to={`martyns-test-page`}><h1>Martyn's Test Page</h1></Link>
        <Link to={`miles-test-page`}><h1>Miles' Test Page</h1></Link>
        
      </>
    );
  }