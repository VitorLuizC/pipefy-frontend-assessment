function getDataCount(element: HTMLElement): number {
  const count = element.dataset['count'];
  return parseInt(count ?? '0', 10);
}

export default getDataCount;
