import { wbSocket } from '/@/utils/http/long_socket';
import { useGlobSetting } from '/@/hooks/setting';
// import { useUserStore } from '/@/store/modules/user';
// import { getUserInfo } from '/@/utils/auth';
const globSetting = useGlobSetting();

let websocketPro: any;

export function getaWs() {
  // const userInfo = getUserInfo();
  if (websocketPro) {
    return websocketPro;
  }
  websocketPro = new wbSocket({ url: `${globSetting.wsUrl}?id=123` });
  return websocketPro;
}

export function CustomMessageToMonitor(data: any) {
  console.log(data);
  // const jsonData = JSON.parse(data);
  // console.log(jsonData);
}
