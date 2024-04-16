import React, {useState, useEffect} from "react";
import {Loading} from '../components/Loading.jsx'

export const DisplayCard = ({searchResult}) => {
    
    //LOADING SCREEN
  const [loading, setLoading] = useState(false);

  //Will trigger loading on first render of the page.
  useEffect(() => {
    setLoading(true)
    // IF USING API, could use fetch here and when getting a response from the server would remove the loading.
    // For testing/demonstration purposes, manually setting a load time using setTimeout.
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

    return (
        <div className="blue-container">
            {loading ? (
              <Loading loading={loading}/>
            ) : (
            <>
             <h1>{searchResult}</h1>
            <img className="placeholder-img" src='https://placehold.co/600x400' alt='placeholder'/>
            </>
        )}
        </div>
    )
}
