import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Habitat.module.css';

function Habitat(props) {
  const [wildAbout, setWildAbout] = useState({name: '', weight: 0, height: 0});
  const [wildStats, setWildStats] = useState({hp: 0, current_hp: 0, attack: 0, defense: 0, speed: 0});
  const [fighterAbout, setFighterAbout] = useState({name: '', weight: 0, height: 0});
  const [fighterStats, setFighterStats] = useState({hp: 0, current_hp: 0, attack: 0, defense: 0, speed: 0});
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const wildResult = await axios.get(`/habitat?index=${props.habitat}`);
        const wildData = wildResult.data[0];
        setWildAbout({name: wildData.name, weight: wildData.weight, height: wildData.height});
        setWildStats({hp: wildData.stats.hp, current_hp: wildData.stats.hp, attack: wildData.stats.attack, defense: wildData.stats.defense, speed: wildData.stats.speed});
        const fighterResult = await axios.post('/fighter', {'fighter': props.fighter});
        const fighterData = fighterResult.data[0];
        setFighterAbout({name: fighterData.name, weight: fighterData.weight, height: fighterData.height});
        setFighterStats({hp: fighterData.stats.hp, current_hp: fighterData.stats.hp, attack: fighterData.stats.attack, defense: fighterData.stats.defense, speed: fighterData.stats.speed});
        setMessages(msgs => [...msgs, `A wild ${wildData.name} appeared!`]);
        setMessages(msgs => [...msgs, `I choose you ${fighterData.name}!`]);
      } catch {
        props.setPage('Town');
      }
    }
    fetchData();
  }, [props]);

  function returnToTown(e) {
    e.preventDefault();
    props.setPage('Town');
  }

  function handleRunClick(e) {
    e.preventDefault();
    props.setPage('Town');
    setMessages([]);
  }

  function handleBattleClick(e) {
    e.preventDefault();
    props.setPage('Town');
  }

  async function handleCatchClick(e) {
    e.preventDefault();
    await axios.post('/catch', {'pokemon': wildAbout.name});
    props.setPage('Town');
    setMessages([]);
  }

  let display;
  if (wildAbout.name !== '' && fighterAbout.name !== '') {
    display = 
    <div>
      <div className={styles.battle}>
        <div>
          <h1><div className={styles.name}>{fighterAbout.name}</div></h1>
          <h3>HP: {fighterStats.current_hp}/{fighterStats.hp}</h3>
        </div>
        <div>
          <h1><div className={styles.name}>{wildAbout.name}</div></h1>
          <h3>HP: {wildStats.current_hp}/{wildStats.hp}</h3>
        </div>
      </div>
      <div className={styles.text_box}>
        <ul className={styles.messages}>
          {messages.map(message => {
            return <li>{message}</li>
          })}
        </ul>
      </div>
      <div className={styles.button_options}>
        <button className={`${styles.encounter_options} ${styles.run}`} onClick = {handleRunClick}>Run</button>
        <button className={`${styles.encounter_options} ${styles.fight}`} onClick = {handleBattleClick}>Battle</button>
        <button className={`${styles.encounter_options} ${styles.pokeball}`} onClick = {handleCatchClick}>Poké Ball</button>
      </div>
    </div>
  } else {
    display = 
      <div>
        <h1 className={styles.header}>Looking for Wild Pokemon...</h1>
        <button className={`${styles.encounter_options} ${styles.back_to_town}`} onClick = {returnToTown}>Go back to Town</button>
      </div>
  }

  return (
    <div>
      {display}
    </div>
  );
}

export default Habitat;