import React from 'react';

function Starter(props) {
  function handleClick(e) {
    e.preventDefault();
    props.setPage('Town');
  }

  return (
    <div>
      <div>Choose a Starter Pokemon...</div>
      <button onClick = {handleClick}>
        Starter
      </button>
    </div>
  );
}

export default Starter;