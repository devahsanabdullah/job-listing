import {useState} from 'react'


import TagBar from "./components/tagBar/TagBar";
import Card from "./components/jobCard/Card";


function App() {
  //states have tags added onClick
  const [propsdata, setpropsdata] = useState([])
  //array of Objects have clicked tags
  const [deepfilter, setDeepFilter] = useState([])
  return (
    <div className="App font-league">
      <div className="header bg-headerMob md:bg-header"></div>
      <div className="bg-background w-full absolute ">
        
        {/* Title Bar */}
        {propsdata.length===0?null:<TagBar stateData={propsdata} setpropsdata={setpropsdata} setDeepFilter={setDeepFilter} deepfilter={deepfilter} />}
        
        {/* List */}
        <Card addData={setpropsdata} stateData={propsdata} setDeepFilter={setDeepFilter} deepfilter={deepfilter}  />
      </div>
    </div>
  );
}

export default App;
