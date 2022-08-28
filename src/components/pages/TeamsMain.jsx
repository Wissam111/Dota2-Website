import React, { Component, Fragment, useState } from "react";
import Cards from "../Cards";

function TeamsMain() {
  const [showTeams, setShowTeams] = useState([]);
  const [teamsData, setTeamsData] = useState([]);
  React.useEffect(() => {
    async function getData() {
      const res = await fetch("https://api.opendota.com/api/teams");
      const data = await res.json();
      setTeamsData(data);
      setShowTeams(data);
    }
    getData();
  }, []);

  const handeSearch = (event) => {
    let _teams = [];

    teamsData.forEach((team) => {
      if (team.name.toLowerCase().includes(event.target.value.toLowerCase())) {
        _teams.push(team);
      }
    });

    setShowTeams(_teams);
  };
  return <Cards type={1} cards={showTeams} onSearch={handeSearch} />;
}

export default TeamsMain;
