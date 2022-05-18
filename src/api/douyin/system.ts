import { defHttp } from '/@/utils/http/axios';
import { UserPageParams, UserPageListGetResultModel, InsetUserParams } from './model/systemModel';

enum Api {
  UserPageList = '/douyin/getUserListByPage',
  setUserStatus = '/douyin/setUserStatus',
  insetUser = '/douyin/insetUser',
}

export const getUserListByPage = (params?: UserPageParams) =>
  defHttp.get<UserPageListGetResultModel>({ url: Api.UserPageList, params });

export const setUserStatus = (id: number, status: string) =>
  defHttp.post({ url: Api.setUserStatus, params: { id, status } });

export const insetUser = (params: InsetUserParams) => defHttp.post({ url: Api.insetUser, params });
