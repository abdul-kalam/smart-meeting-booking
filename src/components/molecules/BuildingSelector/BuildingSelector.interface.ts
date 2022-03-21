export namespace BuildingSelectorProps {
  export interface IProps {
    buildings: ListItem[];
    onChange: (n: number) => void;
    value: number;
  }

  interface ListItem {
    id: string;
    name: string;
  }
}
