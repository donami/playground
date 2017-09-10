<style lang="scss" scoped>
</style>

<template>

  <v-container>
    <v-layout row>

      <v-flex xs12 sm4>
        <v-card>
          <v-toolbar class="teal white--text" dark>
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title>Topics</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>more_vert</v-icon>
            </v-btn>
          </v-toolbar>
          <v-list>
            <v-list-group v-for="item in menu" :value="item.active" v-bind:key="item.text">
              <v-list-tile slot="item" @click="">
                <v-list-tile-action>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.text }}</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-icon>keyboard_arrow_down</v-icon>
                </v-list-tile-action>
              </v-list-tile>

              <v-list-tile v-for="subItem in item.items" v-bind:key="subItem.text" @click="">
                <v-list-tile-content>
                  <v-list-tile-title>
                    <router-link :to="{ name: subItem.route }">{{ subItem.text }}</router-link>
                  </v-list-tile-title>
                </v-list-tile-content>
                <!-- <v-list-tile-action> -->
                  <!-- <v-icon>home</v-icon> -->
                <!-- </v-list-tile-action> -->
              </v-list-tile>

            </v-list-group>
          </v-list>
        </v-card>
      </v-flex>

      <v-flex xs12 sm8>

        <router-view></router-view>

      </v-flex>

    </v-layout>

  </v-container>

</template>

<script>

export default {

  data() {
    return {

      menu: [
        {
          text: 'Home',
          active: true,
          icon: 'home',
          items: [
            {
              text: 'Dashboard',
              route: 'admin-dashboard',
            },
          ],
        },
        {
          text: 'Playgrounds',
          icon: 'widgets',
          items: [
            {
              text: 'Playgrounds',
              route: 'admin-playgrounds',
            },
            {
              text: 'Add new playground',
              route: 'admin-playgrounds-add',
            },
          ],
        },
      ],

    };
  },

};

</script>
