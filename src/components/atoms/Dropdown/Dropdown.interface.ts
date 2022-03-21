
export namespace DropdownProps {
  export interface IProps {
    onChange?: any;
    list: ListItem[];
    value: number;
  }

  interface ListItem {
    id: string;
    name: string;
  }
}
