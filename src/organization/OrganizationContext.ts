import { createContext } from 'react';
import type Organization from './Organization';

export type OrganizationContextValue = {
  organization: Organization;
};

const OrganizationContext = createContext<null | OrganizationContextValue>(null);

export default OrganizationContext;
