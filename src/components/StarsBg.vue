<template>
  <div class="stars">
    <div class="stars-small"></div>
    <div class="stars-medium"></div>
  </div>
</template>

<style lang="stylus" scoped>
smallStars = ();
mediumStars = ();

random(a, b) {
  return math(math(0, 'random') * (b - a + 1) + a, 'floor');
}

for star in (1 .. 200) {
  shadow = s('%s %s #fff', random(0, 100) vw, random(0, 100) vh);
  push(smallStars, shadow);
}

for star in (1 .. 100) {
  shadow = s('%s %s rgba(255,255,255, .8)', random(0, 100) vw, random(0, 100) vh);
  push(mediumStars, shadow);
}

.stars {
  position: fixed;
  z-index: -1;
}

.stars-small {
  border-radius: 50%;
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: unquote(join(', ', smallStars));
}

.stars-medium {
  border-radius: 50%;
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: unquote(join(', ', mediumStars));
}
</style>
