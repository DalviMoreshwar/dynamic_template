import React, { useState } from "react";
import FieldLabel from "../FieldLabel";
import AddOption from "./AddOption";


const CreateTemplate = () => {
  const [templateName, setTemplateName] = useState("")
  const [require, setRequire] = useState(false)
  const [inputFields, setInputFields] = useState([])

  const handleFormChange = (index, e) => {
    let data = [...inputFields];
    data[index][e.target.name] = e.target.value;
    setInputFields(data)
  }

  const addField = () => {
    let newField = { fiedlLable: "", options: [{ option: "" }] }
    let newRequired = false;
    setInputFields([...inputFields, newField])
    setRequire(newRequired)
  }

  const removeField = (index) => {
    let data = [...inputFields];
    data.splice(index, 1)
    setInputFields(data)
  }

  const submit = (e) => {
    e.preventDefault();
    console.log(inputFields, require)
  }

  return (
    <>
      <div className="row g-0 mt-3 ">
        <div className="col-6 col-md-3 p-3">
          <div className="card">
            <div className="card-body d-grid">
              <h5 className="text-center">Tool Box</h5>
              <button
                type="text"
                block
                className="btn btn-outline-primary btn-md"
                onClick={addField}
              >
                Dropdown
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-7 p-3">
          <h3 className="text-center">Create Template</h3>

          <hr />

          <FieldLabel label="Template Name:" />
          <input
            id="templateName"
            className="form-control"
            type="text"
            value={templateName}
            required
            onChange={(e) => setTemplateName(e.target.value)}
          />

          <hr />

          {inputFields.map((input, index) => {
            return (
              <div className="card mb-3" key={index} >
                <div className="card-body">
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <span className=" btn btn-danger btn-md" onClick={() => removeField(index)}>x</span>
                  </div>
                  <div className="card-body">
                    <div className="mb-1">
                      <div className="d-flex justify-content-between">
                        <FieldLabel label="Field Lable:" />
                        <div>
                          <input className="form-check-input" type="checkbox" checked={require} onChange={() => setRequire(!require)} id="flexCheckDefault" /> {" "}
                          <label className="form-check-label text-muted fs-6" htmlFor="flexCheckDefault">
                            <small>Required</small>
                          </label>
                        </div>
                      </div>
                      <input
                        className="form-control"
                        name='fiedlLable'
                        placeholder='Lable Name'
                        value={input.labelName}
                        onChange={e => handleFormChange(index, e)}
                        required
                      />
                    </div>
                    <AddOption />
                  </div>
                </div>
              </div>
            )
          })}
          <div className="fixed-bottom bg-light p-2">
            <div className="d-grid gap-2 d-md-flex justify-content-center form-footer container">
              <button className="btn btn-outline-success btn-md" >Privew</button> {" "}
              <button className="btn btn-outline-secondary btn-md" onClick={submit}>submit</button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default CreateTemplate;
