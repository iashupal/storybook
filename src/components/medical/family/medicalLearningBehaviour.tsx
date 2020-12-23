import React from "react";
import Heading from "../../heading";
import { Form, Button } from "antd";
import "../styles.css";

function MedicalLearningBehaviour(props: any) {
  const [form] = Form.useForm();

  return (
    <div className="medical__birth">
      <Form form={form}>
        <div className="medical__birth_innerWrapper">
          <Heading
            heading="Family history of Learning, Behaviour and/or Mental Health Problems"
            subHeading=""
            styleName=""
          />
          <p>
            Indicate whether any member of the child's birth family experienced difficulties with
            one or more of the following during their childhood and/or adolescent years.
          </p>

          <div className="form form-box">
            <div className="medical__learning_formRow">
              <div className="medical-group">
                <div className="pretty p-default p-curve p-thick">
                  <input type="checkbox" />
                  <div className="state p-primary-o">
                    <label>Learning</label>
                  </div>
                </div>
              </div>
              <div className="medical-group">
                <label className="form-label">Relation to child:</label>
                <select className="form-control">
                  <option>Half Sibling</option>
                  <option>Father</option>
                </select>
                <i className="fa fa-angle-down arrow"></i>
              </div>
            </div>
            <div className="medical__learning_formRow">
              <div className="medical-group">
                <div className="pretty p-default p-curve p-thick">
                  <input type="checkbox" />
                  <div className="state p-primary-o">
                    <label>Attention</label>
                  </div>
                </div>
              </div>
              <div className="medical-group">
                <label className="form-label">Relation to child:</label>
                <select className="form-control">
                  <option>Half Sibling</option>
                  <option>Father</option>
                </select>
                <i className="fa fa-angle-down arrow"></i>
              </div>
            </div>
            <div className="medical__learning_formRow">
              <div className="medical-group">
                <div className="pretty p-default p-curve p-thick">
                  <input type="checkbox" />
                  <div className="state p-primary-o">
                    <label>Speech/Language</label>
                  </div>
                </div>
              </div>
              <div className="medical-group">
                <label className="form-label">Relation to child:</label>
                <select className="form-control">
                  <option>Half Sibling</option>
                  <option>Father</option>
                </select>
                <i className="fa fa-angle-down arrow"></i>
              </div>
            </div>
            <div className="medical__learning_formRow">
              <div className="medical-group">
                <div className="pretty p-default p-curve p-thick">
                  <input type="checkbox" />
                  <div className="state p-primary-o">
                    <label>Hyperactivity</label>
                  </div>
                </div>
              </div>
              <div className="medical-group">
                <label className="form-label">Relation to child:</label>
                <select className="form-control">
                  <option>Half Sibling</option>
                  <option>Father</option>
                </select>
                <i className="fa fa-angle-down arrow"></i>
              </div>
            </div>
            <div className="medical__learning_formRow">
              <div className="medical-group">
                <div className="pretty p-default p-curve p-thick">
                  <input type="checkbox" />
                  <div className="state p-primary-o">
                    <label>Conduct/behaviour</label>
                  </div>
                </div>
              </div>
              <div className="medical-group">
                <label className="form-label">Relation to child:</label>
                <select className="form-control">
                  <option>Half Sibling</option>
                  <option>Father</option>
                </select>
                <i className="fa fa-angle-down arrow"></i>
              </div>
            </div>
            <div className="medical__learning_formRow">
              <div className="medical-group">
                <div className="pretty p-default p-curve p-thick">
                  <input type="checkbox" />
                  <div className="state p-primary-o">
                    <label>Mental Health</label>
                  </div>
                </div>
              </div>
              <div className="medical-group">
                <label className="form-label">Relation to child:</label>
                <select className="form-control">
                  <option>Half Sibling</option>
                  <option>Father</option>
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
export default MedicalLearningBehaviour;
