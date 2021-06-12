import { useEffect, useState  } from "react";


const useFet = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
  
    useEffect(() => {
        fetch(url,{method:"GET",headers:{
          'accept':'application/json',
          'Content-type':'application/json'
      },})
        .then(res => {
          if (!res.ok) { 
            // error coming back from server
            throw Error('could not fetch data for that resource, a problem occured');
          } 
          return res.json();
        })
        .then(data => {
          setLoading(false);
          setData(data);
          setError(null);
        })
        .catch(err => {
          // auto catches network / connection error
          setLoading(false);
          setError(err.message);
        })
    }, [url])
    //pareil au meme que state
    return { data, loading, error };
}
 
export default useFet;