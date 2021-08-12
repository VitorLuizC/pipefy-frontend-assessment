import { useQuery } from '@apollo/client';
import { useMemo } from 'react';
import useOrganization from '../../../organization/useOrganization';
import GET_PIPE_LIST_QUERY, {
  GetPipeListData,
  GetPipeListVariables
} from '../graphql/GET_PIPE_LIST_QUERY';

function usePipeList() {
  const organization = useOrganization();

  const { data } = useQuery<
    GetPipeListData,
    GetPipeListVariables
  >(GET_PIPE_LIST_QUERY, {
    variables: {
      organizationId: organization.id,
    }
  });

  const pipes = useMemo(() => {
    if (!data) return [];

    return Array.from(data.organization.pipes).sort((pipeA, pipeB) => {
      return pipeA.name.localeCompare(pipeB.name, ['en-US', 'en', 'pt-BR']);
    });
  }, [data]);

  return {
    pipes,
  };
}

export default usePipeList;
