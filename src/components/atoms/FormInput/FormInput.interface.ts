import { CSSProperties } from "react";

export namespace InputProps {
  export interface IProps {
    type: string;
    id: string;
    value: any;
    onChange: (v: string) => void;
  }
}
