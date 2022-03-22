import { Input, RadioButton, TextArea } from "@progress/kendo-react-inputs";
import { Card, PanelBar, PanelBarItem } from "@progress/kendo-react-layout";
import { Button, ButtonGroup } from "@progress/kendo-react-buttons";

const workorderAdata = [
  {
    Sno: "1",
    Materialcode: "xxxxxx",
    Packagename: "Neo Luxe",
    Printable: "200",
    Rate: "40",
    cost: "8000",
  },
  {
    Sno: "2",
    Materialcode: "xxxxxx",
    Packagename: "Neo Elegant",
    Printable: "100",
    Rate: "40",
    cost: "4000",
  },
  {
    Sno: "3",
    Materialcode: "xxxxxx",
    Packagename: "Neo Smart Stin",
    Printable: "60",
    Rate: "40",
    cost: "2400",
  },
  {
    Sno: "4",
    Materialcode: "xxxxxx",
    Packagename: "Neo Luxe: Star",
    Printable: "100",
    Rate: "40",
    cost: "4000",
  },
  {
    Sno: "5",
    Materialcode: "xxxxxx",
    Packagename: "Neo Smart Lookup",
    Printable: "100",
    Rate: "40",
    cost: "4000",
  },
  {
    Sno: "6",
    Materialcode: "xxxxxx",
    Packagename: "Neo Hydro Black",
    Printable: "25",
    Rate: "12",
    cost: "3000",
  },
];

const workorderCdata = [
  {
    Sno: "1",
    Materialcode: "14770010100",
    Productname: "Momento Dzine",
    Base: "MD1",

    Total: "15L",
  },
  {
    Sno: "2",
    Materialcode: "14770010100",
    Productname: "xxxxxxxxx",
    Base: "*****",
    Total: "15L",
  },
];

const toolsdata = [
  {
    Sno: "1",
    materialcode: "xxxxxx",
    tools: "Roller 7mm",
    Specifications: "5",
    Qty: "5",
    total: "15L",
  },
];


const value = "XXXXX";

