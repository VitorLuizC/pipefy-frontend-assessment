import type { ReactElement, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import useContainerElement from './useContainerElement';

type Props = {
  children?: ReactNode;
};

function Modal(props: Props): ReactElement {
  const { children } = props;

  const container = useContainerElement('modal-container');

  return createPortal(<div role="dialog">{children}</div>, container);
}

export default Modal;
