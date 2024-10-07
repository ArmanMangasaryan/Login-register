export const UseRequests = () => {
    const get = async(url) => {
        const res = await fetch(url)
        return res.json()
    }

    const post = async(url, data) => {
        const result = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
        return result.json()
        
    }
    

    const puth = async (url, data) => {
        const result = await fetch(url, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
    
        return result.json();
      };

      return {get, post, puth}
}