import React, { useState } from "react";
import Heading from "../../heading";
import { Form, Button } from "antd";
import "../styles.css";

function MedicalPregnancy(props: any) {
  const [form] = Form.useForm();
  const [comment, setComment] = useState("");
  return (
    <div className="medical__birth">
      <Form form={form}>
        <div className="medical__birth_innerWrapper">
          <Heading heading="Pregnancy" subHeading="" styleName="" />
          <p>Respond to all items</p>

          <div className="form form-box">
            <div className="medical__pregnancy_formRow">
              <div className="medical-group btn-select">
                <label className="form-label">Trouble getting pregnant</label>
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
                <label className="form-label">Used contraception prior to pregnancy</label>
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
                <label className="form-label">Planned prgnancy</label>
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
                <label className="form-label">Used legal drugs or other medication</label>
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
                <label className="form-label">Anemia (low iron)</label>
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
                <label className="form-label">Kidney problems</label>
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
                <label className="form-label">German measles</label>
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
                <label className="form-label">Diabetes</label>
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
                <label className="form-label">Several emotional problems</label>
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
                <label className="form-label">High blood pressure</label>
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
                <label className="form-label">Experienced miscarriages prior to pregnancy</label>
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
                <label className="form-label">High fever (103 or higher for three days)</label>
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
                <label className="form-label">Experienced miscarriages after this pregnancy</label>
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
                <label className="form-label">Vaginal infection/bleeding</label>
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
export default MedicalPregnancy;
