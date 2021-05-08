import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Habitat.module.css';

function Habitat(props) {
  const [wildAbout, setWildAbout] = useState({name: '', weight: 0, height: 0});
  const [wildStats, setWildStats] = useState({hp: 0, current_hp: 0, attack: 0, defense: 0, speed: 0});
  const [fighterAbout, setFighterAbout] = useState({name: '', weight: 0, height: 0});
  const [fighterStats, setFighterStats] = useState({hp: 0, current_hp: 0, attack: 0, defense: 0, speed: 0});
  const [messages, setMessages] = useState([]);
  const [disable, setDisable] = useState({run: 'run', battle: 'battle', pokeball: ''});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const wildResult = await axios.get(`https://pokemon-adventure-server.herokuapp.com/habitat?index=${props.habitat}`);
        const wildData = wildResult.data[0];
        setWildAbout({name: wildData.name, weight: wildData.weight, height: wildData.height});
        setWildStats({hp: wildData.stats.hp, current_hp: wildData.stats.hp, attack: wildData.stats.attack, defense: wildData.stats.defense, speed: wildData.stats.speed});
        const fighterResult = await axios.post('https://pokemon-adventure-server.herokuapp.com/fighter', {'fighter': props.fighter});
        const fighterData = fighterResult.data[0];
        const expResult = await axios.get('https://pokemon-adventure-server.herokuapp.com/experience');
        const exp = expResult.data[fighterData.name];
        setFighterAbout({name: fighterData.name, weight: fighterData.weight, height: fighterData.height});
        setFighterStats({hp: fighterData.stats.hp + exp, current_hp: fighterData.stats.hp + exp, attack: fighterData.stats.attack + exp, defense: fighterData.stats.defense + exp, speed: fighterData.stats.speed + exp});
        setMessages(msgs => [...msgs, `A wild ${wildData.name} appeared!`]);
        setMessages(msgs => [...msgs, `I choose you ${fighterData.name}!`]);
      } catch {
        props.setPage('Town');
      }
    }
    fetchData();
  }, [props]);

  function returnToTown() {
    props.setPage('Town');
  }

  function handleRunClick() {
    setMessages([]);
    props.setPage('Town');
  }

  async function handleBattleClick() {
    setDisable({run: '', battle: '', pokeball: ''});
    var trackFighterHP = fighterStats.hp;
    var trackWildHP = wildStats.hp;
    if (fighterStats.speed >= wildStats.speed) {
      while (trackFighterHP !== 0 || trackWildHP !== 0) {
        setMessages(msgs => [...msgs, `${fighterAbout.name} attack!`]);
        trackWildHP = Math.round(trackWildHP - (fighterStats.attack / wildStats.defense) * 10);
        if (trackWildHP <= 0) {
          await axios.post('https://pokemon-adventure-server.herokuapp.com/updateExperience', {pokemon: fighterAbout.name});
          setDisable({run: 'run', battle: '', pokeball: 'pokeball'});
          setMessages(msgs => [...msgs, `The wild ${wildAbout.name} fainted!`]);
          setFighterStats({hp: fighterStats.hp, current_hp: trackFighterHP});
          setWildStats({hp: wildStats.hp, current_hp: 0});
          break;
        }
        setMessages(msgs => [...msgs, `The wild ${wildAbout.name} attacked!`]);
        trackFighterHP = Math.round(trackFighterHP - (wildStats.attack / fighterStats.defense) * 10);
        if (trackFighterHP <= 0) {
          setDisable({run: 'run', battle: '', pokeball: ''});
          setMessages(msgs => [...msgs, `${fighterAbout.name} fainted!`]);
          setFighterStats({hp: fighterStats.hp, current_hp: 0});
          setWildStats({hp: wildStats.hp, current_hp: trackWildHP});
          break;
        }
      }
    } else {
      while (trackFighterHP !== 0 || trackWildHP !== 0) {
        setMessages(msgs => [...msgs, `The wild ${wildAbout.name} attacked!`]);
        trackFighterHP = Math.round(trackFighterHP - (wildStats.attack / fighterStats.defense) * 10);
        if (trackFighterHP <= 0) {
          setDisable({run: 'run', battle: '', pokeball: ''});
          setMessages(msgs => [...msgs, `${fighterAbout.name} fainted!`]);
          setFighterStats({hp: fighterStats.hp, current_hp: 0});
          setWildStats({hp: wildStats.hp, current_hp: trackWildHP});          
          break;
        }
        setMessages(msgs => [...msgs, `${fighterAbout.name} attack!`]);
        trackWildHP = Math.round(trackWildHP - (fighterStats.attack / wildStats.defense) * 10);
        if (trackWildHP <= 0) {
          await axios.post('https://pokemon-adventure-server.herokuapp.com/updateExperience', {pokemon: fighterAbout.name});
          setDisable({run: 'run', battle: '', pokeball: 'pokeball'});
          setMessages(msgs => [...msgs, `The wild ${wildAbout.name} fainted!`]);
          setFighterStats({hp: fighterStats.hp, current_hp: trackFighterHP});
          setWildStats({hp: wildStats.hp, current_hp: 0});          
          break;
        }
      }
    }
  }

  async function handleCatchClick() {
    await axios.post('https://pokemon-adventure-server.herokuapp.com/catch', {'pokemon': wildAbout.name});
    setMessages([]);
    props.setPage('Town');
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
        <button value='run' className={`${styles.encounter_options} ${styles.run}`} onClick = {handleRunClick} disabled={!disable.run}>Run</button>
        <button value='battle' className={`${styles.encounter_options} ${styles.fight}`} onClick = {handleBattleClick} disabled={!disable.battle}>Battle</button>
        <button value='pokeball' className={`${styles.encounter_options} ${styles.pokeball}`} onClick = {handleCatchClick} disabled={!disable.pokeball}>Poké Ball</button>
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