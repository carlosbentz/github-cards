import "./App.css";
import { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Card } from "antd";

const { Meta } = Card;

const App = () => {
  const [user, setUser] = useState();
  const [active, setActive] = useState(false);

  const handdleToggle = () => {
    fetch("https://api.github.com/users/carlosbentz")
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
        setActive(!active);
      });
  };

  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button onClick={handdleToggle} style={{ width: "25vw" }}>
          Toggle User
        </button>
        {active && (
          <Card
            hoverable
            style={{
              width: "25vw",
            }}
            cover={<img alt="example" src={user.avatar_url} />}
            title="Europe Street beat"
            description="www.instagram.com"
          >
            <h2>{user.name}</h2>
            <h3>{user.bio}</h3>
            <h3>{user.location}</h3>
          </Card>
        )}
      </div>
    </div>
  );
};

export default App;
