import { useEffect } from 'react';

export default function counter() {
  // useEffect(() => {
  //   let counter = 0;
  //   document.querySelector('#increase').onclick = () => {
  //     counter++;
  //     document.querySelector('h1').innerHTML = counter;
  //   };

  //   document.querySelector('#decrease').onclick = () => {
  //     counter--;
  //     document.querySelector('h1').innerHTML = counter;
  //   };
  // },[]);
  return (
    <div>
      <h1>0</h1>
      <button id='increase'>+</button>
      <button id='decrease'>-</button>
    </div>
  );
}