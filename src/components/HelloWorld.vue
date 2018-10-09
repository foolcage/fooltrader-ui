<template>
    <div class="container">
        <BaseInputText
                v-model="inputText"
                placeholder="New todo"
                @keydown.enter="addTodo"/>

        <table class="table table-striped">
            <thead>
            <tr>
                <th>trader</th>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="coin in coins" :key="coin.id">
                <td>{{ trader }}</td>
                <td>{{ coin.id }}</td>
                <td>{{ coin.name }}</td>
                <td>{{ coin.price }}</td>
            </tr>
            </tbody>
        </table>
        <MyChart/>
    </div>
</template>

<script>
    import BaseInputText from './BaseInputText.vue'
    import MyChart from './MyChart.vue'
    import {mapState} from 'vuex'

    export default {
        components: {
            BaseInputText, MyChart
        },

        name: 'HelloWorld',
        mounted() {
            setInterval(() => {
                this.$store.dispatch('loadCoins')
            }, 1000);
        },
        computed: mapState([
            'coins'
        ]),
        data() {
            return {
                'inputText': '',
                'trader': ''
            }
        },

        methods: {
            addTodo() {
                this.trader = this.inputText.trim()
            }
        }
    }

</script>