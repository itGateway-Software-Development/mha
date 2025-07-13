<template>
    <div class="destination">
        <div class="hero-section">
            <div class="banner">
                <img src="@/assets/images/destination/bago/banner.jpg" class="banner" alt="">
            </div>
            <div class="content">
                <div class="hero-header">
                    <img src="@/assets/images/destination/travel.gif" class="icon" alt="">
                
                    <h3>Places to Visit in</h3>
                    <h2>BAGO</h2>
                    <div class="scroll-down">
                        <div class="container">
                            <div class="chevron"></div>
                            <div class="chevron"></div>
                            <div class="chevron"></div>
                            <span class="text">Scroll down</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="places">
            <div class="paginate">
                <div class="btn-group">
                    <button @click="prevPage" :disabled="pageNumber == 0" class=" btn-sm btn-primary" :class="{disable: pageNumber == 0}">Prev</button>
                    <button @click="nextPage" :disabled="pageNumber >= pageCount-1" class=" btn-sm btn-primary" :class="{disable: pageNumber >= pageCount-1}">Next</button>
                </div>

                <div class="paginateNum">
                    <span v-for="(n,i) in pageCount" :key="i" :class="{active: i == pageNumber}">{{n}}</span>
                </div>
                <div>&nbsp;</div>
            </div>
            <div class="row">
                <div class="place-card-wrapper" v-for="(card, i) in paginatedData" :key="i">
                    <div class="place-card" :class="{odd: i%2 !== 0}">
                        <div class="place-img ">
                            <div class=" place-swiper swiper " data-aos-delay="100">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide" v-for="(img, i) in card.images" :key="i">
                                        <img :src="img" class="float-start" alt="">
                                    </div>
                                </div>
                                <div class="swiper-pagination" id="swiper-paginate"></div>
                            </div>
                        </div>
                        <div class="place-content">
                            <h2>{{card.title}} </h2>
                            <p v-html="card.content">
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="paginate">
                <div class="btn-group">
                    <button @click="prevPage" :disabled="pageNumber == 0" class=" btn-sm btn-primary" :class="{disable: pageNumber == 0}">Prev</button>
                    <button @click="nextPage" :disabled="pageNumber >= pageCount-1" class=" btn-sm btn-primary" :class="{disable: pageNumber >= pageCount-1}">Next</button>
                </div>

                <div class="paginateNum">
                    <span v-for="(n,i) in pageCount" :key="i" :class="{active: i == pageNumber}">{{n}}</span>
                </div>
                <div>&nbsp;</div>
            </div>
        </div>
    </div>
</template>

