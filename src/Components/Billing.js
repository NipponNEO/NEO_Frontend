import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { RadioButton } from "@progress/kendo-react-inputs";
// import { Error } from "@progress/kendo-react-labels";
import { Input } from "@progress/kendo-react-inputs";
import { useState } from "react";
import EstimateAndTotalTag from "./EstimateAndTotalTag.js";
import BillInput from "./BillInput.js";
import "./Billing.css";

const Billing = () => {
  const formField = [
    { id: 1, label: "Company Name", name: "company-name" },
    { id: 2, label: "GST No", name: "company-GST No" },
    { id: 3, label: "Address", name: "company-Address" },
    { id: 4, label: "Phone-no", name: "company-Phone-no" },
    { id: 5, label: "Customer Code", name: "company-Customer-Code" },
    { id: 6, label: "PAN No:", name: "company-PAN-No" },
    { id: 7, label: "Name", name: "individual-name" },
    { id: 8, label: "Address", name: "individual-Address" },
    { id: 9, label: "Phone-no", name: "individual-Phone-no" },
    { id: 10, label: "Customer Code", name: "individual-Customer-Code" },
    { id: 11, label: "PAN No:", name: "individual-PAN-No" },
  ];

  const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));

  const [check, setCheck] = useState(true);
  const [popCompany, setPopCompany] = useState(true);
  const [popIndividual, setPopIndividual] = useState(false);

  const handleCompany = () => {
    setCheck(true);
    setPopCompany(true);
    setPopIndividual(false);
  };

  const handleIndividual = () => {
    setCheck(false);
    setPopCompany(false);
    setPopIndividual(true);
  };

  return (
    <>
      <div className="billing-container">
        <div className="bill-number">
          <EstimateAndTotalTag />

          <div className="payment-mode">
            <header>Payment Mode</header>

            <div className="billing-type">
              <div className="row">
                <div className="col-6 mb-2 d-flex justify-content-center">
                  {/* <input
                    type="radio"
                    name="billing-type"
                    id="company"
                    checked={check}
                    onChange={handleCompany}
                    value="company-billing"
                  /> */}
                  Company-billing
                </div>

                {/* <div className="col-6 mb-2 d-flex justify-content-center"> */}
                  {/* <input
                    type="radio"
                    name="billing-type"
                    id="individual"
                    onClick={handleIndividual}
                    value="individual-billing"
                  /> */}
                  {/* Individual Billing
                </div> */}
              </div>
            </div>
            <Form
              onSubmit={handleSubmit}
              render={(formRenderProps) => (
                <FormElement
                  style={{
                    maxWidth: "100%",
                  }}
                >
                  <fieldset
                    className={"k-form-fieldset"}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <div className="bill">
                      {/* Bill tag company */}
                      {popCompany ? (
                        <div className="company-billing">
                          <div className="row mb-0">
                            <BillInput formField={formField[0]} />
                            <BillInput formField={formField[1]} />
                            <BillInput formField={formField[2]} />
                            <BillInput formField={formField[3]} />
                            <BillInput formField={formField[4]} />
                            <BillInput formField={formField[5]} />
                          </div>
                        </div>
                      ) : null}

                      {/* Bill tag individual */}
                      {popIndividual ? (
                        <div className="individual-billing">
                          <div className="row">
                            <BillInput formField={formField[6]} />
                            <BillInput formField={formField[7]} />
                            <BillInput formField={formField[8]} />
                            <BillInput formField={formField[9]} />
                            <BillInput formField={formField[10]} />
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </fieldset>

                  <div
                    className="navigation"
                    style={{
                      margin: "1rem 2rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    {/* <div>
                      <button>Back</button>
                    </div> */}
                    {/* <div>
                      <button
                        type={"submit"}
                        disabled={!formRenderProps.allowSubmit}
                      >
                        Next
                      </button>
                    </div> */}
                  </div>
                </FormElement>
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Billing;
