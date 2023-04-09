import React,{useEffect, useState} from 'react'

const SpreadOpr = () => {
  const initalValue = { version: [], codelist: [], activities: [] };
  const [versionCodelist, setVersionCodelist] = useState(initalValue);
  
  let newvalues = { ...versionCodelist };
  
  newvalues.activities= ["trans","anota","define"]

  useEffect(()=>{
    console.log("a");
    setVersionCodelist(newvalues)
    
  },[])
  console.log(versionCodelist);
  return (
    <div>spreadOpr</div>
  )
}

export default SpreadOpr