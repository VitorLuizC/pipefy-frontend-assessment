import getDataCount from './getDataCount';

function setDataCount(element: HTMLElement, fn: (count: number) => number): void {
  const count = fn(getDataCount(element));
  element.dataset['count'] = count.toString(10);
}

export default setDataCount;
