/* ============================================================
   BharatMitra AI — impact data: benefits tracker + sector
   dashboard + trilingual UI strings (T2, merged into T).
   ALL figures here are ILLUSTRATIVE sample data for the demo
   visualisation — not official government statistics.
   ============================================================ */
const T2 = {
/* ---- nav ---- */
nav_demo:{te:"లైవ్ డెమో",hi:"लाइव डेमो",en:"Live demo"},
nav_vision:{te:"దృష్టి",hi:"विज़न",en:"Vision"},
nav_business:{te:"వ్యాపారాలు",hi:"व्यवसाय",en:"Business"},
nav_benefits:{te:"ప్రయోజనాలు",hi:"लाभ",en:"Benefits"},
nav_progress:{te:"పురోగతి",hi:"प्रगति",en:"Progress"},
nav_directory:{te:"సేవల జాబితా",hi:"सेवा सूची",en:"Directory"},
nav_how:{te:"ఎలా పనిచేస్తుంది",hi:"कैसे काम करता है",en:"How it works"},
nav_arch:{te:"ఆర్కిటెక్చర్",hi:"आर्किटेक्चर",en:"Architecture"},
nav_roadmap:{te:"రోడ్‌మ్యాప్",hi:"रोडमैप",en:"Roadmap"},
nav_vs:{te:"America.gov",hi:"America.gov",en:"America.gov"},
/* ---- demo chip filters ---- */
filter_all:{te:"అన్నీ (25)",hi:"सभी (25)",en:"All (25)"},
filter_citizen:{te:"👤 పౌరులు",hi:"👤 नागरिक",en:"👤 Citizens"},
filter_business:{te:"🏢 వ్యాపారాలు",hi:"🏢 व्यवसाय",en:"🏢 Businesses"},
/* ---- business section ---- */
biz_kicker:{te:"🏢 వ్యాపారాల కోసం",hi:"🏢 व्यवसायों हेतु",en:"🏢 For businesses"},
biz_h:{te:"వ్యాపారం చేయడం — అనుమతుల వేట కాకూడదు",hi:"व्यवसाय करना — अनुमतियों की दौड़ न बने",en:"Doing business shouldn't be a permit chase"},
biz_sub:{te:"కంపెనీ ఏర్పాటు నుంచి ప్రభుత్వ టెండర్ల వరకు — ప్రతి వ్యాపార సేవ ఒకే సంభాషణలో. కింది డెమోలను ప్రయత్నించండి (🏢 ఫిల్టర్ వాడండి).",hi:"कंपनी गठन से सरकारी निविदाओं तक — हर व्यावसायिक सेवा एक ही संवाद में। नीचे डेमो आज़माएँ (🏢 फ़िल्टर उपयोग करें)।",en:"From company formation to government tenders — every business service in one conversation. Try the demos below (use the 🏢 filter)."},
biz_c1t:{te:"🪟 ఒకే విండో క్లియరెన్స్‌లు",hi:"🪟 एकल विंडो क्लीयरेंस",en:"🪟 Single-window clearances"},
biz_c1d:{te:"NSWS ద్వారా అన్ని అనుమతులు — ఏ శాఖ, ఏ ఫారం అనేది భారత్‌మిత్రే చూసుకుంటుంది.",hi:"NSWS से सभी अनुमतियाँ — कौन सा विभाग, कौन सा फॉर्म, भारतमित्र देखेगा।",en:"All approvals via NSWS — BharatMitra figures out which department, which form."},
biz_c2t:{te:"⚡ డీమ్డ్ అనుమతులు",hi:"⚡ डीम्ड स्वीकृति",en:"⚡ Deemed approvals"},
biz_c2d:{te:"గడువులోపు నిర్ణయం రాకపోతే ఆటో-అనుమతి — ఫైళ్లు అలమార్లలో మురగవు.",hi:"समय पर निर्णय न आए तो ऑटो-स्वीकृति — फ़ाइलें अलमारियों में नहीं सड़ेंगी।",en:"Auto-approval if no decision in time — files never rot in cupboards."},
biz_c3t:{te:"🔗 MCA + GSTN + కార్మిక — ఒకే ఫ్లో",hi:"🔗 MCA + GSTN + श्रम — एक ही फ़्लो",en:"🔗 MCA + GSTN + labour — one flow"},
biz_c3d:{te:"కంపెనీ ఏర్పాటుతో PAN, TAN, GSTIN, EPFO, ESIC — విడివిడిగా పరుగులు లేవు.",hi:"कंपनी गठन के साथ PAN, TAN, GSTIN, EPFO, ESIC — अलग-अलग दौड़ नहीं।",en:"PAN, TAN, GSTIN, EPFO, ESIC with incorporation — no running pillar to post."},
biz_c4t:{te:"🏪 GeM — ప్రభుత్వమే కస్టమర్",hi:"🏪 GeM — सरकार ही ग्राहक",en:"🏪 GeM — the government as customer"},
biz_c4d:{te:"చిన్న వ్యాపారాలు ప్రభుత్వ టెండర్లలో బిడ్ వేయడం — సకాలంలో చెల్లింపులు.",hi:"छोटे व्यवसाय सरकारी निविदाओं में बोली लगाएँ — समय पर भुगतान।",en:"Small businesses bidding on government tenders — with on-time payments."},
/* ---- benefits tracker ---- */
ben_kicker:{te:"💰 ప్రయోజనాల ట్రాకర్",hi:"💰 लाभ ट्रैकर",en:"💰 Benefits tracker"},
ben_h:{te:"ప్రతి రూపాయి — ఎవరికి, ఎక్కడ, ఎప్పుడు",hi:"हर रुपया — किसे, कहाँ, कब",en:"Every rupee — to whom, where, when"},
ben_sub:{te:"కేంద్ర, రాష్ట్ర పథకాల ప్రయోజనాల పంపిణీ — పోర్టల్ వారీగా ట్రాక్ చేయండి. (డెమో గణాంకాలు — అధికారిక లెక్కలు కావు.)",hi:"केंद्र और राज्य योजनाओं के लाभ वितरण — पोर्टल अनुसार ट्रैक करें। (डेमो आँकड़े — आधिकारिक नहीं।)",en:"Benefit distribution across central and state schemes — tracked portal-wise. (Demo figures — not official statistics.)"},
ben_centre:{te:"🇮🇳 కేంద్రం",hi:"🇮🇳 केंद्र",en:"🇮🇳 Centre"},
ben_state:{te:"🏛️ రాష్ట్రాలు",hi:"🏛️ राज्य",en:"🏛️ States"},
ben_track:{te:"పోర్టల్‌లో ట్రాక్ చేయండి ↗",hi:"पोर्टल पर ट्रैक करें ↗",en:"Track on portal ↗"},
ben_ben:{te:"లబ్ధిదారులు",hi:"लाभार्थी",en:"Beneficiaries"},
ben_disb:{te:"చెల్లించబడింది",hi:"वितरित",en:"Disbursed"},
ben_soon:{te:"🔗 లింక్ త్వరలో",hi:"🔗 लिंक जल्द",en:"🔗 Link soon"},
ben_note:{te:"⚗️ పై గణాంకాలు డెమో విజువలైజేషన్ కోసం ఉదాహరణ డేటా మాత్రమే — అధికారిక గణాంకాలు కావు. నిజమైన లెక్కల కోసం పోర్టల్ లింక్‌లు వాడండి.",hi:"⚗️ उपरोक्त आँकड़े डेमो हेतु उदाहरण डेटा मात्र हैं — आधिकारिक नहीं। वास्तविक आँकड़ों हेतु पोर्टल लिंक उपयोग करें।",en:"⚗️ Figures above are illustrative sample data for the demo visualisation — not official statistics. Use the portal links for real numbers."},
/* ---- progress dashboard ---- */
prog_kicker:{te:"📊 దేశ పురోగతి",hi:"📊 देश प्रगति",en:"📊 National progress"},
prog_h:{te:"రంగాల వారీగా — దేశం ఎక్కడ ఉంది",hi:"क्षेत्र अनुसार — देश कहाँ है",en:"Sector by sector — where the country stands"},
prog_sub:{te:"వ్యవసాయం నుంచి డిజిటల్ వరకు — ప్రతి రంగంలో సేవల స్థితి, ఒకే డాష్‌బోర్డ్‌లో. (డెమో గణాంకాలు.)",hi:"कृषि से डिजिटल तक — हर क्षेत्र में सेवाओं की स्थिति, एक ही डैशबोर्ड में। (डेमो आँकड़े।)",en:"From agriculture to digital — service status in every sector, on one dashboard. (Demo figures.)"},
prog_note:{te:"⚗️ డెమో విజువలైజేషన్ కోసం ఉదాహరణ డేటా — అధికారిక గణాంకాలు కావు.",hi:"⚗️ डेमो हेतु उदाहरण डेटा — आधिकारिक आँकड़े नहीं।",en:"⚗️ Illustrative sample data for the demo visualisation — not official statistics."},
m1l:{te:"బస్సులో సేవలు",hi:"बस पर सेवाएँ",en:"Services on the bus"},
m2l:{te:"ఆటో-క్లియరెన్స్ రేటు",hi:"ऑटो-क्लीयरेंस दर",en:"Auto-clearance rate"},
m3l:{te:"మధ్యస్థ సమయం (11 రోజుల నుంచి)",hi:"माध्य समय (11 दिन से)",en:"Median time (from 11 days)"},
m4l:{te:"SLAలో పరిష్కారమైన ఫిర్యాదులు",hi:"SLA में सुलझी शिकायतें",en:"Grievances resolved in SLA"},
/* ---- directory ---- */
dir_kicker:{te:"📚 సేవల జాబితా",hi:"📚 सेवा सूची",en:"📚 Service directory"},
dir_h:{te:"ప్రతి ప్రభుత్వ సేవ — ఒకే చోట",hi:"हर सरकारी सेवा — एक ही जगह",en:"Every government service — in one place"},
dir_sub:{te:"పౌరులు, వ్యాపారాల కోసం 25 కీలక సేవలు — ధృవీకరించిన పోర్టల్ లింక్‌లు, దశలవారీ మార్గదర్శకత్వం, మరియు భారత్‌మిత్ర వాటిని ఎలా మారుస్తుందో.",hi:"नागरिकों और व्यवसायों हेतु 25 प्रमुख सेवाएँ — सत्यापित पोर्टल लिंक, चरणबद्ध मार्गदर्शन, और भारतमित्र उन्हें कैसे बदलता है।",en:"25 key services for citizens and businesses — verified portal links, step-by-step guidance, and how BharatMitra reinvents each."},
dir_search:{te:"సేవను వెతకండి… (ఉదా: పాస్‌పోర్ట్, GST)",hi:"सेवा खोजें… (जैसे: पासपोर्ट, GST)",en:"Search services… (e.g. passport, GST)"},
dir_a_all:{te:"అందరూ",hi:"सभी",en:"All"},
dir_a_citizen:{te:"👤 పౌరులు",hi:"👤 नागरिक",en:"👤 Citizens"},
dir_a_business:{te:"🏢 వ్యాపారాలు",hi:"🏢 व्यवसाय",en:"🏢 Businesses"},
dir_l_all:{te:"అన్ని స్థాయిలు",hi:"सभी स्तर",en:"All levels"},
dir_l_centre:{te:"🇮🇳 కేంద్రం",hi:"🇮🇳 केंद्र",en:"🇮🇳 Centre"},
dir_l_state:{te:"🏛️ రాష్ట్రం",hi:"🏛️ राज्य",en:"🏛️ State"},
dir_visit:{te:"పోర్టల్‌కు వెళ్లండి ↗",hi:"पोर्टल पर जाएँ ↗",en:"Visit portal ↗"},
dir_how:{te:"ఎలా చేయాలి",hi:"कैसे करें",en:"How to do it"},
dir_reinvent:{te:"భారత్‌మిత్రతో పునర్నిర్మాణం",hi:"भारतमित्र से पुनर्निर्माण",en:"Reinvented with BharatMitra"},
dir_soon:{te:"🔗 ధృవీకరించిన లింక్ త్వరలో — ప్లేస్‌హోల్డర్",hi:"🔗 सत्यापित लिंक जल्द — प्लेसहोल्डर",en:"🔗 Verified link coming soon — placeholder"},
dir_noresult:{te:"సేవ కనబడలేదు — వేరే పదంతో ప్రయత్నించండి.",hi:"सेवा नहीं मिली — अन्य शब्द से प्रयास करें।",en:"No service found — try another term."},
dir_note:{te:"✅ = ధృవీకరించిన అధికారిక లింక్ · 🔗 = లింక్ ప్లేస్‌హోల్డర్ (URL ధృవీకరించబడలేదు, ఊహించలేదు).",hi:"✅ = सत्यापित आधिकारिक लिंक · 🔗 = लिंक प्लेसहोल्डर (URL सत्यापित नहीं, अनुमान नहीं)।",en:"✅ = verified official link · 🔗 = link placeholder (URL not verified, never guessed)."}
};
for(const [k,v] of Object.entries(T2))for(const l of["te","hi","en"])T[l][k]=v[l];

