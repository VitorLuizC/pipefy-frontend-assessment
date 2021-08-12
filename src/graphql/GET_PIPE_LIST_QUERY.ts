import { gql } from '@apollo/client';

/** Variables of 'GET_PIPE_LIST_QUERY'. */
export type GetPipeListVariables = {
  organizationId: string;
};

/** Data of 'GET_PIPE_LIST_QUERY'. */
export type GetPipeListData = {
  organization: {
    pipes: {
      id: string;
      name: string;
    }[];
  };
};

/** GraphQL query that get the list of pipes for an organization */
const GET_PIPE_LIST_QUERY = gql`
  query GET_PIPE_LIST_QUERY($organizationId: ID!) {
    organization(id: $organizationId) {
      id
      pipes {
        id
        name
      }
    }
  }
`;

export default GET_PIPE_LIST_QUERY;
