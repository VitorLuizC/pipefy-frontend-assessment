import type { RouteComponentProps } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { ReactElement, useCallback } from 'react';
import GET_CARD_LIST_QUERY, {
  GetPipeListData,
  GetPipeListVariables
} from './graphql/GET_CARD_LIST_QUERY';

type Props = RouteComponentProps<{
  pipeId: string;
}>;

function Pipe(props: Props): ReactElement {
  const { match } = props;
  const { pipeId } = match.params;

  const { data, loading, fetchMore } = useQuery<
    GetPipeListData,
    GetPipeListVariables
  >(GET_CARD_LIST_QUERY, {
    variables: {
      pipeId,
    }
  });

  const showMore = useCallback(() => {
    if (!data?.allCards.pageInfo.hasNextPage) return;

    fetchMore({
      variables: {
        pipeId,
        cursor: data.allCards.pageInfo.endCursor,
      },
      updateQuery(previousResult, { fetchMoreResult }) {
        if (!fetchMoreResult) return previousResult;

        return {
          ...previousResult,
          allCards: {
            ...previousResult.allCards,
            pageInfo: fetchMoreResult.allCards.pageInfo,
            edges: [
              ...previousResult.allCards.edges,
              ...fetchMoreResult.allCards.edges,
            ],
          },
        };
      },
    });
  }, [data, pipeId, fetchMore]);

  return (
    <div>
      <ul>
        {data?.allCards.edges.map((edge) => (
          <li key={edge.node.id}>
            {edge.node.id}
          </li>
        ))}
      </ul>

      {data?.allCards.pageInfo.hasNextPage && (
        <button onClick={showMore} disabled={loading}>Show more</button>
      )}
    </div>
  );
}

export default Pipe;
