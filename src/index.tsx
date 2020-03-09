import React from 'react';
import { render } from 'react-dom';
import CustomEvent from './basic/CustomEvent';

const APP = () => <CustomEvent />;

render(<APP />, document.getElementById('root'));
