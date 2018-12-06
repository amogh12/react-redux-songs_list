import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
import AdditionalList from './AdditionalList';

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
        <div className="column eight wide">
          <AdditionalList />
        </div>
      </div>
    </div>
  );
};

export default App;
