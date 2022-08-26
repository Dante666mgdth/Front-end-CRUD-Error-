import "./App.css";
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import React, { useState, useEffect } from "react";
import LoginForm from "./components2/LoginForm";
//import { Home } from "./components2/Home";
import { AddUser } from "./components2/AddUser";
import { EditUser } from "./components2/EditUser";
import { GlobalProvider } from "./context/GlobalState";


import "bootstrap/dist/css/bootstrap.min.css";


function App() {

const [backendData, setBackendData] = useState([{}])

useEffect(() => {
  fetch("/api").then(
    response => response.json()
  ).then(
    data => {
      setBackendData(data)
    }
  )
}, [])


  const adminUser = {
    email: "shadlybenhajel@gmail.com",
    password: "coRvo666"
  }
  
const [user, setUser] = useState({name: "", email: ""});
const [error, setError] =useState("");

const Login = details => {
  console.log(details);
}

const Logout = () => {
  console.log("Logout");
}

  return (
    <div className="App">
      {(user.email != "") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button>Logout</button>
        <div>

          {(typeof backendData.users === 'undefined') ? (
            <p>Loading...</p>
          ): (
            backendData.users.map((user, i) => {
              <p key={i}>{user}</p>
            })
          )}

        </div>
        </div>
      ) : (
        <loginForm />
      )}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/experience" element={<Experience />} />   
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

const App = () => {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <GlobalProvider>
        <Router>
          <Switch>
            {/* <Route exact path="/" component={() => <Home users={users} setUsers={setUsers} />} /> */}
            
            <Route path="/add" component={AddUser} />
            <Route path="/edit/:id" component={EditUser} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  )
}

export default App;