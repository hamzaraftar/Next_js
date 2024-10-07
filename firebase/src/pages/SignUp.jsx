import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);
const googlePrivider = new GoogleAuthProvider();
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password);
  };
  const signUpWithGoogle = () => {
    signInWithPopup(auth, googlePrivider);
  };
  return (
    <div className="singup-page">
      <h1>SignUp Page </h1>
      <label>Email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        required
        placeholder="Enter your email here"
      />
      <label>Password</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        required
        placeholder="Enter your password here"
      />
      <br />
      <button onClick={signUpWithGoogle}>Signin with Google</button>
      <button onClick={createUser}>Sign In</button>
    </div>
  );
};

export default SignUp;
