<template>
  <div class="wrap" ref="wrap">
    <Title class="container"></Title>
    <Main class="container"></Main>
  </div>
</template>

<script setup lang="ts">
import Main from './components/Main.vue'
import Title from './components/Title.vue'


</script>

<style scoped>
@font-face{
  font-family: 'MorganiteBold';
  src : url('assets/fonts/MorganiteBold.woff');
}

@font-face{
  font-family: 'NeurimboGothicRegular';
  src : url('assets/fonts/neurimboGothicRegular.woff'), url('assets/fonts/MorganiteBold.woff');
  font-display: fallback;
}

@font-face{
  font-family: 'PretendardMedium';
  src : url('assets/fonts/PretendardMedium.woff'), url('assets/fonts/MorganiteBold.woff');
  font-display: fallback;
}

@font-face{
  font-family: 'PyeongChangPeaceBold';
  src : url('assets/fonts/PyeongChangPeaceBold.woff'), url('assets/fonts/MorganiteBold.woff');
  font-display: fallback;
}

@font-face{
  font-family: 'PyeongChangPeaceLight';
  src : url('assets/fonts/PyeongChangPeaceLight.woff'), url('assets/fonts/MorganiteBold.woff');
  font-display: fallback;
}

@font-face{
  font-family: 'Galmuri11';
  src : url('assets/fonts/Galmuri11.woff'), url('assets/fonts/MorganiteBold.woff');
  font-display: fallback;
}


* {
  background-color: #000000;
}

/* 크롬 기본 스타일링 처리 */
body {
  padding: 0;
  margin: 0;
}

.wrap {
  position:absolute;
  width:100%;
  height:100%;
  transition: 1s;
}

.container {
  height:100%;
}


/* 수직 스크롤바를 숨김 */
body {
  overflow: hidden;
}
</style>

