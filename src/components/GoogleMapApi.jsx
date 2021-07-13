import React from 'react'
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps'


function Map (){
  return(
<GoogleMap
 defaultZoom={10} 
 defaultCenter={{lat:6.4754, lng:3.7194 }}
 />
  )
}

 const WrappedMap = withScriptjs(withGoogleMap(Map))
 
 export const GoogleMapApi = (props) => {
  return (
   <div style={{width: '100vw', height:'80vh'}}>
     <WrappedMap
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY="AIzaSyB9tpb3AqswiBweV_1Fd1yUXD6mU3mJspk" }`}
     loadingElement={<div style={{ height: "100%" }} />}
     containerElement={<div style={{ height: "400px" }} />}
     mapElement={<div style={{ height: "100%" }} />}

     />
     </div>
  
     )
    }


