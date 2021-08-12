import { Fragment, ReactElement } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { PIPE_CARD_PATH, PIPE_PATH, NOT_FOUND_ERROR_PATH, PIPES_PATHS } from './paths';
import Pipes from '../pages/pipes/Pipes';
import Pipe from '../pages/pipe/Pipe';

function PipeCard(): null {
  return null;
}

/** React.js component that provides a router for pipes' pages. */
function PipesRouter(): ReactElement {
  // The second switch was used to display pipe and card modals as overlayers.
  return (
    <Fragment>
      <Switch>
        <Route exact path={PIPES_PATHS} component={Pipes} />
        <Redirect push to={NOT_FOUND_ERROR_PATH} />
      </Switch>
      <Switch>
        <Route exact path={PIPE_PATH} component={Pipe} />
        <Route exact path={PIPE_CARD_PATH} component={PipeCard} />
      </Switch>
    </Fragment>
  );
}

export default PipesRouter;
