import { useState } from 'react';
import TimeGranularity from "./components/TimeGranularity";
import Group from "./components/Group";
import QueryButton from './components/QueryButton';

function App(props) {

  const [selected, setSelected] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(['product']);
  
  return (
    <div>
      <TimeGranularity
        selected={selected}
        setSelected={setSelected} />
      <Group
        selectedGroup={selectedGroup ? selectedGroup : ['product']}
        setSelectedGroup={setSelectedGroup} />
      <QueryButton
        selected={selected ? selected : 'month'}
        selectedGroup={selectedGroup} />
    </div>
  );
}

export default App;
