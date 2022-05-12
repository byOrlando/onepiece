import { defineStore } from 'pinia';
import { getWeather } from '/@/api/other/index';
import { WeatherData } from '/@/api/other/model/wether';

interface OtherState {
  weather: WeatherData | null;
}

export const useOtherStore = defineStore({
  id: 'app-other',
  state: (): OtherState => ({
    // 天气数据
    weather: null,
  }),
  getters: {
    // 获取天气数据
    getWeather(): WeatherData {
      return this.weather as WeatherData;
    },
  },
  actions: {
    setWeather(info: WeatherData) {
      this.weather = info;
    },
    async HttpWeather() {
      const res = await getWeather();
      this.setWeather(res);
    },
  },
});
