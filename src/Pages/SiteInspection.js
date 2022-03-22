import { useCallback, useState } from "react";
import DamageAssessmentAccordian from "../Components/SiteAssessAccordian.js";
import './SiteInspection.css';
import { Switch } from "@progress/kendo-react-inputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import ImageUploader from 'react-images-upload';

import { FaImage } from 'react-icons/fa';
const SiteInspection = () => {

    const [count, setCount] = useState(1);
    const [picture, setPicture] = useState([])

    const [accordian, setAccordian] = useState([])

    const increment = () => {
        if (count < 4){
            setCount(count + 1);
        onClickWall()
        }
    }

    const decrement = () => {

        if (count >= 2) {
            setCount(count - 1);
            console.log(accordian)

        }
        accordian.splice(accordian.length - 1, 1)
    }

    const stopPointParams = [
        "Civil Work"
    ]

    const onDrop = (pictureFiles, pictureDataURLs) => {
        setPicture(pictureFiles)
    }

    const onClickWall = () => {
        setAccordian([
            ...accordian,
            <DamageAssessmentAccordian count={count} />
        ])
    }

    return (<>

        <h3>Progress Bar</h3>
        <br />

        <div className="site-inspection" style={{ border: "1px solid #f2f2f2", padding: "1rem", paddingBottom: "100px" }}>
            <div className="select-inputs" style={{ border: "1px solid #f2f2f2", padding: "1rem" }}>
                <div className="row align-items-center">
                    {/* 1st field */}
                    <div className="col-8">
                        <p className="p-2 mb-0">How walls to be painted</p>
                    </div>

                    <div className="col-4">
                        <div className="counter p-2 d-flex justify-content-center">
                            <button onClick={decrement} style={{ border: "none", background: "none" }}>-</button>
                            <div className="counts p-1">{count}</div>
                            <button onClick={increment} style={{ border: "none", background: "none" }}>+</button>
                        </div>
                    </div>
                    {/* 2nd Line */}

                    <div className="col-8">
                        <p className="p-2 mb-0">Do you want the ceiling to be painted ?</p>
                    </div>

                    <div className="col-4 d-flex justify-content-center">
                        <><Switch onLabel={"Yes"} offLabel={"No"} /></>
                    </div>

                    {/* 3rd line */}
                    <div className="col-8">
                        <p className="p-2 mb-0">Do you want the Floor to be grouted ?</p>
                    </div>

                    <div className="col-4 d-flex justify-content-center">
                        <><Switch onLabel={"Yes"} offLabel={"No"} /></>
                    </div>

                    {/* 4th line */}
                    <div className="col-8">
                        <p className="p-2 mb-0">Critical Stop Point</p>
                    </div>

                    <div className="col-4 d-flex justify-content-center">
                        <div>
                            <DropDownList
                                style={{
                                    width: "100%",
                                    marginLeft: "1rem"
                                }}
                                data={stopPointParams}
                                defaultValue="Civil work"
                            />
                        </div>
                    </div>

                    {/* 5th line */}
                    <div className="col-8">
                        <p className="p-2 mb-0">Add Picture</p>
                    </div>

                    <div className="col-4 d-flex justify-content-center">
                        <ImageUploader

                            fileContainerStyle={{ height: 0, width: 0, marginTop: -20 }}
                            withIcon={false}
                            withLabel={false}

                            style={{ height: 0, width: 0 }}
                            buttonText={<FaImage />}
                            onChange={onDrop}
                        />
                    </div>

                    {/* 6th line */}
                    <div className="col-8">
                        <p className="p-2 mb-0">Do you need any Special Treatment ?</p>
                    </div>

                    <div className="col-4 d-flex justify-content-center">
                        <><Switch onLabel={"Yes"} offLabel={"No"} /></>
                    </div>

                </div>
            </div>

            <DamageAssessmentAccordian count={0} />
            {accordian.map((data) => {
                return (
                    data
                )

            })}

        </div>

    </>);
}

export default SiteInspection;