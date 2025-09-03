import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

interface User {
    id: string;
    username: string;
    email: string;
}

export const useAuthStore = defineStore('auth', () => {
    const token = ref<string | null>(sessionStorage.getItem('token'));
    const user = ref<User | null>(null);

    const isLoggedIn = computed<boolean>(() => !!token.value);
    const getUser = computed<User | null>(() => user.value);
    const getToken = computed<string | null>(() => token.value);

    const setToken = (newToken: string) => {
        token.value = newToken;
        sessionStorage.setItem('token', newToken);
    };

    const clearToken = () => {
        token.value = null;
        sessionStorage.removeItem('token');
    };

    const setUser = (newUser: User) => {
        user.value = newUser;
        sessionStorage.setItem('user', JSON.stringify(newUser));
    };

    const clearUser = () => {
        user.value = null;
        sessionStorage.removeItem('user');
    };

    const login = async (loginToken: string, userData: User) => {
        setToken(loginToken);
        setUser(userData);
    };

    const logout = () => {
        clearToken();
        clearUser();
    };

    return {
        token,
        user,
        isLoggedIn,
        getUser,
        getToken,
        login,
        logout,
    };
});