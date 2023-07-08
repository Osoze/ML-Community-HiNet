import { queryActivities } from '../services/api';

export default {
  namespace: 'activities',

  state: {
    list: [],
    loading: true,
  },

  effects: {
    *fetchList(_, { call, put }) {
      yield put({
        type: 'changeLoading',
        payload: true,
      });
      const response = yield call