<template>
    <div class="destination">
        <div class="hero-section">
            <div class="banner">
                <img src="@/assets/images/destination/ngwesaung/banner.jpg" class="banner" alt="">
            </div>
            <div class="content">
                <div class="hero-header">
                    <img src="@/assets/images/destination/travel.gif" class="icon" alt="">
                
                    <h3>Places to Visit in</h3>
                    <h2>Ngwe Saung Beach</h2>
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
                            require('@/assets/images/destination/ngwesaung/ngwe_saung_beach/1.jpg'),
                            require('@/assets/images/destination/ngwesaung/ngwe_saung_beach/2.jpg'),
                            require('@/assets/images/destination/ngwesaung/ngwe_saung_beach/3.jpg'),
                            require('@/assets/images/destination/ngwesaung/ngwe_saung_beach/4.jpg'),
                        ],
                    title: `ငွေဆောင်ကမ်းခြေ`,
                    status: 0,
                    content: `ငွေဆောင်ကမ်းခြေသည် ဧရာဝတီတိုင်းဒေသကြီး၊ ပုသိမ်မြို့အနောက်ဖက် (၄၈)ကီလိုမီတာအကွာ တွင် တည်ရှိသည့် ပင်လယ်ကမ်းခြေ အပန်းဖြေစခန်းတစ်ခုဖြစ်သည်။ ၂၀၀၀ ခုနှစ်တွင် စတင်ဖွင့်လှစ်ခဲ့သည့် ကမ်းခြေဖြစ်ပြီး ကမ်းရိုးတန်းရှည်လျားခြင်း၊ ပင်လယ်ရေကြည်လင်ခြင်း၊ သဲသောင်ပြင်သန့်ရှင်းခြင်းနှင့် ပင်လယ်စာလည်း စုံစုံလင်လင်ရရှိပါသည်။ ပင်လယ်ရေချိုးတာအပြင် ငှက်ကြည့်ခြင်း၊ ရေငုပ်ပြီး သန္တာကျောက်တန်းနှင့် ရေအောက်ကမ္ဘာကို ကြည့်ရှုနိုင်သည်။၊ ဒါ့အပြင် ငှက်ကျွန်း၊ ကျွန်းလျားရှည်နှင့် လိပ်ကျွန်းတို့ကိုလည်း ထပ်မံလည်ပတ်နိုင်ပါသည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/ngwesaung/ngwe_saung_elephant/1.jpg'),
                            require('@/assets/images/destination/ngwesaung/ngwe_saung_elephant/2.jpg'),
                            require('@/assets/images/destination/ngwesaung/ngwe_saung_elephant/3.jpg'),
                            require('@/assets/images/destination/ngwesaung/ngwe_saung_elephant/4.jpg'),
                        ],
                    title: `ငွေဆောင် အပန်းဖြေ ဆင်စခန်း`,
                    status: 0,
                    content: `ငွေဆောင် အပန်းဖြေ ဆင်စခန်းသည် ဧရာဝတီတိုင်းဒေသကြီး၊ ပုသိမ်မြို့နယ်၊ ပုသိမ် - ငွေဆောင် ကားလမ်း၊ မိုင်တိုင်အမှတ်(၁၉) ညာဘက်ခြမ်း၊ ရေသိုးကြီးကျေးရွာအနီးတွင် တည်ရှိပြီး ငွေဆောင်ကမ်းခြေမှ မော်တော်ယာဉ်ဖြင့် (၄၅)မိနစ်ခန့်မောင်းနှင်၍ သွားရောက်လည်ပတ်နိုင်ပါသည်။ အဆိုပါဆင်စခန်းတွင် ဆင်များကို သဘာဝအတိုင်း လေ့လာကြည့်ရှုနိုင်ခြင်း၊ ဆင်များ၏ သရုပ်ပြမှုများအား ကြည့်ရှုခြင်း၊ ဆင်များအား အစာကျွေးခြင်း၊ ဆင်စီး၍ တောတောင်ရေမြေသဘာဝအလှများကိုလည်း ကြည့်ရှုခံစားနိုင်ပါသည်။ စိတ်ကြည် နူးဖွယ် ပုသိမ်ထီးဖြင့် အလှဆင်ထားသော ကြိုးတံတားကြီးမှာလည်း ဆင်စခန်းကြီးရဲ့အလှကို ပိုပေါ်လွင်စေ ပါသည်။ 

 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/ngwesaung/moe_ma_kha/1.jpg'),
                            require('@/assets/images/destination/ngwesaung/moe_ma_kha/2.jpg'),
                            require('@/assets/images/destination/ngwesaung/moe_ma_kha/3.jpg'),
                            require('@/assets/images/destination/ngwesaung/moe_ma_kha/4.jpg'),
                        ],
                    title: `မိုးမခဆင်စခန်း`,
                    status: 0,
                    content: `မိုးမခဆင်စခန်းသည် ဧရာဝတီတိုင်းဒေသကြီး၊ ပုသိမ်မြို့နယ်၊ ငွေဆောင်ကမ်းခြေ၊ ဘူးကွဲရွာ မြောက်ဖက်၊ (၁)ဖာလုံခန့်တွင် တည်ရှိပြီး ချစ်သူများကျွန်းမှ ကားဖြင့်(၅)မိနစ်ခန့်သာ ဝေးကွာလှပါသည်။ ဆင်စီးခြင်းအပြင် ဆင်တို့၏ သမိုင်းကြောင်းများ၊ ဆင်တို့၏ နေထိုင်စားသောက်ပုံများ လေ့လာနိုင်ပြီး ဆင်ကြီးများဖြင့် အလှဓါတ်ပုံများ လည်းရိုက်ကူးနိုင်ပါသည်။ စမ်းချောင်းတစ်လျှောက် ဆင်စီးခြင်းမှာလည်း စိတ်လှုပ်ရှားစရာကောင်းတဲ့ ခရီးစဥ်ကြီးဖြစ်ပါသည်။  
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/ngwesaung/lover_island/1.jpg'),
                            require('@/assets/images/destination/ngwesaung/lover_island/2.jpg'),
                            require('@/assets/images/destination/ngwesaung/lover_island/1.jpg'),
                            require('@/assets/images/destination/ngwesaung/lover_island/2.jpg'),
                        ],
                    title: `ချစ်သူများကျွန်း `,
                    status: 0,
                    content: `ချစ်သူများကျွန်းသည် ငွေဆောင်ဟိုတယ်ဇုန်လမ်းမကြီးဘေးတွင်တည်ရှိပြီး ဆိုင်တန်းများ၊ ရေကူးတဲ့ လူများ၊ ငှက်ကျွန်းသွားရန် လှေစောင့်နေသောလူများဖြင့် စည်ကားသောနေရာဖြစ်သည်။ ၄င်းကျွန်းပေါ်တွင် ပင်လယ်အလှကို ကြည့်ရှုခြင်း၊ ပျော်ပွဲစားထွက်ခြင်း၊ ကျောက်ဆောင်များတွင် ဓါတ်ပုံရိုက်ခြင်း၊ အပန်းဖြေခြင်း၊ ရေတက် ရေကျချိန်ကိုကြည့်၍ ရေကျချိန်တွင် (၁၅)မိနစ်ခန့်လမ်းလျှောက်၍ ကျွန်းသို့ခြေလျင် ဖြတ်ကူးနိုင် ပါသည်။  
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/ngwesaung/stone_sister/1.jpg'),
                            require('@/assets/images/destination/ngwesaung/stone_sister/2.jpg'),
                            require('@/assets/images/destination/ngwesaung/stone_sister/1.jpg'),
                            require('@/assets/images/destination/ngwesaung/stone_sister/2.jpg'),
                        ],
                    title: `ကျောက်မောင်နှမစေတီ `,
                    status: 0,
                    content: `ချစ်သူများကျွန်းမှ လှမ်းမြင်နိုင်ပြီး ကျောက်တုံးကြီး(၂)တုံးပေါ်တွင် တည်ထားသော ကျောက်မောင်နှမ စေတီသည် ကမ်းခြေတွင်သာ တည်ထားသောကြောင့် လွယ်လင့်တကူ ဖူးမြှော်နိုင်ပါသည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/ngwesaung/bird_island/1.jpg'),
                            require('@/assets/images/destination/ngwesaung/bird_island/2.jpg'),
                            require('@/assets/images/destination/ngwesaung/bird_island/3.jpg'),
                            require('@/assets/images/destination/ngwesaung/bird_island/4.jpg'),
                        ],
                    title: `ငှက်ကျွန်း`,
                    status: 0,
                    content: `ငှက်ကျွန်းသည် ငွေဆောင်ကမ်းခြေမှ ရေမိုင်(၉)မိုင်ခန့်ကွာဝေးသော အမျိုးစားစုံလင်ပြီး အရောင်လှတဲ့ ငှက်မျိုးစုံများနေထိုင်သည့် ကျွန်းတစ်ကျွန်းဖြစ်သည်။ ဘာလီအလား ထင်မှတ်ရလောက်အောင် ကျောက်တောင်နဲ့ ပင်လယ်ရဲ့အချိတ်အဆက်မိမိ လှပနေပုံသည် မှင်သက်စရာကောင်းလောက်သည်။ ကျွန်းထိပ်တောင်ပေါ်တွင် သာယာလှပသော View Point ရှုခင်းများအပြင် ကျွန်းပေါ်အလှ၏ သာယာပုံများကိုလည်း ရှုမြင်နိုင်ပါသည်။ ငှက်ကျွန်းတွင် ကြည်လင်စိမ်းမြနေသော ရေများဖြင့် ရေကူးခြင်းနှင့် Snorkeling ပြုလုပ်နိုင်သည်။၊ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/ngwesaung/turtle_island/1.jpg'),
                            require('@/assets/images/destination/ngwesaung/turtle_island/1.jpg'),
                            require('@/assets/images/destination/ngwesaung/turtle_island/1.jpg'),
                            require('@/assets/images/destination/ngwesaung/turtle_island/1.jpg'),
                        ],
                    title: `လိပ်ကျွန်း`,
                    status: 0,
                    content: `လိပ်ကျွန်းသည် ငှက်ကျွန်းမှ လှမ်းမြင်နိုင်သော ကျွန်းအသေးလေး တစ်ကျွန်းဖြစ်သည်။ ပင်လယ် ကျောက်တောင်ကျွန်းဖြစ်၍ စက်လှေများ၊ Boat များကပ်၍မရသဖြင့် အလှကြည့်သာရနိုင်ပါသည်။ သို့သော် အခြားကျွန်းများနဲ့ယှဉ်လျှင် တမူထူးခြားပြီး လှပသည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/ngwesaung/long_island/1.jpg'),
                            require('@/assets/images/destination/ngwesaung/long_island/1.jpg'),
                            require('@/assets/images/destination/ngwesaung/long_island/1.jpg'),
                            require('@/assets/images/destination/ngwesaung/long_island/1.jpg'),
                        ],
                    title: `ကျွန်းလျားရှည် `,
                    status: 0,
                    content: `ကျွန်းလျားရှည်သည် လိပ်ကျွန်းအနီးတွင် တည်ရှိပြီး ရေကူးခြင်း၊ ရေငုပ်ခြင်း၊ ပင်လယ်ရေအောက် အလှဓါတ်ပုံရိုက်ကူးခြင်းများ ပြုလုပ်ရန် အသင့်တော်ဆုံးနေရာဖြစ်သည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/ngwesaung/snake_island/1.jpg'),
                            require('@/assets/images/destination/ngwesaung/snake_island/2.jpg'),
                            require('@/assets/images/destination/ngwesaung/snake_island/3.jpg'),
                        ],
                    title: `မြွေကျွန်း `,
                    status: 0,
                    content: `မြွေကျွန်းသည် ငွေဆောင်ဇုန်(၁)အဆုံး သဇင်ကျေးရွာမော်တော်ကားလမ်းမှ မိနစ်(၂၀)ခန့်သွား၍ ထိုမှတဆင့် လမ်းမဘေးတွင် Pinn Pinn Hotel နှင့် မြွေကျွန်းသို့ လမ်းညွှန်ဆိုင်းဘုတ်အတိုင်း ပင်လယ်ဖက်သို့ဆင်းသွားလျှင် မြွေကျွန်းသို့ရောက်ရှိပါသည်။ မြွေကျွန်းသည် အရမ်းလှပပြီး ရှုခင်းကောင်း သောနေရာတစ်ခုဖြစ်သည်။ ကျွန်းပေါ်ရှိ ကျောက်ဆောင်များအကြားတွင် ဂျပ်မြွေများသည် သဘာဝ အတိုင်းနေထိုင်ပြီး လူများကိုအန္တရာယ်မပြုသဖြင့် သွားရောက်လေ့လာနိုင်သည်။ ပင်လယ်ထဲ ထိုးထွက် နေသော တံတားရှည်ကြီး၊ ကျောက်တန်းများတည်ရှိပြီး ဘေးအနီးတွင် ဘုရားသုံးဆူ၊ ရေသူထီးကမ်းခြေနှင့် နီးစပ်၍ ရှုခင်းပေါင်းစုံကို တစ်နေရာတည်း တွေ့မြင်နိုင်သည်။ 
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