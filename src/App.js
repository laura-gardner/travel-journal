import './App.css';
import travelData from './data';
import Entry from './Entry';
import Navbar from './Navbar';

function App() {
  const entries = travelData.map(entry => {
    return <Entry 
      key={entry.id}
      entry={entry}
    />
  })
  return (
    <div className='container'>
      <Navbar />
      {entries}
    </div>
  )
}

export default App;