/* ---------- benefits data (ILLUSTRATIVE) ---------- */
window.BENEFITS=[
{id:"pmkisan",icon:"🚜",tab:"centre",name:"PM-KISAN",url:"https://pmkisan.gov.in",ben:"11.2 cr",disb:"₹3.1L cr",pct:92,
 desc:{te:"రైతులకు సంవత్సరానికి రూ. 6,000 — నేరుగా ఖాతాలోకి",hi:"किसानों हेतु प्रतिवर्ष रु. 6,000 — सीधे खाते में",en:"₹6,000/year to farmers — straight to accounts"}},
{id:"pmjay",icon:"🏥",tab:"centre",name:"Ayushman Bharat PM-JAY",url:"https://beneficiary.nha.gov.in",ben:"55 cr",disb:"₹1.2L cr",pct:78,
 desc:{te:"కుటుంబానికి రూ. 5 లక్షల నగదురహిత ఆరోగ్య కవర్",hi:"परिवार हेतु रु. 5 लाख कैशलेस स्वास्थ्य कवर",en:"₹5L cashless health cover per family"}},
{id:"pmay",icon:"🏠",tab:"centre",name:"PM Awas Yojana",url:null,ben:"4.2 cr",disb:"₹2.8L cr",pct:85,
 desc:{te:"గ్రామీణ + పట్టణ పేదలకు పక్కా ఇళ్లు",hi:"ग्रामीण + शहरी गरीबों हेतु पक्के घर",en:"Pucca houses for rural + urban poor"}},
{id:"mgnrega",icon:"👷",tab:"centre",name:"MGNREGA",url:null,ben:"12.1 cr",disb:"₹98K cr",pct:88,
 desc:{te:"గ్రామీణ కుటుంబాలకు 100 రోజుల వేతన ఉపాధి",hi:"ग्रामीण परिवारों हेतु 100 दिन मज़दूरी रोज़गार",en:"100 days wage employment for rural families"}},
{id:"nsap",icon:"👴",tab:"centre",name:"NSAP Pensions",url:null,ben:"3.1 cr",disb:"₹24K cr",pct:74,
 desc:{te:"వృద్ధులు, వితంతువులు, దివ్యాంగులకు పెన్షన్లు",hi:"वृद्ध, विधवा, दिव्यांग हेतु पेंशन",en:"Pensions for elderly, widows, disabled"}},
{id:"pmmvy",icon:"🤰",tab:"centre",name:"PMMVY",url:null,ben:"3.8 cr",disb:"₹16K cr",pct:69,
 desc:{te:"గర్భిణీలు, బాలింతలకు మాతృత్వ ప్రయోజనం",hi:"गर्भवती और धात्री माताओं हेतु मातृत्व लाभ",en:"Maternity benefit for pregnant, lactating mothers"}},
{id:"rythu",icon:"🌾",tab:"state",name:"Rythu Bharosa (TG)",url:null,ben:"72L",disb:"₹7,200 cr",pct:81,
 desc:{te:"తెలంగాణ రైతులకు పెట్టుబడి సాయం",hi:"तेलंगाना किसानों हेतु निवेश सहायता",en:"Investment support for Telangana farmers"}},
{id:"aasara",icon:"🤝",tab:"state",name:"Aasara Pensions (TG)",url:null,ben:"44L",disb:"₹9,600 cr",pct:77,
 desc:{te:"తెలంగాణలో సామాజిక భద్రతా పెన్షన్లు",hi:"तेलंगाना में सामाजिक सुरक्षा पेंशन",en:"Social security pensions in Telangana"}},
{id:"talliki",icon:"🎒",tab:"state",name:"Talliki Vandanam (AP)",url:null,ben:"67L",disb:"₹10,050 cr",pct:83,
 desc:{te:"AP విద్యార్థుల తల్లులకు విద్యా సాయం",hi:"AP विद्यार्थियों की माताओं हेतु शिक्षा सहायता",en:"Education aid to mothers of AP students"}},
{id:"sukhibhava",icon:"🚜",tab:"state",name:"Annadata Sukhibhava (AP)",url:null,ben:"47L",disb:"₹4,700 cr",pct:72,
 desc:{te:"AP రైతులకు ఆర్థిక సాయం",hi:"AP किसानों हेतु आर्थिक सहायता",en:"Financial aid for AP farmers"}}
];

