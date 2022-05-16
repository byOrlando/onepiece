<template>
  <div :class="[prefixCls]">
    <Icon icon="mdi:ip" style="margin-right: -9px" />
    {{ userOther.IpAddress }}
  </div>
</template>

<script lang="ts" setup>
  import { useDesign } from '/@/hooks/web/useDesign';
  import Icon from '/@/components/Icon/index';
  import { useOtherStore } from '/@/store/modules/other';
  const userOther = useOtherStore();
  const { prefixCls } = useDesign('header-user-dropdown');
</script>
