import { renderHook } from '@testing-library/react-hooks';
import OrganizationProvider from './OrganizationProvider';
import useOrganization from './useOrganization';

describe('useOrganization | hook | integration test', () => {
  it("returns organization from nearest 'OrganizationContext'", () => {
    const organizationId = Math.random().toString();

    process.env.REACT_APP_PIPEFY_ORGANIZATION_ID = organizationId;

    const { result } = renderHook(useOrganization, {
      wrapper: OrganizationProvider
    });

    expect(result.current.id).toBe(organizationId);
  });

  describe("when not used within 'OrganizationProvider'", () => {
    it('throws an error', () => {
      const { result } = renderHook(useOrganization);
  
      const error = new Error(
        "'useOrganization' must be used within 'OrganizationProvider'",
      );

      expect(result.error).toEqual(error);
    });
  })
});