import { Typography } from "@progress/kendo-react-common";
import { Checkbox } from "@progress/kendo-react-inputs";
import { NumericTextBox } from "@progress/kendo-react-inputs";
import SiteInteriorSelection from "../Components/SiteInteriorSelection";
import { GiBed, GiSofa, GiBathtub, GiBookshelf, GiCookingPot, Gi3DStairs } from 'react-icons/gi';
import { MdLocalDining, MdInventory } from 'react-icons/md';
import { BsTools } from 'react-icons/bs';
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { isValidElement } from './../Utlis/Helper';


const SiteSummaryHL = () => {


    


    const [templates, setTemplates] = useState([
        { id: 1, label: "Bed Room", icon: < GiBed /> },
        { id: 2, label: "Dining Room", icon: <MdLocalDining /> },
        { id: 3, label: "Living Room", icon: <GiSofa /> },
        { id: 4, label: "Bath Room", icon: <GiBathtub /> },
        { id: 5, label: "Study Room", icon: <GiBookshelf /> },
        { id: 6, label: "Kitchen", icon: <GiCookingPot /> },
        { id: 7, label: "Service Area", icon: <BsTools /> },
        { id: 8, label: "Stair Case", icon: <Gi3DStairs /> },
        { id: 9, label: "Utility Room", icon: <MdInventory /> }
    ])

    const [showValue, setShowValue] = useState([])

   


      const showValueSiteInterior = (data)=>{
        if (isValidElement(data[0])) {
            for (let i = 0; i < templates.length; i++) {
                if (templates[i].id === data[0]) {

                    setShowValue([...showValue, templates[i]])
                }
            }
        }
      }


    return (
        <>
            <div className="summary-h1">
                <div className="interior-or-exterior">
                    <Typography.h5 textAlign="center" fontWeight="light" className="mb-0">Site Summary</Typography.h5>

                    <div className="row justify-content-center align-items-center" style={{ height: "3rem", fontSize: "0.9rem" }}>
                        <div className="col-4 text-center" >
                            Initial Requirement
                        </div>
                        <div className="col-4 text-center">
                            <Checkbox label={"Interior"} />
                        </div>
                        <div className="col-4 text-center">
                            Rooms : <NumericTextBox width={100} min={1} max={20} />
                        </div>
                    </div>
                </div>

            </div>


            <div className="site-summary">

                <div className="card-outline">

                    <Typography.h6 style={{ display: "flex" }} fontWeight="light" className="mt-1 mb-0">Select rooms to be painted {showValue.map((data) => {
                        console.log(data.icon)
                        return (
                            [data.icon, data.label]
                        )
                    })} </Typography.h6>
                    <div className="row mb-3 mt-1" >
                        {templates.map((data) => {
                            return (
                                <SiteInteriorSelection label={data.label} icon={data.icon} id={data.id} setShowValue={setShowValue} showValue={showValue} showValueSiteInterior={showValueSiteInterior} />
                            )
                        })}


                    </div>
                </div>

                <div className="submit">
                    <button>Next</button>
                </div>
            </div>

        </>

    );
}


export default SiteSummaryHL;