// import React, { useState } from 'react';
// import MessagesTest from "../test/MessagesTest"

// import { auth } from "../test/firebaseConfig"
// import { signInWithEmailAndPassword } from "firebase/auth";

// export default function LoginTest() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState(null);
//     const [isAuthenticated, setIsAuthenticated] = useState(false);

//     /*preforms authenticity check and gives an error if it fails*/
//     const handleLogin = async () => {
//         try {
//             await signInWithEmailAndPassword(auth, email, password);
//             setIsAuthenticated(true);
//         } catch (error) {
//             setError(error.message);
//         }
// };

//     return (
//         <div>
//             {isAuthenticated ? (<MessagesTest />) : <p>{error}</p> }
//             <input
//                 /*email input*/
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//                 /*password input*/
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//             />
//             <button onClick={handleLogin}>Login</button>
//         </div>
//     )
// }
