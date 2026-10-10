const API="https://api.frankfurter.dev/v2";
const RATE_PROXY="https://r.jina.ai/";
const DAB_SOURCE="https://www.dab.gov.af/exchange-rates";
const SARAI_SOURCE="https://sarafi.af/fa/exchange-rates/sarai-shahzada";
const names={USD:"US Dollar",AFN:"Afghan Afghani",EUR:"Euro",GBP:"British Pound",PKR:"Pakistani Rupee",INR:"Indian Rupee",AED:"UAE Dirham",SAR:"Saudi Riyal",TRY:"Turkish Lira",CNY:"Chinese Yuan",JPY:"Japanese Yen",CAD:"Canadian Dollar",AUD:"Australian Dollar",CHF:"Swiss Franc",QAR:"Qatari Riyal",KWD:"Kuwaiti Dinar"};
const flags={USD:"🇺🇸",AFN:"🇦🇫",EUR:"🇪🇺",GBP:"🇬🇧",PKR:"🇵🇰",INR:"🇮🇳",AED:"🇦🇪",SAR:"🇸🇦",TRY:"🇹🇷",CNY:"🇨🇳",JPY:"🇯🇵",CAD:"🇨🇦",AUD:"🇦🇺",CHF:"🇨🇭",QAR:"🇶🇦",KWD:"🇰🇼"};
const fallback=["USD","AFN","EUR","GBP","PKR","INR","AED","SAR","TRY","CNY","JPY","CAD","AUD","CHF","QAR","KWD"];
const T={
ps:{home:"کور",converter:"کنورټر",rates:"نرخونه",charts:"چارټونه",about:"زموږ په اړه",heroBadge:"د افغانستان د اسعارو نرخونه",heroTitle:"نړیوال اسعار په چټکۍ او اسانتیا بدل کړئ",heroText:"د افغانستان بانک او سرای شهزاده نرخونه، د پېر او پلور توپیر په یوه کتنه کې.",start:"اوس یې وکاروئ",todayRate:"د نن ورځې مشهور نرخ",marketHeading:"د ډالر نرخونه",oneUsd:"۱ امریکايي ډالر په افغانیو",dabTitle:"د افغانستان بانک",saraiTitle:"سرای شهزاده",officialSource:"رسمي سرچینه ↗",marketSource:"د بازار سرچینه ↗",saraiOtherRates:"د سرای شهزاده نور مشهور نرخونه",buySellLabel:"پېرودل / پلورل",buy:"پېرودل",sell:"پلورل",loadingRates:"نرخونه لوډېږي…",rateUnavailable:"نرخ نشته",checkedNow:"تازه شوی",marketDisclaimer:"نرخونه د ورځې په اوږدو کې بدلېدای شي؛ د معاملې مخکې یې له صرافۍ سره تایید کړئ.",convertTitle:"ژوندی کرنسي کنورټر",amount:"اندازه",from:"له اسعارو",to:"اسعارو ته",convert:"بدلول",result:"پایله",copy:"کاپي",share:"شریکول",favorite:"خوښ",afnTitle:"افغانۍ ته مشهور نرخونه",refresh:"تازه کول",tableTitle:"د اسعارو جدول",search:"اسعار ولټوئ...",currency:"اسعار",code:"کوډ",oneToAfn:"1 واحد → AFN",chartTitle:"تاریخي نرخونه",infoTitle:"د اسعارو معلومات",infoText:"نړیوال نرخونه د عامه آنلاین سرچینې له لارې راځي. د بانک، صرافۍ او حوالې واقعي نرخونه توپیر لري.",q1:"نرخونه کله تازه کېږي؟",a1:"د سرچینې د خپرېدو او API د تازه معلوماتو له مخې نرخونه بیا اخیستل کېږي.",q2:"آیا په موبایل کې کار کوي؟",a2:"هو، ډیزاین د موبایل، ټابلیټ او کمپیوټر لپاره مناسب دی."},
fa:{home:"خانه",converter:"مبدل",rates:"نرخ‌ها",charts:"نمودارها",about:"درباره ما",heroBadge:"نرخ‌های ارز افغانستان",heroTitle:"ارزهای جهان را سریع و آسان تبدیل کنید",heroText:"نرخ‌های د افغانستان بانک و سرای شهزاده؛ خرید و فروش را یک‌جا ببینید.",start:"شروع کنید",todayRate:"نرخ مشهور امروز",marketHeading:"نرخ دالر",oneUsd:"۱ دالر آمریکا به افغانی",dabTitle:"د افغانستان بانک",saraiTitle:"سرای شهزاده",officialSource:"منبع رسمی ↗",marketSource:"منبع بازار ↗",saraiOtherRates:"نرخ‌های مشهور دیگر سرای شهزاده",buySellLabel:"خرید / فروش",buy:"خرید",sell:"فروش",loadingRates:"در حال دریافت نرخ‌ها…",rateUnavailable:"نرخ موجود نیست",checkedNow:"به‌روزرسانی",marketDisclaimer:"نرخ‌ها در طول روز تغییر می‌کنند؛ پیش از معامله با صرافی تأیید کنید.",convertTitle:"مبدل زنده ارز",amount:"مقدار",from:"از ارز",to:"به ارز",convert:"تبدیل",result:"نتیجه",copy:"کپی",share:"اشتراک",favorite:"علاقه‌مندی",afnTitle:"نرخ‌های مشهور به افغانی",refresh:"تازه‌سازی",tableTitle:"جدول نرخ ارز",search:"جستجوی ارز...",currency:"ارز",code:"کد",oneToAfn:"1 واحد → AFN",chartTitle:"نرخ‌های تاریخی",infoTitle:"معلومات ارز",infoText:"نرخ‌های جهانی از یک منبع عمومی آنلاین دریافت می‌شوند. نرخ واقعی بانک، صرافی یا حواله ممکن است متفاوت باشد.",q1:"نرخ‌ها چه وقت تازه می‌شوند؟",a1:"نرخ‌ها براساس انتشار منبع و تازه‌ترین اطلاعات API دریافت می‌شوند.",q2:"در موبایل کار می‌کند؟",a2:"بلی، طراحی برای موبایل، تبلت و کمپیوتر مناسب است."},
en:{home:"Home",converter:"Converter",rates:"Rates",charts:"Charts",about:"About",heroBadge:"Afghanistan exchange rates",heroTitle:"Convert world currencies quickly and easily",heroText:"Compare Da Afghanistan Bank and Sarai Shahzada buy and sell rates at a glance.",start:"Convert now",todayRate:"Today's popular rate",marketHeading:"US dollar rates",oneUsd:"1 US dollar in Afghanis",dabTitle:"Da Afghanistan Bank",saraiTitle:"Sarai Shahzada",officialSource:"Official source ↗",marketSource:"Market source ↗",saraiOtherRates:"More popular Sarai Shahzada rates",buySellLabel:"Buy / Sell",buy:"Buy",sell:"Sell",loadingRates:"Loading rates…",rateUnavailable:"Rate unavailable",checkedNow:"Updated",marketDisclaimer:"Rates can change during the day. Confirm with an exchange shop before a transaction.",convertTitle:"Live Currency Converter",amount:"Amount",from:"From currency",to:"To currency",convert:"Convert",result:"Result",copy:"Copy",share:"Share",favorite:"Favorite",afnTitle:"Popular rates to AFN",refresh:"Refresh",tableTitle:"Exchange Rate Table",search:"Search currency...",currency:"Currency",code:"Code",oneToAfn:"1 unit → AFN",chartTitle:"Historical Rates",infoTitle:"Currency Information",infoText:"Global rates come from a public online source. Actual bank, cash-market or remittance rates may differ.",q1:"When are rates updated?",a1:"Rates are fetched according to source publication and the latest API data.",q2:"Does it work on mobile?",a2:"Yes. The interface is designed for phones, tablets and computers."}};
let currencies=[...fallback], chart, days=30;
const $=s=>document.querySelector(s);
function setLang(l){localStorage.lang=l;document.documentElement.lang=l;document.documentElement.dir=l==="en"?"ltr":"rtl";document.querySelectorAll("[data-i18n]").forEach(e=>e.textContent=T[l][e.dataset.i18n]||e.textContent);document.querySelectorAll("[data-i18n-placeholder]").forEach(e=>e.placeholder=T[l][e.dataset.i18nPlaceholder]||e.placeholder);const refresh=$("#refreshMarket");if(refresh){refresh.setAttribute("aria-label",T[l].refresh);refresh.title=T[l].refresh}document.querySelectorAll(".sourceState").forEach(el=>{if(el.dataset.state==="loading")el.lastElementChild.textContent=T[l].loadingRates;if(el.dataset.state==="error")el.lastElementChild.textContent=T[l].rateUnavailable;if(el.dataset.state==="ready")el.lastElementChild.textContent=T[l].checkedNow})}
function fill(sel,val){sel.innerHTML=currencies.map(c=>`<option value="${c}" ${c===val?"selected":""}>${flags[c]||"💱"} ${c} – ${names[c]||c}</option>`).join("")}
async function loadCurrencies(){
  try{
    let r=await fetch(API+"/currencies");
    if(!r.ok) throw new Error("Currencies API failed");
    let d=await r.json();
    if(Array.isArray(d)){
      currencies=d.map(x=>(x.iso_code||x.currency_code||x.code||"").toUpperCase()).filter(Boolean);
      d.forEach(x=>{let c=(x.iso_code||x.currency_code||x.code||"").toUpperCase(); if(c) names[c]=x.name||names[c]||c});
    }
  }catch(e){currencies=[...fallback]}
  if(!currencies.includes("AFN"))currencies.push("AFN");
  fill($("#from"),"USD"); fill($("#to"),"AFN"); fill($("#chartFrom"),"USD"); fill($("#chartTo"),"AFN")
}
async function rate(base,to){
  base=base.toLowerCase(); to=to.toLowerCase();
  if(base===to) return 1;
  let r=await fetch(`${API}/rate/${base.toUpperCase()}/${to.toUpperCase()}`,{cache:"no-store"});
  if(!r.ok) throw new Error("Rate API failed: "+r.status);
  let d=await r.json();
  if(typeof d.rate!=="number") throw new Error("Invalid rate");
  return d.rate
}
function setSourceState(prefix,state,label){const el=$("#"+prefix+"State");if(!el)return;el.dataset.state=state;el.lastElementChild.textContent=label;el.classList.toggle("isError",state==="error");el.classList.toggle("isReady",state==="ready")}
function tableRow(text,code){const codeRx=new RegExp("\\b"+code+"\\b","i"),lines=text.split(/\r?\n/).filter(line=>line.includes("|")&&codeRx.test(line));for(const line of lines){const cells=line.split("|").map(x=>x.replace(/<[^>]*>/g," ").replace(/\[[^\]]*\]/g," ").trim()),labelIndex=cells.findIndex(cell=>codeRx.test(cell));if(labelIndex<0||cells.length-labelIndex<3)continue;const values=cells.slice(labelIndex+1).map(c=>{const m=c.replace(/,/g,"").match(/-?\d+(?:\.\d+)?/);return m?Number(m[0]):NaN}).filter(Number.isFinite);if(values.length>=2&&values[0]>0&&values[1]>0)return {buy:values[0],sell:values[1],line}}return null}
async function sourceText(url){const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),20000);try{const response=await fetch(RATE_PROXY+url,{cache:"no-store",signal:controller.signal,headers:{"Accept":"text/plain"}});if(!response.ok)throw new Error("Source unavailable");return await response.text()}finally{clearTimeout(timer)}}
function renderSaraiExtras(text){const codes=["EUR","GBP","AED","SAR","PKR","INR"],lang=localStorage.lang||"ps";const rows=codes.map(code=>({code,row:tableRow(text,code)})).filter(x=>x.row);$("#saraiExtraRates").innerHTML=rows.length?rows.map(({code,row})=>`<div class="extraRate"><div class="extraCurrency"><span>${flags[code]||"💱"}</span><b>${code}${["PKR","INR"].includes(code)?" ×1,000":""}</b></div><div class="extraValues"><span><small>${T[lang].buy}</small><b>${row.buy.toLocaleString(undefined,{maximumFractionDigits:4})}</b></span><span><small>${T[lang].sell}</small><b>${row.sell.toLocaleString(undefined,{maximumFractionDigits:4})}</b></span></div></div>`).join(""):"<span class=\"extraLoading\">—</span>"}
function displayMarket(prefix,row,updated){if(!row)throw new Error("USD row not found");$("#"+prefix+"Buy").textContent=row.buy.toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:4});$("#"+prefix+"Sell").textContent=row.sell.toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:4});$("#"+prefix+"Updated").textContent=updated||new Date().toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"});setSourceState(prefix,"ready",T[localStorage.lang||"ps"].checkedNow)}
async function loadMarketRates(){const lang=localStorage.lang||"ps";["dab","sarai"].forEach(x=>setSourceState(x,"loading",T[lang].loadingRates));const jobs=[(async()=>{try{const text=await sourceText(DAB_SOURCE),row=tableRow(text,"USD");if(row)[row.buy,row.sell]=[row.sell,row.buy];const m=text.match(/Last updated:?\s*([^\n]+)/i);displayMarket("dab",row,m?m[1].trim().replace(/\s{2,}/g," "):"")}catch(e){$("#dabBuy").textContent=$("#dabSell").textContent="—";$("#dabUpdated").textContent="";setSourceState("dab","error",T[localStorage.lang||"ps"].rateUnavailable)}})(),(async()=>{try{const text=await sourceText(SARAI_SOURCE),row=tableRow(text,"USD");renderSaraiExtras(text);const time=row?.line.match(/\b\d{1,2}:\d{2}\s*(?:AM|PM|ق\.ظ\.?|ب\.ظ\.?)?/i);displayMarket("sarai",row,time?time[0]:"")}catch(e){$("#saraiBuy").textContent=$("#saraiSell").textContent="—";$("#saraiUpdated").textContent="";$("#saraiExtraRates").innerHTML="<span class=\"extraLoading\">—</span>";setSourceState("sarai","error",T[localStorage.lang||"ps"].rateUnavailable)}})()];await Promise.all(jobs)}
async function convert(){let a=+$("#amount").value||0,b=$("#from").value,t=$("#to").value;$("#result").textContent="…";try{let x=await rate(b,t);let v=a*x;$("#result").textContent=`${a.toLocaleString()} ${b} = ${v.toLocaleString(undefined,{maximumFractionDigits:4})} ${t}`;$("#updated").textContent=`Updated: ${new Date().toLocaleString()}`;saveRecent(b,t,a,v)}catch(e){$("#result").textContent="Unable to load live rate";}}
function saveRecent(b,t,a,v){let x=JSON.parse(localStorage.recent||"[]");x.unshift({b,t,a,v,time:Date.now()});localStorage.recent=JSON.stringify(x.slice(0,10))}
async function popular(){let arr=["USD","EUR","GBP","PKR","INR","AED","SAR","TRY","CNY"];$("#popular").innerHTML=arr.map(c=>`<div class="mini"><span>${flags[c]||"💱"} ${c} → AFN</span><b id="p${c}">—</b></div>`).join("");for(const c of arr)try{$("#p"+c).textContent=(await rate(c,"AFN")).toFixed(2)+" AFN"}catch(e){};}
async function table(){let rows=[];for(const c of fallback.filter(x=>x!=="AFN")){try{rows.push([c,await rate(c,"AFN")])}catch(e){}}renderRows(rows);window.rateRows=rows}
function renderRows(rows){$("#ratesBody").innerHTML=rows.map(([c,r])=>`<tr><td><span class="flag">${flags[c]||"💱"}</span>${names[c]||c}</td><td><b>${c}</b></td><td>${r.toFixed(4)} AFN</td></tr>`).join("")}
async function draw(){
  let b=$("#chartFrom").value,t=$("#chartTo").value,end=new Date(),
      start=new Date(Date.now()-days*864e5),fmt=d=>d.toISOString().slice(0,10);
  try{
    let url=`${API}/rates?base=${b.toLowerCase()}&quotes=${t.toLowerCase()}&from=${fmt(start)}&to=${fmt(end)}`;
    let r=await fetch(url,{cache:"no-store"});
    if(!r.ok) throw new Error("History API failed");
    let d=await r.json();
    let rows=Array.isArray(d)?d:[];
    let labels=rows.map(x=>x.date);
    let vals=rows.map(x=>Number(x.rate)).filter(Number.isFinite);
    if(!vals.length) throw new Error("No history");
    if(chart)chart.destroy();
    chart=new Chart($("#rateChart"),{type:"line",data:{labels,datasets:[{label:`${b}/${t}`,data:vals,tension:.25,fill:false}]},options:{responsive:true,maintainAspectRatio:true}});
    $("#high").textContent=Math.max(...vals).toFixed(4);
    $("#low").textContent=Math.min(...vals).toFixed(4);
    $("#avg").textContent=(vals.reduce((a,b)=>a+b,0)/vals.length).toFixed(4)
  }catch(e){
    $("#high").textContent=$("#low").textContent=$("#avg").textContent="—";
  }
}
document.addEventListener("DOMContentLoaded",async()=>{let l=localStorage.lang||"ps";$("#lang").value=l;setLang(l);if(localStorage.theme==="dark"){document.body.classList.add("dark");$("#theme").textContent="☀️"}await loadCurrencies();convert();popular();table();draw();loadMarketRates();
$("#convert").onclick=convert;$("#amount").oninput=()=>{clearTimeout(window.ct);window.ct=setTimeout(convert,350)};$("#from").onchange=convert;$("#to").onchange=convert;
$("#swap").onclick=()=>{[$("#from").value,$("#to").value]=[$("#to").value,$("#from").value];convert()};
$("#lang").onchange=e=>setLang(e.target.value);$("#theme").onclick=()=>{document.body.classList.toggle("dark");let d=document.body.classList.contains("dark");localStorage.theme=d?"dark":"light";$("#theme").textContent=d?"☀️":"🌙"};
$("#copy").onclick=()=>navigator.clipboard?.writeText($("#result").textContent);$("#share").onclick=()=>navigator.share?navigator.share({title:document.title,text:$("#result").textContent,url:location.href}):navigator.clipboard?.writeText($("#result").textContent);
$("#fav").onclick=()=>{let p=$("#from").value+"/"+$("#to").value,f=JSON.parse(localStorage.favorites||"[]");if(!f.includes(p))f.push(p);localStorage.favorites=JSON.stringify(f);$("#fav").textContent="★ "+(T[localStorage.lang||"ps"].favorite)};
$("#refreshPopular").onclick=popular;$("#refreshMarket").onclick=loadMarketRates;setInterval(loadMarketRates,10*60*1000);$("#rateSearch").oninput=e=>{let q=e.target.value.toLowerCase();renderRows((window.rateRows||[]).filter(([c])=>c.toLowerCase().includes(q)||(names[c]||"").toLowerCase().includes(q)))};
document.querySelectorAll(".periods button").forEach(b=>b.onclick=()=>{document.querySelectorAll(".periods button").forEach(x=>x.classList.remove("active"));b.classList.add("active");days=+b.dataset.days;draw()});$("#chartFrom").onchange=draw;$("#chartTo").onchange=draw;
$("#menuBtn").onclick=()=>$("#navLinks").classList.toggle("open");if("serviceWorker"in navigator)navigator.serviceWorker.register("sw.js");
});