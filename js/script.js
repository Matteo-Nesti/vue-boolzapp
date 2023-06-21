const { createApp } = Vue;

const app = createApp({
  data() {
    return { data };
  },
  methods: {
    getAvatar(avatar) {
      return "img/avatar" + avatar + ".jpg";
    },
  },
}).mount("#root");
