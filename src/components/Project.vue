<template>
<div class="project">
        <div class="grid-container">
            <div class="grid-item-left">
                
                    <img :src="require(`@/assets/${image + '_mobile.png'}`)">
                
            
            </div>
            <div class="grid-item-right-desktop">
                <h1>Details</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ut, officia quam expedita sed quasi et harum pariatur dolorem, laboriosam nemo praesentium consequuntur nesciunt illum doloribus odio earum, beatae aperiam?</p>
                <h2>Techniques Used</h2>
                <icon class="skill" skill="Typescript"/>

            </div>

    </div>
    <div class=grid-container-bottom>
        <div class=grid-item-left>
   
        <h3> Slide to the right for details.</h3>

        </div>

    <div class=grid-item-right-mobile>
    <side-button/>

    </div>

    </div>
</div>
    
</template>

<script>
import SideButton from '../components/SideButton.vue'
import Icon from '../components/Experience/Icon'
export default {
    components: {
        SideButton,
        Icon
    },
    props: {
        image: {
            type: String,
            default: ''
        }
    }


}
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
</script>

<style scoped>
*{
}
.project{
    height:100vh;
    height: calc(var(--vh, 1vh) * 100);
    width:100vw;
    font-family: 'Spectral', serif;

}

.grid-container {
    display: flex;
    flex-wrap: nowrap;
    height:95%;
    

}
.grid-container-bottom, h3 {
    display: flex;
    flex-wrap: nowrap;
    height:5%;
    text-align: center;
    margin-top:01%;
    margin-left:0%;
    width:90%;
    

}
img{
    height:100%;
    width:100%;

}
h3 {
    color:white;
}
picture {
    width:90%;
    height:90%;
    background-color: white;
}
.grid-item-left {
    flex-grow: 15;
    height:auto;
    width:90%;

}
.grid-item-right{
    display: flex;
  

}
.grid-item-right-desktop {
    display:none;
}

@media screen and (min-width: 900px){

    img {
        width:90%;
            margin-left:5%;
    margin-top:2.5%;
    box-shadow: 7.5px 7.5px 5px rgb(80, 4, 4);
    }
    h3 {
        display:none!important;
    }
    .grid-item-right-desktop{
        display:flex;
        flex-wrap: wrap;
          background-color:white;
    height:100.5%;
    width:150%;
    margin-right:1.5%;
    margin-top:1%;
    text-align:center;
     align-items: center;
  justify-content: center;

    }
    h2 {
        width: 100%;
    }
    h1 {
        padding-top:10%;
        width:100%;
    }
    p {
        margin-bottom:100px;
    }
    .skill.div {
    width: 100%!important;        
    }

    .grid-container-bottom, h3 {
    display: flex;
    flex-wrap: nowrap;
    height:5%;
    text-align: center;
    margin-top:0.4%;
    margin-left:0%;
    width:90%;
    

}
.grid-item-right-mobile {
    display:none!important;
}
side-button{
    display:none;
}

}
</style>
