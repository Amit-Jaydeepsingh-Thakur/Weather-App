import React from 'react';
import { Card, CardContent, CardHeader } from 'semantic-ui-react';

function Weather({ weatherData }) {
    return(
        <Card>
            <CardContent>
                <CardHeader>
                    {weatherData.name}
                </CardHeader>
                <p>Minimum Temperature : {weatherData.main.temp_min}</p>
                <p>Maximum Temperature : {weatherData.main.temp_max}</p>
                <p>Description : {weatherData.weather[0].description}</p>
            </CardContent>
        </Card>
    );
}

export default Weather;