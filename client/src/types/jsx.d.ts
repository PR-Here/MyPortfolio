import { ReactNode, ReactElement } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

declare module 'react-icons/*' {
  const Icon: (props: any) => ReactElement;
  export = Icon;
} 