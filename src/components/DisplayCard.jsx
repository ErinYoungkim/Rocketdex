import React, {useState, useEffect} from "react";
import {Loading} from '../components/Loading.jsx'

export const DisplayCard = (props) => {
  const { searchResult } = props;
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
        searchResult && (
          <div>
            <img src={searchResult.imageUrl} alt={searchResult.name} />
          </div>
        )
      )}
    </div>
  );
}
