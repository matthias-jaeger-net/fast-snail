import React from 'react';

import ActionMenu from './components/ActionMenu';

function App() {
  const actionHandler = (e) => {
    console.log('ss');
  }
  return (
    <div className='App'>
      <button onClick={actionHandler}>Add</button>
      <ActionMenu></ActionMenu>
    </div>
  );
}

export default App;
