import type Organization from './types/Organization';
import { createContext } from 'react';

export type OrganizationContextValue = {
  organization: Organization;
};

const OrganizationContext = createContext<null | OrganizationContextValue>(null);

export default OrganizationContext;
