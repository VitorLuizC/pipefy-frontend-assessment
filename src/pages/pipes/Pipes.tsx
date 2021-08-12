import type { ReactElement } from 'react';
import { useQuery } from '@apollo/client';
import { Link, generatePath } from 'react-router-dom';
import { PIPE_PATH } from '../../navigation/paths';
import useOrganization from '../../organization/useOrganization';
import GET_PIPE_LIST_QUERY, {
  GetPipeListData,
  GetPipeListVariables
} from './graphql/GET_PIPE_LIST_QUERY';

function Pipes(): ReactElement {
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
          <Link to={generatePath(PIPE_PATH, { pipeId: pipe.id })}>{pipe.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Pipes;
