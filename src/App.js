import logo from './logo.svg';
import './App.css';
import GoogleLogin from 'react-google-login';

function App() {
  const respuesta_google=(respuesta)=>{
    console.log(respuesta);
  }
  return (
    <div className="App">
     <GoogleLogin
        clientId="250156096701-lhol6kpso7g55ehhf50s5as99vc9580p.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={respuesta_google}
        onFailure={respuesta_google}
        cookiePolicy={'single_host_origin'}
      />

    </div>
  );
}

export default App;
