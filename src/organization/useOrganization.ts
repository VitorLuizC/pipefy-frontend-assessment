import type Organization from './types/Organization';
import { useContext } from 'react';
import OrganizationContext from './OrganizationContext';

function useOrganization(): Organization {
  const context = useContext(OrganizationContext);

  if (!context)
    throw new Error(
      "'useOrganization' must be used within 'OrganizationProvider'",
    );

  return context.organization;
}

export default useOrganization;
