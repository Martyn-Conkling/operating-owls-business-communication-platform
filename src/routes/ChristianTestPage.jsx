import LoginPage from "../components/main-components/LoginPage";

let background = 'SignUpBackground.jpg'

export default function ChristianTestPage() {
    return (
    <>
        <div style={{backgroundImage: `url(${background})`, backgroundRepeat: "fixed", backgroundPosition: "center", height: "100vh", width: "100vw", backgroundSize: "cover"}}>
        <LoginPage />
        </div>
    </>
    );
}