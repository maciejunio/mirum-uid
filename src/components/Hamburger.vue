<template>
  <div>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hamburgerBackground {
  span {
    background: #004777 !important;
  }
}
.hamburgerBackground.open {
  span {
    background: #ffffff !important;
  }
}
.hamburger {
  width: 35px;
  height: 35px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  position: fixed;
  right: 15px;
  top: 25px;
  z-index: 1000;
  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 50%;
    background: #ffffff;
    opacity: 1;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
    &:nth-child(even) {
      left: 50%;
      border-radius: 0 9px 9px 0;
    }
    &:nth-child(odd) {
      left: 0px;
      border-radius: 9px 0 0 9px;
    }
    &:nth-child(1),
    &:nth-child(2) {
      top: 0px;
    }
    &:nth-child(3),
    &:nth-child(4) {
      top: 12px;
    }
    &:nth-child(5),
    &:nth-child(6) {
      top: 24px;
    }
  }
}
.open {
  span {
    &:nth-child(1),
    &:nth-child(6) {
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      transform: rotate(45deg);
    }
    &:nth-child(2),
    &:nth-child(5) {
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }
    &:nth-child(1) {
      left: 5px;
      top: 10px;
    }
    &:nth-child(2) {
      left: calc(50% - 5px);
      top: 10px;
    }
    &:nth-child(3) {
      left: -50%;
      opacity: 0;
    }
    &:nth-child(4) {
      left: 100%;
      opacity: 0;
    }
    &:nth-child(5) {
      left: 5px;
      top: 17px;
    }
    &:nth-child(6) {
      left: calc(50% - 5px);
      top: 17px;
    }
  }
}
</style>
