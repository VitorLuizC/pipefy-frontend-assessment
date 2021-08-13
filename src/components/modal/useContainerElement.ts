import { useLayoutEffect, useMemo } from 'react';
import setDataCount from './utils/setDataCount';
import getDataCount from './utils/getDataCount';

function createElementWithId(id: string): HTMLElement {
  const element = window.document.createElement('div');
  element.id = id;
  window.document.body.append(element);
  return element;
}

/** React.js hook that provides a container element for React.Portals. */
function useContainerElement(id: string): HTMLElement {
  const element = useMemo(() => {
    const element = window.document.getElementById(id);
    return element ?? createElementWithId(id);
  }, [id]);

  useLayoutEffect(() => {
    setDataCount(element, (count) => count + 1);

    return () => {
      setDataCount(element, (count) => count - 1);

      if (getDataCount(element) <= 0)
        element.remove();
    };
  }, [element]);

  return element;
}

export default useContainerElement;
