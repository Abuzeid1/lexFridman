import { ReactNode } from "react";

declare global {
  export namespace JSX {
    type ElementType =
      | keyof JSX.IntrinsicElements
      | ((props: any) => Promise<ReactNode> | ReactNode);
  }
}
