import { clearTokens, updateTokens } from 'redux/auth/slice';
import { refreshTokens } from './refreshTokens';

const REFRESH_INTERVAL = 5 * 60 * 1000;

let interval = null;

export const startTokenRefreshInterval = (dispatch, refreshToken) => {
    if (interval) {
    console.warn('Token refresh interval already started');
    return;
  }
    interval = setInterval(async () => {
        try {
        const data = await refreshTokens(refreshToken);
        if (!data) {
            dispatch(clearTokens());
            stopTokenRefreshInterval();
           throw new Error('Token refresh failed');
            }
            dispatch(updateTokens(data));
        } catch (error) { console.error(error); }
    }, REFRESH_INTERVAL);
  localStorage.setItem('refreshTokenInterval', interval);
};

export const stopTokenRefreshInterval = () => {
    if (!interval) {
    console.warn('No token refresh interval found');
    return;
    }
    clearInterval(interval);
    localStorage.removeItem('refreshTokenInterval');
    interval = null;
};