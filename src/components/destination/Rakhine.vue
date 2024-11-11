<template>
    <div class="destination">
        <div class="hero-section">
            <div class="banner">
                <img src="@/assets/images/destination/rakhine/banner.jpg" class="banner" alt="">
            </div>
            <div class="content">
                <div class="hero-header">
                    <img src="@/assets/images/destination/travel.gif" class="icon" alt="">
                
                    <h3>Places to Visit in</h3>
                    <h2>Rakhine</h2>
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
                            <div :class="`swiper place-swiper`" data-aos-delay="100">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide" v-for="(img, i) in card.images" :key="i">
                                        <img :src="img" class="float-start" alt="">
                                    </div>
                                </div>
                                <div class="swiper-pagination" id="swiper-paginate"></div>
                            </div>
                        </div>
                        <div class="place-content">
                            <h2>{{card.title}}  </h2>
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
    import { ref, onMounted, computed, watch } from 'vue';
    export default {
        setup() {
            const pageNumber = ref(0);
            const size = 5;
            const swiper = ref(null);

            const places = [
                {
                    images : [
                            require('@/assets/images/destination/rakhine/viewPoint/1.jpg'),
                            require('@/assets/images/destination/rakhine/viewPoint/1.jpg'),
                            require('@/assets/images/destination/rakhine/viewPoint/1.jpg'),
                            require('@/assets/images/destination/rakhine/viewPoint/1.jpg'),
                            require('@/assets/images/destination/rakhine/viewPoint/1.jpg'),
                            require('@/assets/images/destination/rakhine/viewPoint/1.jpg'),
                            require('@/assets/images/destination/rakhine/viewPoint/1.jpg'),
                            require('@/assets/images/destination/rakhine/viewPoint/1.jpg'),
                            require('@/assets/images/destination/rakhine/viewPoint/1.jpg'),
                            require('@/assets/images/destination/rakhine/viewPoint/1.jpg'),
                        ],
                    title: `ဗျူးပွိုင့်ကမ်းခြေအပန်းဖြေစခန်း`,
                    status: 0,
                    content: `ဗျူးပွိုင့်ကမ်းခြေသည် စစ်တွေမြို့၏ တောင်ဖက်အစွန်းဆုံး၊ ဘင်္ဂလားပင်လယ်အော်နှင့် ကုလားတန် မြစ်နဖူးကြားတွင်တည်ရှိပြီး ပွိုင့်ကမ်းခြေဟုလည်းလူသိများသည်။ ပွိုင့်ဟုခေါ်ဆိုရခြင်းမှာ မြို့၏အစွန်ဆုံး အပိုင်းတွင် ရှိသောကြောင့်ဖြစ်သည်။ <br>
                    ထိုကမ်းခြေတွင် ရှုခင်းခံစားနိုင်ရန် ရင်ပြင်ကျယ်တစ်ခုရှိပြီး ရှုခင်းကြည့်တာဝါ၊ မီးပြတိုက်၊ ရခိုင်ရိုးရာ အထိမ်းအမှတ်သင်္ကေတဖြစ်သည့် ရခိုင်ဒဏ္ဍာရီ ရခိုင်ဗျာလ်(နဝရူပဗျာလ်လည်း ခေါ်ဆိုကြသေးသည်) ရုပ်ထုနှင့် နပန်းထိုးသတ်နေသည့်ဟန် ရခိုင်ရိုးရာကျင်ရုပ်ထုကိုလည်း တွေ့ရှိနိုင်သည်။ ၎င်းအပြင် ရင်ပြင်တွင် ပလွေမှုတ်နေဟန်ရုပ်ထုကြီးနှင့် (၅)ပေခန့်ရှည်သော ရှေးဟောင်းအမြောက်တစ်ခုရှိသည်။ ထိုရင်ပြင်၏ အစွန်သည် တောင်ဖက်စွန်းစွန်းသို့ ဦးတည်လျက်ရှိပြီး ထိုတည့်တည့်တွင် လေးချမ်းတောင်ဟုခေါ်သော မီးပြတိုက်ဟောင်းလည်းရှိသည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/rakhine/ShweZedi/1.jpg'),
                            require('@/assets/images/destination/rakhine/ShweZedi/1.jpg'),
                            require('@/assets/images/destination/rakhine/ShweZedi/1.jpg'),
                            require('@/assets/images/destination/rakhine/ShweZedi/1.jpg'),
                            require('@/assets/images/destination/rakhine/ShweZedi/1.jpg'),
                            require('@/assets/images/destination/rakhine/ShweZedi/1.jpg'),
                            require('@/assets/images/destination/rakhine/ShweZedi/1.jpg'),
                            require('@/assets/images/destination/rakhine/ShweZedi/1.jpg'),
                            require('@/assets/images/destination/rakhine/ShweZedi/1.jpg'),
                            require('@/assets/images/destination/rakhine/ShweZedi/1.jpg'),
                        ],
                    title: `ရွှေစေတီဘုန်းကြီးကျောင်း`,
                    status: 0,
                    content: `ရွှေစေတီဘုန်းကြီးကျောင်းသည် စစ်တွေမြို့တွင်တည်ရှိပြီး ကျော်ကြားလှသော ဘုန်းကြီးကျောင်း တစ်ခုလည်းဖြစ်သည်။ ရွှေစေတီကျောင်းကို ၁၉၀၃ ခုနှစ်တွင် တည်ဆောက်ခဲ့ခြင်းဖြစ်သည်။ ရွှေစေတီ ဘုန်းကြီးကျောင်းတွင် ၁၉၂၀ ခုနှစ်မှ ၁၉၃၀ အတွင်း ဆရာတော်ဦးဥတ္တမ သီတင်းသုံးခဲ့သည်။ ဆရာတော်သည် နိုင်ငံရေးကို ပါဝင်ပတ်သက်ခဲ့သည့် ပထမဆုံးသော ဘုန်းကြီးတစ်ပါးဖြစ်ပြီး ယနေ့ခေတ် နိုင်ငံရေး ခံယူချက်များကို ချမှတ်ခဲ့သူတစ်ဦးလည်းဖြစ်သည်။ ဆရာတော်အား မြန်မာနိုင်ငံလွတ်လပ်ရေးအတွက် ဦးဆောင်ဆောင်ရွက်ခဲ့သူ အမျိုးသားခေါင်းဆောင်တစ်ဦးအနေဖြင့် ယနေ့အချိန်အထိ သတ်မှတ်ထားကြဆဲ ဖြစ်သည်။ ယခုအခါ ဒေသခံများ၏အကျိုးကိုရည်မျှော်ကာ ဘုန်းတော်ကြီးသင်ကျောင်းအဖြစ် ဖွင့်လှစ်ထား သကဲ့သို့ ရခိုင်ယဉ်ကျေးမှုကျောင်းအဖြစ်လည်း ဖွင့်လှစ်ထားသည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/rakhine/LattWaeTaloneTaw/1.jpg'),
                            require('@/assets/images/destination/rakhine/LattWaeTaloneTaw/2.jpg'),
                            require('@/assets/images/destination/rakhine/LattWaeTaloneTaw/1.jpg'),
                            require('@/assets/images/destination/rakhine/LattWaeTaloneTaw/2.jpg'),
                            require('@/assets/images/destination/rakhine/LattWaeTaloneTaw/1.jpg'),
                            require('@/assets/images/destination/rakhine/LattWaeTaloneTaw/2.jpg'),
                            require('@/assets/images/destination/rakhine/LattWaeTaloneTaw/1.jpg'),
                            require('@/assets/images/destination/rakhine/LattWaeTaloneTaw/2.jpg'),
                            require('@/assets/images/destination/rakhine/LattWaeTaloneTaw/1.jpg'),
                            require('@/assets/images/destination/rakhine/LattWaeTaloneTaw/2.jpg'),
                        ],
                    title: `လက်ဝဲသလုံးတော်ဓာတ်စေတီ`,
                    status: 0,
                    content: `လက်ဝဲသလုံးတော်ဓာတ်စေတီသည် ရခိုင်ပြည်နယ်၊ စစ်တွေမြို့၏ ထင်ရှားသော စေတီတစ်ဆူ ဖြစ်သည်။ ကန်တော်ကြီးကန်အနောက်ဖက် အာကျပ်တော်တောင်ကုန်းထက်တွင် တည်ရှိသည်။ မဟာသက္ကရာဇ် ၁၂၃ ခုတွင် ဗုဒ္ဓမြတ်စွာဘုရားသည် ဓညဝတီဘုရင်ပြည့်ရှင် စန္ဒာသူရိယမင်း၏ ဖိတ်ကြားမှုဖြင့် ရခိုင်ပြည်သို့ ကြွချီတော်မူလေသည်။ လမ်းခုလတ် သေလာဂီရိကျောက်တော်တောင်သို့ ရောက်သောအခါ ရပ်နားပြီး ညီတော်အာနန္ဒာအား ဗျာဒိတ်စကားမိန့်ကြားခဲ့သည်။ နောင်အခါဝယ် ရခိုင်ပြည်အနှံ့၌ ငါ၏ ဓာတ်တော်များကို ဌာပနာကာ မဟာမုနိဘုရားကြီးအစ မဟာထီးဘုရားအဆုံး ၂၄၈ ဌာနတည်လတ္တံ့ဟု မိန့်ကြားတော်မူလေသည်။ ထိုအထဲတွင် ယခုသလုံးတော်ဓာတ်စေတီလည်း ပါဝင်လေသည်။ မြတ်စွာဘုရားက ငါသည် စူဠနန္ဒပဗ္ဗတတောင် (ယခု အာကျပ်တော်တောင်ကုန်းဖြစ်သည်) ပဒတ်မင်း ဖြစ်ခဲ့ဖူး၍ နောင်အခါဝယ် လက်ဝဲသလုံးတော်ဓာတ်စေတီ တည်လတ္တံ့ဟု ဗျာဒိတ်စကားဟောကြားခဲ့ လေသည်။  <br>
                    ၁၂၉၁ ခုနှစ်တွင် လိပ်ကျောသဏ္ဌာန် ကျောက်ဖျာကြီးကို ဗဟိုပြု၍ ဓာတ်တော်များ၊ ဆင်းတုများ၊ ရတနာများ ဌာပနာကာ တည်ထားကိုးကွယ်ခဲ့သည်။ ဌာပနာတိုက်ပိတ်ပြီးနောက် စေတီတော် စနေထောင့် ပေ(၃၀)အကွာတွင် ဓာတ်တော်ကြုပ်တစ်ခုရရှိခဲ့ရာ အရံစေတီ(၈)ဆူတွင် ဌာပနာခဲ့သည်။ လက်ဝဲသလုံးတော် ဓာတ်စေတီသည် အမြင့်(၁၈)တောင်၊ လုံးပတ်(၂၇)တောင်ရှိသည်။ ရခိုင်ကဆုန်လပြည့်နေ့သည် နှစ်စဉ် ကျင်းပမြဲ ပွဲတော်ရက်ဖြစ်သည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/rakhine/LawKaNandar/1.jpg'),
                            require('@/assets/images/destination/rakhine/LawKaNandar/1.jpg'),
                            require('@/assets/images/destination/rakhine/LawKaNandar/1.jpg'),
                            require('@/assets/images/destination/rakhine/LawKaNandar/1.jpg'),
                            require('@/assets/images/destination/rakhine/LawKaNandar/1.jpg'),
                            require('@/assets/images/destination/rakhine/LawKaNandar/1.jpg'),
                            require('@/assets/images/destination/rakhine/LawKaNandar/1.jpg'),
                            require('@/assets/images/destination/rakhine/LawKaNandar/1.jpg'),
                            require('@/assets/images/destination/rakhine/LawKaNandar/1.jpg'),
                            require('@/assets/images/destination/rakhine/LawKaNandar/1.jpg'),
                        ],
                    title: `လောကနန္ဒာစေတီတော်`,
                    status: 0,
                    content: `လောကနန္ဒာစေတီတော်သည် စစ်တွေမြို့၊ ရဲနွယ်စုရပ်ကွက်၊ မေယုလမ်းနှင့် သတ္တဌာနလမ်းထောင့် တွင်တည်ရှိသည်။ ၁၉၉၉ ခုနှစ်၊ ဖေဖေါ်ဝါရီလ (၂၈)ရက်နေ့တွင် စေတီတော်အား ရွှေထီးတော်တင်လှူ ပူဇော်ပြီးမြောက်ခဲ့ပါသည်။ စေတီတော်မှာ ရွှေတိဂုံစေတီတော်ပုံသဏ္ဍာန်ဖြစ်ပြီး အောက်ခြေတွင် လိုဏ်ဂူ ပြုလုပ်ထား၍  အရပ်လေးမျက်နှာ ဝင်ပေါက်‌တစ်ခုစီ ပြုလုပ်ထားသည်။ လိုဏ်ဂူနံရံတွင် ရှေးဟောင်း ရုပ်ပွားတော်များ၊ ရုပ်ထုများ ထုလုပ်ထားပြီး အလယ်မဏ္ဍိုင်ဘေးတွင် ဗုဒ္ဓရုပ်ပွားတော်များ ပူဇော်ထားသည်။ စေတီတော်သည် မြေပြင်မှ စိန်ဖူးတော်အထိ ဉာဏ်တော်အမြင့် ၁၀၈ တောင် (၁၆၂)ပေရှိသည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/rakhine/CulturalMusem/1.jpg'),
                            require('@/assets/images/destination/rakhine/CulturalMusem/2.jpg'),
                            require('@/assets/images/destination/rakhine/CulturalMusem/3.jpg'),
                            require('@/assets/images/destination/rakhine/CulturalMusem/4.jpg'),
                            require('@/assets/images/destination/rakhine/CulturalMusem/5.jpg'),
                            require('@/assets/images/destination/rakhine/CulturalMusem/6.jpg'),
                            require('@/assets/images/destination/rakhine/CulturalMusem/7.jpg'),
                            require('@/assets/images/destination/rakhine/CulturalMusem/8.jpg'),
                            require('@/assets/images/destination/rakhine/CulturalMusem/9.jpg'),
                            require('@/assets/images/destination/rakhine/CulturalMusem/10.jpg'),
                        ],
                    title: `ပြတိုက်`,
                    status: 0,
                    content: `စစ်တွေမြို့လမ်းမကြီးနှင့် ရေတွင်းလမ်းထောင့် မော်လိပ်ရပ်ကွက်တွင် တည်ရှိသည်။ ၁၉၉၅ ခုနှစ်တွင် ရခိုင်ပြည်နယ် စာကြည့်တိုက်နှင့် ယဉ်ကျေးမှုပြတိုက်အနေဖြင့် ကျောက်ဖြူမြို့တွင် စတင်ဖွင့်လှစ်ခဲ့ပြီး ၁၉၇၈ ခုနှစ်တွင် စစ်တွေမြို့သို့ပြောင်းရွှေ့ကာ လက်ရှိယဉ်ကျေးမှုပြတိုက်အဆောက်အအုံကို ၁၉၉၆ ခုနှစ်၊ ဖေဖေါ်ဝါရီလ (၁၉)ရက်နေ့၌ စတင်ဖွင့်လှစ်ခဲ့သည်။ ၄င်းပြတိုက်တွင် ရခိုင်တိုင်းရင်းသားမျိုးနွယ်(၇)စု၏ ဝတ်စားဆင်ယင်မှုများ၊ ရခိုင်အမျိုးသမီးများ၏ ဆံထိုးပုံစံများ၊ ရခိုင်လူမျိုးတို့၏ နေအိမ်တည်ဆောက်ပုံများ၊ ရခိုင်ရိုးရာဓလေ့ပွဲတော်များ၊ ရခိုင်ရိုးရာရက်ကန်းလုပ်ငန်းများ၊ ရခိုင်ရိုးရာကျင်အားကစားနှင့် အခြားသော အကြောင်းအရာများကို လေ့လာနိုင်သကဲ့သို့ ရခိုင်သမိုင်းဆိုင်ရာ အချက်အလက်များနှင့် ရှေးခေတ်ရခိုင်လူမျိုး များ၏ အသုံးအဆောင်တူရိယာပစ္စည်းများကိုလည်း ခင်းကျင်းပြသထားသည်။ <br>
                    ထို့ပြင်ယဉ်ကျေးမှုပြတိုက်အတွင်း အမျိုးသားစာကြည့်တိုက်ကိုပါ တွဲဖက်ဖွင့်လှစ်ထားပြီး ရခိုင်သမိုင်း ဆိုင်ရာ စာအုပ်စာပေများနှင့် အခြားသောသုတရသစာအုပ်များကိုလည်း အခမဲ့ငှားရမ်းဖတ်ရှုနိုင်သည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/rakhine/AtulaMarazein/1.jpg'),
                            require('@/assets/images/destination/rakhine/AtulaMarazein/2.jpg'),
                            require('@/assets/images/destination/rakhine/AtulaMarazein/1.jpg'),
                            require('@/assets/images/destination/rakhine/AtulaMarazein/2.jpg'),
                            require('@/assets/images/destination/rakhine/AtulaMarazein/1.jpg'),
                            require('@/assets/images/destination/rakhine/AtulaMarazein/2.jpg'),
                            require('@/assets/images/destination/rakhine/AtulaMarazein/1.jpg'),
                            require('@/assets/images/destination/rakhine/AtulaMarazein/2.jpg'),
                            require('@/assets/images/destination/rakhine/AtulaMarazein/1.jpg'),
                            require('@/assets/images/destination/rakhine/AtulaMarazein/2.jpg'),
                        ],
                    title: `အတုလမာရဇိန်ပြည်လုံးချမ်းသာဘုရားကြီး`,
                    status: 0,
                    content: `အတုလမာရဇိန်ပြည်လုံးချမ်းသာဘုရားကြီးသည် စစ်တွေမြို့၊ ဝင်္ကဘာကွင်းအနီး ကျောင်းတက်လမ်း ရပ်ကွက်အတွင်း တည်ရှိသည်။ ခရစ်သက္ကရာဇ် ၁၈၉၉ ခုနှစ်၊ မေလ (၁၇)ရက်နေ့တွင် ရွှေစေတီဆရာတော်၊ လမ်းမတော်ဆရာတော်၊ ပညာလင်္ကာရဆရာတော်တို့ ဦးဆောင်၍ ဂေါပကအဖွဲ့နှင့်တိုင်ပင်ပြီး စစ်တွေမြို့ အလယ်ရှိ မျာတာကန်ကို ဝယ်ယူမြေဖို့ကာ ကြေးနှင့် ရွှေ၊ ငွေ၊ ရတနာတို့ ပေါင်းစပ်သွန်းလုပ်၍ တည်ထားကိုးကွယ်ခဲ့သည်။ ဆင်းတုတော်၏ ဉာဏ်တော်မှာ (၉)တောင် (၁)မိုက်ရှိပြီး ပလ္လင်တော်အမြင့် (၆)တောင်ရှိသည်။ ကောဇာသက္ကရာဇ် ၁၂၇၂ ခုနှစ်၊ နတ်တော်လပြည့်နေ့တွင် သိမ်တော်ကြီးကို တည်ဆောက်ခဲ့သည်။ သွန်းလုပ်သည့်‌ ကြေးပိသာချိန်မှာ (၅၄၂၆) ပိသာဖြစ်ပြီး “ပြည်လုံးချမ်းသာ ဘုရားကြီး”ဟု ဘွဲ့အမည်ခေါ်တွင်ခဲ့ကြသည်။ (ပြည်-၅၊ လုံး-၄၊ ချမ်း-၂၊ သာ-၆) စသည့် သွန်းလုပ်သည့် ကြေးပိသာချိန်နှင့် ထူးခြားစွာ တိုက်ဆိုင်နေသည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/rakhine/UYeKyawThuMonastery/1.jpg'),
                            require('@/assets/images/destination/rakhine/UYeKyawThuMonastery/2.jpg'),
                            require('@/assets/images/destination/rakhine/UYeKyawThuMonastery/1.jpg'),
                            require('@/assets/images/destination/rakhine/UYeKyawThuMonastery/2.jpg'),
                            require('@/assets/images/destination/rakhine/UYeKyawThuMonastery/1.jpg'),
                            require('@/assets/images/destination/rakhine/UYeKyawThuMonastery/2.jpg'),
                            require('@/assets/images/destination/rakhine/UYeKyawThuMonastery/1.jpg'),
                            require('@/assets/images/destination/rakhine/UYeKyawThuMonastery/2.jpg'),
                            require('@/assets/images/destination/rakhine/UYeKyawThuMonastery/1.jpg'),
                            require('@/assets/images/destination/rakhine/UYeKyawThuMonastery/2.jpg'),
                        ],
                    title: `ဦးရဲကျော်သူကျောင်း (ခ) သံကျောင်း`,
                    status: 0,
                    content: `စစ်တွေမြို့အား မြစ်ပြင်ကလှမ်းကြည့်လျှင် အထင်အရှားမြင်တွေ့ရသည့် အဆောက်အအုံထဲတွင် ခေါင်မိုးအနီရောင်နှင့် ပြသဒ်အဆင့်ဆင့် အဆောက်အအုံကြီးတစ်ခုလည်း အပါအဝင်ဖြစ်သည်။ ထိုအဆောက် အအုံကြီး၏ နောက်ကွယ်တွင် ဝါကျင်ကျင်နှင့် ခန့်ညားစွာတည်ရှိနေသော ကိုလိုနီခေတ်ဗိသုကာလက်ရာများ ရောယှက်နေသည့် ဘုန်းတော်ကြီးကျောင်းတစ်ဆောင်ရှိသည်။ ထိုကျောင်းတော်သည် တစ်ချိန်က မြန်မာနိုင်ငံတွင် ပေါ်ထွန်းခဲ့သော တိုင်းရင်းသားကမ္ဘာကျော်သူဌေးကြီးတစ်ဦး၏ ဒါနပြုတည်ဆောက်ခဲ့သော အဆောက်အုံတစ်ခုဖြစ်သည်။ <br>
                    ကျောင်းတော်၏ ထက်အောက်ခြေ အဆောက်အအုံတစ်ခုလုံးအား သံမဏိများဖြင့် တည်ဆောက် ထားမှုကြောင့် သံကျောင်းဟု အမည်တွင်သည့်ကျောင်းဖြစ်သည်။ စစ်တွေမြို့တွင် ကျန်ရစ်ခဲ့သည့် ကိုလိုနီခေတ်လက်ရာဟောင်းထဲမှ အထင်ကရအဆောက်အအုံတစ်ခုဖြစ်သည်။ အဝေးကမျှော်ကြည့်လျှင် သံကျောင်း၏ ခန့်ညားထည်ဝါပုံကို မြင်တွေ့ရသကဲ့သို့ ထိုကျောင်းတော်ကို တည်ဆောက်ခဲ့သည့် သူဌေးကြီး၏ ဘဝသည်လည်း သမိုင်းတွင် ပုံရိပ်ထည်ဝါနေခဲ့သည်။ “သံကျောင်း”ဟုခေါ်ကြသလို “ရဲကျော်သူကျောင်း”ဟု လည်း ခေါ်ဆိုကြသည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/rakhine/KyaukTalone/1.jpg'),
                            require('@/assets/images/destination/rakhine/KyaukTalone/2.jpg'),
                            require('@/assets/images/destination/rakhine/KyaukTalone/3.jpg'),
                            require('@/assets/images/destination/rakhine/KyaukTalone/4.jpg'),
                            require('@/assets/images/destination/rakhine/KyaukTalone/5.jpg'),
                            require('@/assets/images/destination/rakhine/KyaukTalone/6.jpg'),
                            require('@/assets/images/destination/rakhine/KyaukTalone/1.jpg'),
                            require('@/assets/images/destination/rakhine/KyaukTalone/2.jpg'),
                            require('@/assets/images/destination/rakhine/KyaukTalone/3.jpg'),
                            require('@/assets/images/destination/rakhine/KyaukTalone/4.jpg'),
                        ],
                    title: `ကျောက်တစ်လုံးဂူဘုရား`,
                    status: 0,
                    content: `ကျောက်တစ်လုံးဂူဘုရားသည် ရခိုင်ပြည်နယ်၊ ကျောက်ဖြူမြို့ အနောက်တောင်ဖက် (၃)မိုင်ခန့် အကွာတွင် တည်ရှိပါသည်။ ကောဇာသက္ကရာဇ် ၈၉၈ ခုနှစ်တွင် မြောက်ဦးခေတ် မင်းဗာဘုရင်မင်းမြတ်သည် နန်းတက်အထိမ်းအမှတ်အဖြစ် ဂူဘုရားကိုးဆူကို တည်းထားကိုးကွယ်ရာ ကျောက်တစ်လုံးဂူဘုရားသည် တစ်ဆူအပါအဝင်ဖြစ်သည်။ ကြီးမားသော ကျောက်ဆောင်တစ်ခုလုံးကို လိုဏ်ပတ်လမ်းများဖြင့် ဂူများထွင်းကာ ဘုရားရုပ်ပွားတော်များ တည်ထားသည်။ လောင်းတစ်ပေါက်တောင်၏ တောင်နှာမောင်း၌ အလျားပေ(၄၀၀)ကျော်၊ အမြင့်ပေ(၂၀)ခန့်တွင် ဂူပေါက်(၅၄)ပေါက်၌ ဗုဒ္ဓဆင်းတုတော်(၁၉၂)ဆူခန့် ကိန်းဝပ်စံပယ်လျက်ရှိသည်။ လိုဏ်ဂူအတွင်း ပန်းဆိုင်းများ၊ ဘီလူးရုပ်များ၊ နတ်ရုပ်များ စသည်ဖြင့် ရှေးရခိုင်လူမျိုးတို့၏ ဗိသုကာပညာနှင့် ကျောက်ဆစ် အတတ်ပညာတို့ကို တွေ့မြင်လေ့လာနိုင်ပါသည်။  <br>
                    ကျောက်တစ်လုံးဂူဘုရား၏ ဗုဒ္ဓပူနိယပွဲတော်ကို နှစ်စဉ် မြန်မာနှစ်ဆန်းတစ်ရက်နေ့၌ စည်းကားသိုက်မြိုက်စွာ ကျင်းပလေ့ရှိသည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/rakhine/KantKawTawPagoda/1.jpg'),
                            require('@/assets/images/destination/rakhine/KantKawTawPagoda/2.jpg'),
                            require('@/assets/images/destination/rakhine/KantKawTawPagoda/1.jpg'),
                            require('@/assets/images/destination/rakhine/KantKawTawPagoda/2.jpg'),
                            require('@/assets/images/destination/rakhine/KantKawTawPagoda/1.jpg'),
                            require('@/assets/images/destination/rakhine/KantKawTawPagoda/2.jpg'),
                            require('@/assets/images/destination/rakhine/KantKawTawPagoda/1.jpg'),
                            require('@/assets/images/destination/rakhine/KantKawTawPagoda/2.jpg'),
                            require('@/assets/images/destination/rakhine/KantKawTawPagoda/1.jpg'),
                            require('@/assets/images/destination/rakhine/KantKawTawPagoda/2.jpg'),
                        ],
                    title: `ကံ့ကော်တောဘုရား`,
                    status: 0,
                    content: `ရှေးနှစ်ပေါင်းများစွာကပင် ထင်ပေါ်ကျော်ကြားလျက်ရှိခဲ့သော၊ ကံ့ကော်တောဘုရားဟု ခေါ်ဝေါ် သမုတ်လျက်ရှိသော၊ ရှေးဟောင်းပေါ်တော်မူမြတ်စွာဘုရား ရုပ်ပွားတော်နှစ်ဆူသည် ရခိုင်ပြည်နယ်၊ ကျောက်ဖြူမြို့နယ်၏ ဂုံးချိန်ကျေးရွာတောင်ဖက် ကံ့ကော်ပင်များရှိရာအရပ်၌ တည်ရှိနေလေသည်။ ဝေသာလီခေတ်လက်ရာများဖြစ်သည့် ကံ့ကော်တောဘုရား ရုပ်ပွားတော်နှစ်ဆူမှာ ကျောက်ဖြူမြို့၏ ထင်ရှား သော တန်ခိုးကြီးဘုရားဖြစ်သည်။    <br>
                    ထိုတန်ခိုးကြီး ရှေးဟောင်းရုပ်ပွားတော်မြတ်နှစ်ဆူ၏ ဘုရားပွဲတော်မှာ နှစ်စဉ် နှစ်ဆန်းတစ်ရက်နေ့ တွင်သာ ပြုလုပ်ကျင်းပလေ့ရှိပေသည်။ ဤကဲ့သို့ သင်္ကြန်လွန်စ ထူးမြတ်သော နှစ်ဆန်းတစ်ရက်နေ့တွင် ကျင်းပပြုလုပ်သော ဘုရားပူဇော်ပွဲမျိုးကား မရှိသလောက် အလွန်ပင်ရှားလှပေသည်။ ကံ့ကော်တော ဘုရားပွဲတော်သည် ကျောက်ဖြူမြို့နယ် တစ်ခုလုံးတွင် အထူးထင်ပေါ်ကျော်ကြားသော ဘုရားပွဲတော်ကြီး ဖြစ်သည်။ ရှေးဟောင်း ရုပ်ပွားတော်မြတ် (၂)ဆူ၏ တန်ခိုးတော်များမှာ အံ့ဩ၍မကုန်နိုင်လောက်အောင် များပြားလှခြင်းတို့ကြောင့် မိဘ ဘိုးဘေးဘီဘင်အစဉ်အဆက်ဆက်ကပင် ယုံကြည်မြတ်နိုးခြင်းဖြင့် ကြည်ညိုစွာ ကိုးကွယ်ခဲ့ကြသည်မှာ ယခုထက်တိုင်ပင်ဖြစ်ပါတော့သည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/rakhine/NatKyaukBeach/1.jpg'),
                            require('@/assets/images/destination/rakhine/NatKyaukBeach/2.jpg'),
                            require('@/assets/images/destination/rakhine/NatKyaukBeach/3.jpg'),
                            require('@/assets/images/destination/rakhine/NatKyaukBeach/4.jpg'),
                            require('@/assets/images/destination/rakhine/NatKyaukBeach/1.jpg'),
                            require('@/assets/images/destination/rakhine/NatKyaukBeach/2.jpg'),
                            require('@/assets/images/destination/rakhine/NatKyaukBeach/3.jpg'),
                            require('@/assets/images/destination/rakhine/NatKyaukBeach/4.jpg'),
                            require('@/assets/images/destination/rakhine/NatKyaukBeach/1.jpg'),
                            require('@/assets/images/destination/rakhine/NatKyaukBeach/2.jpg'),
                        ],
                    title: `နတ်ကျောက်ကမ်းခြေ`,
                    status: 0,
                    content: `နတ်ကျောက်ကမ်းခြေသည် ရခိုင်ပြည်နယ်၊ ကျောက်ဖြူမြို့တွင် တည်ရှိသည့် ကမ်းခြေလေး တစ်ခုဖြစ်ပြီး ကျောက်တစ်လုံးလှိုဏ်ဂူဘုရား၏ လမ်းတစ်ဖက်ခြမ်းတွင် နတ်ကျောက်ကမ်းခြေ ပင်လယ် ပြာပြာကြီးကို မြင်တွေ့ခံစားရမှာဖြစ်သည်။ ရေကျတဲ့အချိန်တွင် ကျောက်ဂူထဲဝင်လို့ရပြီး ပင်လယ်ကမ်းခြေရဲ့ အလှကို ခံစားနိုင်မယ့် နေရာလေးဖြစ်သည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/rakhine/JapanMa/1.jpg'),
                            require('@/assets/images/destination/rakhine/JapanMa/2.jpg'),
                            require('@/assets/images/destination/rakhine/JapanMa/3.jpg'),
                            require('@/assets/images/destination/rakhine/JapanMa/1.jpg'),
                            require('@/assets/images/destination/rakhine/JapanMa/2.jpg'),
                            require('@/assets/images/destination/rakhine/JapanMa/3.jpg'),
                            require('@/assets/images/destination/rakhine/JapanMa/1.jpg'),
                            require('@/assets/images/destination/rakhine/JapanMa/2.jpg'),
                            require('@/assets/images/destination/rakhine/JapanMa/3.jpg'),
                            require('@/assets/images/destination/rakhine/JapanMa/2.jpg'),
                        ],
                    title: `ဂျပန်မဆိပ်ကမ်း`,
                    status: 0,
                    content: `ဂျပန်မဆိပ်ကမ်းသည် ရခိုင်ပြည်နယ်၊ ကျောက်ဖြူမြို့၏ အထင်ကရနေရာတစ်ခုဖြစ်သည်။ ဆိပ်ကမ်းနားမှ ဒိုင်၊ အိမ်နှင့် စားသောက်ဆိုင်တွေ အကုန်လုံးကို ရေပေါ်အဆောက်အဦများအဖြစ် မြင်တွေ့ ခံစားရစေမည့် ဂျပန်မဆိပ်ကမ်းဖြစ်ပါသည်။ ထူးခြားချက်အနေဖြင့် ရေထဲသွားနေသည့် နွားလှည်းများကို မြင်တွေ့ရပါလိမ့်မည်။ ၄င်းဆိပ်ကမ်းတွင် ငါးဒိုင်နှင့် ပုဇွန်ဒိုင်များ၏ လှုပ်ရှားမှုတွေကိုလည်း ရုပ်ရှင် ဇာတ်ဝင်ခန်းတစ်ခုလို ခံစားတွေ့မြင်ရမှာဖြစ်သည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/rakhine/Pagodas2500/1.jpg'),
                            require('@/assets/images/destination/rakhine/Pagodas2500/2.jpg'),
                            require('@/assets/images/destination/rakhine/Pagodas2500/1.jpg'),
                            require('@/assets/images/destination/rakhine/Pagodas2500/2.jpg'),
                            require('@/assets/images/destination/rakhine/Pagodas2500/1.jpg'),
                            require('@/assets/images/destination/rakhine/Pagodas2500/2.jpg'),
                            require('@/assets/images/destination/rakhine/Pagodas2500/1.jpg'),
                            require('@/assets/images/destination/rakhine/Pagodas2500/2.jpg'),
                            require('@/assets/images/destination/rakhine/Pagodas2500/1.jpg'),
                            require('@/assets/images/destination/rakhine/Pagodas2500/2.jpg'),
                        ],
                    title: `သာသနာ ၂၅၀၀ စေတီ `,
                    status: 0,
                    content: `သာသနာ ၂၅၀၀ စေတီသည် ရခိုင်ပြည်နယ်၊ ကျောက်ဖြူမြို့၏ အနောက်ဘက် (၂)မိုင်ခန့်အကွာ ငကျားမော် ပင်လယ်မော်စွန်း စေတီယျတောင်တန်း၏ တောင်မော်ဦးတွင် တည်ရှိသည်။ ကောဇာသက္ကရာဇ် ၁၃၁၈ ခုနှစ်၊ ကဆုန်လပြည့်နေတွင် ကျောက်ဖြူမြို့ နဂါးကျောင်းတိုက်ဆရာတော် ဘဒ္ဒန္တနန္ဒ၊ စေတီယျ ကျေးရွာ ကျောင်းတိုက်ဆရာတော် ဘဒ္ဒန္တသာကေတို့အား အမှူးထားလျက် ကျောက်ဖြူ မြို့သူမြို့သားတို့က ဗုဒ္ဓသာသနာတော်နှစ် ၂၅၀၀ ပြည့်မြောက်သော အထိမ်းအမှတ်အဖြစ် တည်ထားကိုးကွယ်ခဲ့သည်။ စေတီတော်၏ပုံသဏ္ဍာန်သည် မဇ္စျိမဒေသ ဗုဒ္ဓဂါယာမှ သီရိဓမ္မာသောကမင်းကြီး ကုသိုလ်တော် မဟာဗောဓိစေတီတော်ပုံစံဖြစ်ပြီး ပလ္လင်ခုံလေးဖက်လေးတန်တွင် ပုံတူစေတီတော်ငယ်လေးဆူရှိသည်။ ပင်မစေတီတော်တွင် အရပ်လေးမျက်နှာ၌ မုခ်တစ်ခုစီပါဝင်ပြီး ထိုမုခ်တစ်ခုစီထဲတွင် ထိုင်တော်မူ ဘူမိဖဿမုဒြာ ဗုဒ္ဓဆင်းတုတော်ငယ် အဆူ ၂၅၀၀ ကျော် သီတင်းသုံးပါသည်။ စေတီတော်၏ ဗုဒ္ဓပူဇနိယပွဲတော်ကို နှစ်စဉ် သီးတင်းကျွတ်ပွဲတော်နှင့်အတူ စည်ကားစွာ ကျင်းပလေ့ရှိသည်။
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/rakhine/ShaitThaungTemple/1.jpg'),
                            require('@/assets/images/destination/rakhine/ShaitThaungTemple/2.jpg'),
                            require('@/assets/images/destination/rakhine/ShaitThaungTemple/3.jpg'),
                            require('@/assets/images/destination/rakhine/ShaitThaungTemple/4.jpg'),
                            require('@/assets/images/destination/rakhine/ShaitThaungTemple/5.jpg'),
                            require('@/assets/images/destination/rakhine/ShaitThaungTemple/1.jpg'),
                            require('@/assets/images/destination/rakhine/ShaitThaungTemple/2.jpg'),
                            require('@/assets/images/destination/rakhine/ShaitThaungTemple/3.jpg'),
                            require('@/assets/images/destination/rakhine/ShaitThaungTemple/4.jpg'),
                            require('@/assets/images/destination/rakhine/ShaitThaungTemple/5.jpg'),
                        ],
                    title: `သျှစ်သောင်းပုထိုးတော်ကြီး `,
                    status: 0,
                    content: `ရခိုင်ပြည်နယ်၊ ‌မြောက်ဦးမြို့၏မြောက်ဖက် တစ်မိုင်အကွာရှိ ဖိုးခေါင်တောင်ခြေ၊ ရခိုင်ရိုးမ တောင်တန်း၏ အနောက်တောင်ဖက်တွင်ရှိသည်။ ခရစ်နှစ် ၁၅၃၅ ခုနှစ်တွင် မင်းဗာကြီးဘုရင်မင်းမြတ် တည်ခဲ့သည့် အကြီးဆုံးသုံးဘက်ပိတ် အဆောက်အအုံဖြစ်သည်။ ပုထိုးတော်ကြီးတွင် ဘုရားရှင်၏ ဓါတ်တော် (၈၄၀၀၀)နှင့် ‌‌နှောင်ပွင့်တော်မူမည့်ဘုရား (၈၄၀၀၀)ရုပ်တုများ ဌာပနာထားသဖြင့် သျှစ်သောင်း ပုထိုးတော်ကြီးဟု အမည်တွင်ခဲ့သည်။ အင်္ဂါ(၁၂)မြို့နှင့် ပေါ်တူဂီရေတပ်ကို အောင်မြင်သည့် အထိမ်းအမှတ် အဖြစ် တည်ထားသောကြောင့် ရန်အောင်ဇေယျ ပုထိုးတော်ကြီးဟုလည်း ခေါ်တွင်ကြောင်းသိရသည်။ အရှေ့မုခ်တစ်ခုသာရှိ၍ အနောက်ဖက်၊ တောင်ဖက်နှင့် ‌မြောက်ဖက်ကို မဟာရံတံတိုင်းဖြင့်ပိတ်ထားခဲ့သည်။ ပုထိုးတော်ကြီးကို ကြီးမားသော သဲကျောက်တုံးများဖြင့် သပ်စီပေါင်းမိုးများ ပြုလုပ်လျက် ဝကႅဘာလိုဏ် ငါးထပ်ဆောက်လုပ်ခဲ့ကာ ဓါတ်တော်တိုက်သည် ကုဗပုံသဏ္ဍာန်ဖြစ်သည်။ ပုထိုး၏အပြင်နံရံအတွင်း၌ ထိုင်တော်မူ ဗုဒ္ဓရုပ်ပွားတော်(၂၈)ဆူကို မုခ်ကပ်(၂၈)ခုတွင် ကျောချင်းကပ်လျက် ပူဇော်ထားသည်။ လိုဏ်ဂူနံရံ မဏ္ဍိုင်ငါးရပ်တွင် ဘုရားလောင်းဘဝဖြစ်တော်စဥ်များ၊ ဇာတ်နိပါတ်များနှင့် ရခိုင်ရာဇဝင်များမှ ဇာတ်ရုပ်များ၊ လူမင်း၊ နတ်မင်း၊ ဗြဟ္မာမင်း၊ ကျေးငှက်တိရစ္ဆာန်ရုပ်များကို ထုလုပ်ထားသည်။ အနောက်ဖက်၊ တောင်ဖက်နှင့် မြောက်ဖက်မျက်နှာများတွင်ရှိသည့် အရံစေတီများအကြားတွင် ကျောက်ချပ်ကြီးများဖြင့် ရုပ်လုံး၊ ရုပ်ကြွ များကို တန်ဆာဆင်၍ ပုထိုးတော်ကြီး၏ အပေါ်ဆုံးတွင် ဗြဟ္မာနတ်ရုပ်များကို စိုက်ထူထားသည်။ ဗဟိုဂန္ဓကုဋီတိုက်အတွင်း၌ ဉာဏ်တော်(၈)ပေခန့်မြင့်သော ဗုဒ္ဓရုပ်ပွားတော်တစ်ဆူရှိပြီး စေတီတော်ကြီး၏ လက်ရာမှာ ဟိန္ဒူဗိသုကာနှင့် အနုပညာလက်ရာများဖြစ်သည်။ <br>
                    စေတီတော်ကြီးသို့အတက် (၁၆)ပေမြင့်သော နေရာရှိ မုခ်ဝတွင် အာရှ-ပစိဖိတ်‌ဒေသတွင်း ကမ္ဘာ့မှတ်တမ်းအမွေအနှစ်ကော်မတီ၏ အာရှ-ပစိဖိတ်ဒေသတွင်း ကမ္ဘာ့မှတ်တမ်းအမွေအနှစ်စာရင်းဝင်အဖြစ် အသိအမှတ်ပြုခြင်းခံထားရသည့် အာနန္ဒစန္ဒြ ကျောက်စာတိုင်ကိုလည်း ကြည့်ရှုလေ့လာနိုင်သည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/rakhine/HtuKanTheinTemple/1.jpg'),
                            require('@/assets/images/destination/rakhine/HtuKanTheinTemple/2.jpg'),
                            require('@/assets/images/destination/rakhine/HtuKanTheinTemple/3.jpg'),
                            require('@/assets/images/destination/rakhine/HtuKanTheinTemple/4.jpg'),
                            require('@/assets/images/destination/rakhine/HtuKanTheinTemple/1.jpg'),
                            require('@/assets/images/destination/rakhine/HtuKanTheinTemple/2.jpg'),
                            require('@/assets/images/destination/rakhine/HtuKanTheinTemple/3.jpg'),
                            require('@/assets/images/destination/rakhine/HtuKanTheinTemple/4.jpg'),
                            require('@/assets/images/destination/rakhine/HtuKanTheinTemple/1.jpg'),
                            require('@/assets/images/destination/rakhine/HtuKanTheinTemple/2.jpg'),
                        ],
                    title: `ထုက္ကံသိမ်ပုထိုးတော်ကြီး `,
                    status: 0,
                    content: `ထုက္ကံသိမ်ပုထိုးတော်ကြီးသည် ရခိုင်ပြည်နယ်၊ မြောက်ဦးမြို့တွင် တည်ရှိသည့် ရှေးဟောင်း ပုထိုးတော်ကြီးတစ်ခုဖြစ်သည်။ သျှစ်သောင်းပုထိုးတော်ကြီး၏ အနားတွင်တည်ရှိပြီး တောင်မြောက် (၁၁၀)ပေ၊ အရှေ့အနောက် (၁၃၇)ပေရှည်ပြီး ပေ(၂၀)ခန့်မြင့်သော တောင်ကုန်း၌ ကျောက်တုံးများဖြင့် တည်ဆောက်ထားသည်။ ပုထိုး၏ အနောက်တောင်ထောင့်တွင် ဘုရင့်ဥပုသ်ဆောင်တော်ရှိသည်။ ပုထိုးတော်ကြီးသည် အောက်ခံကျောင်းပေါ်ရှိ အလယ်စေတီကို စေတီလေးဆူရံထားပုံဖြစ်သည်။ စေတီပုံစံမှာ သပိတ်မှောက်အပေါ်၌ ကုဗပုံဓာတုဂမ္ဘ ဆင့်ထားဟန်ဖြစ်သည်။ အောက်ခံကျောင်း၌ ဝင်လမ်းတခုတည်းရှိပြီး ခရုပတ်ပုံစံလိုဏ်နှစ်ခုရှိသည်။ လှိုဏ်လမ်းအဆုံး၌ ဂန္ဓကုဋီတိုက်ရှိပြီး လှိုဏ်လမ်းတစ်လျှောက်၌ ဂူကျောင်း (၁၄၆)ကျောင်းရှိပြီး ဆင်းတုတော်များရှိသည်။ ဂူကျောင်းအဝတွင် ကျောက်ဆစ်ရုပ်ကြွများရှိပြီး စုစုပေါင်း (၃၃၀)ကျော်ရှိသည်။ မြောက်ဦးခေတ်လယ်ပိုင်း ဝတ်စားဆင်ယင်မှုကို တွေ့ရှိနိုင်ပြီး ရုပ်ကြွများကို ရာထူးအဆင့်အတန်းအလိုက် ဆင်ယင်မှုကွဲပြားအောင် ထုလုပ်ထားသည်။ ပုထိုးတော်ကို ကျောက်ပြားခင်း၊ ကျောက်ပြားမိုး သပ်စီပေါင်းခုံးစနစ်ဖြင့် တည်ဆောက်ထားသည်။ ဘုရင်မင်းဖလောင်းသည် ၁၅၇၁ ခုနှစ်တွင် တည်ထားခဲ့ပြီး ထုထည်ကြီးမား၍ ခရုခွေပုံစံ လှိုဏ်ပတ်ကြောင့် ခံတပ်ဟုပင်ထင်ရလောက်သည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/rakhine/KoeThaungTemple/1.jpg'),
                            require('@/assets/images/destination/rakhine/KoeThaungTemple/2.jpg'),
                            require('@/assets/images/destination/rakhine/KoeThaungTemple/3.jpg'),
                            require('@/assets/images/destination/rakhine/KoeThaungTemple/4.jpg'),
                            require('@/assets/images/destination/rakhine/KoeThaungTemple/5.jpg'),
                            require('@/assets/images/destination/rakhine/KoeThaungTemple/6.jpg'),
                            require('@/assets/images/destination/rakhine/KoeThaungTemple/7.jpg'),
                            require('@/assets/images/destination/rakhine/KoeThaungTemple/8.jpg'),
                            require('@/assets/images/destination/rakhine/KoeThaungTemple/1.jpg'),
                            require('@/assets/images/destination/rakhine/KoeThaungTemple/2.jpg'),
                        ],
                    title: `ကိုးသောင်းပုထိုးတော်ကြီး `,
                    status: 0,
                    content: `ကိုးသောင်းပုထိုးတော်ကြီးမှာ ရခိုင်ပြည်နယ်၊ မြောက်ဦးမြို့၊ နန်းတော်ရာကုန်း၏ အရှေ့ဘက် တစ်မိုင်ခွဲခန့်အကွာတွင် တည်ရှိပြီး အေဒီ ၁၅၅၃-၁၅၅၆ ခုနှစ်အတွင်း ရခိုင်ဘုရင် မင်းတိက္ခာက တည်ထားခဲ့သော ပုထိုးတော်ကြီးဖြစ်သည်။  <br>
                    မင်းတိက္ခာဘုရင်နန်းတက်ပြီး မမာမကျန်းဖြစ်သောကြောင့် ဗုဒ္ဓကုထုံးဖြင့် ကိုးနဝင်းကျေအောင် ဓါတ်တော်မွေတော်ပေါင်းကိုးသောင်းကို ဌာပနာထည့်သွင်းထားခြင်းကြောင့် “ကိုးသောင်းပုထိုးတော်ကြီး” ဟု အမည်တွင်သည်။ ပစ္စယံ(၅)ဆင့်နှင့် လှိုဏ်ပတ်လမ်း (၂)ထပ်ပါရှိပြီး လှိုဏ်ပတ်လမ်းတစ်လျှောက် ဗုဒ္ဓရုပ်ပွားတော်များကို ကြည်ညိုစွာဖူးမြှော်နိုင်ပြီး ကျောက်ဆစ်လက်ရာ ဒွာရပါလနှင့် ဘီလူးရုပ်ကြွများကို လေ့လာနိုင်ပါသည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/rakhine/AndawThein/1.jpg'),
                            require('@/assets/images/destination/rakhine/AndawThein/1.jpg'),
                            require('@/assets/images/destination/rakhine/AndawThein/1.jpg'),
                            require('@/assets/images/destination/rakhine/AndawThein/1.jpg'),
                            require('@/assets/images/destination/rakhine/AndawThein/1.jpg'),
                            require('@/assets/images/destination/rakhine/AndawThein/1.jpg'),
                            require('@/assets/images/destination/rakhine/AndawThein/1.jpg'),
                            require('@/assets/images/destination/rakhine/AndawThein/1.jpg'),
                            require('@/assets/images/destination/rakhine/AndawThein/1.jpg'),
                            require('@/assets/images/destination/rakhine/AndawThein/1.jpg'),
                        ],
                    title: `အံတော်သိမ် `,
                    status: 0,
                    content: `အံတော်သိမ်ပုထိုးသည် ရခိုင်ပြည်နယ်၊ မြောက်ဦးမြို့၊ သျှစ်သောင်းပုထိုးတော်ကြီး၏ မြောက်ဘက်တွင် တည်ရှိသည်။ မူလကုသိုလ်ရှင်သည် မင်းစောလှဖြစ်ပြီး ခရစ် ၁၅၂၁ ခုနှစ်တွင် ကောင်းမှုပြုခဲ့သည်။ ၁၅၉၆ ခုနှစ်တွင် မင်းရာဇာကြီးက ပြန်လည်ပြုပြင်ကာ အံတော်ဓာတ်ကို ဌာပနာထားသောကြောင့် “အံတော်သိမ်ပုထိုး” ဟုခေါ်တွင်ခဲ့ကြသည်။   <br>
                    ပုထိုးတော်ကြီးကို သဲကျောက်များဖြင့် တည်ဆောက်ထားပြီး ဉာဏ်တော်ပေ(၄၀)ရှိသည်။ ပုထိုးတော် ကြီးသည် (၈)မြှောင့်ပုံ အဋ္ဌဂံပုံရှိသည်။ ပုထိုးတော်ကြီးအထက်တွင် စေတီကြီးတစ်ဆူကို စေတီငယ်ရှစ်ဆူက ရံထားသည်။ လှိုဏ်ပတ်လမ်းနှစ်ခုရှိပြီး အလယ်ဗဟိုတွင် ဆင်းတုတော်ရှစ်ဆူကို ကျောက်ဆစ်လက်ရာ ကနုတ်ပန်များဖြင့် လွန်စွာတင့်တယ်သော ရာဇပလ္လင်ရှစ်ခန်းနှင့်အတူ ဖူးမြှော်နိုင်သည်။ ပလ္လင်များတွင် ဗျလ္လ ရုပ်များ၊ ငှက်လည်ပြန်နှင့် လူရုပ်တုများရှိသည်။ လှိုဏ်ပတ်လမ်းများတွင်လည်း ရုပ်ပွားတော်များ ကိန်းဝပ်နေပြီး အလင်းရောင်ရရှိစေရန် အလင်းပေါက်များ ဖောက်ထားသည်။  <br>
                    ပုထိုး၏အရှေ့ဖက်တွင် အာရုံခံတန်ဆောင်းရှိပြီး မြောက်ဖက်၊ တောင်ဖက်နှင့် အရှေ့ဖက်တွင် ဝင်ပေါက်များရှိသည်။ အာရုံကိုကျောက်ဖြင့် တည်ဆောက်ထားသည်။ ပုထိုးတော်ကြီး မုခ်ဘေး တဖက်တချက်၌ မတ်ရပ်ရုပ်ပွားတော်များရှိသည်။ တချို့သော ဆင်းတုတော်များတွင် ဈန်ကသိုဏ်းဟန် ထုဆစ်ထားသည်။ ပုထိုးတော်တခုလုံးတွင် ဆင်းတုကြီးငယ်ပေါင်း (၁၇၅)ဆူရှိသည်။ ပရဝုဏ်အတွင်း၌လည်း ဂူကျောင်းပါ စေတီ(၁၆)ဆူက ပုထိုးတော်ကြီးအား အနောက်တောင်နှင့် မြောက်ဖက်တို့မှ ဝန်းရံထားသည်။ အံတော်သိမ်ပုထိုးတော်မှာ ထည်ဝါခန့်ညား၍ လက်ရာမြောက်သော ပုထိုးတော်တစ်ဆူဖြစ်ပေသည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/rakhine/LayMyatHnaTemple/1.jpg'),
                            require('@/assets/images/destination/rakhine/LayMyatHnaTemple/2.jpg'),
                            require('@/assets/images/destination/rakhine/LayMyatHnaTemple/3.jpg'),
                            require('@/assets/images/destination/rakhine/LayMyatHnaTemple/4.jpg'),
                            require('@/assets/images/destination/rakhine/LayMyatHnaTemple/1.jpg'),
                            require('@/assets/images/destination/rakhine/LayMyatHnaTemple/2.jpg'),
                            require('@/assets/images/destination/rakhine/LayMyatHnaTemple/3.jpg'),
                            require('@/assets/images/destination/rakhine/LayMyatHnaTemple/4.jpg'),
                            require('@/assets/images/destination/rakhine/LayMyatHnaTemple/1.jpg'),
                            require('@/assets/images/destination/rakhine/LayMyatHnaTemple/2.jpg'),
                        ],
                    title: `လေးမျက်နှာပုထိုး​တော်ကြီး `,
                    status: 0,
                    content: `လေးမျက်နှာပုထိုး​တော်ကြီးသည် ရခိုင်ပြည်နယ်၊ မြောက်ဦးမြို့နယ်မှ အထင်ကရပုထိုး​တော်တစ်ဆူ ဖြစ်သည်။ ထုက္ကံသိမ်ပုထိုးတော်ကြီးအနီးတွင် တည်ရှိပြီး မြို့တည်ဘုရား ငါးဆူအနက် တစ်ဆူအပါအဝင် ဖြစ်သည်။ ဤပုထိုး​တော်ကို မင်း​စောမွန်ဘုရင်က ​ကောဇာ ၇၉၂ ခု၊ ခရစ်နှစ် ၁၄၃၀ ၌တည်ထားခဲ့သည်။ မင်းစောမွန်အား မြောက်ဦးမြို့တည် မင်းတရားအဖြစ် အရပ်​လေးမျက်နှာ၌ရှိကြသော တိုင်းပြည်တို့အား သိစေခြင်းငှာ အရပ်​လေးမျက်နှာသို့ မုခ်​လေးခု ဖွင့်လှစ်တည်​ဆောက်ခဲ့သည်။ ထို့ကြောင့် မုခ်​လေးတန် ပုထိုးဟုလည်း​ခေါ်သည်။    <br>
                    လေးမျက်နှာပုထိုး​တော်ကြီးကို ကျောက်အုတ်များဖြင့် တည်​ဆောက်ထားပြီး ပုထိုး​အောက်ခြေသည် စတုရန်းပုံဖြစ်၍ မုခ်​လေးခုဖွင့်ထားသည်။ ပုထိုး​တော်၏​ထောင့်များတွင် ​စေတီတစ်ဆူစီ၊ ပေါင်း​လေးဆူနှင့် အလယ်တွင် ​စေတီကြီးတစ်ဆူရှိသည်။ ​စေတီပုံသဏ္ဍာန်မှာ ​ဝေသာလီ​ခေတ် စတူပါ ကျောက်စေတီငယ်များ ပုံစံအတိုင်းဖြစ်သည်။ မုခ်​လေးခုမှတစ်ဆင့်ဝင်သွားပါက လှိုဏ်ဂူ​တော်သို့​ရောက်သည်။ အလယ်မဏ္ဍိုင်တွင် ဘုရားဆင်းတုရှစ်ဆူ ကျောချင်းကပ်တည်ရှိပြီး မျက်နှာချင်းဆိုင်နံရံတွင်လည်း ဂူ​ပေါက်ငယ်များရှိကာ ဆင်းတု အဆူ(၂၀) ကိန်းဝပ်သည်။ စုစု​ပေါင်းဆင်းတု (၂၈)ဆူတိတိ လေးမျက်နှာပုထိုးတွင် စံပယ်သည်။ ဆင်းတု​တော်များ၏ပလ္လင်များတွင် ကျောက်ဆစ်လက်ရာများရှိပြီး လေနှင့်အလင်း​ရောင်ရရှိရန် နံရံတွင် အလင်းပေါက်များ​ ဖောက်ထားသည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/rakhine/Man5Man/1.jpg'),
                            require('@/assets/images/destination/rakhine/Man5Man/2.jpg'),
                            require('@/assets/images/destination/rakhine/Man5Man/3.jpg'),
                            require('@/assets/images/destination/rakhine/Man5Man/4.jpg'),
                            require('@/assets/images/destination/rakhine/Man5Man/5.jpg'),
                            require('@/assets/images/destination/rakhine/Man5Man/1.jpg'),
                            require('@/assets/images/destination/rakhine/Man5Man/2.jpg'),
                            require('@/assets/images/destination/rakhine/Man5Man/3.jpg'),
                            require('@/assets/images/destination/rakhine/Man5Man/4.jpg'),
                            require('@/assets/images/destination/rakhine/Man5Man/5.jpg'),
                        ],
                    title: `မာရ်ငါးမာရ်စေတီ(၅)ဆူ `,
                    status: 0,
                    content: `မာရ်ငါးပါးဟုခေါ်သော သကျမာရ်အောင်စေတီ၊ ဇိနမာရ်အောင်စေတီ၊ ရတနာမာရ်အောင်စေတီ၊ လောကမာရ်အောင်စေတီ၊ မင်္ဂလာမာရ်အောင်စေတီတို့သည် မြောက်ဦးမြို့တွင် တည်ရှိပြီး ဘုရင် သီရိသုဓမ္မရာဇာ၏ ကုသိုလ်ကောင်းမှုဖြစ်သည်။ မာရ်အပေါင်းကို အောင်မြင်စေရန် ရည်မှန်း၍ တည်ထားခဲ့ခြင်းဖြစ်သည်။  <br>
                    <b>“သကျမာရ်အောင်စေတီ”</b> သည် နန်းတော်ကုန်း အရှေ့ဖက် မိုင်ဝက်အကွာတွင် တည်ရှိပြီး မာရ်ငါးပါးစေတီများအနက် အစောဆုံးတည်ထားခဲ့သော စေတီဖြစ်သည်။ မာရ်အပေါင်းကို အောင်မြင်တော် မူသော သကျသာဂီဝင်မင်းမျိုးမှ ဆင်းသက်လာသည့် ဘုရားရှင်အားရည်စူးပြီး တည်ထားတော်မူသော စေတီ ဖြစ်သဖြင့် <b>“သကျမာရ်အောင်စေတီ”</b> ဟုခေါ်တွင်ခဲ့သည်။ စေတီတော်မှာ ကျောက်စေတီဖြစ်ပြီး စေတီတော် ပတ်လည်အဝန်း (၂၄၀)ပေနှင့် ဉာဏ်တော်အမြင့် (၁၁၄)ပေရှိသည်။ <br>
                    <b>“ဇိနမာရ်အောင်စေတီ”</b> သည် နန်းတော်ကုန်း တောင်ဖက် မိုင်ဝက်အကွာတွင် တည်ရှိပြီး အဆိုပါ စေတီမှာ သေးငယ်နေ၍ သူငယ်တို့က “စံသုဘုရင်၊ အရှင်ကောင်းမှု၊ ပန်းတိမ်တောင် ဘုရားပြု၊ သာဓုမခေါ်လောက်” ဟူ၍ အော်ဟစ်ကြသည်။ ဤအကြောင်းကို ဘုရင်ကြားသိ၍ မှူးမတ်ပညာရှိတို့နှင့် တိုင်ပင်ကြရာ မှူးမတ်တို့၏ အကြုံပြုချက်အရ ခရစ်နှစ်(၁၆၅၈)ခုနှစ်တွင် ကျောက်စေတီတစ်ဆူ ထပ်မံတည်စေသည်။ ဘုရားတည်ခြင်းကို အောင်မြင်ခြင်း အထိမ်းအမှတ်အဖြစ် စေတီတော်ကို <b>“ဇိနမာရ်အောင်စေတီ”</b> ဟုခေါ်တွင်စေသည်။ စေတီတော်ကို ကျောက်တုံးကြီးများအားဆစ်၍ ထောင့်ချိုး များဖြင့် ရှစ်မြှောင့် အဋ္ဌဂံပုံဖြစ်အောင် စနစ်တကျ တည်ဆောက်ထားသည်။ <br>
                    <b>“ရတနာမာရ်အောင်စေတီ”</b> သည် နန်းတော်ကုန်း အရှေ့မြောက်ဘက် မိုင်ဝက်ကျော်တွင် တည်ရှိသည်။ ရခိုင်လူမျိုးတို့သည် ရတနာသုံးပါးကို ယုံကြည်ခြင်းရှိရာ အမျိုးစဉ်ဆက်အောင်မြင်မှု ရှိခဲ့ကြသည်ကို သိရှိစေရန် အထိမ်းအမှတ်အဖြစ် စေတီတော်ကို <b>“ရတနာ့မာရ်အောင်”</b> ဟု ခေါ်တွင်စေသည်။ စေတီတော်မှာ ကျောက်သားပကတိဖြင့် ထုလုံးပုံတည်ဆောက်ထားပြီး အောက်ခြေမှထိပ်ထိ ရှစ်မြှောင့်ပုံ ရှိသည်။ <br>
                    <b>“လောကမာရ်အောင်စေတီ”</b> သည် နန်းတော်ကုန်း အနောက်မြောက် တစ်မိုင်အကွာတွင် တည်ရှိသည်။ ဤစေတီကို  ဇိနမာရ်အောင်စေတီ၊ ရတနာမာရ်အောင်စေတီတို့နှင့်အတူ တစ်ပြိုင်တည်း တည်ထားခဲ့ခြင်းဖြစ်သည်။ လောကသုံးပါးဖြစ်သော သတ္တလောက၊ သင်္ခါရလောက၊ ဩကာသလောကတို့မှ မြတ်စွာဘုရားသည် လွတ်မြောက်အောင်မြင်ခြင်းကို အထိမ်းအမှတ်အဖြစ် <b>“လောကမာရ်အောင်စေတီ”</b> ဟု ဘွဲ့အမည်ပေးခဲ့သည်။ စေတီတော်သည် အောက်ခြေလေးမြှောင့် စတုရန်းလေးထောင့်ပုံဖြစ်ပြီး တစ်ဖက်လျှင် (၇)ပေရှိကာ ဉာဏ်တော်အမြင့် ပေ(၁၀၀)မြင့်သည်။ <br>
                     <b>“မဂႅလာမာရ်အောင်စေတီ”</b> သည် နန်းတော်ကုန်း မြောက်ဖက် တစ်မိုင်အကွာတွင် တည်ရှိသည်။ ဘုရားရှင်ဟောကြားတော်မူခဲ့သော (၃၈)ဖြာမင်္ဂလာတရားကို အစဉ်တစိုက် မပျက်မကွက် အောင်မြင်စွာ ထိန်းသိမ်းနိုင်ခဲ့ကြသည်ကို အထိမ်းအမှတ်ပြု၍ <b>“မင်္ဂလာမာရ်အောင်စေတီ”</b> ဟု ဘွဲ့အမည်ခေါ်တွင်စေသည်။ စေတီတော်မှာ လုံးပတ်ထုချွန်ပုံ ဖြစ်သည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/rakhine/PhaRaPaw/1.jpg'),
                            require('@/assets/images/destination/rakhine/PhaRaPaw/2.jpg'),
                            require('@/assets/images/destination/rakhine/PhaRaPaw/3.jpg'),
                            require('@/assets/images/destination/rakhine/PhaRaPaw/1.jpg'),
                            require('@/assets/images/destination/rakhine/PhaRaPaw/2.jpg'),
                            require('@/assets/images/destination/rakhine/PhaRaPaw/3.jpg'),
                            require('@/assets/images/destination/rakhine/PhaRaPaw/1.jpg'),
                            require('@/assets/images/destination/rakhine/PhaRaPaw/2.jpg'),
                            require('@/assets/images/destination/rakhine/PhaRaPaw/3.jpg'),
                            require('@/assets/images/destination/rakhine/PhaRaPaw/2.jpg'),
                        ],
                    title: `ဘုရားပေါ်ဘုရားကြီး (သို့မဟုတ်) ဘုရားပေါ်စေတီ `,
                    status: 0,
                    content: `မြောက်ဦးမြို့၊ နန်းရာကုန်းမှ အနောက်ဖက်တစ်မိုင်ခန့်အကွာ လောကမာရ်အောင်စေတီတော်မှ အနောက်ဖက် ကိုက်(၄၀၀)ခန့်အကွာ ဘုရားပေါ်ချောင်းနံဘေးတွင် တည်ရှိပြီး ကောဇာသက္ကရာဇ် ၉၆၅ ခုနှစ်တွင် ဘုရင်မင်းရာဇာကြီးက တည်ထားကိုးကွယ်ခဲ့သည်။ စေတီတော်၏ လှိုဏ်ဂူအတွင်းရှိ ဆင်းတုမှာ ရေထဲတွင် နှစ်ပေါင်းတစ်ထောင်ခန့် ကိန်းဝပ်တော်မူပြီး ပေါ်ပေါက်လာသည်ကိုအကြောင်းပြု၍ ဘုရားပေါ် ဘုရားဟုခေါ်တွင်ကြသည်။ ဉာဏ်တော်မှာ (၁၂)ပေ (၃)လက်မရှိပြီး ဘုရားပေါ်ဘုရား ဆင်းတုတော်ကြီးရှိရာ ဂူတော်အပေါ်ထပ်တွင် တည်ထားသောစေတီဖြစ်သောကြောင့် ဘုရားပေါ်စေတီဟုလည်း ခေါ်တွင်ကြသည်။ အောက်ခြေမှာ စတုရန်းလေးထောင့်ပုံဖြစ်၍ ပေ(၂၀)မြင့်သောနံရံရှိသည်။ ၄င်းမှပစ္စယံလေးဆင့် တင်ထားပြီးနောက် စက်ဝိုင်းပုံသို့ပြောင်းကာ ခေါင်းလောင်းမှောက်၊ ဖောင်းရစ်၊ ငှက်ပျောဖူး၊ ထီးတော် အဆင့်ဆင့်တင့်တယ်စွာရှိသည်။ စေတီတော်တစ်ခုလုံး၏ ဉာဏ်တော်မှာ (၁၂၀)ပေရှိပြီး အနောက်ဖက် နံရံကိုကျောပြု၍ ကြီးမားသော ကျောက်တုံးတစ်တုံးတည်းကို ထုလုပ်ထားသော ဆင်းတုတော်များကို ဖူးတွေ့နိုင်သည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/rakhine/Yadanarbon/1.jpg'),
                            require('@/assets/images/destination/rakhine/Yadanarbon/2.jpg'),
                            require('@/assets/images/destination/rakhine/Yadanarbon/3.jpg'),
                            require('@/assets/images/destination/rakhine/Yadanarbon/1.jpg'),
                            require('@/assets/images/destination/rakhine/Yadanarbon/2.jpg'),
                            require('@/assets/images/destination/rakhine/Yadanarbon/3.jpg'),
                            require('@/assets/images/destination/rakhine/Yadanarbon/1.jpg'),
                            require('@/assets/images/destination/rakhine/Yadanarbon/2.jpg'),
                            require('@/assets/images/destination/rakhine/Yadanarbon/3.jpg'),
                            require('@/assets/images/destination/rakhine/Yadanarbon/2.jpg'),
                        ],
                    title: `ရတနာပုံစေတီတော် `,
                    status: 0,
                    content: `မြောက်ဦးမြို့၊ အံတော်သိမ်ပုထိုးတော်ကြီး၏ မြောက်ဖက် ကုန်းငယ်ပေါ်တွင် တည်ရှိသည်။ ကောဇာသက္ကရာဇ် (၉၇၄)ခုနှစ်တွင် ဘုရင်မင်းခမောင်းနှင့် မိဖုရားကြီးသျှင်ထွေးတို့က တည်ထားကိုးကွယ်ခဲ့ သည်။ ရတနာသုံးပါးကို ရည်စူးပြီး ဘုရင်နှင့်မိဖုရားတို့၏ ပိုင်ဆိုင်သမျှ ရွှေငွေရတနာတွေကို ပုံအောကာ ‌စေတီ တည်ထားခဲ့သောကြောင့် ရတနာပုံစေတီတော်ဟု ဘွဲ့အမည်ဆက်ကပ်ခဲ့သည်။ စေတီတော်သည် အဝန်းပုံ သဏ္ဍာန်ရှိပြီး ဉာဏ်တော်အမြင့်(၂၀၀)ပေ၊ စေတီအောက်ခြေပတ်လည်(၃၄၄)ပေရှိသည်။ ပစ္စယံသုံးဆင့် ပေါ်တွင် သပိတ်မှောက်တင်ထားရှိပြီး စေတီတော်ကြီးကို စေတီငယ်(၁၇)ဆူ ဝန်းရံထားသည်။ စေတီတော်၏ အရှေ့ဖက်အနီးတွင် ကျောက်စေတီ(၃)ဆူတည်ရှိပြီး ထိုစေတီများ၏ ဂူထဲတွင်‌ ကျောက်ဘုရားဆင်းတုတော် များကို ဖူးတွေ့နိုင်သည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/rakhine/MyaTasaung/1.jpg'),
                            require('@/assets/images/destination/rakhine/MyaTasaung/1.jpg'),
                            require('@/assets/images/destination/rakhine/MyaTasaung/1.jpg'),
                            require('@/assets/images/destination/rakhine/MyaTasaung/1.jpg'),
                            require('@/assets/images/destination/rakhine/MyaTasaung/1.jpg'),
                            require('@/assets/images/destination/rakhine/MyaTasaung/1.jpg'),
                            require('@/assets/images/destination/rakhine/MyaTasaung/1.jpg'),
                            require('@/assets/images/destination/rakhine/MyaTasaung/1.jpg'),
                            require('@/assets/images/destination/rakhine/MyaTasaung/1.jpg'),
                            require('@/assets/images/destination/rakhine/MyaTasaung/1.jpg'),
                        ],
                    title: `မြတန်ဆောင်းစေတီတော်များ `,
                    status: 0,
                    content: `မြောက်ဦးမြို့၊ လေးမျက်နှာပုထိုးတော်ကြီး၏ မြောက်ဖက် တောင်ကုန်းနှစ်ခုပေါ်တွင် အရှေ့မြတန်ဆောင်းစေတီနှင့် အနောက်မြတန်ဆောင်းစေတီဟူ၍ တည်ရှိသည်။ ကောဇာသက္ကရာဇ် ၇၉၂ ခုနှစ်တွင် ဘုရင်မင်းစောမွန်သည် မြောက်ဦးမြို့တည်ဘုရားများအဖြစ် တည်ထားကိုးကွယ်ခဲ့သည်။ စေတီ နှစ်ဆူလုံးမှာ အရွယ်အစားနှင့် ပုံသဏ္ဍန်တူညီကြပြီး စေတီတော်တစ်ဆူ၏ အောက်ခြေလုံးပတ်မှာ ပေ(၁၂၀)ရှိပြီး ဉာဏ်တော်အမြင့်ပေ(၅၀)ရှိသည်။ စေတီတော်များ၏ ဂူအတွင်း၌ ဉာဏ်တော်အမြင့် (၆)ပေခန့်ရှိ ကျောက်ဆင်းတုတစ်ဆူစီရှိသည်။ စေတီတော်တစ်ဆူလျှင် သမုတ်သိမ်တစ်ခုစီရှိပြီး ရင်ပြင်ပေါ်သို့ တက်ရောက်ဖူးမြှော်ရန် အရှေ့မြောက်နှင့် အနောက်ဘက်တို့တွင် ကျောက်အုတ်လှေကားများရှိသည်။ အရှေ့မြတန်ဆောင်းစေတီကုန်းသည် နှစ်ထပ်ဖြစ်ပြီး စေတီတော်၏ ဂန္ဓကုဋီတိုက်အတွင်း အလင်းပေါက် (၆)ခုရှိကာ သပ်စီပေါင်းမိုးထားသည်။ စေတီတော်များ၏ မြောက်ဘက်တောင်ခြေ၌ ဘုရင်မင်းစောမွန် ဆောက်လုပ်လှူဒါန်းခဲ့သည့် မြတန်ဆောင်းကျောင်းတော်ရာ တည်ရှိသည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/rakhine/SandaMuniPagoda/1.jpg'),
                            require('@/assets/images/destination/rakhine/SandaMuniPagoda/2.jpg'),
                            require('@/assets/images/destination/rakhine/SandaMuniPagoda/1.jpg'),
                            require('@/assets/images/destination/rakhine/SandaMuniPagoda/2.jpg'),
                            require('@/assets/images/destination/rakhine/SandaMuniPagoda/1.jpg'),
                            require('@/assets/images/destination/rakhine/SandaMuniPagoda/2.jpg'),
                            require('@/assets/images/destination/rakhine/SandaMuniPagoda/1.jpg'),
                            require('@/assets/images/destination/rakhine/SandaMuniPagoda/2.jpg'),
                            require('@/assets/images/destination/rakhine/SandaMuniPagoda/1.jpg'),
                            require('@/assets/images/destination/rakhine/SandaMuniPagoda/2.jpg'),
                        ],
                    title: `စန္ဒမုနိဘုရားကြီးကျောင်းတိုက်နှင့် စန္ဒမုနိရုပ်ရှင်တော်မြတ်  `,
                    status: 0,
                    content: `ယခင် ဗန္ဓဒလကျောင်းတိုက်ဟု ခေါ်ဝေါ်ခဲ့သော စန္ဒမုနိဘုရားကြီးကျောင်းတိုက်သည် မြောက်ဦးမြို့၊ ကျက်ပိတ်တံခါးအနီးနှင့် ရွှေထီးမိုးဘုရားအနီးတွင် တည်ရှိသည်။ ဤကျောင်းတိုက်တွင် ရှေး‌ဟောင်း ဆင်းတုတော် မုဒြာမျိုးစုံများ၊ ခေတ်အဆက်ဆက် သုံးစွဲခဲ့သော ဒင်္ဂါးများ၊ ရှေးဟောင်းပစ္စည်းအမျိုးမျိုး၊ ဘုရားဓာတ်တော်များ၊ မြောက်ဦးနန်းတော်၏ ကြေးဝါအမိုးပြားစသည်တို့ကို စုံလင်စွာ စုဆောင်းခင်းကျင်း ပြသထားသည်။ ရှေးဟောင်းယဉ်ကျေးမှု အမွေအနှစ်များကို စိတ်ပါဝင်စားတန်ဖိုးထားသူများ မဖြစ်မနေ သွားရောက်လေ့လာသင့်သော နေရာတစ်ခုဖြစ်သည်။ ကျောင်းတိုက်တွင် ဗုဒ္ဓမြတ်စွာဘုရား၏ လက်ဝဲအောက် အံတော်မြတ်နှင့် သမိုင်းဝင် မဟာကျန် ဘုရားကြီးတစ်ဆူဖြစ်သော စန္ဒမုနိဆင်းတုတော်ကြီးကို ဖူးမြှော်ကြည်ညိုနိုင်သည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/rakhine/SunriseSunset/1.jpg'),
                            require('@/assets/images/destination/rakhine/SunriseSunset/2.jpg'),
                            require('@/assets/images/destination/rakhine/SunriseSunset/1.jpg'),
                            require('@/assets/images/destination/rakhine/SunriseSunset/2.jpg'),
                            require('@/assets/images/destination/rakhine/SunriseSunset/1.jpg'),
                            require('@/assets/images/destination/rakhine/SunriseSunset/2.jpg'),
                            require('@/assets/images/destination/rakhine/SunriseSunset/1.jpg'),
                            require('@/assets/images/destination/rakhine/SunriseSunset/2.jpg'),
                            require('@/assets/images/destination/rakhine/SunriseSunset/1.jpg'),
                            require('@/assets/images/destination/rakhine/SunriseSunset/2.jpg'),
                        ],
                    title: `Sunrise ၊ Sunset ကြည့်ရန်  `,
                    status: 0,
                    content: `မြောက်ဦးမြို့တွင် Sunrise ၊ Sunset ကြည့်ရှုရန်အတွက် တောင်ကုန်းနှင့် ကုန်းမြင့်တော်တော် များရှိပြီး မြဝါတောင်၊ ဟရီတောင်တို့အပေါ်မှ ဆည်းဆာအလှကို ခံစားလို့ရနိုင်သလို ရတနာပုံစေတီနားက ကုန်းမြင့်လေးမှာလည်း ကြည့်ရှုခံစားလို့ရပါသည်။  
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/rakhine/ShweAnnTaw/1.jpg'),
                            require('@/assets/images/destination/rakhine/ShweAnnTaw/2.jpg'),
                            require('@/assets/images/destination/rakhine/ShweAnnTaw/3.jpg'),
                            require('@/assets/images/destination/rakhine/ShweAnnTaw/1.jpg'),
                            require('@/assets/images/destination/rakhine/ShweAnnTaw/2.jpg'),
                            require('@/assets/images/destination/rakhine/ShweAnnTaw/3.jpg'),
                            require('@/assets/images/destination/rakhine/ShweAnnTaw/1.jpg'),
                            require('@/assets/images/destination/rakhine/ShweAnnTaw/2.jpg'),
                            require('@/assets/images/destination/rakhine/ShweAnnTaw/3.jpg'),
                            require('@/assets/images/destination/rakhine/ShweAnnTaw/2.jpg'),
                        ],
                    title: `သမိုင်းဝင် ရွှေအံတော်စေတီ၊ ရွှေနံတော်စေတီ၊ ရွှေဆံတော်စေတီ  `,
                    status: 0,
                    content: `ရခိုင်သမိုင်းမှာ မြို့သက်အရှည်ဆုံး ဒွါရာ၀တီ (ခေါ်) သံတွဲမြို့တွင် ဓမ္မသူရအမတ်ကြီးက မြတ်စွာဘုရားရှင် တန့်တော်မူတောင်၌ ဗျာဒိတ်တော်ပေးခဲ့သည့်အတိုင်း သာသနာတော် သက္ကရာဇ် ၂၃၆ ခုနှစ်တွင် ရွှေအံတော်စေတီ၊ ရွှေနံတော်စေတီနှင့် ရွှေဆံတော်စေတီများကို တည်ထားကိုးကွယ်ခဲ့သည်ဟု သိရပါသည်။ <br>
                    မြတ်စွာဘုရားရှင် တန့်တော်မူတောင်၌ ဗျာဒိတ်တော်ပေးခဲ့သည့်အတိုင်း ရွှေအံတော်၊ ရွှေနံတော်၊ ရွှေဆံတော်သည် သာသနာတော်သက္ကရာဇ် ၂၃၆ ခုနှစ်တွင် တည်ထားကိုးကွယ်ခဲ့သည်ဟုသိရသည်။ ရွှေနံတော်စေတီတွင် မြတ်စွာဘုရား၏ နံရိုးတော်ကို ထည့်သွင်းဌာပနာပြီး ရောဟကုဋပဗ္ဗတ တောင်ကုန်းပေါ်တွင် တည်ထားကိုးကွယ်ထားသည်။ ရွှေဆံတော်စေတီတွင် မြတ်စွာဘုရား၏ ဆံတော်ကို ထည့်သွင်းဌာပနာပြီး မဏိကေသတောင်ကုန်းပေါ်တွင် တည်ထားကိုးကွယ်ထားသည်။ ရွှေအံတော်စေတီတွင် မြတ်စွာဘုရား၏ အံတော်မြတ်ကိုဌာပနာပြီး ဝါသုရတောင်ကုန်းပေါ်တွင် တည်ထားကိုးကွယ်လျက်ရှိသည်။  
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/rakhine/GwaBeach/1.jpg'),
                            require('@/assets/images/destination/rakhine/GwaBeach/2.jpg'),
                            require('@/assets/images/destination/rakhine/GwaBeach/3.jpg'),
                            require('@/assets/images/destination/rakhine/GwaBeach/4.jpg'),
                            require('@/assets/images/destination/rakhine/GwaBeach/5.jpg'),
                            require('@/assets/images/destination/rakhine/GwaBeach/1.jpg'),
                            require('@/assets/images/destination/rakhine/GwaBeach/2.jpg'),
                            require('@/assets/images/destination/rakhine/GwaBeach/3.jpg'),
                            require('@/assets/images/destination/rakhine/GwaBeach/4.jpg'),
                            require('@/assets/images/destination/rakhine/GwaBeach/5.jpg'),
                        ],
                    title: `ဂွကမ်းခြေ (ခေါ်) ကမ်းသာယာကမ်းခြေ`,
                    status: 0,
                    content: `ရခိုင်ပြည်နယ်ရှိ ကမ်းခြေတစ်ခုဖြစ်သော ဂွကမ်းခြေ (ခေါ်) ကမ်းသာယာကမ်းခြေသည် သံတွဲမြို့နှင့် (၆၂)မိုင်ကွာဝေးပြီး ငပလီကမ်းခြေတောင်ဖက် မိုင်(၆၀)အကွာ ဂွ-သံတွဲကားလမ်းဘေးတွင် တည်ရှိသည်။ (၃)မိုင်လောက်ရှည်လျားသည့် ပင်လယ်ကမ်းခြေတွင် ကျောက်ဆောင်၊ ကျောက်တန်း၊ အုန်းပင်တန်းများနှင့် တိတ်ဆိတ်ငြိမ်သက်ပြီး သာယာလှပသည့်အပြင် အဝါရောင်သဲကြမ်းပြင်နှင့် ကျောက်စရစ်ခဲလေးများ ရောနှောနေသည့် ကမ်းခြေတစ်ခုလည်းဖြစ်သည်။ လှပသည့်ကမ်းလွန်ကျွန်းတန်းနှင့် ကျောက်တန်းများကို လှေတစ်စင်းနှင့် လှည့်ပတ်ကြည့်ရှုနိုင်မှာဖြစ်ပြီး ကမ်းခြေတစ်လျှောက် လေညင်းခံရင်းလမ်းလျှောက် ထွက်နိုင်သလို၊ တောင်နိမ့်လေးများပေါ်သို့တက်ပြီး ငှက်အမျိုးအစားများကိုလည်း လေ့လာနိုင်ပါသည်။ သဘာဝအတိုင်း လတ်ဆက်သော ပင်လယ်စာများ၏ အရသာကိုလည်း ထိတွေ့မြည်းစမ်းပြီး ဒေသခံ တံငါသည်တို့၏ ဘဝနေထိုင်မှုများကို လေ့လာနိုင်မည်ဖြစ်သည်။ အပန်းဖြေအနားယူရင်း ပင်လယ်၏ သဘာဝအရသာကို အပြည့်အဝရရှိစေနိုင်တဲ့ ကမ်းခြေတစ်ခုဖြစ်သည်။
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/rakhine/NgapaliBeach/1.png'),
                            require('@/assets/images/destination/rakhine/NgapaliBeach/2.jpg'),
                            require('@/assets/images/destination/rakhine/NgapaliBeach/3.jpg'),
                            require('@/assets/images/destination/rakhine/NgapaliBeach/4.jpg'),
                            require('@/assets/images/destination/rakhine/NgapaliBeach/5.jpg'),
                            require('@/assets/images/destination/rakhine/NgapaliBeach/1.png'),
                            require('@/assets/images/destination/rakhine/NgapaliBeach/2.jpg'),
                            require('@/assets/images/destination/rakhine/NgapaliBeach/3.jpg'),
                            require('@/assets/images/destination/rakhine/NgapaliBeach/4.jpg'),
                            require('@/assets/images/destination/rakhine/NgapaliBeach/5.jpg'),
                        ],
                    title: `ငပလီကမ်းခြေ`,
                    status: 0,
                    content: `ငပလီကမ်းခြေသည် ရခိုင်ပြည်နယ်၊ သံတွဲခရိုင်အတွင်း တည်ရှိပြီး ကမ္ဘာလှည့်ခရီးသွားများကို ဆွဲဆောင်ရာ အဓိကနေရာတစ်ခုဖြစ်ပါသည်။ စိမ်းပြာရောင်ရေနှင့် နူးညံ့သောအဖြူရောင်သဲပွင့်များရှိသည့် (၇)ကီလိုမီတာအရှည်ရှိသော ငပလီကမ်းခြေသည် အာရှရှိ အလှဆုံးနှင့် အထင်ရှားဆုံး ကမ်းခြေများထဲတွင် တစ်ခုအပါအဝင်ဖြစ်သည်။ <br>
                    ဖော်ရွေပျူငှာသော ငါးဖမ်းသမား၏ လမ်းညွှန်မှုဖြင့် အပျော်စီးလှေနှင့် ဒေသခံများထံသို့လည်း သွားရောက်လည်ပတ်နိုင်ပြီး မလွဲမသွေ အခြားလုပ်ဆောင်သင့်သည်မှာ ကမ်းခြေနေဝင်အလှကို ကြည့်ရှု ခံစားခြင်းပင်ဖြစ်သည်။ ငပလီကမ်းခြေသည် နိုင်ငံခြားသားများနှစ်သက်သော နေရာတစ်ခုဖြစ်သော်လည်း လူများကျပ်သပ်ထူထပ်ခြင်း မရှိသောကြောင့် အပန်းဖြေအနားယူရန် အသင့်တော်ဆုံးနေရာလည်း ဖြစ်သည်။ ကမ်းခြေတစ်လျှောက်လည်ပတ်ရန် အကောင်းဆုံးအချိန်မှာ အောက်တိုဘာလမှ မေလအတွင်း ဖြစ်သည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/rakhine/PearlIsland/1.jpg'),
                            require('@/assets/images/destination/rakhine/PearlIsland/2.jpg'),
                            require('@/assets/images/destination/rakhine/PearlIsland/3.jpg'),
                            require('@/assets/images/destination/rakhine/PearlIsland/1.jpg'),
                            require('@/assets/images/destination/rakhine/PearlIsland/2.jpg'),
                            require('@/assets/images/destination/rakhine/PearlIsland/3.jpg'),
                            require('@/assets/images/destination/rakhine/PearlIsland/1.jpg'),
                            require('@/assets/images/destination/rakhine/PearlIsland/2.jpg'),
                            require('@/assets/images/destination/rakhine/PearlIsland/3.jpg'),
                            require('@/assets/images/destination/rakhine/PearlIsland/2.jpg'),
                        ],
                    title: `ပုလဲကျွန်း (ခေါ်) အပေါ်ရဲကျွန်း`,
                    status: 0,
                    content: `ငပလီကမ်းခြေအနီးတွင် ကျွန်းများစွာရှိပြီး အကြီးဆုံးကျွန်းမှာ ပုလဲကျွန်း (ခေါ်) အပေါ်ရဲကျွန်း ဖြစ်သည်။ ပုလဲကျွန်းသည် သံတွဲမြို့နယ်အတွင်း ငပလီကမ်းခြေမှ (၁)မိုင်ခန့်အကွာတွင် တည်ရှိပြီး ဧရိယာ (၁၀၈)ဧကကျယ်ဝန်းကာ ယခင်ကပုလဲမွေးမြူရေးလုပ်ငန်း လုပ်ကိုင်ခဲ့သော နေရာတစ်ခုလည်းဖြစ်ကြောင်း သိရသည်။ ၄င်းကျွန်းတွင် ရှားပါးတောရိုင်းတိရစ္ဆာန်များ၊ ပင်လယ်လိပ်များ ကျက်စားတဲ့ ကျွန်းကြီးဖြစ်ပြီး နှစ်တစ်ရာကျော်သက်တမ်းရှိ သစ်ပင်ကြီးများလည်းရှိသည်။ ရေအရမ်းကြည်ပြီး ငါးအလှများကို လေ့လာနိုင် သည့်အပြင် Snorkeling လည်း လုပ်လို့ရသည့် ကျွန်းဖြစ်သည်။
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/rakhine/JakeTawVillage/1.jpg'),
                            require('@/assets/images/destination/rakhine/JakeTawVillage/1.jpg'),
                            require('@/assets/images/destination/rakhine/JakeTawVillage/1.jpg'),
                            require('@/assets/images/destination/rakhine/JakeTawVillage/1.jpg'),
                            require('@/assets/images/destination/rakhine/JakeTawVillage/1.jpg'),
                            require('@/assets/images/destination/rakhine/JakeTawVillage/1.jpg'),
                            require('@/assets/images/destination/rakhine/JakeTawVillage/1.jpg'),
                            require('@/assets/images/destination/rakhine/JakeTawVillage/1.jpg'),
                            require('@/assets/images/destination/rakhine/JakeTawVillage/1.jpg'),
                            require('@/assets/images/destination/rakhine/JakeTawVillage/1.jpg'),
                        ],
                    title: `ဂျိတ်တောငါးဖမ်းကျေးရွာ`,
                    status: 0,
                    content: `ဂျိတ္တောရပ်ကွက်သည် ရခိုင်ပြည်နယ်၊ သံတွဲခရိုင်၊ ငပလီမြို့တွင်ပါဝင်သော ရပ်ကွက်တစ်ခုဖြစ်သည်။ ယခင်ကရွာဖြစ်သော်လည်း ငပလီရွာအားမြို့အဖြစ် အဆင့်မြှင့်ရာတွင် ရပ်ကွက်ဖြစ်လာခဲ့ပြီး အိမ်ခြေ သုံးထောင်ကျော်ခန့်ရှိသည့် ရွာကြီးတစ်ရွာဖြစ်သည်။ ပင်လယ်ရေလုပ်ငန်း အဓိကထားလုပ်ကိုင်ပြီး ငါးဖမ်း ကိရိယာမျိုးစုံအားအသုံးပြုပြီး သားငါးရှာဖွေကြသည်။ အဓိကအားဖြင့် ကျော့ပိုက်လုပ်ငန်းမှာ အတွင်ကျယ်ဆုံး ဖြစ်သည်။ ငါးနီတူ၊ ကျောညို၊ ငါးဝိုင်း၊ ငါးမျိုးစုံအား နေခြောက်လှန်း၍ ရန်ကုန်၊ မန္တလေး စသည့် မြို့ကြီးများသို့ တင်ပို့ရောင်းချကြသလို ဘင်္ဂလားဒေ့ခ်ျအထိပါ တင်ပို့ရောင်းချကြသည်။ ခရီးသွား ဧည့်သည်များအနေဖြင့် နံနက်ခင်းအစောတွင် လှေစီးနိုင်ပြီး ငါးဖမ်းဝါသနာပါသူဖြစ်ပါက လတ်ဆက်သော ငါးများ ကိုယ်တိုင်ဖမ်းယူနိုင်သည်။ 
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

            return { swiper, paginatedData, nextPage, prevPage, pageCount, pageNumber };
        },
    };
</script>