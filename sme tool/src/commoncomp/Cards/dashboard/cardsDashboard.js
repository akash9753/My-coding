import React from 'react'
import "./cardsDashboard.css";
const CardsDashboard = ({category}) => {
  return (
    <div className="col-lg-2 col-md-4 col-sm-12 col-xs-12 main">
      <div className="card order-card one">
        <div className="card-block">
          <h6 className="text-left">{category.count}</h6>
          <h2 className="text-right">
            <span>{category.assign_projects_count}</span>
          </h2>
          <div className="clear"></div>
          <h6 className="title">{category.name}</h6>
          <p className="m-b-0 project-content">
            Assigned to Projects
          </p>
        </div>
      </div>
    </div>
  )
}
export default CardsDashboard;