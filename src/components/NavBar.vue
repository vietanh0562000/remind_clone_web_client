<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>Honyomi</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      :key="link.name"
      v-for="link in links"
      @click="navigateTo(link.path)"
      text
      height="100%"
      >{{ link.name }}</v-btn
    >
    <v-btn text height="100%" @click="switchTheme"
      ><v-icon>{{
        $vuetify.theme.dark ? "mdi-brightness-4" : "mdi-brightness-6"
      }}</v-icon></v-btn
    >
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      links: [
        {
          path: "/",
          name: "Home",
        },
        {
          path: "/about",
          name: "About",
        },
      ],
    };
  },
  methods: {
    navigateTo(path) {
      this.$router.push(path);
    },
    switchTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>

<style scoped></style>
