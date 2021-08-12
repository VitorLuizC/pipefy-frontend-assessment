import { gql } from '@apollo/client';

/** Variables of 'GET_CARD_LIST_QUERY'. */
export type GetPipeListVariables = {
  pipeId: string;
  cursor?: null | string;
};

/** Data of 'GET_CARD_LIST_QUERY'. */
export type GetPipeListData = {
  allCards: {
    pageInfo: {
      endCursor: string;
      hasNextPage: boolean;
    };
    edges: {
      node: {
        id: string;
      };
    }[];
  };
};

/** GraphQL Query that get a list of cards with pagination. */
const GET_CARD_LIST_QUERY = gql`
  query GET_CARD_LIST_QUERY($pipeId: ID!, $cursor: String) {
    allCards(pipeId: $pipeId, after: $cursor, first: 3) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          id
        }
      }
    }
  }
`;

export default GET_CARD_LIST_QUERY;
