import WeatherApi from './components/WeatherApi';
import './App.css';

function App() {
  return (
    <div >
      <WeatherApi />
      {process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_MODE : process.env.REACT_APP_PRO_MODE}
    </div>
  );
}

export default App;
