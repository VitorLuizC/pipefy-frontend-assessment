import type { ReactElement } from 'react';
import './App.css';
import RootRouter from './navigation/RootRouter';
import OrganizationProvider from './organization/OrganizationProvider';

function App(): ReactElement {
  return (
    <OrganizationProvider>
      <RootRouter />
    </OrganizationProvider>
  );
}

export default App;
