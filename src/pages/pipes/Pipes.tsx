import type { ReactElement } from 'react';
import { Link, generatePath } from 'react-router-dom';
import { PIPE_PATH } from '../../navigation/paths';
import usePipeList from './hooks/usePipeList';

function Pipes(): ReactElement {
  const { pipes } = usePipeList();

  return (
    <ul>
      {pipes.map((pipe) => (
        <li key={pipe.id}>
          <Link to={generatePath(PIPE_PATH, { pipeId: pipe.id })}>{pipe.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Pipes;
