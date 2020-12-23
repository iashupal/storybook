import React, { useState } from "react";
import Heading from "../../heading";
import { Form, Checkbox, Button } from "antd";
import "../styles.css";

function MedicalPrimaryCaretaker(props: any) {
  const [form] = Form.useForm();
  const [fullname, setFullName] = useState("");
  const [eduLevel, setEducationLevel] = useState("");
  const [age, setAge] = useState("");
  const [profession, setProfession] = useState("");
  const [bFullname, setPrimaryFullName] = useState("");
  const [highEduLevel, setHighEduLevel] = useState("");
  const [age2, setAge2] = useState("");
  const [cProfession, setCprofession] = useState("");
  const [indeterminate, setIndeterminate] = React.useState(false);

  function onChecked(e) {
    setIndeterminate(true);
    console.log(`checked = ${e.target.checked}`);
  }
  return (
    <div className="medical__birth">
      <Form form={form}>
        <div className="medical__birth_innerWrapper">
          <Heading heading="Primary Caretaker" subHeading="" styleName="" />
          <p>
            Please list any other primary caretaker(s) or custodial parents who is someone other
            than the child's birth parents. This includes adoptive parents, step parents, and other
            legal guardians or adults who have been granted power of attorney of the child. If there
            is more than one primary caretaker who fits this description (e.g, the child has two
            adoptiove parents), please name each caretaker.
          </p>
          <div className="medical__primary_formCheckbox">
            <div className="medical-group">
              <div className="pretty p-default p-curve p-thick">
                <input type="checkbox" />
                <div className="state p-primary-o">
                  <label> Same as birth parents</label>
                </div>
              </div>
            </div>
            {/* <Checkbox
              // indeterminate={indeterminate}
              onChange={onChecked}
              className="parents_checkbox"
              // checked={indeterminate}
            >
              Same as birth parents
            </Checkbox> */}
          </div>
          <div className="form form-box">
            <div className="medical__primary_formRow1">
              <div className="medical-group">
                <label className="form-label">Relationship</label>
                <select className="form-control">
                  <option>Step Mother</option>
                  <option>Step Father</option>
                  <option>Guardian's</option>
                  <option>Foster parent name</option>
                </select>
                <i className="fa fa-angle-down arrow"></i>
              </div>
              <div className="medical-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={fullname}
                  placeholder="Kate Pope"
                  onChange={(e) => setFullName(e.target.defaultValue)}
                />
              </div>
              <div className="medical-group">
                <label className="form-label">Hihgest level education completed</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={eduLevel}
                  placeholder="Master"
                  onChange={(e) => setEducationLevel(e.target.defaultValue)}
                />
              </div>

              <div className="medical-group">
                <label className="form-label">Age</label>
                <input
                  type="number"
                  className="form-control"
                  defaultValue={age}
                  placeholder="56"
                  onChange={(e) => setAge(e.target.defaultValue)}
                />
              </div>
            </div>
            <div className="medical__birth_formRow2">
              <div className="medical-group">
                <label className="form-label">Current Profession</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={profession}
                  placeholder="Marketing"
                  onChange={(e) => setProfession(e.target.defaultValue)}
                />
              </div>
              <div className="medical-group btn-select">
                <label className="form-label">Live with child full time?</label>
                <div className="btn-addon btnChild">
                  <button type="button" className="btn btn-sm btnChild_yes">
                    Yes
                  </button>
                  <button type="button" className="btn btn-sm btnChild_no">
                    No
                  </button>
                </div>
              </div>
            </div>
            <div className="medical__birth_formRow3">
              <div className="medical-group btn-select">
                <label className="form-label">Marital Status</label>
                <div className="btn-addon btnStatus">
                  <button type="button" className="btn btn-sm btnStatus_married">
                    Married
                  </button>
                  <button type="button" className="btn btn-sm btnStatus_separated">
                    Separated
                  </button>
                  <button type="button" className="btn btn-sm btnStatus_widowed">
                    Widowed
                  </button>
                  <button type="button" className="btn btn-sm btnStatus_divorced">
                    Divorced
                  </button>

                  <button type="button" className="btn btn-sm btnStatus_single">
                    Single/Never Married
                  </button>
                </div>
              </div>
            </div>
            <div className="medical__primary_formRow1">
              <div className="medical-group">
                <label className="form-label">Relationship</label>
                <select className="form-control">
                  <option>Step Mother</option>
                  <option>Step Father</option>
                  <option>Guardian's</option>
                  <option>Foster parent name</option>
                </select>
                <i className="fa fa-angle-down arrow"></i>
              </div>
              <div className="medical-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={bFullname}
                  placeholder="Blanche Jordan"
                  onChange={(e) => setPrimaryFullName(e.target.defaultValue)}
                />
              </div>
              <div className="medical-group">
                <label className="form-label">Highest level education completed</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={highEduLevel}
                  placeholder="PhD"
                  onChange={(e) => setHighEduLevel(e.target.defaultValue)}
                />
              </div>
              <div className="medical-group">
                <label className="form-label">Age</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={age2}
                  placeholder="56"
                  onChange={(e) => setAge2(e.target.defaultValue)}
                />
              </div>
            </div>
            <div className="medical__birth_formRow2">
              <div className="medical-group">
                <label className="form-label">Current Profession</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={cProfession}
                  placeholder="Marketing"
                  onChange={(e) => setCprofession(e.target.defaultValue)}
                />
              </div>
              <div className="medical-group btn-select">
                <label className="form-label">Live with child full time?</label>
                <div className="btn-addon btnGender">
                  <button type="button" className="btn btn-sm btnChild_yes">
                    Yes
                  </button>
                  <button type="button" className="btn btn-sm btnChild_no">
                    No
                  </button>
                </div>
              </div>
            </div>
            <div className="medical__birth_formRow3">
              <div className="medical-group btn-select">
                <label className="form-label">Marital Status</label>
                <div className="btn-addon btnStatus">
                  <button type="button" className="btn btn-sm btnStatus_married">
                    Married
                  </button>
                  <button type="button" className="btn btn-sm btnStatus_separated">
                    Separated
                  </button>
                  <button type="button" className="btn btn-sm btnStatus_widowed">
                    Widowed
                  </button>
                  <button type="button" className="btn btn-sm btnStatus_divorced">
                    Divorced
                  </button>

                  <button type="button" className="btn btn-sm btnStatus_single">
                    Single/Never Married
                  </button>
                </div>
              </div>
            </div>
            <div className="medical__birth_formRow4">
              <div className="medical-group">
                <label className="form-label">Child Resides with</label>
                <select className="form-control">
                  <option>Birth mother and father</option>
                  <option>Birth mother only</option>
                  <option>Parent and step parent</option>
                  <option>Birth father only</option>
                  <option>Parent and adoptive parent</option>
                  <option>Adoptive parent(s)</option>
                  <option>Foster parent(s)</option>
                  <option>Other: (specify below)</option>
                </select>
                <i className="fa fa-angle-down arrow"></i>
              </div>

              <div className="medical-group">
                <label className="form-label">Contact with birth parent is</label>
                <select className="form-control">
                  <option>Frequent (see child more than 4 days per week)</option>
                  <option>Occasional (see child atleast once per week)</option>
                  <option>Minimal (see child less than once per week)</option>
                  <option>None</option>
                </select>
                <i className="fa fa-angle-down arrow"></i>
              </div>
            </div>
          </div>
          <div className="btnContainer">
            <Button
              type="default"
              htmlType="submit"
              size="large"
              icon={<i className="fa fa-long-arrow-left"></i>}
              className="back_btn"
            >
              Back
            </Button>
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              className="btn_add"
              icon={<i className="fa fa-long-arrow-right"></i>}
            >
              Save
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}
export default MedicalPrimaryCaretaker;
