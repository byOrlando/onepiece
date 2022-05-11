import type { ValidationRule } from 'ant-design-vue/lib/form/Form';
import type { RuleObject } from 'ant-design-vue/lib/form/interface';
import { ref, computed, unref, Ref } from 'vue';
import { func } from 'vue-types';
import { useI18n } from '/@/hooks/web/useI18n';

export enum LoginStateEnum {
  LOGIN,
  REGISTER,
  RESET_PASSWORD,
  MOBILE,
  QR_CODE,
}

const currentState = ref(LoginStateEnum.LOGIN);

export function useLoginState() {
  function setLoginState(state: LoginStateEnum) {
    currentState.value = state;
  }

  const getLoginState = computed(() => currentState.value);

  function handleBackLogin() {
    setLoginState(LoginStateEnum.LOGIN);
  }

  return { setLoginState, getLoginState, handleBackLogin };
}

export function useFormValid<T extends Object = any>(formRef: Ref<any>) {
  async function validForm() {
    const form = unref(formRef);
    if (!form) return;
    const data = await form.validate();
    return data as T;
  }

  return { validForm };
}

export function useFormRules(formData?: Recordable) {
  const { t } = useI18n();

  const getAccountFormRule = computed(() => createRule(t('sys.login.accountPlaceholder')));
  const getPasswordFormRule = computed(() => createRule(t('sys.login.passwordPlaceholder')));
  const getSmsFormRule = computed(() => createRuleMsm(t('sys.login.smsPlaceholder')));
  const getMobileFormRule = computed(() => createRuleaMobile(t('sys.login.mobilePlaceholder')));

  const validatePolicy = async (_: RuleObject, value: boolean) => {
    return !value ? Promise.reject(t('sys.login.policyPlaceholder')) : Promise.resolve();
  };

  const validateConfirmPassword = (password: string) => {
    return async (_: RuleObject, value: string) => {
      if (!value) {
        return Promise.reject(t('sys.login.passwordPlaceholder'));
      }
      if (value !== password) {
        return Promise.reject(t('sys.login.diffPwd'));
      }
      return Promise.resolve();
    };
  };

  const getFormRules = computed((): { [k: string]: ValidationRule | ValidationRule[] } => {
    const accountFormRule = unref(getAccountFormRule);
    const passwordFormRule = unref(getPasswordFormRule);
    const smsFormRule = unref(getSmsFormRule);
    const mobileFormRule = unref(getMobileFormRule);

    const mobileRule = {
      sms: smsFormRule,
      mobile: mobileFormRule,
    };
    switch (unref(currentState)) {
      // register form rules
      case LoginStateEnum.REGISTER:
        return {
          account: createRuleAccount(t('sys.login.accountPlaceholder')),
          password: [
            {
              required: true,
              message: t('sys.login.passwordPlaceholder'),
              trigger: 'change',
            },
            {
              //必须包含大小写字母、数字、特殊字符长度再9-16位之间
              pattern: /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{9,20}$/,
              message: t('sys.login.passwordPlaceholder2'),
              trigger: 'change',
            },
          ],
          confirmPassword: [
            { validator: validateConfirmPassword(formData?.password), trigger: 'change' },
          ],
          policy: [{ validator: validatePolicy, trigger: 'change' }],
          ...mobileRule,
        };

      // reset password form rules
      case LoginStateEnum.RESET_PASSWORD:
        return {
          account: accountFormRule,
          ...mobileRule,
        };

      // mobile form rules
      case LoginStateEnum.MOBILE:
        return mobileRule;

      // login form rules
      default:
        return {
          account: accountFormRule,
          password: passwordFormRule,
        };
    }
  });
  return { getFormRules };
}

function createRule(message: string) {
  return [
    {
      required: true,
      message,
      trigger: 'change',
    },
  ];
}

function createRuleAccount(message: string) {
  return [
    {
      required: true,
      message,
      trigger: 'change',
    },
    {
      pattern: /^[a-zA-Z]{1}/,
      message: '必须以字母开头',
      trrigger: 'change',
    },
    {
      pattern: /^[a-z0-9_]{5,10}$/,
      message: '请输入5-10位字母、数字或下划线',
      trigger: 'change',
    },
    {
      // 必须数字或字母结尾
      pattern: /^(.*?)[a-z0-9]{1}$/,
      message: '必须以字母或数字结尾',
      trigger: 'change',
    },
  ];
}
function createRuleaMobile(message: string) {
  return [
    {
      required: true,
      message,
      trigger: 'change',
    },
    {
      pattern: /^1[3456789]\d{9}$/,
      message: '请输入正确的手机号码',
      trigger: 'change',
    },
  ];
}

function createRuleMsm(message: string) {
  return [
    {
      required: true,
      message,
      trigger: 'change',
    },
    {
      pattern: /^\d{6}$/,
      message: '请输入6位数字',
      trigger: 'change',
    },
  ];
}
