import{R as X,c as Y,g as Z}from"./DeezerCall.a701a8cf.js";import{s as U,y as S,A,B as F,C as D}from"./scheduler.dc0f26dd.js";import{S as T,i as nn,b as tn,d as rn,m as en,a as x,t as L,e as un}from"./index.b6753c13.js";import{A as on}from"./ProgressBar.svelte_svelte_type_style_lang.56fb06c2.js";const fn=X.extend("pagination-utils");function an(f){const e=f.searchParams.get("index");if(e)try{return parseInt(e)}catch{fn("unable to parse page index %s from url %s",e,f);return}}function wn(f,e){return f.startIndex=e,f.endIndex=e+f.data.length,f}async function sn(f){const e=await Y({apiPath:f.apiPath,searchParams:{limit:f.limit,index:f.index}});if(delete e.prev,e.next){const c=an(new URL(e.next));if(c){delete e.next;const t=await sn({...f,index:c});e.data=[...e.data,...t.data]}}return e}var K={exports:{}};(function(f){(function(){var e=t(function(n){return n===1?"χρόνος":"χρόνια"},function(n){return n===1?"μήνας":"μήνες"},function(n){return n===1?"εβδομάδα":"εβδομάδες"},function(n){return n===1?"μέρα":"μέρες"},function(n){return n===1?"ώρα":"ώρες"},function(n){return n===1?"λεπτό":"λεπτά"},function(n){return n===1?"δευτερόλεπτο":"δευτερόλεπτα"},function(n){return(n===1?"χιλιοστό":"χιλιοστά")+" του δευτερολέπτου"},","),c={af:t("jaar",function(n){return"maand"+(n===1?"":"e")},function(n){return n===1?"week":"weke"},function(n){return n===1?"dag":"dae"},function(n){return n===1?"uur":"ure"},function(n){return n===1?"minuut":"minute"},function(n){return"sekonde"+(n===1?"":"s")},function(n){return"millisekonde"+(n===1?"":"s")},","),ar:R(t(function(n){return["سنة","سنتان","سنوات"][r(n)]},function(n){return["شهر","شهران","أشهر"][r(n)]},function(n){return["أسبوع","أسبوعين","أسابيع"][r(n)]},function(n){return["يوم","يومين","أيام"][r(n)]},function(n){return["ساعة","ساعتين","ساعات"][r(n)]},function(n){return["دقيقة","دقيقتان","دقائق"][r(n)]},function(n){return["ثانية","ثانيتان","ثواني"][r(n)]},function(n){return["جزء من الثانية","جزآن من الثانية","أجزاء من الثانية"][r(n)]},","),{delimiter:" ﻭ ",_digitReplacements:["۰","١","٢","٣","٤","٥","٦","٧","٨","٩"]}),bg:t(function(n){return["години","година","години"][a(n)]},function(n){return["месеца","месец","месеца"][a(n)]},function(n){return["седмици","седмица","седмици"][a(n)]},function(n){return["дни","ден","дни"][a(n)]},function(n){return["часа","час","часа"][a(n)]},function(n){return["минути","минута","минути"][a(n)]},function(n){return["секунди","секунда","секунди"][a(n)]},function(n){return["милисекунди","милисекунда","милисекунди"][a(n)]},","),bn:t("বছর","মাস","সপ্তাহ","দিন","ঘন্টা","মিনিট","সেকেন্ড","মিলিসেকেন্ড"),ca:t(function(n){return"any"+(n===1?"":"s")},function(n){return"mes"+(n===1?"":"os")},function(n){return"setman"+(n===1?"a":"es")},function(n){return"di"+(n===1?"a":"es")},function(n){return"hor"+(n===1?"a":"es")},function(n){return"minut"+(n===1?"":"s")},function(n){return"segon"+(n===1?"":"s")},function(n){return"milisegon"+(n===1?"":"s")},","),cs:t(function(n){return["rok","roku","roky","let"][k(n)]},function(n){return["měsíc","měsíce","měsíce","měsíců"][k(n)]},function(n){return["týden","týdne","týdny","týdnů"][k(n)]},function(n){return["den","dne","dny","dní"][k(n)]},function(n){return["hodina","hodiny","hodiny","hodin"][k(n)]},function(n){return["minuta","minuty","minuty","minut"][k(n)]},function(n){return["sekunda","sekundy","sekundy","sekund"][k(n)]},function(n){return["milisekunda","milisekundy","milisekundy","milisekund"][k(n)]},","),cy:t("flwyddyn","mis","wythnos","diwrnod","awr","munud","eiliad","milieiliad"),da:t("år",function(n){return"måned"+(n===1?"":"er")},function(n){return"uge"+(n===1?"":"r")},function(n){return"dag"+(n===1?"":"e")},function(n){return"time"+(n===1?"":"r")},function(n){return"minut"+(n===1?"":"ter")},function(n){return"sekund"+(n===1?"":"er")},function(n){return"millisekund"+(n===1?"":"er")},","),de:t(function(n){return"Jahr"+(n===1?"":"e")},function(n){return"Monat"+(n===1?"":"e")},function(n){return"Woche"+(n===1?"":"n")},function(n){return"Tag"+(n===1?"":"e")},function(n){return"Stunde"+(n===1?"":"n")},function(n){return"Minute"+(n===1?"":"n")},function(n){return"Sekunde"+(n===1?"":"n")},function(n){return"Millisekunde"+(n===1?"":"n")},","),el:e,en:t(function(n){return"year"+(n===1?"":"s")},function(n){return"month"+(n===1?"":"s")},function(n){return"week"+(n===1?"":"s")},function(n){return"day"+(n===1?"":"s")},function(n){return"hour"+(n===1?"":"s")},function(n){return"minute"+(n===1?"":"s")},function(n){return"second"+(n===1?"":"s")},function(n){return"millisecond"+(n===1?"":"s")}),eo:t(function(n){return"jaro"+(n===1?"":"j")},function(n){return"monato"+(n===1?"":"j")},function(n){return"semajno"+(n===1?"":"j")},function(n){return"tago"+(n===1?"":"j")},function(n){return"horo"+(n===1?"":"j")},function(n){return"minuto"+(n===1?"":"j")},function(n){return"sekundo"+(n===1?"":"j")},function(n){return"milisekundo"+(n===1?"":"j")},","),es:t(function(n){return"año"+(n===1?"":"s")},function(n){return"mes"+(n===1?"":"es")},function(n){return"semana"+(n===1?"":"s")},function(n){return"día"+(n===1?"":"s")},function(n){return"hora"+(n===1?"":"s")},function(n){return"minuto"+(n===1?"":"s")},function(n){return"segundo"+(n===1?"":"s")},function(n){return"milisegundo"+(n===1?"":"s")},","),et:t(function(n){return"aasta"+(n===1?"":"t")},function(n){return"kuu"+(n===1?"":"d")},function(n){return"nädal"+(n===1?"":"at")},function(n){return"päev"+(n===1?"":"a")},function(n){return"tund"+(n===1?"":"i")},function(n){return"minut"+(n===1?"":"it")},function(n){return"sekund"+(n===1?"":"it")},function(n){return"millisekund"+(n===1?"":"it")},","),eu:t("urte","hilabete","aste","egun","ordu","minutu","segundo","milisegundo",","),fa:t("سال","ماه","هفته","روز","ساعت","دقیقه","ثانیه","میلی ثانیه"),fi:t(function(n){return n===1?"vuosi":"vuotta"},function(n){return n===1?"kuukausi":"kuukautta"},function(n){return"viikko"+(n===1?"":"a")},function(n){return"päivä"+(n===1?"":"ä")},function(n){return"tunti"+(n===1?"":"a")},function(n){return"minuutti"+(n===1?"":"a")},function(n){return"sekunti"+(n===1?"":"a")},function(n){return"millisekunti"+(n===1?"":"a")},","),fo:t("ár",function(n){return n===1?"mánaður":"mánaðir"},function(n){return n===1?"vika":"vikur"},function(n){return n===1?"dagur":"dagar"},function(n){return n===1?"tími":"tímar"},function(n){return n===1?"minuttur":"minuttir"},"sekund","millisekund",","),fr:t(function(n){return"an"+(n>=2?"s":"")},"mois",function(n){return"semaine"+(n>=2?"s":"")},function(n){return"jour"+(n>=2?"s":"")},function(n){return"heure"+(n>=2?"s":"")},function(n){return"minute"+(n>=2?"s":"")},function(n){return"seconde"+(n>=2?"s":"")},function(n){return"milliseconde"+(n>=2?"s":"")},","),gr:e,he:t(function(n){return n===1?"שנה":"שנים"},function(n){return n===1?"חודש":"חודשים"},function(n){return n===1?"שבוע":"שבועות"},function(n){return n===1?"יום":"ימים"},function(n){return n===1?"שעה":"שעות"},function(n){return n===1?"דקה":"דקות"},function(n){return n===1?"שניה":"שניות"},function(n){return n===1?"מילישנייה":"מילישניות"}),hr:t(function(n){return n%10===2||n%10===3||n%10===4?"godine":"godina"},function(n){return n===1?"mjesec":n===2||n===3||n===4?"mjeseca":"mjeseci"},function(n){return n%10===1&&n!==11?"tjedan":"tjedna"},function(n){return n===1?"dan":"dana"},function(n){return n===1?"sat":n===2||n===3||n===4?"sata":"sati"},function(n){var u=n%10;return(u===2||u===3||u===4)&&(n<10||n>14)?"minute":"minuta"},function(n){var u=n%10;return u===5||Math.floor(n)===n&&n>=10&&n<=19?"sekundi":u===1?"sekunda":u===2||u===3||u===4?"sekunde":"sekundi"},function(n){return n===1?"milisekunda":n%10===2||n%10===3||n%10===4?"milisekunde":"milisekundi"},","),hi:t("साल",function(n){return n===1?"महीना":"महीने"},function(n){return n===1?"हफ़्ता":"हफ्ते"},"दिन",function(n){return n===1?"घंटा":"घंटे"},"मिनट","सेकंड","मिलीसेकंड"),hu:t("év","hónap","hét","nap","óra","perc","másodperc","ezredmásodperc",","),id:t("tahun","bulan","minggu","hari","jam","menit","detik","milidetik"),is:t("ár",function(n){return"mánuð"+(n===1?"ur":"ir")},function(n){return"vik"+(n===1?"a":"ur")},function(n){return"dag"+(n===1?"ur":"ar")},function(n){return"klukkutím"+(n===1?"i":"ar")},function(n){return"mínút"+(n===1?"a":"ur")},function(n){return"sekúnd"+(n===1?"a":"ur")},function(n){return"millisekúnd"+(n===1?"a":"ur")}),it:t(function(n){return"ann"+(n===1?"o":"i")},function(n){return"mes"+(n===1?"e":"i")},function(n){return"settiman"+(n===1?"a":"e")},function(n){return"giorn"+(n===1?"o":"i")},function(n){return"or"+(n===1?"a":"e")},function(n){return"minut"+(n===1?"o":"i")},function(n){return"second"+(n===1?"o":"i")},function(n){return"millisecond"+(n===1?"o":"i")},","),ja:t("年","ヶ月","週","日","時間","分","秒","ミリ秒"),km:t("ឆ្នាំ","ខែ","សប្តាហ៍","ថ្ងៃ","ម៉ោង","នាទី","វិនាទី","មិល្លីវិនាទី"),kn:t(function(n){return n===1?"ವರ್ಷ":"ವರ್ಷಗಳು"},function(n){return n===1?"ತಿಂಗಳು":"ತಿಂಗಳುಗಳು"},function(n){return n===1?"ವಾರ":"ವಾರಗಳು"},function(n){return n===1?"ದಿನ":"ದಿನಗಳು"},function(n){return n===1?"ಗಂಟೆ":"ಗಂಟೆಗಳು"},function(n){return n===1?"ನಿಮಿಷ":"ನಿಮಿಷಗಳು"},function(n){return n===1?"ಸೆಕೆಂಡ್":"ಸೆಕೆಂಡುಗಳು"},function(n){return n===1?"ಮಿಲಿಸೆಕೆಂಡ್":"ಮಿಲಿಸೆಕೆಂಡುಗಳು"}),ko:t("년","개월","주일","일","시간","분","초","밀리 초"),ku:t("sal","meh","hefte","roj","seet","deqe","saniye","mîlîçirk",","),lo:t("ປີ","ເດືອນ","ອາທິດ","ມື້","ຊົ່ວໂມງ","ນາທີ","ວິນາທີ","ມິນລິວິນາທີ",","),lt:t(function(n){return n%10===0||n%100>=10&&n%100<=20?"metų":"metai"},function(n){return["mėnuo","mėnesiai","mėnesių"][_(n)]},function(n){return["savaitė","savaitės","savaičių"][_(n)]},function(n){return["diena","dienos","dienų"][_(n)]},function(n){return["valanda","valandos","valandų"][_(n)]},function(n){return["minutė","minutės","minučių"][_(n)]},function(n){return["sekundė","sekundės","sekundžių"][_(n)]},function(n){return["milisekundė","milisekundės","milisekundžių"][_(n)]},","),lv:t(function(n){return p(n)?"gads":"gadi"},function(n){return p(n)?"mēnesis":"mēneši"},function(n){return p(n)?"nedēļa":"nedēļas"},function(n){return p(n)?"diena":"dienas"},function(n){return p(n)?"stunda":"stundas"},function(n){return p(n)?"minūte":"minūtes"},function(n){return p(n)?"sekunde":"sekundes"},function(n){return p(n)?"milisekunde":"milisekundes"},","),mk:t(function(n){return n===1?"година":"години"},function(n){return n===1?"месец":"месеци"},function(n){return n===1?"недела":"недели"},function(n){return n===1?"ден":"дена"},function(n){return n===1?"час":"часа"},function(n){return n===1?"минута":"минути"},function(n){return n===1?"секунда":"секунди"},function(n){return n===1?"милисекунда":"милисекунди"},","),mn:t("жил","сар","долоо хоног","өдөр","цаг","минут","секунд","миллисекунд"),mr:t(function(n){return n===1?"वर्ष":"वर्षे"},function(n){return n===1?"महिना":"महिने"},function(n){return n===1?"आठवडा":"आठवडे"},"दिवस","तास",function(n){return n===1?"मिनिट":"मिनिटे"},"सेकंद","मिलिसेकंद"),ms:t("tahun","bulan","minggu","hari","jam","minit","saat","milisaat"),nl:t("jaar",function(n){return n===1?"maand":"maanden"},function(n){return n===1?"week":"weken"},function(n){return n===1?"dag":"dagen"},"uur",function(n){return n===1?"minuut":"minuten"},function(n){return n===1?"seconde":"seconden"},function(n){return n===1?"milliseconde":"milliseconden"},","),no:t("år",function(n){return"måned"+(n===1?"":"er")},function(n){return"uke"+(n===1?"":"r")},function(n){return"dag"+(n===1?"":"er")},function(n){return"time"+(n===1?"":"r")},function(n){return"minutt"+(n===1?"":"er")},function(n){return"sekund"+(n===1?"":"er")},function(n){return"millisekund"+(n===1?"":"er")},","),pl:t(function(n){return["rok","roku","lata","lat"][s(n)]},function(n){return["miesiąc","miesiąca","miesiące","miesięcy"][s(n)]},function(n){return["tydzień","tygodnia","tygodnie","tygodni"][s(n)]},function(n){return["dzień","dnia","dni","dni"][s(n)]},function(n){return["godzina","godziny","godziny","godzin"][s(n)]},function(n){return["minuta","minuty","minuty","minut"][s(n)]},function(n){return["sekunda","sekundy","sekundy","sekund"][s(n)]},function(n){return["milisekunda","milisekundy","milisekundy","milisekund"][s(n)]},","),pt:t(function(n){return"ano"+(n===1?"":"s")},function(n){return n===1?"mês":"meses"},function(n){return"semana"+(n===1?"":"s")},function(n){return"dia"+(n===1?"":"s")},function(n){return"hora"+(n===1?"":"s")},function(n){return"minuto"+(n===1?"":"s")},function(n){return"segundo"+(n===1?"":"s")},function(n){return"milissegundo"+(n===1?"":"s")},","),ro:t(function(n){return n===1?"an":"ani"},function(n){return n===1?"lună":"luni"},function(n){return n===1?"săptămână":"săptămâni"},function(n){return n===1?"zi":"zile"},function(n){return n===1?"oră":"ore"},function(n){return n===1?"minut":"minute"},function(n){return n===1?"secundă":"secunde"},function(n){return n===1?"milisecundă":"milisecunde"},","),ru:t(function(n){return["лет","год","года"][a(n)]},function(n){return["месяцев","месяц","месяца"][a(n)]},function(n){return["недель","неделя","недели"][a(n)]},function(n){return["дней","день","дня"][a(n)]},function(n){return["часов","час","часа"][a(n)]},function(n){return["минут","минута","минуты"][a(n)]},function(n){return["секунд","секунда","секунды"][a(n)]},function(n){return["миллисекунд","миллисекунда","миллисекунды"][a(n)]},","),sq:t(function(n){return n===1?"vit":"vjet"},"muaj","javë","ditë","orë",function(n){return"minut"+(n===1?"ë":"a")},function(n){return"sekond"+(n===1?"ë":"a")},function(n){return"milisekond"+(n===1?"ë":"a")},","),sr:t(function(n){return["години","година","године"][a(n)]},function(n){return["месеци","месец","месеца"][a(n)]},function(n){return["недељи","недеља","недеље"][a(n)]},function(n){return["дани","дан","дана"][a(n)]},function(n){return["сати","сат","сата"][a(n)]},function(n){return["минута","минут","минута"][a(n)]},function(n){return["секунди","секунда","секунде"][a(n)]},function(n){return["милисекунди","милисекунда","милисекунде"][a(n)]},","),ta:t(function(n){return n===1?"வருடம்":"ஆண்டுகள்"},function(n){return n===1?"மாதம்":"மாதங்கள்"},function(n){return n===1?"வாரம்":"வாரங்கள்"},function(n){return n===1?"நாள்":"நாட்கள்"},function(n){return n===1?"மணி":"மணிநேரம்"},function(n){return"நிமிட"+(n===1?"ம்":"ங்கள்")},function(n){return"வினாடி"+(n===1?"":"கள்")},function(n){return"மில்லி விநாடி"+(n===1?"":"கள்")}),te:t(function(n){return"సంవత్స"+(n===1?"రం":"రాల")},function(n){return"నెల"+(n===1?"":"ల")},function(n){return n===1?"వారం":"వారాలు"},function(n){return"రోజు"+(n===1?"":"లు")},function(n){return"గంట"+(n===1?"":"లు")},function(n){return n===1?"నిమిషం":"నిమిషాలు"},function(n){return n===1?"సెకను":"సెకన్లు"},function(n){return n===1?"మిల్లీసెకన్":"మిల్లీసెకన్లు"}),uk:t(function(n){return["років","рік","роки"][a(n)]},function(n){return["місяців","місяць","місяці"][a(n)]},function(n){return["тижнів","тиждень","тижні"][a(n)]},function(n){return["днів","день","дні"][a(n)]},function(n){return["годин","година","години"][a(n)]},function(n){return["хвилин","хвилина","хвилини"][a(n)]},function(n){return["секунд","секунда","секунди"][a(n)]},function(n){return["мілісекунд","мілісекунда","мілісекунди"][a(n)]},","),ur:t("سال",function(n){return n===1?"مہینہ":"مہینے"},function(n){return n===1?"ہفتہ":"ہفتے"},"دن",function(n){return n===1?"گھنٹہ":"گھنٹے"},"منٹ","سیکنڈ","ملی سیکنڈ"),sk:t(function(n){return["rok","roky","roky","rokov"][k(n)]},function(n){return["mesiac","mesiace","mesiace","mesiacov"][k(n)]},function(n){return["týždeň","týždne","týždne","týždňov"][k(n)]},function(n){return["deň","dni","dni","dní"][k(n)]},function(n){return["hodina","hodiny","hodiny","hodín"][k(n)]},function(n){return["minúta","minúty","minúty","minút"][k(n)]},function(n){return["sekunda","sekundy","sekundy","sekúnd"][k(n)]},function(n){return["milisekunda","milisekundy","milisekundy","milisekúnd"][k(n)]},","),sl:t(function(n){return n%10===1?"leto":n%100===2?"leti":n%100===3||n%100===4||Math.floor(n)!==n&&n%100<=5?"leta":"let"},function(n){return n%10===1?"mesec":n%100===2||Math.floor(n)!==n&&n%100<=5?"meseca":n%10===3||n%10===4?"mesece":"mesecev"},function(n){return n%10===1?"teden":n%10===2||Math.floor(n)!==n&&n%100<=4?"tedna":n%10===3||n%10===4?"tedne":"tednov"},function(n){return n%100===1?"dan":"dni"},function(n){return n%10===1?"ura":n%100===2?"uri":n%10===3||n%10===4||Math.floor(n)!==n?"ure":"ur"},function(n){return n%10===1?"minuta":n%10===2?"minuti":n%10===3||n%10===4||Math.floor(n)!==n&&n%100<=4?"minute":"minut"},function(n){return n%10===1?"sekunda":n%100===2?"sekundi":n%100===3||n%100===4||Math.floor(n)!==n?"sekunde":"sekund"},function(n){return n%10===1?"milisekunda":n%100===2?"milisekundi":n%100===3||n%100===4||Math.floor(n)!==n?"milisekunde":"milisekund"},","),sv:t("år",function(n){return"månad"+(n===1?"":"er")},function(n){return"veck"+(n===1?"a":"or")},function(n){return"dag"+(n===1?"":"ar")},function(n){return"timm"+(n===1?"e":"ar")},function(n){return"minut"+(n===1?"":"er")},function(n){return"sekund"+(n===1?"":"er")},function(n){return"millisekund"+(n===1?"":"er")},","),sw:R(t(function(n){return n===1?"mwaka":"miaka"},function(n){return n===1?"mwezi":"miezi"},"wiki",function(n){return n===1?"siku":"masiku"},function(n){return n===1?"saa":"masaa"},"dakika","sekunde","milisekunde"),{_numberFirst:!0}),tr:t("yıl","ay","hafta","gün","saat","dakika","saniye","milisaniye",","),th:t("ปี","เดือน","สัปดาห์","วัน","ชั่วโมง","นาที","วินาที","มิลลิวินาที"),vi:t("năm","tháng","tuần","ngày","giờ","phút","giây","mili giây",","),zh_CN:t("年","个月","周","天","小时","分钟","秒","毫秒"),zh_TW:t("年","個月","周","天","小時","分鐘","秒","毫秒")};function t(n,u,i,o,m,h,d,g,v){var l={y:n,mo:u,w:i,d:o,h:m,m:h,s:d,ms:g};return typeof v<"u"&&(l.decimal=v),l}function r(n){return n===2?1:n>2&&n<11?2:0}function s(n){return n===1?0:Math.floor(n)!==n?1:n%10>=2&&n%10<=4&&!(n%100>10&&n%100<20)?2:3}function a(n){return Math.floor(n)!==n?2:n%100>=5&&n%100<=20||n%10>=5&&n%10<=9||n%10===0?0:n%10===1?1:n>1?2:0}function k(n){return n===1?0:Math.floor(n)!==n?1:n%10>=2&&n%10<=4&&n%100<10?2:3}function _(n){return n===1||n%10===1&&n%100>20?0:Math.floor(n)!==n||n%10>=2&&n%100>20||n%10>=2&&n%100<10?1:2}function p(n){return n%10===1&&n%100!==11}function R(n){for(var u,i=1;i<arguments.length;i++){u=arguments[i];for(var o in u)y(u,o)&&(n[o]=u[o])}return n}var q=Array.isArray||function(n){return Object.prototype.toString.call(n)==="[object Array]"};function y(n,u){return Object.prototype.hasOwnProperty.call(n,u)}function B(n){var u=[n.language];if(y(n,"fallbacks"))if(q(n.fallbacks)&&n.fallbacks.length)u=u.concat(n.fallbacks);else throw new Error("fallbacks must be an array with at least one element");for(var i=0;i<u.length;i++){var o=u[i];if(y(n.languages,o))return n.languages[o];if(y(c,o))return c[o]}throw new Error("No language found.")}function E(n,u,i){var o=n.unitName,m=n.unitCount,h=i.spacer,d=i.maxDecimalPoints,g;y(i,"decimal")?g=i.decimal:y(u,"decimal")?g=u.decimal:g=".";var v;"digitReplacements"in i?v=i.digitReplacements:"_digitReplacements"in u&&(v=u._digitReplacements);var l,$=d===void 0?m:Math.floor(m*Math.pow(10,d))/Math.pow(10,d),M=$.toString();if(v){l="";for(var w=0;w<M.length;w++){var j=M[w];j==="."?l+=g:l+=v[j]}}else l=M.replace(".",g);var b=u[o],z;return typeof b=="function"?z=b(m):z=b,u._numberFirst?z+h+l:l+h+z}function H(n,u){var i,o,m,h,d=u.units,g=u.unitMeasures,v="largest"in u?u.largest:1/0;if(!d.length)return[];var l={};for(h=n,o=0;o<d.length;o++){i=d[o];var $=g[i],M=o===d.length-1;m=M?h/$:Math.floor(h/$),l[i]=m,h-=m*$}if(u.round){var w=v;for(o=0;o<d.length;o++)if(i=d[o],m=l[i],m!==0&&(w--,w===0)){for(var j=o+1;j<d.length;j++){var b=d[j],z=l[b];l[i]+=z*g[b]/g[i],l[b]=0}break}for(o=d.length-1;o>=0;o--)if(i=d[o],m=l[i],m!==0){var O=Math.round(m);if(l[i]=O,o===0)break;var I=d[o-1],V=g[I],N=Math.floor(O*g[i]/V);if(N)l[I]+=N,l[i]=0;else break}}var C=[];for(o=0;o<d.length&&C.length<v;o++)i=d[o],m=l[i],m&&C.push({unitName:i,unitCount:m});return C}function Q(n,u){var i=B(u);if(!n.length){var o=u.units,m=o[o.length-1];return E({unitName:m,unitCount:0},i,u)}var h=u.conjunction,d=u.serialComma,g;y(u,"delimiter")?g=u.delimiter:y(i,"delimiter")?g=i.delimiter:g=", ";for(var v=[],l=0;l<n.length;l++)v.push(E(n[l],i,u));return!h||n.length===1?v.join(g):n.length===2?v.join(h):v.slice(0,-1).join(g)+(d?",":"")+h+v.slice(-1)}function G(n){var u=function(o,m){o=Math.abs(o);var h=R({},u,m||{}),d=H(o,h);return Q(d,h)};return R(u,{language:"en",spacer:" ",conjunction:"",serialComma:!0,units:["y","mo","w","d","h","m","s"],languages:{},round:!1,unitMeasures:{y:315576e5,mo:26298e5,w:6048e5,d:864e5,h:36e5,m:6e4,s:1e3,ms:1}},n)}var P=G({});P.getSupportedLanguages=function(){var u=[];for(var i in c)y(c,i)&&i!=="gr"&&u.push(i);return u},P.humanizer=G,f.exports?f.exports=P:this.humanizeDuration=P})()})(K);var cn=K.exports;const jn=Z(cn),ln=f=>({}),W=f=>({}),dn=f=>({}),J=f=>({});function mn(f){let e;const c=f[0].default,t=S(c,f,f[1],null);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,s){t&&t.m(r,s),e=!0},p(r,s){t&&t.p&&(!e||s&2)&&A(t,c,r,r[1],e?D(c,r[1],s,null):F(r[1]),null)},i(r){e||(x(t,r),e=!0)},o(r){L(t,r),e=!1},d(r){t&&t.d(r)}}}function gn(f){let e;const c=f[0].sidebarLeft,t=S(c,f,f[1],W);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,s){t&&t.m(r,s),e=!0},p(r,s){t&&t.p&&(!e||s&2)&&A(t,c,r,r[1],e?D(c,r[1],s,ln):F(r[1]),W)},i(r){e||(x(t,r),e=!0)},o(r){L(t,r),e=!1},d(r){t&&t.d(r)}}}function kn(f){let e;const c=f[0].sidebarRight,t=S(c,f,f[1],J);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,s){t&&t.m(r,s),e=!0},p(r,s){t&&t.p&&(!e||s&2)&&A(t,c,r,r[1],e?D(c,r[1],s,dn):F(r[1]),J)},i(r){e||(x(t,r),e=!0)},o(r){L(t,r),e=!1},d(r){t&&t.d(r)}}}function hn(f){let e,c;return e=new on({props:{slotSidebarLeft:"mx-2 h-100vh overflow-scroll w-1/5",slotSidebarRight:"mx-2 h-100vh overflow-scroll w-1/5",slotPageContent:"h-100vh overflow-scroll",$$slots:{sidebarRight:[kn],sidebarLeft:[gn],default:[mn]},$$scope:{ctx:f}}}),{c(){tn(e.$$.fragment)},l(t){rn(e.$$.fragment,t)},m(t,r){en(e,t,r),c=!0},p(t,[r]){const s={};r&2&&(s.$$scope={dirty:r,ctx:t}),e.$set(s)},i(t){c||(x(e.$$.fragment,t),c=!0)},o(t){L(e.$$.fragment,t),c=!1},d(t){un(e,t)}}}function vn(f,e,c){let{$$slots:t={},$$scope:r}=e;return f.$$set=s=>{"$$scope"in s&&c(1,r=s.$$scope)},[t,r]}class zn extends T{constructor(e){super(),nn(this,e,vn,hn,U,{})}}export{zn as P,wn as a,an as e,sn as g,jn as h};