const Workorder = () => {
  return (
    <div>
      <div className="panelbar-wrapper">
        <PanelBar>
          {/* WORKORDER A */}

          <PanelBarItem title={"WorkOrder A"}>
            <div
              style={{
                margin: 20,
                borderStyle: "solid",
                borderWidth: "1px",
                padding: 30,
              }}
            >
              <div style={{ display: "flex" }}>
                <h6 style={{ marginTop: 5, display: "flex" }}>Muzzaffar</h6>
                <h6 style={{ marginLeft: "73%", display: "flex" }}>
                  11-02-2022
                </h6>
              </div>

              <div style={{ display: "flex" }}>
                <h6>9876543212</h6>
              </div>
              <div>
                <h6 style={{ marginBottom: "10px" }}>
                  Vivekanandha St,Chennai Main Road,Chennai - 600012
                </h6>
                <h6>muzza@ideassion.com</h6>
              </div>

              <h6 style={{ display: "flex" }}>
                Customer Code{" "}
                <Input style={{ width: "20%", marginLeft: 5 }} value={value} />
              </h6>
              <hr></hr>
              <Card
                style={{
                  backgroundColor: "#E1F0F7",
                  fontSize: "15px",
                  fontWeight: "bold",
                  marginTop: 20,
                }}
              >
                Work Order A
              </Card>
              <table class="table table-bordered">
                <tbody>
                  <tr>
                    <th scope="col">Sno</th>
                    <th scope="col" style={{ textAlign: "center" }}>
                      Materialcode
                    </th>
                    <th scope="col" style={{ textAlign: "center" }}>
                      Package Name
                    </th>
                    <th scope="col" style={{ textAlign: "center" }}>
                      Printable (sqft)
                    </th>
                    <th scope="col" style={{ textAlign: "center" }}>
                      Rate (Rs)
                    </th>
                    <th scope="col" style={{ textAlign: "right" }}>
                      Total Cost (RS)
                    </th>
                  </tr>
                  {workorderAdata.map((data) => {
                    console.log(data);
                    return (
                      <tr>
                        <td>{data.Sno}</td>
                        <td style={{ textAlign: "center" }}>
                          {data.Materialcode}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {data.Packagename}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {data.Printable}
                        </td>
                        <td style={{ textAlign: "center" }}>{data.Rate}</td>
                        <td style={{ textAlign: "right" }}>{data.cost}</td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td colspan="5" style={{ fontWeight: "bold" }}>
                      Total Amount
                    </td>
                    <td style={{ fontWeight: "bold", textAlign: "right" }}>
                      Rs 25,400
                    </td>
                  </tr>
                  <tr>
                    <td colspan="5" style={{ fontWeight: "bold" }}>
                      Discount 15%
                    </td>
                    <td style={{ fontWeight: "bold", textAlign: "right" }}>
                      Rs 3,810
                    </td>
                  </tr>
                  <tr>
                    <td colspan="5" style={{ fontWeight: "bold" }}>
                      Total Payable Amount
                    </td>
                    <td style={{ fontWeight: "bold", textAlign: "right" }}>
                      Rs 21,590
                    </td>
                  </tr>
                  <tr>
                    <td colspan="5" style={{ fontWeight: "bold" }}>
                      Additional 5%
                    </td>
                    <td style={{ fontWeight: "bold", textAlign: "right" }}>
                      Rs 25,032.05
                    </td>
                  </tr>
                  <tr>
                    <td colspan="5" style={{ fontWeight: "bold" }}>
                      Additional x% discount
                    </td>
                    <td style={{ fontWeight: "bold", textAlign: "right" }}>
                      Rs 1026.00
                    </td>
                  </tr>
                  <tr>
                    <td
                      colspan="5"
                      style={{ backgroundColor: "#EFF0EE", fontWeight: "bold" }}
                    >
                      Total Payable Amount
                    </td>
                    <td
                      style={{
                        backgroundColor: "#EFF0EE",
                        fontWeight: "bold",
                        textAlign: "right",
                      }}
                    >
                      Rs 19,500/-
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </PanelBarItem>

          {/* WORKORDER B */}

          <PanelBarItem title={"WorkOrder B"}>
            <div
              style={{
                margin: 20,
                borderStyle: "solid",
                borderWidth: "1px",
                padding: 30,
              }}
            >
              <div style={{ display: "flex" }}>
                <h6 style={{ marginTop: 5, display: "flex" }}>Muzzaffar</h6>
                <h6 style={{ marginLeft: "73%", display: "flex" }}>
                  11-02-2022
                </h6>
              </div>

              <div style={{ display: "flex" }}>
                <h6>98########</h6>
              </div>
              <div>
                <h6>####@####.com</h6>
              </div>

              <h6 style={{ display: "flex" }}>
                SEP Code{" "}
                <Input style={{ width: "20%", marginLeft: 5 }} value={value} />
              </h6>
              <hr></hr>
              <Card
                style={{
                  backgroundColor: "#E1F0F7",
                  fontSize: "15px",
                  fontWeight: "bold",
                  marginTop: 20,
                }}
              >
                Work Order B
              </Card>
              <table class="table table-bordered">
                <tbody>
                  <tr>
                    <th scope="col">Sno</th>
                    <th scope="col" style={{ textAlign: "center" }}>
                      Materialcode
                    </th>
                    <th scope="col" style={{ textAlign: "center" }}>
                      Product Name
                    </th>
                    <th scope="col" style={{ textAlign: "center" }}>
                      Printable (sqft)
                    </th>
                    <th scope="col" style={{ textAlign: "center" }}>
                      Rate (Rs)
                    </th>
                    <th scope="col" style={{ textAlign: "right" }}>
                      Total Cost (RS)
                    </th>
                  </tr>
                  {workorderAdata.map((data) => {
                    console.log(data);
                    return (
                      <tr>
                        <td>{data.Sno}</td>
                        <td style={{ textAlign: "center" }}>
                          {data.Materialcode}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {data.Packagename}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {data.Printable}
                        </td>
                        <td style={{ textAlign: "center" }}>{data.Rate}</td>
                        <td style={{ textAlign: "right" }}>{data.cost}</td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td
                      colspan="5"
                      style={{ backgroundColor: "#EFF0EE", fontWeight: "bold" }}
                    >
                      Total Payable Amount
                    </td>
                    <td
                      style={{
                        backgroundColor: "#EFF0EE",
                        fontWeight: "bold",
                        textAlign: "right",
                      }}
                    >
                      Rs 22,100/-
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </PanelBarItem>

          {/* WORKORDER C*/}

          <PanelBarItem title={"WorkOrder C"}>
            <div
              style={{
                margin: 20,
                borderStyle: "solid",
                borderWidth: "1px",
                padding: 30,
              }}
            >
              <div style={{ display: "flex" }}>
                <h6 style={{ marginTop: 5, display: "flex" }}>Muzzaffar</h6>
                <h6 style={{ marginLeft: "73%", display: "flex" }}>
                  11-02-2022
                </h6>
              </div>

              <div style={{ display: "flex" }}>
                <h6>98########</h6>
              </div>
              <div>
                <h6>####@####.com</h6>
              </div>

              <h6 style={{ display: "flex" }}>
                Dealer Code{" "}
                <Input style={{ width: "20%", marginLeft: 5 }} value={value} />
              </h6>
              <hr></hr>
              <Card
                style={{
                  backgroundColor: "#E1F0F7",
                  fontSize: "15px",
                  fontWeight: "bold",
                  marginTop: 20,
                }}
              >
                Material To be Ordered
              </Card>
              <table class="table table-bordered">
                <tbody>
                  <tr>
                    <th scope="col">Sno</th>
                    <th scope="col" style={{ textAlign: "center" }}>
                      Materialcode
                    </th>
                    <th scope="col" style={{ textAlign: "center" }}>
                      Product Name
                    </th>
                    <th scope="col" style={{ textAlign: "center" }}>
                      Product Base
                    </th>
                    <th scope="col" style={{ textAlign: "center" }}>
                      Quantity
                    </th>
                    <th scope="col" style={{ textAlign: "right" }}>
                      Total
                    </th>
                  </tr>
                  {workorderCdata.map((data) => {
                    console.log(data);
                    return (
                      <tr>
                        <td>{data.Sno}</td>
                        <td style={{ textAlign: "center" }}>
                          {data.Materialcode}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {data.Productname}
                        </td>
                        <td style={{ textAlign: "center" }}>{data.Base}</td>
                        <td style={{ textAlign: "center" }}>
                          <ButtonGroup>
                            <Button
                              themeColor="primary"
                              style={{ padding: 10 }}
                            >
                              1L
                            </Button>
                            <Button
                              themeColor="primary"
                              style={{ padding: 10, marginLeft: 5 }}
                            >
                              4L
                            </Button>
                            <Button
                              themeColor="primary"
                              style={{ padding: 10, marginLeft: 5 }}
                            >
                              10L
                            </Button>
                            <Button
                              disabled={true}
                              style={{ padding: 10, marginLeft: 5 }}
                            >
                              20L
                            </Button>
                          </ButtonGroup>
                        </td>
                        <td style={{ textAlign: "right" }}>{data.Total}</td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td
                      colspan="5"
                      style={{ backgroundColor: "#EFF0EE", fontWeight: "bold" }}
                    >
                      Total Payable Amount
                    </td>
                    <td
                      style={{
                        backgroundColor: "#EFF0EE",
                        fontWeight: "bold",
                        textAlign: "right",
                      }}
                    >
                      Rs 22,100/-
                    </td>
                  </tr>
                </tbody>
              </table>

              <Card
                style={{
                  backgroundColor: "#E1F0F7",
                  fontSize: "15px",
                  fontWeight: "bold",
                  marginTop: 20,
                }}
              >
                Tools To be Ordered
              </Card>
              <table class="table table-bordered">
                <tbody>
                  <tr>
                    <th scope="col">Sno</th>
                    <th scope="col" style={{ textAlign: "center" }}>
                      Materialcode
                    </th>
                    <th scope="col" style={{ textAlign: "center" }}>
                      Tools
                    </th>
                    <th scope="col" style={{ textAlign: "center" }}>
                      Specifications
                    </th>
                    <th scope="col" style={{ textAlign: "center" }}>
                      Quantity
                    </th>
                    <th scope="col" style={{ textAlign: "right" }}>
                      Total
                    </th>
                  </tr>
                  {toolsdata.map((data) => {
                    console.log(data);
                    return (
                      <tr>
                        <td>{data.Sno}</td>
                        <td style={{ textAlign: "center" }}>
                          {data.materialcode}
                        </td>
                        <td style={{ textAlign: "center" }}>{data.tools}</td>
                        <td style={{ textAlign: "center" }}>
                          {data.Specifications}
                        </td>
                        <td style={{ textAlign: "center" }}>{data.Qty}</td>
                        <td style={{ textAlign: "right" }}>{data.total} </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <Card
                style={{
                  backgroundColor: "#E1F0F7",
                  fontSize: "15px",
                  fontWeight: "bold",
                  marginTop: 20,
                }}
              >
                Approve Material Order by SEP{" "}
              </Card>
              <div
                style={{ display: "flex", marginTop: 10, fontWeight: "bold" }}
              >
                <RadioButton
                  name="group1"
                  value="first"
                  disabled={true}
                  label="Yes"
                />
                <br />
                <RadioButton
                  style={{ marginLeft: 10 }}
                  name="group1"
                  value="second"
                  checked={true}
                  label="No"
                />
                <br />
              </div>
              <TextArea
                style={{ marginTop: 10 }}
                disabled={true}
                placeholder="Reason for No"
                rows="5"
              />
            </div>
          </PanelBarItem>

          {/* WORKORDER D*/}
          
          <PanelBarItem title={"WorkOrder D"}>
          <div style={{margin:20,borderStyle:"solid", borderWidth:"1px"}}>
            <div style={{ padding: "1rem" }}>
              <div className="row">
                <div className="col-4">
                  <Card
                    style={{
                      borderRadius: 0,
                      color: "#000",
                      backgroundColor: "lightgrey",
                      width: "95%",
                    }}
                  >
                    Site Activity for all Rooms :
                  </Card>
                </div>
                <div className="col-4">
                  <label>Start Date</label>
                  <p>02-03-2022</p>
                </div>
                <div className="col-4">
                  <label>End Date</label>
                  <p>12-03-2022</p>
                </div>
              </div>
              <div>
                <Card
                  style={{
                    borderRadius: 0,
                    color: "#000",
                    backgroundColor: "lightblue",
                    width: "30%",
                  }}
                >
                  Proposed Painter Team: 1
                </Card>
              </div>
              <div className="row mt-2">
                <div className="col">
                  <Card
                    style={{
                      borderRadius: 0,
                      color: "#000",
                      backgroundColor: "lightyellow",
                      width: "30%",
                    }}
                  >
                    Bedroom
                  </Card>
                </div>
                <div className="col">
                  <Card
                    style={{
                      borderRadius: 0,
                      color: "#000",
                      backgroundColor: "lightyellow",
                      width: "30%",
                    }}
                  >
                    BathRoom
                  </Card>
                </div>
                <div className="col-4">
                  <Card
                    style={{
                      borderRadius: 0,
                      color: "#000",
                      backgroundColor: "lightyellow",
                      width: "25%",
                    }}
                  >
                    Kitchen
                  </Card>
                </div>
              </div>
              
              <div>
                <Card style={{  backgroundColor:"#E1F0F7",marginTop:10}}>
                  <h6 style={{marginLeft:"20px",marginTop:"10px"}}>Day 1</h6>
                  <div style={{display:"flex"}}><Card style={{backgroundColor:"white",width:"20%",marginLeft:"15%",alignItems:"center",justifyContent:"center",padding:10}}><h6>Masking</h6></Card>
                  <Card style={{backgroundColor:"white",width:"20%",marginLeft:"5%",alignItems:"center",justifyContent:"center",padding:10}}><h6>Masking</h6></Card>
                  </div>

                  <div style={{display:"flex"}}><Card style={{backgroundColor:"white",width:"20%",marginLeft:"15%",alignItems:"center",justifyContent:"center",padding:10,marginTop:10}}><h6>Sanding</h6></Card>
                  <Card style={{backgroundColor:"white",width:"20%",marginLeft:"5%",alignItems:"center",justifyContent:"center",padding:10,marginTop:10}}><h6>Sanding</h6></Card>
                  </div>
                 
                  <div style={{display:"flex"}}><Card style={{backgroundColor:"white",width:"20%",marginLeft:"15%",alignItems:"center",justifyContent:"center",padding:10,marginTop:10,marginBottom:20}}><h6>1st Base Coat</h6></Card></div>
                 </Card>
            </div> 

            <div>
                <Card style={{ backgroundColor:"#E1F0F7",marginTop:10}}>
                  <h6 style={{marginLeft:"20px",marginTop:"10px"}}>Day 2</h6>
                  <Card style={{backgroundColor:"#FAFEAF",width:"20%",marginLeft:"15%",alignItems:"center",justifyContent:"center",padding:10,marginTop:10,marginBottom:10}}><h6>Bathroom</h6></Card>
                  <div style={{display:"flex"}}><Card style={{backgroundColor:"white",width:"20%",marginLeft:"15%",alignItems:"center",justifyContent:"center",padding:10}}><h6>Base Coat Dry</h6></Card>
                  <Card style={{backgroundColor:"white",width:"20%",marginLeft:"5%",alignItems:"center",justifyContent:"center",padding:10}}><h6>1st Top Coat</h6></Card>
                  </div>
                  
                  
                  <div style={{display:"flex"}}>
                  <Card style={{backgroundColor:"white",width:"20%",marginLeft:"15%",alignItems:"center",justifyContent:"center",padding:10,marginTop:10}}><h6>Sanding</h6></Card>
                  <Card style={{backgroundColor:"white",width:"20%",marginLeft:"5%",alignItems:"center",justifyContent:"center",padding:10,marginTop:10}}><h6>Sanding</h6></Card>
                  </div>
                 
                  <div style={{display:"flex"}}><Card style={{backgroundColor:"white",width:"20%",marginLeft:"15%",alignItems:"center",justifyContent:"center",padding:10,marginTop:10,marginBottom:20}}><h6>1st Base Coat</h6></Card></div>
                 </Card>
            </div> 


            <div>
                <Card style={{backgroundColor:"#E1F0F7",marginTop:10}}>
                  <h6 style={{marginLeft:"20px",marginTop:"10px"}}>Day 3</h6>
                  <div style={{display:"flex"}}><Card style={{backgroundColor:"#FAFEAF",width:"20%",marginLeft:"15%",alignItems:"center",justifyContent:"center",padding:10,marginTop:10,marginBottom:10}}><h6>Bathroom</h6></Card>
                  <Card style={{backgroundColor:"#FAFEAF",width:"20%",marginLeft:"5%",alignItems:"center",justifyContent:"center",padding:10,marginTop:10,marginBottom:10}}><h6>Bathroom</h6></Card>
                  </div>
                  <div style={{display:"flex"}}><Card style={{backgroundColor:"white",width:"20%",marginLeft:"15%",alignItems:"center",justifyContent:"center",padding:10}}><h6>1st Base Coat</h6></Card>
                  <Card style={{backgroundColor:"white",width:"20%",marginLeft:"5%",alignItems:"center",justifyContent:"center",padding:10}}><h6>2nd Top Coat</h6></Card>
               
              
                  </div>
                  
                  
                  <div style={{display:"flex"}}>
                  <Card style={{backgroundColor:"white",width:"20%",marginLeft:"15%",alignItems:"center",justifyContent:"center",padding:10,marginTop:10}}><h6>Base Coat dry</h6></Card>
                  <Card style={{backgroundColor:"white",width:"20%",marginLeft:"5%",alignItems:"center",justifyContent:"center",padding:10,marginTop:10}}><h6>2nd Top Coat Dry</h6></Card>
                  </div>
                 
                  <div style={{display:"flex"}}><Card style={{backgroundColor:"white",width:"20%",marginLeft:"15%",alignItems:"center",justifyContent:"center",padding:10,marginTop:10,marginBottom:20}}><h6>1st Top Coat Dry</h6></Card></div>
                 </Card>
            </div> 

            </div>
            </div>
          </PanelBarItem>
         
        </PanelBar>
      </div>
    </div>
  );
};

export default Workorder;
