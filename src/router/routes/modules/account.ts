import type { AppRouteModule } from '/@/router/types';

const IFrame = () => import('/@/views/sys/iframe/FrameBlank.vue');
import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const account: AppRouteModule = {
  path: '/account',
  name: 'Account',
  component: LAYOUT,
  redirect: '/account/index',
  meta: {
    // hideChildrenInMenu: true,
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
        title: t('routes.account.setting'),
        icon: 'bx:cog',
        // hideMenu: true,
      },
    },
    {
      path: 'doc',
      name: 'Doc',
      component: IFrame,
      meta: {
        frameSrc: 'https://vvbin.cn/doc-next/',
        title: t('routes.account.doc'),
        icon: 'bx:dock-left',
      },
    },
    {
      path: 'company',
      name: 'Company',
      component: IFrame,
      meta: {
        frameSrc: 'https://app.shkqg.com/',
        title: t('routes.account.company'),
        icon: 'logos:bigpanda',
      },
    },
  ],
};

export default account;
