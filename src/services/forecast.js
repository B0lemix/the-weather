
export async function getForecastFrom(query='Granada'){

    const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${query}&days=5`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0460a06532msh99891ef981e5894p172a10jsnce49d5d2277e',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    
    
    const response = await fetch(url, options)
    const data = await response.json()
      
        const {forecast}=data;
        const {forecastday}=forecast

    
            return forecastday
    
        
};
        
    
    