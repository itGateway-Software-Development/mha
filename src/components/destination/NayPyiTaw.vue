<template>
    <div class="destination">
        <div class="hero-section">
            <div class="banner">
                <img src="@/assets/images/destination/naypyitaw/banner.jpg" class="banner" alt="">
            </div>
            <div class="content">
                <div class="hero-header">
                    <img src="@/assets/images/destination/travel.gif" class="icon" alt="">
                
                    <h3>Places to Visit in</h3>
                    <h2>NAYPYIDAW</h2>
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
                            <div class="swiper place-swiper" data-aos-delay="100">
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
                            require('@/assets/images/destination/naypyitaw/uppatasanti_pagoda/1.jpg'),
                            require('@/assets/images/destination/naypyitaw/uppatasanti_pagoda/2.jpg'),
                        ],
                    title: `ဥပ္ပါတသန္တိစေတီတော်`,
                    status: 0,
                    content: `ဥပ္ပါတသန္တိစေတီတော်သည် နေပြည်တော်၊ ပုဗ္ဗသီရိမြို့နယ်၊ ရာဇဌာနီလမ်းမကြီးအနီး နေပြည်တော်-ပျဥ်းမနားမြို့၏ အနောက်မြောက်ဘက် (၂)မိုင်(၄)ဖာလုံခန့်အကွာတွင် တည်ရှိပြီး နေပြည်တော်ရှိ ထင်ရှားသည့် တန်ခိုးကြီးဘုရား တစ်ဆူဖြစ်သည်။ ရန်ကုန်မြို့ရှိ ရွှေတိဂုံစေတီတော်မြတ်ကြီး၏ ပုံစံတူ တည်ထားခြင်းဖြစ်ပြီး ဉာဏ်တော်မြင့် (၉၉)မီတာ၊ (၃၂၅)ပေ ရှိသည်။ ရွှေတိဂုံစေတီတော်ကြီးထက် ဉာဏ်တော် (၃၀)စင်တီမီတာ နိမ့်သည်။  <br><br>
                    ၂၀၀၆ ခုနှစ်၊ နိုဝင်ဘာလ၊ ၁၂ ရက်နေ့တွင် ပန္နပ်တော်တင် မင်္ဂလာအခမ်းအနားကို ကျင်းပပြုလုပ်ခဲ့ပြီး၊ ၂၀၀၉ ခုနှစ်၊ မတ်လတွင် ပြီးစီးခဲ့သည်။ စေတီတော်ကို လူလုပ်ကုန်းမြေမြင့်ပေါ်တွင် တည်ထားခြင်းဖြစ်သည်။ စေတီတော်တွင် <br>
                    <ul>
                        <li>- မဟုဆုတောင်းပြည့်ဘုရား</li>
                        <li>- ကျောက်စိမ်းဘုရား (၃) ဆူ</li>
                        <li>- ၁၀၈ ပေ မြင့်သော တံခွန်တိုင်</li>
                        <li>- မဟာဗောဓိညောင်ပင်နှင့် ဘုရား (၂၈) ဆူ </li>
                        <li>- ညောင်ပင် (၁၀၈) ပင်နှင့် ဥယျာဉ်တော်် </li>
                        <li>- ရှင်ဥပဂုတ္တ နှင့် မာလိနီရေကန်တော်</li>
                        <li>- သိမ်ကျောင်းဆောင် အစရှိသည်တို့ ထည့်သွင်းတည်ထားသည်။</li>
                    </ul>
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/naypyitaw/naypyitaw_bagan/1.jpg'),
                            require('@/assets/images/destination/naypyitaw/naypyitaw_bagan/2.jpg'),
                            require('@/assets/images/destination/naypyitaw/naypyitaw_bagan/3.jpg'),
                        ],
                    title: `ညောင်ပင်ကြီးစု ရှေးဟောင်းဘုရားများ (သို့မဟုတ်) နေပြည်တော်ပုဂံ`,
                    status: 0,
                    content: `ညောင်ပင်ကြီးစုရှေးဟောင်းဘုရားများသည် နေပြည်တော်၊ ဇမ္ဗူသီရိမြို့နယ်တွင် တည်ရှိပြီး  ရာဇဌာနီ လမ်းနှင့် ပျဉ်းမနား-တောင်ညိုလမ်းတို့ကို ဆက်သွယ်ထားသော တော်ဝင်ရတနာလမ်းမကြီးကတဆင့် သွားရောက်နိုင်သည်။ လွန်ခဲ့သော နှစ်ပေါင်း (၁၆၅)ခန့်၊ မြန်မာသက္ကရာဇ် (၁၂၂၀)ပြည့်နှစ်က ဘိုးတော်ပဒုံမင်း တည်ထားကိုးကွယ်ခဲ့သည်ဟုသိရပြီး ဒေသခံများက နေပြည်တော်ပုဂံဟု တင်စားခေါ်ဝေါ်ကြသည်။   <br><br>
                    ပုဂံတွင်ရှိသော စေတီများနှင့် ပုံစံဆင်သော အဆိုပါရှေးဟောင်းဘုရားများအနီးတွင် သက်တမ်းရင့် ထန်းပင်ကြီးများကို တွေ့ရှိရမည်ဖြစ်ပြီး စေတီများကို အစုအစုလိုက် သုံးစုအဖြစ် စုစုပေါင်းစေတီတော် (၄၂) ဆူကို ဖူးမြှော်ကြရမည်ဖြစ်သည်။  စေတီများအနီးတွင် ခုနှစ်ပေပတ်လည်ရှိ ရှေးဟောင်းရေတွင်းကြီး တစ်တွင်းနှင့် ညောင်ပင်ကြီးစုဘုန်းတော်ကြီးကျောင်းတွင် ရွှေသားအစစ်ဖြင့် ပြုလုပ်ထားသော ရှေးဟောင်း ရွှေခုတင်ကြီးတစ်လုံးကိုလည်း ဝင်ရောက်လေ့လာနိုင်မည်ဖြစ်သည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/naypyitaw/dardu_zaya/1.jpg'),
                        ],
                    title: `ဓာတုစယဓာတ်ပေါင်းစုစေတီ`,
                    status: 0,
                    content: `ဓာတုစယဓာတ်ပေါင်းစုစေတီတော်သည် နေပြည်တော်၊ ဇမ္ဗူသီရိမြို့နယ်၊ ဘောဂသိဒ္ဓိရပ်ကွက်၊ ဇမ္ဗူကျက်သရေလမ်းမကြီးဘေးရှိ မင်္ဂလာကုန်းတော်ပေါ်တွင် တည်ရှိသည်။ လွှတ်တော်အဆောက်အဦ၊ သမ္မတအိမ်တော်နှင့် ဒုတိယသမ္မတအိမ်တော် ဝင်းများအတွင်းရှိ ပုဂံ၊ ပင်းယ၊ အင်းဝ၊ တောင်ငူ၊ ညောင်ရမ်း၊ ကုန်းဘောင် စသည့် ခေတ်အဆက်ဆက်က တည်ထားကိုးကွယ်ခဲ့ကြသည့် ရှေးဟောင်းစေတီတော်များ (၁၀) ဆူအတွင်းမှ ဓာတ်တော်မွေတော် ဌာပနာတော်များနှင့် ဆရာတော်သံဃာတော်များ ပူဇော်ကိုးကွယ်ထားသော ဓာတ်တော်မွေတော်များ ပပျောက်မသွားစေရန်နှင့် အဓွန့်ရှည်တည်တံ့စွာ ဖူးမြှော်နိုင်ကြစေရန် ရည်ရွယ်ကာ တည်ထားကိုးကွယ်ခြင်းဖြစ်သည်။   <br><br>
                    ဓာတ်ပေါင်းစုစေတီတော်ကြီးဝင်းအတွင်း အနောက်တောင်ထောင့်တွင် မန္တလေး မဟာမြတ်မုနိ ရုပ်ပွားတော်မြတ်ကြီး၏ ပုံတော်တူ နေပြည်တော် မဟာမြတ်မုနိရုပ်ပွားတော်မြတ်ကြီးကိုလည်း ကြည်ညို သပ္ပာယ်စွာ ဖူးမြှော်နိုင်ကြမည်ဖြစ်သည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/naypyitaw/yan_aung_chan_tar_pagoda/1.jpg'),
                        ],
                    title: `ရန်အောင်ချမ်းသာဘုရားကြီး`,
                    status: 0,
                    content: `ရန်အောင်ချမ်းသာဘုရားကြီးသည် နေပြည်တော်၊ လယ်ဝေးမြို့နယ်၊ သပြေပင်ရွာ၊ နေပြည်တော် မြို့ပတ်လမ်းဘေး၊ ရန်ကင်းတောင်ခြေအနီးတွင် တည်ရှိပြီး ဉာဏ်တော် (၁၃၅)ပေရှိသည့် ဗုဒ္ဓရုပ်ပွားတော် မြတ်ကြီးဖြစ်သည်။    <br><br>
                    ဘုရားကြီး၏ အရှေ့ဘက်တွင် ဉာဏ်တော်(၂၄)ပေရှိ အရံစေတီ(၂၃)ဆူနှင့် ရှမ်းတိုင်းရင်းသားတို့၏ လက်ရာ ကျားရုပ်ဖြင့် မုခ်ဦး၊ အနောက်ဘက်တွင် ဉာဏ်တော်(၂၄)ပေရှိ အရံစေတီ(၂၃)ဆူနှင့် မွန်တိုင်းရင်းသားတို့၏လက်ရာမနုဿီဟရုပ်ဖြင့် မုခ်ဦး၊ တောင်ဘက်တွင် ဉာဏ်တော်(၂၄)ပေရှိ အရံစေတီ (၂၂) ဆူနှင့် ရခိုင်တိုင်းရင်းသားတို့၏လက်ရာ ဘီလူးရုပ်ဖြင့် မုခ်ဦး၊ မြောက်ဘက်တွင် ဉာဏ်တော် (၂၄) ပေရှိ အရံစေတီ (၂၂)ဆူနှင့် မြန်မာ့လက်ရာ ခြင်္သေ့ရုပ်ဖြင့် မုခ်ဦးတို့ကို တင့်တယ်လှပစွာ မြင်တွေ့ကြရမည်ဖြစ်သည်။
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/naypyitaw/mahar_bawdi_temple/1.jpg'),
                        ],
                    title: `သတ္တသတ္တာဟ မဟာဗောဓိစေတီတော်`,
                    status: 0,
                    content: `သတ္တသတ္တာဟ မဟာဗောဓိစေတီတော်သည် နေပြည်တော်၊ ပုဗ္ဗသီရိမြို့နယ်ရှိ  ဥဒယရံသီ ကုန်းတော် တွင်တည်ရှိပြီး ဉာဏ်တော် ၁၆၂ ပေ ( ၄၉ မီတာ)မြင့်ကာ အိန္ဒိယနိုင်ငံ၊ ဗီဟာပြည်နယ်၊ ဗုဒ္ဓဂါယာရှိ မဟာဗောဓိစေတီကို ပုံတူယူတည်ထားခြင်းဖြစ်သည်။ <br><br>
                    ဘုရားဥယျာဉ်တော်အတွင်းတွင် ဂေါတမဗုဒ္ဓဖွားမြင်ရာနေရာ၊ ဘုရားအဖြစ်သို့ ရောက်ရှိရာနေရာ၊ တရားဦး ဓမ္မစက်ြာဟောရာနေရာနှင့် ပရိနိဗ္ဗာန်ပြုရာနေရာ စသည့် သံဝေဇနိယလေးဌာနကို အိန္ဒိယနိုင်ငံရှိ ဗုဒ္ဓဂါယာသို့ သွားရောက်ဖူးမြော်ရန် အခက်အခဲရှိသူများအတွက်ရည်ရွယ်ကာ တည်ထားခဲ့ခြင်းလည်း ဖြစ်သည်။ <br><br>
                    စေတီတော်အတွင်းရှိ ရုပ်ပွားတော်အားအဓိကထား၍ ဗုဒ္ဓဘိသေက အနေကဇာတင်ပွဲကို ၂၀၁၄ ခုနှစ်၊ မေလ ၁၃ ရက်နေ့တွင် ကျင်းပပြုလုပ်ခဲ့သည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/naypyitaw/mahar_thet_kya_yanthi/1.jpg'),
                            require('@/assets/images/destination/naypyitaw/mahar_thet_kya_yanthi/2.jpg'),
                        ],
                    title: `မဟာသကျရံသီရုပ်ရှင်တော်မြတ်ကြီး`,
                    status: 0,
                    content: `မဟာသကျရံသီရုပ်ရှင်တော်မြတ်ကြီးသည် နေပြည်တော်၊ ဥတ္တရသီရိမြို့နယ်၊ ဖိုးစောင်းတောင်ပေါ်ရှိ အောင်မောဠိတောင်ညွန့်ထက်တွင် တည်ရှိသည်။ ဉာဏ်တော်အမြင့် (၃၂)ပေရှိ ရပ်တော်မူ ရုပ်ရှင်တော်မြတ်ကြီးဖြစ်ပြီး ပေါင်(၁၀၉)တန်ချိန်ရှိပြီး စကျင်ကျောက်ရပ်တော်မူ ဆင်းတုတော်များအနက် ဉာဏ်တော်အမြင့်ဆုံးဖြစ်သည်။ ပုဂံရှိ အာနန္ဒာလှိုဏ်ဂူတော်ရှိ ကဿပဘုရားရှင်၏ အရွယ်တူ၊ ပုံစံတူ ထုလုပ်ပုံဖော်ခဲ့ပြီး အဝေးမှကြည့်လျှင် ပြုံးနေဟန်၊ အနီးမှကြည့်လျှင် တည်ကြည်ဟန်အဖြစ် ဖူးမြှော်တွေ့ရှိ ခံစားရမည်ဖြစ်သည်။ <br><br>
                    ရုပ်ရှင်တော်မြတ်ကြီးမျက်နှာမူရာ မျက်နှာစာ၏တောင်ဘက်တွင် နှစ်ပေါင်း(၈၀)ခန့်တည်းက တောင်ညွန့်ပေါ်၌ တည်ရှိခဲ့သည့် ပညောင်ပင်ကြီးကိုလည်း ရုပ်ပွားတော်ကြီးနှင့် ပနံတင့်စွာ တွေ့မြင်ကြရ မည်ဖြစ်သည်။ <br><br>
                    ၂၀၁၄ ခုနှစ်၊ ဩဂုတ်လ၊ ၃ ရက်၊ တနင်္ဂနွေနေ့တွင် စတင်တည်ထားခဲ့ပြီး ၂၀၁၅ ခုနှစ်၊ နိုဝင်ဘာလ၊ ၂၆ ရက်၊ ကြာသပတေးနေ့တွင် ပြီးစီးခဲ့သည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/naypyitaw/maravijaya_buddha/1.jpg'),
                            require('@/assets/images/destination/naypyitaw/maravijaya_buddha/1.jpg'),
                            require('@/assets/images/destination/naypyitaw/maravijaya_buddha/1.jpg'),
                        ],
                    title: `မာရဝိဇယဗုဒ္ဓရုပ်ပွားတော်မြတ်ကြီး`,
                    status: 0,
                    content: `မာရဝိဇယဗုဒ္ဓရုပ်ပွားတော်မြတ်ကြီးသည် ၈၁ ပေ (၂၅ မီတာ) ရှိသော ဘူမိဖဿမုဒြာ စကျင်ကျောက် ရုပ်ပွားတော်ဖြစ်ပြီး နေပြည်တော်၊ ဒက္ခိဏသီရိမြို့နယ်ရှိ ဗုဒ္ဓဥယျာဉ်တော်တွင် တည်ရှိသည်။ <br><br>
                    ရုပ်ပွားတော်ကြီးသည် စကျင်ကျောက်သားဖြင့် ထုလုပ်ပူဇော်ထားခြင်းဖြစ်ပြီး မြန်မာနိုင်ငံရှိ စကျင် ကျောက်သားရုပ်ပွားတော်များထဲမှ ကမ္ဘာ့အမြင့်ဆုံးနှင့် အလေးချိန်အများဆုံး ရုပ်ပွားတော် တစ်ဆူဖြစ်သည်။ ရုပ်ပွားတော်အလေးချိန်မှာ ၁,၇၈၂ တန်နှင့် ပလ္လင်တော် အလေးချိန်မှာ ၃,၅၁၀ တန်၊ စုစုပေါင်းအလေးချိန် ၅,၂၉၂ တန် ရှိသည်။ ရုပ်ပွားတော်၏ ဉာဏ်တော်အမြင့်မှာ ၆၃ ပေ ရှိပြီး ပလ္လင်တော်အမြင့်မှာ ၁၈ ပေရှိသည်။ ရုပ်ပွားတော်သည် ကျောက်စာများ၊ စေတီငယ်များ၊ သာသနာအဆောက်အဦများနှင့် မုစလိန္နာအိုင်တို့ ပါဝင်သော ၉၁ ဟက်တာကျယ်ဝန်းသည့် ပရိဂုဏ်အတွင်းတည်ရှိသည်။ 
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