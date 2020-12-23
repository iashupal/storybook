import * as React from "react";
import { HttpResponse } from "../../../../core";
import { SpecialityModel } from "../../../../models/users";
import { UserService } from "../../../../services/user";
import "./index.scss";

interface ISpecialitySuggestionComponent {
  specialityList: Function;
}
interface IState {
  specialityList?: SpecialityModel[];
  suggestions?: SpecialityModel[];
  list?: "";
}
export class SpecialitySuggestion extends React.Component<
  ISpecialitySuggestionComponent,
  IState
  > {
  private userService: UserService;
  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.userService = new UserService();
  }

  initialState: Partial<IState> = {
    specialityList: [
      {
        name: "",
        value: "",
      },
    ],
    suggestions: [],
    list: "",
  };

  changehandler = (event) => {
    const value = event.target.value;
    let suggestions: any = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = this.state.specialityList
        ?.sort()
        .filter((v) => regex.test(v.name));
    }
    this.setState(
      () => ({ suggestions, list: value }),
      () => {
        this.props.specialityList(this.state.list);
      }
    );
  };

  suggestionSelected(value) {
    this.setState(() => ({
      list: value,
      suggestions: [],
    }));
  }

  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions?.length === 0) {
      return null;
    }
    return (
      <ul className="suggestedList">
        {suggestions?.map((items, index) => (
          <li key={index} onClick={() => this.suggestionSelected(items.value)}>
            {items.name}
          </li>
        ))}
      </ul>
    );
  }
  componentDidMount() {
    this.getSpeciality();
  }

  getSpeciality() {
    this.userService
      .getSpeciality()
      .then((res: HttpResponse<SpecialityModel[]>) => {
        if (res && res.result) {
          this.setState({
            specialityList: res.result,
          });
        }
      })
      .catch((ex) => {
        //  HandleNotFoundResponse(ex,NotFoundResponseArea.Users,this.props)
      });
  }
  render() {
    const { list } = this.state;
    return (
      <div className="form-group">
        <label className="form-label">Speciality</label>
        <span className="optional">optional</span>
        <input
          type="list"
          value={list}
          name="list"
          className="form-control"
          onChange={this.changehandler}
        />
        {this.renderSuggestions()}
      </div>
    );
  }
}

export default SpecialitySuggestion;
