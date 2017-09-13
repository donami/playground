<template>
  <v-footer>

    <v-layout class="light-green darken-1 white--text mt-5">
      <v-flex xs12>
        <v-container grid-list-xl>
          <v-layout row wrap >
            <v-flex xs12 md4>

              <v-card class="elevation-0 transparent">

                <v-card-text>
                  <img src="http://www.anexis.de/media/Anexis_Plain_Logo/anexis-logo-white-2d-png.png" alt="" class="thumb">
                </v-card-text>

              </v-card>

            </v-flex>

            <v-flex xs12 md4>
              <v-card class="elevation-0 transparent">

                <v-card-title class="pa-0">
                  <div class="headline white--text">Playparks.io</div>
                </v-card-title>

                <v-card-text class="pa-0 white--text smaller">

                  <ul class="list-menu">
                    <li>
                      <router-link :to="{ name: 'home' }">About us</router-link>
                    </li>
                    <li>
                      <router-link :to="{ name: 'home' }">Contact</router-link>
                    </li>
                    <li>
                      <router-link :to="{ name: 'home' }">Privacy policy</router-link>
                    </li>
                    <li>
                      <router-link :to="{ name: 'home' }">Help</router-link>
                    </li>
                    <li>
                      <router-link :to="{ name: 'admin-dashboard' }">Admin</router-link>
                    </li>
                  </ul>

                </v-card-text>
              </v-card>
            </v-flex>

            <v-flex xs12 md4>
              <v-card class="elevation-0 transparent">

                <v-card-title class="pa-0">
                  <div class="headline white--text">Contact Us</div>
                </v-card-title>

                <v-card-text class="pa-0 white--text smaller">

                  <div>
                    Queen Blvd. Street 176 <br>
                    87123 New York <br>
                    USA
                  </div>

                  <div>
                    1-800-283-2312
                  </div>

                </v-card-text>
              </v-card>
            </v-flex>

            <v-flex xs12 class="text-xs-center bottom-text">
              &copy; 2017 <strong>Playparks.io Inc.</strong> | All Rights Reserved | Privacy Policy | Disclaimer
            </v-flex>

          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>

  </v-footer>


</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
  footer {
    height: auto;

    & > :first-child,
    & > :last-child {
      margin: 0 !important;
    }
  }
  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
  .bottom-text {
    font-size: 0.9rem;
  }
  .thumb {
    max-width: 30%;
  }
  .list-menu {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .smaller {
    font-size: 0.8rem;
  }
</style>
