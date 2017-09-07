<template>
  <div>
    <get-started image="/static/hero.jpeg" h-size="600"></get-started>

    <section>
      <v-layout column wrap class="my-5" align-center>

        <centered-text></centered-text>

        <teaser></teaser>

      </v-layout>
    </section>

    <get-started image="/static/plane.jpg" h-size="380"></get-started>

    <company-info></company-info>
  </div>
</template>

<script>
import GetStarted from './get-started';
import CenteredText from './centered-text';
import CompanyInfo from './company-info';
import Teaser from './teaser';

export default {
  components: {
    getStarted: GetStarted,
    centeredText: CenteredText,
    companyInfo: CompanyInfo,
    teaser: Teaser,
  },
};
</script>

<style lang="scss" scoped>
</style>
