import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const douyin: AppRouteModule = {
  path: '/douyin',
  name: 'Douyin',
  component: LAYOUT,
  redirect: '/douyin/index',
  meta: {
    // hideChildrenInMenu: true,
    icon: 'ph:tiktok-logo',
    title: t('routes.douyin.menu'),
    orderNo: 12,
  },
  children: [
    {
      path: 'index',
      name: 'DouyinPage',
      component: () => import('/@/views/douyin/index.vue'),
      meta: {
        title: t('routes.douyin.index'),
        icon: 'bi:clipboard-data',
        // hideMenu: true,
      },
    },
    {
      path: 'setting',
      name: 'DouyinSettingPage',
      component: () => import('/@/views/douyin/index.vue'),
      meta: {
        title: t('routes.douyin.setting'),
        icon: 'carbon:settings-adjust',
        // hideMenu: true,
      },
    },
    {
      path: 'douyinuser',
      name: 'DouyinUserPage',
      component: () => import('/@/views/douyin/user/index.vue'),
      meta: {
        title: t('routes.douyin.user'),
        icon: 'bx:user-plus',
        // hideMenu: true,
      },
    },
  ],
};

export default douyin;
