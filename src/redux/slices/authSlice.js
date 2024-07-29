import api from '../../api/axios';
const authActions = {
  login: (credentials) => async (dispatch) => {
    try {
      const response = await api.post('/auth/login', credentials);
      dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
    }
  },
  register: (userData) => async (dispatch) => {
    try {
      const response = await api.post('/auth/register', userData);
      dispatch({ type: 'REGISTER_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'REGISTER_FAILURE', payload: error.message });
    }
  },
};

export default authActions;