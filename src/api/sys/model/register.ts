/**
 * @description: Register interface parameters
 */
export interface RegisterParamsModel {
  account: string;
  confirmPassword: string;
  mobile: string;
  password: string;
  policy: boolean;
  sms: string;
}

/**
 * @description: Register interface return value
 */

export interface RegisterResultModel {
  username: string;
  msg?: string;
}
