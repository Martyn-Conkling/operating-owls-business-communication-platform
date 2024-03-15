import SignUpPage from "../components/main-components/SignUpPage";

let Background = 'SignUpBackground.jpg'

 export default function CarlTestPage() {
    return (
        <>
            <div style={{backgroundImage: `url(${Background})`, backgroundRepeat: "fixed",backgroundPosition: "center", height: "100vh", width: "100vw", backgroundSize: "cover",}}>
            <SignUpPage/>
            </div>
        </>
    );
}