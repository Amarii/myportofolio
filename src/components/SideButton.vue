<template>
<div id="arrowAnim">
  <div class="arrowSliding">
    <div class="arrow"></div>
  </div>
  <div class="arrowSliding delay1">
    <div class="arrow"></div>
  </div>
  <div class="arrowSliding delay2">
    <div class="arrow"></div>
  </div>
  <div class="arrowSliding delay3">
    <div class="arrow"></div>
  </div>
</div>
    
</template>

<script>
export default {

}
</script>

<style scoped>
@media screen and (min-width: 900px){
*{
  display:none
}
}

#arrowAnim {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.arrow {
  margin-bottom: 10px;
  width: 15px;
  height: 15px;
  border: 5px solid;
  border-color: white transparent transparent white;
  transform: rotate(135deg);
}


.arrowSliding {
  position: absolute;
  -webkit-animation: slide 2s linear infinite; 
          animation: slide 2s linear infinite;
}

.delay1 {
  -webkit-animation-delay: 0.5s; 
    animation-delay: 0.5s;
}
.delay2 {
  -webkit-animation-delay: 1s; 
    animation-delay: 1s;
}
.delay3 {
  -webkit-animation-delay: 1.5s; 
    animation-delay: 1.5s;
}

@-webkit-keyframes slide {
    0% { opacity:0; transform: translateX(-30px); }	
   20% { opacity:1; transform: translateX(-18px); }	
   80% { opacity:1; transform: translateX(18px); }	
  100% { opacity:0; transform: translateX(30px); }	
}
@keyframes slide {
    0% { opacity:0; transform: translateX(-30px); }	
   20% { opacity:1; transform: translateX(-18px); }	
   80% { opacity:1; transform: translateX(18px); }	
  100% { opacity:0; transform: translateX(30px); }	
}
</style>
