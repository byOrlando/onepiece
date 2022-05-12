import { defHttp } from '/@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import { WeatherData } from './model/wether';
enum Api {
  weather = '/getWeather',
}

export function getWeather(mode: ErrorMessageMode = 'none') {
  return defHttp.get<WeatherData>({ url: Api.weather }, { errorMessageMode: mode });
}
