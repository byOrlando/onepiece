import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const account: AppRouteModule = {
  path: '/account',
  name: 'Account',
  component: LAYOUT,
  redirect: '/account/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'bx:cog',
    title: t('routes.account.account'),
    orderNo: 12,
  },
  children: [
    {
      path: 'index',
      name: 'AccountPage',
      component: () => import('/@/views/account/index.vue'),
      meta: {
        title: t('routes.account.account'),
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
      },
    },
  ],
};

export default account;