/* ---------- sector dashboard (ILLUSTRATIVE) ---------- */
window.SECTORS=[
{id:"agri",icon:"🌾",name:{te:"వ్యవసాయం",hi:"कृषि",en:"Agriculture"},metrics:[
 {label:{te:"సాయిల్ హెల్త్ కార్డులు",hi:"मृदा स्वास्थ्य कार्ड",en:"Soil health cards"},val:"22 cr",pct:86},
 {label:{te:"పీఎం-కిసాన్ సంతృప్తి",hi:"पीएम-किसान संतृप्ति",en:"PM-KISAN saturation"},val:"91%",pct:91},
 {label:{te:"వ్యవసాయ రుణ పంపిణీ",hi:"कृषि ऋण वितरण",en:"Agri credit disbursed"},val:"₹24L cr",pct:78}]},
{id:"health",icon:"🏥",name:{te:"ఆరోగ్యం",hi:"स्वास्थ्य",en:"Health"},metrics:[
 {label:{te:"ఆయుష్మాన్ కార్డులు",hi:"आयुष्मान कार्ड",en:"Ayushman cards"},val:"38 cr",pct:69},
 {label:{te:"డిజిటలైజ్ అయిన PHCలు",hi:"डिजिटल PHC",en:"PHCs digitised"},val:"82%",pct:82},
 {label:{te:"అంబులెన్స్ స్పందన <20 నిమిషాలు",hi:"एम्बुलेंस प्रतिक्रिया <20 मिनट",en:"Ambulance response <20 min"},val:"74%",pct:74}]},
{id:"edu",icon:"📚",name:{te:"విద్య",hi:"शिक्षा",en:"Education"},metrics:[
 {label:{te:"డిజిటల్ తరగతి గదులు",hi:"डिजिटल कक्षाएँ",en:"Digital classrooms"},val:"64%",pct:64},
 {label:{te:"DBT ద్వారా స్కాలర్‌షిప్‌లు",hi:"DBT से छात्रवृत्ति",en:"Scholarships via DBT"},val:"96%",pct:96},
 {label:{te:"బాలికల నమోదు (సెకండరీ)",hi:"बालिका नामांकन (माध्यमिक)",en:"Girls' enrolment (secondary)"},val:"81%",pct:81}]},
{id:"msme",icon:"🏭",name:{te:"MSME & పరిశ్రమ",hi:"MSME व उद्योग",en:"MSME & Industry"},metrics:[
 {label:{te:"ఉద్యమ్ నమోదులు",hi:"उद्यम पंजीकरण",en:"Udyam registrations"},val:"6.2 cr",pct:88},
 {label:{te:"అనుసంధానమైన రుణం",hi:"जुड़ा ऋण",en:"Credit linked"},val:"₹5.4L cr",pct:71},
 {label:{te:"GeM విక్రేతలు",hi:"GeM विक्रेता",en:"GeM sellers"},val:"22L",pct:66}]},
{id:"digital",icon:"📡",name:{te:"డిజిటల్ & కనెక్టివిటీ",hi:"डिजिटल व कनेक्टिविटी",en:"Digital & Connectivity"},metrics:[
 {label:{te:"నెలవారీ UPI లావాదేవీలు",hi:"मासिक UPI लेनदेन",en:"UPI txns / month"},val:"1,600 cr",pct:94},
 {label:{te:"భారత్‌నెట్ గ్రామాలు",hi:"भारतनेट गाँव",en:"BharatNet villages"},val:"89%",pct:89},
 {label:{te:"ఆధార్ సంతృప్తి",hi:"आधार संतृप्ति",en:"Aadhaar saturation"},val:"93%",pct:93}]},
{id:"welfare",icon:"🤝",name:{te:"సంక్షేమం",hi:"कल्याण",en:"Social protection"},metrics:[
 {label:{te:"DBT బదిలీలు",hi:"DBT हस्तांतरण",en:"DBT transfers"},val:"₹6.8L cr",pct:90},
 {label:{te:"పెన్షన్ కవరేజీ",hi:"पेंशन कवरेज",en:"Pension coverage"},val:"76%",pct:76},
 {label:{te:"ePoS ద్వారా రేషన్",hi:"ePoS से राशन",en:"Ration via ePoS"},val:"92%",pct:92}]}
];
/* top strip metrics (ILLUSTRATIVE) */
window.TOPMETRICS=[
 {v:"2,400+",l:"m1l"},{v:"78%",l:"m2l"},{v:"9 min",l:"m3l"},{v:"94%",l:"m4l"}
];
