import { ReactElement, ReactNode, useMemo } from 'react';
import normalize from '../utils/normalize';
import OrganizationContext, { OrganizationContextValue } from './OrganizationContext';

type Props = {
  children?: ReactNode;
};

function OrganizationProvider(props: Props): ReactElement {
  const { children } = props;

  const value = useMemo<OrganizationContextValue>(() => {
    if (!process.env.REACT_APP_PIPEFY_ORGANIZATION_ID)
      throw new Error(
        normalize`
          There is no way to start the application without setting the
          environment variable 'REACT_APP_PIPEFY_ORGANIZATION_ID'.
        `
      );

    return {
      organization: {
        id: process.env.REACT_APP_PIPEFY_ORGANIZATION_ID
      },
    };
  }, []);

  return (
    <OrganizationContext.Provider value={value}>
      {children}
    </OrganizationContext.Provider>
  );
}

export default OrganizationProvider;
