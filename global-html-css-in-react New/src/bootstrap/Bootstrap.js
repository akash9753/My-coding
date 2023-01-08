import React from "react";

const Bootstrap = () => {
  return (
    <>
      {/* // <div className='container-fluid'>
        //     <div className='row'>
        //           <div className='col-md-4' style={{backgroundColor: "red", height:60}}> </div>
        //           <div className='col-md-4' style={{backgroundColor: "blue", height:60}}> </div>
        //           <div className='col-md-4' style={{backgroundColor: "green", height:60}}> </div>
                  
        //     </div>
        // </div> */}


      {/* <div className="container-fluid" style={{backgroundColor: "red", height:500}}>
           <div className="row" style={{backgroundColor: "cyan", height:100}}>
            <div className="col-lg-4 bg-primary text-white">col-4</div>
            <div className="col-lg-6 bg-secondary text-white">col-6</div>
            <div className="col-lg-2 bg-success text-white">col-2</div>
           </div>
      </div> */}


      {/* <div className="container-fluid" style={{backgroundColor: "red", height:500}}>
           <div className="row" style={{backgroundColor: "cyan", height:100}}>
            <div className="col-lg-4 col-xl-5 col-md-6 col-sm-8 col-6 bg-primary text-white">col-4</div>
            <div className="col-lg-6 col-xl-5 col-md-3 col-sm-4 col-6 bg-secondary text-white">col-6</div>
            <div className="col-lg-2 col-xl-2 col-md-3 col-sm-6 col-12 bg-success text-white">col-2</div>
           </div>
      </div> */}

      {/* <div className="container-fluid" style={{backgroundColor: "red", height:500}}>
        <div className="row" style={{backgroundColor: "cyan", height:100}}>
           <div className="col-lg-4" style={{backgroundColor: "blue"}}>col-lg-4</div>
           <div className="col-lg-8" style={{backgroundColor: "green"}}>
                  <div className="row" style={{ height:100}}>
                          <div className="col-lg-4 bg-success">col-lg-4</div>
                          <div className="col-lg-4 bg-primary">col-lg-4</div>
                          <div className="col-lg-4 bg-secondary">col-lg-4</div>
                  </div>
           </div>
        </div>
      </div> */}
      <h2>Flex box with bootstrap grid vertical alignment</h2>
      <div className="container-fluid">
        {/* <div className="row row-cols-auto"> */}
        {/* <div className="row" style={{backgroundColor: "red", height:500}}> */}
        {/* Flex Box term */}
        {/* <div className="row align-items-start" style={{backgroundColor: "red", height:500}}> */}
        {/* <div className="row align-items-end" style={{backgroundColor: "red", height:500}}> */}
        {/* <div className="row align-items-center" style={{backgroundColor: "red", height:500}}> */}
        <div className="row" style={{backgroundColor: "red", height:500}}>
            <div className="col bg-primary align-self-end">div1</div>
            <div className="col bg-secondary align-self-center"> div 2</div>
            <div className="col bg-success ">div 3</div>
            <div className="col bg-danger align-items-start">div 4</div>
        </div>
      </div>

      <h2>Flex box with bootstrap grid horizontal alignment</h2>
      <div className="container-fluid">
        {/* <div className="row" style={{backgroundColor: "orange", height:500}}> */}
        {/* <div className="row justify-content-start" style={{backgroundColor: "orange", height:500}}> */}
        {/* <div className="row justify-content-center" style={{backgroundColor: "orange", height:500}}> */}
        {/* <div className="row justify-content-end" style={{backgroundColor: "orange", height:200}}> */}
        {/* <div className="row justify-content-around" style={{backgroundColor: "orange", height:200}}> */}
        {/* <div className="row justify-content-between" style={{backgroundColor: "orange", height:200}}> */}
        <div className="row justify-content-evenly" style={{backgroundColor: "orange", height:200}}>
            <div className="col-4 bg-primary ">div1</div>
            <div className="col-4 bg-secondary "> div 2</div>
            
        </div>
      </div>

      <h2>Reordering</h2>
      <h2>Flex box with bootstrap grid horizontal alignment</h2>
      <div className="container-fluid">
        <div className="row" style={{backgroundColor: "orange", height:200}}>
            <div className="col-4 order-lg-2 order-md-2 bg-primary text-white">div1</div>
            <div className="col-4 order-lg-3 order-md-1 bg-secondary text-white"> div 2</div>
            <div className="col-4 order-lg-1 order-md-3 bg-success text-white"> div 3</div>
        </div>
      </div>

      <h2>Offset</h2>

      <div className="container-fluid">
        <div className="row" style={{backgroundColor: "orange", height:200}}>
            {/* <div className="col-4 offset-1 bg-primary text-white">div1</div> */}
            {/* <div className="col-4 offset-lg-1 bg-primary text-white">div1</div> */}
            <div className="col-4 offset-1 offset-lg-1 offset-md-2 bg-primary text-white">div1</div>
            <div className="col-4 offset-2 bg-secondary text-white"> div 2</div>
        </div>
      </div>

      <h1>d-flex flex-column flex-row</h1>
      <div className="container-fluid">
        <div className="row d-flex flex-column justify-content-center align-items-center" style={{backgroundColor: "orange", height:200}}>
        {/* <div className="row d-flex flex-row-reverse" style={{backgroundColor: "orange", height:200}}> */}
        {/* <div className="row d-flex flex-column" style={{backgroundColor: "orange", height:200}}> */}
        {/* <div className="row d-flex flex-column-reverse" style={{backgroundColor: "orange", height:200}}> */}
        
            <div className="col-lg-4 bg-primary text-white ">div1
            <img src="media/logo.png" alt="" />
            </div>
            <div className="col-lg-4 bg-secondary text-white ">div 2</div>
        </div>
      </div>
    </>
  );
};

export default Bootstrap;