<script>
    import { ref, onMounted, computed } from 'vue';
    export default {
        setup() {
            const swiper = ref(null);
            const pageNumber = ref(0);
            const size = 5;

            const places = [
                {
                    images : [
                            require('@/assets/images/destination/bago/shwe_maw_daw_pagoda/1.jpg'),
                            require('@/assets/images/destination/bago/shwe_maw_daw_pagoda/2.jpg'),
                            require('@/assets/images/destination/bago/shwe_maw_daw_pagoda/3.jpg'),
                            require('@/assets/images/destination/bago/shwe_maw_daw_pagoda/2.jpg'),
                        ],
                    title: `ဆုတောင်းပြည့် ရွှေမော်ဓောစေတီတော်မြတ်ကြီး`,
                    content: `ပဲခူးမြို့ ဆုတောင်းပြည့် ‌ရွှေမော်ဓောစေတီတော်မြတ်ကြီးသည် မြန်မာနိုင်ငံရှိ တန်ခိုးကြီးဘုရားများ အနက် တစ်ဆူအပါအဝင်ဖြစ်ပြီး         မြန်မာနှင့်အရှေ့တောင်အာရှတွင် ဉာဏ်တော်အမြင့်ဆုံး စေတီဖြစ်သည်။ စေတီတော်မြတ်ကြီး၏ ဉာဏ်တော်မှာ (၃၇၃)ပေ (၉)လက်မမြင့်ပြီး မြေပေါက်စေတီ အမျိုးအစားဖြစ်သည်။
	                        မဟာသက္ကရာဇ် ၁၀၉ ခုနှစ်တွင် ဂေါတမမြတ်စွာဘုရားထံမှ ကုန်သည်ညီနောင် မဟာသာလနှင့် စူဠာသာလရရှိခဲ့သော ဆံတော်(၂)ဆူကို သထုံဘုရင် သီဟရာဇာ(သမန္တရာဇ်)မင်းက ဌာပနာခဲ့သည်။ သာသနာ့သက္ကရာဇ် ၂၃၇ ခုနှစ်တွင် မြတ်စွာဘုရား၏ သွားဓာတ်တော်(၁)ဆူနှင့် ဘီလူးရန်နိုင် ရုပ်ပွားတော်(၁)ဆူကို သထုံဘုရင် စူဠသီရီမာသောကမင်းက ဌာပနာခဲ့သည်။ 
                        ကောဇာသက္ကရာဇ် ၁၈၇ ခုနှစ်တွင် နန်းတက်သော သမ္မလမင်းလက်ထက်တွင် ဉာဏ်တော်ကို (၇၅) ပေ မှ (၈၁)ပေသို့ မြင့်တင်တည်ဆောက်ခဲ့သည်။
                        သက္ကရာဇ် ၃၄၄ ခုနှစ်တွင် နန်းတက်သော (အနုရာမ) မင်းလက်ထက်တွင် မြတ်စွာဘုရား၏ သွားဓါတ်တော် (၁)ဆူ ဌာပနာခဲ့သည်။
                        ရာဇာဓိရာဇ်ဘုရင်လက်ထက် သက္ကရာဇ် ၇၄၇ ခုနှစ်တွင် သီရိလင်္ကာ(ယခင်သီဟိုဠ်)နိုင်ငံမှ ပဏ္ဍုရာမမင်းက စွယ်တော်(၁)ဆူ ဓမ္မလက်ဆောင်ပေးပို့သဖြင့် ထပ်မံ၍ဌာပနာခဲ့သည်ဖြစ်ရာ “ဆံတော်၊ သွားဓါတ်တော်၊ စွယ်တော်” တို့ ကိန်းဝပ်ရာ စေတီတော်မြတ်ကြီး ဖြစ်ပါသည်။ <br>
                        ဆက်လက်၍ ဖူးမြှော်လေ့လာနိုင်သောနေရာများမှာ ဆုတောင်းပြည့် ဘီလူးရန်နိုင်ဘုရားနှင့် ယက္ခမယ်တော်ကြီး၊ ဗုဒ္ဓဂါယာမှ ပင့်ဆောင်လာသော မဟာဗောဓိပင်၊ ရွှေမော်ဓောစေတီပေါ်ရှိ ခေါင်းလောင်းများ၊ မဟာဃနကြေးမောင်းတော်ကြီး၊ မဏိကုဏ္ဍလသိုက်ချုပ် ဘိုးဘိုးကြီးနတ်နန်း၊ ကျောက်စာများ၊ ကျောက်ပန်းတောင်းဓမ္မာရုံ၊ ဒေါင့်လေးဒေါင့်ရှိ စေတီပုထိုးများ၊ ဆံတော်ပင့်ဆုံလည်၊ ရှင်ဥပ္ပဂုတ္တစံကျောင်းတော်၊ မုခ်ဦးတိုင်၊ ငှက်ပျောဖူးတော်ဟောင်းကြီး၊ မဟာသံသဇိနမုနိ သွန်းတော်မူ မြတ်စွာဘုရား၊ မဟာဇေယျမုနိပြည်လုံးချမ်းသာ သစ်ကနက်ရုပ်ပွားတော်၊ ပျော်ဘွယ်ကြီးဘုရား၊ မြသာလျောင်း ရုပ်ပွားတော်၊ နှီးဘုရား၊ ခြေတော်ရာ၊ စိတ္တသုခလျောင်းတော်မူ ရုပ်ပွားတော်၊ ကမာကူရ ဂျပန်ရုပ်ပွားတော်၊ ထီးပုံစေတီ၊ နဂါးရုံဘုရားတို့ကို ဖူးမြှော်လေ့လာနိုင်ပါသည်။`,
                },
                {
                    images : [
                            require('@/assets/images/destination/bago/shwe_tha_lyaung/1.jpg'),
                            require('@/assets/images/destination/bago/shwe_tha_lyaung/1.jpg'),
                            require('@/assets/images/destination/bago/shwe_tha_lyaung/1.jpg'),
                            require('@/assets/images/destination/bago/shwe_tha_lyaung/1.jpg'),
                        ],
                    title: `ရွှေသာလျောင်း ရုပ်ပွားတော်မြတ်ကြီး`,
                    content: `ရွှေသာလျောင်း ရုပ်ပွားတော်မြတ်ကြီးသည် ပဲခူးမြို့၊ မဇင်းရပ်ကွက်တွင် တည်ရှိသည်။ အရှေ့ဘက်တွင် မျက်နှာတော်ကျောင်းတိုက်၊ အနောက်ဘက်တွင် မဟာစေတီ(၁)လမ်း၊ တောင်ဘက်တွင် ခေါင်းရင်းတော်ကျောင်းတိုက်၊ မြောက်ဘက်တွင် မိုးကုတ်ဝိပဿနာ ခြေတော်ရင်းကျောင်းတိုက်တို့ တည်ရှိပါသည်။

                        ပင်းယမင်း သီဟသူလက်ထက် ပဲခူးစားတတိယမိဂါဒိဗ္ဗမင်းက တည်ခဲ့သည်။ မူလအလျားမှာ အတောင်(၃၀) ဖြစ်သည်။ ရုပ်ပွားတော်ကြီးကို နေဒဏ်၊ ရေဒဏ်မခံရလေအောင် အလျား အတောင်(၅၀) အနံအတောင်(၂၀)ရှိသော သစ်သားတန်ဆောင်း ဆောက်လုပ်ပေးခဲ့သည်။<br>
                        သက္ကရာဇ် (၆၉၀) တွင် သီဟသူ၏ သဘောတူညီချက်ဖြင့် ပုဂံမင်း စောမွန်နစ်သည် တန်ဆောင်းကို ရွှေချခဲ့သည်။ တိဿဘုရင်လက်ထက် သက္ကရာဇ် (၇၀၄)တွင် ရုပ်ပွားတော်အတွက် လယ်ပယ်(၂၀) လှူဒါန်းခဲ့သည်။
                        သက္ကရာဇ် (၇၁၈)ခုတွင် ဗညားဦးမင်းသည် ဘုရားတန်ဆောင်းကို ပြုပြင်မွမ်းမံပြီးပြသာဒ်ကို ရွှေချတော်မူခဲ့သည်။ ရာဇဓိရာဇ်မင်းဖြစ်ပြီးနောက်တစ်နှစ် သက္ကရာဇ် (၇၄၇) တွင် ရုပ်ပွားတော်အား ရွှေသင်္ကန်း ကပ်ခဲ့သည်။ သက္ကရာဇ် (၈၂၈) ခုနှစ်တွင် ဘုရင်မရှင်စောပုသည် တန်ဆောင်းဟောင်းကိုဖျက်၍ တန်ဆောင်းသစ်ကို ဆောက်လုပ် ခဲ့ပြီး ရွှေသင်္ကန်းလည်း ကပ်လှူခဲ့သည်။ သက္ကရာဇ် (၈၃၉)တွင် ဓမ္မစေတီမင်းသည် တန်ဆောင်းကြီးကို တောင်ဘက်နှင့် မြောက်ဘက်တွင် အဆောင်တစ်ခုစီဆက်၍ ဆောက်လုပ်တိုးချဲ့ခဲ့သည်။ သက္ကရာဇ် (၈၉၁)တွင် သုရှင်တကာရွတ်ပိမင်းမှ ရုပ်ပွားတော်ကို ရွှေသင်္ကန်းကပ်ခဲ့သည် သက္ကရာဇ်(၉၀၁)တွင် မင်းတရားရွှေထီးသည် ရုပ်ပွားတော်နှင့် တန်ဆောင်းကို ရွှေချကပ်လှူခဲ့သည်။`,
                },
                {
                    images : [
                            require('@/assets/images/destination/bago/Kanbawzathazi_palace/1.jpg'),
                            require('@/assets/images/destination/bago/Kanbawzathazi_palace/2.jpg'),
                            require('@/assets/images/destination/bago/Kanbawzathazi_palace/3.jpg'),
                            require('@/assets/images/destination/bago/Kanbawzathazi_palace/4.jpg'),
                        ],
                    title: `ကမ္ဘောဇသာဒီနန်းတော်`,
                    content: `ပဲခူးမြို့၏ ကမ္ဘောဇသာဒီနန်းတော်ကို ၁၅၅၆ ခုနှစ်တွင် ဘုရင်နောင်မင်းတရားကြီးက တည်ဆောက်ခဲ့ပါသည်။ ယခင်က ခန်းဆောင်နှင့် ခန်းမများ (၇၆)ခန်းရှိခဲ့သော်လည်း ၁၅၉၉ ခုနှစ်တွင် မီးလောင်မှုဖြစ်ခဲ့ခြင်းကြောင့် ၁၉၉၂ ခုနှစ်တွင် ပြန်လည်တည်ဆောက်ခဲ့သည်။ ထိုနန်းတော်သည် ၁၆ ရာစုရှိ မြန်မာ့အင်ပါယာ၏ ခန့်ငြားထည်ဝါမှုကို ဖော်ပြနေသော ပြယုဒ်ဖြစ်ပြီး နန်းတော်ထဲတွင် ဘုရင့်ရွှေရထားလုံး ကဲ့သို့သော ပုံတူပစ္စည်းများစွာကို ပြန်လည်ပြုလုပ်၍ ခင်းကျင်းပြသထားပါသည်။`,
                },
                {
                    images : [
                            require('@/assets/images/destination/bago/Kalyani/1.jpg'),
                            require('@/assets/images/destination/bago/Kalyani/1.jpg'),
                            require('@/assets/images/destination/bago/Kalyani/1.jpg'),
                            require('@/assets/images/destination/bago/Kalyani/1.jpg'),
                        ],
                    title: `ကလျာဏီသိမ်တော်ကြီး`,
                    content: `ကလျာဏီသိမ်တော်ကြီးသည် ပဲခူးမြို့ အနောက်ပိုင်း၊ မဇင်းချောင်းရပ်ကွက်တွင် တည်ရှိပြီး ဗုဒ္ဓဘာသာဝင်တို့ အထွဋ်အမြတ်ထားရာ သမိုင်းဝင် ရှေးဟောင်းသိမ်တစ်ခုဖြစ်သည်။ ကလျာဏီသိမ်သည် ဘုရားဖူးများ သွားလာမှုများရာ နေရာတစ်ခုဖြစ်ပြီး ပါဠိ၊ မွန်ဘာသာတို့ဖြင့် ခရစ်နှစ် ၁၄၈၀ ခုနှစ်လောက်တွင် ရေးထိုးခဲ့သော ကလျာဏီကျောက်စာများ တည်ရှိရာ နေရာဒေသလည်းဖြစ်သည်။ ယင်းကျောက်စာများတွင် မဇ္ဈိမဒေသ သာသနာဝင်၊ ပုဂံ သာသနာဝင်၊ ဟံသာဝတီ သာသနာဝင်၊ ကလျာဏီသိမ်သမုတ်ခြင်း အကြောင်း၊ ရာမညတိုင်း စေတီသမိုင်း၊ ရွှေမော်ဓောစေတီသမိုင်း စသည်တို့ကို အကျယ်တဝင့် အသေးစိတ်ရေးထိုး ဖော်ပြထားပါသည်။`,
                },
                {
                    images : [
                            require('@/assets/images/destination/bago/Mahazedi/1.jpg'),
                            require('@/assets/images/destination/bago/Mahazedi/1.jpg'),
                            require('@/assets/images/destination/bago/Mahazedi/1.jpg'),
                            require('@/assets/images/destination/bago/Mahazedi/1.jpg'),
                        ],
                    title: `မဟာစေတီ`,
                    content: `ပဲခူးမြို့ရှိ မဟာစေတီတော်ကြီးကို ဘုရင့်နောင်မင်းတရားက မြန်မာသက္ကရာဇ် ၉၂၁ ခုနှစ် (ခရစ်နှစ် ၁၅၅၉)တွင် တည်ခဲ့သည်။ မဟာစေတီသည် ရွှေမော်ဓောစေတီပြီးလျှင် ဉာဏ်တော်အမြင့်ဆုံးနှင့် ထုထည် အကြီးဆုံးဖြစ်ပြီး ဧက ၆၀ ကျယ်ဝန်းသော ပရိဝုဏ်နှင့် ဉာဏ်တော် ၃၃၃ ပေမြင့်ကာ အဝန်းပေ ၁၅၀၀ ရှိသည်။
                    ဘုရင့်နောင်မင်းတရားသည် မဟာစေတီတည်ဆောက်ရာတွင် မွန်အမတ်ကြီး (၄)ဦးနှင့် မြန်မာအမတ်ကြီး (၄)ဦးကို စုစုပေါင်းစရိတ်ငွေ(၄၀၀)ဖြင့် မြေရှင်းလုပ်ငန်းများ ပြုလုပ်စေခဲ့သည်။ စေတီတည်နေရာကို ကိုယ်တိုင်စီမံကွပ်ကဲပြီး ဝါဆိုလဆန်း ၅ ရက်နေ့တွင် စတင်တူးဖော်ကာ ဝါဆိုလပြည့်ကျော် ၂ ရက်တွင် ရွှေအုတ်၊ ငွေအုတ်များဖြင့် စတင်တည်ခဲ့သည်။ <br>
                    မဟာစေတီအတွင်းတွင် သုဓမ္မာဇရပ်များ ဆောက်လုပ်ခဲ့ပြီး မဟာစေတီ၏ ဌာပနာပွဲကို အလှူတော်နှင့်အတူ စုစုပေါင်း(၆)ကြိမ် ပြုလုပ်ခဲ့သည်။ ထို့နောက် သက္ကရာဇ် ၉၂၅ ခုနှစ်တွင် လှုပ်ခဲ့သော ငလျင်ကြောင့် ထီးတော်ပြိုကျခဲ့ပြီး သီရိဇေယျနော်ရထာအမတ်ကြီးများက ပြင်ဆင်တင်လှူခဲ့သည်။
                    ဘုရင့်နောင်မင်းတရားသည် မိမိ၏ကိုယ်အလေးချိန်နှင့်ညီမျှသော ရွှေဖိုးကို မဟာစေတီသို့ လှူဒါန်းခဲ့ပြီး မဟာစေတီသည် သမိုင်းအတွင်း အကြိမ်ကြိမ်ပြုပြင်မွမ်းမံခြင်းခံရသည်။ ယနေ့တွင် မဟာစေတီတော်မြတ်ကြီး၏သမိုင်းကို ပရိဝုဏ်အတွင်းရှိ “ပဲခူးမြို့ မဟာစေတီတော်မြတ်ကြီး သမိုင်းအကျဉ်း ကျောက်စာ” တွင် ဖတ်ရှုနိုင်ပါသည်။`,
                },
                {
                    images : [
                            require('@/assets/images/destination/bago/Hinthagon_Pagoda/1.jpg'),
                            require('@/assets/images/destination/bago/Hinthagon_Pagoda/2.jpg'),
                            require('@/assets/images/destination/bago/Hinthagon_Pagoda/3.jpg'),
                            require('@/assets/images/destination/bago/Hinthagon_Pagoda/2.jpg'),
                        ],
                    title: `ဆုတောင်းပြည့် ဟင်္သာကုန်းစေတီတော်မြတ်ကြီး`,
                    content: `ဟင်္သာကုန်းစေတီတော်မြတ်ကြီးသည် ပဲခူးမြို့၏ အထင်ကရဘုရားတစ်ဆူဖြစ်ပြီး အမည်မှာ ဒဏ္ဍာရီလာ ဟင်္သာငှက်ကို အစွဲပြုကာပေးထားသည်။ ဟင်္သာကုန်းစေတီတော်ကြီးအား ဘုရင့်နောင်မင်းတရား လက်ထက် မြန်မာသက္ကရာဇ် ၉၂၄ ခုနှစ်၊ တပေါင်းလပြည့်နေ့ (၁၅၆၂ ခုနှစ်၊ ဖေဖော်ဝါရီ လ ၁၇ ရက်)တွင် တည်ထားကိုးကွယ်ခဲ့ပါသည်။
	                အလောင်းမင်းတရား ဦးအောင်ဇေယျသည် မြန်မာသက္ကရာဇ် ၁၁၁၈ ခုနှစ်၊ ပြာသိုလဆန်း ၂ ရက်၊ (၁၇၅၆ ခုနှစ်၊ ဒီဇင်ဘာလ ၂၂ ရက်)တွင် ပြန်လည်မွမ်းမံခဲ့သည်။ ထို့နောက် ရသေ့ကြီး ဦးခန္တီသည် မြန်မာသက္ကရာဇ် ၁၂၈၅ ခုနှစ်တွင် ပြန်လည်မွမ်းမံခဲ့သည်။ `,
                },
                {
                    images : [
                            require('@/assets/images/destination/bago/Sein_Tha_Lyaung/1.jpg'),
                            require('@/assets/images/destination/bago/Sein_Tha_Lyaung/2.jpg'),
                            require('@/assets/images/destination/bago/Sein_Tha_Lyaung/1.jpg'),
                            require('@/assets/images/destination/bago/Sein_Tha_Lyaung/2.jpg'),
                        ],
                    title: `စိန်သာလျောင်းဘုရားကြီး`,
                    content: `စိန်သာလျောင်းဘုရားကြီးသည် မြန်မာနိုင်ငံရှိ တန်ခိုးကြီးဘုရားများအနက် တစ်ဆူဖြစ်ပြီး ပဲခူးတိုင်းဒေသကြီး၊ ပဲခူးမြို့တွင်တည်ရှိသည်။ စိန်သာလျောင်းဘုရားသည် ဉာဏ်တော်အတောင်(၁၀၀)ရှိ၍ ရှင်ပင်ပေါင်းလဲ ရုပ်ပွားဟုယူဆရပါသည်။ စိန်သာလျောင်း၏ ဒါယကာများမှာ ပုဂံစောနစ်မင်းနှင့် ပဲခူးဘုရင်ခံဒုတိယမြောက် မိဂါဒိပ္ပတို့ဖြစ်ကြသည်။ ယင်းပုဂံဘုရင်များ၏ နန်းစံခုနှစ်များမှာ ၆၆၂ ခုမှ ၆၉၃ ခုထိဖြစ်သည်။ စိန်သာလျောင်းကို ၆၆၃ ခုနှင့် ၆၇၃ ခုအတွင်း တည်သည်ဟု တွက်ချက်ရပါမည်။ ၎င်းဆင်းတုကို ကလျာဏီကျောက်စာ၌ ပါဋ္ဌိလို(မဟာဗုဒ္ဓရူပ)ဟု ရေးထိုးခဲ့သည်။

                    ပဲခူးမြို့ အရေးပိုင်ရုံး၊ ဝန်ထောက်ဦးဖြူနှင့် အမှုထမ်းများပါဝင်သည့် မဟာဒုက်အသင်းက ခြုံနွယ်သစ်ပင်များ ဖုံးအုပ်နေသော ရုပ်ပွားတော်ကို ပြန်လည်ပြုပြင်ပြီးသောအခါ စိန်သာလျောင်းဟု ဘွဲ့အသစ် ဆက်ကပ်ခဲ့ကြပါသည်။ ထိုနှစ်ကား ၁၂၃၉ ခုနှစ်ဖြစ်သည်။ `,
                },
                {
                    images : [
                            require('@/assets/images/destination/bago/Kyaik_Pun_Pagoda/1.jpg'),
                            require('@/assets/images/destination/bago/Kyaik_Pun_Pagoda/1.jpg'),
                            require('@/assets/images/destination/bago/Kyaik_Pun_Pagoda/1.jpg'),
                            require('@/assets/images/destination/bago/Kyaik_Pun_Pagoda/1.jpg'),
                        ],
                    title: `ရှေးဟောင်းသမိုင်းဝင် ကျိုက်ပွန်ဘုရားကြီး`,
                    content: `ရှေးဟောင်းသမိုင်းဝင် ကျိုက်ပွန်ဘုရားကြီးသည် ပဲခူးမြို့၊ ဥဿာမြို့သစ်၊ ပဲခူးမြို့၏ အနောက် တောင်ဘက် (၂)မိုင် (၆)ဖာလုံအကွာ ပဲခူး-ရန်ကုန်ကားလမ်းမကြီး၏ အနောက်ဖက် (၃)ဖာလုံခန့်တွင် တည်ရှိသည်။
	            ကျိုက်ပွန်ဆိုသည်မှာ မွန်ဘာသာစကားဖြစ်၍ မြန်မာဘာသာအားဖြင့် ဘုရားကြီးလေးဆူအားရည်စူး၍ တည်ထားကိုးကွယ်ခဲ့သော ရုပ်ပွားတော်ကြီး(၄)ဆူဖြစ်သည်။ ဘုရား(၄)ဆူဆိုသည်ကား ဘဒ္ဒကမ္ဘာတွင် ပွင့်တော်မူပြီးသော ကကုသန္ဓမြတ်စွာဘုရား၊ ကောဏဂမနမြတ်စွာဘုရား၊ ကဿပမြတ်စွာဘုရား၊ ဂေါတမ မြတ်စွာဘုရား ရှင်မြတ်တို့အား ရည်မှန်းထားတော်မူသော ရုပ်ပွားတော်(၄)ဆူသည် အရပ်မျက်နှာအသီးသီးသို့ မျက်နှာမူလျက် ကျောတော်များကပ်၍ တင့်တယ်စွာ စံတော်မူဟန်ဖြစ်သည်။ <br>
                ဆုတောင်းပြည့်ကျိုက်ပွန်ဘုရားကြီးသည် မြန်မာနိုင်ငံတွင်အကြီးမားဆုံး ထိုင်တော်မူ ရုပ်ပွားတော်ကြီးဖြစ်ပြီး၊ ဉာဏ်တော်အမြင့်ပေ (၆၀) (၄)ဆူနှင့်တကွ မဏ္ဍိုင်စေတီတော် ဖြစ်သည်။ သက္ကရာဇ်(၈၃၇)ခုနှစ်၊ တပို့တွဲလဆုတ်(၁)ရက်နေ့တွင် ဓမ္မစေတီမင်းကြီးမှ ဠာပနာတိုက် တည်ခဲ့ပါသည်။ သက္ကရာဇ်(၈၃၈)ခုနှစ်၊ ကဆုန်လဆန်း(၁၄)ရက် စနေနေ့တွင်ပြီးပါသည်။ `,
                },
                {
                    images : [
                            require('@/assets/images/destination/bago/Shwe_Gu_Gyi/1.jpg'),
                            require('@/assets/images/destination/bago/Shwe_Gu_Gyi/1.jpg'),
                            require('@/assets/images/destination/bago/Shwe_Gu_Gyi/1.jpg'),
                            require('@/assets/images/destination/bago/Shwe_Gu_Gyi/1.jpg'),
                        ],
                    title: `ရွှေဂူကြီးစေတီတော်မြတ်ကြီး`,
                    content: `ရွှေဂူကြီးစေတီတော်မြတ်ကြီးသည် ဟံသာဝတီပြည့်ရှင် ဓမ္မစေတီမင်းကြီး၏ ကောင်းမှုတော် ဖြစ်သည်။ သက္ကရာဇ်(၈၄၁)ခု၊ တန်ဆောင်မုန်းလဆန်း(၆)ရက် တနင်္လာနေ့တွင် ဘုရားရှင်၏ ဓာတ်‌တော်များနှင့်တကွ များစွာသောရတနာပစ္စည်းတို့ကို ဌာပနာထားသည်။ ရွှေဂူကြီး (ခေါ်) မဟာဗောဓိဂန္ဓကုဋီစေတီတော်မြတ်ကြီးနှင့်အတူ ဗုဒ္ဓဝင်နေရာဌာနများ၊ သတ္တဌာနနေရာတော်များအား ရည်မှန်းကိုးကွယ်သော အရံစေတီများစွာတည်ထားရန် ရွှေ ပိဿာ(၃၅၀) လှူဒါန်းတော်မူသည်။ သလည်းကုန်း အရပ်၌ နေရဉ္ဇရာမြစ်နှင့်တကွ သတ္တဌာနစသော ဗုဒ္ဓဝင်စေတီအပေါင်းကိုတည်စေပြီး သက္ကရာဇ်(၈၄၄)ခု၊ ဝါဆိုလဆန်း(၅)ရက်၊ တနင်္ဂနွေနေ့တွင် ရေစက်သွန်းချတော်မူသည်။ “ဟံသာဝတီမဟာဗောဓိ” ဟု ဓမ္မစေတီမင်းကြီး ကိုယ်တော်တိုင် ကဗ္ဗည်းမော်ကွန်း သမုတ်တော်မူခဲ့သည်။     <br>                                        
                    သာလွန်မင်းတရားလက်ထက် ဇိုင်ကနိုင်းမြို့စစ်တမ်းယူသော သက္ကရာဇ် ၉၉၄ ခုထိ “ မဟာဗောဓိ” ဟူ၍ပင်ခေါ်ခဲ့သည်။ သက္ကရာဇ်  ၁၁၁၈ ခု၊ ဦးအောင်ဇေယျ(အလောင်းဘုရား) ဟံသာဝတီသို့ ရောက် လာသောအခါ “ကျိုက်သလည်း” ဟုခေါ်ကြောင်း လက်ဝဲနော်ရထာ မှတ်တမ်းအရသိရသည်။ ဗြိတိသျှခေတ် သက္ကရာဇ် ၁၂၄၆ ခုလောက်တွင် ကျိုက်ပွန်ဘုန်းကြီး ဦးကဝိန္ဒက “ရွှေဂူကြီး” ဟု ဘွဲ့အသစ်ပေးခဲ့ရာမှ ယခုတိုင် ရွှေဂူကြီးဟု ခေါ်ဝေါ်ကြခြင်းဖြစ်ပါသည်။ `,
                },
                {
                    images : [
                            require('@/assets/images/destination/bago/San_Taw_Shin_Sulamuni/1.jpg'),
                            require('@/assets/images/destination/bago/San_Taw_Shin_Sulamuni/2.jpg'),
                            require('@/assets/images/destination/bago/San_Taw_Shin_Sulamuni/3.jpg'),
                            require('@/assets/images/destination/bago/San_Taw_Shin_Sulamuni/4.jpg'),
                        ],
                    title: `ဆံတော်ရှင်စူဠာမုနိစေတီ (ခေါ်) ရွှေအောင်ရွေးစေတီ`,
                    content: `ဆံတော်ရှင်စူဠာမူနိစေတီ (ခေါ်) ရွှေအောင်ရွေးစေတီသည် ပဲခူးမြို့၊ နန်းတော်ရာရပ်ကွက်၊ ခမွန်ဘောကုန်းတော်ပေါ်တွင် တည်ရှိသည်။ ပဲခူးမြို့၏ အရှေ့အလယ်တည့်တည့်တွင် တည်ရှိနေခြင်းဖြစ်ပြီး ရွှေမော်ဓောငယ် (သို့) ‌ရွှေအောင်ရွေးဘုရားဟုလည်း ခေါ်ဆိုကြသည်။ စေတီတော်သမိုင်းအရ ခရစ်နှစ် ၁၄၈၃ ခုနှစ်တွင် ဓမ္မစေတီမင်းကြီးက သီဟိုဠ်ကျွန်းမှရရှိသော မြတ်စွာဘုရားရှင်၏ ဆံတော်ဓါတ်ကို ဌာပနာ၍ တည်ထား ကိုးကွယ်ခဲ့သည်ဟုသိရပါသည်။ <br>                                        
                    ခရစ်နှစ် ၁၅၆၄ ခုနှစ်တွင် ငလျင်ဒဏ်ကြောင့် စေတီတော် ဖိနပ်တော်အထိ အက်ကွဲပျက်စီးခဲ့သဖြင့် ကောဇာသက္ကရာဇ် ၉၂၈ ခုနှစ်၊ တန်ဆောင်မုန်းလပြည့်ကျော် (၈)ရက်နေ့တွင် ဘုရင့်နောင်မင်းတရားကြီး ကိုယ်တော်တိုင် အုတ်မြစ်စီမင်္ဂလာပြု၍ ပြန်လည်တည်ထားကိုးကွယ်ခဲ့ရာ တပေါင်းလပြည့်ကျော် (၅)ရက်နေ့ တွင် ပြီးစီးခဲ့ပြီး ဆံတော်ရှင်စူဠာမုနိဟူ၍ ဘွဲ့အမည်ခေါ်တွင်ခဲ့သည်။ ခရစ်နှစ် ၁၅၉၀ ခုနှစ်တွင် မြေငလျင်ဒဏ် ခံရပြန်ကာ ငှက်ပျောဖူးကွဲ၍ ထီးတော်မြေခသဖြင့် ငါးဆူဒါယကာမင်းက ထီးတော်သစ် တင်လှူပူဇော်ခဲ့သည်။ ခရစ်နှစ် ၁၉၃၀ ခုနှစ်တွင် မြေငလျင်ဒဏ် ထပ်မံခံရပြန်ကာ စေတီတော်၏ ခေါင်းလောင်းပုံ အထက်ပိုင်းပြိုကျ ပျက်ဆီးခဲ့ပြီး ၁၉၇၇ ခုနှစ်တွင် အပျက်အဆီး ချုံနွယ်ပိတ်ပေါင်းများ၊ အုတ်ကျိုးများဖယ်ရှား ရှင်းလင်းခဲ့ကြရာမှ ဆင်ပျံရတနာရုပ်ထုနှင့်တွဲလျက် ဌာပနာပြုလုပ်ပူဇော်ထားသော ဗုဒ္ဓဆံတော်မြတ်အား ရှာဖွေတွေ့ရှိခဲ့သည်။  <br>
                    ထို့နောက်တွင် ပဲခူးမြို့ ကြခတ်ဝိုင်းဆရာတော်ဘုရားကြီးနှင့် ရွှေအောင်ရွေးဆရာတော်ကြီးတို့၏ သြဝါဒနှင့်အညီ ဆံတော်ရှင်မြတ်စေတီ ပြန်လည်တည်ဆောက်ရေးအဖွဲ့ဖွဲ့ကာ ဆံတော်ရှင်စူဠာမုနိ (ခေါ်) ရွှေအောင်ရွေး စေတီတော်မြတ်အား ထပ်မံတည်ထားကိုးကွယ်ခဲ့ကြသည်။ ဗုဒ္ဓမြတ်စွာ၏ ဆံတော်အစစ်အား ဘုရားကြီး၏ အနောက်ဘက်မုခ်တွင် အပတ်စဉ် တနင်္ဂနွေနေ့တိုင်း ညနေ(၅)နာရီအထိ မည်သူမဆို ဖူးမျှော်ကြည်ညိုနိုင်ရန် ပူဇော်ထားရှိပါသည်။ `,
                },
                {
                    images : [
                            require('@/assets/images/destination/bago/Mya_Tha_Lyaun/1.jpg'),
                            require('@/assets/images/destination/bago/Mya_Tha_Lyaun/2.jpg'),
                            require('@/assets/images/destination/bago/Mya_Tha_Lyaun/1.jpg'),
                            require('@/assets/images/destination/bago/Mya_Tha_Lyaun/2.jpg'),
                        ],
                    title: `မြသာလျောင်း ရုပ်ပွားတော်မြတ်ကြီး`,
                    content: `‌မြသာလျောင်းဘုရားသည် ပဲခူးမြို့ အနောက်ဘက် မဇင်းရပ်ကွက်တွင် တည်ရှိသည်။ ဉာဏ်တော် အလျား(၂၇၀)ပေ၊ အမြင့်(၆၃)ပေရှိသော မြသာလျောင်းသည် ပဲခူးမြို့ရှိ ရွှေသာလျောင်း၊ မြသာလျောင်း၊ စိန်သာလျောင်းဟူ၍ လျောင်းတော်မူ (၃)ဆူရှိသည့်အနက် အရွယ်အစား ပိုမိုကြီးမားသဖြင့် ရသေ့ကြီးဦးခန္တီက “နောင်တော်ကြီး”ဟု ဘွဲ့အမည်ပေးခဲ့ပါသည်။
                    <br>                                        
                    သမိုင်းဝင် နောင်တော်ကြီးမြသာလျောင်း ရုပ်ပွားတော်မြတ်ကြီးသည် သမိုင်းအထောက်အထားများ အရ လွန်ခဲ့သောနှစ်ပေါင်း (၁၀ဝဝ)ကျော်သက်တမ်း ပထမ ဟံသာဝတီပြည်ခေတ် မိဂါဒိပ္ပ မင်းငယ်လက်ထက် တွင် စတင်တည်ထောင်ခဲ့ပြီး သမိုင်းခေတ်အပြောင်းအလဲများအရ ပျက်စီးယိုယွင်းနေသည်ကို ဒုတိယ ဟံသာဝတီခေတ် ဓမ္မစေတီမင်းလက်ထက်တွင် ပြန်လည်ပြုပြင်ခဲ့ကြောင်း မှတ်သားရပါသည်။ ထိုမှတဖန် ကာလကြာရှည်သော်မင်းဆက်များ ပျက်စီးခဲ့ခြင်းနှင့် ဒုတိယကမ္ဘာစစ် စစ်ဘေးစစ်ဒဏ်ကြောင့် ပြန်လည် ပျက်စီးယိုယွင်းခဲ့ရပြီး ဘုရားကြီးမှာ သလွန်တော်ပါ ကုန်းမြေအဖြစ်သာ ကျန်ရှိခဲ့ကြောင်းသိရှိရသည်။ <br>
                    နောင်တော်ကြီး မြသာလျောင်း ရုပ်ပွားတော်မြတ်ကြီးအား ၂၀ဝ၂ ခုနှစ်တွင် နိုင်ငံတော်အကြီးအကဲ များ၏ လမ်းညွှန်ကြီးကြပ်ကူညီထောက်ပံ့မှုဖြင့် အလှူရှင် အဂ္ဂမဟာသီရိသုဓမ္မသိင်္ဂီ ဒေါ်ခင်ကြည် မိသားစုတို့၏ မတည်လှူဒါန်းမှု၊ (၇)ရက်သားသမီး ပြည်သူပြည်သားအပေါင်းတို့၏ ထက်သန်သော စုပေါင်းသဒ္ဓါ စွမ်းအားတို့ဖြင့် ရုပ်ပွားတော်မြတ်ကြီးကို စတင်တည်ဆောက်ခဲ့ပါသည်။ (၂၀ဝ၄)နှစ်တွင် နောင်တော်ကြီး မြသာလျောင်း လျောင်းတော်မူဘုရားကြီး ရုပ်လုံးတော် ပွင့်ထွန်းပေါ်ပေါက်လာခဲ့ပါသည်။ `,
                },
                {
                    images : [
                            require('@/assets/images/destination/bago/Shwe_San_Taw/1.jpg'),
                            require('@/assets/images/destination/bago/Shwe_San_Taw/1.jpg'),
                            require('@/assets/images/destination/bago/Shwe_San_Taw/1.jpg'),
                            require('@/assets/images/destination/bago/Shwe_San_Taw/1.jpg'),
                        ],
                    title: `ရွှေဆံတော်စေတီတော်မြတ်ကြီး`,
                    content: `တောင်ငူမြို့ရှိ ရွှေဆံတော်ဘုရားကို ဘုရင့်နောင်မင်းတရားကြီး၏ ညီတော် တောင်ငူမင်းသီဟသူရ မဟာဓမ္မရာဇာဘွဲ့ခံ ဘုရင်မင်းခေါင်သည် သက္ကရာဇ် ၉၃၂ ခုနှစ် တပေါင်းလပြည့်နေ့တွင် အုတ်မြစ်ချ တည်တော်မူ၍ သက္ကရာဇ် ၉၃၅ ခုနှစ် တပေါင်းလပြည့်နေ့တွင် ထီးတင်တော်မူသည်။ ဘုရင့်နောင်မင်းတရားကြီးသည် သက္ကရာဇ် ၉၃ဝ ပြည့်နှစ်တွင် သိန်းဃိုဠ်မင်း ဓမ္မပါလဆက်သသော ဆံတော်ရှစ်ဆူအနက် လေးဆူသောဆံတော်များကို ညီတော် ပြည်မင်း၊ အင်းဝမင်း၊ မုတ္တမမင်းနှင့် တောင်ငူမင်းတို့ထံ ကိုးကွယ်တော်မူရန် ဆံတော်တစ်ဆူကျစီ ပေးသနားတော်မူခဲ့ရာမှ တောင်ငူမင်းသည် မိမိရရှိသော ဆံတော်မြတ်ကို ဌာပနာ၍ တည်ထားခဲ့ခြင်းဖြစ်သည်။
                    <br>                                        
                    ဆံတော်ရှင်ဘုရား၏ လုံးပါတ်တော်မှာ သံတောင် ၁၂ဝ မြင့်ပြီး သံတောင်ကိုးတောင်ရှိ စေတီရံ ၂ဝ ရှိသည်။ အောက်ပန်းတင်ခုံအရှေ့မှ အနောက်သို့ တာပေါင်း ၄ဝ၊ တောင်မှမြောက်သို့ တာပေါင်း ၄ဝ စီ ရှိသည်။ ဘုရားကြီး၏ အနောက်မြောက်ထောင့်တွင် မဟာဗောဓိညောင်ပင်ကို စိုက်သည်။ ဘုရားကြီး၏ အရှေ့တောင် ထောင့်၊ အရှေ့မြောက်ထောင့်၊ အနောက်တောင်ထောင့်၊ အနောက်မြောက်ထောင့်အရပ်တို့တွင် ရေတွင်း လေးတွင်း တူးတော်မူသည်။ ဘုရားကြီး၏ လေးမျက်နှာမုခ်အထွက်တို့တွင် ဇရပ်ကြီးလေးဆောင်ကို ဆောက်လုပ်ထားသည်။ <br>
                    ဘုရားကြီးတည်သော သက္ကရာဇ် ၉၃၅ ခုနှစ်မှသည် နောက်ဆုံးပြိုပျက်သော ၁၂၉၃ ခုနှစ်အတွင်း ယင်းဘုရားကြီးသည် သုံးကြိမ်တိုင်တိုင်ပြိုပျက်၍ အသစ်ထပ်မံငုံ၍ တည်ထားကြောင်းကို အတွင်းအုတ်ရိုး သုံးထပ်ကို ခန့်မှန်းကြည့်ခြင်းအားဖြင့် သိရလေသည်။ ထို့နောက် သက်ဆိုင်ရာ ခရိုင်အရာရှိကြီးများနှင့် ဂေါပကလူကြီးများ၏ ကြိုးပမ်းဆောင်ရွက်ချက် ကြောင့်လည်းကောင်း၊ နယ်သူနယ်သား၊ မြို့သူမြို့သားများ၏ စေတနာသဒ္ဓါဟုန်ကြောင့်လည်းကောင်း ၁၃၁၂ ခုနှစ်၊ တပေါင်းလဆန်း ၁၅ ရက် (ခရစ် ၁၉၅၁ ခုနှစ် မတ်လ ၂၂ ရက်)နေ့တွင် ထိုစဉ်က ဝန်ကြီးချုပ် ဦးနုကိုယ်တိုင် ရွှေဆံတော်စေတီကြီးကို အုတ်မြစ်ချနိုင်ခဲ့လေသည်။ ၁၃၁၆ ခုနှစ်၊ သီတင်းကျွတ်လကုန်တွင် စေတီတော်မြတ်ကြီး ငှက်ပျောဖူး၊ ကြာမှောက်ကြာလန်အထိ အချောကိုင်ရွှေချပြီးစီးသည်။ ၁၃၆၁ ခုနှစ်၊ တန်ဆောင်မုန်းလဆန်း ၉ ရက်နေ့အထိ ခုနစ်ရက်တိုင်တိုင် အလွန်စည်ကားသိုက်မြိုက်စွာ ထီးတော်တင် ကပ်လှူပွဲကြီး ဆင်ယင်ကျင်းပခဲ့လေသည်။ `,
                },
                {
                    images : [
                            require('@/assets/images/destination/bago/Kaung_Mu_Taw/1.jpg'),
                            require('@/assets/images/destination/bago/Kaung_Mu_Taw/1.jpg'),
                            require('@/assets/images/destination/bago/Kaung_Mu_Taw/1.jpg'),
                            require('@/assets/images/destination/bago/Kaung_Mu_Taw/1.jpg'),
                        ],
                    title: `ကောင်းမှုတော် စေတီတော်မြတ်ကြီး`,
                    content: `ကောင်းမှုတော် စေတီတော်မြတ်ကြီးသည် တောင်ငူမြို့၊ ကေတုမတီနန်းတော်အပြင်ဘက်၊ ကောင်းမှုတော်ရွာအတွင်းတွင် တည်ရှိပါသည်။ ဘုရင့်နောင်မင်းတရားကြီးက ပြည်မြို့ကို ပထမအကြိမ် တိုက်ခိုက်ရာ အောင်မြင်ခြင်းမရှိသဖြင့် တောင်ငူသို့ ပြန်လည်ဆုတ်ခွာခဲ့ရပြီး ဒုတိယအကြိမ် မတိုက်ခိုက်ခင် သက္ကရာဇ် ၁၅၅၁ ခုနှစ်၌ ဤကောင်းမှုတော်စေတီအား တည်ထားကိုးကွယ်ကာ စေတီတော်မှ အောင်မြေကိုနင်း၍ သွားရောက်တိုက်ခိုက်ရာ အောင်မြင်သဖြင့် ကောင်းမှုတော်စေတီ (သို့) ဘုရင့်နောင်အောင်မြေဟု ခေါ်တွင်သည်ဟုသိရပါသည်။ ခရစ်နှစ် ၁၆၀၂ ခုနှစ်တွင် ဘုရင့်နောင်၏တူတော် ရွှေနန်းတည်မင်းတရားနှင့် မိဖုရားတို့မှ ဉာဏ်တော်ငါးတောင် နှစ်မိုက်မြှင့်၍ ပြုပြင်မွမ်းမံခဲ့သည်။ ဗြိတိသျှလက်ထက်တွင် စေတီတော်သည် ပျက်စီးယိုယွင်း၍ ခြုံနွယ်များ ဖုံးလွှမ်းနေခဲ့သည်။ မြန်မာသက္ကရာဇ် ၁၂၄၁ ခုနှစ် (အေဒီ ၁၈၇၉) တွင် ရခိုင်စုရွာသား ဦးဖိုးချွန်းက ချုံနွယ်များဖုံးလွှမ်းနေသော စေတီတော်ကို ပြန်လည်တွေ့ရှိခဲ့သဖြင့် မြို့သူမြို့သားများက ဝိုင်းဝန်းပြုပြင်မွမ်းမံ၍ ထီးတော်သစ် တင်လှူပူဇော်ခဲ့ကြ ပါသည်။
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/bago/Mya_See_Khone/1.jpg'),
                            require('@/assets/images/destination/bago/Mya_See_Khone/2.jpeg'),
                            require('@/assets/images/destination/bago/Mya_See_Khone/3.jpg'),
                            require('@/assets/images/destination/bago/Mya_See_Khone/2.jpeg'),
                        ],
                    title: `မြစည်းခုံစေတီတော်မြတ်ကြီး`,
                    content: `ကောဇာသက္ကရာဇ် ၉၀၇ ခုနှစ်တွင် ကေတုမတီမြို့အတွင်း တောင်ငူဘက်မြို့ရိုးအနီး မောင်းမကန် အနောက်ဘက်ကုန်းတော် ဇောင်ချမ်းတောင်ရပ်၊ (၁၄)ရပ်ကွက်၊ တောင်ငူမြို့တွင် မြစည်းခုံစေတီတော်ကို တောင်ငူဘုရင်ခံ မင်းရဲသိင်္ခသူ(မင်းရဲသီဟသူ)က တည်ထားကိုးကွယ်ခဲ့သည်။ ဉာဏ်တော် သံတောင် ၉၀ လုံးပါတ်တော် သံတောင် ၁၅၀ ရှိသည်။ မြတ်စွာဘုရား၏ သရီရဓါတ်တော်မွေတော်များ ထူးမြတ်သော ရတနာပေါင်းစုံကို ဌာပနာ၍ စေတီတော်တည်ခဲ့သည်။ ဌာပနာသော ရတနာများထဲတွင် အထက်ဌာပနာတိုက်၌ ထူးမြတ်သော “မြဘုရား” ၊ အောက်ဌာပနာတွင် “မြပုခက်” တို့ပါဝင်သည်ကို အကြောင်းပြု၍ စေတီတော်ကြီးကို “မြစည်းခုံ” ဟု ဘွဲ့တော်တွင်ခြင်း ဖြစ်ပါသည်။<br>
                    ဂန္ဓကုဋီတိုက်အတွင်း ဂြိုလ်တိုင်(၈)တိုင်တွင် ရုပ်ပွား‌တော်အားပူဇော်ရန် ဆီးမီး၊ ရေချမ်းများ ကပ်လှူနိုင်ပြီး ရွှေသင်္ကန်းများကိုလည်း အမျိုးသားများ ကိုယ်တိုင်ကိုယ်ကျ ကပ်လှူနိုင်ပါသည်။ အရှေ့ဘက် အာရုံတန်ဆောင်း၌ မှန်စီရွှေချပုထိုး‌တော်ကြီးအဖြစ် ၁၃၂၆ ခုနှစ်တွင် မြို့သူမြို့သားကုသိုလ်ရှင်အပေါင်းတို့မှ ဆောက်လုပ်လှူဒါန်းပါသည်။ တောင်ငူမြို့၏ တစ်ဆူတည်းသော မှန်စီရွှေချ ပုထိုး‌‌တော်ကြီးဖြစ်ပါသည်။
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/bago/Myat_Saw_Nyi_Naung/1.jpg'),
                            require('@/assets/images/destination/bago/Myat_Saw_Nyi_Naung/2.jpg'),
                            require('@/assets/images/destination/bago/Myat_Saw_Nyi_Naung/3.jpg'),
                            require('@/assets/images/destination/bago/Myat_Saw_Nyi_Naung/2.jpg'),
                        ],
                    title: `မြတ်စောညီနောင်စေတီတော်မြတ်ကြီး`,
                    content: `မြတ်စောညီနောင်စေတီတော်သည် တောင်ငူမြို့ရှိ ပေါင်းလောင်းမြစ်၏ အရှေ့ဘက်တွင် တည်ရှိသည်။ နောင်တော်စေတီနှင့် ညီတော်စေတီတို့ ဖြစ်ကြသည်။ အကျယ်စူဠပုံ၊ မဟာပုံညီနောင်တို့က လျှောက်ထားသဖြင့် မြတ်စွာဘုရားသည် သုနာပရန္တတိုင်းသို့ ကြွတော်မူ၏။ ထို့နောက် ပေါင်းလောင်း မြစ်ဖျားတွင် ရပ်တန့်ကာ ကြက်မင်းဖြစ်စဉ်အခါက ကျက်စားတော်မူသည့်နေရာဖြစ်ကြောင်း မိန့်ကြားတော်မူ၏။ သီရိဓမ္မာအသောကမင်းကြီးသည် အဇာတသတ်မင်း မြှုပ်နှံထားသည့် ဓာတ်တော်များကို ဖော်ထုတ်ကာ စေတီတော်တည်ရန် အကြီးအကဲတို့ကို ဓာတ်တော်များ ဖြန့်ဝေခဲ့သည်။<br>
                    ထိုအခါ တောင်ငူဒေသရှိ မြတ်လှရွာ၊ စောလှရွာအုပ်၊ ကျောက်ဖားရွာအုပ်တို့သည် ဓာတ်တော်များကို ပူဇော်ခွင့်ရခဲ့ကြသည်။ ထို့နောက် မြတ်စွာဘုရား မိန့်ကြားတော်မူခဲ့သည့်နေရာတွင် စေတီတော်တည်ကာ ဓာတ်တော်များကို ဌာပနာထည့်ခဲ့ကြသည်။ အစ်ကိုဖြစ်သူ နောင်တော်မြတ်လှ (မြတ်လှရွာအုပ်) တည်သော နောင်တော်စေတီနှင့် ညီတော်စောလှ (စောလှရွာအုပ်) တည်သော စေတီတော်တို့ကို “မြတ်စောညီနောင် စေတီတော်”ဟု ခေါ်ကြသည်။ မြတ်လှ၊ စောလှတို့၏ မိခင်တည်သည့် စေတီတော်ကိုမူ “မယ်တော်စေတီ” ဟု ခေါ်ခဲ့ကြသည်။ ဦးရီးတော် ဦးကျောက်ဖားတည်ခဲ့သည့် စေတီတော်ကိုမူ “ရှင်ပင်ကျောက်ဖား” ဟု ခေါ်ခဲ့ရာမှ “ရှင်ပင်ကျောက်ဆောက်” ဟု ခေါ်တွင်ခဲ့သည်။
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/bago/Mahar_Muni_Kay_La_Zarti/1.jpg'),
                            require('@/assets/images/destination/bago/Mahar_Muni_Kay_La_Zarti/2.jpg'),
                            require('@/assets/images/destination/bago/Mahar_Muni_Kay_La_Zarti/1.jpg'),
                            require('@/assets/images/destination/bago/Mahar_Muni_Kay_La_Zarti/2.jpg'),
                        ],
                    title: `မဟာမုနိကေလဇာတီဘုရားကြီး`,
                    content: `မဟာမုနိကေလဇာတီစေတီတော်မြတ်ကြီးသည် တောင်ငူမြို့၊ အမှတ်(၅)ရပ်ကွက်၊ ဘုရားလမ်းနှင့် (၂)လမ်းထောင့်တွင် တည်ရှိပါသည်။ မဟာမုနိကေလဇာတီဘုရား တည်ထားတော်မူသော ကေလာသ ကုန်းတော်သည် ရှေးယခင်နှစ်ပေါင်းများစွာက တောင်ဖြစ်ခဲ့သည်၊၊<br>
                    မဟာမုနိကေလဇာတီဘုရားကြီးကို ဆင်ဖြူရှင်ဘုရင့်နောင်နှင့် မိဖုရားသခင်ကြီးတို့မှ ကေလာသကုန်းတော်၌ တည်ထားကိုးကွယ်ခဲ့ပြီး မြန်မာသက္ကရာဇ် (၉၁၄)ခုနှစ်၊ တော်သလင်းလပြည့်နေ့တွင် ပြီးမြောက်အောင်မြင်ခဲ့ပါသည်။ မူလဘွဲ့တော်မှာ “မဟာမုနိကေလဘုရား”ဟု တွင်ခဲ့လေသည်။  <br>
                    သက္ကရာဇ်(၉၃၂)ခုနှစ်တွင် သီဟိုဠ်ဘုရင်ထံမှရရှိသော ဓာတ်တော်များကို ကေတုမတီမြို့ဆီသို့ ခမ်းနားစွာပင့်ဆောင်လာပြီး ဌာပနာတည်ကာ ဉာဏ်တော်(၇)တောင်မြင့်သော စေတီအဖြစ် ပြုပြင်တည်ထားတော်မူခဲ့ပါသည်။ မူလဘွဲ့တော်ဖြစ်သော “မဟာမုနိကေလဘုရား” မှ “မဟာမုနိကေလဇာတီ” ဟူ၍ ပြောင်းလဲသမုတ်ခဲ့လေသည်။
                    `,
                },
                
            ];

            const nextPage = () => {
                pageNumber.value++;
            }

            const prevPage = () => {
                pageNumber.value--;
            }

            const pageCount = computed(() => {
                let l = places.length
                let s = size;
                return Math.ceil(l/s);
            })

            const paginatedData = computed(() => {
                let start = pageNumber.value * size;
                let end = start + size;

                return places.slice(start, end);
            })

            onMounted(() => {
                swiper.value = new Swiper('.place-swiper', {
                    speed: 600,
                    loop: true,
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false
                    },
                    slidesPerView: 'auto',
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                        type: 'bullets',
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },

                        1200: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        }
                    }
                });
            });

            
            return {swiper, paginatedData, nextPage, prevPage, pageCount, pageNumber };
        },
    };
</script>

<style >
    .hero-section {
        position: relative;
    }

    .destination .banner {
        width: 100%;
        height: 100vh;
        object-fit: cover;
        filter: brightness(.8);
    }

    .destination .content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .destination .content .hero-header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .destination .content .icon {
        width: 150px;
        height: 150px;
        object-fit: cover;
    }

    .destination .hero-header h3 {
        font-family: 'Noto Serif Myanmar', serif;
        font-weight: 900;
        margin-top: 10px;
        font-size: 40px;
        letter-spacing: 7px;
    }

    .destination .hero-header h2 {
        font-family: 'Staatliches', cursive;
        font-size: 68px;
        letter-spacing: 6px;
    }

    .destination .places {
        padding: 60px 0% 20px;
    }

    /* -------pagination --------- */
    .destination .paginate {
        width: 75%;
        margin: 20px auto 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .destination .paginate button {
        padding: 4px 20px;
        border: 1px solid rgb(43, 125, 219);
        background-color: rgb(43, 125, 219);
        margin-right: 7px;
        border-radius: 5px;
    }

    .destination .paginate button.disable {
        background-color: rgb(105, 145, 190);
    }

    .destination .paginate .paginateNum {
        display: flex;
        gap: 10px;
    }

    .destination .paginate .paginateNum span {
        padding: 10px 15px 5px;
       font-weight: bold;
    }

    .destination .paginate .paginateNum span.active {
       background: rgb(43, 125, 219);
       color: #fff;
       border-radius: 5px;
    }

    .destination .place-card-wrapper {
        width: 75%;
        margin: 10px auto;
    }

    .destination .place-card {
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 20px;
        background: rgba(138, 201, 240, 0.2);
        padding: 20px 10px 10px;
        border-radius: 7px;
        margin-bottom: 20px;
        height: 100%;
    }

    .destination .place-card.odd {
        flex-direction: row-reverse;
    }

    .destination .place-img {
        width: 500px;
    }

    .destination .place-card img {
        width: 500px;
        height: 300px;
        border-radius: 7px;
        transition: .4s ease;
        object-fit: cover;
    }

    .destination .place-card img:hover {
        transform: scale(1.3);
    }

    .destination .place-content {
        display: flex;
        flex-direction: column;
        height: 100% !important;
    }

    .destination .place-content h2 {
        font-size: 28px;
        font-weight: bold;
        font-family: 'Noto Serif Myanmar', serif;
        padding-top: 30px;
        margin-top: 20px;
        background: -webkit-linear-gradient(330deg,#c0991a, #d39d28,#d39d28);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .destination .place-content p {
        font-size: 14px;
        text-align: justify;
    }







    /* scroll down animatin */

    .destination .scroll-down {
        text-align: center;
    }

    .destination .scroll-down .container {
        position: relative;
        width: 24px;
        height: 24px;
      }
      
      .destination .scroll-down .chevron {
        position: absolute;
        width: 28px;
        height: 8px;
        opacity: 0;
        transform: scale3d(0.5, 0.5, 0.5);
        animation: move 3s ease-out infinite;
      }
      
     .destination .scroll-down .chevron:first-child {
        animation: move 3s ease-out 1s infinite;
      }
      
     .destination .scroll-down .chevron:nth-child(2) {
        animation: move 3s ease-out 2s infinite;
      }
      
     .destination .scroll-down .chevron:before,
     .destination .scroll-down .chevron:after {
        content: ' ';
        position: absolute;
        top: 0;
        height: 100%;
        width: 51%;
        background: #fff;
      }
      
     .destination .scroll-down .chevron:before {
        left: 0;
        transform: skew(0deg, 30deg);
      }
      
     .destination .scroll-down .chevron:after {
        right: 0;
        width: 50%;
        transform: skew(0deg, -30deg);
      }
      
      @keyframes move {
        25% {
          opacity: 1;
      
        }
        33% {
          opacity: 1;
          transform: translateY(30px);
        }
        67% {
          opacity: 1;
          transform: translateY(40px);
        }
        100% {
          opacity: 0;
          transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
        }
      }
      
      .destination .scroll-down .text {
        display: block;
        margin-top: 75px;
        margin-left: -30px;
        font-family: "Helvetica Neue", "Helvetica", Arial, sans-serif;
        font-size: 12px;
        color: #fff;
        text-transform: uppercase;
        white-space: nowrap;
        opacity: .25;
        animation: pulse 2s linear alternate infinite;
        padding-top: 50px;
      }
      
      @keyframes pulse {
        to {
          opacity: 1;
        }
    }

    @media (max-width: 1600px) {
    
        .destination .content .icon {
            width: 110px;
            height: 110px;
            object-fit: cover;
        }
    
        .destination .hero-header h3 {
            margin-top: 10px;
            font-size: 30px;
            letter-spacing: 7px;
        }
    
        .destination .hero-header h2 {
            font-size: 58px;
        }
    
        .destination .places {
            padding: 40px 0% 20px;
        }
    
        /* -------pagination --------- */
        .destination .paginate {
            width: 82%;
            margin: 20px auto 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    
        .destination .paginate button {
            padding: 0px 15px;
            margin-right: 7px;
            font-size: 12px;
            height: 30px;
        }
    
        .destination .paginate .paginateNum {
            display: flex;
            gap: 5px;
        }
    
        .destination .paginate .paginateNum span {
            padding: 5px 15px 5px;
            height: 30px;
            font-size: 13px;
        }

        .destination .place-card-wrapper {
            width: 82%;
            margin: 0 auto;
        }
    
    
        .destination .place-card {
            gap: 20px;
            padding: 20px 10px 10px;
            margin-bottom: 20px;
        }
    
        .destination .place-img {
            width: 400px;
        }
    
        .destination .place-card img {
            width: 400px;
            height: 250px;
        }
    
        .destination .place-content h2 {
            font-size: 22px;
            padding-top: 15px;
        }
    
        .destination .place-content p {
            font-size: 12px;
            text-align: justify;
        }
    }

    @media (max-width: 1200px) {
        .destination .paginate {
            width: 95%;
        }

        .destination .place-card-wrapper {
            width: 95%;
            margin: 0 auto;
        }
    }

    @media (max-width: 990px) {
        .destination .content .icon {
            width: 150px;
            height: 150px;
            object-fit: cover;
        }

        .destination .hero-header h3 {
            font-size: 40px;
        }
    
        .destination .hero-header h2 {
            font-size: 68px;
        }

        .destination .place-img {
            width: 300px;
        }
    
        .destination .place-card img {
            width: 300px;
            height: 250px;
        }
    }

    @media (max-width: 650px) {
        .destination .content {
            position: absolute;
            top: 50%;
            left: 47%;
            transform: translate(-50%, -50%);
        }
        .destination .content .icon {
            width: 150px;
            height: 150px;
            object-fit: cover;
        }

        .destination .hero-header h3 {
            font-size: 25px;
        }
    
        .destination .hero-header h2 {
            font-size: 58px;
        }

        .destination .place-img {
            width: 200px;
        }
    
        .destination .place-card img {
            width: 200px;
            height: 200px;
        }

        .destination .place-content h2 {
            font-size: 18px;
            padding-top: 15px;
        }
    
        .destination .place-content p {
            font-size: 11px;
            text-align: justify;
        }
    }

    @media (max-width: 500px) {
    
        .destination .content {
            position: absolute;
            top: 35%;
            left: 36%;
        }

        .destination .content .icon {
            width: 120px;
            height: 120px;
            object-fit: cover;
        }
    
        .destination .hero-header h3 {
            font-weight: 900;
            margin-top: 10px;
            font-size: 40px;
            letter-spacing: 7px;
            text-align: center;
        }
    
        .destination .hero-header h2 {
            font-size: 48px;
            margin-top: -30px;
        }
    
        .destination .places {
            padding: 40px 0% 20px;
        }
    
        /* -------pagination --------- */
        .destination .paginate {
            width: 80%;
            margin: 20px auto 30px;
        }
    
        .destination .paginate button {
            padding: 2px 15px 7px;
            margin-right: 7px;
            height: 25px;
        }
    
        .destination .paginate .paginateNum {
            display: flex;
            gap: 0px;
        }
    
        .destination .paginate .paginateNum span {
            padding: 2px 15px 5px;
           height: 25px;
        }
    
        .destination .place-card-wrapper {
            width: 95%;
            margin: 0 auto;
        }
    
        .destination .place-card {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            padding: 20px 10px 10px;
            border-radius: 7px;
            margin: 0 20px 20px;

        }
    
        .destination .place-card.odd {
            flex-direction: column;
        }
    
        .destination .place-img {
            width: 100%;
        }
    
        .destination .place-card img {
            width: 100%;
            height: 250px;
            border-radius: 7px;
            object-fit: cover;
        }
    
        .destination .place-card img:hover {
            transform: scale(1);
        }
    
        .destination .place-content h2 {
            font-size: 22px;
            padding-top: 20px;
        }
    
        .destination .place-content p {
            font-size: 13px;
        }
    }

    @media (max-width: 350px) {
    
        .destination .content {
            position: absolute;
            top: 30%;
            left: 30%;
        }

        .destination .content .icon {
            width: 120px;
            height: 120px;
            object-fit: cover;
        }
    
        .destination .hero-header h3 {
            font-weight: 900;
            margin-top: 10px;
            font-size: 30px;
            text-align: center;
            letter-spacing: 3px;
        }
    
        .destination .hero-header h2 {
            font-size: 38px;
            margin-top: -30px;
        }
    
        .destination .places {
            padding: 40px 0% 20px;
        }
    
        /* -------pagination --------- */
        .destination .paginate {
            width: 85%;
            margin: 20px auto 30px;
        }
    
        .destination .paginate button {
            padding: 5px 10px 5px;
            margin-right: 7px;
            height: 25px;
            font-size: 10px;
        }
    
        .destination .paginate .paginateNum {
            display: flex;
            gap: 0px;
        }
    
        .destination .paginate .paginateNum span {
            padding: 5px 10px;
           height: 25px;
           font-size: 10px;
        }
    
        .destination .place-card-wrapper {
            width: 98%;
            margin: 0 auto;
        }
    
    
        .destination .place-img {
            width: 100%;
        }
    
        .destination .place-card img {
            width: 100%;
            height: 200px;
        }
    
    
        .destination .place-content h2 {
            font-size: 16px;
            padding-top: 20px;
        }
    
        .destination .place-content p {
            font-size: 11px;
        }
    }
</style>
