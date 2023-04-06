import axios from "axios";

export const refreshTokens = async refreshToken => {
  try {
    const { data } = await axios.post('/users/refresh', {
      refreshToken,
    });
    return data;
  } catch (error) {
    throw new Error('Failed to refresh tokens');
  }
};