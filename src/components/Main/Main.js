import React, { useState } from 'react';
import './Main.css';
import Input from '../Input/Input';
import Output from '../Output/Output';

function Main() {
  const [hex, setHex] = useState('#ffffff');
  const [rgb, setRgb] = useState('');
  const bgColor = hex ? hex : '#E94B35';

  function inputHexHandler(e) {
    const inputValue = e.target.value.toLowerCase();
    const re = new RegExp('^[#]{1}[0-9a-f]{6}$');

    if (inputValue.length == 7 ) {
      if ( re.test(inputValue) ) {
        setHex(inputValue);
        convertHexToRgb(inputValue);
      } else {
        setRgb('Ошибка');
        setHex('');
      };
    } else {
      setRgb('');
    }
  }

  function convertHexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    setRgb(`rgb (${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`);
  }

  return( 
    <div className="main" style={{backgroundColor: bgColor}}>
      <Input changeHandler={inputHexHandler} />
      <Output rgb={rgb} />
    </div>
  )
}

export default Main;