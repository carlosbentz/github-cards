import "./App.css";
import { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Card } from "antd";

const App = () => {
  const [user, setUser] = useState();
  const [active, setActive] = useState(false);

  const handdleToggle = () => {
    fetch("https://api.github.com/users/carlosbentz")
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
      });
    console.log(user);
    console.log(active);
    setTimeout(() => {
      setActive(!active);
    }, 500);
  };

  useEffect(() => {
    console.log("teste");
    console.log(user);
    console.log(active);
  }, [user]);

  return (
    <div className="App">
      <button onClick={handdleToggle}>Toggle User</button>
      {active && (
        <Card>
          <h1>teste</h1>
          <img src={user.avatar_url} alt="Error"></img>
          <h2>{user.name}</h2>
          <h3>{user.bio}</h3>
          <h3>{user.location}</h3>
        </Card>
      )}
    </div>
  );
};

export default App;
