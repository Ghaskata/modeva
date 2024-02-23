export const fetchAllPro = async () => {
    const res = await fetch("https://dummyjson.com/products")
    const data = await res.json()
    // console.log(data)
    return data.products
}
export const fetchSinglePro = async (id: string) => {
    const res = await fetch(`https://dummyjson.com/products/${+id}`)
    const data = await res.json()
    console.log("fetchSinglePro >>> ", data)
    console.log("fetchSinglePro id>>> ", id)
    return data
}