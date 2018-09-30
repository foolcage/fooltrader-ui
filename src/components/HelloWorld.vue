<template>
    <div class="container">
        <table class="table table-striped">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="coin in coins" :key="coin.id">
                <td>{{ coin.id }}</td>
                <td>{{ coin.name }}</td>
                <td>{{ coin.price }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'HelloWorld',
        mounted() {
            setInterval(() => { this.$store.dispatch('loadCoins')}, 1000);
        },
        computed: mapState([
            'coins'
        ])
    }

</script>