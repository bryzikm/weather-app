import { Fragment, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Divider, List, Text } from 'react-native-paper';

import CurrentCity from './components/CurrentCity';
import CurrentCityInformations from './components/CurrentCityInformations';
import EmptySearchHistory from './components/EmptySearchHistory';
import { useRequest } from '../hooks/useRequest';
import InputText from '../shared/InputText';

export interface WeatherResponseTemperature {
  temperature: number;
  sensedTemperature: number;
  minTemperature: number;
  maxTemperature: number;
}

export interface WeatherResponseSchema {
  celcius: WeatherResponseTemperature;
  fahrenheit: WeatherResponseTemperature;
  cityName: string;
  description: string;
  pressure: number;
  humidity: number;
  visibility: number;
  windSpeedKmPerHour: number;
  cloudiness: number;
}

const styles = StyleSheet.create({
  container: {
    minWidth: '100%',
    minHeight: '100%',
    marginTop: 16,
  },
  inputContainer: {
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 16,
  },
  contentContainer: {
    marginTop: 16,
    marginRight: 16,
    marginLeft: 16,
    marginBottom: 16,
  },
  dividerStyles: {
    marginTop: 32,
    marginBottom: 32,
  },
});

export default function WeatherInformation() {
  const [weatherInformations, setWeatherInformations] = useState<WeatherResponseSchema[]>([]);
  const [cityName, setCityName] = useState('');
  const [expanded, setExpanded] = useState<string>('');

  const { request, renderErrorSnack } = useRequest();

  useEffect(
    function onChangeLocalizationFetchData() {
      const fetchData = async () => {
        try {
          const result = await request.get('/weather', {
            params: {
              query: encodeURIComponent(cityName),
            },
          });

          setWeatherInformations((prevState) => [{ ...result.data }, ...prevState]);
          setExpanded(result.data.cityName);
        } catch {}
      };

      if (cityName.length > 3 && !weatherInformations?.some((item) => item.cityName.toLowerCase() === cityName)) {
        fetchData();
      }
    },
    [cityName],
  );

  return (
    <>
      {renderErrorSnack()}
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <InputText onTextChange={(value) => setCityName(value)} />
        </View>
        {weatherInformations.length > 0 ? (
          <>
            {weatherInformations.map((item, itemIndex) => (
              <Fragment key={item.cityName}>
                <List.Accordion
                  title={
                    <Text variant="displaySmall">
                      {itemIndex + 1}. {item.cityName}
                    </Text>
                  }
                  right={() => null}
                  expanded={expanded === item.cityName}
                  onPress={() => setExpanded(item.cityName)}
                >
                  <View style={styles.contentContainer}>
                    <CurrentCity temperature={item.celcius.temperature} description={item.description} />
                    <Divider style={styles.dividerStyles} />
                    <CurrentCityInformations
                      pressure={item.pressure}
                      humidity={item.humidity}
                      cloudiness={item.cloudiness}
                      visibility={item.visibility}
                      windSpeedKmPerHour={item.windSpeedKmPerHour}
                    />
                  </View>
                </List.Accordion>
                {itemIndex + 1 < weatherInformations.length ? <Divider /> : null}
              </Fragment>
            ))}
          </>
        ) : (
          <EmptySearchHistory />
        )}
      </View>
    </>
  );
}
