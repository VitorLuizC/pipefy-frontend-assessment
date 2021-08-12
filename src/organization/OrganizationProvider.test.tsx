import type { ReactElement } from 'react';
import { render } from '@testing-library/react';
import OrganizationProvider from './OrganizationProvider';
import useOrganization from './useOrganization';
import normalize from '../utils/normalize';

function OrganizationId(): ReactElement {
  const organization = useOrganization();
  return <span>{organization.id}</span>;
}

describe('OrganizationProvider | component | integration test', () => {
  it("enables the consumption of the organization's state", () => {
    const organizationId = Math.random().toString();

    process.env.REACT_APP_PIPEFY_ORGANIZATION_ID = organizationId;

    const { getByText } = render(
      <OrganizationProvider>
        <OrganizationId />
      </OrganizationProvider>,
    );

    expect(getByText(organizationId)).toBeInTheDocument();
  });

  describe("when environment variable that provides organization id isn't setted", () => {
    it('throws an error', () => {
      const spy = jest.spyOn(console, 'error').mockImplementation(() => {
        // There's no reason to see console error in those tests.
      });

      const organizationId = process.env.REACT_APP_PIPEFY_ORGANIZATION_ID;

      delete process.env.REACT_APP_PIPEFY_ORGANIZATION_ID;

      const error = new Error(
        normalize`
          There is no way to start the application without setting the
          environment variable 'REACT_APP_PIPEFY_ORGANIZATION_ID'.
        `
      );

      expect(() => render(<OrganizationProvider />)).toThrow(error);

      spy.mockRestore();

      process.env.REACT_APP_PIPEFY_ORGANIZATION_ID = organizationId;
    });
  });
});
