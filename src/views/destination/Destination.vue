<template>
    <div class="destinations">
        <div v-if="destinationName === 'Yangon'"><Yangon></Yangon></div>
        <div v-if="destinationName === 'Pyay'"><Pyay></Pyay></div>
        <div v-if="destinationName === 'Kayin'"><Kayin></Kayin></div>
        <div v-if="destinationName === 'Mandalay'"><Mandalay></Mandalay></div>
        <div v-if="destinationName === 'NayPyiTaw'"><NayPyiTaw></NayPyiTaw></div>
        <div v-if="destinationName === 'ChaungThar'"><ChaungTha></ChaungTha></div>
        <div v-if="destinationName === 'Magway'"><Magway></Magway></div>
        <div v-if="destinationName === 'NgweSaung'"><NgweSaung></NgweSaung></div>
    </div>
</template>

<script>
    import NgweSaung from '../../components/destination/NgweSaung'
import Magway from '../../components/destination/Magway'
import ChaungTha from '../../components/destination/ChaungTha'
import NayPyiTaw from '../../components/destination/NayPyiTaw'
import Mandalay from '../../components/destination/Mandalay'
import Kayin from '../../components/destination/Kayin'
import Pyay from '../../components/destination/Pyay'
import Yangon from '../../components/destination/Yangon'
export default {
  components: {
    NgweSaung,
    Magway,
    ChaungTha,
    NayPyiTaw,
    Mandalay,
    Kayin,
    Pyay, Yangon },
        props: ['destinationName'],
    }
</script>

<style scoped>

    
</style>
