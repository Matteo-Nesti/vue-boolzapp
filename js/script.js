const { createApp } = Vue;

const app = createApp({
  data() {
    return { data };
  },
  methods: {
    addStringToImg() {
      this.data.contacts.forEach((contact) => {
        contact.avatar = "img/avatar" + contact.avatar + ".jpg";
      });
    },
  },
}).mount("#root");
