import { useQuery } from '@apollo/client';
import type { ReactElement } from 'react';
import './App.css';
import useOrganization from './organization/useOrganization';
import GET_PIPE_LIST_QUERY, {
  GetPipeListData,
  GetPipeListVariables
} from './graphql/GET_PIPE_LIST_QUERY';

function App(): ReactElement {
  const organization = useOrganization();

  const { data } = useQuery<
    GetPipeListData,
    GetPipeListVariables
  >(GET_PIPE_LIST_QUERY, {
    variables: {
      organizationId: organization.id,
    }
  });

  return (
    <ul>
      {data?.organization.pipes.map((pipe) => (
        <li key={pipe.id}>
          <button>{pipe.name}</button>
        </li>
      ))}
    </ul>
  );
}

export default App;
