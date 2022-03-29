const useFetch = async (query: string,token?:string) => {
  try {
    const result = await fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "token":token || ""
      },
      body: JSON.stringify({ query }),
      
    });

    if (!result.ok) throw Error("problem in fetch data");

    const data = await result.json();
    return data;
  } catch (error) {
    return error;
  }
};

export default useFetch;
