export const useHelpers = () => {
  const tooltip = (id:number, cities:any) => {
    const city = cities.find((city: any) => city.id === id)

    if (!city) return 'неверный id города'
    
    return `${city.id} ${city.name}, ${city.data} жителей`
  }

  return {
    tooltip
  }
}
