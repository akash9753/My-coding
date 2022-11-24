import React from 'react'
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../../Pages/Dashboard/dashboard.css"
const TableDashboard = ({title, columns, data, loading, viewall,tabIndex}) => {
    const navigate = useNavigate();
    
    
    let getList = (item, smeOverview,vendorOverview,smeProj) => {
       
        let param = '';
        if(smeOverview === 'Profession') {
            param = `prof=${item.profession}`
        }

        // if(vendorOverview == 'Primary Discipline'){
        //     param =`service=${item.p_discipline}`
        // }
        
        switch(smeOverview) {
            case '': param = ``; break;
            case 'Expertise': param = `ex=${item.id}`; break;
            case 'Profession': param = `prof=${item.profession}`; break;
            case 'Primary Discipline': param = `pd=${item.id}`; break;
            case 'Location': param = `loc=${item.id}`; break;
            default: break;
        }
       

       
        
        switch(vendorOverview) {
            case '': param = ``; break;
            case 'Service Offering': param = `ser=${item.id}`; break;
             case 'Primary Discipline': param = `pd=${item.p_discipline}`; break;
            case 'Location': param = `loc=${item.city}`; break;
            default: break;
        }
        
      
       
    if(tabIndex == 1 ){
        navigate(`/administrator/candidateList?${param}`);
 
    }
    if(tabIndex == 2 ){
        navigate(`/administrator/companyList?${param}`);
      
    }
      };
      let  getProject = (item,smeProj,vendorProj) => {
        let param = '';
        if(smeProj === 'Primary Discipline') {
            param = `pd=${item.p_discipline}`
        }
        if(vendorProj === 'Primary Discipline') {
            param = `pd=${item.p_discipline}`
        }

        switch(smeProj) {
            case '': param = ``; break;
            case 'Expertise': param = `ex=${item.id}&proj=true`; break;
            case 'Profession': param = `prof=${item.profession}&proj=true`; break;
            case 'Primary Discipline': param = `pd=${item.id}&proj=true`; break;
            case 'Location': param = `loc=${item.id}&proj=true`; break;
            default: break;
        
        }
         
        switch(vendorProj) {
             case '': param = ``; break;
             case 'Service Offering': param = `ser=${item.id}&proj=true`; break;
             case 'Primary Discipline': param = `pd=${item.p_discipline}&proj=true`; break;
             case 'Location': param = `loc=${item.city}&proj=true`; break;
             default: break;
             
        }
      
        if(tabIndex == 1 ){
            navigate(`/administrator/candidateList?${param}`);
     
        }
        if(tabIndex == 2 ){
            navigate(`/administrator/companyList?${param}`);
        
        }
        
      }
     
    let populateTable = (tblData) => {

        if(title === 'Expertise' && tabIndex == 1) {
            return tblData?.map((item, index) => (
                <tr id={item.id} key={index}>
                    <td>{item.experties_name}</td>
                    <td className='anchor' onClick={() => getList(item, 'Expertise', 'smeOverview')}>{item.total_cand}</td>
                    <td className='anchor' onClick={() => getProject(item, 'Expertise', 'smeProj')}>{item.projects_assaigned}</td>
                </tr>
            ))
        }
        if(title === 'Profession' && tabIndex == 1) {
           
            return tblData?.map((item, index) => (
                <tr id={item.id} key={index}>
                    <td>{item.profession}</td>
                    <td className='anchor' onClick={() => getList(item, 'Profession', 'smeOverview')} >{item.total_cand}</td>
                    <td className='anchor' onClick={() => getProject(item, 'Profession', 'smeProj')}>{item.projects_assaigned}</td>
                </tr>
            ))
        }
        if(title === 'Primary Discipline') {
            if(tabIndex == 1){
            return tblData?.map((item, index) => (
                <tr id={item.id} key={index}>
                    <td>{item.p_discipline}</td>
                    <td className='anchor' onClick={() => getList(item, 'Primary Discipline', 'smeOverview')} >{item.total_cand}</td>
                    <td className='anchor' onClick={() => getProject(item, 'Primary Discipline', 'smeProj')}>{item.projects_assaigned}</td>
                </tr>
            ))
            }
        }
        if(title === 'Location') {
            if(tabIndex == 1){
            return tblData?.map((item, index) => (
                <tr id={item.id} key={index}>
                    <td>{item.country}</td>
                    <td className='anchor' onClick={() => getList(item, 'Location', 'smeOverview')} >{item.total_cand}</td>
                    <td className='anchor' onClick={() => getProject(item, 'Location', 'smeProj')}>{item.projects_assaigned}</td>
                </tr>
            ))
            }
            if(tabIndex == 2){
                return tblData?.map((item, index) => (
                    <tr id={item.id} key={index}>
                        <td>{item.city}</td>
                        <td className='anchor' onClick={() => getList(item, 'vendorOverview', 'Location')} >{item.total_vendors}</td>
                        <td className='anchor' onClick={() => getProject(item, 'vendorProj', 'Location')}>{item.projects_assaigned}</td>
                    </tr>
                ))
            }
        }
        if(title === 'Primary Discipline' && tabIndex == 2 ) {
            return tblData?.map((item, index) => (
                <tr id={item.id} key={index}>
                    <td>{item.p_discipline}</td>
                    <td className='anchor' onClick={() => getList(item, '', 'Primary Discipline')} >{item.total_vendors}</td>
                    <td className='anchor' onClick={() => getProject(item, 'vendorProj', 'Primary Discipline')}>{item.projects_assaigned}</td>
                </tr>
            ))
         
        }
        if(title === 'Service Offering' && tabIndex == 2) {
            return tblData?.map((item, index) => (
                <tr id={item.id} key={index}>
                    <td>{item.service_name}</td>
                    <td className='anchor' onClick={() => getList(item, '', 'Service Offering')} >{item.total_vendor}</td>
                    <td className='anchor' onClick={() => getProject(item, '','Service Offering')}>{item.projects_assaigned}</td>
                </tr> 
            ))
        }
        
    }
  return (
    <div className="col-md-6 col-xl-6 col-sm-12">
        <div className="table-style">
            <h4 className="table-title">{title}</h4>
            <span className="view-more-link">
            <a href={viewall} className="view-more-link-1">View more</a>
            </span>
            <div className="clear"></div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        {columns?.map((column, index) => (<th key={index}>{column}</th>))}
                    </tr>
                </thead>

                <tbody>
                    {loading ? (
                    <tr>
                        <td colspan="3">
                            <div className="text-primary loading-data" role="status">
                                <span>Loading...</span>
                            </div>
                        </td>
                    </tr>
                    ) : (
                        populateTable(data)
                    )}
                </tbody>
            </Table>
        </div>
        </div>
  )
}

export default TableDashboard