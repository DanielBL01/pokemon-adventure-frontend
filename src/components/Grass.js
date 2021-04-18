import React, { useEffect } from 'react';

const delay = Math.floor(Math.random() * 10);

function Grass(props) {
  useEffect(() => {
    let timer = setTimeout(() => props.setPage('Battle'), delay * 1000);
    return () => {
      clearTimeout(timer);
    }
  }, [props]);

  return (
    <div>Walking in the Tall Grass...</div>
  );
}

export default Grass;

/*

https://stackoverflow.com/questions/53090432/react-hooks-right-way-to-clear-timeouts-and-intervals

*/