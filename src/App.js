
import './App.css';
import { app } from './firebase-config'
import { getAuth } from "firebase/auth";
import Signup from './pages/Signup';
import SignIn from './pages/SignIn';

// const auth = getAuth(app)

function App() {


  return (
    <div className="App">
      <h1> Firebase React Application</h1>
     <Signup />
     <SignIn />
    </div>
  );
}

export default App;
