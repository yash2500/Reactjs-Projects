import React, { useState } from "react";
import Layout from "./Layout";

const HomePage = () => {
  const [pAmount, setpAmount] = useState(1500);
  const [duration, setDuration] = useState(3);
  const [interest, setInterest] = useState(1);

  const [amount, setAmount] = useState([{
    monthlyEmi: "",
    totalInterestAmount: "",
    totalAmountPayable: "",
  }]);

  function emt() {
    let r = parseFloat(interest) / 12 / 100;
    let P = pAmount;
    let n = duration;
    
    let emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    let TotalAmountOfInterest = emi * n - P;
    let totalAmt = TotalAmountOfInterest + parseFloat(P);

    setAmount({
      monthlyEmi: parseInt(emi),
      totalInterestAmount: parseInt(TotalAmountOfInterest),
      totalAmountPayable: parseInt(totalAmt),
    });

    let datas = JSON.parse(localStorage.getItem('datas') || "[]");
    let data = {
      pAmount: pAmount,
      duration: duration,
      interest: interest,
      monthlyEmi: parseInt(emi),
      totalInterestAmount: parseInt(TotalAmountOfInterest),
      totalAmountPayable: parseInt(totalAmt),
    };
    datas.push(data);

    localStorage.setItem("datas", JSON.stringify(datas));
  }

  let i = JSON.parse(localStorage.getItem("datas"))

  return (
    <>
      <Layout />

      <div className="d-md-flex">
        <div className="card w-fit mx-2">
          <div className="card-body">
            <table className="w-100">
            <thead>
              <tr>
                <th></th>
              </tr>
            </thead>
              <tbody>
                <tr>
                  <td>Type of EMI</td>
                  <td>
                    <input type="radio" name="emi" id="emi1" />
                    <label htmlFor="emi1">Instant EMI</label>
                    <br />
                    <input type="radio" name="emi" id="emi2" />
                    <label htmlFor="emi2">EMI on Call</label>
                    <br />
                  </td>
                </tr>

                <tr>
                  <td>
                    <label htmlFor="customRange1">Transaction Amount</label>
                  </td>
                </tr>

                <tr>
                  <td>
                    <input
                      type="range"
                      className="form-range"
                      id="customRange1"
                      min="1500"
                      max="999999"
                      value={pAmount}
                      onChange={(e) => {
                        setpAmount(e.target.value);
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      id="customRange1"
                      value={pAmount}
                      onChange={(e) => {
                        setpAmount(e.target.value);
                      }}
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <label htmlFor="customRange2">Tenure</label>
                  </td>
                </tr>

                <tr>
                  <td>
                    <input
                      type="range"
                      className="form-range"
                      id="customRange2"
                      min="3"
                      max="24"
                      step="3"
                      value={duration}
                      onChange={(e) => {
                        setDuration(e.target.value);
                      }}
                    />
                  </td>
                  <td>
                    <select
                      className="dropdown"
                      value={duration}
                      onChange={(e) => {
                        setDuration(e.target.value);
                      }}
                    >
                      <option className="dropdown-item" value="3">
                        3 Months
                      </option>
                      <option className="dropdown-item" value="6">
                        6 Months
                      </option>
                      <option className="dropdown-item" value="9">
                        9 Months
                      </option>
                      <option className="dropdown-item" value="12">
                        12 Months
                      </option>
                      <option value="15" hidden></option>
                      <option className="dropdown-item" value="18">
                        18 Months
                      </option>
                      <option value="21" hidden></option>
                      <option className="dropdown-item" value="24">
                        24 Months
                      </option>
                    </select>
                  </td>
                </tr>

                <tr>
                  <td>
                    <label htmlFor="customRange2">
                      Illustrative Interest Rates (% p.a.)
                    </label>
                  </td>
                </tr>

                <tr>
                  <td>
                    <input
                      type="range"
                      className="form-range"
                      id="customRange3"
                      min="1"
                      max="20"
                      value={interest}
                      onChange={(e) => {
                        setInterest(e.target.value);
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      id="customRange3"
                      value={interest}
                      onChange={(e) => {
                        setInterest(e.target.value);
                      }}
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <button className="btn btn-primary" onClick={() => emt()}>
                      Calculate
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>Monthly EMI</td>
                  <td>: Rs. {amount.monthlyEmi}</td>
                </tr>

                <tr>
                  <td>Total Interest Amount</td>
                  <td>: Rs. {amount.totalInterestAmount}</td>
                </tr>

                <tr>
                  <td>Total Amount Payable</td>
                  <td>: Rs. {amount.totalAmountPayable}</td>
                </tr>
              </tbody>
            </table>
            <p>
              <b>Note:-</b> Loan principal amount should not be grater than the
              Credit Limit of the Card{" "}
            </p>
          </div>
        </div>

        <div className="card w-full p-3 ms-2 me-2">
          <div>
            <p>Amount and Interest</p>
            <div>
              <input
                type="radio"
                name="tg"
                className="me-1"
                id="table"
              />
              <label htmlFor="table" className="me-2">
                Table
              </label>
              <input type="radio" name="tg" className="me-1" id="graph" />
              <label htmlFor="table">Graph</label>
            </div>

            <table className="table table-bordered m-2">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Transaction Amount</th>
                  <th>Illustrative Interest Rates (% p.a.)</th>
                  <th>Tenure</th>
                  <th>Monthly EMI</th>
                  <th>Total Interest Amount</th>
                  <th>Total Amount Payable</th>
                </tr>
              </thead>
              <tbody>
                { i !== null  ? 
                  
                  i.slice(-10).map((data, i) => {
                  return(
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{data.pAmount}</td>
                    <td>{data.interest}</td>
                    <td>{data.duration}</td>
                    <td>{data.monthlyEmi}</td>
                    <td>{data.totalInterestAmount}</td>
                    <td>{data.totalAmountPayable}</td>
                  </tr>
                  )
                }) : ""
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
