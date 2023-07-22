export interface IDynamicProps {
  id: string,
  [key: string]: string | number,
}

export interface IDynamicCrudPage{
  entities: IDynamicProps,
  pageType: ECrudPageType,
}

export enum ECrudPageType {
  Add = "Add",
  Delete = "Delete",
  Update = "Update",
  Read = "Read",
}



