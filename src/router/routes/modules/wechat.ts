import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const wechat: AppRouteModule = {
  path: '/wechat',
  name: 'Wechat',
  component: LAYOUT,
  redirect: '/wechat/index',
  meta: {
    // hideChildrenInMenu: true,
    icon: 'icon-park:tencent-qq',
    title: t('routes.wechat.name'),
    orderNo: 12,
  },
  children: [
    {
      path: 'index',
      name: 'WechatPage',
      component: () => import('/@/views/wechat/openid/index.vue'),
      meta: {
        title: t('routes.wechat.setting'),
        icon: 'bx:cog',
        // hideMenu: true,
      },
    },
  ],
};

export default wechat;
