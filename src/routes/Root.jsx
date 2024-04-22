
import { Outlet, Link } from 'react-router-dom';

export default function Root() {
    return (
      <>
        <h1>Welcome to the Home Page!</h1>
        <Link to={`alejandro-test-page`}><h1>Alejandro's Test Page - Channel Menu</h1></Link>
        <Link to={`ashton-test-page`}><h1>Ashton's Test Page - Server List</h1></Link>
        <Link to={`jaskirat-test-page`}><h1>Jaskirat's Test Page - Message Send</h1></Link>
        <Link to={`martyns-test-page`}><h1>Martyn's Test Page - Server Prototype</h1></Link>
        <Link to={`miles-test-page`}><h1>Miles' Test Page - Sidebar</h1></Link>
        <Link to={`christian-test-page`}><h1>Christian's Test Page - Login Page</h1></Link>
        <Link to={'elizabeth-test-page'}><h1>Elizabeth's Test Page - User & Channel List</h1></Link>
        <Link to={'carl-test-page'}><h1>Carl's Test Page - Register Page</h1></Link>
        <Link to={`emily-test-page`}><h1>Emily's Test Page - Messages</h1></Link>
        <Link to={`ServerComponent`}><h1>Server Component</h1></Link>
        <Link to={`user-settings-page`}><h1>Settings</h1></Link>

      </>
    );
  }