<!-- For most components, the Vuestic library is used, 
     the button "Sign Up" is not clickable until all 
     fields are filled (at least somehow).
     Using this library, it is easy to set up a mail mask (if necessary) 
     and make beautiful error output -->

<template>
    <div class="reg-window">
        <div class="loading-screen" v-if="!isLoaded">
            <va-progress-circle indeterminate 
            color="#9ED5F0"
            :thickness="0.3"
            size="large"/>
        </div>
        <div class="auth-form" v-else>
            <span class="logo">Contact Proxy</span>
            <div class="reg-fields">
                <div class="reg-field">
                    <input 
                    class="reg-input" 
                    type="text"
                    placeholder="Почта"
                    v-model="mail">
                </div>

                <div class="reg-field">
                    <input 
                    class="reg-input" 
                    :type="isPasswordVisible ? 'text' : 'password'"
                    placeholder="Пароль"
                    v-model="password">
                    <va-icon
                        class="password-icon"
                        :name="isPasswordVisible ? 'visibility_off' : 'visibility'"
                        size="medium"
                        color="#292929"
                        @click="isPasswordVisible = !isPasswordVisible"
                    />
                </div>
            </div>
            <va-button 
            style="border: 3px solid var(--main-black);"
            icon-right="arrow_forward" 
            :disabled="!(password !== '' && mail !== '')"
            size="large"
            color="#FFFFFF"
            text-color="#292929"
            border-color="#292929"
            >Sign In</va-button><br>
            <div>
                <va-button
                style="text-decoration-line:underline;"
                pressed-behavior="opacity"
                pressed-opacity=0
                color="#FFFFFF"
                text-color="#9ED5F0"
                size="small"
                to="/registration">Зарегистрироваться</va-button>
                
                <va-button
                style="text-decoration-line:underline;"
                pressed-behavior="opacity"
                pressed-opacity=0
                color="#FFFFFF"
                text-color="#9ED5F0"
                size="small"
                to="TODO)">Забыли пароль?</va-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        isLoaded: false,
        isPasswordVisible: false,
        password: "",
        mail: "",
    }),
    mounted() {
        this.isLoaded = true;
    },
}
</script>