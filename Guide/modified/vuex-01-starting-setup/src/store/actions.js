export default {
  login(context) {
    context.commit('setAuth', { isAuth: true });
  },
  logout(context) {
    context.commit('setAuth', { isAuth: false });
  },
  // setAuth(context) {
  //     context.commit('setAuth')
  // }
};
