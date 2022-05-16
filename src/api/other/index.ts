import { defHttp } from '/@/utils/http/axios';
import { ErrorMessageMode } from '/#/axios';
import { WeatherData } from './model/wether';
enum Api {
  weather = '/getWeather',
  ipAddress = '/getIpAddress',
}

export function getWeather(mode: ErrorMessageMode = 'none') {
  return defHttp.get<WeatherData>({ url: Api.weather }, { errorMessageMode: mode });
}

export function getIpAddress(mode: ErrorMessageMode = 'none') {
  return defHttp.get<string>({ url: Api.ipAddress }, { errorMessageMode: mode });
}
