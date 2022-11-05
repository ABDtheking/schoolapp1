import React, {createContext,useContext,useState} from 'react';

export const AuthContext = createContext({
  hasUser: false,
  setUser: () => {},
});


export default function App() {
    return (
    <AboutPage/>
  );
}

export function Login(){
  const {setUser} = useContext(AuthContext);
  return(
    <><h1>Welcome</h1><button onClick={() => setUser(true)}> Press here to login</button>    </> 
  );
}
function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How are you?</p>
    </>
  );
}