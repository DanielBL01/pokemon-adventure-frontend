import React, { useEffect } from 'react';

const delay = Math.floor(Math.random() * (10 - 5) + 5);

function Grass(props) {
  useEffect(() => {
    let timer = setTimeout(() => props.setPage('Battle'), delay * 1000);
    return () => {
      clearTimeout(timer);
    }
  }, [props]);

  function handleClick(e) {
    e.preventDefault();
    props.setPage('Town');
  }

  return (
    <div>
      <div>Walking in the Tall Grass...</div>
      <button onClick = {handleClick}>
        Go back to Town
      </button>
    </div>
  );
}

export default Grass;

/*

https://stackoverflow.com/questions/53090432/react-hooks-right-way-to-clear-timeouts-and-intervals

*/