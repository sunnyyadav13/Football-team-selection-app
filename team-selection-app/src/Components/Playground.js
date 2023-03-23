import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import '../CSS/Playground.css';

export default function Playground() {

  const currentTeam = useSelector(state => state.playerListReducer.PlayerList);
  console.log(currentTeam);
  // making arrays..
  let golkeeper = []
  let striker = []
  let defender = []
  let midfielder = []
  currentTeam.map(e => {
    if (e.position === "Goalkeeper")
      golkeeper.push(e);
    else if (e.position === "Striker")
      striker.push(e);
    else if (e.position === "Defender")
      defender.push(e);
    else if (e.position === "Midfielder")
      midfielder.push(e);
  })
  useEffect(() => {
    console.log(golkeeper);
    console.log(striker);
    console.log(defender);
    console.log(midfielder);
  }, [currentTeam])

  return (
    <div className="container playground mt-4">
      <img src={require("../assets/play2.jpg")} alt="image error" className="responsive" />
      <div className="playground-content">      {/* golkeeper */}
        <div className="field_position">      {
          golkeeper.map(el => {
            return <div>
              <img src="https://cdn-icons-png.flaticon.com/512/3333/3333673.png" height="40" alt="-:" /><br />
              <span>{`${el.first_name} ${el.last_name}`}</span>
            </div>
          })
        }
        </div>      {/* defender */}
        <div className="field_position">      {
          defender.map(el => {
            return <div>
              <img src="https://cdn-icons-png.flaticon.com/512/3333/3333673.png" height="40" alt="-:" /><br />
              <span>{`${el.first_name} ${el.last_name}`}</span>
            </div>
          })
        }
        </div>      {/* midfielder */}
        <div className="field_position">      {
          midfielder.map(el => {
            return <div>
              &nbsp;&nbsp; <img src="https://cdn-icons-png.flaticon.com/512/3333/3333673.png" height="40" alt="-:" /><br />
              <span>{`${el.first_name} ${el.last_name}`}</span>          
               </div>
          })
        }
        </div>      {/* attacker */}
        <div className="field_position">      {
          striker.map(el => {
            return (
              <div>
                <img src="https://cdn-icons-png.flaticon.com/512/3333/3333673.png" height="40" alt="-:" /><br />
                <span>{`${el.first_name} ${el.last_name}`}</span>
              </div>
            )
          })
        }
        </div>      </div>    </div>);
}