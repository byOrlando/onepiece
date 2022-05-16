import { defineStore } from 'pinia';
import { getWeather, getIpAddress } from '/@/api/other/index';
import { WeatherData } from '/@/api/other/model/wether';

interface OtherState {
  weather: WeatherData | null;
  IpAddress: string;
}

export const useOtherStore = defineStore({
  id: 'app-other',
  state: (): OtherState => ({
    // 天气数据
    weather: null,
    IpAddress: '[::1]',
  }),
  getters: {
    // 获取天气数据
    getWeather(): WeatherData {
      return this.weather as WeatherData;
    },
    getIpAddress(): string {
      return this.IpAddress;
    },
  },
  actions: {
    setWeather(info: WeatherData) {
      this.weather = info;
    },
    setIpAddress(info: string) {
      this.IpAddress = info;
    },
    async HttpWeather() {
      const res = await getWeather();
      this.setWeather(res);
    },
    HttpIpAddress() {
      getIpAddress().then((res) => {
        this.setIpAddress(res);
      });
    },
  },
});
