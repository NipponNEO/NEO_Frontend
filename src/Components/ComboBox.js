import * as React from "react";
import {ComboBox} from "@progress/kendo-react-dropdowns";

  const Combo = () => {
    const sports = [
      "SMS",
      "Whats App",
      "Email",
      
    ];

    return (
        <div>
            <ComboBox
          style={{
            width: "300px",
          }}
          data={sports}
          defaultValue="SMS"
        />

        </div>
    )
}
export default Combo
