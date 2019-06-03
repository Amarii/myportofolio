<template>
    <div>
<img :src="require(`@/assets/${skill + '.png'}`)">
<p>{{skill}}</p>
    </div>
</template>

<script>
export default {
    props: {
        skill: {
            type: String,
            default: ''
        }
    },
    data () {
        return{}

    }

}
</script>

<style scoped>
* {
  display:flex;
  width: 50px!important;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  margin-left: 5px;
  margin-right: 5px;
}
p {
    font-size: 15px;
    color:grey;
}
img{
    height:50px!important;
    width:100%!important;
}

</style>
