import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { useAuthStore } from '../store/store';

export const baseURL = 'https://apim.carna.ai';

export type TLoginInput = {
    email: string;
    password: string;
};

export type TLoginResponse = {
    refreshToken: string;
    accessToken: string;
    authenticatedUser: {
        id: string;
        appUserId: string;
        email: string;
        name: string;
        surname: string;
        role: string;
        accountState: string;
        accountCreated: string;
        schoolId: string;
        hasClassroms: boolean;
    };
};

axios.defaults.headers.post['ocp-apim-subscription-key'] = '78cc205a1c4542b0bb6089b718af5069';

export const login = (info: TLoginInput) => {
    return new Promise<TLoginResponse>((resolve, reject) => {
        axios
            .post(`${baseURL}/api/Accounts/login`, { ...info })
            .then((res) => {
                // useAuthStore().setAccessToken(res.data.accessToken);
                // useAuthStore().setRefreshToken(res.data.refreshToken);
                // useAuthStore().setAuthenticatedUser(res.data.authenticatedUser);
                // useAuthStore().setLoggedIn(true);
                // console.log('Promise data:' + res.data);
                resolve(res.data);
            })
            .catch((err) => {
                reject('Promise error: ' + err);
            });
    });
};
