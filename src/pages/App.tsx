import React, { useState } from 'react';
import Form from '../components/form';
import List from '../components/list';
import Stopwatch from '../components/stopwatch';
import { IMatter } from '../types/IMatter';
import style from './style.module.scss';

function App() {
  const [matter, setMatter] = useState<IMatter[] | []>([]);
  return (
    <div className={style.AppStyle}>
      <Form setMatter={setMatter}/>
      <List matterProp={matter}/>
      <Stopwatch />
    </div>
  );
}

export default App;
