import React, { Component } from "react";
import Tabs from "../../tabs";
import MedicalParental from "./medicalPrenatal";
import MedicalPregnancy from "./medicalPregnancy";
import MedicalPerinatal from "./medicalPerinatal";
import MedicalPostnatal from "./medicalPostnatal";
import "../styles.css";

interface State {
  tab: number;
}
class MedicalBirthHistory extends Component<State> {
  state: State = { tab: 0 };
  changeTab(tab: any) {
    this.setState({
      tab,
    });
  }
  render() {
    const { tab } = this.state;
    return (
      <div className="medical__family">
        <div className="medical__family_tabs">
          <Tabs
            styleName="familyTab"
            text="Pregnancy"
            steps=""
            stepsAct=""
            fullText="Pregnancy"
            familyTextName="A"
            image=""
            activeImage=""
            tabChange={() => this.changeTab(0)}
            selected={tab === 0}
          />
          <Tabs
            styleName="familyTab"
            text="Prenatal Period"
            steps=""
            stepsAct=""
            fullText="Prenatal Period"
            familyTextName="B"
            image=""
            activeImage=""
            tabChange={() => this.changeTab(1)}
            selected={tab === 1}
          />
          <Tabs
            styleName="familyTab"
            text="Perinatal Period"
            steps=""
            stepsAct=""
            fullText="Perinatal Period"
            familyTextName="C"
            image=""
            activeImage=""
            tabChange={() => this.changeTab(2)}
            selected={tab === 2}
          />
          <Tabs
            styleName="familyTab"
            text="Postnatal Period"
            steps=""
            stepsAct=""
            fullText="Postnatal Period"
            familyTextName="D"
            image=""
            activeImage=""
            tabChange={() => this.changeTab(3)}
            selected={tab === 3}
          />
        </div>
        <div className="medical__family_content">
          {tab === 0 && <MedicalPregnancy />}
          {tab === 1 && <MedicalParental />}
          {tab === 2 && <MedicalPerinatal />}
          {tab === 3 && <MedicalPostnatal />}
        </div>
      </div>
    );
  }
}
export default MedicalBirthHistory;
