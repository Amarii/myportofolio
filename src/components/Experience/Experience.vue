<template>
<div>
    <h1>Skills</h1>
<div class=container>

<icon skill="Laravel"/>
<icon skill="Typescript"/>

<icon skill="Vue"/>
<icon skill="Html"/>
<icon skill="Node"/>
<icon skill="PHP"/>
<icon skill="MySQL"/>

<icon skill="CSS"/>
<icon skill="MongoDB"/>

    </div>
</div>
</template>

<script>
import Icon from './Icon.vue'
export default {
    components: {
        Icon
    }

}
</script>

<style scoped>
* {
}
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    height: 200px;
    
}

</style>
