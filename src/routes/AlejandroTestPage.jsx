import ProfileComponent from "../components/main-components/ProfileComponent"
import Menu from "../components/main-components/Menu"

//using context to input user information
import { useMyContext } from '../DataContext';

 export default function AlejandroTestPage(){
    const { loginData } = useMyContext();

    return (
        <>
            {/*
                The profile component uses props to display information to the user.
                The information for the props is injected using the loginData context.
             */}
            <ProfileComponent username={loginData.username} email={loginData.email} online={loginData.pfp} pfp={loginData.pfp}/>
            <Menu />
        </>
    )
}
