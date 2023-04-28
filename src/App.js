import './App.css';
import Pizza from './components/Pizza';

export default function App() {
  return (
    <div>
      <Pizza variant="1" price={15.9} />
      <Pizza variant="2" price={16.5} />
    </div>
  )
}

