import type { ReactElement } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { PIPES_PATH, ROOT_PATH, NOT_FOUND_ERROR_PATH } from './paths';
import PipesRouter from './PipesRouter';

function NotFoundError(): null {
  return null;
}

/** React.js component that provides the root router of the application. */
function RootRouter(): ReactElement {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from={ROOT_PATH} to={PIPES_PATH} />
        <Route path={PIPES_PATH} component={PipesRouter} />
        <Route exact path={NOT_FOUND_ERROR_PATH} component={NotFoundError} />
        <Redirect push to={NOT_FOUND_ERROR_PATH} />
      </Switch>
    </BrowserRouter>
  );
}

export default RootRouter;
