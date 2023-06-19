import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Edit, Toolbar } from '@syncfusion/ej2-react-grids';
import { CascadeData } from './CascadeData';

function NormalEdit() {
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, newRowPosition: 'Top' };
    const editparams = { params: { popupHeight: '300px' } };
    const validationRule = { required: true };
    const orderidRules = { required: true, number: true };
    const pageSettings = { pageCount: 5 };
    const format = { type: 'dateTime', format: 'M/d/y hh:mm a' };
    let gridInstance;

    function actionBegin(args) {
      console.log(args);
        
    }
    
    return (<div className='control-pane' style={{marginTop:"70px"}}>
      <div className='control-section'>
        <div className='col-md-9'>
          <GridComponent dataSource={CascadeData} allowPaging={true} editSettings={editSettings} pageSettings={pageSettings} actionBegin={actionBegin.bind(this)}>
            <ColumnsDirective>
              <ColumnDirective field='OrderID' headerText='Order ID' width='140' textAlign='Right' validationRules={orderidRules} isPrimaryKey={true}></ColumnDirective>
              <ColumnDirective field='CustomerName' headerText='Customer Name' width='150' validationRules={validationRule}></ColumnDirective>
              <ColumnDirective field='Freight' headerText='Freight' width='140' format='C2' textAlign='Right' editType='numericedit'></ColumnDirective>
              <ColumnDirective field='OrderDate' headerText='Order Date' editType='datetimepickeredit' format={format} width='160'></ColumnDirective>
              <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit' edit={editparams}></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[Page, Edit]}/>
          </GridComponent>
        </div>

        
      </div>
    </div>);
}
export default NormalEdit;