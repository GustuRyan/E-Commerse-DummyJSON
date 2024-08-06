import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useRoute, useRouter } from 'vue-router';

export function Auth() {
    const username = ref('');
    const password = ref('');
    const user = ref({});
    const route = useRoute();
    const router = useRouter();

    const setCookie = (name, value, days) => {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    const getCookie = (name) => {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    const deleteCookie = (name) => {
        document.cookie = name + '=; Max-Age=-999999;';
    }

    const productPage = () => {
        router.push({
            name: 'products',
            params: { page: 1 },
            query: { page: 1 }
        }).then(() => {
            window.location.reload();
        });
    };

    const Authentication = async () => {
        try {
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: username.value,
                    password: password.value,
                    expiresInMins: 30,
                })
            });

            const data = await response.json();
            user.value = data;

            if (data.token) {
                setCookie('authToken', data.token, 1); // save token in cookie for 1 day
                console.log('Login successful', data);
                productPage();
            } else {
                console.error('Login failed', data);
            }
        } catch (error) {
            console.error('Error during authentication:', error);
        }
    };

    // Check if user is logged in
    const isLoggedIn = () => {
        return getCookie('authToken') !== null;
    }

    const logout = () => {
        deleteCookie('authToken')
        router.push({
            name: 'home',
        }).then(() => {
            window.location.reload();
        });
    }

    return {
        Authentication,
        setCookie,
        getCookie,
        isLoggedIn,
        logout,
        username,
        password,
        user
    };
}