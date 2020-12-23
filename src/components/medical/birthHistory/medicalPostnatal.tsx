import React, { useState } from "react";
import Heading from "../../heading";
import { Form, Button } from "antd";
import "../styles.css";

function MedicalPostnatal(props: any) {
  const [form] = Form.useForm();
  const [breatheDelay, setBreatheDelay] = useState("");
  const [cryDelay, setCryDelay] = useState("");
  const [babyWeight, setBabyWeight] = useState("");
  const [infantRelease, setInfantRelease] = useState("");
  const [comment, setComment] = useState("");
  return (
    <div className="medical__birth">
      <Form form={form}>
        <div className="medical__birth_innerWrapper">
          <Heading heading="Postnatal Period" subHeading="" styleName="" />

          <div className="form form-box">
            <div className="medical__postnatal_formRow">
              <div className="medical-group btn-select">
                <label className="form-label">Jaundice</label>
                <div className="btn-addon btnChild">
                  <button type="button" className="btn btn-sm btnChild_yes">
                    Yes
                  </button>
                  <button type="button" className="btn btn-sm btnChild_no">
                    No
                  </button>
                </div>
              </div>
              <div className="medical-group btn-select">
                <label className="form-label">Oxygen</label>
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

            <div className="medical__postnatal_formRow">
              <div className="medical-group btn-select">
                <label className="form-label">Cyanosis</label>
                <div className="btn-addon btnChild">
                  <button type="button" className="btn btn-sm btnChild_yes">
                    Yes
                  </button>
                  <button type="button" className="btn btn-sm btnChild_no">
                    No
                  </button>
                </div>
              </div>
              <div className="medical-group btn-select">
                <label className="form-label">Resuscitation</label>
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
            <div className="medical__postnatal_formRow">
              <div className="medical-group btn-select">
                <label className="form-label">Seizures/Convulsions</label>
                <div className="btn-addon btnChild">
                  <button type="button" className="btn btn-sm btnChild_yes">
                    Yes
                  </button>
                  <button type="button" className="btn btn-sm btnChild_no">
                    No
                  </button>
                </div>
              </div>
              <div className="medical-group btn-select">
                <label className="form-label">Transfusions</label>
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
            <div className="medical__postnatal_formRow">
              <div className="medical-group btn-select">
                <label className="form-label">Antibiotic treatment</label>
                <div className="btn-addon btnGender">
                  <button type="button" className="btn btn-sm btnChild_yes">
                    Yes
                  </button>
                  <button type="button" className="btn btn-sm btnChild_no">
                    No
                  </button>
                </div>
              </div>
              <div className="medical-group btn-select">
                <label className="form-label">Incubator care</label>
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
            <div className="medical__postnatal_formRow">
              <div className="medical-group btn-select">
                <label className="form-label">Special light for jaundice</label>
                <div className="btn-addon btnGender">
                  <button type="button" className="btn btn-sm btnChild_yes">
                    Yes
                  </button>
                  <button type="button" className="btn btn-sm btnChild_no">
                    No
                  </button>
                </div>
              </div>
              <div className="medical-group btn-select">
                <label className="form-label">Birth defects (Explain below)</label>
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
            <div className="medical__postnatal_formRow">
              <div className="medical-group btn-select">
                <label className="form-label">Breathing</label>
                <div className="btn-addon btnGender">
                  <button type="button" className="btn btn-sm btnChild_yes">
                    Immediate
                  </button>
                  <button type="button" className="btn btn-sm btnChild_no">
                    Delayed
                  </button>
                </div>
              </div>
              <div className="medical-group" style={{ width: "80%" }}>
                <label className="form-label">Delayed how long</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={breatheDelay}
                  placeholder=""
                  onChange={(e) => setBreatheDelay(e.target.defaultValue)}
                />
              </div>
            </div>
            <div className="medical__postnatal_formRow">
              <div className="medical-group btn-select">
                <label className="form-label">Cry</label>
                <div className="btn-addon btnChild">
                  <button type="button" className="btn btn-sm btnChild_yes">
                    Immediate
                  </button>
                  <button type="button" className="btn btn-sm btnChild_no">
                    Delayed
                  </button>
                </div>
              </div>
              <div className="medical-group" style={{ width: "80%" }}>
                <label className="form-label">Delayed how long</label>
                <input
                  type="number"
                  className="form-control"
                  defaultValue={cryDelay}
                  placeholder=""
                  onChange={(e) => setCryDelay(e.target.defaultValue)}
                />
              </div>
            </div>
            <div className="medical__postnatal_formRow">
              <div className="medical-group" style={{ width: "80%" }}>
                <label className="form-label">Baby weight at birth</label>
                <input
                  type="number"
                  className="form-control"
                  defaultValue={babyWeight}
                  placeholder=""
                  onChange={(e) => setBabyWeight(e.target.defaultValue)}
                />
              </div>
            </div>
            <div className="medical__birth_formRow5">
              <div className="medical-group">
                <label className="form-label">
                  How many days after birth were mother and infant released from the hospital?
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={infantRelease}
                  placeholder=""
                  onChange={(e) => setInfantRelease(e.target.defaultValue)}
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
export default MedicalPostnatal;
