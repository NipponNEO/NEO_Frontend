import React, { useState, useCallback } from 'react'
import { RadioButton } from "@progress/kendo-react-inputs";
import ImageUploader from 'react-images-upload';
import { GrDocumentPdf } from 'react-icons/gr'

import { FaImage } from 'react-icons/fa';
const Payment = () => {
    const [selectedValue, setSelectedValue] = useState("cheque")
    const [picture, setPicture] = useState([])

    const handleChange = useCallback(
        (e) => {
            setSelectedValue(e.value);
        },
        [setSelectedValue]
    );
    const onDrop = (pictureFiles, pictureDataURLs) => {
        setPicture(pictureFiles)
    }
    return (
        <>
        <div style={{padding:'20px',border:'1px soild black'}}>

       
            <div> 
                <label className='col-8' style={{ border: "1px solid black", paddingRight: "80px", backgroundColor: "purple", color: 'white' }}>Estimate - Valid from 1-1-2022  -  7 - 1-2022 </label>

                <label style={{ border: "1px solid black", float: "right" }}>Estimate No:1011 </label> </div>
            <div> <label className='col-9' style={{ border: "1px solid black", backgroundColor: "grey", color: "white" }}>Total Payable Amount</label>
                <label className='col-3' style={{ border: "1px solid black", paddingLeft: "30px" }}>Rs 19,500/-</label> </div>
            <div style={{ border: "1px solid black", width: "40%", backgroundColor: "purple", color: 'white', marginTop: "50px" }}>Payment Summary</div>
            <div style={{ border: "1px solid black", marginTop: "20px" }}><span >Full Payment</span>
                <span style={{ float: "right", borderLeft: '1px solid black', paddingLeft: "30px", marginRight: "20px" }}>Rs 19500/-</span>
            </div>

            <div style={{ border: '1px solid black', width: "30%", borderBottom: 'none', marginTop: "30px" }}>Full Payment via</div>


            <div style={{ border: "1px solid black" }}>

                <div className='row'>
                
                    <div className='col-10' style={{ marginTop: "15px" }}>

                        <RadioButton
                            style={{ marginLeft: "30px" }}
                            name="cheque"
                            value="cheque"
                            checked={selectedValue === "cheque"}
                            label="Cheque"
                            onChange={handleChange}
                        />
                    </div>
                    <div className='col-1' >

                        <ImageUploader

                            fileContainerStyle={{ width: 0, height: 0,marginLeft:30 }}
                            withIcon={false}
                            withLabel={false}

                            style={{ height: 0, width: 0 }}
                            buttonText={<FaImage />}
                            onChange={onDrop}
                        />
                    </div>
                </div>
                <div style={{ marginTop: "30px" }}>

                    <label className='col-4' style={{ marginLeft: "20px" }}>Cheque NO  :</label>

                    <label className='col-6' style={{ border: "1px solid black" }}>15555097575588836383</label>
                </div>

                <div>

                    <label className='col-4' style={{ marginLeft: "20px" }}>Bank  :</label>

                    <label className='col-6' style={{ border: "1px solid black" }}>ICICI</label>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <GrDocumentPdf style={{ marginTop: "6px" }} /> <p style={{ fontSize: 18, paddingLeft: "10px" }}>Print Payment Receipt</p>
            </div>
            <div style={{ border: '1px solid black', width: "30%", borderBottom: 'none', marginTop: "30px" }}>1st Payment via</div>


            <div style={{ border: "1px solid black" }}>

                <div className='row'>
                    
                    <div className='col-10' style={{ marginTop: "15px" }}>

                        <RadioButton
                            style={{ marginLeft: "30px" }}
                            name="cheque"
                            value="cheque"
                            checked={selectedValue === "cheque"}
                            label="Cheque"
                            onChange={handleChange}
                        />
                    </div>
                    <div className='col-1'  >

                        <ImageUploader

                            fileContainerStyle={{ height: 0 , width:0,marginLeft:30}}
                            withIcon={false}
                            withLabel={false}

                            style={{ height: 0, width: 0  }}
                            buttonText={<FaImage />}
                            onChange={onDrop}
                        />
                    </div>
                </div>
                <div style={{ marginTop: "30px" }}>

                    <label className='col-4' style={{ marginLeft: "20px" }}>Cheque NO  :</label>

                    <label className='col-6' style={{ border: "1px solid black" }}>15555097575588836383</label>
                </div>

                <div>

                    <label className='col-4' style={{ marginLeft: "20px" }}>Bank  :</label>

                    <label className='col-6' style={{ border: "1px solid black" }}>ICICI</label>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <GrDocumentPdf style={{ marginTop: "6px" }} /> <p style={{ fontSize: 18, paddingLeft: "10px" }}>Print Payment Receipt</p>
            </div>

            <div style={{ border: "1px solid black", marginTop: "20px" }}><span>2nd Payment</span>
                <span style={{ marginLeft: "350px", color: 'red' }}> DUE PAYMENT</span>
                <span style={{ float: "right", borderLeft: '1px solid black', paddingLeft: "30px", marginRight: "20px" }}>19500/-</span>
            </div>

            <div style={{ border: "1px solid black", marginTop: "20px" }}><span>3rd Payment</span>
                <span style={{ marginLeft: "350px", color: 'red' }}> DUE PAYMENT</span>
                <span style={{ float: "right", borderLeft: '1px solid black', paddingLeft: "30px", marginRight: "20px" }}>19500/-</span>
            </div>
            </div>
        </>

    )
}

export default Payment