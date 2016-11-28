import React from 'react';
import Transmit from 'react-transmit';
import Hello from 'js/Hello';



Transmit.render(
  Hello,
  {name: 'World', person:'jaydev'},
  document.getElementById('app')
);
