import * as React from 'react';
import axios from "axios";

export interface IAppProps {
}

export default function Flight (props: IAppProps) {



      axios.request({
        method: 'GET',
        url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/',
        params: {query: 'Stockholm'},
        headers: {
          'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
          'x-rapidapi-key': '9bde27f6bamsh556fe86361ddf75p15dc0cjsnedc1d43b31a3'
        }
      }).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
  return (
    <div>
      Flight
    </div>
  );
}




