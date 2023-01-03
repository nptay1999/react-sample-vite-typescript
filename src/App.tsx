import shallow from 'zustand/shallow';

import { useLoaderData } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import './assets/style/App.scss';
import useCountStore from './hooks/useCountStore';

export async function loader(): Promise<{ count: number }> {
  const count = await new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
  return { count };
}

function App(): JSX.Element {
  const { count: loadCount } = useLoaderData() as { count: number };
  const { count, increase } = useCountStore(
    (state) => ({
      count: state.count + loadCount,
      increase: state.increase,
    }),
    shallow,
  );

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button type="button" onClick={increase}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
