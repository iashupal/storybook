import { AddSiblingModel } from "./add-sibling.model";

export interface AddSiblingPostModel {
  patientId: string;
  siblings: AddSiblingModel[];
}
