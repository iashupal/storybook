import React, { useState } from "react";
import Heading from "../../heading";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Form, Button } from "antd";
import "../styles.css";

function MedicalFamilyTransition(props: any) {
  const [form] = Form.useForm();
  const [changeResidence, setChangeResidence] = useState("");
  const [changedJob, setChangedJob] = useState("");

  return (
    <div className="medical__birth">
      <Form form={form}>
        <div className="medical__birth_innerWrapper">
          <Heading heading="Family Transition" subHeading="" styleName="" />
          <p>Please check the events or experiences that occurred in the last three years.</p>

          <div className="form form-box">
            <div className="medical__familyTrans_formRow1">
              <div className="medical-group">
                <div className="pretty p-default p-curve p-thick">
                  <input type="checkbox" />
                  <div className="state p-primary-o">
                    <label>Parents divorced/separarted</label>
                  </div>
                </div>
              </div>
              <div className="medical-group">
                <div className="pretty p-default p-curve p-thick">
                  <input type="checkbox" />
                  <div className="state p-primary-o">
                    <label>Family member experienced prolonged illness</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="medical__familyTrans_formRow1">
              <div className="medical-group">
                <div className="pretty p-default p-curve p-thick">
                  <input type="checkbox" />
                  <div className="state p-primary-o">
                    <label>Death of family member</label>
                  </div>
                </div>
              </div>
              <div className="medical-group">
                <div className="pretty p-default p-curve p-thick">
                  <input type="checkbox" />
                  <div className="state p-primary-o">
                    <label>Sibling left home</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="medical__familyTrans_formRow1">
              <div className="medical-group">
                <div className="pretty p-default p-curve p-thick">
                  <input type="checkbox" />
                  <div className="state p-primary-o">
                    <label>Child changed schools</label>
                  </div>
                </div>
              </div>
              <div className="medical-group">
                <div className="pretty p-default p-curve p-thick">
                  <input type="checkbox" />
                  <div className="state p-primary-o">
                    <label>Child experienced prolonged separation from parents</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="medical__familyTrans_formRow1">
              <div className="medical-group">
                <div className="pretty p-default p-curve p-thick">
                  <input type="checkbox" />
                  <div className="state p-primary-o">
                    <label>Child had a prolonged illness</label>
                  </div>
                </div>
              </div>
              <div className="medical-group">
                <div className="pretty p-default p-curve p-thick">
                  <input type="checkbox" />
                  <div className="state p-primary-o">
                    <label>Parents experienced singnificant marital conflict</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="medical__familyTrans_formRow1">
              <div className="medical-group">
                <div className="pretty p-default p-curve p-thick">
                  <input type="checkbox" />
                  <div className="state p-primary-o">
                    <label>Death of a close friend</label>
                  </div>
                </div>
              </div>
              <div className="medical-group">
                <div className="pretty p-default p-curve p-thick">
                  <input type="checkbox" />
                  <div className="state p-primary-o">
                    <label>Child experienced prolonged separation from close friends</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="medical__familyTrans_formRow1">
              <div className="medical-group">
                <div className="family_changeRs">
                  <div className="pretty p-default p-curve p-thick">
                    <input type="checkbox" />
                    <div className="state p-primary-o">
                      <label>Family changed residence</label>
                    </div>
                  </div>
                  <input
                    type="number"
                    className="form-control"
                    defaultValue={changeResidence}
                    placeholder="No. of time"
                    onChange={(e) => setChangeResidence(e.target.defaultValue)}
                  />
                </div>
              </div>
              <div className="medical-group">
                <div className="family_changeRs">
                  <div className="pretty p-default p-curve p-thick">
                    <input type="checkbox" />
                    <div className="state p-primary-o">
                      <label>Parents changed job</label>
                    </div>
                  </div>
                  <input
                    type="number"
                    className="form-control"
                    defaultValue={changedJob}
                    placeholder="No. of time"
                    onChange={(e) => setChangedJob(e.target.defaultValue)}
                  />
                </div>
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
export default MedicalFamilyTransition;
