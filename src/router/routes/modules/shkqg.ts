import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const shkqg: AppRouteModule = {
  path: '/shkqg',
  name: 'Shkqg',
  component: LAYOUT,
  redirect: '/shkqg/index',
  meta: {
    // hideChildrenInMenu: true,
    icon: 'emojione:baby-chick',
    title: t('routes.shkqg.name'),
    orderNo: 12,
  },
  children: [
    {
      path: 'index',
      name: 'ShkqgSettingPage',
      component: () => import('/@/views/account/index.vue'),
      meta: {
        title: t('routes.shkqg.setting'),
        icon: 'bx:cog',
        // hideMenu: true,
      },
    },
  ],
};

export default shkqg;
