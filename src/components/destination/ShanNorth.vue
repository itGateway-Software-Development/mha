<template>
    <div class="destination">
        <div class="hero-section">
            <div class="banner">
                <img src="@/assets/images/destination/shannorth/banner.jpg" class="banner" alt="">
            </div>
            <div class="content">
                <div class="hero-header">
                    <img src="@/assets/images/destination/travel.gif" class="icon" alt="">
                
                    <h3>Places to Visit in</h3>
                    <h2>Shan North</h2>
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
                            require('@/assets/images/destination/shannorth/Yan_Tine_Aung/1.jpg'),
                            require('@/assets/images/destination/shannorth/Yan_Tine_Aung/2.jpg'),
                            require('@/assets/images/destination/shannorth/Yan_Tine_Aung/1.jpg'),
                            require('@/assets/images/destination/shannorth/Yan_Tine_Aung/2.jpg'),
                        ],
                    title: `ရန်တိုင်းအောင် ဆုတောင်းပြည့် မြို့ဦးစေတီ`,
                    content: `‌ရှမ်းပြည်နယ်မြောက်ပိုင်း၊ လားရှိုးမြို့အဝင်တွင် တည်ထားကိုးကွယ်ထားသည့် ရန်တိုင်းအောင် ဆုတောင်းပြည့် မြို့ဦးစေတီတော်သည် လားရှိုးမြို့၏ အထင်ကရဘုရားတစ်ဆူဖြစ်ပြီး ဘုရားဖူးသူများ၊ တရားအားထုတ်သူများဖြင့် လည်ပတ်သူများသော နေရာတစ်နေရာဖြစ်သည်။<br>
                        ရန်တိုင်းအောင်ဆုတောင်းပြည့် မြို့ဦးစေတီတော်သည် ရွှေတိဂုံစေတီတော် ပုံတူစေတီတော်ဖြစ်ပြီး ၂၀၀၆ ခုနှစ်၊ မတ်လ ၁၉ ရက်နေ့တွင် တည်ဆောက်ပြီးစီးခဲ့သည်။ စေတီတော်ကို လှိုဏ်ခံ၍ တည်ဆောက်ထားပြီး လှိုဏ် အတွင်း၌ ဗုဒ္ဓရုပ်ပွားတော်များ ဖူးမြင်ရပါသည်။ စေတီတော်၏ အရှေ့ဘက်တွင် ၂၀၀၃ ခုနှစ်၌ တည်ထား ကိုးကွယ်ခဲ့သော ဉာဏ်တော်အမြင့်(၅၅)ပေရှိ နဂါးရုံးဘုရားကို ဖူးမြှော်နိုင်ပြီး စေတီတော်၏ အနောက်ဘက်တွင် ရပ်တော်မူဘုရား၊ လေးမျက်နှာဘုရား၊ လျောင်းတော်မူဘုရားကြီးများသို့လည်း သွားရောက်ဖူးမြှော်နိုင်သကဲ့သို့ ရန်တိုင်းအောင်ရှုခင်းသာ၊ ရှမ်းမြောက်ဒေသ တိုင်းရင်းသားများဆုံဆည်းရာ ပန်းခြံသို့လည်း သွားရောက် လည်ပတ်နိုင်သည်။ စေတီတော်၏ ဗုဒ္ဓပူဇနိယပွဲတော်ကို နှစ်စဉ်တပေါင်းလပြည့်ကျော် (၁)ရက်နေ့တွင် စည်ကား သိုက်မြိုက်စွာ ကျင်းပလေ့ရှိသည်။`,
                },
                {
                    images : [
                            require('@/assets/images/destination/shannorth/Mansu/1.jpg'),
                            require('@/assets/images/destination/shannorth/Mansu/2.jpg'),
                            require('@/assets/images/destination/shannorth/Mansu/1.jpg'),
                            require('@/assets/images/destination/shannorth/Mansu/2.jpg'),
                        ],
                    title: `မန်ဆူစေတီတော်မြတ်ကြီး`,
                    content: `ရှမ်းပြည်နယ်‌မြောက်ပိုင်း၊ လားရှိုးမြို့၊ ရပ်ကွက်အမှတ်(၁၂)၊ သိန္နီလမ်းမကြီး၏ အရှေ့ဖက်တွင် တည်ရှိသော မန်ဆူစေတီတော်ကြီးသည် လားရှိုးမြို့၏ သမိုင်းဝင်ထင်ရှားသော ဆုတောင်းပြည့် စေတီတော်ကြီး ဖြစ်ပြီး ကောဇာသက္ကရာဇ်(၁၁၄၅)ခုနှစ်၊ သိန္နီနယ်အစု ရှမ်းစော်ဘွားကြီး(၃)ဦးမှ တည်ထားကိုးကွယ်ခဲ့သည်။ မန်ဆူဆိုသည်မှာ ရှမ်းဘာသာစကားဖြစ်ပြီး မြန်မာအဓိပ္ပာယ်မှာ “မြန်မာတို့နှစ်သက်သောနေရာ” ဟု အဓိပ္ပာယ်ရ သည်။<br>
                        ဘကြီးတော်မင်းလက်ထက်တွင် အမတ်ကြီးဦးပေါ်ဦးက မန်ဆူစေတီတော်မြတ်ကြီးကို ဉာဏ်တော်မြှင့်ပြီး ပြုပြင်မွမ်းမံခဲ့ပါသည်။ မန်ဆူစေတီတော်ကြီးတွင် ယနေ့အချိန်ထိရှိနေသေးသည့်  ခေါင်းလောင်းသည် ဦးပေါ်ဦး နာမည်နဲ့ ရေးထိုးထားသည့် ခေါင်းလောင်းဟုသိရသည်။ ခေတ်အဆက်ဆက် ပြုပြင်ထိန်းသိမ်း ကိုးကွယ်လာခဲ့ရာ ယခုအခါ လားရှိုးမြို့၏ ကျက်သရေဆောင် စေတီတော်မြတ်ကြီးအဖြစ် ဖူးမြှော်နိုင်ပါသည်။`,
                },
                {
                    images : [
                            require('@/assets/images/destination/shannorth/Yan_Aung_Myin/1.jpg'),
                            require('@/assets/images/destination/shannorth/Yan_Aung_Myin/1.jpg'),
                            require('@/assets/images/destination/shannorth/Yan_Aung_Myin/1.jpg'),
                            require('@/assets/images/destination/shannorth/Yan_Aung_Myin/1.jpg'),
                        ],
                    title: `ရန်အောင်မြင်ဘုရား`,
                    content: `ရန်အောင်မြင်ဘုရားသည် ရှမ်းပြည်နယ်မြောက်ပိုင်း၊ လားရှိုးမြို့၊ အမှတ်(၁)ရပ်ကွက်၊ မန္တလေး - လားရှိုးကားလမ်းအနီးတွင် တည်ရှိပြီး လားရှိုးမြို့၏ ရှေးအကျဆုံးစေတီများထဲတွင် တစ်ဆူအပါအဝင်ဖြစ်သည်။ စေတီတော်ကို သက္ကရာဇ် ၉၁၂ ခုနှစ်တွင် ဟံသာဝတီဆင်ဖြူများရှင် ဘုရင့်နောင်မင်းတရားကြီးက သိန္နီ၊ သီပေါအား ယူနန်မြို့စားသိမ်းထားသဖြင့် စစ်ချီလာစဉ် အောင်မြေနေရာ၌ တည်ထားကိုးကွယ်ခဲ့သည်ဟု သိရပါသည်။ မူလစေတီတည်ထားစဉ်က စေတီတော်သည် ဉာဏ်တော်အမြင့် ပေ(၂၀)ရှိသည်ဟု သိရသည်။ <br>
                       စေတီတော်သည် နှစ်ကာလကြာမြင့်သည့်အလျောက် ဘုရားငုတ်တိုအဖြစ် ပြိုကျပျက်စီးခဲ့ပြီး ချုံနွယ်ပိတ်ပေါင်းများဖြင့် ဖုံးအုပ်လျက် တိမ်မြှုပ်ပျောက်ကွယ်နေခဲ့ရာမှ ၁၉၇၇ ခုနှစ်တွင် ပြန်လည်ဖော်ထုတ်၍ ယခုလက်ရှိ တွေ့မြင်ဖူးမြှော်ရသော ဉာဏ်တော်အမြင့်(၇၂)ပေရှိ စေတီတော်ကို ပြန်လည်တည်ထား ကိုးကွယ်ခဲ့ သည်။`,
                },
                {
                    images : [
                            require('@/assets/images/destination/shannorth/Shan_Kyaik_Kyaung_Taw/1.jpg'),
                            require('@/assets/images/destination/shannorth/Shan_Kyaik_Kyaung_Taw/2.jpg'),
                            require('@/assets/images/destination/shannorth/Shan_Kyaik_Kyaung_Taw/3.jpg'),
                            require('@/assets/images/destination/shannorth/Shan_Kyaik_Kyaung_Taw/4.jpg'),
                        ],
                    title: `ပေါ်တော်မူ ရှန်ခိုက်ကျောင်းတော်`,
                    content: `ရှန်ခိုက်ဘုရားကျောင်းသည် ဟိန္ဒူဘာသာဝင်များ အထူးအလေးထားကိုးကွယ်သည့် ပေါ်တော်မူ သီရိ သျှီဝ ဘုရားကျောင်းတော်ဖြစ်ပြီး လားရှိုးမြို့နယ်၊ မန်းပွဲကျေးရွာနှင့် နန်းမျှော်ဘူတာအကြား ရှန်ခိုက် မီးရထားရပ် စခန်းအနီး လားရှိုး - သီပေါကားလမ်းဘေးတွင် တည်ရှိသည်။ သျှီဝ ရှန်ခိုက် နတ်ဘုရားကို ခရစ်နှစ် (၁၉၀၃)ခုနှစ် ဗြိတိသျှလက်ထက်တွင် အူဒီယားအနွယ်ဝင် ဟိန္ဒူများမှ မန္တလေး - လားရှိုး မီးရထားလမ်းဖောက်လုပ်ရန် ကျောက်မိုင်းခွဲရာမှ ကျောက်ဆောင်၌ လက်ဝါးသဏ္ဍာန်ပေါ်နေကာ အနီးအနားတွင် ပေါ်တော်မူ သျှီဝဘုရား ဆင်းတုတော်ကိုတွေ့ရကြောင်း ဘုရားကျောင်းသမိုင်းတွင် ဖော်ပြထားသည်။ <br>
                      လက်ဝါးသဏ္ဍာန်မှာ ဆသီးမယ်တော်၏ လက်ပွားတော်ဖြစ်ကြောင်း ယနေ့တိုင်လက်ခံထားကြသည်။ လက်ဝါးသဏ္ဍာန် အောက်တည့်တည့်မှ စီးဆင်းနေသော ကြည်လင်သည့်ရေများသည် မည်သည့်နေရာမှ အစပြုလာမှန်းမသိဘဲ ကျောက်ဆောင်များကြားမှ ကျဆင်းနေသည်။ ကျောင်းတော်ကြီး၏ တောင်ဖက် ကပ်လျက်တွင် ဉာဏ်တော်ပေ(၅၀)အမြင့်ရှိသော သီရိသျှီဝဘုရားရုပ်ပွားတော်မြတ် တည်ထားကိုးကွယ်ထား ပါသည်။ မြွေကျောင်းဆောင်ရှိ သျှီဝ နတ်ဘုရား သင်္ကေတဖြစ်သော မြွေရုပ်တုတွင် အမွေးနံ့သာပန်းဆီမီးများဖြင့် ပူဇော်ထားလျက် လူမျိုးဘာသာပေါင်းစုံမှ ဆုတောင်းသူများဖြင့် စည်ကားလျက်ရှိပါသည်။ ထို့ပြင် ဘုရားကျောင်းဝန်းနှင့် မနီးမဝေးရှိ သာယာလှပသော ရှန်ဟိုက်ရေတံခွန်တွင်လည်း အနားယူအပန်းဖြေနိုင်သည်။  <br>
                      ရှန်ခိုက်ဘုရားပွဲတော်ကို နှစ်စဉ် မတ်လ(၂)ရက်နေ့မှ (၄)ရက်နေ့အထိ (၃)ရက်တိုင်တိုင် ကျင်းပလေ့ရှိပြီး မြန်မာနိုင်ငံအနှံ့အပြားမှ ဟိန္ဒူဘာသာဝင်များအပြင် အခြားဘာသာဝင်များပါ အတူတကွပါဝင်ဆင်နွှဲလျက်ရှိပြီး ပွဲတော်မှာ မြန်မာနိုင်ငံတွင်သာမက နိုင်ငံရပ်ခြားသို့ပါ ပေါ်တော်မူ သီရိ သျှီဝ ရှန်ခိုက်ဘုရားကျောင်းတော်ကြီး မဟာသျှီဝရာတြိဘုရားပွဲတော်ကြီးဟု ထင်ရှားပါသည်။`,
                },
                {
                    images : [
                            require('@/assets/images/destination/shannorth/Nan_Myaw_Butar/1.jpg'),
                            require('@/assets/images/destination/shannorth/Nan_Myaw_Butar/2.jpg'),
                            require('@/assets/images/destination/shannorth/Nan_Myaw_Butar/3.jpg'),
                            require('@/assets/images/destination/shannorth/Nan_Myaw_Butar/4.jpg'),
                        ],
                    title: `နန်းမျှော်ဘူတာ`,
                    content: `လားရှိုး - မန္တလေး ရထားလမ်းပေါ်မှာရှိသည့် နန်းမျှော်ဘူတာသည် အင်္ဂလိပ်ခေတ်လက်ကျန် အဆောက် အဦတချို့နှင့် ကိုလိုနီခေတ်လက်ကျန် အမွေအနှစ်နေရာလေးလို့ ပြောလို့ရပါသည်။ ဒုတိယကမ္ဘာစစ်မတိုင်ခင် နမ္မတူဘော်တွင်းက ထွက်ရှိလာသည့် ခဲနှင့်ငွေ သတ္တုတွေကို နမ္မတူ-နားဆိုင်း-နမ့်ယော်ဘူတာမှ လားရှိုး-မန္တလေး ရထားလမ်းပေါ်သို့ ထပ်ဆင့်တင်ဆောင်ရာ ဘူတာလေးဖြစ်ပါသည်။ <br>
                      ယခုအခါ နမ္မတူ-နားဆိုင်း-နမ့်ယော်ဘူတာလမ်းပိုင်းကို အသုံးမပြုတော့ပေမယ့် ယနေ့အချိန်ထိ ဘူတာ ဝန်ထမ်းဟောင်းများသည် နေရပ်ကိုမစွန့်ခွာပဲ ရွာလေးတစ်ရွာအဖြစ် ဆက်လက်နေထိုင်လျက်ရှိပါသည်။`,
                },
                {
                    images : [
                            require('@/assets/images/destination/shannorth/Lashio_Hot_Spring/1.jpg'),
                            require('@/assets/images/destination/shannorth/Lashio_Hot_Spring/2.jpg'),
                            require('@/assets/images/destination/shannorth/Lashio_Hot_Spring/1.jpg'),
                            require('@/assets/images/destination/shannorth/Lashio_Hot_Spring/2.jpg'),
                        ],
                    title: `လားရှိုးရေပူစမ်း`,
                    content: `လားရှိုးရေပူစမ်းသည် လားရှိုးမြို့မှ (၄)မိုင်ခန့်အကွာ လားရှိုး-သိန္ဒီလမ်း ယာဖက် (၂)မိုင်ခန့်အကွာတွင် တည်ရှိသည်။ ‌ရေပူစမ်းကို ၁၉၆၃ ခုနှစ်တွင် စတင်တွေ့ရှိခဲ့ပြီး ရေပူစမ်း၏ ပင်မကန်အပူချိန်မှာ (၅၂)ဒီဂရီစင်တီဂရိတ်ရှိပြီး ရေပူစိမ်ခြင်းဖြင့် ကိုယ်ကျန်းမာခြင်းနှင့် အရေပြားရောဂါများ ပျောက်ကင်းသည်ဟု ဒေသခံများကဆိုသည်။ ရေပူစမ်းမှ ရေပူတို့သည် အထက်မှစီးဆင်းလာသည်မဟုတ်ဘဲ အောက်မှစိမ့်ထွက်နေခြင်း ဖြစ်ပြီး ချောင်းအဖြစ် အောက်ပိုင်းသို့ ဆက်လက်စီးဆင်းသွားပါသည်။ လားရှိုးရေပူစမ်းသည် ဧရိယာအတော်အသင့် ကျယ်ဝန်းကာ စားသောက်ဆိုင်များလည်း အများအပြားရှိပြီး လာရောက်အပန်းဖြေ လည်ပတ်သူများနှင့် စည်ကားလျက်ရှိသော လားရှိုးမြို့ရှိ ထင်ရှားသည့် ရေပူစမ်းတစ်ခုဖြစ်သည်။`,
                },
                                {
                    images : [
                            require('@/assets/images/destination/shannorth/Goteik_Viaduct/1.jpg'),
                            require('@/assets/images/destination/shannorth/Goteik_Viaduct/2.jpg'),
                            require('@/assets/images/destination/shannorth/Goteik_Viaduct/1.jpg'),
                            require('@/assets/images/destination/shannorth/Goteik_Viaduct/2.jpg'),
                        ],
                    title: `ဂုတ်ထိပ်တံတား`,
                    content: `ဂုတ်ထိပ်တံတားသည် ရှမ်းပြည်နယ်မြောက်ပိုင်း နောင်ချိုနှင့် ကျောက်မဲအကြား မန္တလေး၊ လားရှိုး မီးရထားလမ်းပေါ်တွင် တည်ရှိသည်။ သီပေါမြို့နယ်တွင် ဟိုကွတ်အမည်ဖြင့် ရွာတစ်ရွာရှိပြီး ဟိုကွတ်ဟူသော အမည်သည် ထိုနေရာတွင် မြစ်ချောင်းများ ငုပ်လျှိုးကွယ်ပျောက်သွားသည်ကို အစွဲပြု၍ ခေါ်ခြင်းဖြစ်သည်။ ထိုရွာအနီးတွင် နမ်းပဆေးမြစ်သည် မြေကြီးထဲသို့ ငုပ်လျှိုးသွားပြီး အခြားတစ်နေရာရောက်မှ မြစ်ကြောင်း ပြန်ပေါ်လာသဖြင့် နမ်းပဆေးမြစ်ငုပ်သွားသည့် ထိပ်နေရာဟုရည်ညွှန်းကာ ထိုနေရာကို ငုပ်ထိပ်ကျေးရွာဟု ခေါ်ခဲ့ကြသည်။ ကာလရွေ့လျားလာသောအခါ “ငုပ်ထိပ်” မှ “ဂုတ်ထိပ်” ဖြစ်လာခဲ့သည်။ <br>
                    ဗြိတိသျှအစိုးရသည် မြန်မာနိုင်ငံကို သိမ်းပိုက်ပြီးနောက် ၁၈၉၇ ခုနှစ်တွင် မန္တလေးမှ ဗန်းမော်သို့ မီးရထားလမ်းဖောက်လုပ်ခဲ့ပြီး မန္တလေးနှင့် ကွမ်းလုံကိုလည်း ရထားလမ်းဖောက်လုပ်ရန် စီစဉ်ခဲ့ကာ ၎င်းလမ်း ပေါ်တွင် မီးရထားဖြတ်သန်းသွားနိုင်မည့် ဂုတ်ထိပ်တံတားကို ဆောက်လုပ်ခဲ့ကြသည်။ <br>
                    ကမ္ဘာပေါ်တွင် ဒုတိယအမြင့်ဆုံး ရထားလမ်းဖြစ်လာမည့် ဂုတ်ထိပ်တံတားကို တာဝန်ယူ တည်ဆောက်ရန် ဗြိတိသျှအစိုးရက မြန်မာ့မီးရထားကုမ္ပဏီကို တာဝန်ပေးခဲ့သည်။ ထို့ကြောင့် ၁၈၉၉ ခုနှစ်တွင် မြန်မာ့မီးရထားကုမ္ပဏီက ဂုတ်ထိပ်တံတားကြီးဆောက်လုပ်ရန် အမေရိကန်နိုင်ငံ ပင်ဆဲလ်ဗေးနီးယားနှင့် မေရီလန်းစတီးကုမ္ပဏီတို့ကို ငှားရမ်းခဲ့သည်။ သို့သော် တံတားကြီးကို ဦးစီးတည်ဆောက်သူမှာ မြန်မာ့မီးရထား ဌာနမှ အင်ဂျင်နီယာ Sir Arthur Rendel နှင့် ဗြိတိသျှ၊ မြန်မာအင်ဂျင်နီယာများဖြစ်ကြသည်။ တံတားအတွက် အသုံးပြုသောပစ္စည်းများကို အမေရိကန်နိုင်ငံမှ တိုက်ရိုက်မှာယူတင်သွင်းခဲ့သည်။ <br>
                    ဂုတ်ထိပ်တံတားကြီး၏ ဒီဇိုင်းပုံစံကို ဗြိတိန်နိုင်ငံမှ ဆာအေအမ်ရင်းဒဲလ်အင်ကုမ္ပဏီက ရေးဆွဲခဲ့သည်။ တံတားကြီးကို ထောက်ပင့်ထားသောသံတိုင်များအနက် အမြင့်ဆုံးတိုင်သည် ပေ(၃၂ဝ)မြင့်၍ အနိမ့်ဆုံးသံတိုင်မှာ (၄၅)ပေမြင့်သည်။ ဂုတ်ထိပ်တံတား၏ ထူးခြားချက်မှာ အခြားသော တံတားကြီးများကဲ့သို့ မြစ်ချောင်းများကို ဖြတ်ကျော်ဆောက်လုပ်ထားခြင်းမဟုတ်ဘဲ ပေ(၃ဝဝ)ကျော်မတ်စောက်သည့် လျှိုကြီးနှစ်ခုကို ဖြတ်သန်းတည် ဆောက်ထားခြင်းဖြစ်ပေသည်။ ဂုတ်ထိပ်တံတားသည် ပေ(၂၂၆ဝ)ရှည်လျားပြီး တံတား၏ အောက်ခြေသံတိုင် အချို့ကို အနိမ့်ဆုံးချိုင့်ဝှမ်းမြေပြင်မှ ပေ(၁၁ဝဝ)ခန့်အမြင့်တွင် စိုက်ထူထားသည်။ တံတား၏ ပျမ်းမျှအမြင့်သည် တံတားအောက်ရှိ လိုဏ်ဂူအောက်တွင် ဖြတ်သန်းစီးဆင်းနေသော မြစ်ရေပြင်မှ အထက်ပေ(၈၂ဝ)ဖြစ်ပြီး အမြင့်ဆုံးထောက်တိုင်နေရာရှိ မီးရထားသံလမ်းသည် တံတားအောက်မြေပြင်မှ (၃၃၅)ပေ အမြင့်တွင် တည်ရှိသည်။ <br>
                    တံတားတစ်ခုလုံးအတွက် သံနှင့် သံမဏိ (၄၃၁၁)တန်၊ သံမှိုပေါင်းတစ်သန်း အသုံးပြုခဲ့ရသည်။ တံတားတိုင်ပေါင်း (၁၆)တိုင်ရှိရာ တံတားကြီး၏ အလယ်တိုင်များဖြစ်ကြသည့် တိုင်အမှတ်(၈)နှင့် (၉)သည် အမြင့်ဆုံးဖြစ်ကြသည်။ ရထားလမ်းဖြတ်သန်းသွားမည့် ဂုတ်ထိပ်တံတားကို ဂုတ်ထိပ်ကျေးရွာရှိ ကျောက်ဂူကြီး နှစ်ခုကို ဖြတ်သန်းလျက် တောင်ထိပ်နှစ်ခုကို သွယ်တန်းဖောက်လုပ်ခဲ့ရသည်။ တံတားကြီးဆောက်လုပ်မှု လုပ်ငန်းများကို ၁၈၉၉ ခုနှစ်တွင် စတင်ဆောင်ရွက်ခဲ့ပြီး ၁၉ဝဝ ပြည့်နှစ် ဇန်နဝါရီလ (၁)ရက်နေ့တွင် ပြီးစီးခဲ့ကာ ထိုခေတ်က ငွေကျပ်(၁,၆၉၈,၂ဝဝ) ကုန်ကျခဲ့သည်။ ၁၉ဝ၃ ခုနှစ်တွင် တံတားကြီးကို စတင်အသုံးပြုခဲ့သည်။ ဂုတ်ထိပ်တံတားကြီးသည် ဒုတိယကမ္ဘာစစ်ကာလအတွင်း မဟာမိတ်တို့၏ မြေလှန်စနစ်ကြောင့် ဖျက်ဆီးခြင်းကို ခံခဲ့ရသဖြင့် တိုင်အမှတ် (၂)နှင့် (၅)တို့ ပျက်စီးခဲ့ရသည်။ မြန်မာနိုင်ငံမှ ဂျပန်တို့ ပြန်လည်ဆုတ်ခွာချိန်တွင်လည်း ဂုတ်ထိပ်တံတား၏ အမြင့်ဆုံးတိုင်များဖြစ်သည့် တံတားအလယ်တိုင်လေးတိုင်ကို ဗုံးခွဲဖျက်ဆီးခဲ့သဖြင့် တိုင် အမှတ်(၁၁)သည် အောက်ခြေပြတ်ခဲ့ပြီး တိုင်အမှတ်(၁ဝ) နှင့် (၁၂)တို့မှာလဲကျပျက်စီးခဲ့ကြသည်။ ထိုတိုင် များပေါ်တွင် တပ်ဆင်ထားသော ပေ(၁၂ဝ)စီရှည်သည့် ပေါင်းကူးသံပေါင်လေးခုသည်လည်း မြေကြီးပေါ်သို့ ပြုတ်ကျခဲ့ကြသည်။ <br>
                    ၁၉၄၈ ခုနှစ် မြန်မာနိုင်ငံလွတ်လပ်ရေးရပြီးသည့်နောက်တွင် ပျက်စီးနေသော ဂုတ်ထိပ်တံတားကြီးကို မြန်မာနိုင်ငံမီးရထားဌာနက ပြင်ဆင်ခဲ့သည်။ ဂုတ်ထိပ်တံတား ပြင်ဆင်ခြင်းလုပ်ငန်းများကို ၁၉၄၈ ခုနှစ် မေလ တွင် စတင်လုပ်ဆောင်ခဲ့သော်လည်း ပစ္စည်းများရှားပါးမှု၊ လမ်းပန်းဆက်သွယ်ရေးခက်ခဲမှုတို့ကြောင့် (၃)နှစ်ကျော် အချိန်ကြာမြင့်ခဲ့ကာ ၁၉၅၁ ခုနှစ် သြဂုတ်လတွင် ပြီးစီးခဲ့သည်။ ထိုအချိန်က ဂုတ်ထိပ်တံတားကြီး ပြင်ဆင်မှု ကုန်ကျစရိတ်ငွေမှာ ငွေကျပ်(၃၂)သိန်းဖြစ်သည်။ တံတားတည်ဆောက်မှု၊ နည်းပညာအဆင့်မြင့်မှု၊ သဘာဝ ပတ်ဝန်းကျင်လှပမှုတို့ကြောင့် ခေတ်အဆက်ဆက် ထင်ရှားကျော်ကြားသော တံတားဖြစ်ပြီး ကမ္ဘာ့အံ့ဖွယ် စာရင်းတွင်ပါဝင်ပါသည်။ ယခုအခါ သက်တမ်း(၁၂၀)နှစ်ကျော်ခဲ့ပြီဖြစ်သည့် ဂုတ်ထိပ်တံတားသည် ခေတ်အဆက်ဆက် ပျက်စီး ယိုယွင်းမှုများကို ထိန်းသိမ်းလာခြင်းကြောင့် ယနေ့တိုင်တည်ရှိပြီး ကမ္ဘာလှည့်ခရီးသည်များ စိတ်ဝင်စားသော နေရာတစ်ခုအဖြစ် တည်ရှိလျက်ရှိပါသည်။`,
                },
                {
                    images : [
                            require('@/assets/images/destination/shannorth/Baw_Gyo/1.jpg'),
                            require('@/assets/images/destination/shannorth/Baw_Gyo/2.jpg'),
                            require('@/assets/images/destination/shannorth/Baw_Gyo/3.jpg'),
                            require('@/assets/images/destination/shannorth/Baw_Gyo/4.jpg'),
                        ],
                    title: `သမိုင်းဝင် ဘော်ကြိုမုဋ္ဌောစေတီတော်`,
                    content: `သမိုင်းဝင် ဘော်ကြိုမုဋ္ဌောစေတီတော်သည် ရှမ်းပြည်နယ်မြောက်ပိုင်း၊ သီပေါမြို့နယ်၊ ဘော်ကြိုကျေးရွာ တွင်တည်ရှိပါသည်။ မြန်မာနိုင်ငံတွင် ထင်ပေါ်ကျော်ကြားသည့် တန်ခိုးကြီးဘုရားများအနက် ရှေးဟောင်း သမိုင်းဝင် ဘော်ကြိုမုဋ္ဌောစေတီတော်လည်း အပါအဝင်ဖြစ်သည်။ စေတီတော်ကို သီရိဓမ္မာသောကမင်းကြီး တည်ထားခဲ့ပြီး “မုဋ္ဌောစေတီ” ဟု ဘွဲ့တော်သခဲ့သည်။  မုဋ္ဌောစေတီကို ဘော်ကြိုရွာအနီး၌ တည်ရှိသဖြင့် နောင်အခါ “ဘော်ကြိုဘုရား” ဟုလည်း ခေါ်တွင်လာသည်။ ဒေသခံရှမ်းလူမျိုးများအဆိုအရ စေတီတော် တည်ထားသည့်နေရာသည် ဘုရားလောင်းနုစဉ်ဘဝ ဝက်ဖြူမင်းဖြစ်စဉ်က နေထိုင်ခဲ့သည့်နေရာဖြစ်တယ်လို့ ယုံကြည်ကြပါသည်။ <br>
                    ခရစ်သက္ကရာဇ် ၁၁၇၄ ခုနှစ် (မြန်မာသက္ကရာဇ် ၅၃၆) တွင် ပုဂံပြည့်ရှင် နရပတိစည်သူမင်းကြီးက မုခ်လေးမုခ်မှာ ရုပ်ပွားတော်(၄)ဆူကို စကားသားနဲ့ ထုလုပ်ကိုးကွယ်ခဲ့ပါသည်။ ဘော်ကြို မုဋ္ဌောစေတီတော် မြတ်ကြီး၏ မုခ်လေးမုခ်၌ သီတင်းသုံး ကိန်းဝပ်စံပယ်တော်မူသော ဆင်းတုတော်များ၏ ဘွဲ့တော်အမည်များမှာ -
                    <ul>
                        <li>- အရှေ့ဘက်မုခ်တွင် ရတနာမာရ်အောင်၊</li>
                        <li>- တောင်ဘက်မုခ်တွင် ရတနာဉာဏ်အောင်၊</li>
                        <li>- အနောက်ဘက်မုခ်တွင် ရတနာဈာန်အောင်၊</li>
                        <li>- မြောက်ဘက်မုခ်တွင် ရတနာရန်အောင် ဟု ဘွဲ့အမည်ရှိသည်</li>
                    </ul>
                    ဘော်ကြိုဘုရားပွဲတော်ကို နှစ်စဉ် တပေါင်းလဆန်း (၇)ရက်နေ့မှ လပြည့်ကျော် (၁)ရက်နေ့အထိ စည်ကားသိုက်မြိုက်စွာ ကျင်းပလေ့ရှိသည်။ ရှမ်းပြည်နယ် ဘုရားပွဲများအနက် အကြီးကျယ်ဆုံး အစည်ကားဆုံး ဖြစ်၍ မြန်မာနိုင်ငံအရပ်ရပ်၌ ဘော်ကြိုဘုရားပွဲတော်သည် လူသိများပြား ထင်ရှားလှသည်။`,
                },
                {
                    images : [
                            require('@/assets/images/destination/shannorth/Hsipaw_Haw/1.jpg'),
                            require('@/assets/images/destination/shannorth/Hsipaw_Haw/2.jpg'),
                            require('@/assets/images/destination/shannorth/Hsipaw_Haw/3.jpg'),
                            require('@/assets/images/destination/shannorth/Hsipaw_Haw/2.jpg'),
                        ],
                    title: `သီပေါဟော်နန်း`,
                    content: `သီပေါဟော်နန်း သို့မဟုတ် အရှေ့ဟော်သည် သီပေါနယ်ကို အုပ်ချုပ်ခဲ့သော စော်ဘွားများ နေထိုင်ခဲ့ရာ အဆောက်အဦးဖြစ်သည်။ ငါးဧကကျယ်သည့် မြေနေရာပေါ်တွင် ဆောက်လုပ်ထားပြီး အင်္ဂလိပ်ဗိသုကာပုံစံဖြင့် ဆောက်လုပ်ထားသည်။ စော်ဘွား စဝ်ကြာဆိုင်နှင့် မဟာဒေဝီ စဝ်သုစန္ဒီ တို့နေထိုင်ခဲ့သော ဟော်နန်းအဖြစ် သိရှိကြသည်။ ဟော်နန်းဆိုသည်မှာ စော်ဘွားများစိုးစံနေထိုင်ရာ အဆောက်အအုံကို ခေါ်ဆိုခြင်းဖြစ်ပြီး နန်းတော်ငယ်တစ်ခုလည်း ဖြစ်သည်။ <br>
                    သီပေါမြို့တွင် စော်ဘွားသုံးပါးက ဟော်နန်းဆောင်(၃)ဆောင်ကို နှစ်ကာလခြား၍ တည်ဆောက်ခဲ့ကြ သည်။ သီပေါမြို့တည် စော်ဘွားကြီးစဝ်ခွန်ဆိုင် တည်ဆောက်ခဲ့ရာ မူလဟော်နန်းကြီး၊ ယင်း၏သားတော် သီပေါစော်ဘွားကြီးဆာစောချယ် တည်ဆောက်ခဲ့သော စခန်းသာဟော်၊ ၎င်း၏သားတော် သီပေါစော်ဘွားကြီး စောအုံကြာ တည်ဆောက်ခဲ့သော သီပေါဟော်တို့ဖြစ်ကြသည်။ <br>
                    အဆိုပါဟော်နန်း (၃)ခုအနက် မူလသီပေါဟော်နန်းကြီးနှင့် စခန်းသာဟော်နန်းကြီးတို့ ပျက်စီးသွားခဲ့ပြီး သီပေါစော်ဘွားကြီးစောအုံကြာ တည်ဆောက်ခဲ့သော သီပေါမြို့ရှိ ဟော်အဆောက်အအုံကြီးသာလျှင် လက်ရာ မပျက်တည်ရှိပြီး သက်တမ်း(၁၀၀)ကျော်ရှိပြီဖြစ်သည်။ ဟော်အဆောက်အအုံကြီး၌ တည်ဆောက်သူ စော်ဘွားကြီး စောအုံကြာမိသားစုနှင့် သီပေါ၏ နောက်ဆုံးစော်ဘွား စဝ်ကြာဆိုင်၊ မဟာဒေဝီ စဝ်သုစန္ဒီ (ဩစတြီးယားနိုင်ငံသူ)နှင့် သမီးတော် မာယာရီ၊ သမီးတော် ကိန္နရီတို့မိသားစု နောက်ဆုံးနေထိုင်သွားခဲ့ကြသည်။ ၁၉၆၂ ခုနှစ်၊ မတ်လတွင် သီပေါစော်ဘွားစဝ်ကြာဆိုင် ပျောက်ဆုံးသွားပြီးနောက် မဟာဒေဝီ စဝ်သုစန္ဒီနှင့် သမီးတော်နှစ်ပါးတို့သည်လည်း ၁၉၆၄ ခုနှစ်တွင် နိုင်ငံခြားသို့ ထွက်ခွာသွားခဲ့သည်။ <br>
                    ဟော်နန်းစံ စော်ဘွားမရှိတော့သည့် အဆိုပါ   သီပေါဟော်အဆောက်အအုံကြီးကို သီပေါစော်ဘွား၏ အစ်ကိုတော် စဝ်ကြာဇုံ၏ သားကြီး စဝ်ဦးကြာနှင့် ဇနီး ဒေါ်စဝ်စံဖုန်း(မိုင်းရယ်စော်ဘွားကြီး၏ စတုတ္ထသမီးတော်) တို့မိသားစုက ထိန်းသိမ်းစောင့်ရှောက်ခဲ့ကြသည်။ စနစ်တကျထိန်းသိမ်းစောင့်ရှောက်မှုကောင်း၍ ယနေ့ထိ သီပေါဟော်အဆောက်အအုံကြီးမှာ မပျက်မစီး၊ မပျောက်မပျက်ဘဲ တည်ရှိလာနိုင်ခဲ့သည်။ တချိန်သောကာလက ကြည်နူးဖွယ်၊ လွမ်းမောဖွယ်၊ ဆွတ်ပျံ့ဖွယ်ရာများဖြင့် ဝန်းရံဖြစ်တည်ခဲ့ရသော သီပေါဟော်အဆောက်အအုံမှာ ယခုအခါ မြန်မာနှင့်ကမ္ဘာကပါ တကူးတက လာရောက်ကြည့်ရှုလေ့လာစရာဖြစ်ခဲ့သည်။ ပြည်တွင်းပြည်ပ ခရီးသွားဧည့်သည်များကို အဓိကဆွဲဆောင်မှုနှင့် စိတ်ဝင်စားမှုနေရာတစ်ခုဖြစ်သည့် ဤသီပေါဟော်သည် သီပေါမြို့၏ ဂုဏ်သိက္ခာနှင့်အလှကျက်သရေတို့ကို ဖော်ကျူးပြသနေပါသည်။ <br>
                    ဟော်နန်းသို့ သွားရောက်လေ့လာမယ်ဆိုလျှင် ညနေ(၃)နာရီမှ (၅)နာရီထိ လေ့လာဖို့ခွင့်ပြုထားပြီး တနင်္လာနေ့သည် ဟော်နန်းပိတ်ပါသည်။`,
                },
                {
                    images : [
                            require('@/assets/images/destination/shannorth/Little_Bagan/1.jpg'),
                            require('@/assets/images/destination/shannorth/Little_Bagan/2.jpg'),
                            require('@/assets/images/destination/shannorth/Little_Bagan/1.jpg'),
                            require('@/assets/images/destination/shannorth/Little_Bagan/2.jpg'),
                        ],
                    title: `ပုဂံငယ် (Little Bagan)`,
                    content: `ပုဂံငယ်(Little Bagan)ကို သီပေါမြို့သို့ရောက်သူတိုင်း မဖြစ်မနေသွားရောက်ကြသော နေရာတစ်ခု ဖြစ်သည်။ ရှေးဟောင်းစေတီအစုအဝိုင်းလေးဖြစ်ပြီး နိုင်ငံခြားသားခရီးသွားများကြောင့် Little Bagan ဟု အမည်တွင်ခဲ့ပြီး သီပေါမြို့ရဲ့ တတိယမြောက် မြို့တည်နေရာဟု သိရပါသည်။ စေတီတွေထဲမှ တစ်ဆူသည် မြို့တည်စေတီထဲတွင်ပါသည်။ ဘုရားများကို အသစ်ပြုပြင်ခြင်းမပြုပဲ ရှေးဟောင်းလက်ရာအတိုင်း ထိန်းသိမ်း ထားသည်။ Little Bagan သည် မဟာနန္ဒာကန် ကျောင်းတိုက်ဘေးတွင် တည်ရှိပါသည်။`,
                },
                {
                    images : [
                            require('@/assets/images/destination/shannorth/Hnee/1.jpg'),
                            require('@/assets/images/destination/shannorth/Hnee/2.jpg'),
                            require('@/assets/images/destination/shannorth/Hnee/3.jpg'),
                            require('@/assets/images/destination/shannorth/Hnee/4.jpg'),
                        ],
                    title: `မဟာနန္ဒာကန်သာ ဘုန်းကြီးကျောင်းနှင့် ရှေးဟောင်းနှီးဘုရား`,
                    content: `နှစ်ပေါင်း(၁၅၀)ကျော်သက်တမ်းရှိ ရှေးဟောင်းနှီးဘုရားကို သီပေါမြို့၊ ဇာတ်စုရပ်၊ မဟာနန္ဒာကန်သာ ဘုန်းကြီးကျောင်းတွင် ဖူးမြှော်နိုင်ပါသည်။ ဘုရားဖူးမျှော်ရင်း ကျွန်းတိုင်ပေါင်း(၁၄၇)တိုင်ကို သံချောင်းအသုံးမပြုပဲ ကျွန်းသားစို့များနဲ့ ဆောက်လုပ်ထားသည့် မဟာနန္ဒာကန်သာ ဘုန်းကြီးကျောင်း တည်ဆောက်ပုံလက်ရာကို လေ့လာလို့ရပါသည်။ ကျောင်းကြီးနှင့် နှီးဘုရား၏ ကုသိုလ်ရှင်မှာ သီပေါစော်ဘွားကြီး စဝ်ကြာခိုင်ရဲ့ ဝန်ကြီး ဦးခွန်းခွေးပုမှ လှူဒါန်းထားတာဖြစ်ပြီး ကျောင်းတိုက်သက်တမ်းသည် သီပေါမြို့တည်နှစ်ထက် နှစ်(၄၀)စော ပါသည်။ ကျောင်းတိုက်ထဲက နှီးဘုရားကလည်း ၁၈၆၈ ခုနှစ်ကတည်းက လှူဒါန်းခဲ့တာဖြစ်ပြီး အရမ်းသပ္ပါယ် ပါသည်။`,
                },
                {
                    images : [
                            require('@/assets/images/destination/shannorth/Si_Oh_Gyi/1.jpg'),
                            require('@/assets/images/destination/shannorth/Si_Oh_Gyi/1.jpg'),
                            require('@/assets/images/destination/shannorth/Si_Oh_Gyi/1.jpg'),
                            require('@/assets/images/destination/shannorth/Si_Oh_Gyi/1.jpg'),
                        ],
                    title: `သီပေါမြို့တည် ဆီအိုးကြီးလေးလုံး`,
                    content: `ရှမ်းရာဇဝင်ကျမ်းများအလိုအရ သီပေါစော်ဘွားဆက်သည် ပထမဆုံးစော်ဘွား ခွန်ခမ်းဇော်(သာသနာနှစ် ၄၈၅-၅၂၀)မှ နောက်ဆုံးစော်ဘွားကြီး စဝ်ကြာဆိုင်အထိ (၉၁)ဆက်ရှိခဲ့သည်ဟုဆိုသည်။ အုန်းပေါင်စော်ဘွား ဖြစ်လာခဲ့သည့် (၈၅)ဆက်မြောက် စော်ဘွားကြီး စဝ်ကြာခိုင် (ခေါ်) စဝ်ခွန်ဆိုင်သည် ခရစ်နှစ် ၁၈၈၈ ခုနှစ်တွင် သီပေါမြို့ကို တည်ခဲ့စဉ်က မြို့သူမြို့သား၊ နယ်သူနယ်သားများ အေးချမ်းသာယာ၀ပြောစေရန် ရည်ရွယ်လျက် မြို့၏ထောင့်လေးထောင့်တွင် လောကီအစီအမံများပြုလုပ်ပြီး ဆီအိုးကြီးလေးလုံးကို မြှုပ်နှံခဲ့သည်။ <br>
                    ဆီအိုးထဲမှ ဆီများမခန်းခြောက်သရွေ့ မြို့ရွာစည်ပင်၀ပြောအေးချမ်းစေရန် ရည်ရွယ်ခဲ့သည်။ ဆီအိုးကြီး များသည် ပိဿာ(၅၀)ဝင်အိုးများဖြစ်ကြပြီး သုံးပေပတ်လည်၊ သုံးပေအမြင့် လေးထောင့်ပုံ အုတ်ရိုးပေါ်တွင် မြှုပ်နှံခဲ့သည်။ သီပေါမြို့သည် အုန်းပေါင်လေးမြို့ (သီပေါ၊ မိုင်းလုံ၊ မိုင်းတုံ၊ သုံးဆယ်) ရုံးစိုက်ရာ မြို့အုန်းပေါင်ဟု ထင်ရှားခဲ့ပြီး မြို့တည်ဆောက်ခဲ့ပုံအနေအထားသည် ထီးဟန်နန်းဟန်ဆန်ခဲ့သည်။ သီပေါမြို့တည်နေရာသည် မြေမျက်နှာပြင်ညီညာပြီး လူနေရပ်ကွက်များကို အကွက်ကျကျဖော်ထားခြင်း၊ လမ်းများကို ဖြောင့်တန်းစွာ ဖောက်လုပ်ထားခြင်းတို့သည် မန္တလေးမြို့နှင့် တူညီသည်။ <br>
                    ဆီအိုးကြီးများမြှုပ်နှံခဲ့သည့် သမိုင်းကြောင်း အထောက်အထားများကို ပြည့်စုံစွာတွေ့ရှိရသော်လည်း မည်သည့်နေရာတွင် မြှုပ်နှံခဲ့ကြောင်း ကာလရှည်ကြာစွာကပင် မည်သူမျှတိတိကျကျ မသိရှိခဲ့ချေ။ သို့သော် သီပေါ မြို့မှ နိုင်ငံတော်ဩဝါဒါစရိယဆရာတော် ဘဒ္ဒန္တလာဘဝံသ၏ မိန့်ကြားချက်အရ ၁၉၉၂ ခုနှစ်တွင် မြို့တည် ဆီအိုးကြီးများကို ရှာဖွေတွေ့ရှိခဲ့သည်။ ဆီအိုးကြီးလေးလုံးအနက် မြန်မာရပ်ဧည့်ရိပ်သာဝင်းအတွင်းမှ ဆီအိုးတွင် ဆီများအပြည့်ကျန်ရှိနေကာ အကောက်ခွန်ဦးစီးဌာနဝင်းမှ တွေ့ရှိသည့် ဆီအိုးတွင် ဆီများသည် ခြောက်လက်မခန့် လျော့နည်းနေခဲ့သည်။ အုတ်ကျင်းရပ်မှ ဆီအိုးတွင်မူ ဆီများလုံး၀မကျန်ရှိတော့ဘဲ ဆီချိုးခဲများကိုသာ တွေ့ရှိခဲ့ ရသည်။ ရွှေညောင်ပင်မှ ဆီအိုးမှာမူ မြှုပ်နှံခဲ့သည့်နေရာတွင် မရှိတော့သဖြင့် ဒုဋ္ဌဝတီမြစ်ရေတိုက်စားမှုကြောင့် ပျက်စီးသွားခဲ့ဟန်ရှိကြောင်း ယူဆခဲ့ကြသည်။ <br>
                    ယင်းဆီအိုးများကို နှမ်းဆီစစ်စစ်များ အပြည့်ဖြည့်သွင်းကာ ၁၉၉၂ ခုနှစ်၊ ဇူလိုင်လ (၁၂)ရက်၊ နံနက်(၇) နာရီတွင် မူလနေရာအသီးသီး၌ ပြန်လည်မြှုပ်နှံခဲ့သည်။ ရွှေညောင်ပင်အရပ်တွင် မူလဆီအိုးကို မတွေ့ရှိရတော့ သဖြင့် အိုးအသစ်တွင် ဆီအပြည့်ဖြည့်ကာ မြှုပ်နှံခဲ့သည်။ <br>
                    လွန်ခဲ့သောနှစ်(၁၃၀)ကျော်က တည်ခဲ့သည့် အုန်းပေါင် သီပေါမြို့ရှိ မြို့တည်ဆီအိုးကြီးလေးလုံးသည် သီပေါမြို့၏ သမိုင်းမှတ်တမ်း အထောက်အထားတစ်ရပ်အဖြစ် ထင်ရှားစွာကျန်ရှိခဲ့ပေသည်။`,
                },
                {
                    images : [
                            require('@/assets/images/destination/shannorth/Sunset_Hill/1.jpg'),
                            require('@/assets/images/destination/shannorth/Sunset_Hill/1.jpg'),
                            require('@/assets/images/destination/shannorth/Sunset_Hill/1.jpg'),
                            require('@/assets/images/destination/shannorth/Sunset_Hill/1.jpg'),
                        ],
                    title: `သိမ်တောင် (Sunset Hill)`,
                    content: `သီပေါမြို့ရှိ နေဝင်ရှုခင်းကြည့်ရန် အကောင်းဆုံးတောင်ဖြစ်သည့် သိမ်တောင်သည် ဘုန်းတော်ကြီး ကျောင်းများလည်းရှိသော သာသနိကနယ်မြေတစ်ခုဟု ဆိုနိုင်ပါသည်။ သိမ်တောင်အနီးတွင်လည်း သုံးဆူတောင် စေတီ၊ ငါးဆူတောင် စေတီ၊ ကိုးဆူတောင်စေတီ စသော စေတီများသို့လည်း သွားရောက်ဖူးမြှော်နိုင်ပါသည်။ တောင်ပေါ်မှကြည့်လျှင် ဒုဌဝတီမြစ်နှင့် ရှမ်းတောင်တန်းအလှ ပေါင်းစပ်ကာ သီပေါမြို့၏အလှကို နေဝင်ချိန် Sunset ကြည့်ရှုရန် အကောင်းဆုံးဖြစ်ပါသည်။ ခရီးသွားအများစုမှာ သိမ်တောင်သို့ Sunset ကြည့်ရှုရန် အဓိက လာရောက်လေ့ရှိကြသည်။`,
                },
                {
                    images : [
                            require('@/assets/images/destination/shannorth/Mahar_Myat_Muni/1.jpg'),
                            require('@/assets/images/destination/shannorth/Mahar_Myat_Muni/2.jpg'),
                            require('@/assets/images/destination/shannorth/Mahar_Myat_Muni/1.jpg'),
                            require('@/assets/images/destination/shannorth/Mahar_Myat_Muni/2.jpg'),
                        ],
                    title: `မဟာမြတ်မုနိဘုရားကြီး`,
                    content: `ရှမ်းပြည်နယ်မြောက်ပိုင်း သီပေါမြို့နယ်၏ သာသနာ့ကျက်သရေဆောင် မဟာမြတ်မုနိဘုရားကြီးကို သီပေါမြို့တောင်ဘက်ကုန်းမြင့် သာသနဝတ္တကမြေတော်တွင် တည်ထားပါသည်။ ဧရိယာအကျယ်အဝန်း ၂၄.၄၂၉ ဧကရှိပါသည်။ ဘုရားဒါယကာ ဒါယိကာများမှာ သီပေါစော်ဘွားကြီး စဝ်ကြာခိုင် (ခ) စဝ်ခွန်ဆိုင်နှင့် ခင်သူဇာ (ခ) အရီးတော်ထိပ်ခေါင်တင် တို့ဖြစ်သည်။ မန္တလေးမြို့ မဟာမြတ်မုနိဘုရားကြီးနှင့် နောင်တော် ညီတော်အဖြစ်  အနီးစပ်ဆုံးပုံစံတူ မြေတိုင်းအမတ်ကြီး ဦးကြိုင်ကို ပန်းတဉ်းဝန်ခန့်ကာ ဂန္ဓကုဋိတိုက်တော်၊ ပြဿဒ် စုလစ်မွန်းချွန် အာရုံခံတန်ဆောင်းတို့ဖြင့် ၁၂၅၆ ခု၊ ဝါဆိုလပြည့်ကျော် (၅)ရက်နေ့တွင် ဆောက်လုပ်ပြီးစီးခဲ့ပါသည်။ ကြေးချိန် ၄၇၇၉ ပိဿာ - ၁၅ကျပ်သား၊ ငွေချိန် - ၂၆ ပိဿာ၊ ရွှေချိန် - ၂ ပိဿာ ၂၅ ကျပ် ၂ ပဲ၊ စရိတ်တော် (ငွေဒင်္ဂါး) ၉၅၅၈ ကျပ် ၆ ပဲတို့ဖြင့် သွန်းလောင်းပူဇော်ခဲ့ပါသည်။ ၁၂၆၄ ခုနှစ်တွင် မဟာမြတ်မုနိမကိုဋ်တော်ကို တင်လှူခဲ့ပါသည်။   မဟာရာမ်တံတိုင်းနှင့် ရေကန်တော်တို့ကိုလည်း အများကောင်းမှုဖြင့် ပူဇော်ခဲ့ပါသည်။ ထို့ပြင် ပေ ၄၀ ပတ်လည် အမြင့် ၂၅ ပေ ထု ၅ ပေရှိသော ဂန္ဓကုဋိတိုက်တော်မြတ်ကို အတွင်းအပြင် ရွှေပိန်းချ ပူဇော်ခဲ့ပါသည်။ `,
                },
                {
                    images : [
                            require('@/assets/images/destination/shannorth/Chaung_Zone/1.jpg'),
                            require('@/assets/images/destination/shannorth/Chaung_Zone/1.jpg'),
                            require('@/assets/images/destination/shannorth/Chaung_Zone/1.jpg'),
                            require('@/assets/images/destination/shannorth/Chaung_Zone/1.jpg'),
                        ],
                    title: `ချောင်းဆုံ`,
                    content: `ရှမ်းပြည်နယ်မြောက်ပိုင်း၊ သီပေါမြို့ရှိ ဒုဌဝတီမြစ်ချောင်းဆုံသည် နမ္မတူချောင်းနဲ့ နမ္မချောင်း ပေါင်းဆုံပြီး ဒုဌဝတီမြစ် စတင်ဖြစ်ပေါ်ရာ နေရာဖြစ်သည်။ ချောင်းဆုံနေရာတွင် ရေတံခွန်ငယ်လေးများ အထပ်ထပ်ဖြစ်နေပြီး မြစ်ကြောင်းတစ်လျှောက် မြင်တွေ့ရသည့် ရှုမျှော်ခင်းများကလည်း သာယာလှပလွန်းပါသည်။ အထူးသဖြင့် လူငယ်များ၊ Activity လုပ်လိုသူများအနေဖြင့် ဒုဌဝတီမြစ်တစ်လျှောက် Boat Trip သွားနိုင်ပါသည်။  `,
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
