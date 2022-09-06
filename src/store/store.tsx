import React from 'react';
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type TAuthUser = {
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

type TAuth = {
    refreshToken: string;
    accessToken: string;
    authenticatedUser: TAuthUser;
    setAccessToken: (accessToken: string) => void;
    setRefreshToken: (refreshToken: string) => void;
    setAuthenticatedUser: (authenticatedUser: TAuthUser) => void;
};

export const useAuthStore = create<TAuth>((set) => ({
    accessToken: '',
    refreshToken: '',
    authenticatedUser: {
        id: '',
        appUserId: '',
        email: '',
        name: '',
        surname: '',
        role: '',
        accountState: '',
        accountCreated: '',
        schoolId: '',
        hasClassroms: false
    },
    setAccessToken: (accessToken: string) => set((state: any) => ({ accessToken: accessToken })),
    setRefreshToken: (refreshToken: string) =>
        set((state: any) => ({ refreshToken: refreshToken })),
    setAuthenticatedUser: (authenticatedUser: object) =>
        set((state: any) => ({
            authenticatedUser: { ...state.authenticatedUser, authenticatedUser }
        })),
    logoutUser: () => set((state: any) => ({ accessToken: '', refreshToken: '' }))
}));
