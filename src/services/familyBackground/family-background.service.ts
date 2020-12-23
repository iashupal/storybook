import { AppConfig, HttpWrapper } from "../../core";
import { AddBirthParentModel } from "../../models/familyBackground/add-birth-parent.model";
import { DropdownItemModel } from "../../shared/models/dropdown.model";

import { AddSiblingPostModel } from "../../models/familyBackground/sibling/add-sibling-post.model";
import { AddSiblingModel } from "../../models/familyBackground/sibling/add-sibling.model";

export class FamilyBackgroundService {
  private wrapper: HttpWrapper;
  constructor() {
    this.wrapper = new HttpWrapper();
  }
  getEducationLevel() {
    return this.wrapper.get<DropdownItemModel[]>(
      AppConfig.apiEndpoint + "master/education-level"
    );
  }
  getChildResidesWith() {
    return this.wrapper.get<DropdownItemModel[]>(
      AppConfig.apiEndpoint + "master/child-reside-with"
    );
  }
  getContactWithBirthParent() {
    return this.wrapper.get<DropdownItemModel[]>(
      AppConfig.apiEndpoint + "master/contact-with-birth-parent"
    );
  }
  getProfession() {
    return this.wrapper.get<DropdownItemModel[]>(
      AppConfig.apiEndpoint + "master/contact-with-birth-parent"
    );
  }
  postAddBirthParent(birthParent: AddBirthParentModel) {
    return this.wrapper.post<any>(
      AppConfig.apiEndpoint + "familybackground/birth-parent/create",
      birthParent
    );
  }
  getBirthParent(patientId: string) {
    return this.wrapper.get<any>(
      AppConfig.apiEndpoint +
        "familybackground/birth-parent/detail/" +
        patientId
    );
  }
  // **Sibling Section Start**
  postSibling(sibling: AddSiblingPostModel) {
    return this.wrapper.post<boolean>(
      AppConfig.apiEndpoint + "familybackground/sibling/create",
      sibling
    );
  }
  getSiblingDetail(patientId: string | null) {
    return this.wrapper.get<AddSiblingModel[]>(
      AppConfig.apiEndpoint + "familybackground/sibling/detail/" + patientId
    );
  }
  deleteSibling(id: string) {
    return this.wrapper.delete<boolean>(
      AppConfig.apiEndpoint + "familybackground/sibling/delete/" + id
    );
  }
  // **Sibling Section End**
}
