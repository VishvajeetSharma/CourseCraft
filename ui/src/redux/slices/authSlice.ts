import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
  userType: string | null;
  isAuthenticated: boolean;
}

const getStoredString = (key: string): string | null => {
  const item = localStorage.getItem(key);
  if (!item) return null;
  // strip surrounding quotes if JSON-stringified accidentally
  try {
    const parsed = JSON.parse(item);
    return typeof parsed === 'string' ? parsed : null;
  } catch {
    return item;
  }
};

const storedToken = getStoredString('token');
const storedUserType = getStoredString('userType');

const initialState: AuthState = {
  token: storedToken,
  userType: storedUserType,
  isAuthenticated: !!(storedToken && storedUserType),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<{ token: string; userType: string }>) => {
      state.token = action.payload.token;
      state.userType = action.payload.userType;
      state.isAuthenticated = true;
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('userType', action.payload.userType);
    },
    clearAuth: (state) => {
      state.token = null;
      state.userType = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token');
      localStorage.removeItem('userType');
    },
  },
});

export const { setAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;
