import { Typography } from '@progress/kendo-react-common';
import './Preference.css';
import { DatePicker } from "@progress/kendo-react-dateinputs";
import PreferenceDragAndDrop from '../Components/PreferenceDragAndDrop.js';
import {MdRoomPreferences} from 'react-icons/md';
import { Checkbox } from "@progress/kendo-react-inputs";
import { useState } from 'react';

const LeadPreference = () => {

    const today = new Date();
    const indianFormat = "dd/MMM/yyyy";
    const [interiorCheck, setInteriorCheck] = useState(false)
    const [exteriorCheck, setExteriorCheck] = useState(false)
    const [bothCheck, setBothCheck] = useState(false)

    const [allRoomsTogether, setAllRoomsTogether] = useState(false);
    const [twoRoomsTogether, setTwoRoomsTogether] = useState(false);
    const [oneRoom, setOneRoom] = useState(false);

    const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));

    return ( <>
        <div className="background">
            <h2 style={{height: "20vh"}}>Progress bar</h2>
                <Typography.h4 textAlign='center'>Preference <MdRoomPreferences /></Typography.h4>

            <form onSubmit={handleSubmit}>
                <div className="con-tainer">
                    <div className="row datepicker">
                        <div className="col-6 d-flex justify-content-center">
                            <DatePicker 
                                defaultValue={today}
                                format={indianFormat}
                                label="Start Date"
                            />
                        </div>

                        <div className="col-6 d-flex justify-content-center">
                            <DatePicker 
                                format={indianFormat}
                                label="End Date"
                                required={true}
                            />
                        </div>
                    </div>

                    <div className="preference">
                        <div className="row section-one">
                            <div className="col-4 d-flex justify-content-center">
                                <Checkbox
                                    value={interiorCheck}
                                    name="Interior First"
                                    onClick={() => {
                                        setInteriorCheck(!interiorCheck);
                                        setExteriorCheck(false);
                                        setBothCheck(false);
                                    }}
                                    label={"Interior First"} />
                            </div>
                            <div className="col-4 d-flex justify-content-center">
                                <Checkbox 
                                    value={exteriorCheck}
                                    name="Exterior First"
                                    onClick={() => {
                                        setInteriorCheck(false);
                                        setExteriorCheck(!exteriorCheck);
                                        setBothCheck(false);
                                    }}
                                    label={"Exterior First"} />
                            </div>
                            <div className="col-4 d-flex justify-content-center">
                                <Checkbox 
                                    value={bothCheck}
                                    name="Both Together"
                                    onClick={() => {
                                        setInteriorCheck(false);
                                        setExteriorCheck(false);
                                        setBothCheck(!bothCheck);
                                    }}
                                    label={"Both Together"} />
                            </div>
                        </div>

                            <Typography.h5 className='m-0 mt-3' textAlign='center'>Order of Rooms to be fnished</Typography.h5>
    
                        <div className="row section-two m-0 mt-3 mb-3">
                            <PreferenceDragAndDrop />
                        </div>

                        <div className="row section-three">
                            <div className="col-4 d-flex justify-content-center">
                                <Checkbox
                                    value={allRoomsTogether}
                                    name="All Rooms together"
                                    onClick={() => {
                                        setAllRoomsTogether(!allRoomsTogether);
                                        setTwoRoomsTogether(false);
                                        setOneRoom(false);
                                    }}
                                    label={"All Rooms together"} />
                            </div>
                            <div className="col-4 d-flex justify-content-center">
                                <Checkbox 
                                    value={twoRoomsTogether}
                                    name="2 Rooms together"
                                    onClick={() => {
                                        setAllRoomsTogether(false);
                                        setTwoRoomsTogether(!twoRoomsTogether);
                                        setOneRoom(false);
                                    }}
                                    label={"2 Rooms together"} />
                            </div>
                            <div className="col-4 d-flex justify-content-center">
                                <Checkbox 
                                    value={oneRoom}
                                    name="1 Room at a time"
                                    onClick={() => {
                                        setAllRoomsTogether(false);
                                        setTwoRoomsTogether(false);
                                        setOneRoom(!oneRoom);
                                    }}
                                    label={"1 Room at a time"} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* <button type='submit'>Generate work Order</button> */}
                <div className="navigation row">
                    <div className="col-6 d-flex justify-content-start">
                        <button>back</button>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <button type='sumbit'>Generate work Order</button>
                    </div>
                </div>
            </form>
        </div>
    </> );
}

export default LeadPreference;