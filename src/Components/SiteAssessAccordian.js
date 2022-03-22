import { DropDownList } from "@progress/kendo-react-dropdowns";
import { IoUmbrella } from 'react-icons/io5';
import { GrAnchor } from 'react-icons/gr';
import DamageAssessment from "./DamageAssessment";
import ImageUploader from 'react-images-upload';
import { Switch } from "@progress/kendo-react-inputs";
import { useState } from 'react';

const DamageAssessmentAccordian = ({count}) => {

    const wallCategory = [
        "Alpha",
        "Beta",
        "Gamma",
        "Delta"
    ]

    const DamageParams = [
        { id: 1, label: "Hair Line Crack" },
        { id: 2, label: "Moisture Level" },
        { id: 3, label: "Efflorescence" },
        { id: 4, label: "Peeling of Paint" },
        { id: 5, label: "pH" },
        { id: 6, label: "Mold Agae" },
        { id: 7, label: "Hollowness" },
        { id: 8, label: "Dampness" },
        { id: 9, label: "Water Seepage" },
    ]

    const [showAccordian, setShowAccordian] = useState(false)


    return (<>
        <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item" style={{ borderRadius: "4px", border: "1px solid #e3e3e3" }}>
                <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed" type="button" onClick={()=>setShowAccordian(!showAccordian)} aria-expanded="false" aria-controls="flush-collapseOne">
                        Wall {count + 1}
                    </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse" aria-labelledby="flush-headingOne" >
                    {showAccordian ? <div className="accordion-body">
                        <div className="wall-assessment">
                            <div className="row align-items-center">
                                {/* 1st Row */}
                                <div className="col-6">
                                    <div className="wall-list">
                                        <div>Wall 1:</div>
                                        <div>
                                            <DropDownList
                                                style={{
                                                    width: "100%",
                                                    marginLeft: "1rem"
                                                }}
                                                data={wallCategory}
                                                defaultValue="Alpha"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <p>*******</p>
                                </div>
                                {/* 2nd Row */}

                                <div className="col-12 mb-0 measurement p-2">
                                    <h6 className="mb-0">Height:</h6>
                                    <input type="number" /><small>sq.ft</small>
                                    <h6 className="mb-0" style={{ marginLeft: "1rem" }}>Width:</h6>
                                    <input type="number" /><small>sq.ft</small>
                                </div>

                                {/* 3rdRow */}

                                <div className="col-8">
                                    <p className="p-2 mb-0">Do you want Water Proofing ? <IoUmbrella /></p>
                                </div>

                                <div className="col-4 d-flex justify-content-center">
                                    <><Switch onLabel={"Yes"} offLabel={"No"} /></>
                                </div>

                                <div className="col-8">
                                    <p className="p-2 mb-0">Do you have any Damages? <GrAnchor /></p>
                                </div>

                                <div className="col-4 d-flex justify-content-center">
                                    <><Switch onLabel={"Yes"} offLabel={"No"} /></>
                                </div>


                            </div>

                            <div className="row d-flex justify-content-center">
                                <DamageAssessment label={DamageParams[0].label} />
                                <DamageAssessment label={DamageParams[1].label} />
                                <DamageAssessment label={DamageParams[2].label} />
                                <DamageAssessment label={DamageParams[3].label} />
                                <DamageAssessment label={DamageParams[4].label} />
                                <DamageAssessment label={DamageParams[5].label} />
                                <DamageAssessment label={DamageParams[6].label} />
                                <DamageAssessment label={DamageParams[7].label} />
                                <DamageAssessment label={DamageParams[8].label} />
                            </div>
                        </div>
                    </div> : null}
                </div>
            </div>
        </div>
    </>
    );
}
export default DamageAssessmentAccordian;