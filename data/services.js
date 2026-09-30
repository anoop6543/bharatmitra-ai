/* ============================================================
   BharatMitra AI — service directory (25 entries, trilingual)
   url: a VERIFIED official portal link, or null = placeholder
   (never link a guessed/unverified URL).
   ============================================================ */
window.SERVICES = [
/* ---------- 1. Aadhaar ---------- */
{id:"aadhaar",icon:"🆔",cat:"citizen",level:"centre",url:"https://uidai.gov.in",
 name:{te:"ఆధార్ సేవలు",hi:"आधार सेवाएँ",en:"Aadhaar services"},
 dept:{te:"UIDAI",hi:"UIDAI",en:"UIDAI"},
 steps:[
  {te:"నమోదు కేంద్రంలో అపాయింట్‌మెంట్ బుక్ చేయండి",hi:"नामांकन केंद्र पर अपॉइंटमेंट बुक करें",en:"Book an appointment at an enrolment centre"},
  {te:"వివరాలు లేదా బయోమెట్రిక్స్ అప్‌డేట్ చేయండి",hi:"विवरण या बायोमेट्रिक्स अपडेट करें",en:"Update demographics or biometrics"},
  {te:"ఈ-ఆధార్ డౌన్‌లోడ్ చేయండి లేదా PVC కార్డు ఆర్డర్ చేయండి",hi:"ई-आधार डाउनलोड करें या PVC कार्ड ऑर्डर करें",en:"Download e-Aadhaar or order a PVC card"}],
 reinvent:{te:"భారత్‌మిత్ర మీ రికార్డుల నుంచి అన్నీ ముందే నింపుతుంది — చాలా అప్‌డేట్‌లు ఒక వాయిస్ కమాండ్‌తో పూర్తి, సెంటర్‌కు వెళ్లాల్సిన పనిలేదు.",hi:"भारतमित्र आपके रिकॉर्ड से सब पहले भर देता है — अधिकांश अपडेट एक वॉइस कमांड पर पूर्ण, केंद्र जाने की ज़रूरत नहीं।",en:"BharatMitra pre-fills everything from your existing records — most updates finish on a voice command, no centre visit."}},
/* ---------- 2. DigiLocker ---------- */
{id:"digilocker",icon:"🗄️",cat:"citizen",level:"centre",url:"https://www.digilocker.gov.in",
 name:{te:"డిజిలాకర్",hi:"डिजिलॉकर",en:"DigiLocker"},
 dept:{te:"MeitY / డిజిటల్ ఇండియా",hi:"MeitY / डिजिटल इंडिया",en:"MeitY / Digital India"},
 steps:[
  {te:"ఆధార్‌తో సైన్ అప్ చేయండి",hi:"आधार से साइन अप करें",en:"Sign up with Aadhaar"},
  {te:"జారీ చేసిన పత్రాలను తెచ్చుకోండి (లైసెన్స్, పాన్, మార్క్‌షీట్లు)",hi:"जारी दस्तावेज़ लाएँ (लाइसेंस, पैन, मार्कशीट)",en:"Fetch issued documents (licence, PAN, marksheets)"},
  {te:"లింక్ ద్వారా పత్రాలను షేర్ చేయండి — జిరాక్స్ అవసరం లేదు",hi:"लिंक से दस्तावेज़ साझा करें — ज़ेरॉक्स की ज़रूरत नहीं",en:"Share documents via link — no photocopies needed"}],
 reinvent:{te:"ప్రతి భారత్‌మిత్ర లావాదేవీ సర్టిఫికెట్లను నేరుగా మీ డిజిలాకర్‌లో సేవ్ చేస్తుంది — పత్రాలు అడగడం, వెతకడం ఉండదు.",hi:"हर भारतमित्र लेनदेन प्रमाणपत्र सीधे आपके डिजिलॉकर में सहेजता है — दस्तावेज़ माँगने-ढूँढने की ज़रूरत नहीं।",en:"Every BharatMitra transaction saves certificates straight to your DigiLocker — no asking, no hunting for papers."}},
/* ---------- 3. Passport Seva ---------- */
{id:"passport",icon:"🛂",cat:"citizen",level:"centre",url:"https://www.passportindia.gov.in",
 name:{te:"పాస్‌పోర్ట్ సేవా",hi:"पासपोर्ट सेवा",en:"Passport Seva"},
 dept:{te:"విదేశాంగ మంత్రిత్వ శాఖ",hi:"विदेश मंत्रालय",en:"Ministry of External Affairs"},
 steps:[
  {te:"పోర్టల్‌లో రిజిస్టర్ చేసి దరఖాస్తు నింపండి",hi:"पोर्टल पर पंजीकरण कर आवेदन भरें",en:"Register on the portal and fill the application"},
  {te:"ఫీజు చెల్లించి PSK అపాయింట్‌మెంట్ బుక్ చేయండి",hi:"शुल्क देकर PSK अपॉइंटमेंट बुक करें",en:"Pay the fee and book a PSK appointment"},
  {te:"ఒరిజినల్ పత్రాలతో PSKకు వెళ్లండి — పోలీస్ వెరిఫికేషన్ తర్వాత పాస్‌పోర్ట్ వస్తుంది",hi:"मूल दस्तावेज़ों सहित PSK जाएँ — पुलिस सत्यापन के बाद पासपोर्ट मिलेगा",en:"Visit the PSK with originals — passport arrives after police verification"}],
 reinvent:{te:"దరఖాస్తు ఆటో-ఫిల్, ఫీజు UPIతో, స్లాట్ బుకింగ్ — ఒకే సంభాషణలో. స్టేటస్ ప్రతి దశలో మీకు తెలుస్తుంది.",hi:"आवेदन ऑटो-फिल, शुल्क UPI से, स्लॉट बुकिंग — एक ही संवाद में। हर चरण की स्थिति आपको मिलती रहेगी।",en:"Auto-filled application, UPI fee, slot booking — in one conversation, with status at every stage."}},
/* ---------- 4. Parivahan ---------- */
{id:"parivahan",icon:"🚗",cat:"citizen",level:"centre",url:"https://parivahan.gov.in",
 name:{te:"పరివాహన్ (DL/RC)",hi:"परिवहन (DL/RC)",en:"Parivahan (DL/RC)"},
 dept:{te:"రోడ్డు రవాణా మంత్రిత్వ శాఖ",hi:"सड़क परिवहन मंत्रालय",en:"Ministry of Road Transport"},
 steps:[
  {te:"సేవను ఎంచుకోండి (లైసెన్స్, RC, పర్మిట్)",hi:"सेवा चुनें (लाइसेंस, RC, परमिट)",en:"Choose the service (licence, RC, permit)"},
  {te:"ఆధార్ eKYCతో ధృవీకరించండి",hi:"आधार eKYC से सत्यापित करें",en:"Authenticate with Aadhaar eKYC"},
  {te:"ఫీజు చెల్లించి డిజిటల్ కాపీ డౌన్‌లోడ్ చేయండి",hi:"शुल्क देकर डिजिटल प्रति डाउनलोड करें",en:"Pay the fee and download the digital copy"}],
 reinvent:{te:"గడువు ముగిసే ముందే భారత్‌మిత్ర గుర్తు చేస్తుంది — రెన్యూవల్ ఒక వాయిస్ నోట్‌తో పూర్తి.",hi:"समाप्ति से पहले भारतमित्र याद दिलाता है — नवीनीकरण एक वॉइस नोट पर पूर्ण।",en:"BharatMitra reminds you before expiry — renewal finishes on a single voice note."}},
/* ---------- 5. Income Tax e-filing ---------- */
{id:"incometax",icon:"🧾",cat:"citizen",level:"centre",url:"https://www.incometax.gov.in",
 name:{te:"ఆదాయపు పన్ను ఈ-ఫైలింగ్",hi:"आयकर ई-फाइलिंग",en:"Income Tax e-filing"},
 dept:{te:"ఆదాయపు పన్ను శాఖ",hi:"आयकर विभाग",en:"Income Tax Department"},
 steps:[
  {te:"PAN/ఆధార్‌తో లాగిన్ చేయండి",hi:"PAN/आधार से लॉगिन करें",en:"Log in with PAN/Aadhaar"},
  {te:"ప్రీ-ఫిల్డ్ ITRను సరిచూసి, పాత vs కొత్త విధానం ఎంచుకోండి",hi:"प्री-फिल्ड ITR जाँचें, पुरानी बनाम नई व्यवस्था चुनें",en:"Review the pre-filled ITR, pick old vs new regime"},
  {te:"సమర్పించి ఈ-వెరిఫై చేయండి — రిఫండ్ ఆటో-ట్రాక్ అవుతుంది",hi:"प्रस्तुत कर ई-सत्यापित करें — रिफंड ऑटो-ट्रैक होगा",en:"Submit and e-verify — refund is auto-tracked"}],
 reinvent:{te:"AIS/TIS డేటా ఆటోమేటిక్‌గా వస్తుంది; ఏ విధానం లాభమో భారత్‌మిత్ర లెక్కించి చూపుతుంది.",hi:"AIS/TIS डेटा स्वतः आता है; कौन सी व्यवस्था लाभदायक है, भारतमित्र गणना कर दिखाता है।",en:"AIS/TIS data arrives automatically; BharatMitra computes and shows which regime saves you more."}},
/* ---------- 6. UMANG ---------- */
{id:"umang",icon:"📱",cat:"citizen",level:"centre",url:"https://web.umang.gov.in",
 name:{te:"ఉమంగ్ (UMANG)",hi:"उमंग (UMANG)",en:"UMANG"},
 dept:{te:"MeitY / NeGD",hi:"MeitY / NeGD",en:"MeitY / NeGD"},
 steps:[
  {te:"యాప్ లేదా వెబ్‌లో లాగిన్ చేయండి",hi:"ऐप या वेब पर लॉगिन करें",en:"Log in on the app or web"},
  {te:"2,000+ సేవల్లో కావాల్సింది వెతకండి",hi:"2,000+ सेवाओं में अपनी सेवा खोजें",en:"Find your service among 2,000+"},
  {te:"ఒకే లాగిన్‌తో కేంద్ర, రాష్ట్ర సేవలు వాడండి",hi:"एक ही लॉगिन से केंद्र-राज्य सेवाएँ उपयोग करें",en:"Use central and state services with one login"}],
 reinvent:{te:"భారత్‌మిత్ర ఉమంగ్ పైన కూర్చుంటుంది — యాప్‌లో వెతకాల్సిన పనిలేదు, అడిగితే చాలు.",hi:"भारतमित्र उमंग के ऊपर बैठता है — ऐप में खोजने की ज़रूरत नहीं, बस पूछिए।",en:"BharatMitra sits on top of UMANG — no hunting through the app, just ask."}},
/* ---------- 7. myScheme ---------- */
{id:"myscheme",icon:"🎯",cat:"citizen",level:"centre",url:"https://www.myscheme.gov.in",
 name:{te:"మైస్కీమ్ (myScheme)",hi:"माईस्कीम (myScheme)",en:"myScheme"},
 dept:{te:"MeitY / డిజిటల్ ఇండియా",hi:"MeitY / डिजिटल इंडिया",en:"MeitY / Digital India"},
 steps:[
  {te:"వయస్సు, ఆదాయం, వర్గం వంటి వివరాలు ఇవ్వండి",hi:"आयु, आय, श्रेणी जैसे विवरण दें",en:"Enter details like age, income, category"},
  {te:"మీకు అర్హత ఉన్న పథకాల జాబితా చూడండి",hi:"आपकी पात्र योजनाओं की सूची देखें",en:"See the schemes you're eligible for"},
  {te:"దరఖాస్తు లింక్‌తో నేరుగా అప్లై చేయండి",hi:"आवेदन लिंक से सीधे आवेदन करें",en:"Apply directly via the application link"}],
 reinvent:{te:"భారత్‌మిత్ర మీ ప్రొఫైల్ నుంచే అర్హతను ఆటో-చెక్ చేసి, పథకాలకు నేరుగా దరఖాస్తు చేస్తుంది.",hi:"भारतमित्र आपकी प्रोफ़ाइल से पात्रता ऑटो-जाँच कर योजनाओं में सीधे आवेदन करता है।",en:"BharatMitra auto-checks eligibility from your profile and applies to schemes directly."}},
/* ---------- 8. PM-KISAN ---------- */
{id:"pmkisan",icon:"🚜",cat:"citizen",level:"centre",url:"https://pmkisan.gov.in",
 name:{te:"పీఎం-కిసాన్",hi:"पीएम-किसान",en:"PM-KISAN"},
 dept:{te:"వ్యవసాయ మంత్రిత్వ శాఖ",hi:"कृषि मंत्रालय",en:"Ministry of Agriculture"},
 steps:[
  {te:"భూమి రికార్డు వివరాలతో నమోదు చేసుకోండి",hi:"भूमि रिकॉर्ड विवरण से पंजीकरण करें",en:"Register with land-record details"},
  {te:"ఆధార్ OTPతో eKYC పూర్తి చేయండి",hi:"आधार OTP से eKYC पूर्ण करें",en:"Complete eKYC with Aadhaar OTP"},
  {te:"లబ్ధిదారుల జాబితాలో పేరు, విడతల స్టేటస్ చూడండి",hi:"लाभार्थी सूची में नाम और किस्त स्थिति देखें",en:"Check your name in the beneficiary list and instalment status"}],
 reinvent:{te:"భూమి రికార్డు ఆటో-మ్యాచ్, eKYC, నమోదు — రైతు ఒక్క మాట చెప్తే చాలు.",hi:"भूमि रिकॉर्ड ऑटो-मैच, eKYC, पंजीकरण — किसान एक शब्द कहे, बस।",en:"Land-record auto-match, eKYC, enrolment — the farmer just has to say the word."}},
/* ---------- 9. PM-JAY (Ayushman) ---------- */
{id:"pmjay",icon:"🏥",cat:"citizen",level:"centre",url:"https://beneficiary.nha.gov.in",
 name:{te:"ఆయుష్మాన్ భారత్ (PM-JAY)",hi:"आयुष्मान भारत (PM-JAY)",en:"Ayushman Bharat (PM-JAY)"},
 dept:{te:"జాతీయ ఆరోగ్య ప్రాధికార సంస్థ",hi:"राष्ट्रीय स्वास्थ्य प्राधिकरण",en:"National Health Authority"},
 steps:[
  {te:"మొబైల్/ఆధార్‌తో అర్హత చూసుకోండి",hi:"मोबाइल/आधार से पात्रता देखें",en:"Check eligibility with mobile/Aadhaar"},
  {te:"కుటుంబ సభ్యుల eKYC పూర్తి చేయండి",hi:"परिवार सदस्यों का eKYC पूर्ण करें",en:"Complete eKYC for family members"},
  {te:"ఆయుష్మాన్ కార్డు డౌన్‌లోడ్ చేసుకోండి",hi:"आयुष्मान कार्ड डाउनलोड करें",en:"Download the Ayushman card"}],
 reinvent:{te:"అర్హత కనుగొనడం నుంచి కార్డు జారీ వరకు — ఆసుపత్రి బిల్లు భయం లేకుండా.",hi:"पात्रता खोज से कार्ड जारी तक — अस्पताल बिल का डर खत्म।",en:"From finding eligibility to card issuance — ending the fear of hospital bills."}},
/* ---------- 10. National Scholarship Portal ---------- */
{id:"nsp",icon:"🎓",cat:"citizen",level:"centre",url:"https://scholarships.gov.in",
 name:{te:"నేషనల్ స్కాలర్‌షిప్ పోర్టల్",hi:"नेशनल स्कॉलरशिप पोर्टल",en:"National Scholarship Portal"},
 dept:{te:"విద్యా మంత్రిత్వ శాఖ",hi:"शिक्षा मंत्रालय",en:"Ministry of Education"},
 steps:[
  {te:"రిజిస్టర్ చేసి ప్రొఫైల్ నింపండి",hi:"पंजीकरण कर प्रोफ़ाइल भरें",en:"Register and fill your profile"},
  {te:"అర్హత ఉన్న పథకాలకు దరఖాస్తు చేయండి",hi:"पात्र योजनाओं में आवेदन करें",en:"Apply to eligible schemes"},
  {te:"సంస్థ ధృవీకరణ, చెల్లింపు స్టేటస్ ట్రాక్ చేయండి",hi:"संस्थान सत्यापन और भुगतान स्थिति ट्रैक करें",en:"Track institute verification and payment status"}],
 reinvent:{te:"మార్కులు, ఆదాయం ఆధారంగా సరైన స్కాలర్‌షిప్‌లను భారత్‌మిత్రే కనుగొని దరఖాస్తు చేస్తుంది.",hi:"अंक और आय के आधार पर सही छात्रवृत्तियाँ भारतमित्र स्वयं खोजकर आवेदन करता है।",en:"BharatMitra finds the right scholarships from your marks and income, and applies."}},
/* ---------- 11. e-Shram ---------- */
{id:"eshram",icon:"🪪",cat:"citizen",level:"centre",url:"https://eshram.gov.in",
 name:{te:"ఈ-శ్రమ్",hi:"ई-श्रम",en:"e-Shram"},
 dept:{te:"కార్మిక మంత్రిత్వ శాఖ",hi:"श्रम मंत्रालय",en:"Ministry of Labour"},
 steps:[
  {te:"వృత్తి వివరాలతో నమోదు చేసుకోండి",hi:"व्यवसाय विवरण से पंजीकरण करें",en:"Register with occupation details"},
  {te:"ఆధార్, బ్యాంకు ఖాతా లింక్ చేయండి",hi:"आधार और बैंक खाता लिंक करें",en:"Link Aadhaar and bank account"},
  {te:"UAN కార్డు పొంది, పథకాలకు అర్హులు కండి",hi:"UAN कार्ड पाएँ और योजनाओं हेतु पात्र बनें",en:"Get the UAN card and become scheme-eligible"}],
 reinvent:{te:"ఒక్క వాయిస్ నోట్‌తో నమోదు — అసంఘటిత కార్మికుడు ఏ పథకానికీ దూరం కాకూడదు.",hi:"एक वॉइस नोट पर पंजीकरण — कोई असंगठित श्रमिक किसी योजना से दूर न रहे।",en:"Registration on one voice note — no unorganised worker left out of any scheme."}},
/* ---------- 12. MCA ---------- */
{id:"mca",icon:"🏢",cat:"business",level:"centre",url:"https://www.mca.gov.in",
 name:{te:"MCA — కంపెనీ వ్యవహారాలు",hi:"MCA — कंपनी मामले",en:"MCA — company affairs"},
 dept:{te:"కార్పొరేట్ వ్యవహారాల మంత్రిత్వ శాఖ",hi:"कॉर्पोरेट कार्य मंत्रालय",en:"Ministry of Corporate Affairs"},
 steps:[
  {te:"SPICe+లో పేరు రిజర్వేషన్ చేయండి",hi:"SPICe+ में नाम आरक्षण करें",en:"Reserve a name on SPICe+"},
  {te:"ఇన్కార్పొరేషన్ దరఖాస్తుతో DIN, PAN, TAN పొందండి",hi:"निगमन आवेदन से DIN, PAN, TAN पाएँ",en:"Get DIN, PAN, TAN with the incorporation application"},
  {te:"సర్టిఫికెట్ డౌన్‌లోడ్ చేసుకోండి",hi:"प्रमाणपत्र डाउनलोड करें",en:"Download the certificate"}],
 reinvent:{te:"పేరు నుంచి GSTIN, EPFO, ESIC వరకు — 5 రిజిస్ట్రేషన్లు ఒకే వర్క్‌ఫ్లోలో, నిమిషాల్లో.",hi:"नाम से GSTIN, EPFO, ESIC तक — 5 पंजीकरण एक ही वर्कफ़्लो में, मिनटों में।",en:"From name to GSTIN, EPFO, ESIC — 5 registrations in one workflow, in minutes."}},
/* ---------- 13. GST portal ---------- */
{id:"gst",icon:"🧮",cat:"business",level:"centre",url:"https://www.gst.gov.in",
 name:{te:"GST పోర్టల్",hi:"GST पोर्टल",en:"GST portal"},
 dept:{te:"GSTN (కేంద్రం + రాష్ట్రాలు)",hi:"GSTN (केंद्र + राज्य)",en:"GSTN (Centre + States)"},
 steps:[
  {te:"PANతో కొత్త రిజిస్ట్రేషన్ ప్రారంభించండి",hi:"PAN से नया पंजीकरण प्रारंभ करें",en:"Start new registration with PAN"},
  {te:"ఆధార్ అథెంటికేషన్ పూర్తి చేయండి",hi:"आधार प्रमाणीकरण पूर्ण करें",en:"Complete Aadhaar authentication"},
  {te:"GSTIN పొంది రిటర్నులు ఫైల్ చేయండి",hi:"GSTIN पाकर रिटर्न दाखिल करें",en:"Receive GSTIN and file returns"}],
 reinvent:{te:"రిజిస్ట్రేషన్ నుంచి నెలవారీ రిటర్న్ రిమైండర్ల వరకు — GST భారం కాకుండా.",hi:"पंजीकरण से मासिक रिटर्न अनुस्मारक तक — GST बोझ न बने।",en:"From registration to monthly return reminders — GST never becomes a burden."}},
/* ---------- 14. Udyam ---------- */
{id:"udyam",icon:"🏭",cat:"business",level:"centre",url:"https://udyamregistration.gov.in",
 name:{te:"ఉద్యమ్ (MSME)",hi:"उद्यम (MSME)",en:"Udyam (MSME)"},
 dept:{te:"MSME మంత్రిత్వ శాఖ",hi:"MSME मंत्रालय",en:"Ministry of MSME"},
 steps:[
  {te:"ఆధార్ నంబర్‌తో లాగిన్ చేయండి",hi:"आधार संख्या से लॉगिन करें",en:"Log in with Aadhaar number"},
  {te:"PAN ధృవీకరించి సంస్థ వివరాలు ఇవ్వండి",hi:"PAN सत्यापित कर उद्यम विवरण दें",en:"Verify PAN and give enterprise details"},
  {te:"ఉద్యమ్ సర్టిఫికెట్ పొందండి",hi:"उद्यम प्रमाणपत्र पाएँ",en:"Receive the Udyam certificate"}],
 reinvent:{te:"నమోదు వెంటనే MSME రుణాలు, సబ్సిడీలు, GeM — అన్నీ ఒకే చోట అన్‌లాక్.",hi:"पंजीकरण के साथ MSME ऋण, सब्सिडी, GeM — सब एक जगह अनलॉक।",en:"Registration instantly unlocks MSME loans, subsidies, GeM — all in one place."}},
/* ---------- 15. FSSAI FoSCoS ---------- */
{id:"fssai",icon:"🍽️",cat:"business",level:"centre",url:"https://foscos.fssai.gov.in",
 name:{te:"FSSAI (FoSCoS)",hi:"FSSAI (FoSCoS)",en:"FSSAI (FoSCoS)"},
 dept:{te:"భారత ఆహార భద్రతా ప్రాధికార సంస్థ",hi:"भारतीय खाद्य सुरक्षा प्राधिकरण",en:"Food Safety and Standards Authority of India"},
 steps:[
  {te:"వ్యాపార రకాన్ని బట్టి లైసెన్స్ కేటగిరీ ఎంచుకోండి",hi:"व्यवसाय प्रकार अनुसार लाइसेंस श्रेणी चुनें",en:"Pick the licence category for your business type"},
  {te:"పత్రాలు అప్‌లోడ్ చేసి ఫీజు చెల్లించండి",hi:"दस्तावेज़ अपलोड कर शुल्क दें",en:"Upload documents and pay the fee"},
  {te:"లైసెన్స్ పొంది నంబర్ ప్రదర్శించండి",hi:"लाइसेंस पाकर नंबर प्रदर्शित करें",en:"Receive the licence and display the number"}],
 reinvent:{te:"ఫుడ్ స్టాల్ నుంచి రెస్టారెంట్ వరకు — లైసెన్స్ రకం భారత్‌మిత్రే నిర్ణయించి దరఖాస్తు చేస్తుంది.",hi:"फ़ूड स्टॉल से रेस्टोरेंट तक — लाइसेंस प्रकार भारतमित्र तय कर आवेदन करता है।",en:"From food stall to restaurant — BharatMitra decides the licence type and applies."}},
/* ---------- 16. Startup India ---------- */
{id:"startupindia",icon:"🚀",cat:"business",level:"centre",url:"https://www.startupindia.gov.in",
 name:{te:"స్టార్టప్ ఇండియా",hi:"स्टार्टअप इंडिया",en:"Startup India"},
 dept:{te:"DPIIT",hi:"DPIIT",en:"DPIIT"},
 steps:[
  {te:"ప్రొఫైల్ సృష్టించి సంస్థ వివరాలు ఇవ్వండి",hi:"प्रोफ़ाइल बनाकर संस्था विवरण दें",en:"Create a profile and give entity details"},
  {te:"DPIIT గుర్తింపు కోసం దరఖాస్తు చేయండి",hi:"DPIIT मान्यता हेतु आवेदन करें",en:"Apply for DPIIT recognition"},
  {te:"పన్ను ప్రయోజనాలు, స్వీయ-ధృవీకరణ పొందండి",hi:"कर लाभ और स्व-प्रमाणन पाएँ",en:"Access tax benefits and self-certification"}],
 reinvent:{te:"గుర్తింపు నుంచి ఫండింగ్, మెంటార్‌షిప్, టెండర్ల వరకు — స్టార్టప్ ప్రయాణం ఒకే చోట.",hi:"मान्यता से फंडिंग, मेंटरशिप, निविदाओं तक — स्टार्टअप यात्रा एक ही जगह।",en:"From recognition to funding, mentorship, tenders — the startup journey in one place."}},
/* ---------- 17. GeM ---------- */
{id:"gem",icon:"🏪",cat:"business",level:"centre",url:"https://gem.gov.in",
 name:{te:"GeM — ప్రభుత్వ కొనుగోళ్లు",hi:"GeM — सरकारी खरीद",en:"GeM — govt procurement"},
 dept:{te:"వాణిజ్య మంత్రిత్వ శాఖ",hi:"वाणिज्य मंत्रालय",en:"Ministry of Commerce"},
 steps:[
  {te:"సంస్థ వివరాలతో సెల్లర్‌గా నమోదు చేసుకోండి",hi:"संस्था विवरण से विक्रेता पंजीकरण करें",en:"Register as a seller with organisation details"},
  {te:"ఉత్పత్తులు/సేవల కేటలాగ్ అప్‌లోడ్ చేయండి",hi:"उत्पादों/सेवाओं का कैटलॉग अपलोड करें",en:"Upload your product/service catalogue"},
  {te:"టెండర్లలో బిడ్ వేసి ఆర్డర్లు పొందండి",hi:"निविदाओं में बोली लगाकर ऑर्डर पाएँ",en:"Bid on tenders and win orders"}],
 reinvent:{te:"సరైన టెండర్లు భారత్‌మిత్రే కనుగొని హెచ్చరిస్తుంది — చిన్న వ్యాపారాలకు ప్రభుత్వ ఆర్డర్లు అందుబాటులో.",hi:"सही निविदाएँ भारतमित्र खोजकर सूचित करता है — छोटे व्यवसायों हेतु सरकारी ऑर्डर सुलभ।",en:"BharatMitra finds the right tenders and alerts you — government orders within reach of small businesses."}},
/* ---------- 18. NSWS ---------- */
{id:"nsws",icon:"🪟",cat:"business",level:"centre",url:"https://www.nsws.gov.in",
 name:{te:"NSWS — జాతీయ సింగిల్ విండో",hi:"NSWS — राष्ट्रीय सिंगल विंडो",en:"NSWS — national single window"},
 dept:{te:"DPIIT",hi:"DPIIT",en:"DPIIT"},
 steps:[
  {te:"వ్యాపార వివరాలతో నమోదు చేసుకోండి",hi:"व्यवसाय विवरण से पंजीकरण करें",en:"Register with business details"},
  {te:"నో-యువర్-అప్రూవల్స్‌తో కావాల్సిన అనుమతులు తెలుసుకోండి",hi:"नो-योर-अप्रूवल्स से आवश्यक अनुमतियाँ जानें",en:"Discover required approvals via Know-Your-Approvals"},
  {te:"అన్ని అనుమతులకు ఒకే చోట దరఖాస్తు చేసి ట్రాక్ చేయండి",hi:"सभी अनुमतियों हेतु एक जगह आवेदन कर ट्रैक करें",en:"Apply and track all approvals in one place"}],
 reinvent:{te:"భారత్‌మిత్ర NSWSకు వాయిస్ ఇంటర్‌ఫేస్ — అనుమతుల జాబితా నుంచి దరఖాస్తు వరకు మాటలతోనే.",hi:"भारतमित्र NSWS का वॉइस इंटरफ़ेस है — अनुमति सूची से आवेदन तक बोलकर ही।",en:"BharatMitra is the voice interface for NSWS — from approval list to application, just by speaking."}},
/* ---------- 19. ESIC ---------- */
{id:"esic",icon:"⚕️",cat:"business",level:"centre",url:"https://www.esic.gov.in",
 name:{te:"ESIC — ఉద్యోగుల బీమా",hi:"ESIC — कर्मचारी बीमा",en:"ESIC — employee insurance"},
 dept:{te:"కార్మిక మంత్రిత్వ శాఖ",hi:"श्रम मंत्रालय",en:"Ministry of Labour"},
 steps:[
  {te:"యజమానిగా నమోదు చేసుకోండి",hi:"नियोक्ता के रूप में पंजीकरण करें",en:"Register as an employer"},
  {te:"ఉద్యోగుల వివరాలు, వేతనాలు నమోదు చేయండి",hi:"कर्मचारी विवरण और वेतन दर्ज करें",en:"Enter employee details and wages"},
  {te:"నెలవారీ కంట్రిబ్యూషన్ చెల్లించండి",hi:"मासिक अंशदान दें",en:"Pay monthly contributions"}],
 reinvent:{te:"కంపెనీ ఏర్పాటుతోనే ESIC ఆటో-రిజిస్టర్ — ఉద్యోగుల ఆరోగ్య బీమా మొదటి రోజు నుంచే.",hi:"कंपनी गठन के साथ ESIC ऑटो-पंजीकृत — कर्मचारियों का स्वास्थ्य बीमा पहले दिन से।",en:"ESIC auto-registers with company formation — employee health cover from day one."}},
/* ---------- 20. DGFT ---------- */
{id:"dgft",icon:"🌐",cat:"business",level:"centre",url:"https://www.dgft.gov.in",
 name:{te:"DGFT — ఎగుమతి-దిగుమతి",hi:"DGFT — आयात-निर्यात",en:"DGFT — import-export"},
 dept:{te:"వాణిజ్య మంత్రిత్వ శాఖ",hi:"वाणिज्य मंत्रालय",en:"Ministry of Commerce"},
 steps:[
  {te:"ANF-2A ఫారంతో IEC కోసం దరఖాస్తు చేయండి",hi:"ANF-2A फॉर्म से IEC हेतु आवेदन करें",en:"Apply for IEC with form ANF-2A"},
  {te:"PAN, బ్యాంకు వివరాలు ధృవీకరించండి",hi:"PAN और बैंक विवरण सत्यापित करें",en:"Verify PAN and bank details"},
  {te:"జీవితకాల IEC పొంది వాణిజ్యం ప్రారంభించండి",hi:"आजीवन IEC पाकर व्यापार प्रारंभ करें",en:"Receive lifetime IEC and start trading"}],
 reinvent:{te:"IEC నుంచి ఎగుమతి ప్రోత్సాహకాల వరకు — గ్లోబల్ మార్కెట్ చిన్న వ్యాపారికి కూడా.",hi:"IEC से निर्यात प्रोत्साहन तक — वैश्विक बाज़ार छोटे व्यापारी हेतु भी।",en:"From IEC to export incentives — the global market, even for the small trader."}},
/* ---------- 21. Dharani (Telangana) ---------- */
{id:"dharani",icon:"🗺️",cat:"citizen",level:"state",url:"https://dharani.telangana.gov.in",
 name:{te:"ధరణి — తెలంగాణ భూమి రికార్డులు",hi:"धरणी — तेलंगाना भूमि रिकॉर्ड",en:"Dharani — Telangana land records"},
 dept:{te:"తెలంగాణ రెవెన్యూ శాఖ",hi:"तेलंगाना राजस्व विभाग",en:"Telangana Revenue Dept"},
 steps:[
  {te:"జిల్లా, మండలం, గ్రామం, సర్వే నంబర్ ఎంచుకోండి",hi:"ज़िला, मंडल, गाँव, सर्वे नंबर चुनें",en:"Select district, mandal, village, survey number"},
  {te:"అడంగల్, ROR-1B, పట్టాదార్ పాస్‌బుక్ చూడండి",hi:"अडंगळ, ROR-1B, पट्टादार पासबुक देखें",en:"View Adangal, ROR-1B, pattadar passbook"},
  {te:"మ్యుటేషన్, రిజిస్ట్రేషన్ స్లాట్ బుకింగ్ చేయండి",hi:"म्यूटेशन और पंजीकरण स्लॉट बुक करें",en:"Book mutation and registration slots"}],
 reinvent:{te:"సర్వే నంబర్ చెప్తే చాలు — భారత్‌మిత్ర రికార్డులు తెచ్చి, తప్పులుంటే సరిచేసే దారి చూపుతుంది.",hi:"सर्वे नंबर कहें, बस — भारतमित्र रिकॉर्ड लाकर त्रुटि सुधार का मार्ग दिखाता है।",en:"Just say the survey number — BharatMitra fetches records and shows how to fix errors."}},
/* ---------- 22. MeeBhoomi (Andhra Pradesh) ---------- */
{id:"meebhoomi",icon:"🌾",cat:"citizen",level:"state",url:"https://meebhoomi.ap.gov.in",
 name:{te:"మీభూమి — AP భూమి రికార్డులు",hi:"मीभूमि — AP भूमि रिकॉर्ड",en:"MeeBhoomi — AP land records"},
 dept:{te:"AP రెవెన్యూ శాఖ",hi:"AP राजस्व विभाग",en:"AP Revenue Dept"},
 steps:[
  {te:"జిల్లా, మండలం, గ్రామం ఎంచుకుని సర్వే నంబర్ ఇవ్వండి",hi:"ज़िला, मंडल, गाँव चुनकर सर्वे नंबर दें",en:"Select district, mandal, village and enter survey number"},
  {te:"అడంగల్, 1-B, FMB, గ్రామ మ్యాప్ చూడండి",hi:"अडंगळ, 1-B, FMB, ग्राम मानचित्र देखें",en:"View Adangal, 1-B, FMB, village map"},
  {te:"ఆధార్ లింక్ చేసి, మ్యుటేషన్ స్టేటస్ ట్రాక్ చేయండి",hi:"आधार लिंक कर म्यूटेशन स्थिति ट्रैक करें",en:"Link Aadhaar and track mutation status"}],
 reinvent:{te:"భూమి వివాదాల్లో రికార్డు సాక్ష్యం ఒక్క అడగుతో — మధ్యవర్తులు లేకుండా.",hi:"भूमि विवादों में रिकॉर्ड साक्ष्य एक माँग पर — बिचौलियों के बिना।",en:"Land-record evidence on a single ask in disputes — no middlemen."}},
/* ---------- 23. AP State Portal ---------- */
{id:"apportal",icon:"🏛️",cat:"citizen",level:"state",url:"https://www.ap.gov.in",
 name:{te:"AP రాష్ట్ర పోర్టల్",hi:"AP राज्य पोर्टल",en:"AP State Portal"},
 dept:{te:"ఆంధ్రప్రదేశ్ ప్రభుత్వం",hi:"आंध्र प्रदेश सरकार",en:"Govt of Andhra Pradesh"},
 steps:[
  {te:"పౌర సేవల విభాగానికి వెళ్లండి",hi:"नागरिक सेवा अनुभाग पर जाएँ",en:"Go to the citizen services section"},
  {te:"కావాల్సిన శాఖ/సేవను ఎంచుకోండి",hi:"वांछित विभाग/सेवा चुनें",en:"Choose the department/service you need"},
  {te:"దరఖాస్తు చేసి రసీదుతో ట్రాక్ చేయండి",hi:"आवेदन कर रसीद से ट्रैक करें",en:"Apply and track with the receipt"}],
 reinvent:{te:"రాష్ట్ర సేవలన్నీ భారత్‌మిత్రలోనే — పోర్టల్‌లో వెతకాల్సిన పనిలేదు.",hi:"राज्य की सभी सेवाएँ भारतमित्र में ही — पोर्टल में खोजने की ज़रूरत नहीं।",en:"All state services inside BharatMitra — no hunting through the portal."}},
/* ---------- 24. MeeSeva (Telangana) — link placeholder ---------- */
{id:"meeseva",icon:"🧾",cat:"citizen",level:"state",url:null,
 name:{te:"మీసేవా — తెలంగాణ",hi:"मीसेवा — तेलंगाना",en:"MeeSeva — Telangana"},
 dept:{te:"తెలంగాణ ప్రభుత్వం",hi:"तेलंगाना सरकार",en:"Govt of Telangana"},
 steps:[
  {te:"600+ పౌర సేవల్లో కావాల్సింది ఎంచుకోండి",hi:"600+ नागरिक सेवाओं में अपनी सेवा चुनें",en:"Pick from 600+ citizen services"},
  {te:"దరఖాస్తు చేసి ఫీజు చెల్లించండి",hi:"आवेदन कर शुल्क दें",en:"Apply and pay the fee"},
  {te:"డిజిటల్ సంతకంతో సర్టిఫికెట్ పొందండి",hi:"डिजिटल हस्ताक्षर सहित प्रमाणपत्र पाएँ",en:"Get the certificate with digital signature"}],
 reinvent:{te:"మీసేవా సేవలన్నీ వాయిస్‌తో — క్యూలో నిలబడాల్సిన పనిలేదు.",hi:"मीसेवा की सभी सेवाएँ वॉइस से — कतार में खड़े होने की ज़रूरत नहीं।",en:"All MeeSeva services by voice — no standing in queues."}},
/* ---------- 25. T App Folio — link placeholder ---------- */
{id:"tappfolio",icon:"📲",cat:"citizen",level:"state",url:null,
 name:{te:"టీ యాప్ ఫోలియో",hi:"टी ऐप फोलियो",en:"T App Folio"},
 dept:{te:"తెలంగాణ ప్రభుత్వం (మీసేవా 2.0)",hi:"तेलंगाना सरकार (मीसेवा 2.0)",en:"Govt of Telangana (MeeSeva 2.0)"},
 steps:[
  {te:"యాప్‌లో సేవను వెతకండి",hi:"ऐप में सेवा खोजें",en:"Find the service in the app"},
  {te:"ఆధార్‌తో లాగిన్ చేసి దరఖాస్తు చేయండి",hi:"आधार से लॉगिन कर आवेदन करें",en:"Log in with Aadhaar and apply"},
  {te:"చెల్లింపులు, బిల్లులు ఒకే చోట చూడండి",hi:"भुगतान और बिल एक जगह देखें",en:"See payments and bills in one place"}],
 reinvent:{te:"యాప్‌కు బదులు సంభాషణ — భారత్‌మిత్ర టీ యాప్ ఫోలియో సేవలను మాటల్లోకి తెస్తుంది.",hi:"ऐप के बजाय संवाद — भारतमित्र टी ऐप फोलियो सेवाओं को बातों में लाता है।",en:"Conversation instead of an app — BharatMitra brings T App Folio services into dialogue."}}
];
