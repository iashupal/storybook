import React, { Component } from "react";
import Tabs from "../../tabs";
import MedicalBirthParents from "./medicalBirthParents";
import MedicalHomeComposition from "./medicalHomeComposition";
import MedicalPrimaryCaretaker from "./medicalPrimaryCaretaker";
import MedicalLearningBehaviour from "./medicalLearningBehaviour";
import "../styles.css";
import { MedicalSiblingsAndBirthOrder } from "./sibling";
import MedicalFamilyTransition from "./medicalFamilyTransition";
interface IProps {
  patientId: string;
}
interface State {
  tab: number;
  patientId: string;
  parentId: string;
}
class MedicalFamilyForm extends Component<any, State> {
  state: State = { tab: 0, patientId: "", parentId: "" };
  changeTab(tab: any) {
    this.setState({
      tab,
    });
  }
  // constructor(props){
  //   super(props);
  //   console.inf(props);
  // }
  render() {
    const { tab } = this.state;
    return (
      <div className="medical__family">
        <div className="medical__family_tabs">
          <Tabs
            styleName="familyTab"
            text="Birth parents"
            steps=""
            stepsAct=""
            fullText="Birth parents"
            familyTextName="A"
            image=""
            activeImage=""
            tabChange={() => this.changeTab(0)}
            selected={tab === 0}
          />
          <Tabs
            styleName="familyTab"
            text="Primary Caretaker's"
            steps=""
            stepsAct=""
            fullText="Primary Caretaker's"
            familyTextName="B"
            image=""
            activeImage=""
            tabChange={() => this.changeTab(1)}
            selected={tab === 1}
          />
          <Tabs
            styleName="familyTab"
            text="Siblings & Birth Orders"
            steps=""
            stepsAct=""
            fullText="Siblings & Birth Orders"
            familyTextName="C"
            image=""
            activeImage=""
            tabChange={() => this.changeTab(2)}
            selected={tab === 2}
          />
          <Tabs
            styleName="familyTab"
            text="Home Composition"
            steps=""
            stepsAct=""
            fullText="Home Composition"
            familyTextName="D"
            image=""
            activeImage=""
            tabChange={() => this.changeTab(3)}
            selected={tab === 3}
          />
          <Tabs
            styleName="familyTab"
            text="Learning, Behaviour, Mental"
            steps=""
            stepsAct=""
            fullText="Learning, Behaviour, Mental"
            image=""
            activeImage=""
            familyTextName="E"
            tabChange={() => this.changeTab(4)}
            selected={tab === 4}
          />
          <Tabs
            styleName="familyTab"
            text="Family Transition"
            steps=""
            stepsAct=""
            fullText="Family Transition"
            familyTextName="F"
            image=""
            activeImage=""
            tabChange={() => this.changeTab(5)}
            selected={tab === 5}
          />
        </div>
        <div className="medical__family_content">
          {tab === 0 && (
            <MedicalBirthParents
              patientId={this.props.patientId}
              parentId={this.props.parentId}
              tabChange={() => this.changeTab(1)}
              parentTabChange={this.props.parentTab}
            />
          )}
          {tab === 1 && <MedicalPrimaryCaretaker />}
          {tab === 2 && (
            <MedicalSiblingsAndBirthOrder
              patientId={this.props.patientId}
              nextTabChange={() => this.changeTab(3)}
              previousTabChange={() => this.changeTab(1)}
            />
          )}
          {tab === 3 && <MedicalHomeComposition />}
          {tab === 4 && <MedicalLearningBehaviour />}
          {tab === 5 && <MedicalFamilyTransition />}
        </div>
      </div>
    );
  }
}
export default MedicalFamilyForm;
