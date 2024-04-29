<template>
    <div class="destinations">
        <div v-if="destinationName === 'Yangon'"><Yangon></Yangon></div>
        <div v-if="destinationName === 'Pyay'"><Pyay></Pyay></div>
        <div v-if="destinationName === 'Kayin'"><Kayin></Kayin></div>
        <div v-if="destinationName === 'Mandalay'"><Mandalay></Mandalay></div>
        <div v-if="destinationName === 'NayPyiTaw'"><NayPyiTaw></NayPyiTaw></div>
    </div>
</template>

<script>
    import NayPyiTaw from '../../components/destination/NayPyiTaw'
import Mandalay from '../../components/destination/Mandalay'
import Kayin from '../../components/destination/Kayin'
import Pyay from '../../components/destination/Pyay'
import Yangon from '../../components/destination/Yangon'
export default {
  components: {
    NayPyiTaw,
    Mandalay,
    Kayin,
    Pyay, Yangon },
        props: ['destinationName'],
    }
</script>

<style scoped>

    
</style>
