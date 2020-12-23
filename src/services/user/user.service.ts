import { AppConfig, HttpWrapper } from "../../core";
import { AddUserModel, RoleModel, SpecialityModel, UserDetailModel, UserListFilterModel, UserResponseModel } from "../../models/users";


export class UserService {
  private wrapper: HttpWrapper;
  constructor() {
    this.wrapper = new HttpWrapper();

  }

  postUser(user: AddUserModel) {
    return this.wrapper.post<string>(AppConfig.apiEndpoint + 'user/create/', user);
  }
  getRole() {
    return this.wrapper.get<RoleModel[]>(AppConfig.apiEndpoint + 'user/roles');
  }
  getSpeciality() {
    return this.wrapper.get<SpecialityModel[]>(AppConfig.apiEndpoint + 'user/speciality');
  }
  getUserList(filterModel: UserListFilterModel) {
    return this.wrapper.post<UserResponseModel>(AppConfig.apiEndpoint + 'user/list', filterModel);
  }
  getUserById(id: string) {
    return this.wrapper.get<UserDetailModel>(AppConfig.apiEndpoint + 'user/detail/' + id);
  }
} 