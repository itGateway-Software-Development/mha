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
        <div v-if="destinationName === 'MawLaMying'"><MawLaMying></MawLaMying></div>
        <div v-if="destinationName === 'Rakhine'"><Rakhine></Rakhine></div>
        <div v-if="destinationName === 'Bago'"><Bago></Bago></div>
        <div v-if="destinationName === 'ShanNorth'"><ShanNorth></ShanNorth></div>
    </div>
</template>

<script>
    import Rakhine from '../../components/destination/Rakhine'
import NgweSaung from '../../components/destination/NgweSaung'
import Magway from '../../components/destination/Magway'
import ChaungTha from '../../components/destination/ChaungTha'
import NayPyiTaw from '../../components/destination/NayPyiTaw'
import Mandalay from '../../components/destination/Mandalay'
import Kayin from '../../components/destination/Kayin'
import Pyay from '../../components/destination/Pyay'
import Yangon from '../../components/destination/Yangon'
import MawLaMying from '@/components/destination/MawLaMying.vue'
import Bago from '@/components/destination/Bago.vue'
import ShanNorth from '@/components/destination/ShanNorth.vue'

export default {
  components: {
    Rakhine,
    NgweSaung,
    Magway,
    ChaungTha,
    NayPyiTaw,
    MawLaMying,
    Mandalay,
    Kayin,
    Pyay,
    Yangon,
    Bago,
    ShanNorth
 },
        props: ['destinationName'],
    }
</script>

<style scoped>

    
</style>
