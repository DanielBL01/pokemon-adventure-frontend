import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Battle(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `/habitat?index=${props.habitat}`,
      );
      setData(result.data);
    }
    fetchData();
  }, [props]); // only re-render if the props for Battle changes

  function handleClick(e) {
    e.preventDefault();
    props.setPage('Town');
  }

  return (
    <div>
      <div>Battle</div>
      <ul>
        {data.map(pokemon => {
          return <li>{pokemon.name}</li>
        })}
      </ul>
      <button onClick = {handleClick}>Run</button>
    </div>
  );
}

export default Battle;