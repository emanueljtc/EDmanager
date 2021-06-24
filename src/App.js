import { Provider } from 'react-redux';
import Players from './components/Players';
import TeamSelected  from './components/TeamSelected';
import generateStore from './redux/store';
import './styles/app.scss';

const App = () => {
  const store = generateStore();
  return (
    <Provider store={store}>
      <main>
        <h1>EDmanager</h1>
        <Players />
        <TeamSelected />
      </main>
    </Provider>
  );
};

export default App;
