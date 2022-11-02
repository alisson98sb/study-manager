import React, { useState } from 'react';
import Form from '../components/form';
import List from '../components/list';
import Stopwatch from '../components/stopwatch';
import { IMatter } from '../types/IMatter';
import style from './style.module.scss';

function App() {
  const [matter, setMatter] = useState<IMatter[]>([]);
  const [selected, setSelected] = useState<IMatter>();

  function selectMatter(selectedMatter: IMatter) {
    setSelected(selectedMatter);
    setMatter(lastMatter => lastMatter.map(matter => ({
      ...matter,
      selected: matter.uuid === selectedMatter.uuid ? true : false
    })))
  }

  return (
    <div className={style.AppStyle}>
      <Form setMatter={setMatter}/>
      <List 
        matterProp={matter}
        selectMatter={selectMatter}
      />
      <Stopwatch 
        selected = {selected}
      />
    </div>
  );
}

export default App;
