<template>
    <div class="destination">
        <div class="hero-section">
            <div class="banner">
                <img src="@/assets/images/destination/kayin/banner.jpg" class="banner" alt="">
            </div>
            <div class="content">
                <div class="hero-header">
                    <img src="@/assets/images/destination/travel.gif" class="icon" alt="">
                
                    <h3>Places to Visit in</h3>
                    <h2>KAYIN</h2>
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
                            require('@/assets/images/destination/kayin/zwekabin/1.jpg'),
                            require('@/assets/images/destination/kayin/zwekabin/2.jpg'),
                            require('@/assets/images/destination/kayin/zwekabin/3.jpg'),
                        ],
                    title: `ဇွဲကပင်တောင်`,
                    status: 0,
                    content: `ဇွဲကပင်တောင်သည် ကရင်ပြည်နယ်၊ ဘားအံမြို့၏တောင်ဖက် (၇)မိုင်ခန့်အကွာ ခလောက်နို့ကျေးရွာ အနီးတွင်တည်ရှိသည်။ ကရင်ပြည်နယ်၏ အမှတ်အသားတစ်ခုဖြစ်ပြီး ပင်လယ်ရေမျက်နှာပြင်အထက် (၂၃၇၂)ပေမြင့်ပြီး တောင်နှင့်‌‌မြောက် မိုင်(၂၀)ခန့်မျှ သွယ်တန်းရှည်လျားပါသည်။ တောင်ခြေတွင် ဗုဒ္ဓရုပ်ပွားတော် (၁၀၀၀)ကျော်ရှိသော လုမ္ဗိနီဥယျာဥ် အင်ကြင်းတစ်ထောင်ကျောင်းမှာလည်း ထင်ရှားပါသည်။ ဇွဲကပင်တောင်ပေါ်တွင် ဇွဲကပင်ဆံတော်ရှင်စေတီ တည်ရှိပါသည်။ မြတ်စွာဘုရားနှင့် ရဟန္တာ(၅၀၀)အတူ ကြွတော်မူလာပြီး မွန်ပြည်နယ်၊ ဘီလင်းမြို့နယ်၊ ကင်းရွာ၊ တောင်ကြီးရွာရှိ ကေလာသတောင်ခေါ် တိုက်ကုလားတောင်၊ ဒိုးခလွန်တောင်တွင် ဆံတော်(၆)ဆူ ချီးမြှင့်ပေးအပ်ခဲ့ရာ ထိုဆံတော်‌(၆)ဆူထဲမှ ကျိုက်ထီးရိုးစေတီတော်သို့ ဆံတော်(၃)ဆူ၊ ဇွဲကပင်စေတီတော်သို့ ဆံတော်(၁)ဆူ၊ ဇင်းကျိုက်စေတီတော်သို့ ဆံတော်(၁)ဆူ၊ ကေလာသစေတီတော်သို့ ဆံတော်(၁)ဆူ ဌာပနာထားရှိပါသည်။ တောင်ပေါ်သို့ ခြေလျင်ခရီး (သို့မဟုတ်) Cable ကားဖြင့် တက်ရောက်နိုင်ပါသည်။  <br>
                    ဇွဲကပင်ဘုရားပွဲတော်ကြီးကို နှစ်စဥ်နှစ်တိုင်း တပေါင်းလပြည့်နေ့တိုင်းတွင် စည်ကားသိုက်မြိုက်စွာ ကျင်းပလေ့ရှိပါသည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/kayin/kyartkalat/1.jpg'),
                        ],
                    title: `ကျောက်က္ကလပ်စေတီ`,
                    status: 0,
                    content: `ကျောက်က္ကလပ်စေတီသည် ဘားအံမြို့နယ်၊ ကော့လိုင်ကျေးရွာရှိ ရေကန်အလယ်မှ ထုံးကျောက် တောင်ပေါ်တွင် တည်ထားပြီး သံလွင်တံတားမှ (၃)ဖာလုံခန့်သာဝေးပါသည်။ သာမညဆရာတော်ကြီး၏ ကိုးနဝင်း အတိတ်နိမိတ်ဖြင့် တည်ထားသော စေတီဖြစ်သည်ဟုသိရပြီး သမိုင်းဝင်ဆံ‌တော်ရှင်တစ်ဆူဖြစ်၍ ထင်ရှားပါသည်။ နေ့စဥ်နေ့တိုင်း လာရောက်ဖူးမြှော်ကြသည့် ဘုရားဖူးများကို စတုဒီသာများ ကျွေးမွေးလှူဒါန်း လျက်ရှိပါသည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/kayin/sadan_cave/1.jpg'),
                            require('@/assets/images/destination/kayin/sadan_cave/2.jpg'),
                            require('@/assets/images/destination/kayin/sadan_cave/3.jpg'),
                            require('@/assets/images/destination/kayin/sadan_cave/4.jpg'),
                            require('@/assets/images/destination/kayin/sadan_cave/5.jpg'),
                        ],
                    title: `ဆန္ဒန်ဂူ`,
                    status: 0,
                    content: `ဆဒ္ဒန်ဂူသည် ကရင်ပြည်နယ်၊ ဇွဲကပင်တောင်တန်း၏ တောင်ဖက်အကျဆုံး ဆဒ္ဒန်တောင်တွင် တည်ရှိသည်။ သံလွင်မြစ်၏ အရှေ့ဖက်ကမ်း ကော့ဝါးဆူးကျေးရွာအနီးတွင် တည်ရှိပြီး ဘားအံမြို့မှ မိုင်(၂၀)ခန့် အကွာတွင် တည်ရှိသည်။ ဆဒ္ဒန်ဂူသည် အရှေ့အနောက် (၁၀၇)မီတာ ရှည်လျားပြီး (၄၀)မီတာ ကျယ်ဝန်းသည်။ ဆဒ္ဒန်ဂူသည် နှစ်ဖက်ပွင့်တိုးလျှိုပေါက်ဂူဖြစ်ပြီး အဝင်ဝကျဉ်းမြောင်းကာ ကရင်ပြည်နယ်တွင် အရှည်လျားဆုံးဂူဖြစ်သည်။ ဆဒ္ဒန်ဂူသည် မြေပြင်မှ ပေ(၃၀)ခန့်အမြင့်တွင်တည်ရှိပြီး လုံးဝန်းသော ပုံသဏ္ဍာန်ရှိသည်။ ဆန္ဒန်ဂူ၏အတွင်းဖက်ရှိ ကြည်လင်စိမ်းလန်းနေသော ရေကန်ကြီးတွင် လှေစီးကာ လိုဏ်ဂူကို လှည့်ပတ်ကြည့်ရှုနိုင်ပါသည်။ လှေဖြင့်လှိုဏ်ဂူအပြင်သို့ထွက်သည့်အခါ တွေ့မြင်ရသော လိုဏ်ဂူ အတွင်းအပြင်ရှုခင်းမှာ ရင်သပ်ရှုမောဖွယ်ကောင်းလှပါသည်။ <br>
                    ဆဒ္ဒန်ဂူဘုရားပွဲတော်ကို နှစ်စဉ်သင်္ကြန်အတက်နေ့တွင် ကျင်းပလေ့ရှိသည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/kayin/taung_wine/1.jpg'),
                        ],
                    title: `တောင်ဝိုင်းတောင်`,
                    status: 0,
                    content: `တောင်ဝိုင်းတောင်သည် ဘားအံမြို့အနီး ဘားအံ-လှိုင်းဘွဲ့လမ်းခွဲမှတစ်ဆင့် ထူးဂုဏ်ရွာအဝင်လမ်း တောမှီရဟန်းလမ်းမှ ဆိုင်ကယ် သို့မဟုတ် ကားဖြင့် မိနစ်(၂၀)ခန့် သွားရောက်နိုင်ပါသည်။ ပေ(၂၆၀၀)ကျော် အမြင့်ရှိ တောင်ဝိုင်းသို့ ဒီဇင်ဘာလကဲ့သို့သော ပွင့်လင်းရာသီမျိုးတွင် တောင်တက်ခရီးပြုလုပ်ရန်ကောင်းသော တောင်တစ်ခုဖြစ်သည်။ တောင်ထိပ်ရှိ ဆုတောင်းပြည့် လောကဝိဓူစေတီကိုလည်း မိုးပျံသံလှေကားမှတစ်ဆင့် ဖြတ်သန်းဖူးမြှော်နိုင်ပြီး ရင်သပ်ရှုမောဖွယ် ရှုခင်းများကိုလည်း ကြည့်ရှုခံစားနိုင်ပါသည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/kayin/kyone_htaw/1.jpg'),
                            require('@/assets/images/destination/kayin/kyone_htaw/2.jpg'),
                        ],
                    title: `ကျုံထော်ရေတံခွန်`,
                    status: 0,
                    content: `ကျုံထော်ရေတံခွန်သည် သဘာဝအတိုင်း ကြည်စိမ်းနေသောရေတံခွန်ဖြစ်ပြီး ကရင်ပြည်နယ်သို့ လာရောက်လည်ပတ်သူများ လက်လွှတ်မခံသင့်သောလှပသည့် နေရာတစ်ခု ဖြစ်ပါသည်။ ကျုံထော် ရေတံခွန်သည် လှိုင်းဘွဲ့မြို့အနီး ထိပ်လောသိုနှင့် ကပ်လျက်တွင် တည်ရှိသည်။ ကျုံထော်ရေတံခွန်သည် တစ်နှစ်ပတ်လုံး ရေခမ်းခြောက်မှုမရှိခြင်း၊ သဘာဝတောတောင်များ မပျက်မယွင်း တည်ရှိခြင်းတို့ကြောင့် ခရီးသွားဧည့်သည်များအကြား လူသိများထင်ရှားလှပါသည်။ နွေရာသီနှင့် ဆောင်းရာသီတို့တွင် ရေတံခွန်သို့ လည်ပတ်ရန် အကောင်းဆုံးရာသီများဖြစ်ပါသည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/kayin/kaw_gon/1.jpg'),
                            require('@/assets/images/destination/kayin/kaw_gon/2.jpg'),
                            require('@/assets/images/destination/kayin/kaw_gon/3.jpg'),
                            require('@/assets/images/destination/kayin/kaw_gon/4.jpg'),
                            require('@/assets/images/destination/kayin/kaw_gon/5.jpg'),
                            require('@/assets/images/destination/kayin/kaw_gon/6.jpg'),
                        ],
                    title: `ကော့ဂွန်းဂူ`,
                    status: 0,
                    content: `ကော့ဂွန်းဂူသည် ဘားအံမြို့နယ်၊ ကော့ဂွန်းကျေးရွာအနီးတွင်ရှိသည့် ထုံးကျောက်လိုဏ်ဂူဖြစ်သည်။ ကရင်ပြည်နယ်ဝန်းကျင်ရှိ သဘာဝထုံးကျောက်လှိုဏ်ဂူများအတွင်း၌ ဗုဒ္ဓဘာသာဆိုင်ရာ ကိုးကွယ်မှု အမွေအနှစ်များစွာရှိသော်လည်း ဤကော့ဂွန်းဂူသည် အထင်ရှားဆုံးနှင့် ယဥ်ကျေးမှုအမွေအနှစ်များ ကျန်ရှိနေမှုအများဆုံးဖြစ်သည်။ ကော့ဂွန်းဂူတည်ရှိရာ ကော့ဂွန်းထုံးကျောက်တောင်တွင် ကော့ဂွန်းဂူ၊ ကျွဲဂူနှင့် ကျားဂူဟူ၍ရှိသော်လည်း ကော့ဂွန်းဂူသာလျှင် ရှေးဟောင်းယဥ်ကျေးမှုအမွေအနှစ်အဖြစ် တည်ရှိသည်။ ကော့ဂွန်းဂူသည် အလျား(၁၃၀)ပေ၊ အနံ(၇၀)ပေနှင့် အမြင့်(၂၅)ပေရှိသည်။ ကော့ဂွန်းဂူ၌ အများဆုံး တွေ့ရသည်မှာ ရှေးဟောင်းအုတ်ခွက်ဗုဒ္ဓဆင်းတုတော်များဖြစ်သည်။ ၄င်းတို့ကို ဂူကျောက်တောင်နံရံများနှင့် ဂူအမိုးများတွင် ကပ်လှူပူဇော်ထားပါသည်။ သမိုင်းအထောက်အထားများကို ဖြည့်စွက်‌ပေးနိုင်သော ကျောက်စာနှင့် ရှေးမွန်အရေးအသားများ၊ မင်စာမှတ်တမ်းများရှိသည်။ ကော့ဂွန်းဂူသည် ဘုရားဖူး ဧည့်သည်များ၊ သုတေသီများ၊ သုတေသနဝါသနာရှင်များ၊ နိုင်ငံခြားသားခရီးသွားဧည့်သည်များအတွက် စိတ်ဝင်စားဖွယ်၊ အံ့အားသင့်ဖွယ်၊ လေ့လာမှတ်တမ်းပြုရန်ကောင်းသည့် ဗုဒ္ဓပြတိုက်ကြီးသဖွယ်ဖြစ်သည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/kayin/shwe_yin_mhyaw/1.jpg'),
                        ],
                    title: `‌‌ရွှေရင်မျှော်ဘုရား`,
                    status: 0,
                    content: `ရွှေရင်မျှော်ဘုရားသည် ဘားအံမြို့ သံလွင်မြစ်၏အရှေ့ဖက်ကမ်းတွင်တည်ရှိပြီး နေဝင်ချိန်ရှုခင်းကို ကြည့်ရှုရန် အကောင်းဆုံးနေရာတစ်ခုဖြစ်ပါသည်။ ဘားအံမြို့ စတင်ပေါ်ပေါက်ခဲ့သော ဒဏ္ဍာရီတွင် အရေးပါသည့်ဖားဘုရင်ကြီးနှင့် နဂါးမင်းတို့၏ရုပ်ထုကိုလည်း ရွှေရင်မျှော်ဘုရား ပရဝုဏ်အတွင်းတွင် တွေ့ရှိနိုင်ပါသည်။ ရွှေရင်မျှော်ဘုရားဘေးမြစ်ကမ်းပါးတွင် မြစ်ပြင်၏အလှကို ကြည့်ရှုခံစားနိုင်သည့် မျှော်စင် တစ်ခုလည်းရှိပါသည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/kayin/yathapyan_cave/1.jpg'),
                            require('@/assets/images/destination/kayin/yathapyan_cave/2.jpg'),
                            require('@/assets/images/destination/kayin/yathapyan_cave/3.jpg'),
                        ],
                    title: `ရသေ့ပျံဂူ`,
                    status: 0,
                    content: `ရသေ့ပျံဂူသည် ကရင်ပြည်နယ်၊ ဘားအံမြို့၊ ရသေ့ပျံကျေးရွာအနီး သံလွင်မြစ်၏ အနောက်ဖက်တွင် တည်ရှိသည်။ ပင်လယ်ရေမျက်နှာပြင်ထက် (၁၁၆)ပေခန့်အမြင့်တွင် တည်ရှိသည်။ ရသေ့ပျံဂူ၏ အရှေ့ဖက် နံရံနှင့် အတွင်းပိုင်းရှိနံရံတို့တွင် အုတ်ခွက်ဗုဒ္ဓဆင်းတုများကို အမြင့်(၃)လက်မခန့်မှစ၍ (၅)ပေခန့်အထိ အရွယ် အစားမျိုးစုံ တွေ့မြင်ရသည်။ ရသေ့ပျံဂူအတွင်းတွင် ကပ်လှူပူဇော်ထားသော ဗုဒ္ဓရုပ်ပွားတော်များသည် နေရောင်ဒဏ်ကို တိုက်ရိုက်မထိတွေ့ရသဖြင့် မူလလက်ရာအတိုင်း ဖူးမြှော်နိုင်သည်။ ရုပ်တု၊ ဆင်းတု၊ အုတ်ခွက်ဘုရားများကို လေ့လာကြည့်ပါက အေဒီ(၁၇)ရာစုအတွင်း အနီးအနားရှိ ကုသိုလ်ရှင်များ၊ ဘုရားဖူးများ၏ ကုသိုလ်ပြုလှုဒါန်းခဲ့မှုများ အလွန်များပြားခဲ့သည်ကို လေ့လာသိရှိနိုင်သည်။ ဂူအတွင်းတွင် တွေ့ရှိရသော ဗုဒ္ဓဆင်းတုတော်အချို့မှာ အေဒီ(၁၃)ရာစုနှစ်ခန့်က လက်ရာဖြစ်သည်။ အချို့သော နေရာများရှိ အုတ်ခွက်ဆင်းတုများမှာ သဘာဝဘေးဒဏ်နှင့် နှစ်ကာလကြာမြင့်လာသည့်အတွက် ပျောက်ဆုံးလစ်ဟာ နေသည်ကို တွေ့ရသည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/kayin/kan_thar_yar/1.jpg'),
                        ],
                    title: `ကန်သာယာ`,
                    status: 0,
                    content: `ကန်သာယာသည် ဘားအံမြို့အနီးရှိ ဇွဲကပင်တောင်ကို နောက်ခံပြုလျက် တည်ရှိနေသော သာယာလှပသည့် ကန်ကြီးတစ်ကန်ဖြစ်သည်။ ဇွဲကပင်တောင်ပေါ်မှ လှမ်းမြင်နိုင်ပြီး သဘာဝရှုခင်းများနဲ့ အနားယူအပန်းဖြေရန် ကောင်းသော နေရာတစ်ခုဖြစ်သည်။ 
                    `,
                },
                {
                    images : [
                            require('@/assets/images/destination/kayin/loon_nya_blue_lake/1.jpg'),
                            require('@/assets/images/destination/kayin/loon_nya_blue_lake/2.jpg'),
                        ],
                    title: `လွန်းညရေပြာအိုင်`,
                    status: 0,
                    content: `လွန်းညရေပြာအိုင်သည် ဘားအံမြို့နယ်၊ လွန်းညကျေးရွာအနီးတွင် တည်ရှိသည်။ ယင်းရေပြာအိုင်မှာ ရေကစားရန်အတွက် အသင့်အတင့်ကျယ်ဝန်းပြီး မိုးရာသီကာလတွင် ပိုပြာသည်ဟု သိရသည်။ ရေပြာအိုင်ရှိ တောင်ခြေသို့သွားရာ လယ်ကွင်းပြင်များကို ဖြတ်သန်းဖောက်လုပ်ထားသော တံတားရှည်လေးမှာလည်း ကန်၏အလှကို ပို၍ဆွဲဆောင်စေပါသည်။ 
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