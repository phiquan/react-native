import {types} from 'mobx-state-tree';
import {createContext, useContext, useEffect} from 'react';

const AuthStore = types
  .model('Auth', {token: types.maybeNull(types.string)})
  .views(self => ({
    get token() {
      return self.token;
    },
    get isLogin() {
      return Boolean(this.token);
    },
  }))
  .actions(self => ({
    login: function (token: string) {
      self.token = token;
    },
  }));

export const StoreModel = types.model('StoreModel').props({
  authStore: types.optional(AuthStore, {}),
});

export const StoreContext = StoreModel.create({});



export const useInit = () => {

  useEffect(() => {

  },[]);
}