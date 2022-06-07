import React from 'react';

import Demo from './componenets/demo/Demo';
import Counter from './componenets/counter/Counter';

export default function App() {
  function sayHello() {
    alert('hello');
  }

  return (
    <div>
      <Demo name="Jacques" surname="de Villers"></Demo>
      <Demo name="Cam" surname="de Villers"></Demo>
      <Demo name="Michelle" surname="de Villers"></Demo>
      <Demo name="Mitchel" surname="Doe"></Demo>
    </div>
  )
}
