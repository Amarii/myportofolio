<template>
  <ul>
    <li>
      <a href="#" class="round red">
        CV
        <span class="round">Press here to download my CV.</span>
      </a>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  -moz-box-sizing: border-box;
  -o-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  width: 100%;
  height: 100%;
  font-family: "helvetica neue", helvetica, arial, sans-serif;
  font-size: 13px;
  text-align: center;
  background: #333
    url("http://subtlepatterns.subtlepatterns.netdna-cdn.com/patterns/low_contrast_linen.png");
}

ul {
  margin: 30px auto;
  text-align: center;
}

li {
  list-style: none;
  position: relative;
  display: inline-block;
  width: 100px;
  height: 100px;
}

@-moz-keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}

@-webkit-keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}

@-o-keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}

.round {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding-top: 30px;
  text-decoration: none;
  text-align: center;
  font-size: 25px;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.7);
  letter-spacing: -0.065em;
  -webkit-transition: all 0.25s ease-in-out;
  font-weight: bold;
  -o-transition: all 0.25s ease-in-out;
  -moz-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.2);
  border-radius: 300px;
  z-index: 1;
  border-width: 4px;
  border-style: solid;
}

.round:hover {
  width: 130%;
  height: 130%;
  left: -15%;
  top: -15%;
  font-size: 33px;
  border-size: 10px;
  padding-top: 38px;
  -webkit-box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  -o-box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  z-index: 2;
  -webkit-transform: rotate(-360deg);
  -moz-transform: rotate(-360deg);
  -o-transform: rotate(-360deg);
  transform: rotate(-360deg);
}

a.red {
  background-color:#990000;
  color: white;
  border-color: rgba(133, 32, 28, 0.2);
}

a.red:hover {
  color: rgba(239, 57, 50, 1);
}


.round span.round {
  display: block;
  opacity: 0;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  font-size: 1px;
  border: none;
  padding: 40% 20% 0 20%;
  color: #fff;
}

.round span:hover {
  opacity: 0.85;
  font-size: 16px;
  -webkit-text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
  -moz-text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
  -o-text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
}

.green span {
  background: rgba(0, 63, 71, 0.7);
}

.red span {
  background: rgba(133, 32, 28, 0.7);
}

.yellow span {
  background: rgba(161, 145, 0, 0.7);
}

@media screen and (max-width: 900px){
  li{
    width: 50px;
    height: 50px;
  }
  .round{
    font-size: 15px;
    padding-top: 12px;
  }
   .round:hover{
     padding-top: 6px;

   }
   .round span:hover {
     font-size: 10px;
     padding-top:16px;
   }
}
</style>
