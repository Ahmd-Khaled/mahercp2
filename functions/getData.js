export const getData = async (url, type) => {
    const res = await fetch(url, {
        headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            allow_headers: ["Content-Type","Authorization","language","api_password"],
            "Accept-Language": "*",
            lang: "ar",
          },
        cache: type,
    })

   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}


  export const getDataClient = async (url) => {
    // e.preventDefault();
    let res;
    try {
      res = await fetch(url, {
        method: "GET",
        headers: {
          'Accept': '*/*',
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*',
          'allow_headers': ['Content-Type', 'Authorization', 'language', 'api_password'],
          'Accept-Language': '*',
          'lang': "ar",
        },
      });
      console.log(res);
      if (res.ok) {
        console.log("Success!");
      } else {
        console.log("Oops! Something is wrong.");
      }
    } catch (error) {
      console.log(error);
    }
  
    return res.json();
  };