export const getResidentsList = async () => {
    const data = await fetch("http://localhost:3000/residents")
    return await data.json()
}

export const getCitiesList = async () => {
    const data = await fetch("http://localhost:3000/cities");
    return await data.json()
}
