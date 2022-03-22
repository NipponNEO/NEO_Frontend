import * as React from "react";
import {
  ListBox,
  processListBoxDragAndDrop,
} from "@progress/kendo-react-listbox";
import SelectedRooms from "../Pages/SelectedRooms.json";

const PreferenceDragAndDrop = () => {
  const [state, setState] = React.useState({
    notDiscontinued: SelectedRooms.filter((product) => !product.Discontinued),
    discontinued: SelectedRooms.filter((product) => product.Discontinued),
    draggedItem: {},
  });

  const handleDragStart = (e) => {
    setState({ ...state, draggedItem: e.dataItem });
  };

  const handleDrop = (e) => {
    let result = processListBoxDragAndDrop(
      state.notDiscontinued,
      state.discontinued,
      state.draggedItem,
      e.dataItem,
      "ProductID"
    );
    setState({
      ...state,
      notDiscontinued: result.listBoxOneData,
      discontinued: result.listBoxTwoData,
    });
  };

  return (
    <div className="example p-0 d-flex justify-content-center">
      <div className="demo-section k-content wide">
        <div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <img
                        src="https://demos.telerik.com/kendo-ui/content/web/listbox/arrow-left2right.png"
                        alt="drag-indicator"
                        className="arrow"
                    />
                </div>

                <div className="col-6 d-flex justify-content-center">
                    <ListBox
                        data={state.notDiscontinued}
                        textField="ProductName"
                        onDragStart={handleDragStart}
                        onDrop={handleDrop}
                    />
                </div>

                <div className="col-6 d-flex justify-content-center">
                    <ListBox
                        data={state.discontinued}
                        textField="ProductName"
                        onDragStart={handleDragStart}
                        onDrop={handleDrop}
                    />
                </div>

            </div>
        </div>
    </div>
      <style>
      {`    
            .example .demo-section {
                max-width: none;
                width: 38rem;
            }
            .example .k-listbox {
                width: 16rem;
                height: 24rem;
            }`}
    </style>
    </div>

    
  );
};

export default PreferenceDragAndDrop;
