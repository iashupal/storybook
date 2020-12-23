export interface AddSiblingModel {
  id?: string | null;
  name: string;
  age: number | undefined;
  siblingType?: number;
  relationshipType?: number;
  nameError?: string | null;
  ageError?: string | null;
  siblingTypeError?: string | null;
  relationshipTypeError?: string | null;
}
