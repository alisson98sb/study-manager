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

  function finishedMatter() {
    if (selected) {
      setSelected(undefined);
      setMatter(lastMatter =>
        lastMatter.map(matter => {
        if (matter.uuid === selected.uuid) {
          return {
            ...matter,
            selected: false,
            completed: true
          }
        }
        return matter;
      
      }))
    }
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
        finishedMatter = {finishedMatter}
      />
    </div>
  );
}

export default App;
