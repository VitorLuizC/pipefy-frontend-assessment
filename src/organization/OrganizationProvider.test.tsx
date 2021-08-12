import { render } from '@testing-library/react';
import OrganizationProvider from './OrganizationProvider';
import useOrganization from './useOrganization';

function OrganizationId() {
  const organization = useOrganization();
  return <span>{organization.id}</span>;
}

describe('OrganizationProvider | component | integration test', () => {
  it('throws an error', () => {
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

      expect(() => render(<OrganizationProvider />)).toThrow(Error);

      spy.mockRestore();

      process.env.REACT_APP_PIPEFY_ORGANIZATION_ID = organizationId;
    });
  });
});
