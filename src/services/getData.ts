

export const getData = async (uri:string) => {

   try{
        const resp = await fetch(uri)
        if (!resp.ok)
             Promise.reject(resp)    
        const data = await resp.json()
        // console.log(data)
        return {data, error: false}
   }catch(e){
        return {e, error: true}
   }
      
}
