import React, { useState } from "react";
import Heading from "../../heading";
import { Form, Button } from "antd";
import "../styles.css";
import "./inputFloat.css";

function MedicalPrenatal(props: any) {
  const [form] = Form.useForm();
  const [specifyMedicatn, setSpecifyMedicatn] = useState("");
  const [compPregnancy, setCompPregnancy] = useState("");
  const [presencePregnancy, setPresencePregnancy] = useState("");
  const [comment, setComment] = useState("");
  return (
    <div className="medical__birth">
      <Form form={form}>
        <div className="medical__birth_innerWrapper">
          <Heading heading="Prenatal Period" subHeading="" styleName="" />
          {/* <div className="medical__pregnancy_formRow">
              <div className="medical-group">
                <input type="text" required className="form-control" value="ashu" />
                <span className="highlight"></span>
                <label className="form-group">Username</label>
              </div>
            </div> */}
          <div className="form form-box">
            <div className="birthHistory__row">
              <div className="medical-group btn-select">
                <label className="form-label">Smoked during pregnancy</label>
                <div className="prenatal__checkbox">
                  <div className="btn-addon btnChild">
                    <button type="button" className="btn btn-sm btnChild_yes">
                      Yes
                    </button>
                    <button type="button" className="btn btn-sm btnChild_no">
                      No
                    </button>
                  </div>
                  <div>
                    <div className="pretty p-default p-curve p-thick">
                      <input type="radio" name="smoke" />
                      <div className="state p-primary-o">
                        <label>Occasional</label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="pretty p-default p-curve p-thick">
                      <input type="radio" name="smoke" />
                      <div className="state p-primary-o">
                        <label>Frequent</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
            <div className="birthHistory__row">
              <div className="medical-group btn-select">
                <label className="form-label">Consumed alcohol during pregnancy</label>
                <div className="prenatal__checkbox">
                  <div className="btn-addon btnChild">
                    <button type="button" className="btn btn-sm btnChild_yes">
                      Yes
                    </button>
                    <button type="button" className="btn btn-sm btnChild_no">
                      No
                    </button>
                  </div>
                  <div>
                    <div className="pretty p-default p-curve p-thick">
                      <input type="radio" name="alcohol" />
                      <div className="state p-primary-o">
                        <label>Occasional</label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="pretty p-default p-curve p-thick">
                      <input type="radio" name="alcohol" />
                      <div className="state p-primary-o">
                        <label>Frequent</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
            <div className="birthHistory__row">
              <div className="medical-group btn-select">
                <label className="form-label">
                  Used unprescribed or illegal drugs during pregnancy
                </label>
                <div className="prenatal__checkbox">
                  <div className="btn-addon btnChild">
                    <button type="button" className="btn btn-sm btnChild_yes">
                      Yes
                    </button>
                    <button type="button" className="btn btn-sm btnChild_no">
                      No
                    </button>
                  </div>
                  <div>
                    <div className="pretty p-default p-curve p-thick">
                      <input type="radio" name="drugs" />
                      <div className="state p-primary-o">
                        <label>Occasional</label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="pretty p-default p-curve p-thick">
                      <input type="radio" name="drugs" />
                      <div className="state p-primary-o">
                        <label>Frequent</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
            <div className="medical__prenatal_formRow">
              <div className="medical-group btn-select">
                <label className="form-label">Took other medications</label>
                <div className="btn-addon btnGender">
                  <button type="button" className="btn btn-sm btnChild_yes">
                    Yes
                  </button>
                  <button type="button" className="btn btn-sm btnChild_no">
                    No
                  </button>
                </div>
              </div>
              <div className="medical-group">
                <label className="form-label">Specify type and reason for taking medicine:</label>
                <input
                  type="number"
                  className="form-control"
                  defaultValue={specifyMedicatn}
                  placeholder="Add something"
                  onChange={(e) => setSpecifyMedicatn(e.target.defaultValue)}
                />
              </div>
            </div>
            <div className="medical__prenatal_formRow">
              <div className="medical-group btn-select">
                <label className="form-label">
                  Complications / medical concerns during pregnancy
                </label>
                <div className="btn-addon btnChild">
                  <button type="button" className="btn btn-sm btnChild_yes">
                    Yes
                  </button>
                  <button type="button" className="btn btn-sm btnChild_no">
                    No
                  </button>
                </div>
              </div>
              <div className="medical-group">
                <label className="form-label">Specify:</label>
                <input
                  type="number"
                  className="form-control"
                  defaultValue={compPregnancy}
                  placeholder="Add something"
                  onChange={(e) => setCompPregnancy(e.target.defaultValue)}
                />
              </div>
            </div>
            <div className="medical__prenatal_formRow">
              <div className="medical-group btn-select">
                <label className="form-label">Presence of additional stress during pregnancy</label>
                <div className="btn-addon btnGender">
                  <button type="button" className="btn btn-sm btnChild_yes">
                    Yes
                  </button>
                  <button type="button" className="btn btn-sm btnChild_no">
                    No
                  </button>
                </div>
              </div>
              <div className="medical-group">
                <label className="form-label">Specify:</label>
                <input
                  type="number"
                  className="form-control"
                  defaultValue={presencePregnancy}
                  placeholder="Add something"
                  onChange={(e) => setPresencePregnancy(e.target.defaultValue)}
                />
              </div>
            </div>

            <div className="medical__birth_formRow5">
              <div className="medical-group textarea_group">
                <label className="form-label">Comments</label>
                <textarea
                  className="form-control textarea"
                  defaultValue={comment}
                  placeholder="Marketing"
                  onChange={(e) => setComment(e.target.defaultValue)}
                ></textarea>
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
export default MedicalPrenatal;
