import * as React from 'react';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from '@syncfusion/ej2-react-grids';
import { orderDetails } from './data';

const RightClickPopup = () => {
    
    const contextMenuItems = [
      
      'Copy',
      'Edit',
      'Delete',
      'Save',
      'Cancel',
      
    ];
    const editing = { allowDeleting: true, allowEditing: true };

  return  (
    <div className="control-pane">
      <div className="control-section">
        <GridComponent
          id="gridcomp"
          dataSource={orderDetails}
          allowPaging={true}
          allowSorting={true}
          contextMenuItems={contextMenuItems}
          editSettings={editing}
        >
          <ColumnsDirective>
            <ColumnDirective
              field="OrderID"
              headerText="Order ID"
              width="120"
              textAlign="Right"
              isPrimaryKey={true}
            ></ColumnDirective>
            <ColumnDirective
              field="CustomerName"
              headerText="Customer Name"
            ></ColumnDirective>
            <ColumnDirective
              field="Freight"
              headerText="Freight"
              format="C2"
              textAlign="Right"
              editType="numericedit"
            />
            <ColumnDirective
              field="ShipName"
              headerText="Ship Name"
              width="200"
            ></ColumnDirective>
            <ColumnDirective
              field="ShipCountry"
              headerText="Ship Country"
              width="150"
              editType="dropdownedit"
            ></ColumnDirective>
            <ColumnDirective
              field="ShipCity"
              headerText="Ship City"
              width="150"
            ></ColumnDirective>
          </ColumnsDirective>
          <Inject
            services={[
              Resize,
              Sort,
              ContextMenu,
              Filter,
              Page,
              ExcelExport,
              Edit,
              PdfExport,
            ]}
          />
        </GridComponent>
      </div>
    </div>
  );
}


export default RightClickPopup