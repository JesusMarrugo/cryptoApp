
/**
 * This method makes a request to an API using Fetch, 
 * 
 * @param {string} uri the url of the fetch request
 * @returns {Promise<Object>} if the request is ok it returns an object with the 
 * data and a variable error = false, if the request fails, 
 * it returns an object with the error and a variable error = true
 */
export const getData = async (uri:string) => {

   try{
        const resp = await fetch(uri)
        if (!resp.ok)
             Promise.reject(resp)    
        const data = await resp.json()
        return {data, error: false}
   }catch(e){
        return {e, error: true}
   }
      
}
