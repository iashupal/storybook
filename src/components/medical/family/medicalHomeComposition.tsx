import React, { useState } from "react";
import Heading from "../../heading";
import { Form, Button } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import "../styles.css";

function MedicalHomeComposition(props: any) {
  const [form] = Form.useForm();
  const [fullname, setFullName] = useState("");
  const [time, setTime] = useState("");
  const [siblings, setSiblings] = useState([
    { fullname: "", time: "", relationship: "" },
  ]);

  const handleAddClick = () => {
    setSiblings([...siblings, { fullname: "", time: "", relationship: "" }]);
  };
  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...siblings];
    list.splice(index, 1);
    setSiblings(list);
    console.log("list", list);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("siblings", siblings);
  };
  return (
    <div className="medical__birth">
      <Form form={form}>
        <div className="medical__birth_innerWrapper">
          <Heading heading="Home Composition" subHeading="" styleName="" />
          <p>
            List all other family members not listed is Sections A, B or C above
            (i.e, birth parents, primary caretakers, siblings) who reside in the
            primary home of the child. Include both adults and other children.
            Estimate the length of time they have lived in the home with the
            child.
          </p>
          <div className="home__heading__wrapper">
            <Heading heading="Family Members" subHeading="" styleName="" />
          </div>
          <div className="form form-box">
            {siblings.map((sibling, index) => {
              return (
                <div className="medical__home_formRow1" key={index}>
                  <div className="medical-group">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={sibling.fullname}
                      placeholder="Philip Benson"
                      onChange={(e) => setFullName(e.target.defaultValue)}
                    />
                  </div>

                  <div className="medical-group">
                    <label className="form-label">Time in House</label>
                    <input
                      type="number"
                      className="form-control"
                      defaultValue={sibling.time}
                      placeholder="45"
                      onChange={(e) => setTime(e.target.defaultValue)}
                    />
                  </div>
                  <div className="medical-group">
                    <label className="form-label">Relationship</label>
                    <select className="form-control">
                      <option>Aunt</option>
                      <option>Cousin</option>
                      <option>Grandparents</option>
                    </select>
                    <i className="fa fa-angle-down arrow"></i>
                  </div>
                  <div className="medical-group">
                    <i
                      className="far fa-trash-alt delete "
                      onClick={() => handleRemoveClick(index)}
                    ></i>
                  </div>
                </div>
              );
            })}

            <div>
              <Button
                type="primary"
                size="large"
                onClick={handleAddClick}
                block
                icon={<PlusOutlined />}
                className="addMore__btn"
              >
                Add More
              </Button>
            </div>
          </div>
          <div className="home__heading__wrapper">
            <Heading heading="Non-Family Members" subHeading="" styleName="" />
          </div>
          <div className="form form-box">
            {siblings.map((sibling, index) => {
              return (
                <div className="medical__home_formRow1" key={index}>
                  <div className="medical-group">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={fullname}
                      placeholder="Philip Benson"
                      onChange={(e) => setFullName(e.target.defaultValue)}
                    />
                  </div>

                  <div className="medical-group">
                    <label className="form-label">Time in House</label>
                    <input
                      type="number"
                      className="form-control"
                      defaultValue={time}
                      placeholder="45"
                      onChange={(e) => setTime(e.target.defaultValue)}
                    />
                  </div>
                  <div className="medical-group">
                    <label className="form-label">Relationship</label>
                    <select className="form-control">
                      <option>Aunt</option>
                      <option>Cousin</option>
                      <option>Grandparents</option>
                    </select>
                    <i className="fa fa-angle-down arrow"></i>
                  </div>
                  <div className="medical-group">
                    <i
                      className="far fa-trash-alt delete "
                      onClick={() => handleRemoveClick(index)}
                    ></i>
                  </div>
                </div>
              );
            })}
            <div>
              <Button
                type="primary"
                size="large"
                onClick={handleAddClick}
                block
                icon={<PlusOutlined />}
                className="addMore__btn"
              >
                Add More
              </Button>
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
export default MedicalHomeComposition;
