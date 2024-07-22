export type FormInputPayload = {
  field: string;
  value: string;
};

export type ListItem = {
  id: string | number;
  name: string;
};

export type YupObjectShapeOf<T> = {
  [property in keyof T]: T[property];
};
