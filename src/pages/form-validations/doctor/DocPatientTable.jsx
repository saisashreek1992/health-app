import React, { useEffect } from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";
import { PatientInfo, PatientGrid } from "../../../Data/Data_Info";
import { updateSampleSection } from "../../shared/SampleBase";

const DocPatientTable = () => {
  useEffect(() => {
    updateSampleSection();
  });

  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ["Delete"];
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <>
      <>
        <div className="py-16 bg-white rounded-3xl">
          <GridComponent
            dataSource={PatientInfo}
            enableHover={false}
            allowPaging
            pageSettings={{ pageCount: 10 }}
            selectionSettings={selectionsettings}
            toolbar={toolbarOptions}
            editSettings={editing}
            allowSorting
          >
            <ColumnsDirective>
              {PatientGrid.map((item, index) => (
                <ColumnDirective key={index} {...item} />
              ))}
            </ColumnsDirective>
            <Inject services={[Page, Selection, Edit, Toolbar, Sort, Filter]} />
          </GridComponent>
        </div>
      </>
    </>
  );
};

export default DocPatientTable;
