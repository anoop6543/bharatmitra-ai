/* ============================================================
   BharatMitra AI — 25 demo scenarios (trilingual: te/hi/en)
   Pure simulated data for the front-end visualisation.
   No backend, no live government integration.
   ============================================================ */
window.DEMOS = [
/* ---------- 1. Food-stall approvals ---------- */
{id:"food",icon:"🍲",cat:"citizen",
 chip:{te:"ఫుడ్ స్టాల్ అనుమతులు",hi:"फ़ूड स्टॉल अनुमति",en:"Food-stall permits"},
 query:{te:"నా ఫుడ్ స్టాల్ కి కావాల్సిన అనుమతులన్నీ తీసుకోవాలి.",hi:"मुझे अपने फ़ूड स्टॉल के लिए सभी अनुमतियाँ चाहिए।",en:"I need all the approvals for my food stall."},
 intro:{te:"అర్థమైంది! మీ ఫుడ్ స్టాల్ కి 3 అనుమతులు కావాలి — FSSAI, మున్సిపల్ ట్రేడ్ లైసెన్స్, ఉద్యమ్ రిజిస్ట్రేషన్. మూడింటినీ ఒకేసారి చేస్తాను.",hi:"समझ गया! आपके फ़ूड स्टॉल के लिए 3 अनुमतियाँ चाहिए — FSSAI, नगरपालिका ट्रेड लाइसेंस, उद्यम पंजीकरण। तीनों एक साथ करता हूँ।",en:"Got it! Your food stall needs 3 approvals — FSSAI, municipal trade licence, and Udyam registration. I'll do all three together."},
 filing:{te:"దరఖాస్తు ఫైల్ చేస్తున్నాను… ఆధార్, చిరునామా రుజువు ధృవీకరిస్తున్నాను…",hi:"आवेदन दाखिल कर रहा हूँ… आधार, पता प्रमाण सत्यापित कर रहा हूँ…",en:"Filing your applications… verifying Aadhaar and address proof…"},
 steps:[
  {n:{te:"FSSAI ఫుడ్ లైసెన్స్",hi:"FSSAI फ़ूड लाइसेंस",en:"FSSAI food licence"},f:{te:"FoSCoS పోర్టల్",hi:"FoSCoS पोर्टल",en:"FoSCoS portal"},s:{te:"ఆమోదం ✓",hi:"स्वीकृत ✓",en:"Approved ✓"}},
  {n:{te:"మున్సిపల్ ట్రేడ్ లైసెన్స్",hi:"नगरपालिका ट्रेड लाइसेंस",en:"Municipal trade licence"},f:{te:"GHMC",hi:"GHMC",en:"GHMC"},s:{te:"ఆమోదం ✓",hi:"स्वीकृत ✓",en:"Approved ✓"}},
  {n:{te:"ఉద్యమ్ రిజిస్ట్రేషన్ (MSME)",hi:"उद्यम पंजीकरण (MSME)",en:"Udyam registration (MSME)"},f:{te:"udyamregistration.gov.in",hi:"udyamregistration.gov.in",en:"udyamregistration.gov.in"},s:{te:"పూర్తయింది ✓",hi:"पूर्ण ✓",en:"Done ✓"}}],
 done:{te:"అభినందనలు! 3 అనుమతులు 4 నిమిషాల 12 సెకన్లలో పూర్తయ్యాయి. మీ సర్టిఫికెట్లు డిజిలాకర్‌లో సేవ్ అయ్యాయి.",hi:"बधाई! 4 मिनट 12 सेकंड में 3 अनुमतियाँ पूरी। आपके प्रमाणपत्र डिजिलॉकर में सहेजे गए।",en:"Congratulations! All 3 approvals done in 4 minutes 12 seconds. Your certificates are saved in DigiLocker."},
 certs:[
  {i:"✅",t:{te:"FSSAI లైసెన్స్",hi:"FSSAI लाइसेंस",en:"FSSAI licence"},s:{te:"15 సంవత్సరాల చెల్లుబాటు",hi:"15 वर्ष वैधता",en:"15-year validity"}},
  {i:"✅",t:{te:"ట్రేడ్ లైసెన్స్",hi:"ट्रेड लाइसेंस",en:"Trade licence"},s:{te:"GHMC ఆమోదం",hi:"GHMC स्वीकृति",en:"GHMC approved"}},
  {i:"✅",t:{te:"ఉద్యమ్ సర్టిఫికెట్",hi:"उद्यम प्रमाणपत्र",en:"Udyam certificate"},s:{te:"MSME ప్రయోజనాలు అన్‌లాక్",hi:"MSME लाभ अनलॉक",en:"MSME benefits unlocked"}}]},
/* ---------- 2. Income certificate ---------- */
{id:"income",icon:"📄",cat:"citizen",
 chip:{te:"ఆదాయ ధృవపత్రం",hi:"आय प्रमाणपत्र",en:"Income certificate"},
 query:{te:"నాకు ఆదాయ ధృవీకరణ పత్రం (ఇన్‌కమ్ సర్టిఫికెట్) కావాలి.",hi:"मुझे आय प्रमाणपत्र चाहिए।",en:"I need an income certificate."},
 intro:{te:"తెలంగాణ రెవెన్యూ శాఖ నుంచి తీస్తాను. మీ ఆధార్, రేషన్ కార్డు రికార్డులతో సరిచూస్తాను.",hi:"तेलंगाना राजस्व विभाग से दिलाता हूँ। आपके आधार, राशन कार्ड रिकॉर्ड से मिलान करूँगा।",en:"I'll get it from the Telangana Revenue Department, cross-checking your Aadhaar and ration card records."},
 filing:{te:"రికార్డులు సరిచూస్తున్నాను… మీసేవా పోర్టల్‌కి దరఖాస్తు పంపుతున్నాను…",hi:"रिकॉर्ड मिला रहा हूँ… मीसेवा पोर्टल पर आवेदन भेज रहा हूँ…",en:"Matching records… submitting to the MeeSeva portal…"},
 steps:[
  {n:{te:"ఆధార్ ధృవీకరణ",hi:"आधार सत्यापन",en:"Aadhaar verification"},f:{te:"UIDAI eKYC",hi:"UIDAI eKYC",en:"UIDAI eKYC"},s:{te:"సరిపోలింది ✓",hi:"मिलान ✓",en:"Matched ✓"}},
  {n:{te:"రేషన్ కార్డు రికార్డు",hi:"राशन कार्ड रिकॉर्ड",en:"Ration card record"},f:{te:"పౌర సరఫరాల శాఖ",hi:"नागरिक आपूर्ति विभाग",en:"Civil Supplies Dept"},s:{te:"సరిపోలింది ✓",hi:"मिलान ✓",en:"Matched ✓"}},
  {n:{te:"ఆదాయ అంచనా",hi:"आय आकलन",en:"Income estimation"},f:{te:"రూల్ ఇంజిన్",hi:"रूल इंजन",en:"Rules engine"},s:{te:"రూ. 2.4L/సంవత్సరం",hi:"रु. 2.4L/वर्ष",en:"₹2.4L/year"}},
  {n:{te:"తహసీల్దార్ ఆమోదం",hi:"तहसीलदार स्वीकृति",en:"Tahsildar approval"},f:{te:"డిజిటల్ సంతకం",hi:"डिजिटल हस्ताक्षर",en:"Digital signature"},s:{te:"జారీ చేయబడింది ✓",hi:"जारी ✓",en:"Issued ✓"}}],
 done:{te:"మీ ఆదాయ ధృవీకరణ పత్రం సిద్ధం! డిజిటల్ సంతకంతో 2 నిమిషాల 40 సెకన్లలో జారీ అయింది.",hi:"आपका आय प्रमाणपत्र तैयार! डिजिटल हस्ताक्षर के साथ 2 मिनट 40 सेकंड में जारी।",en:"Your income certificate is ready! Issued with digital signature in 2 minutes 40 seconds."},
 certs:[
  {i:"📜",t:{te:"ఆదాయ ధృవీకరణ పత్రం",hi:"आय प्रमाणपत्र",en:"Income certificate"},s:{te:"డిజిటల్ సంతకం",hi:"डिजिटल हस्ताक्षर",en:"Digitally signed"}},
  {i:"🗄️",t:{te:"డిజిలాకర్",hi:"डिजिलॉकर",en:"DigiLocker"},s:{te:"ఆటో-సేవ్ చేయబడింది",hi:"ऑटो-सेव",en:"Auto-saved"}}]},
/* ---------- 3. Driving-licence renewal ---------- */
{id:"driving",icon:"🪪",cat:"citizen",
 chip:{te:"లైసెన్స్ రెన్యూవల్",hi:"लाइसेंस नवीनीकरण",en:"Licence renewal"},
 query:{te:"నా డ్రైవింగ్ లైసెన్స్ గడువు ముగిసింది. రెన్యూ చేయాలి.",hi:"मेरा ड्राइविंग लाइसेंस समाप्त हो गया है। नवीनीकरण करना है।",en:"My driving licence has expired. I need to renew it."},
 intro:{te:"పరివాహన్ పోర్టల్ ద్వారా రెన్యూ చేస్తాను. మీ పాత లైసెన్స్ డిజిలాకర్ నుంచి తీసుకుంటాను.",hi:"परिवहन पोर्टल से नवीनीकरण करता हूँ। आपका पुराना लाइसेंस डिजिलॉकर से लूँगा।",en:"I'll renew it via the Parivahan portal, pulling your old licence from DigiLocker."},
 filing:{te:"దరఖాస్తు నింపుతున్నాను… వైద్య ధృవీకరణ పత్రం అప్‌లోడ్ చేస్తున్నాను…",hi:"आवेदन भर रहा हूँ… चिकित्सा प्रमाणपत्र अपलोड कर रहा हूँ…",en:"Filling the application… uploading your medical certificate…"},
 steps:[
  {n:{te:"లైసెన్స్ రికార్డు",hi:"लाइसेंस रिकॉर्ड",en:"Licence record"},f:{te:"డిజిలాకర్",hi:"डिजिलॉकर",en:"DigiLocker"},s:{te:"తీసుకోబడింది ✓",hi:"प्राप्त ✓",en:"Fetched ✓"}},
  {n:{te:"రెన్యూవల్ దరఖాస్తు",hi:"नवीनीकरण आवेदन",en:"Renewal application"},f:{te:"పరివాహన్",hi:"परिवहन",en:"Parivahan"},s:{te:"సమర్పించబడింది ✓",hi:"प्रस्तुत ✓",en:"Submitted ✓"}},
  {n:{te:"ఫీజు చెల్లింపు",hi:"शुल्क भुगतान",en:"Fee payment"},f:{te:"UPI",hi:"UPI",en:"UPI"},s:{te:"రూ. 200 చెల్లించబడింది",hi:"रु. 200 भुगतान",en:"₹200 paid"}},
  {n:{te:"స్మార్ట్ కార్డు",hi:"स्मार्ट कार्ड",en:"Smart card"},f:{te:"RTO డిస్పాచ్",hi:"RTO प्रेषण",en:"RTO dispatch"},s:{te:"పోస్టులో పంపబడుతుంది",hi:"डाक से भेजा जाएगा",en:"Will be posted"}}],
 done:{te:"లైసెన్స్ రెన్యూవల్ పూర్తి! డిజిటల్ లైసెన్స్ వెంటనే చెల్లుతుంది; స్మార్ట్ కార్డు 7 రోజుల్లో పోస్టులో వస్తుంది.",hi:"लाइसेंस नवीनीकरण पूर्ण! डिजिटल लाइसेंस तुरंत वैध; स्मार्ट कार्ड 7 दिनों में डाक से आएगा।",en:"Licence renewed! The digital licence is valid immediately; the smart card arrives by post in 7 days."},
 certs:[
  {i:"🪪",t:{te:"డిజిటల్ డ్రైవింగ్ లైసెన్స్",hi:"डिजिटल ड्राइविंग लाइसेंस",en:"Digital driving licence"},s:{te:"వెంటనే చెల్లుతుంది",hi:"तुरंत वैध",en:"Valid immediately"}},
  {i:"📮",t:{te:"స్మార్ట్ కార్డు",hi:"स्मार्ट कार्ड",en:"Smart card"},s:{te:"7 రోజుల్లో డెలివరీ",hi:"7 दिनों में डिलीवरी",en:"Delivery in 7 days"}}]},
/* ---------- 4. Passport ---------- */
{id:"passport",icon:"🛂",cat:"citizen",
 chip:{te:"పాస్‌పోర్ట్",hi:"पासपोर्ट",en:"Passport"},
 query:{te:"త్వరలో ప్రయాణం ఉంది. కొత్త పాస్‌పోర్ట్ కావాలి.",hi:"जल्द यात्रा है। नया पासपोर्ट चाहिए।",en:"I have a trip coming up. I need a new passport."},
 intro:{te:"పాస్‌పోర్ట్ సేవా ఒకే ఫ్లోలో — ఆధార్ + డిజిలాకర్ నుంచి దరఖాస్తు నింపి, ఫీజు తీసుకుని, PSK స్లాట్ బుక్ చేస్తాను.",hi:"एक ही फ़्लो में पासपोर्ट सेवा — आधार + डिजिलॉकर से आवेदन भरूँगा, शुल्क लूँगा, PSK स्लॉट बुक करूँगा।",en:"Passport Seva in one flow — I'll pre-fill from Aadhaar + DigiLocker, collect the fee, and book your PSK slot."},
 filing:{te:"దరఖాస్తు నింపుతున్నాను… పత్రాలు ధృవీకరిస్తున్నాను…",hi:"आवेदन भर रहा हूँ… दस्तावेज़ सत्यापित कर रहा हूँ…",en:"Filling the application… verifying documents…"},
 steps:[
  {n:{te:"దరఖాస్తు",hi:"आवेदन",en:"Application"},f:{te:"పాస్‌పోర్ట్ సేవా పోర్టల్",hi:"पासपोर्ट सेवा पोर्टल",en:"Passport Seva portal"},s:{te:"సమర్పించబడింది ✓",hi:"प्रस्तुत ✓",en:"Submitted ✓"}},
  {n:{te:"ఫీజు చెల్లింపు",hi:"शुल्क भुगतान",en:"Fee payment"},f:{te:"UPI",hi:"UPI",en:"UPI"},s:{te:"రూ. 1,500 చెల్లించబడింది",hi:"रु. 1,500 भुगतान",en:"₹1,500 paid"}},
  {n:{te:"అపాయింట్‌మెంట్",hi:"अपॉइंटमेंट",en:"Appointment"},f:{te:"PSK హైదరాబాద్",hi:"PSK हैदराबाद",en:"PSK Hyderabad"},s:{te:"బుక్ అయింది · అక్టోబర్ 6",hi:"बुक · 6 अक्टूबर",en:"Booked · Oct 6"}}],
 done:{te:"పూర్తయింది! దరఖాస్తు సమర్పించబడింది, ఫీజు చెల్లించబడింది, PSK అపాయింట్‌మెంట్ బుక్ అయింది. ఒరిజినల్ పత్రాలు తీసుకెళ్లండి — పోలీస్ వెరిఫికేషన్ ఆటోమేటిక్‌గా మొదలవుతుంది.",hi:"पूर्ण! आवेदन प्रस्तुत, शुल्क भुगतान, PSK अपॉइंटमेंट बुक। मूल दस्तावेज़ ले जाएँ — पुलिस सत्यापन स्वतः शुरू होगा।",en:"Done! Application submitted, fee paid, PSK appointment booked. Carry originals — police verification triggers automatically."},
 certs:[
  {i:"🧾",t:{te:"దరఖాస్తు రసీదు",hi:"आवेदन रसीद",en:"Application receipt"},s:{te:"ARN జారీ",hi:"ARN जारी",en:"ARN generated"}},
  {i:"📅",t:{te:"PSK అపాయింట్‌మెంట్",hi:"PSK अपॉइंटमेंट",en:"PSK appointment"},s:{te:"అక్టోబర్ 6, ఉదయం 10:30",hi:"6 अक्टूबर, सुबह 10:30",en:"Oct 6, 10:30 AM"}},
  {i:"✅",t:{te:"పత్రాల తనిఖీ",hi:"दस्तावेज़ जाँच",en:"Document check"},s:{te:"డిజిలాకర్ ధృవీకరణ",hi:"डिजिलॉकर सत्यापित",en:"DigiLocker verified"}}]},
/* ---------- 5. Aadhaar address update ---------- */
{id:"aadhaar",icon:"🆔",cat:"citizen",
 chip:{te:"ఆధార్ అడ్రస్",hi:"आधार पता",en:"Aadhaar update"},
 query:{te:"కొత్త ఇంటికి మారాను. ఆధార్‌లో అడ్రస్ మార్చాలి.",hi:"नए घर में शिफ्ट हुआ हूँ। आधार में पता बदलना है।",en:"I've moved to a new house. I need to update my Aadhaar address."},
 intro:{te:"అడ్రస్ ప్రూఫ్‌తో ఆధార్ అడ్రస్ అప్‌డేట్ చేస్తాను — సెంటర్‌కు వెళ్లాల్సిన అవసరం లేదు.",hi:"पता प्रमाण से आधार पता अपडेट करूँगा — केंद्र जाने की ज़रूरत नहीं।",en:"I'll update your Aadhaar address with address proof — no centre visit needed."},
 filing:{te:"అడ్రస్ ప్రూఫ్ అప్‌లోడ్ చేస్తున్నాను… OTPతో ధృవీకరిస్తున్నాను…",hi:"पता प्रमाण अपलोड कर रहा हूँ… OTP से सत्यापित कर रहा हूँ…",en:"Uploading address proof… authenticating with OTP…"},
 steps:[
  {n:{te:"అడ్రస్ ప్రూఫ్",hi:"पता प्रमाण",en:"Address proof"},f:{te:"విద్యుత్ బిల్లు",hi:"बिजली बिल",en:"Electricity bill"},s:{te:"ధృవీకరించబడింది ✓",hi:"सत्यापित ✓",en:"Verified ✓"}},
  {n:{te:"OTP ధృవీకరణ",hi:"OTP सत्यापन",en:"OTP authentication"},f:{te:"రిజిస్టర్డ్ మొబైల్",hi:"पंजीकृत मोबाइल",en:"Registered mobile"},s:{te:"నిర్ధారించబడింది ✓",hi:"पुष्ट ✓",en:"Confirmed ✓"}},
  {n:{te:"అప్‌డేట్ అభ్యర్థన",hi:"अपडेट अनुरोध",en:"Update request"},f:{te:"UIDAI",hi:"UIDAI",en:"UIDAI"},s:{te:"URN జారీ ✓",hi:"URN जारी ✓",en:"URN generated ✓"}}],
 done:{te:"అడ్రస్ అప్‌డేట్ సమర్పించబడింది! ఆమోదం తర్వాత కొత్త ఈ-ఆధార్ SMS/ఈమెయిల్‌లో వస్తుంది — సాధారణంగా 30 రోజుల్లోపు, చాలాసార్లు అంతకంటే ముందే.",hi:"पता अपडेट प्रस्तुत! स्वीकृति के बाद नया ई-आधार SMS/ईमेल से मिलेगा — आमतौर पर 30 दिनों में, अक्सर उससे पहले।",en:"Address update submitted! Your new e-Aadhaar arrives by SMS/email on approval — usually within 30 days, often sooner."},
 certs:[
  {i:"🔢",t:{te:"URN",hi:"URN",en:"URN"},s:{te:"అప్‌డేట్ రిక్వెస్ట్ నంబర్",hi:"अपडेट अनुरोध संख्या",en:"Update Request Number"}},
  {i:"📄",t:{te:"ఈ-ఆధార్",hi:"ई-आधार",en:"e-Aadhaar"},s:{te:"ఆమోదంపై ఆటో-డెలివరీ",hi:"स्वीकृति पर ऑटो-डिलीवरी",en:"Auto-delivered on approval"}}]},
/* ---------- 6. Ration card ---------- */
{id:"ration",icon:"🌾",cat:"citizen",
 chip:{te:"రేషన్ కార్డు",hi:"राशन कार्ड",en:"Ration card"},
 query:{te:"మా కుటుంబానికి కొత్త రేషన్ కార్డు కావాలి.",hi:"मेरे परिवार के लिए नया राशन कार्ड चाहिए।",en:"My family needs a new ration card."},
 intro:{te:"రాష్ట్ర పౌర సరఫరాల శాఖ నుంచి తీస్తాను. కుటుంబ సభ్యులందరి ఆధార్ సీడింగ్ ఒకేసారి చేస్తాను.",hi:"राज्य नागरिक आपूर्ति विभाग से दिलाता हूँ। सभी सदस्यों की आधार सीडिंग एक साथ करूँगा।",en:"I'll get it from the state Civil Supplies Department, seeding every family member's Aadhaar in one go."},
 filing:{te:"కుటుంబ వివరాలు నమోదు చేస్తున్నాను… ఆధార్ సీడింగ్ చేస్తున్నాను…",hi:"परिवार विवरण दर्ज कर रहा हूँ… आधार सीडिंग कर रहा हूँ…",en:"Entering family details… seeding Aadhaar…"},
 steps:[
  {n:{te:"కుటుంబ వివరాలు",hi:"परिवार विवरण",en:"Family details"},f:{te:"రాష్ట్ర ఫుడ్ పోర్టల్",hi:"राज्य खाद्य पोर्टल",en:"State food portal"},s:{te:"సమర్పించబడింది ✓",hi:"प्रस्तुत ✓",en:"Submitted ✓"}},
  {n:{te:"ఆధార్ సీడింగ్",hi:"आधार सीडिंग",en:"Aadhaar seeding"},f:{te:"సభ్యులందరూ",hi:"सभी सदस्य",en:"All members"},s:{te:"ధృవీకరించబడింది ✓",hi:"सत्यापित ✓",en:"Verified ✓"}},
  {n:{te:"eKYC",hi:"eKYC",en:"eKYC"},f:{te:"OTP",hi:"OTP",en:"OTP"},s:{te:"పూర్తయింది ✓",hi:"पूर्ण ✓",en:"Completed ✓"}}],
 done:{te:"రేషన్ కార్డు దరఖాస్తు సమర్పించబడింది! కార్డు డిజిటల్‌గా జారీ అయి, FPS దుకాణానికి లింక్ అవుతుంది.",hi:"राशन कार्ड आवेदन प्रस्तुत! कार्ड डिजिटल जारी होगा और FPS दुकान से लिंक होगा।",en:"Ration card application filed! The card will be issued digitally and linked to your FPS shop."},
 certs:[
  {i:"🧾",t:{te:"అక్‌నాలెడ్జ్‌మెంట్",hi:"पावती",en:"Acknowledgement"},s:{te:"దరఖాస్తు ID జారీ",hi:"आवेदन ID जारी",en:"Application ID issued"}},
  {i:"🌾",t:{te:"హక్కు",hi:"हकदारी",en:"Entitlement"},s:{te:"FPSకి ఆటో-మ్యాప్",hi:"FPS से ऑटो-मैप",en:"Auto-mapped to FPS"}}]},
/* ---------- 7. Old-age pension ---------- */
{id:"pension",icon:"👴",cat:"citizen",
 chip:{te:"పెన్షన్",hi:"पेंशन",en:"Pension"},
 query:{te:"మా నాన్నగారికి వృద్ధాప్య పెన్షన్ కావాలి.",hi:"मेरे पिताजी को वृद्धावस्था पेंशन चाहिए।",en:"My father needs an old-age pension."},
 intro:{te:"అర్హత చూసి, సామాజిక సంక్షేమ శాఖకు దరఖాస్తు చేస్తాను. DBT ద్వారా నేరుగా బ్యాంకు ఖాతాలోకి వస్తుంది.",hi:"पात्रता देखकर समाज कल्याण विभाग में आवेदन करूँगा। DBT से सीधे बैंक खाते में आएगी।",en:"I'll check eligibility and apply to the Social Welfare Department. It lands directly in the bank account via DBT."},
 filing:{te:"అర్హత పరిశీలిస్తున్నాను… బ్యాంకు ఖాతా లింక్ చేస్తున్నాను…",hi:"पात्रता जाँच रहा हूँ… बैंक खाता लिंक कर रहा हूँ…",en:"Checking eligibility… linking the bank account…"},
 steps:[
  {n:{te:"అర్హత పరిశీలన",hi:"पात्रता जाँच",en:"Eligibility check"},f:{te:"వయస్సు 60+ · ఆదాయ నిబంధనలు",hi:"आयु 60+ · आय नियम",en:"Age 60+ · income rules"},s:{te:"అర్హులు ✓",hi:"पात्र ✓",en:"Qualified ✓"}},
  {n:{te:"ఆధార్ + బ్యాంకు సీడింగ్",hi:"आधार + बैंक सीडिंग",en:"Aadhaar + bank seeding"},f:{te:"DBT",hi:"DBT",en:"DBT"},s:{te:"లింక్ అయింది ✓",hi:"लिंक ✓",en:"Linked ✓"}},
  {n:{te:"దరఖాస్తు",hi:"आवेदन",en:"Application"},f:{te:"సంక్షేమ శాఖ",hi:"कल्याण विभाग",en:"Welfare dept"},s:{te:"సమర్పించబడింది ✓",hi:"प्रस्तुत ✓",en:"Submitted ✓"}}],
 done:{te:"పెన్షన్ దరఖాస్తు సమర్పించబడింది! ఆమోదం తర్వాత నెలవారీ పెన్షన్ DBT ద్వారా నేరుగా బ్యాంకు ఖాతాలో జమ అవుతుంది.",hi:"पेंशन आवेदन प्रस्तुत! स्वीकृति के बाद मासिक पेंशन DBT से सीधे बैंक खाते में जमा होगी।",en:"Pension application submitted! After approval, the monthly pension is credited directly to the bank account via DBT."},
 certs:[
  {i:"🧾",t:{te:"దరఖాస్తు ID",hi:"आवेदन ID",en:"Application ID"},s:{te:"జారీ చేయబడింది",hi:"जारी",en:"Generated"}},
  {i:"🏦",t:{te:"DBT లింకేజీ",hi:"DBT लिंकेज",en:"DBT linkage"},s:{te:"బ్యాంకు ధృవీకరణ",hi:"बैंक सत्यापित",en:"Bank verified"}}]},
/* ---------- 8. Scholarship ---------- */
{id:"scholarship",icon:"🎓",cat:"citizen",
 chip:{te:"స్కాలర్‌షిప్",hi:"छात्रवृत्ति",en:"Scholarship"},
 query:{te:"నా చదువు కోసం స్కాలర్‌షిప్ కావాలి.",hi:"मेरी पढ़ाई के लिए छात्रवृत्ति चाहिए।",en:"I need a scholarship for my studies."},
 intro:{te:"నేషనల్ స్కాలర్‌షిప్ పోర్టల్‌లో అర్హత చూసి, సరైన పథకాలకు దరఖాస్తు చేస్తాను.",hi:"नेशनल स्कॉलरशिप पोर्टल पर पात्रता देखकर सही योजनाओं में आवेदन करूँगा।",en:"I'll check eligibility on the National Scholarship Portal and apply to the right schemes."},
 filing:{te:"అర్హత సరిచూస్తున్నాను… దరఖాస్తు నింపుతున్నాను…",hi:"पात्रता मिला रहा हूँ… आवेदन भर रहा हूँ…",en:"Matching eligibility… filling the application…"},
 steps:[
  {n:{te:"అర్హత",hi:"पात्रता",en:"Eligibility"},f:{te:"NSP · మెరిట్/ఆదాయం",hi:"NSP · मेरिट/आय",en:"NSP · merit/income"},s:{te:"3 పథకాలు సరిపోలాయి",hi:"3 योजनाएँ मिलीं",en:"3 schemes matched"}},
  {n:{te:"దరఖాస్తు",hi:"आवेदन",en:"Application"},f:{te:"నేషనల్ స్కాలర్‌షిప్ పోర్టల్",hi:"नेशनल स्कॉलरशिप पोर्टल",en:"National Scholarship Portal"},s:{te:"సమర్పించబడింది ✓",hi:"प्रस्तुत ✓",en:"Filed ✓"}},
  {n:{te:"సంస్థ ధృవీకరణ",hi:"संस्थान सत्यापन",en:"Institute verification"},f:{te:"కళాశాలకు పంపబడింది",hi:"कॉलेज को भेजा",en:"Routed to college"},s:{te:"ఆటో-రూట్ ✓",hi:"ऑटो-रूट ✓",en:"Auto-routed ✓"}}],
 done:{te:"స్కాలర్‌షిప్ దరఖాస్తు సమర్పించబడి, ధృవీకరణ కోసం మీ సంస్థకు పంపబడింది. ప్రతి దశను ఇక్కడే ట్రాక్ చేయండి.",hi:"छात्रवृत्ति आवेदन प्रस्तुत और सत्यापन हेतु आपके संस्थान को भेजा गया। हर चरण यहीं ट्रैक करें।",en:"Scholarship application filed and routed to your institute for verification. Track every stage right here."},
 certs:[
  {i:"🎓",t:{te:"దరఖాస్తు",hi:"आवेदन",en:"Application"},s:{te:"సమర్పించబడింది",hi:"प्रस्तुत",en:"Submitted"}},
  {i:"🏫",t:{te:"ధృవీకరణ",hi:"सत्यापन",en:"Verification"},s:{te:"సంస్థకు పంపబడింది",hi:"संस्थान को भेजा",en:"Routed to institute"}}]},
/* ---------- 9. PM-KISAN ---------- */
{id:"pmkisan",icon:"🚜",cat:"citizen",
 chip:{te:"పీఎం-కిసాన్",hi:"पीएम-किसान",en:"PM-KISAN"},
 query:{te:"పీఎం-కిసాన్‌లో నమోదు చేసుకోవాలి.",hi:"पीएम-किसान में पंजीकरण करना है।",en:"I want to enrol in PM-KISAN."},
 intro:{te:"భూమి రికార్డుతో సరిచూసి, eKYC పూర్తి చేసి pmkisan.gov.inలో నమోదు చేస్తాను.",hi:"भूमि रिकॉर्ड से मिलान कर, eKYC पूर्ण कर pmkisan.gov.in पर पंजीकृत करूँगा।",en:"I'll match your land record, complete eKYC, and enrol you on pmkisan.gov.in."},
 filing:{te:"భూమి రికార్డు సరిచూస్తున్నాను… eKYC చేస్తున్నాను…",hi:"भूमि रिकॉर्ड मिला रहा हूँ… eKYC कर रहा हूँ…",en:"Matching land record… doing eKYC…"},
 steps:[
  {n:{te:"భూమి రికార్డు",hi:"भूमि रिकॉर्ड",en:"Land record"},f:{te:"ధరణి/మీభూమి",hi:"धरणी/मीभूमि",en:"Dharani/MeeBhoomi"},s:{te:"ధృవీకరించబడింది ✓",hi:"सत्यापित ✓",en:"Verified ✓"}},
  {n:{te:"eKYC",hi:"eKYC",en:"eKYC"},f:{te:"ఆధార్ OTP",hi:"आधार OTP",en:"Aadhaar OTP"},s:{te:"పూర్తయింది ✓",hi:"पूर्ण ✓",en:"Done ✓"}},
  {n:{te:"నమోదు",hi:"पंजीकरण",en:"Registration"},f:{te:"pmkisan.gov.in",hi:"pmkisan.gov.in",en:"pmkisan.gov.in"},s:{te:"నమోదు అయింది ✓",hi:"पंजीकृत ✓",en:"Enrolled ✓"}}],
 done:{te:"పీఎం-కిసాన్‌లో నమోదు అయ్యారు! సంవత్సరానికి రూ. 6,000 మీ DBT-లింక్డ్ ఖాతాలో 3 విడతలుగా వస్తుంది.",hi:"पीएम-किसान में पंजीकृत! प्रति वर्ष रु. 6,000 आपके DBT-लिंक्ड खाते में 3 किस्तों में आएगा।",en:"You're enrolled in PM-KISAN! ₹6,000/year will land in your DBT-linked account in 3 instalments."},
 certs:[
  {i:"🌾",t:{te:"నమోదు",hi:"पंजीकरण",en:"Registration"},s:{te:"నమోదు అయింది",hi:"पंजीकृत",en:"Enrolled"}},
  {i:"💰",t:{te:"విడతలు",hi:"किस्तें",en:"Instalments"},s:{te:"DBT షెడ్యూల్",hi:"DBT अनुसूची",en:"DBT scheduled"}}]},
/* ---------- 10. Ayushman card ---------- */
{id:"ayushman",icon:"🏥",cat:"citizen",
 chip:{te:"ఆయుష్మాన్ కార్డు",hi:"आयुष्मान कार्ड",en:"Ayushman card"},
 query:{te:"ఆయుష్మాన్ భారత్ కార్డు కావాలి.",hi:"आयुष्मान भारत कार्ड चाहिए।",en:"I need an Ayushman Bharat card."},
 intro:{te:"కుటుంబ అర్హత చూసి, eKYCతో కార్డు జారీ చేస్తాను — ఎంపానెల్డ్ ఆసుపత్రుల్లో నగదురహిత చికిత్స.",hi:"परिवार पात्रता देखकर eKYC से कार्ड जारी करूँगा — पैनल अस्पतालों में कैशलेस इलाज।",en:"I'll check family eligibility and issue the card with eKYC — cashless treatment at empanelled hospitals."},
 filing:{te:"అర్హత జాబితా చూస్తున్నాను… eKYC చేస్తున్నాను…",hi:"पात्रता सूची देख रहा हूँ… eKYC कर रहा हूँ…",en:"Checking the eligibility list… doing eKYC…"},
 steps:[
  {n:{te:"కుటుంబ అర్హత",hi:"परिवार पात्रता",en:"Family eligibility"},f:{te:"SECC జాబితా",hi:"SECC सूची",en:"SECC list"},s:{te:"కనుగొనబడింది ✓",hi:"मिला ✓",en:"Found ✓"}},
  {n:{te:"eKYC",hi:"eKYC",en:"eKYC"},f:{te:"ఆధార్",hi:"आधार",en:"Aadhaar"},s:{te:"ధృవీకరించబడింది ✓",hi:"सत्यापित ✓",en:"Verified ✓"}},
  {n:{te:"కార్డు జారీ",hi:"कार्ड जारी",en:"Card issuance"},f:{te:"PM-JAY",hi:"PM-JAY",en:"PM-JAY"},s:{te:"జారీ చేయబడింది ✓",hi:"जारी ✓",en:"Issued ✓"}}],
 done:{te:"మీ ఆయుష్మాన్ కార్డు సిద్ధం! ఎంపానెల్డ్ ఆసుపత్రుల్లో సంవత్సరానికి రూ. 5 లక్షల నగదురహిత కవర్.",hi:"आपका आयुष्मान कार्ड तैयार! पैनल अस्पतालों में प्रति वर्ष रु. 5 लाख कैशलेस कवर।",en:"Your Ayushman card is ready! ₹5 lakh/year cashless cover at empanelled hospitals."},
 certs:[
  {i:"🏥",t:{te:"ఆయుష్మాన్ కార్డు",hi:"आयुष्मान कार्ड",en:"Ayushman card"},s:{te:"డిజిటల్‌గా జారీ",hi:"डिजिटल जारी",en:"Issued digitally"}},
  {i:"🛡️",t:{te:"కవర్",hi:"कवर",en:"Cover"},s:{te:"రూ. 5L/కుటుంబం/సంవత్సరం",hi:"रु. 5L/परिवार/वर्ष",en:"₹5L/family/year"}}]},
/* ---------- 11. e-Shram ---------- */
{id:"eshram",icon:"🪪",cat:"citizen",
 chip:{te:"ఈ-శ్రమ్ కార్డు",hi:"ई-श्रम कार्ड",en:"e-Shram card"},
 query:{te:"ఈ-శ్రమ్ కార్డు కావాలి.",hi:"ई-श्रम कार्ड चाहिए।",en:"I need an e-Shram card."},
 intro:{te:"అసంఘటిత కార్మికుడిగా నమోదు చేసి, UAN కార్డు జారీ చేస్తాను — సంక్షేమ పథకాలకు అర్హత లభిస్తుంది.",hi:"असंगठित श्रमिक के रूप में पंजीकृत कर UAN कार्ड जारी करूँगा — कल्याण योजनाओं की पात्रता मिलेगी।",en:"I'll register you as an unorganised worker and issue the UAN card — unlocking welfare scheme eligibility."},
 filing:{te:"వివరాలు నమోదు చేస్తున్నాను… బ్యాంకు ఖాతా లింక్ చేస్తున్నాను…",hi:"विवरण दर्ज कर रहा हूँ… बैंक खाता लिंक कर रहा हूँ…",en:"Recording details… linking the bank account…"},
 steps:[
  {n:{te:"కార్మిక వివరాలు",hi:"श्रमिक विवरण",en:"Worker details"},f:{te:"వృత్తి",hi:"व्यवसाय",en:"Occupation"},s:{te:"నమోదు అయింది ✓",hi:"दर्ज ✓",en:"Recorded ✓"}},
  {n:{te:"ఆధార్ + బ్యాంకు",hi:"आधार + बैंक",en:"Aadhaar + bank"},f:{te:"UAN",hi:"UAN",en:"UAN"},s:{te:"సీడ్ అయింది ✓",hi:"सीड ✓",en:"Seeded ✓"}},
  {n:{te:"కార్డు",hi:"कार्ड",en:"Card"},f:{te:"ఈ-శ్రమ్ పోర్టల్",hi:"ई-श्रम पोर्टल",en:"e-Shram portal"},s:{te:"జారీ చేయబడింది ✓",hi:"जारी ✓",en:"Issued ✓"}}],
 done:{te:"ఈ-శ్రమ్ కార్డు జారీ అయింది! అసంఘటిత కార్మిక సంక్షేమ పథకాలు, బీమా ఇప్పుడు మీకు అందుబాటులో.",hi:"ई-श्रम कार्ड जारी! असंगठित श्रमिक कल्याण योजनाएँ और बीमा अब आपके लिए उपलब्ध।",en:"e-Shram card issued! Unorganised-worker welfare schemes and insurance are now open to you."},
 certs:[
  {i:"🪪",t:{te:"ఈ-శ్రమ్ UAN",hi:"ई-श्रम UAN",en:"e-Shram UAN"},s:{te:"జారీ చేయబడింది",hi:"जारी",en:"Generated"}},
  {i:"🛡️",t:{te:"బీమా",hi:"बीमा",en:"Insurance"},s:{te:"PMSBY లింక్",hi:"PMSBY लिंक",en:"PMSBY linked"}}]},
/* ---------- 12. Birth certificate ---------- */
{id:"birth",icon:"👶",cat:"citizen",
 chip:{te:"జనన ధృవపత్రం",hi:"जन्म प्रमाणपत्र",en:"Birth certificate"},
 query:{te:"నా బిడ్డ జనన ధృవీకరణ పత్రం కావాలి.",hi:"मेरे बच्चे का जन्म प्रमाणपत्र चाहिए।",en:"I need my child's birth certificate."},
 intro:{te:"ఆసుపత్రి రికార్డుతో సరిచూసి, మున్సిపల్ కార్పొరేషన్ నుంచి డిజిటల్ సంతకంతో జారీ చేస్తాను.",hi:"अस्पताल रिकॉर्ड से मिलान कर नगर निगम से डिजिटल हस्ताक्षर सहित जारी करूँगा।",en:"I'll match the hospital record and issue it from the municipal corporation with a digital signature."},
 filing:{te:"ఆసుపత్రి రికార్డు సరిచూస్తున్నాను… దరఖాస్తు పంపుతున్నాను…",hi:"अस्पताल रिकॉर्ड मिला रहा हूँ… आवेदन भेज रहा हूँ…",en:"Matching the hospital record… sending the application…"},
 steps:[
  {n:{te:"ఆసుపత్రి రికార్డు",hi:"अस्पताल रिकॉर्ड",en:"Hospital record"},f:{te:"RBD",hi:"RBD",en:"RBD"},s:{te:"సరిపోలింది ✓",hi:"मिलान ✓",en:"Matched ✓"}},
  {n:{te:"దరఖాస్తు",hi:"आवेदन",en:"Application"},f:{te:"మున్సిపల్ కార్పొరేషన్",hi:"नगर निगम",en:"Municipal corp"},s:{te:"సమర్పించబడింది ✓",hi:"प्रस्तुत ✓",en:"Filed ✓"}},
  {n:{te:"ధృవపత్రం",hi:"प्रमाणपत्र",en:"Certificate"},f:{te:"డిజిటల్ సంతకం",hi:"डिजिटल हस्ताक्षर",en:"Digitally signed"},s:{te:"జారీ చేయబడింది ✓",hi:"जारी ✓",en:"Issued ✓"}}],
 done:{te:"జనన ధృవీకరణ పత్రం జారీ అయి, మీ డిజిలాకర్‌లో ఉంది — ఎక్కడైనా చెల్లుతుంది, ఎప్పటికీ.",hi:"जन्म प्रमाणपत्र जारी और आपके डिजिलॉकर में — हर जगह मान्य, हमेशा।",en:"Birth certificate issued and in your DigiLocker — valid everywhere, forever."},
 certs:[
  {i:"📜",t:{te:"జనన ధృవీకరణ పత్రం",hi:"जन्म प्रमाणपत्र",en:"Birth certificate"},s:{te:"జారీ చేయబడింది",hi:"जारी",en:"Issued"}},
  {i:"🗄️",t:{te:"డిజిలాకర్",hi:"डिजिलॉकर",en:"DigiLocker"},s:{te:"స్టోర్ చేయబడింది",hi:"संग्रहीत",en:"Stored"}}]},
/* ---------- 13. Caste certificate ---------- */
{id:"caste",icon:"📜",cat:"citizen",
 chip:{te:"కుల ధృవపత్రం",hi:"जाति प्रमाणपत्र",en:"Caste certificate"},
 query:{te:"కుల ధృవీకరణ పత్రం కావాలి.",hi:"जाति प्रमाणपत्र चाहिए।",en:"I need a caste certificate."},
 intro:{te:"రెవెన్యూ రికార్డులతో సరిచూసి, మీసేవా ద్వారా దరఖాస్తు చేసి, తహసీల్దార్ ఈ-సంతకంతో జారీ చేస్తాను.",hi:"राजस्व रिकॉर्ड से मिलान कर मीसेवा से आवेदन कर तहसीलदार ई-हस्ताक्षर सहित जारी करूँगा।",en:"I'll match revenue records, apply via MeeSeva, and issue it with the Tahsildar's e-signature."},
 filing:{te:"రికార్డులు సరిచూస్తున్నాను… మీసేవాకు పంపుతున్నాను…",hi:"रिकॉर्ड मिला रहा हूँ… मीसेवा को भेज रहा हूँ…",en:"Matching records… sending to MeeSeva…"},
 steps:[
  {n:{te:"రికార్డుల సరిపోలిక",hi:"रिकॉर्ड मिलान",en:"Records match"},f:{te:"రెవెన్యూ శాఖ",hi:"राजस्व विभाग",en:"Revenue dept"},s:{te:"ధృవీకరించబడింది ✓",hi:"सत्यापित ✓",en:"Verified ✓"}},
  {n:{te:"దరఖాస్తు",hi:"आवेदन",en:"Application"},f:{te:"మీసేవా",hi:"मीसेवा",en:"MeeSeva"},s:{te:"సమర్పించబడింది ✓",hi:"प्रस्तुत ✓",en:"Filed ✓"}},
  {n:{te:"ధృవపత్రం",hi:"प्रमाणपत्र",en:"Certificate"},f:{te:"తహసీల్దార్ ఈ-సంతకం",hi:"तहसीलदार ई-हस्ताक्षर",en:"Tahsildar e-sign"},s:{te:"జారీ చేయబడింది ✓",hi:"जारी ✓",en:"Issued ✓"}}],
 done:{te:"కుల ధృవీకరణ పత్రం డిజిటల్ సంతకంతో జారీ అయింది — అడ్మిషన్లు, ఉద్యోగాలు, స్కాలర్‌షిప్‌లకు చెల్లుతుంది.",hi:"जाति प्रमाणपत्र डिजिटल हस्ताक्षर सहित जारी — प्रवेश, नौकरी, छात्रवृत्ति हेतु मान्य।",en:"Caste certificate issued with digital signature — accepted for admissions, jobs, and scholarships."},
 certs:[
  {i:"📜",t:{te:"కుల ధృవీకరణ పత్రం",hi:"जाति प्रमाणपत्र",en:"Caste certificate"},s:{te:"జారీ చేయబడింది",hi:"जारी",en:"Issued"}},
  {i:"✍️",t:{te:"ఈ-సంతకం",hi:"ई-हस्ताक्षर",en:"e-Signed"},s:{te:"తహసీల్దార్",hi:"तहसीलदार",en:"Tahsildar"}}]},
/* ---------- 14. Land records ---------- */
{id:"land",icon:"🗺️",cat:"citizen",
 chip:{te:"భూమి రికార్డులు",hi:"भूमि रिकॉर्ड",en:"Land records"},
 query:{te:"నా భూమి రికార్డులు (అడంగల్, 1B) డౌన్‌లోడ్ చేసుకోవాలి.",hi:"मेरे भूमि रिकॉर्ड (अडंगळ, 1B) डाउनलोड करने हैं।",en:"I want to download my land records (Adangal, 1B)."},
 intro:{te:"సర్వే నంబర్‌తో ధరణి/మీభూమిలో వెతికి, పట్టాదార్ పాస్‌బుక్‌తో సరిచూసి డౌన్‌లోడ్ చేస్తాను.",hi:"सर्वे नंबर से धरणी/मीभूमि में खोजकर पट्टादार पासबुक से मिलान कर डाउनलोड करूँगा।",en:"I'll locate your survey number on Dharani/MeeBhoomi, match the pattadar passbook, and download."},
 filing:{te:"సర్వే నంబర్ వెతుకుతున్నాను… యాజమాన్యం సరిచూస్తున్నాను…",hi:"सर्वे नंबर खोज रहा हूँ… स्वामित्व मिला रहा हूँ…",en:"Locating the survey number… verifying ownership…"},
 steps:[
  {n:{te:"సర్వే నంబర్",hi:"सर्वे नंबर",en:"Survey number"},f:{te:"ధరణి/మీభూమి",hi:"धरणी/मीभूमि",en:"Dharani/MeeBhoomi"},s:{te:"కనుగొనబడింది ✓",hi:"मिला ✓",en:"Located ✓"}},
  {n:{te:"యాజమాన్య సరిపోలిక",hi:"स्वामित्व मिलान",en:"Ownership match"},f:{te:"పట్టాదార్ పాస్‌బుక్",hi:"पट्टादार पासबुक",en:"Pattadar passbook"},s:{te:"ధృవీకరించబడింది ✓",hi:"सत्यापित ✓",en:"Verified ✓"}},
  {n:{te:"డౌన్‌లోడ్",hi:"डाउनलोड",en:"Download"},f:{te:"అడంగల్ + 1B",hi:"अडंगळ + 1B",en:"Adangal + 1B"},s:{te:"సిద్ధం ✓",hi:"तैयार ✓",en:"Ready ✓"}}],
 done:{te:"మీ అడంగల్, 1-B, పాస్‌బుక్ వివరాలు డౌన్‌లోడ్‌కు సిద్ధం — ఉచితం, ఆఫీసుకు వెళ్లాల్సిన పనిలేదు.",hi:"आपके अडंगळ, 1-B, पासबुक विवरण डाउनलोड हेतु तैयार — निःशुल्क, कार्यालय जाने की ज़रूरत नहीं।",en:"Your Adangal, 1-B and passbook details are ready to download — free, no office visit."},
 certs:[
  {i:"🗺️",t:{te:"అడంగల్",hi:"अडंगळ",en:"Adangal"},s:{te:"డౌన్‌లోడ్ అయింది",hi:"डाउनलोड",en:"Downloaded"}},
  {i:"📖",t:{te:"ROR-1B",hi:"ROR-1B",en:"ROR-1B"},s:{te:"డౌన్‌లోడ్ అయింది",hi:"डाउनलोड",en:"Downloaded"}}]},
/* ---------- 15. ITR filing ---------- */
{id:"itreturn",icon:"🧾",cat:"citizen",
 chip:{te:"ITR ఫైలింగ్",hi:"ITR दाखिल",en:"ITR filing"},
 query:{te:"ఈ సంవత్సరం ITR ఫైల్ చేయాలి.",hi:"इस साल ITR दाखिल करना है।",en:"I need to file this year's ITR."},
 intro:{te:"AIS/TIS డేటా ఆటో-ఫిల్ చేసి, పాత vs కొత్త విధానం పోల్చి, ఆదాయపు పన్ను పోర్టల్‌లో ఫైల్ చేస్తాను.",hi:"AIS/TIS डेटा ऑटो-फिल कर पुरानी बनाम नई व्यवस्था तुलना कर आयकर पोर्टल पर दाखिल करूँगा।",en:"I'll auto-fill AIS/TIS data, compare old vs new regime, and file on the Income Tax portal."},
 filing:{te:"డేటా తెస్తున్నాను… పన్ను లెక్కిస్తున్నాను…",hi:"डेटा ला रहा हूँ… कर गणना कर रहा हूँ…",en:"Fetching data… computing tax…"},
 steps:[
  {n:{te:"డేటా సేకరణ",hi:"डेटा संग्रह",en:"Data fetch"},f:{te:"AIS/TIS ప్రీ-ఫిల్",hi:"AIS/TIS प्री-फिल",en:"AIS/TIS pre-fill"},s:{te:"దిగుమతి అయింది ✓",hi:"आयात ✓",en:"Imported ✓"}},
  {n:{te:"పన్ను లెక్క",hi:"कर गणना",en:"Computation"},f:{te:"పాత vs కొత్త విధానం",hi:"पुरानी बनाम नई व्यवस्था",en:"Old vs new regime"},s:{te:"ఆప్టిమైజ్ ✓",hi:"अनुकूलित ✓",en:"Optimised ✓"}},
  {n:{te:"ఫైలింగ్ + ఈ-వెరిఫై",hi:"दाखिल + ई-सत्यापन",en:"Filing + e-verify"},f:{te:"ఆదాయపు పన్ను పోర్టల్",hi:"आयकर पोर्टल",en:"Income Tax portal"},s:{te:"పూర్తయింది ✓",hi:"पूर्ण ✓",en:"Done ✓"}}],
 done:{te:"ITR ఫైల్ చేసి ఈ-వెరిఫై అయింది! రిఫండ్ ఉంటే మీ ప్రీ-వాలిడేటెడ్ బ్యాంకు ఖాతాలోకి వస్తుంది.",hi:"ITR दाखिल और ई-सत्यापित! रिफंड होगा तो आपके प्री-वैलिडेटेड बैंक खाते में आएगा।",en:"ITR filed and e-verified! Any refund will hit your pre-validated bank account."},
 certs:[
  {i:"🧾",t:{te:"ITR-V",hi:"ITR-V",en:"ITR-V"},s:{te:"అక్‌నాలెడ్జ్ అయింది",hi:"पावती",en:"Acknowledged"}},
  {i:"💸",t:{te:"రిఫండ్",hi:"रिफंड",en:"Refund"},s:{te:"ఆటో-ట్రాక్",hi:"ऑटो-ट्रैक",en:"Auto-tracked"}}]},
/* ---------- 16. PF claim ---------- */
{id:"epfo",icon:"🏦",cat:"citizen",
 chip:{te:"PF క్లెయిమ్",hi:"PF दावा",en:"PF claim"},
 query:{te:"నా PF డబ్బులు విత్‌డ్రా చేసుకోవాలి.",hi:"मेरे PF पैसे निकालने हैं।",en:"I want to withdraw my PF money."},
 intro:{te:"UAN-KYC సరిచూసి, EPFO పోర్టల్‌లో క్లెయిమ్ వేస్తాను — డబ్బు నేరుగా బ్యాంకు ఖాతాలోకి.",hi:"UAN-KYC जाँचकर EPFO पोर्टल पर दावा करूँगा — पैसा सीधे बैंक खाते में।",en:"I'll verify UAN-KYC and file the claim on the EPFO portal — money straight to your bank."},
 filing:{te:"KYC సరిచూస్తున్నాను… క్లెయిమ్ వేస్తున్నాను…",hi:"KYC जाँच रहा हूँ… दावा कर रहा हूँ…",en:"Checking KYC… filing the claim…"},
 steps:[
  {n:{te:"KYC పరిశీలన",hi:"KYC जाँच",en:"KYC check"},f:{te:"UAN · ఆధార్ · బ్యాంకు",hi:"UAN · आधार · बैंक",en:"UAN · Aadhaar · bank"},s:{te:"ధృవీకరించబడింది ✓",hi:"सत्यापित ✓",en:"Verified ✓"}},
  {n:{te:"క్లెయిమ్",hi:"दावा",en:"Claim"},f:{te:"EPFO పోర్టల్",hi:"EPFO पोर्टल",en:"EPFO portal"},s:{te:"సమర్పించబడింది ✓",hi:"प्रस्तुत ✓",en:"Filed ✓"}},
  {n:{te:"సెటిల్‌మెంట్",hi:"निपटान",en:"Settlement"},f:{te:"DBT",hi:"DBT",en:"DBT"},s:{te:"ప్రారంభమైంది ✓",hi:"प्रारंभ ✓",en:"Initiated ✓"}}],
 done:{te:"PF క్లెయిమ్ సమర్పించబడింది! డబ్బు మీ బ్యాంకు ఖాతాలో జమ అవుతుంది — ఇక్కడే లైవ్ ట్రాక్ చేయండి.",hi:"PF दावा प्रस्तुत! पैसा आपके बैंक खाते में जमा होगा — यहीं लाइव ट्रैक करें।",en:"PF claim filed! The amount will be credited to your bank account — track it live here."},
 certs:[
  {i:"🧾",t:{te:"క్లెయిమ్ ID",hi:"दावा ID",en:"Claim ID"},s:{te:"జారీ చేయబడింది",hi:"जारी",en:"Generated"}},
  {i:"🏦",t:{te:"సెటిల్‌మెంట్",hi:"निपटान",en:"Settlement"},s:{te:"ప్రాసెస్‌లో ఉంది",hi:"प्रक्रिया में",en:"In process"}}]},
/* ---------- 17. Voter ID ---------- */
{id:"voter",icon:"🗳️",cat:"citizen",
 chip:{te:"ఓటర్ ID",hi:"वोटर ID",en:"Voter ID"},
 query:{te:"ఓటర్ ID కోసం నమోదు చేసుకోవాలి.",hi:"वोटर ID हेतु पंजीकरण करना है।",en:"I want to register for a voter ID."},
 intro:{te:"అర్హత చూసి, ECI పోర్టల్‌లో ఫారం-6 వేసి, డిజిటల్ ఓటర్ ID (e-EPIC) జారీ చేస్తాను.",hi:"पात्रता देखकर ECI पोर्टल पर फॉर्म-6 भरूँगा और डिजिटल वोटर ID (e-EPIC) जारी करूँगा।",en:"I'll check eligibility, file Form-6 on the ECI portal, and issue your digital voter ID (e-EPIC)."},
 filing:{te:"అర్హత చూస్తున్నాను… ఫారం-6 నింపుతున్నాను…",hi:"पात्रता देख रहा हूँ… फॉर्म-6 भर रहा हूँ…",en:"Checking eligibility… filling Form-6…"},
 steps:[
  {n:{te:"అర్హత",hi:"पात्रता",en:"Eligibility"},f:{te:"వయస్సు 18+",hi:"आयु 18+",en:"Age 18+"},s:{te:"నిర్ధారించబడింది ✓",hi:"पुष्ट ✓",en:"Confirmed ✓"}},
  {n:{te:"ఫారం-6",hi:"फॉर्म-6",en:"Form 6"},f:{te:"ECI పోర్టల్",hi:"ECI पोर्टल",en:"ECI portal"},s:{te:"సమర్పించబడింది ✓",hi:"प्रस्तुत ✓",en:"Filed ✓"}},
  {n:{te:"e-EPIC",hi:"e-EPIC",en:"e-EPIC"},f:{te:"డిజిటల్ ఓటర్ ID",hi:"डिजिटल वोटर ID",en:"Digital voter ID"},s:{te:"జారీ చేయబడింది ✓",hi:"जारी ✓",en:"Issued ✓"}}],
 done:{te:"ఓటు వేయడానికి నమోదు అయ్యారు! మీ డిజిటల్ ఓటర్ ID (e-EPIC) డౌన్‌లోడ్‌కు సిద్ధం.",hi:"मतदान हेतु पंजीकृत! आपका डिजिटल वोटर ID (e-EPIC) डाउनलोड हेतु तैयार।",en:"You're registered to vote! Your digital voter ID (e-EPIC) is ready to download."},
 certs:[
  {i:"🗳️",t:{te:"నమోదు",hi:"पंजीकरण",en:"Registration"},s:{te:"పూర్తయింది",hi:"पूर्ण",en:"Complete"}},
  {i:"🪪",t:{te:"e-EPIC",hi:"e-EPIC",en:"e-EPIC"},s:{te:"జారీ చేయబడింది",hi:"जारी",en:"Issued"}}]},
/* ---------- 18. Pvt Ltd incorporation ---------- */
{id:"biz",icon:"🏢",cat:"business",
 chip:{te:"కంపెనీ ఏర్పాటు",hi:"कंपनी गठन",en:"Incorporate company"},
 query:{te:"నా స్టార్టప్ కోసం ప్రైవేట్ లిమిటెడ్ కంపెనీ రిజిస్టర్ చేయాలి.",hi:"मेरे स्टार्टअप के लिए प्राइवेट लिमिटेड कंपनी रजिस्टर करनी है।",en:"I need to register a private limited company for my startup."},
 intro:{te:"శుభాకాంక్షలు! కంపెనీ ఏర్పాటులో 5 శాఖలు ఉంటాయి — అన్నింటినీ ఒకే వర్క్‌ఫ్లోలో చేస్తాను: MCA, ఆదాయపు పన్ను శాఖ, GST, EPFO, ESIC.",hi:"बधाई! कंपनी गठन में 5 विभाग शामिल हैं — सब एक ही वर्कफ़्लो में: MCA, आयकर विभाग, GST, EPFO, ESIC।",en:"Congratulations! Company formation spans 5 departments — I'll run them as one workflow: MCA, Income Tax, GST, EPFO, ESIC."},
 filing:{te:"MCAకి పేరు రిజర్వేషన్ వేసి, SPICe+ ఫారం ద్వారా అన్నీ కలిపి ఫైల్ చేస్తున్నాను…",hi:"MCA में नाम आरक्षण कर SPICe+ से एक साथ दाखिल कर रहा हूँ…",en:"Reserving the name with MCA and filing everything together via SPICe+…"},
 steps:[
  {n:{te:"పేరు రిజర్వేషన్ — MCA",hi:"नाम आरक्षण — MCA",en:"Name reservation — MCA"},f:{te:"SPICe+ · RUN",hi:"SPICe+ · RUN",en:"SPICe+ · RUN"},s:{te:"1 రోజులో ఆమోదం",hi:"1 दिन में स्वीकृत",en:"Approved in 1 day"}},
  {n:{te:"ఇన్కార్పొరేషన్ + DIN — MCA",hi:"निगमन + DIN — MCA",en:"Incorporation + DIN — MCA"},f:{te:"ఇన్కార్పొరేషన్ సర్టిఫికెట్",hi:"निगमन प्रमाणपत्र",en:"Certificate of Incorporation"},s:{te:"ఆటో-క్లియర్",hi:"ऑटो-क्लियर",en:"Auto-cleared"}},
  {n:{te:"PAN & TAN — ఆదాయపు పన్ను శాఖ",hi:"PAN व TAN — आयकर विभाग",en:"PAN & TAN — Income Tax Dept"},f:{te:"ఇన్కార్పొరేషన్‌తో జారీ",hi:"निगमन के साथ जारी",en:"Issued with incorporation"},s:{te:"ఆటో-అలాట్",hi:"ऑटो-आवंटित",en:"Auto-allotted"}},
  {n:{te:"GSTIN — GSTN (కేంద్రం+రాష్ట్రం)",hi:"GSTIN — GSTN (केंद्र+राज्य)",en:"GSTIN — GSTN (Centre+State)"},f:{te:"రిజిస్ట్రేషన్",hi:"पंजीकरण",en:"Registration"},s:{te:"డీమ్డ్ అనుమతి",hi:"डीम्ड स्वीकृति",en:"Deemed approval"}},
  {n:{te:"EPFO & ESIC — కార్మిక శాఖ",hi:"EPFO व ESIC — श्रम विभाग",en:"EPFO & ESIC — Labour"},f:{te:"ఎంప్లాయర్ కోడ్‌లు",hi:"नियोक्ता कोड",en:"Employer codes"},s:{te:"ఆటో-రిజిస్టర్",hi:"ऑटो-पंजीकृत",en:"Auto-registered"}}],
 done:{te:"అభినందనలు! 6 నిమిషాల 30 సెకన్లలో 5 రిజిస్ట్రేషన్లు పూర్తి. ఇన్కార్పొరేషన్ సర్టిఫికెట్, PAN, TAN, GSTIN — అన్నీ మీ డిజిలాకర్‌లో.",hi:"बधाई! 6 मिनट 30 सेकंड में 5 पंजीकरण पूर्ण। निगमन प्रमाणपत्र, PAN, TAN, GSTIN — सब आपके डिजिलॉकर में।",en:"Congratulations! All 5 registrations in 6 minutes 30 seconds. Certificate of Incorporation, PAN, TAN, GSTIN — all in your DigiLocker."},
 certs:[
  {i:"✅",t:{te:"ఇన్కార్పొరేషన్ సర్టిఫికెట్",hi:"निगमन प्रमाणपत्र",en:"Certificate of Incorporation"},s:{te:"CIN జారీ",hi:"CIN जारी",en:"CIN issued"}},
  {i:"✅",t:{te:"PAN + TAN",hi:"PAN + TAN",en:"PAN + TAN"},s:{te:"ఆటో-అలాట్",hi:"ऑटो-आवंटित",en:"Auto-allotted"}},
  {i:"✅",t:{te:"GSTIN",hi:"GSTIN",en:"GSTIN"},s:{te:"డీమ్డ్ అనుమతి",hi:"डीम्ड स्वीकृति",en:"Deemed approval"}},
  {i:"✅",t:{te:"EPFO / ESIC కోడ్‌లు",hi:"EPFO / ESIC कोड",en:"EPFO / ESIC codes"},s:{te:"ఎంప్లాయర్ రిజిస్ట్రేషన్",hi:"नियोक्ता पंजीकरण",en:"Employer registration"}}]},
/* ---------- 19. GST registration ---------- */
{id:"gst",icon:"🧮",cat:"business",
 chip:{te:"GST రిజిస్ట్రేషన్",hi:"GST पंजीकरण",en:"GST registration"},
 query:{te:"నా వ్యాపారానికి GST రిజిస్ట్రేషన్ కావాలి.",hi:"मेरे व्यवसाय के लिए GST पंजीकरण चाहिए।",en:"My business needs GST registration."},
 intro:{te:"PAN ధృవీకరించి, ఆధార్ అథెంటికేషన్‌తో GST పోర్టల్‌లో రిజిస్టర్ చేస్తాను.",hi:"PAN सत्यापित कर आधार प्रमाणीकरण से GST पोर्टल पर पंजीकृत करूँगा।",en:"I'll verify PAN and register on the GST portal with Aadhaar authentication."},
 filing:{te:"PAN సరిచూస్తున్నాను… ఆధార్ అథెంటికేషన్ చేస్తున్నాను…",hi:"PAN मिला रहा हूँ… आधार प्रमाणीकरण कर रहा हूँ…",en:"Verifying PAN… doing Aadhaar authentication…"},
 steps:[
  {n:{te:"PAN ధృవీకరణ",hi:"PAN सत्यापन",en:"PAN validation"},f:{te:"GSTN",hi:"GSTN",en:"GSTN"},s:{te:"ధృవీకరించబడింది ✓",hi:"सत्यापित ✓",en:"Verified ✓"}},
  {n:{te:"ఆధార్ అథెంటికేషన్",hi:"आधार प्रमाणीकरण",en:"Aadhaar authentication"},f:{te:"OTP",hi:"OTP",en:"OTP"},s:{te:"పూర్తయింది ✓",hi:"पूर्ण ✓",en:"Done ✓"}},
  {n:{te:"GSTIN",hi:"GSTIN",en:"GSTIN"},f:{te:"డీమ్డ్ అనుమతి",hi:"डीम्ड स्वीकृति",en:"Deemed approval"},s:{te:"జారీ చేయబడింది ✓",hi:"जारी ✓",en:"Issued ✓"}}],
 done:{te:"GSTIN జారీ అయింది! మొదటి రోజు నుంచే పన్ను వసూలు చేసి, ఇన్‌పుట్ క్రెడిట్ క్లెయిమ్ చేయండి.",hi:"GSTIN जारी! पहले दिन से कर वसूलें और इनपुट क्रेडिट दावा करें।",en:"GSTIN issued! Collect tax and claim input credit from day one."},
 certs:[
  {i:"🧾",t:{te:"GSTIN",hi:"GSTIN",en:"GSTIN"},s:{te:"యాక్టివ్",hi:"सक्रिय",en:"Active"}},
  {i:"📄",t:{te:"సర్టిఫికెట్",hi:"प्रमाणपत्र",en:"Certificate"},s:{te:"డౌన్‌లోడ్ అయింది",hi:"डाउनलोड",en:"Downloaded"}}]},
/* ---------- 20. Udyam MSME ---------- */
{id:"udyam",icon:"🏭",cat:"business",
 chip:{te:"ఉద్యమ్ MSME",hi:"उद्यम MSME",en:"Udyam MSME"},
 query:{te:"ఉద్యమ్‌లో MSMEగా రిజిస్టర్ చేసుకోవాలి.",hi:"उद्यम में MSME के रूप में पंजीकृत होना है।",en:"I want to register as an MSME on Udyam."},
 intro:{te:"ఆధార్ + PANతో ఉద్యమ్ పోర్టల్‌లో నమోదు చేస్తాను — ప్రాధాన్య రుణాలు, సబ్సిడీలకు తలుపు తెరుస్తుంది.",hi:"आधार + PAN से उद्यम पोर्टल पर पंजीकृत करूँगा — प्राथमिकता ऋण और सब्सिडी का द्वार खुलेगा।",en:"I'll register you on the Udyam portal with Aadhaar + PAN — opening priority loans and subsidies."},
 filing:{te:"ఆధార్ OTP ధృవీకరిస్తున్నాను… సంస్థ వివరాలు నమోదు చేస్తున్నాను…",hi:"आधार OTP सत्यापित कर रहा हूँ… उद्यम विवरण दर्ज कर रहा हूँ…",en:"Verifying Aadhaar OTP… entering enterprise details…"},
 steps:[
  {n:{te:"ఆధార్ + PAN",hi:"आधार + PAN",en:"Aadhaar + PAN"},f:{te:"OTP",hi:"OTP",en:"OTP"},s:{te:"ధృవీకరించబడింది ✓",hi:"सत्यापित ✓",en:"Verified ✓"}},
  {n:{te:"సంస్థ వివరాలు",hi:"उद्यम विवरण",en:"Enterprise details"},f:{te:"NIC కోడ్",hi:"NIC कोड",en:"NIC code"},s:{te:"వర్గీకరించబడింది ✓",hi:"वर्गीकृत ✓",en:"Classified ✓"}},
  {n:{te:"నమోదు",hi:"पंजीकरण",en:"Registration"},f:{te:"ఉద్యమ్ పోర్టల్",hi:"उद्यम पोर्टल",en:"Udyam portal"},s:{te:"పూర్తయింది ✓",hi:"पूर्ण ✓",en:"Complete ✓"}}],
 done:{te:"ఉద్యమ్ నమోదు అయింది! మీ MSME సర్టిఫికెట్ ప్రాధాన్య రుణాలు, సబ్సిడీలు, GeM యాక్సెస్‌ను అన్‌లాక్ చేస్తుంది.",hi:"उद्यम पंजीकृत! आपका MSME प्रमाणपत्र प्राथमिकता ऋण, सब्सिडी और GeM एक्सेस अनलॉक करता है।",en:"Udyam registered! Your MSME certificate unlocks priority loans, subsidies, and GeM access."},
 certs:[
  {i:"🏭",t:{te:"ఉద్యమ్ నంబర్",hi:"उद्यम संख्या",en:"Udyam number"},s:{te:"జారీ చేయబడింది",hi:"जारी",en:"Issued"}},
  {i:"📜",t:{te:"సర్టిఫికెట్",hi:"प्रमाणपत्र",en:"Certificate"},s:{te:"డిజిలాకర్‌లో",hi:"डिजिलॉकर में",en:"In DigiLocker"}}]},
/* ---------- 21. FSSAI licence ---------- */
{id:"fssai",icon:"🍽️",cat:"business",
 chip:{te:"FSSAI లైసెన్స్",hi:"FSSAI लाइसेंस",en:"FSSAI licence"},
 query:{te:"నా రెస్టారెంట్‌కు FSSAI లైసెన్స్ కావాలి.",hi:"मेरे रेस्टोरेंट के लिए FSSAI लाइसेंस चाहिए।",en:"My restaurant needs an FSSAI licence."},
 intro:{te:"వ్యాపార రకాన్ని బట్టి FoSCoSలో సరైన లైసెన్స్ కేటగిరీ ఎంచి, దరఖాస్తు చేస్తాను.",hi:"व्यवसाय प्रकार अनुसार FoSCoS में सही लाइसेंस श्रेणी चुनकर आवेदन करूँगा।",en:"I'll pick the right licence category on FoSCoS for your business type and apply."},
 filing:{te:"వ్యాపార రకం చూస్తున్నాను… పత్రాలు అప్‌లోడ్ చేస్తున్నాను…",hi:"व्यवसाय प्रकार देख रहा हूँ… दस्तावेज़ अपलोड कर रहा हूँ…",en:"Checking business type… uploading documents…"},
 steps:[
  {n:{te:"వ్యాపార వర్గీకరణ",hi:"व्यवसाय वर्गीकरण",en:"Business type"},f:{te:"FoSCoS",hi:"FoSCoS",en:"FoSCoS"},s:{te:"వర్గీకరించబడింది ✓",hi:"वर्गीकृत ✓",en:"Classified ✓"}},
  {n:{te:"పత్రాలు",hi:"दस्तावेज़",en:"Documents"},f:{te:"FSSAI",hi:"FSSAI",en:"FSSAI"},s:{te:"ధృవీకరించబడింది ✓",hi:"सत्यापित ✓",en:"Verified ✓"}},
  {n:{te:"లైసెన్స్",hi:"लाइसेंस",en:"Licence"},f:{te:"5 సంవత్సరాలు",hi:"5 वर्ष",en:"5 years"},s:{te:"జారీ చేయబడింది ✓",hi:"जारी ✓",en:"Issued ✓"}}],
 done:{te:"FSSAI లైసెన్స్ జారీ అయింది! ప్యాకేజింగ్‌పై, దుకాణంలో నంబర్ ప్రదర్శించండి.",hi:"FSSAI लाइसेंस जारी! पैकेजिंग और दुकान पर नंबर प्रदर्शित करें।",en:"FSSAI licence issued! Display the number on packaging and at your outlet."},
 certs:[
  {i:"🍽️",t:{te:"FSSAI లైసెన్స్",hi:"FSSAI लाइसेंस",en:"FSSAI licence"},s:{te:"5 సంవత్సరాల చెల్లుబాటు",hi:"5 वर्ष वैधता",en:"5-year validity"}},
  {i:"🔢",t:{te:"లైసెన్స్ నంబర్",hi:"लाइसेंस संख्या",en:"Licence No."},s:{te:"జారీ చేయబడింది",hi:"जारी",en:"Generated"}}]},
/* ---------- 22. Startup India recognition ---------- */
{id:"startup",icon:"🚀",cat:"business",
 chip:{te:"స్టార్టప్ గుర్తింపు",hi:"स्टार्टअप मान्यता",en:"Startup recognition"},
 query:{te:"స్టార్టప్ ఇండియా గుర్తింపు కావాలి.",hi:"स्टार्टअप इंडिया मान्यता चाहिए।",en:"I want Startup India recognition."},
 intro:{te:"MCA రికార్డుతో సరిచూసి, స్టార్టప్ ఇండియా పోర్టల్‌లో దరఖాస్తు చేసి DPIIT గుర్తింపు తెస్తాను.",hi:"MCA रिकॉर्ड से मिलान कर स्टार्टअप इंडिया पोर्टल पर आवेदन कर DPIIT मान्यता दिलाऊँगा।",en:"I'll match your MCA record, apply on the Startup India portal, and secure DPIIT recognition."},
 filing:{te:"MCA రికార్డు సరిచూస్తున్నాను… దరఖాస్తు పంపుతున్నాను…",hi:"MCA रिकॉर्ड मिला रहा हूँ… आवेदन भेज रहा हूँ…",en:"Matching the MCA record… sending the application…"},
 steps:[
  {n:{te:"సంస్థ పరిశీలన",hi:"संस्था जाँच",en:"Entity check"},f:{te:"MCA",hi:"MCA",en:"MCA"},s:{te:"ధృవీకరించబడింది ✓",hi:"सत्यापित ✓",en:"Verified ✓"}},
  {n:{te:"దరఖాస్తు",hi:"आवेदन",en:"Application"},f:{te:"స్టార్టప్ ఇండియా",hi:"स्टार्टअप इंडिया",en:"Startup India"},s:{te:"సమర్పించబడింది ✓",hi:"प्रस्तुत ✓",en:"Filed ✓"}},
  {n:{te:"గుర్తింపు",hi:"मान्यता",en:"Recognition"},f:{te:"DPIIT",hi:"DPIIT",en:"DPIIT"},s:{te:"మంజూరు ✓",hi:"प्रदत्त ✓",en:"Granted ✓"}}],
 done:{te:"DPIIT గుర్తింపు లభించింది! పన్ను సెలవు అర్హత, స్వీయ-ధృవీకరణ, ఫాస్ట్-ట్రాక్ IP ఇప్పుడు మీకు అందుబాటులో.",hi:"DPIIT मान्यता मिली! कर अवकाश पात्रता, स्व-प्रमाणन, फास्ट-ट्रैक IP अब आपके लिए उपलब्ध।",en:"DPIIT recognised! Tax holiday eligibility, self-certification, and fast-track IP are now open to you."},
 certs:[
  {i:"🚀",t:{te:"DPIIT సర్టిఫికెట్",hi:"DPIIT प्रमाणपत्र",en:"DPIIT certificate"},s:{te:"జారీ చేయబడింది",hi:"जारी",en:"Issued"}},
  {i:"🎁",t:{te:"ప్రయోజనాలు",hi:"लाभ",en:"Benefits"},s:{te:"అన్‌లాక్ అయ్యాయి",hi:"अनलॉक",en:"Unlocked"}}]},
/* ---------- 23. GeM seller ---------- */
{id:"gem",icon:"🏪",cat:"business",
 chip:{te:"GeM సెల్లర్",hi:"GeM विक्रेता",en:"GeM seller"},
 query:{te:"GeMలో సెల్లర్‌గా చేరాలి.",hi:"GeM पर विक्रेता बनना है।",en:"I want to join GeM as a seller."},
 intro:{te:"సంస్థ వివరాలు ధృవీకరించి, కేటలాగ్ లిస్ట్ చేసి, GeM సెల్లర్ ID యాక్టివేట్ చేస్తాను.",hi:"संस्था विवरण सत्यापित कर कैटलॉग सूचीबद्ध कर GeM विक्रेता ID सक्रिय करूँगा।",en:"I'll verify organisation details, list your catalogue, and activate your GeM seller ID."},
 filing:{te:"సంస్థ ధృవీకరిస్తున్నాను… కేటలాగ్ అప్‌లోడ్ చేస్తున్నాను…",hi:"संस्था सत्यापित कर रहा हूँ… कैटलॉग अपलोड कर रहा हूँ…",en:"Verifying the organisation… uploading the catalogue…"},
 steps:[
  {n:{te:"సంస్థ",hi:"संस्था",en:"Organisation"},f:{te:"PAN/GSTIN",hi:"PAN/GSTIN",en:"PAN/GSTIN"},s:{te:"ధృవీకరించబడింది ✓",hi:"सत्यापित ✓",en:"Verified ✓"}},
  {n:{te:"కేటలాగ్",hi:"कैटलॉग",en:"Catalogue"},f:{te:"ఉత్పత్తులు",hi:"उत्पाद",en:"Products"},s:{te:"లిస్ట్ అయింది ✓",hi:"सूचीबद्ध ✓",en:"Listed ✓"}},
  {n:{te:"సెల్లర్ ID",hi:"विक्रेता ID",en:"Seller ID"},f:{te:"GeM",hi:"GeM",en:"GeM"},s:{te:"యాక్టివేట్ ✓",hi:"सक्रिय ✓",en:"Activated ✓"}}],
 done:{te:"మీరు GeM సెల్లర్ అయ్యారు! ప్రభుత్వ టెండర్లలో బిడ్ వేయండి — చెల్లింపులు సకాలంలో, ప్రతిసారీ.",hi:"आप GeM विक्रेता बने! सरकारी निविदाओं में बोली लगाएँ — भुगतान समय पर, हर बार।",en:"You're a GeM seller! Bid on government tenders and get paid on time, every time."},
 certs:[
  {i:"🏪",t:{te:"సెల్లర్ ID",hi:"विक्रेता ID",en:"Seller ID"},s:{te:"యాక్టివేట్ అయింది",hi:"सक्रिय",en:"Activated"}},
  {i:"📦",t:{te:"కేటలాగ్",hi:"कैटलॉग",en:"Catalogue"},s:{te:"లైవ్",hi:"लाइव",en:"Live"}}]},
/* ---------- 24. Import-Export Code ---------- */
{id:"iec",icon:"🌐",cat:"business",
 chip:{te:"ఎగుమతి-దిగుమతి కోడ్",hi:"आयात-निर्यात कोड",en:"Import-export code"},
 query:{te:"ఎగుమతి చేయాలంటే IEC కోడ్ కావాలి.",hi:"निर्यात हेतु IEC कोड चाहिए।",en:"I need an IEC code to start exporting."},
 intro:{te:"PAN + బ్యాంకు వివరాలతో DGFT పోర్టల్‌లో ANF-2A దరఖాస్తు చేసి, జీవితకాల IEC తెస్తాను.",hi:"PAN + बैंक विवरण से DGFT पोर्टल पर ANF-2A आवेदन कर आजीवन IEC दिलाऊँगा।",en:"I'll file ANF-2A on the DGFT portal with PAN + bank details and get you a lifetime IEC."},
 filing:{te:"PAN, బ్యాంకు సరిచూస్తున్నాను… ANF-2A నింపుతున్నాను…",hi:"PAN, बैंक मिला रहा हूँ… ANF-2A भर रहा हूँ…",en:"Verifying PAN and bank… filling ANF-2A…"},
 steps:[
  {n:{te:"PAN + బ్యాంకు",hi:"PAN + बैंक",en:"PAN + bank"},f:{te:"DGFT",hi:"DGFT",en:"DGFT"},s:{te:"ధృవీకరించబడింది ✓",hi:"सत्यापित ✓",en:"Verified ✓"}},
  {n:{te:"దరఖాస్తు",hi:"आवेदन",en:"Application"},f:{te:"ANF-2A",hi:"ANF-2A",en:"ANF-2A"},s:{te:"సమర్పించబడింది ✓",hi:"प्रस्तुत ✓",en:"Filed ✓"}},
  {n:{te:"IEC",hi:"IEC",en:"IEC"},f:{te:"జీవితకాల చెల్లుబాటు",hi:"आजीवन वैधता",en:"Lifetime validity"},s:{te:"జారీ చేయబడింది ✓",hi:"जारी ✓",en:"Issued ✓"}}],
 done:{te:"IEC జారీ అయింది — జీవితకాలం చెల్లుతుంది. దిగుమతి, ఎగుమతులకు మీరు సిద్ధం.",hi:"IEC जारी — आजीवन मान्य। आयात-निर्यात हेतु आप तैयार।",en:"IEC issued — valid for life. You're cleared to import and export."},
 certs:[
  {i:"🌐",t:{te:"IEC",hi:"IEC",en:"IEC"},s:{te:"జీవితకాల చెల్లుబాటు",hi:"आजीवन वैधता",en:"Lifetime validity"}},
  {i:"📜",t:{te:"సర్టిఫికెట్",hi:"प्रमाणपत्र",en:"Certificate"},s:{te:"జారీ చేయబడింది",hi:"जारी",en:"Issued"}}]},
/* ---------- 25. Shops & Establishments ---------- */
{id:"shops",icon:"🏬",cat:"business",
 chip:{te:"షాపుల రిజిస్ట్రేషన్",hi:"दुकान पंजीकरण",en:"Shops registration"},
 query:{te:"నా దుకాణాన్ని షాప్స్ యాక్ట్‌లో రిజిస్టర్ చేయాలి.",hi:"मेरी दुकान का शॉप्स एक्ट में पंजीकरण करना है।",en:"I need to register my shop under the Shops Act."},
 intro:{te:"కార్మిక శాఖ పోర్టల్‌లో సంస్థ వివరాలు నమోదు చేసి, రిజిస్ట్రేషన్ సర్టిఫికెట్ తెస్తాను.",hi:"श्रम विभाग पोर्टल पर संस्था विवरण दर्ज कर पंजीकरण प्रमाणपत्र दिलाऊँगा।",en:"I'll record establishment details on the labour department portal and fetch the registration certificate."},
 filing:{te:"సంస్థ వివరాలు నమోదు చేస్తున్నాను… దరఖాస్తు పంపుతున్నాను…",hi:"संस्था विवरण दर्ज कर रहा हूँ… आवेदन भेज रहा हूँ…",en:"Recording establishment details… sending the application…"},
 steps:[
  {n:{te:"సంస్థ వివరాలు",hi:"संस्था विवरण",en:"Establishment details"},f:{te:"కార్మిక శాఖ",hi:"श्रम विभाग",en:"Labour dept"},s:{te:"నమోదు అయింది ✓",hi:"दर्ज ✓",en:"Recorded ✓"}},
  {n:{te:"రిజిస్ట్రేషన్",hi:"पंजीकरण",en:"Registration"},f:{te:"రాష్ట్ర పోర్టల్",hi:"राज्य पोर्टल",en:"State portal"},s:{te:"సమర్పించబడింది ✓",hi:"प्रस्तुत ✓",en:"Filed ✓"}},
  {n:{te:"సర్టిఫికెట్",hi:"प्रमाणपत्र",en:"Certificate"},f:{te:"ఆటో-అనుమతి",hi:"ऑटो-स्वीकृति",en:"Auto-approved"},s:{te:"జారీ చేయబడింది ✓",hi:"जारी ✓",en:"Issued ✓"}}],
 done:{te:"రిజిస్ట్రేషన్ సర్టిఫికెట్ జారీ అయింది! కరెంట్ ఖాతా తెరవడానికి, సిబ్బందిని నియమించడానికి తప్పనిసరి.",hi:"पंजीकरण प्रमाणपत्र जारी! चालू खाता खोलने और स्टाफ रखने हेतु अनिवार्य।",en:"Registration certificate issued! Mandatory for opening a current account and hiring staff."},
 certs:[
  {i:"🏬",t:{te:"రిజిస్ట్రేషన్",hi:"पंजीकरण",en:"Registration"},s:{te:"జారీ చేయబడింది",hi:"जारी",en:"Issued"}},
  {i:"📜",t:{te:"సర్టిఫికెట్",hi:"प्रमाणपत्र",en:"Certificate"},s:{te:"డౌన్‌లోడ్ అయింది",hi:"डाउनलोड",en:"Downloaded"}}]}
];
