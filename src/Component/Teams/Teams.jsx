import React from "react";
import styles from "./Teams.module.css";
import { teams } from "../../data";
import { Grid } from "@mui/material";
const Teams = () => {
  const teamGroup = teams.map((member) => {
    return (
      <Grid key={member.name} item xs={12} sm={6} md={4}>
        <div className={styles.memberContainer}>
          <img src={member.img} alt="member pic" />
          <div className={styles.memberInfo}>
            <h1>{member.name}</h1>
            <p>{member.sub}</p>
          </div>
        </div>
      </Grid>
    );
  });
  return (
    <div className={styles.teamsContainer}>
      <div className={styles.teamsHeading}>
        <h1>Our Team</h1>
        <Grid container spacing={2}>
          {teamGroup}
        </Grid>
      </div>
    </div>
  );
};

export default Teams;
