let key = '72bbe717bd8045c796c170208220202'
// https://api.weatherapi.com/v1/current.json?key=72bbe717bd8045c796c170208220202&q=London&aqi=no
const getData = async (city) => {
    let api = "https://api.weatherapi.com/v1/current.json"
    let base = `?key=${key}&q=${city}&aqi=no`
    const request = await fetch(api + base)
    const data = await request.json()
    return data
}
