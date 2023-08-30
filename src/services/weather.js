
export async function getWeatherFrom(query='Granada'){

    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0460a06532msh99891ef981e5894p172a10jsnce49d5d2277e',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    
    
    const response = await fetch(url, options)
    const data = await response.json()
      
        const {location,current}=data;
        const {country,localtime,name}=location
        const{
            condition,
            humidity,
            feelslike_c,
            is_day,
            temp_c,
            wind_kph,wind_dir,precip_mm}=current
    const { code, text,icon}=condition
    
            return{
                conditionCode:code,
                conditionText: text,
                conditionIcon:icon,
                country,
                localtime,
                name,
                humidity,
                isDay:is_day,
                feelsLike:feelslike_c,
                temperature:temp_c,
                windSpeed:wind_kph,
                windDir: wind_dir,
                rain: precip_mm,
    
            }
};
        
    
    