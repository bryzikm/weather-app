import { View } from 'react-native';

import { WeatherResponseSchema } from '..';
import InlineInfoText from '../../shared/InlineInfoText';

export interface CurrentCityInformationsProps
  extends Pick<WeatherResponseSchema, 'pressure' | 'humidity' | 'visibility' | 'windSpeedKmPerHour' | 'cloudiness'> {}

export default function CurrentCityInformations({
  pressure,
  humidity,
  visibility,
  cloudiness,
  windSpeedKmPerHour,
}: CurrentCityInformationsProps) {
  return (
    <View>
      <InlineInfoText label="Pressure" value={`${pressure} hPa`} />
      <InlineInfoText label="Humidity" value={`${humidity}%`} />
      <InlineInfoText label="Visibility" value={`${visibility}km`} />
      <InlineInfoText label="Wind speed" value={`${windSpeedKmPerHour} km/h`} />
      <InlineInfoText label="Cloudiness" value={`${cloudiness}%`} />
    </View>
  );
}
