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
        return

    }

}
</script>

<style scoped>
* {
  height: auto;
  width: 60px;
  margin-top:0;
}
p {
    font-size: 15px;
    color:grey;
}
img{
    width:auto;
    height:50px!important;
}

</style>
