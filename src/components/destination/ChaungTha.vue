<template>
    <div class="destination">
        <div class="hero-section">
            <div class="banner">
                <img src="@/assets/images/destination/chaungtha/banner.webp" class="banner" alt="">
            </div>
            <div class="content">
                <div class="hero-header">
                    <img src="@/assets/images/destination/travel.gif" class="icon" alt="">
                
                    <h3>Places to Visit in</h3>
                    <h2>Chaung Tha Beach</h2>
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
                            require('@/assets/images/destination/chaungtha/chaung_tha/1.jpg'),
                            require('@/assets/images/destination/chaungtha/chaung_tha/2.jpg'),
                            require('@/assets/images/destination/chaungtha/chaung_tha/3.jpg'),
                            require('@/assets/images/destination/chaungtha/chaung_tha/4.jpg'),
                            require('@/assets/images/destination/chaungtha/chaung_tha/1.jpg'),
                            require('@/assets/images/destination/chaungtha/chaung_tha/2.jpg'),
                            require('@/assets/images/destination/chaungtha/chaung_tha/3.jpg'),
                            require('@/assets/images/destination/chaungtha/chaung_tha/4.jpg'),
                            require('@/assets/images/destination/chaungtha/chaung_tha/1.jpg'),
                        ],
                    title: `ချောင်းသာကမ်းခြေ`,
                    status: 0,
                    content: `ချောင်းသာကမ်းခြေသည် ဧရာဝတီတိုင်းဒေသကြီး၊ ရွှေသောင်ယံမြို့နယ်၊ ချောင်းသာရွာတွင် တည်ရှိသည်။ ၂၀၁၁ ခုနှစ်၊ ဖေဖော်ဝါရီလတွင် အရှည်(၁)မိုင် (၄)ဖာလုံခန့်ရှိပြီး စတင်ဖွင့်လှစ်စဉ်အချိန်က ဟိုတယ်တစ်ခုတည်းဖြင့် စတင်ခဲ့သော်လည်း ၁၉၉၆ ခုနှစ် နောက်ပိုင်းမှစ၍ ဆက်လက်တိုးချဲ့ခဲ့ရာ ယခုချောင်းသာကမ်းခြေတွင် ဟိုတယ်ပေါင်းမြောက်များစွာ ရှိနေပြီဖြစ်သည်။ ချောင်းသာကမ်းခြေသည် ပင်လယ်စာပေါများပြီး ပြည်တွင်းခရီးသွားတွေရဲ့ သည်းခြေကြိုက် ကမ်းခြေတစ်ခုလို့တောင် တင်စားလို့ ရပါသည်။ အရင်က အိမ်နီးချင်းနိုင်ငံတွေဖြစ်ကြတဲ့ ထိုင်းနိုင်ငံ  ဖူးခက်၊ ပတ္တယားနဲ့ အင်ဒိုနီးရှား ဘာလီတို့မှာပဲ ပင်လယ်ပြင်ပေါ် လေထီးစီးခြင်း(Parasailing)ကို လုပ်လို့ရပေမယ့် ယခုဆိုရင် ချောင်းသာကမ်းခြေမှာလည်း လေထီးစီးခြင်းကို ပြုလုပ်နိုင်ပြီဖြစ်သည်။ ချောင်းသာကမ်းခြေတွင် လေထီးစီးခြင်းအပြင် ရေပြင်ပေါ်မှာ ပြုလုပ်ရတဲ့ လှုပ်ရှားမှုမျိုးစုံကိုပါ ပြုလုပ်လို့ရနေပြီဖြစ်သည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/chaungtha/kyark_maung_hna_ma/1.jpg'),
                            require('@/assets/images/destination/chaungtha/kyark_maung_hna_ma/2.jpg'),
                            require('@/assets/images/destination/chaungtha/kyark_maung_hna_ma/3.jpg'),
                            require('@/assets/images/destination/chaungtha/kyark_maung_hna_ma/2.jpg'),
                            require('@/assets/images/destination/chaungtha/kyark_maung_hna_ma/1.jpg'),
                            require('@/assets/images/destination/chaungtha/kyark_maung_hna_ma/2.jpg'),
                            require('@/assets/images/destination/chaungtha/kyark_maung_hna_ma/3.jpg'),
                            require('@/assets/images/destination/chaungtha/kyark_maung_hna_ma/3.jpg'),
                            require('@/assets/images/destination/chaungtha/kyark_maung_hna_ma/2.jpg'),
                        ],
                    title: `ကျောက်မောင်နှမ`,
                    status: 0,
                    content: `ကျောက်မောင်နှမသည် ချောင်းသာကမ်းခြေမှ (၂)မိုင်ခွဲဝန်းကျင်လောက်သွားရပြီး မောင်နဲ့နှမ ကျောက်ဆောင်ကြီးတွေ တည်ရှိသလို အနီးနားမှာ ကျောက်တုံးကျောက်စိုင်တွေ ပေါများပြီး ဓါတ်ပုံရိုက်လို့ ကောင်းသည်။ ကျောက်မောင်နှမကမ်းခြေလို့လည်း ခေါ်ကြသည်။ ကမ်းခြေမှာ လေးဘီးတပ် သဲသောင်ပြင်စီး ဆိုင်ကယ်တွေရှိသလို အနားယူအပန်းဖြေစရာ စားသောက်ဆိုင်လေးတွေလည်း ရှိသည်၊၊ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/chaungtha/zakawar_taung/3.jpg'),
                            require('@/assets/images/destination/chaungtha/zakawar_taung/1.jpg'),
                            require('@/assets/images/destination/chaungtha/zakawar_taung/2.jpg'),
                            require('@/assets/images/destination/chaungtha/zakawar_taung/2.jpg'),
                            require('@/assets/images/destination/chaungtha/zakawar_taung/3.jpg'),
                            require('@/assets/images/destination/chaungtha/zakawar_taung/1.jpg'),
                            require('@/assets/images/destination/chaungtha/zakawar_taung/2.jpg'),
                            require('@/assets/images/destination/chaungtha/zakawar_taung/3.jpg'),
                            require('@/assets/images/destination/chaungtha/zakawar_taung/2.jpg'),
                        ],
                    title: `စကားဝါတောင်`,
                    status: 0,
                    content: `စကားဝါတောင်သည် ချောင်းသာဒေသရဲ့ အရှေ့တောင်ဘက်မှာရှိတဲ့ အမြင့်ဆုံးတောင်ဖြစ်သည်။ စကားဝါတောင်ကို ရပ်ကွက်တွင်းမှ (၁၅)မိနစ်ဝန်းကျင်လောက် သွားရသည်။ တောင်ဆိုပေမယ့် အမြင့်ကြီး တက်ရတာမဟုတ်ဘဲ တောင်ကုန်းပုံစံဖြစ်သည်။ စကားဝါတောင်ထိပ်တွင် ကြီးမားပြီးသပ္ပါယ်လှတဲ့ နဂါးရုံဘုရားကြီးတည်ရှိပါသည်။ နဂါးရုံဘုရားကြီးသည် နဂါးရုံဘုရားတွေထဲမှာ အကြီးဆုံးနဲ့ အသပ္ပါယ်ဆုံးလို့ ပြောလို့ရပြီး နဂါးခုနှစ်ကောင်ရုံထားတာပါ။ ဘုရားဘွဲ့တော်မှာ “ဒီပါအေးမြမဟာနဂါးရုံမြတ်စွာဘုရား” ဖြစ်သည်၊၊ နဂါးရုံဘုရားကြီးဘေးတွင်  ထိုင်းနိုင်ငံမှ အလှူရှင်တစ်ဦးလှူဒါန်းထားတဲ့ ထိုင်းခေါင်းလောင်းကြီး တစ်လုံးလည်း ရှိပါသေးသည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/chaungtha/phoe_kalar_kyun/1.jpg'),
                            require('@/assets/images/destination/chaungtha/phoe_kalar_kyun/1.jpg'),
                            require('@/assets/images/destination/chaungtha/phoe_kalar_kyun/1.jpg'),
                            require('@/assets/images/destination/chaungtha/phoe_kalar_kyun/1.jpg'),
                            require('@/assets/images/destination/chaungtha/phoe_kalar_kyun/1.jpg'),
                            require('@/assets/images/destination/chaungtha/phoe_kalar_kyun/1.jpg'),
                            require('@/assets/images/destination/chaungtha/phoe_kalar_kyun/1.jpg'),
                            require('@/assets/images/destination/chaungtha/phoe_kalar_kyun/1.jpg'),
                            require('@/assets/images/destination/chaungtha/phoe_kalar_kyun/1.jpg'),
                        ],
                    title: `ဖိုးကုလားကျွန်း (သို့) အောင်မင်္ဂလာကျွန်း  `,
                    status: 0,
                    content: `ဖိုးကုလားကျွန်း (သို့) အောင်မင်္ဂလာကျွန်းသည် ချောင်းသာကမ်းခြေနဲ့ အနီးဆုံး၊ အကြီးဆုံး ကျွန်းဖြစ်ပါသည်။ အငူစွန်းကူးတို့ဆိပ်မှ စက်လှေ(၅)မိနစ်လောက်စီးရုံနဲ့ ရောက်နိုင်ပါသည်၊၊ ဒေသခံတွေရဲ့ ဓလေ့များကို လေ့လာနိုင်ပြီး ကျွန်းရဲ့တောင်ပေါ်တွင် တည်ထားသော အောင်မင်္ဂလာစေတီကိုလည်း ဖူးမြှော်နိုင်သည်။ ကနူးလှေတွေ လှော်လို့ရသလို ငါးမျှားချင်တယ်ဆိုလည်း ငါးမျှားချိတ်လေးငှားပြီး စိတ်ကြိုက်မျှားလို့လည်းရတော့ ချောင်းသာရောက်တဲ့အခါ ဖိုးကုလားကျွန်းကို သွားရောက်လည်ပတ်သင့် ပါသည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/chaungtha/white_island/1.jpg'),
                            require('@/assets/images/destination/chaungtha/white_island/1.jpg'),
                            require('@/assets/images/destination/chaungtha/white_island/1.jpg'),
                            require('@/assets/images/destination/chaungtha/white_island/1.jpg'),
                            require('@/assets/images/destination/chaungtha/white_island/1.jpg'),
                            require('@/assets/images/destination/chaungtha/white_island/1.jpg'),
                            require('@/assets/images/destination/chaungtha/white_island/1.jpg'),
                            require('@/assets/images/destination/chaungtha/white_island/1.jpg'),
                            require('@/assets/images/destination/chaungtha/white_island/1.jpg'),
                        ],
                    title: `သဲဖြူကျွန်း `,
                    status: 0,
                    content: `သဲဖြူကျွန်းကို ချောင်းသာကမ်းခြေမှ စက်လှေဖြင့် သွားရောက်လည်ပတ်နိုင်ပြီး ကျွန်းပေါ်တွင် ခရီးသွားများ ဖူးမြှော်နိုင်ရန် စေတီတစ်ဆူ တည်ထားသည်။ သဲဖြူကျွန်းဟု ဆိုတဲ့အတိုင်း ဖြူလွလွ သဲမြေပေါ်တွင် အနက်ရောင် ကျောက်ဆောင်ကျောက်တုံးများဖြင့် အရမ်းလှပသည့် ကျွန်းလေးတစ်ကျွန်း ဖြစ်သည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/chaungtha/kyauk_puhtoe_pagoda/1.jpg'),
                            require('@/assets/images/destination/chaungtha/kyauk_puhtoe_pagoda/1.jpg'),
                            require('@/assets/images/destination/chaungtha/kyauk_puhtoe_pagoda/1.jpg'),
                            require('@/assets/images/destination/chaungtha/kyauk_puhtoe_pagoda/1.jpg'),
                            require('@/assets/images/destination/chaungtha/kyauk_puhtoe_pagoda/1.jpg'),
                            require('@/assets/images/destination/chaungtha/kyauk_puhtoe_pagoda/1.jpg'),
                            require('@/assets/images/destination/chaungtha/kyauk_puhtoe_pagoda/1.jpg'),
                            require('@/assets/images/destination/chaungtha/kyauk_puhtoe_pagoda/1.jpg'),
                            require('@/assets/images/destination/chaungtha/kyauk_puhtoe_pagoda/1.jpg'),
                        ],
                    title: `ကျောက်ပုထိုးစေတီတော် (ဆုတောင်းပြည့်ဇဗ္ဗူပတိရုပ်ပွားတော်)`,
                    status: 0,
                    content: `ချောင်းသာကမ်းခြေရှိ ကျောက်ပုထိုးစေတီတော်သည် ကမ်းခြေ၏ အထင်ကရစေတီတစ်ဆူ ဖြစ်သည်။ သဘာဝကျောက်သားကျောက်တုံးကြီးပေါ်တွင် စေတီတစ်ဆူတည်ထားပြီး အောက်ခြေလိုဏ်ဂူ အတွင်းတွင် ဗုဒ္ဓရုပ်ပွားတော်တစ်ဆူ ပူဇော်ထားရှိသည်။ စေတီတော်နှင့် ရုပ်ပွားတော်တို့၏ ဘွဲ့အမည် အပြည့်အစုံမှာ ကျောက်ပုထိုးရွေပြည်အေးစေတီနှင့် မဟာဇဗ္ဗူပတိရာဇမုနိ အောင်ဆုပြည့်ရုပ်ပွားတော် ဖြစ်ပါသည်။ ကျောက်ပုထိုးစေတီဘုရား၏ ထူးခြားအံ့ဩဖွယ်ရာတစ်ခုမှာ ရေပြည့်လာသော်လည်း ပင်လယ်ရေလှိုင်းများ ဘုရားရှင်၏ ရုပ်ပွားတော် သီတင်းသုံးရာ လိုဏ်ဂူဝသို့ မည်သည့်အခါမျှ မဝင်ရောက်ခြင်း ဖြစ်သည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/chaungtha/mu_htaw_9/1.jpg'),
                            require('@/assets/images/destination/chaungtha/mu_htaw_9/2.jpg'),
                            require('@/assets/images/destination/chaungtha/mu_htaw_9/3.jpg'),
                            require('@/assets/images/destination/chaungtha/mu_htaw_9/4.jpg'),
                            require('@/assets/images/destination/chaungtha/mu_htaw_9/5.jpg'),
                            require('@/assets/images/destination/chaungtha/mu_htaw_9/6.jpg'),
                            require('@/assets/images/destination/chaungtha/mu_htaw_9/7.jpg'),
                            require('@/assets/images/destination/chaungtha/mu_htaw_9/8.jpg'),
                            require('@/assets/images/destination/chaungtha/mu_htaw_9/9.jpg'),
                        ],
                    title: `ပုသိမ်မြို့၏ အထင်ကရမုဋ္ဌောကိုးဆူ`,
                    status: 0,
                    content: `ဧရာ၀တီတိုင်း၏ မြို့တော်ဖြစ်သော ပုသိမ်မြို့နှင့် မြို့ပတ်၀န်းကျင်တွင်တည်ရှိသော မုဋ္ဌောကိုးဆူသည် “ဗုဒ္ဓဝင်အရ”၊ “တည်ထားပုံအရ” ပါထူးခြားပြီး သမိုင်းဝင်သည့် မုဋ္ဌော(၉)ဆူဖြစ်ပါသည်။ “ဗုဒ္ဓဝင်အရ” ဟုဆိုသည်မှာ မုဋ္ဌော(၉)ဆူဝင် စေတီတော်များသည် မြတ်ဗုဒ္ဓရဲ့ ဓာတ်တော်၊ မွေတော်တို့ ကိန်းဝပ်ရာ ဖြစ်နေခြင်းကို ဆိုလိုပါသည်။ “တည်ထားပုံအရ” ဆိုသည်မှာ မုဋ္ဌော(၉)ဆူဝင် စေတီတော်များသည် မြတ်ဗုဒ္ဓပါရမီဖြည့်စဉ်၊ ဖြစ်တော်စဉ်ဘဝ ပျော်စံခဲ့‌သောနေရာများမှာ တည်ထားခြင်းကို ဆိုလိုပါသည်။ ထို့ကြောင့် စေတီတော်အများစု၏ လုံးပတ်တော်မှာ ဗုဒ္ဓဖြစ်တော်စဉ်ဘဝ ပုံတော်များကို ထုလုပ်ထားရှိ ကြသည်ကို တွေ့မြင်နိုင်ပါသည်။ <br>
                    ထိုသို့ထူးခြားလှ‌သော ဧရာဝတီတိုင်း၏ ဂုဏ်ကျက်သရေဆောင် သမိုင်းဝင် မုဋ္ဌော(၉)ဆူကို အတွင်း (၅)ဆူ၊ အပြင် (၄)ဆူဟူ၍ ခေတ်အဆက်ဆက် ခွဲခြားအမှတ်အသားပြုခဲ့ကြသည်။ ပုသိမ်မြို့မနဲ့ ပုသိမ်မြို့ ဆင်ခြေဖုံးကို အတွင်း၊ ပုသိမ်မြို့နှင့် အလှမ်းဝေး‌သောနေရာကို အပြင်ဟု သတ်မှတ်ခဲ့ကြလေသည်။ မုဋ္ဌော (၉)ဆူ သမိုင်းသည် ပုသိမ်မြို့သမိုင်းနှင့် လုံးဝခွဲခြားမရစွာ ဖြစ်တည်နေပါသဖြင့်  ဤသို့ထူးခြားပြီး သမိုင်းဝင် သော မုဋ္ဌော(၉)ဆူကို (၁)ရက်တည်းအပြီး ဖူးမြှော်ခွင့်ရသူတို့မှာ အလွန်ကုသိုလ်ကံထူးသူများပင်ဖြစ်ပြီး လိုရာဆန္ဒများပြည့်၀ကြသည်ဟုပင် ယုံကြည်စွာပြောဆိုကြသည်ကိုသိမှတ်ရပါသည်။ <br>
                    အတွင်းမုဋ္ဌော (၅)ဆူဝင် စေတီတော်များမှာ... <br>
                    &nbsp; &nbsp; &nbsp;(၁)	ရွှေမုဋ္ဌောစေတီတော် <br>
                    &nbsp; &nbsp; &nbsp;(၂)	မဟာစေတီတော် <br>
                    &nbsp; &nbsp; &nbsp;(၃)	တကောင်းမင်္ဂလာစေတီတော် <br>
                    &nbsp; &nbsp; &nbsp;(၄)	မဟာဗောဓိစေတီတော် <br>
                    &nbsp; &nbsp; &nbsp;(၅)	ဆုတောင်းပြည့်သုမင်္ဂလာစေတီတော်...တို့ ဖြစ်သည်။ <br>
                    အပြင်မုဋ္ဌော (၄)ဆူဝင် စေတီတော်များမှာ... <br>
                    &nbsp; &nbsp; &nbsp;(၁)	ရှင်သုမနစေတီတော် <br>
                    &nbsp; &nbsp; &nbsp;(၂)	ရွှေပုတ်သင်စေတီတော် <br>
                    &nbsp; &nbsp; &nbsp;(၃)	သိရီဝဏ္ဏစေတီတော် <br>
                    &nbsp; &nbsp; &nbsp;(၄)	အကျော်ဇေယျ ပဿထစေတီတော်...တို့ ဖြစ်သည်။  <br><br>
                    (၁)	ရွှေမုဋ္ဌောစေတီတော်  <br><br>
                    (၂)	မဟာစေတီတော် <br>
                    &nbsp;&nbsp;&nbsp;ပုသိမ်မြို့ အရှေ့တောင်ဘက်၊ သရောင်းချောင်းအလွန်၊ ဘုရားကြီးကုန်းကျေးရွာ ဒေသတဝိုက်သည်  အလောင်းတော်ဆင်မင်း ကျက်စားဖူးရာဒေသဖြစ်ခဲ့ဘူးသောကြောင့် ထိုအရပ်မှာပင် ဓာတ်တော်၊ မွေတော်များ ကိုဌာပနာ၍ မဟာစေတီတော်ကို တည်ထားခဲ့ပါသည်။ ၎င်းစေတီတော်ကို ရှေးအခါက "ကျိုက်ပိ" ဟူ၍ ခေါ်ခဲ့ဟန်ရှိပါသည်။  <br><br>
                    (၃)	တကောင်းမင်္ဂလာစေတီတော် <br>
                    &nbsp;&nbsp;&nbsp;တကောင်းမင်္ဂလာစေတီတော်ကို ဘုရားအလောင်း ရှဉ့်မင်းဖြစ်ဖူးသောဒေသ၌ တည်ထားခြင်းဖြစ်ပြီး မွေတော်-၈၀ ၊ ဆံတော်-၄၀၊ စွယ်တော် ၁ ဆူနှင့် ရွှေသုံးမျိုးကို  ပန်းကလပ်လုပ်၍ ဌာပနာပြုပြီး တည်ထားပါသည်။ ရှေးယခင်အခါက "မင်္ဂလာစေတီ" ဟူသော ဘွဲ့တော်မှည့်ခေါ်ခဲ့ကြသော်လည်း တဂေါင်း ဘုရား/တကောင်းမင်္ဂလာစေတီတော် ဟူသောဘွဲ့တော်ဖြင့်သာ လူသိများထင်ရှားခဲ့လေသည်။ <br><br>
                    (၄)	မဟာဗောဓိစေတီတော်  <br>
                    &nbsp;&nbsp;&nbsp;မဟာဗောဓိစေတီတော်ကို ပုသိမ်မြို့၏ အနောက်တောင်အရပ်၊ အမှတ်(၈)ရပ်ကွက်၊ ဝေဠု၀န် ဘုန်းတော်ကြီးကျောင်းနှင့် မျက်နှာချင်းဆိုင်တွင် တည်ရှိပါသည်။ ဘုရားအလောင်း ရွှေသမင်ဖြစ်ခဲ့ဖူး‌သော ဒေသတွင် တည်ထားခြင်းဖြစ်ပြီး ရွှေသုံးမျိုးကို ပန်းတောင်းလုပ်လျက် မွေတော် ၈၀ နှင့် စွယ်တော် ၁ ဆူတို့ကို ဋ္ဌာပနာပြု တည်ထားကိုးကွယ်ခဲ့လေသည်။ <br><br>
                    (၅)	ဆုတောင်းပြည့်သုမင်္ဂလာစေတီတော်   <br>
                    &nbsp;&nbsp;&nbsp;မဟာဗောဓိဘုရားအနီး တောင်ဘက်အရပ်မှာ အလောင်းတော်ရှဉ့်မင်း ခန္ဓာစဲရာအရပ်ဖြစ်ခဲ့ဖူးသဖြင့် ထိုနေရာ၌ ဓာတ်တော်၊ မွေတော်တို့ကို ဌာပနာပြုလျက် ဆုတောင်းပြည့်သုမင်္ဂလာစေတီတော်ကို တည်ထား ကိုးကွယ်ခဲ့ကြသည်။ ၎င်းဘုရားဝင်းအတွင်းမှာပင် ရေကြည်ရေနောက်ဘုရား(ယခုအခေါ် - ရေကြည်ဦးဘုရား) စံပယ်တော်မူပါသဖြင့် တဆက်တည်းဖူးမြှော် ကြည်ညိုနိုင်မည်ဖြစ်သည်။ <br><br>
                    (၆)	ရှင်သုမနစေတီတော်   <br>
                    &nbsp;&nbsp;&nbsp;ပုသိမ်မြို့ အနောက်တောင်ဘက်၊ ကွင်းချောင်းဒေသ(ယခုငပုတောမြို့နယ်၊ ကွင်းချောင်းကျေးရွာ အနီး)တွင် ရှေးယခင်အခါက အလောင်းတော်ခိုမင်း ဖြစ်ခဲ့ဖူးသဖြင့် ထိုအရပ်တွင် မွေတော် ၈ဝ၊ စွယ်တော် ၄၀၊  ဆံတော်၊ အံ့တော်တို့ကို ရွှေကလပ်မှာတင်လျက် ဌာပနာပြုကာ စေတီတည်ထားခြင်းဖြစ်သည်။ <br><br>
                    (၇)	ရွှေပုတ်သင်စေတီတော်   <br>
                    &nbsp;&nbsp;&nbsp; ပုသိမ်မြို့ အနောက်မြောက်၊ ကျောက်ချောင်းကြီးကျေးရွာ ဒေသတဝိုက်သည် အလောင်းတော် ရွှေပုတ်သင်ဖြစ်ခဲ့ဖူးသဖြင့် ထိုဒေသမှာပင်  စေတီတော်တည်ထား ကိုးကွယ်ထားခြင်းဖြစ်သည်။ ကျောက် ချောင်းကြီးကျေးရွာအလယ် ဘုရားဝင်းထဲတွင် စေတီတော်နှစ်ဆူရှိပြီး အဝင်ဘက်က ဖူးမြော်ကြည့်လျှင် ဘယ်ဘက်၌ရှိသောစေတီတော်မှာ ရွှေပုတ်သင်စေတီ ဖြစ်သည်။  <br><br>
                    (၈)	သိရီဝဏ္ဏစေတီတော်   <br>
                    &nbsp;&nbsp;&nbsp; ရွှေမြင်တင်ကျေးရွာအနီးရှိသဖြင့် အများမှ ရွှေမြင်တင်စေတီတော်ဟု ခေါ်ဝေါ်နေကြသော သိရီဝဏ္ဏစေတီတော်မှာ ပုသိမ်မြို့ မြောက်ဘက်၊ ဒါးကမြစ်၏ လက်ယာဘက်ကမ်း တောင်ထိပ်ပေါ်တွင် တည်ရှိပါသည်။ အလောင်းတော် ကြက်မင်း ဖြစ်ခဲ့ဖူး‌သောဒေသမှာ မွေတော်၊ စွယ်တော်၊ ဆံတော်တို့ကို ဌာပနာ၍ တည်ထားခဲ့ခြင်းဖြစ်၍ ရွှေကြက်ယက်စေတီတော်ဟုလည်း ခေါ်ဝေါ်လေ့ရှိကြသည်။   <br><br>
                    (၉)	အကျော်ဇေယျ ပဿထ စေတီတော်   <br>
                    &nbsp;&nbsp;&nbsp; ပုသိမ်မြို့မြောက်ဘက် ခရီးတိုင်ပေါင်း နှစ်သောင်းခန့်အကွာ၊ သာပေါင်းမြို့၏အထက် ဘိုးတော်ကြီးရွာ၊ ငဝန်မြစ်၏ အနောက်ဘက်ကမ်းနဖူးတွင်တည်ရှိပြီး အလောင်းတော်ကျေးမင်း ကျက်စားပျော်ပါးခဲ့ဖူးရာ ဒေသမှာ မွေတော်၊ ဆံတော်၊ စွယ်တော်တို့ကို ဌာပနာ၍ တည်ထားခဲ့သောစေတီတော်ဖြစ်သည်။   <br>
                    &nbsp;&nbsp;&nbsp; အ = တနင်္ဂနွေ၊ ကျော် = တနင်္လာ၊ ဇေ = အင်္ဂါ၊ ယျ = ဗုဒ္ဓဟူး၊ ပ = ကြာသပတေး၊ ဿ = သောကြာ၊ ထ = စနေ ဟူ၍ (၇)နေ့နံပါအောင် မှည့်ခေါ်ခဲ့ခြင်းဖြစ်ကြောင်းလည်း ဗဟုသုတအဖြစ် သိရှိမှတ်သားခဲ့ရပါသည်။ (၇)ရက်သားသမီးများ ချမ်းသာစေရန်ရည်ရွယ်၍ တည်ထားခဲ့ဟန်ရှိပြီး ယခုချိန်မှာ ဘိုးတော်ကြီးစေတီ ဟူ၍လည်း ခေါ်‌ဝေါ်ကြပါသည်။   <br>
                    
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/chaungtha/shwe_moke_htaw/1.jpg'),
                            require('@/assets/images/destination/chaungtha/shwe_moke_htaw/2.jpg'),
                            require('@/assets/images/destination/chaungtha/shwe_moke_htaw/1.jpg'),
                            require('@/assets/images/destination/chaungtha/shwe_moke_htaw/2.jpg'),
                            require('@/assets/images/destination/chaungtha/shwe_moke_htaw/1.jpg'),
                            require('@/assets/images/destination/chaungtha/shwe_moke_htaw/2.jpg'),
                            require('@/assets/images/destination/chaungtha/shwe_moke_htaw/1.jpg'),
                            require('@/assets/images/destination/chaungtha/shwe_moke_htaw/2.jpg'),
                            require('@/assets/images/destination/chaungtha/shwe_moke_htaw/1.jpg'),
                        ],
                    title: `ရွှေမုဋ္ဌောဘုရား `,
                    status: 0,
                    content: `မြန်မာနိုင်ငံ တန်ခိုးကြီးဘုရားများအနက် တစ်ဆူအပါအဝင်ဖြစ်သော ရွှေမုဋ္ဌောဘုရားသည် ဧရာဝတီ တိုင်းဒေသကြီး၊ ပုသိမ်မြို့လယ် မြို့မစျေးအနီးတွင် တည်ရှိသည်။ မြေပေါက်စေတီဖြစ်သည့်အပြင် ပုသိမ်မြို့၏ အထင်ရှားဆုံးဘုရားဖြစ်သည်။ <br><br>
                    &nbsp;&nbsp;စေတီတော်သမိုင်းအဆိုအရ ရွှေမုဋ္ဌောဘုရားကို သာသနာသက္ကရာဇ် ၂၁၈ ခုနှစ် တပေါင်းလပြည့်နေ့ တွင် သီရိဓမ္မာသောကမင်း တည်သည်ဟုဆိုသည်။ သီရိဓမ္မာသောကမင်းလက်ထက် တည်စက ရွှေအာဏာ စေတီဟုတွင်၍ ၄၅၇ ခုနှစ်တွင် အလောင်းစည်သူမင်းကြီး ပြန်လည်ပြုပြင်ပြီးသောအခါ ထူပါရုံစေတီဟု သမုတ်သည်။ ၆၂၅ ခုနှစ်တွင် သမုဒ္ဒဃောသမင်းနှင့် ဥမ္မာဒန္တီ မိဖုရားတို့ တိုးချဲ့တည်ပြီးသောအခါမှ ရွှေမုဋ္ဌောဟု အမည်တွင်ခဲ့ခြင်း ဖြစ်လေသည်။  <br><br>
                    &nbsp;&nbsp; 
                    ခေတ်အဆက်ဆက် ပြုပြင်ထိန်းသိမ်းကိုးကွယ်လာခဲ့ရာ ယခုတည်ရှိသည့်အတိုင်းဖြစ်သော မြေမှ ခရားသီးအဆုံးထိ (၇၇)တောင်၊ ထီးရပ် (၂၃)တောင်၊ လုံးပတ်တော် (၂ဝ၇)တောင်နှင့် ဖိနပ်တော် (၂၇၂)တောင် အသီးအသီးရှိသော ဉာဏ်တော်၊ လုံးဝန်းပမာဏတော်တို့ကို ဆောင်စေလျက် စိန်ဖူးတော်၊ ရွှေထီးတော်၊ ငွေထီးတော်အပြင် ရတနာအပေါင်းဖြင့် စီခြယ်အပ်သော ရွှေသားငှက်မြတ်နားတို့ဖြင့် ခမ်းနားထည်ဝါ ကြည်ညိုဖွယ်ရာ ဖူးမြှော်နိုင်ပါသည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/chaungtha/lay_kyun_yan_aung/2.jpg'),
                            require('@/assets/images/destination/chaungtha/lay_kyun_yan_aung/1.jpg'),
                            require('@/assets/images/destination/chaungtha/lay_kyun_yan_aung/2.jpg'),
                            require('@/assets/images/destination/chaungtha/lay_kyun_yan_aung/1.jpg'),
                            require('@/assets/images/destination/chaungtha/lay_kyun_yan_aung/2.jpg'),
                            require('@/assets/images/destination/chaungtha/lay_kyun_yan_aung/1.jpg'),
                            require('@/assets/images/destination/chaungtha/lay_kyun_yan_aung/2.jpg'),
                            require('@/assets/images/destination/chaungtha/lay_kyun_yan_aung/1.jpg'),
                            require('@/assets/images/destination/chaungtha/lay_kyun_yan_aung/1.jpg'),
                        ],
                    title: `လေးကျွန်းရန်အောင် ဖောင်တော်ဦးစေတီ `,
                    status: 0,
                    content: `&nbsp; &nbsp; &nbsp; လေးကျွန်းရန်အောင်ဖောင်တော်ဦးစေတီသည် ဧရာဝတီတိုင်းဒေသကြီး၊ ပုသိမ်မြို့တောင်ဘက်၊ ရေကြည်ဦးအရပ်တွင် တည်ရှိသည်။ သမိုင်းဝင်ရှေးဟောင်း ဘုရားစေတီတစ်ဆူဖြစ်ပြီး စေတီရဲ့ထူးခြားချက်မှာ ပုဂံမြို့ဟောင်းတွင်ရှိသည့် တန်ခိုးကြီးဘုရားများနဲ့ ပုံစံတူ တည်ဆောက်ထားခြင်းဖြစ်သည်။ <br>
                    &nbsp; &nbsp; &nbsp; လေးကျွန်းရန်အောင် ဖောင်တော်ဦးစေတီတော်ရှိ ကျောက်စာအရ ခရစ်နှစ် ၁၁၁၅ တွင် ပုဂံပြည့်ရှင် အလောင်းစည်သူမင်း သီဟိုဠ်နှင့် မဇ္ဈိမဒေသသို့အသွား ဖောင်တော်ဆိုက်ရာအရပ်တွင် တည်ထားခဲ့သော စေတီဖြစ်ပြီး ဖောင်တော်ဦးစေတီဟု အမည်တွင်ခဲ့ခြင်းဖြစ်သည်။  <br>
                    &nbsp; &nbsp; &nbsp; ဉာဏ်တော် အမြင့်မှာ (၁၆၂)ပေဖြစ်ပြီး  စေတီတော်အတွင်းမှ အတွင်းလိုဏ် ပတ်လမ်းကိုပတ်ပါက ပုဂံခေတ်မှ ရတနာပုံခေတ်အထိ ခေတ်လေးခေတ်မှ တင်ပလ္လင်ခွေ ရုပ်ပွားတော်ကြီး လေးဆူကိုလည်း ခေတ်ပြောင်းလဲမှုအလိုက် တွေ့ရှိလေ့လာ ဖူးမြှော်နိုင်ပါသည်။ အထက်ပစ္စယံသို့ တက်ရောက်ဖူးမြော်ပါက ကြေးသွန်းမုနိတော် လေးဆူကိုလည်း ထူးခြားစွာ တွေ့ရှိနိုင်သည်။  <br>
                    &nbsp; &nbsp; &nbsp; စေတီတော်ပရိဝုဏ်အတွင်း စိတ်ဝင်စားဖွယ် သမိုင်းဒဏ္ဍာရီရှိခဲ့သည့် နှမတော်ဝိဟာရဒေဝီနှင့် မောင်တော် ဗြဟ္မဒေဝီတို့ တူးဖော်ခဲ့သည့် ရေကြည်ရေနောက်ကန်နှစ်ခုဟာလည်း ယနေ့တိုင် ထူးခြားစွာ တည်ရှိနေပြီး ၄င်းရေကန်နှစ်ကန်ကို အစွဲပြုကာ ရေကြည်ရေနောက် ဘုရားဟုလည်း လူသိများခဲ့သည်။  <br>
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/chaungtha/nhee_phayar/2.jpg'),
                            require('@/assets/images/destination/chaungtha/nhee_phayar/1.jpg'),
                            require('@/assets/images/destination/chaungtha/nhee_phayar/2.jpg'),
                            require('@/assets/images/destination/chaungtha/nhee_phayar/1.jpg'),
                            require('@/assets/images/destination/chaungtha/nhee_phayar/2.jpg'),
                            require('@/assets/images/destination/chaungtha/nhee_phayar/1.jpg'),
                            require('@/assets/images/destination/chaungtha/nhee_phayar/2.jpg'),
                            require('@/assets/images/destination/chaungtha/nhee_phayar/1.jpg'),
                            require('@/assets/images/destination/chaungtha/nhee_phayar/1.jpg'),
                        ],
                    title: `နှီးဘုရား ဗုဒ္ဓရုပ်ရှင်တော်မြတ်`,
                    status: 0,
                    content: `&nbsp; &nbsp; နှီးဘုရား ဗုဒ္ဓရုပ်ရှင်တော်မြတ်ကို ဧရာဝတီတိုင်းဒေသကြီး၊ ပုသိမ်မြို့၊ ကမ်းနီကျေးရွာ ပုသိမ်-ချောင်းသာနှင့် ငွေဆောင်လမ်းဆုံ ပုသိမ်ကြိုးတံတားထိပ် လောကနန္ဒာစေတီတော် ရင်ပြင်တော် နေလ တန်ဆောင်းတော်ကြီးတွင် ကိန်းဝပ်စံပယ်တော်မူလျက်ရှိပါသည်။ <br>
                    &nbsp; &nbsp; နှီးဘုရား ဗုဒ္ဓရုပ်ရှင်တော်မြတ်ကို မြန်မာသက္ကရာဇ် ၁၃၆၉ ခုနှစ်၊ သီတင်းကျွတ်လပြည့်ကျော် (၁၃) ရက်၊ ခရစ်သက္ကရာဇ် (၈.၁၁.၂၀၀၇)ခုနှစ် ကြာသပတေးနေ့တွင် စတင်ရက်ခဲ့ပြီး တန်ဆောင်မုန်းလကွယ် (၁၅)ရက်၊ ခရစ်သက္ကရာဇ် (၉.၁၂.၂၀၀၇)ခုနှစ် တနင်္ဂနွေနေ့တွင် အောင်မြင်စွာ ရက်လုပ်ပြီးစီးခဲ့သည်။ မြန်မာသက္ကရာဇ် ၁၃၆၉ ခုနှစ် နတ်တော်လပြည့်နေ့ (၁၅)ရက်၊ ခရစ်သက္ကရာဇ် (၂၄-၁၂-၂၀၀၇)ခုနှစ် တနင်္လာနေ့ နံနက်(၉)နာရီတွင် ဌာပနာတိုက်အသီးသီးတို့၌ ဌာပနာထည့်သွင်း ပူဇော်ခဲ့ကြသည်။ သံဖရိန် စတင်ခြင်းမှ နှီးရက်လုပ်ပြီးစီးသည်အထိ (၄၁)ရက်ကြာမြင့်ခဲ့ပါသည်။ ဉာဏ်တော်အမြင့်မှာ ပလ္လင်တော်မှ မုနိတော်အထိ (၁၃)ပေ (၃.၅)လက်မအမြင့်ရှိသည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/chaungtha/shwe_taung_yan_beach/1.jpg'),
                            require('@/assets/images/destination/chaungtha/shwe_taung_yan_beach/1.jpg'),
                            require('@/assets/images/destination/chaungtha/shwe_taung_yan_beach/1.jpg'),
                            require('@/assets/images/destination/chaungtha/shwe_taung_yan_beach/1.jpg'),
                            require('@/assets/images/destination/chaungtha/shwe_taung_yan_beach/1.jpg'),
                            require('@/assets/images/destination/chaungtha/shwe_taung_yan_beach/1.jpg'),
                            require('@/assets/images/destination/chaungtha/shwe_taung_yan_beach/1.jpg'),
                            require('@/assets/images/destination/chaungtha/shwe_taung_yan_beach/1.jpg'),
                            require('@/assets/images/destination/chaungtha/shwe_taung_yan_beach/1.jpg'),
                        ],
                    title: `ရွှေသောင်ယံကမ်းခြေ `,
                    status: 0,
                    content: `ရွှေသောင်ယံကမ်းခြေသည် ချောင်းသာကမ်းခြေမှ (၈)မိုင်ခန့်အကွာအဝေးတွင် တည်ရှိသည်။ ကမ်းခြေမှာ (၄)မိုင်ဝန်းကျင်ကျယ်ဝန်းကာ သန့်ရှင်းကြည်လင်သော ပင်လယ်ရေပြင် ပိုင်ဆိုင်ထားသည့် ကမ်းခြေတစ်ခုဖြစ်သည်။ ကမ်းခြေတွင်လည်း ဟိုတယ်များ၊ တည်းခိုခန်းများနှင့် စားသောက်ဆိုင်များရှိသဖြင့် အားလပ်ရက်များတွင် အနားယူအပန်းဖြေရန်အတွက် အကောင်းဆုံးနေရာတစ်ခုဖြစ်သည်။ 
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