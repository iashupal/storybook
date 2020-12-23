import React, { useState } from "react";
import Heading from "../../heading";
import { Form, Button } from "antd";
import "../styles.css";

function MedicalPerinatal(props: any) {
  const [form] = Form.useForm();
  const [laborDuration, setLaborDuration] = useState("");
  const [comment, setComment] = useState("");
  return (
    <div className="medical__birth">
      <Form form={form}>
        <div className="medical__birth_innerWrapper">
          <Heading heading="Perinatal Period" subHeading="" styleName="" />

          <div className="form form-box">
            <div className="medical__pregnancy_formRow">
              <div className="medical-group btn-select">
                <label className="form-label">Cord around neck</label>
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
                <label className="form-label">Infant needed blood at birth</label>
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

            <div className="medical__pregnancy_formRow">
              <div className="medical-group btn-select">
                <label className="form-label">Hemorrhage</label>
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
                <label className="form-label">Evidence of fetel distress</label>
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
            <div className="medical__pregnancy_formRow">
              <div className="medical-group btn-select">
                <label className="form-label">Infant placed in incubator</label>
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
                <label className="form-label">
                  Infant needed other special treatment (explain below)
                </label>
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
            <div className="medical__pregnancy_formRow">
              <div className="medical-group" style={{ width: "80%" }}>
                <label className="form-label">Duration of labor</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={laborDuration}
                  placeholder="Duration"
                  onChange={(e) => setLaborDuration(e.target.defaultValue)}
                />
              </div>
              <div className="medical-group btn-select">
                <label className="form-label">Type of labor</label>
                <div className="btn-addon btnChild">
                  <button type="button" className="btn btn-sm btnChild_yes">
                    Induced
                  </button>
                  <button type="button" className="btn btn-sm btnChild_no">
                    Spontaneous
                  </button>
                </div>
              </div>
            </div>
            <div className="medical__perinatal_formRow">
              <div className="medical-group btn-select">
                <label className="form-label">Type of delivery</label>
                <div className="btn-addon btnChild">
                  <button type="button" className="btn btn-sm btnChild_yes">
                    Normal
                  </button>
                  <button type="button" className="btn btn-sm btnChild_no">
                    Cesarean
                  </button>
                  <button type="button" className="btn btn-sm btnChild_no">
                    Forceps
                  </button>
                  <button type="button" className="btn btn-sm btnChild_no">
                    Anesthetic used
                  </button>
                </div>
              </div>
            </div>

            <div className="medical__pregnancy_formRow">
              <div className="medical-group btn-select">
                <label className="form-label">Infant injured during pregnancy</label>
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
export default MedicalPerinatal;
