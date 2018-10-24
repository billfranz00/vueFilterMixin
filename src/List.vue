<template>
    <div>
        <h1>Filters & Mixins 2</h1>
        <input v-model="filterText">
        <ul>
            <li v-for="fruit in filteredFruit">{{ fruit }}</li>
        </ul>
    </div>
</template>

<script>
    import { fruitMixin } from './fruitMixin';

    export default {
        mixins: [fruitMixin]
    }
</script>

<style lang="scss">
    
</style>