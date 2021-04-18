import React from 'react';

function Battle(props) {
  function handleClick(e) {
    e.preventDefault();
    props.setPage('Grass');
  }
  return (
    <div>
      <div>Battle</div>
      <button onClick = {handleClick}>
        Run
      </button>
    </div>
  );
}

export default Battle;