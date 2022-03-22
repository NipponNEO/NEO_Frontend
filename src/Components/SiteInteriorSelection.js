import '../Pages/SiteSummary.css';
import { Typography } from "@progress/kendo-react-common";
import { useState, useEffect } from 'react';
import { displayLeadSelection } from '../Redux/Actions/LeadsAction';
import { useDispatch } from 'react-redux';


import { isValidElement } from './../Utlis/Helper';



const SiteInteriorSelection = ({id,icon,label,showValue,setShowValue,showValueSiteInterior}) => {






    const [count, setCount] = useState(0);
    const [trigger, setTrigger] = useState(true);
    const [triggerNext, setTriggerNext] = useState(false);






    const addButton = () => {


        var Values = [id, icon, label]
        if (isValidElement(Values)) {
            showValueSiteInterior(Values)
        }
        if (count === 0) {
            setTrigger(!trigger);
            setTriggerNext(!triggerNext);
        }

    }


    const increment = () => {
        if (count < 4)
            setCount(count + 1);


    }



    const decrement = () => {
        var Values = [id, icon, label]

        if (isValidElement(Values)) {


            var index = showValue.findIndex((data) => data.id === id)


            if (count === 0) {
                // showValue.splice(index, 1)

                index < 0 ? setShowValue(showValue) : setShowValue(showValue.filter((data) => data.id !== id))
            }


        }
        if (count > 0) {
            setCount(count - 1);


        }

        else {
            setTrigger(!trigger);
            setTriggerNext(!triggerNext);

        }
    }


    return (

        <>

            <div className="col-4 mt-3 mb-3" key={id}>
                <div className="template-container">

                    <div className="sub-button">
                        {
                            triggerNext ? <button onClick={decrement}>-</button> : null
                        }
                    </div>

                    <div className="display">
                        <div className="display-body">
                            <div>
                                {icon}
                            </div>

                            <div>
                                <span>{label}</span>
                            </div>

                            {triggerNext ? <Typography.p className="mb-1"> {count + 1}</Typography.p> : null}

                        </div>

                        <div className="display-addButton">
                            {
                                trigger ? <button onClick={addButton}>Add</button> : null
                            }
                        </div>
                    </div>

                    <div className="add-button">
                        {
                            triggerNext ? <button onClick={increment} >+</button> : null
                        }
                    </div>

                </div>
            </div>
        </>
    );
}

export default SiteInteriorSelection;