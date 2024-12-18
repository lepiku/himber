<template>
  <div class="container rounded-lg">
    <iframe
      class="responsive-iframe"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d481.74106383734625!2d106.98686713337818!3d-6.149893221955449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698a15972af7c1%3A0x75681ff66b90144e!2sJl.%20Aralia%20Raya%20Blok%20HY36%20No.37%2C%20Pusaka%20Rakyat%2C%20Kec.%20Tarumajaya%2C%20Kabupaten%20Bekasi%2C%20Jawa%20Barat%2017214!5e0!3m2!1sid!2sid!4v1734540501187!5m2!1sid!2sid"
      style="border: 0"
      allowfullscreen
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<style lang="sass" scoped>
.container
  position: relative
  overflow: hidden
  width: 100%
  /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
  padding-top: 56.25%
  max-height: 200px

.responsive-iframe
  position: absolute
  top: 0
  left: 0
  bottom: 0
  right: 0
  width: 100%
  height: 100%
</style>
