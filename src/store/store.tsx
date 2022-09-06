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
    isLoggedIn: boolean;
    setAccessToken: (accessToken: string) => void;
    setRefreshToken: (refreshToken: string) => void;
    setAuthenticatedUser: (authenticatedUser: TAuthUser) => void;
    setLoggedIn: (isLoggedIn: boolean) => void;
    logoutUser: () => void;
};

export const useAuthStore = create<TAuth, [['zustand/persist', TAuth]]>(
    persist(
        (set) => ({
            accessToken: '',
            refreshToken: '',
            isLoggedIn: false,
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
            setAccessToken: (accessToken: string) =>
                set((state) => ({ ...state, accessToken: accessToken })),
            setRefreshToken: (refreshToken: string) =>
                set((state) => ({ ...state, refreshToken: refreshToken })),
            setLoggedIn: (isLoggedIn: boolean) =>
                set((state) => ({ ...state, isLoggedIn: isLoggedIn })),
            setAuthenticatedUser: (authenticatedUser: object) =>
                set((state: any) => ({
                    authenticatedUser: { ...state.authenticatedUser, authenticatedUser }
                })),
            logoutUser: () => set({ accessToken: '', refreshToken: '', isLoggedIn: false })
        }),
        {
            name: 'auth-storage'
        }
    )
);
