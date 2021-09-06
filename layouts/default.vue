<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <!-- <v-img style="height: 64px" src="@/assets/img/logo/playland.png"></v-img> -->
      <div class="d-flex justify-center">
        <a href="/">
          <img width="100" height="64" src="@/assets/img/logo/playland.png" />
        </a>
      </div>
      <v-list class="py-0">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <div
        class="d-flex justify-center align-center"
        style="width: 100%; height: 64px"
      >
        <span>แบบฟอร์ม</span>
      </div>
      <v-list class="py-0">
        <v-list-item
          v-for="(item, i) in item_file"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>

      <v-spacer />

      <v-btn class="d-flex justify-end" @click="Logout">Logout </v-btn>
    </v-app-bar>
    <v-main>
      <div>
        <Nuxt />
      </div>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'เบิกงบทั่วไป',
          to: '/GeneralBudget',
        },
        {
          icon: 'mdi-apps',
          title: 'เบิกงบเฉพาะ',
          to: '/GeneralSpecifically',
        },
        {
          icon: 'mdi-apps',
          title: 'เบิกงบสนับสนุน',
          to: '/GeneralSupportBudget',
        },
        {
          icon: 'mdi-apps',
          title: 'เงินเดือน',
          to: '/GenneralTest',
        },
      ],
      item_file: [
        {
          icon: 'mdi-apps',
          title: 'ไฟล์งบทั่วไป',
          to: '/budgets',
        },
        // {
        //   icon: 'mdi-apps',
        //   title: 'ไฟล์งบทั่วไป',
        //   to: '/GetBudgets',
        // },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
  methods: {
    async Logout() {
      // await this.$auth.logout()
      this.$router.replace({ name: 'login' })

      // try {
      //   await this.$auth.logout()
      //   this.$router.replace({ name: 'login' })
      // } catch (err) {
      //   console.log(err)
      // }
    },
  },
  // mounted() {
  //   console.log('test', this.$nuxt.$store.state.history)
  // },
  // computed: {
  //   ...mapState({
  //     history: (state) => state.history.order,
  //   }),
  // },
}
</script>
