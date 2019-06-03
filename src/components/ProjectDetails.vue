<template>
<div class=project>
    
    <div class=container>
        <div class=flex-item-left>
        </div>
         <div class=flex-item-center-top>
             <h1>{{this.name}}</h1> 
        </div>
         <div class=flex-item-right>
        </div>
    </div>
    <div class=container>
        <div class=flex-item-left>
            <picture>
           <a :href="this.github">Repo:<img src="../assets/GitHub.png" alt="">  </a>
            </picture>
        </div>
         <div class=flex-item-center>
            <p>{{this.desc}}</p>

        </div>
         <div class=flex-item-right>
        </div>
    </div>
    <div class=container-bottom>
        <div class=flex-item-left>
        </div>
         <div class=flex-item-center-bottom>
             <h4>Techniques Used</h4>
        </div>
         <div class=flex-item-right>
        </div>
    </div>
     <div class=container-bottom>
        <div class=flex-item-left>
        </div>
         <div class=flex-item-center-bottom>
             <skills skill="Typescript"/>
        </div>
         <div class=flex-item-right>
        </div>
    </div>
</div>

</template>

<script>
import Skills from  "./Experience/Icon"

export default {
    components:{
        Skills
    },
mounted:function(){
        this.setData() 
  },
  data(){
      return{
          desc : this.desc,
          github: this.github
      }
  },
    props: {
        
        name: {
            type:String,
            default:"Project Name"
        },
    },
        methods: {
            
            setData: function(){
                if(this.name == "Space Evasion"){
                    this.desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus hic quo optio consectetur ut assumenda iusto fuga. ",
                    this.github = "https://www.google.nl"
                }
            }
        }

    }


</script>

<style scoped>
h1{
    font-size:28px;
}
a{
    padding-left: 5px;
 text-decoration: none;
    color:black
}
.project{
    font-family: 'Spectral', serif;
    padding: 20px;
    

}

img{
    height: 40px;
}

.container {
    height: calc(var(--vh, 1vh) * 30);
    width: 100%;
    display:flex;
    flex-wrap: nowrap;
    background-color: white;

    
}
.container-bottom {
    height: 16.5vh;
    width: 100%;
    display:flex;
    flex-wrap: nowrap;
    background-color: white;

    
}

.flex-item-center-top{
    display:flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    justify-self: center;
    align-items: center;

}
.flex-item-center-bottom{
    display:flex;
    height: 50%;
    width: 50%;
    justify-content: center;
    justify-self: center;
    align-items: center;
    

}
.flex-item-left {
        display:flex;
    height: 100%;
    width: 33%;
    align-items: center;
    flex-wrap: wrap;
}

.flex-item-center{
    display:flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    justify-self: center;
    align-items: center;

}

.flex-item-right {
        display:flex;
    height: 100%;
    width: 33%;


}


.flex-itemx2{
  border-style: solid;

}
</style>
