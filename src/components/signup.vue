<template>
   <div id="app">
     <h3>ユーザー登録</h3>
    <p>{{ "名前: " + name }}</p>
     <input id="name" type="text" v-model="name">
     <p>{{ "自己紹介: " +bio }}</p>
     <input id="bio" type="text" v-model="bio">
     <p>{{ "email: " +email }}</p>
     <input id="email" type="text" v-model="email">
     <p>{{ "パスワード: " +password }}</p>
     <input id="password" type="text" v-model="password">
     <p>{{ "パスワード(再入力): " +password_confirmation }}</p>
     <input id="password_confirmation" type="text" v-model="password_confirmation">
     <br><br>
     <button @click="createUsers">ユーザー登録</button>
    </div>
</template>


<script>
import axios from 'axios';
export default {
    data() {
        return {
            name: "",
            bio: "",
            email: "",
            password: "",
            password_confirmation: ""
        }
    },
    methods: {
        createUsers() {
            axios.post('sign_up',{
                "sign_up_user_params": {
                "name": this.name,
                "bio": this.bio,
                "email": this.email,
                "password": this.password,
                "password_confirmation": this.password_confirmation
                }
            })
            .then(response => response.json())
            .then(json => {
                    localStorage.token = json.token;
                    localStorage.id = json.id;
                    localStorage.name = json.name;
                    localStorage.bio = json.bio;
            })
            .catch(error => {
                alert(error);
            });
        }
    }

}
</script>