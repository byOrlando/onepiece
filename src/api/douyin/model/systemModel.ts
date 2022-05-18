import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';

export type UserParams = {
  userName?: string;
  status?: string;
};

export interface UserListItem {
  id: string;
  userName: string;
  uid: string;
  status: number;
  orderNo: string;
  createTime: string;
}
export interface InsetUserParams {
  userName: string;
  uid: string;
  remark: string;
  status: string;
}

export type UserPageParams = BasicPageParams & UserParams;
export type UserPageListGetResultModel = BasicFetchResult<UserListItem>;
