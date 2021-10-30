import React, { useState } from 'react'
import TimeGranularity from './components/TimeGranularity'
import Group from './components/Group'
import QueryButton from './components/QueryButton'

const App = () => {
  
  const [selected, setSelected] = React.useState('')
  const [selectedGroup, setSelectedGroup] = React.useState(['product'])

  return (
    <div>
      <TimeGranularity
        selected={selected}
        setSelected={setSelected}
      />
      <Group 
        selectedGroup={selectedGroup}
        setSelectedGroup={setSelectedGroup}
      />
      <QueryButton
        selected={selected}
        selectedGroup={selectedGroup}
      />
    </div>
  )
}

export default App
