/* ============================================================
   BharatMitra AI — Suraksha Kavach (citizen asset protection)
   Trilingual: te / hi / en. All flows are simulated concepts.
   ============================================================ */
window.PROTECTIONS = [
{
  id:"land", icon:"🏠", cat:"property",
  name:{te:"భూ-సురక్ష — ల్యాండ్ వాల్ట్", hi:"भू-सुरक्षा — लैंड वॉल्ट", en:"Land Vault — Bhoo-Suraksha"},
  tag:{te:"మీ భూమి — మీ బయోమెట్రిక్స్‌కే లాక్.", hi:"आपकी ज़मीन — सिर्फ़ आपके बायोमेट्रिक्स से लॉक।", en:"Your land, locked to your biometrics."},
  desc:{
    te:"మీ సర్వే నంబర్లను ఒకసారి నమోదు చేయండి. ఏ అమ్మకం, తనఖా లేదా మ్యుటేషన్ ప్రయత్నమైనా మీ భాషలో తక్షణ హెచ్చరిక వస్తుంది — మీ లైవ్ బయోమెట్రిక్ అనుమతి లేకుండా రిజిస్ట్రేషన్ జరగదు.",
    hi:"अपने सर्वे नंबर एक बार दर्ज करें। किसी भी बिक्री, बंधक या म्यूटेशन प्रयास पर आपकी भाषा में तुरंत अलर्ट — आपकी लाइव बायोमेट्रिक सहमति के बिना कोई रजिस्ट्रेशन नहीं होगा।",
    en:"Register your survey numbers once. Any sale, mortgage, or mutation attempt triggers an instant alert in your language — and no registration completes without your live biometric consent."},
  steps:[
    {te:"ధరణి / మీభూమి / మీ రాష్ట్ర రిజిస్ట్రీ ద్వారా సర్వే నంబర్లను లింక్ చేయండి", hi:"धरणी / मीभूमि / अपने राज्य की रजिस्ट्री से सर्वे नंबर लिंक करें", en:"Link survey numbers via Dharani / MeeBhoomi / your state registry"},
    {te:"ఆధార్ ఫేస్-ఆథ్‌తో మీరే యజమాని అని నిర్ధారించుకోండి", hi:"आधार फेस-ऑथ से पुष्टि करें कि मालिक आप ही हैं", en:"Aadhaar face-auth confirms you are the owner"},
    {te:"ఏ రిజిస్ట్రేషన్, మ్యుటేషన్ లేదా భూమిపై రుణ ప్రయత్నమైనా మీ భాషలో SMS + వాయిస్ కాల్ హెచ్చరిక", hi:"किसी भी रजिस्ट्रेशन, म्यूटेशन या ज़मीन पर लोन के प्रयास पर आपकी भाषा में SMS + वॉइस कॉल अलर्ट", en:"Any registration, mutation, or loan-against-land attempt triggers an SMS + voice-call alert in your language"},
    {te:"ఫ్రీజ్ ఆన్ చేయండి: మీ లైవ్ బయోమెట్రిక్ అనుమతి లేకుండా అమ్మకం, బహుమతి, విభజన నమోదు కాదు", hi:"फ़्रीज़ चालू करें: आपकी लाइव बायोमेट्रिक सहमति के बिना बिक्री, उपहार या बंटवारा दर्ज नहीं होगा", en:"Turn on Freeze: no sale, gift, or partition registers without your live biometric consent"},
    {te:"వారసులు రీడ్-ఓన్లీ కుటుంబ వ్యూ చూస్తారు; వారసత్వం ముందే మ్యాప్ అవుతుంది — వివాదాలు తగ్గుతాయి", hi:"वारिस रीड-ओनली फैमिली व्यू देखते हैं; उत्तराधिकार पहले से मैप रहता है — विवाद घटते हैं", en:"Heirs see a read-only family view; succession is pre-mapped — disputes shrink"}],
  rails:["Dharani / MeeBhoomi registries","CERSAI security-interest registry","Aadhaar face authentication","DigiLocker registered deeds"]
},
{
  id:"account", icon:"🏦", cat:"financial",
  name:{te:"ధన్-సురక్ష — అకౌంట్ షీల్డ్", hi:"धन-सुरक्षा — अकाउंट शील्ड", en:"Account Shield — Dhan-Suraksha"},
  tag:{te:"మీ ప్రతి ఖాతా — మీ కోసం కాపలా.", hi:"आपका हर खाता — आपकी निगरानी में।", en:"Every account you own, watched for you."},
  desc:{
    te:"RBI అకౌంట్ అగ్రిగేటర్ ద్వారా మీ అన్ని బ్యాంక్ ఖాతాల ఒకే డాష్‌బోర్డ్ — మీ అనుమతితోనే. అసాధారణ కదలికలపై మీకు, మీరు ఎంచుకున్న నమ్మకమైన కుటుంబ సభ్యునికి హెచ్చరిక.",
    hi:"RBI के अकाउंट एग्रीगेटर से आपके सभी बैंक खातों का एक डैशबोर्ड — सिर्फ़ आपकी सहमति से। असामान्य गतिविधि पर आपको और आपके चुने विश्वस्त परिजन को अलर्ट।",
    en:"One consent-based dashboard of all your bank accounts via the RBI's Account Aggregator framework. Unusual activity alerts you — and a trusted family member you choose."},
  steps:[
    {te:"అకౌంట్ అగ్రిగేటర్ ద్వారా ఒకే అనుమతితో అన్ని బ్యాంక్ ఖాతాలు లింక్ చేయండి", hi:"अकाउंट एग्रीगेटर से एक सहमति से सभी बैंक खाते लिंक करें", en:"Link all bank accounts with one consent via the Account Aggregator framework"},
    {te:"భారత్‌మిత్ర మీ సాధారణ విధానం నేర్చుకుంటుంది — పెన్షన్ జమ, చిన్న UPI ఖర్చులు", hi:"भारत्मित्र आपका सामान्य पैटर्न सीखता है — पेंशन जमा, छोटे UPI खर्च", en:"BharatMitra learns your normal pattern — pension credits, small UPI spends"},
    {te:"పెద్ద డెబిట్, కొత్త లబ్ధిదారు, లేదా SIM మార్పు + UPI కదలికపై తక్షణ హెచ్చరిక", hi:"बड़े डेबिट, नए लाभार्थी या SIM बदलाव + UPI गतिविधि पर तुरंत अलर्ट", en:"Large debits, new payees, or SIM-change + UPI activity trigger instant alerts"},
    {te:"నమ్మకమైన వ్యక్తిని (కొడుకు/కూతురు) నామినేట్ చేయండి: అసాధారణ కదలికపై వారికి హెచ్చరిక — మీ డబ్బుపై వారికి నియంత్రణ ఉండదు", hi:"विश्वस्त व्यक्ति (बेटा/बेटी) नामित करें: असामान्य गतिविधि पर उन्हें अलर्ट — आपके पैसे पर उनका नियंत्रण नहीं होगा", en:"Nominate a trusted contact (son/daughter): they are alerted on unusual activity — they never get control of your money"},
    {te:"సీనియర్ మోడ్: కొత్త లబ్ధిదారులపై 24 గంటల కూలింగ్ పీరియడ్ + పెద్ద అక్షరాలు, నెమ్మది వాయిస్ నిర్ధారణలు", hi:"सीनियर मोड: नए लाभार्थियों पर 24 घंटे का कूलिंग पीरियड + बड़े अक्षर, धीमी आवाज़ में पुष्टि", en:"Senior mode: 24-hour cooling period on new beneficiaries + big-text, slow-voice confirmations"}],
  rails:["Account Aggregator (RBI-regulated)","UPI / IMPS rails","CKYC registry","Aadhaar"]
},
{
  id:"scam", icon:"🚨", cat:"financial",
  name:{te:"స్కామ్ రాడార్", hi:"स्कैम रडार", en:"Scam Radar"},
  tag:{te:"చెల్లించే ముందు ధృవీకరించండి. ప్రతిసారీ.", hi:"भुगतान से पहले सत्यापित करें। हर बार।", en:"Verify before you pay. Every time."},
  desc:{
    te:"ఏ UPI ID, ఫోన్ నంబర్ లేదా లింక్‌నైనా అతికించి — నివేదించబడిన మోసాల డేటాబేస్‌లతో సరిచూడండి. 12 అత్యంత సాధారణ మోసాలను మీ భాషలో 30 సెకన్ల ఆడియో కథల్లో నేర్చుకోండి.",
    hi:"कोई भी UPI ID, फ़ोन नंबर या लिंक पेस्ट करें — रिपोर्टेड धोखाधड़ी डेटाबेस से जांचें। 12 सबसे आम ठगी के तरीकों को अपनी भाषा में 30 सेकंड की ऑडियो कहानियों में सीखें।",
    en:"Paste any UPI ID, phone number, or link to check it against reported-fraud databases. Learn the 12 most common fraud playbooks as 30-second audio stories in your language."},
  steps:[
    {te:"UPI ID, ఫోన్ నంబర్ లేదా లింక్ అతికించండి — లేదా భారత్‌మిత్ర ఇన్‌కమింగ్ కాల్స్/SMS స్క్రీన్ చేయనివ్వండి", hi:"UPI ID, फ़ोन नंबर या लिंक पेस्ट करें — या भारत्मित्र को इनकमिंग कॉल/SMS स्क्रीन करने दें", en:"Paste a UPI ID, phone number, or link — or let BharatMitra screen incoming calls/SMS"},
    {te:"తక్షణ రిస్క్ తీర్పు: నివేదించబడిన మోసాల సంఖ్య, నకిలీ గుర్తింపు సంకేతాలు", hi:"तुरंत जोखिम निर्णय: रिपोर्टेड धोखाधड़ी की संख्या, फ़र्ज़ी पहचान के संकेत", en:"Instant risk verdict: reported-fraud counts, impersonation signals, lookalike IDs"},
    {te:"మీ భాషలో రెడ్-ఫ్లాగ్ వివరణ: ఇది ఎందుకు ప్రమాదకరంగా కనిపిస్తోంది", hi:"आपकी भाषा में रेड-फ़्लैग स्पष्टीकरण: यह खतरनाक क्यों लग रहा है", en:"Red-flag explainer in your language: WHY this looks dangerous"},
    {te:"1930 సైబర్ హెల్ప్‌లైన్‌కు వివరాలు ఆటో-ఫిల్‌తో ఒకే ట్యాప్‌లో ఫిర్యాదు", hi:"1930 साइबर हेल्पलाइन पर विवरण ऑटो-फ़िल के साथ एक टैप में शिकायत", en:"One-tap report to the 1930 cyber helpline with details auto-filled"},
    {te:"వారానికో 'మోసం కథ' — మీ భాషలో — కుటుంబం మొత్తం అప్రమత్తంగా", hi:"हफ़्ते में एक 'ठगी की कहानी' — आपकी भाषा में — पूरा परिवार सतर्क", en:"A weekly 'scam story' in your language keeps the whole family alert"}],
  rails:["1930 National Cyber Helpline","Sanchar Saathi (DoT)","Bhashini language AI"]
},
{
  id:"nominee", icon:"📜", cat:"financial",
  name:{te:"వారిస్ — నామినీ & వారసత్వ సహాయకుడు", hi:"वारिस — नॉमिनी व उत्तराधिकार सहायक", en:"Vaaris — Nominee & Heir Helper"},
  tag:{te:"నామినీ లేని ఖాతా ఉండదు. కుటుంబ కలహాలు ఉండవు.", hi:"बिना नॉमिनी का कोई खाता नहीं। कोई पारिवारिक विवाद नहीं।", en:"No missing nominees. No family disputes."},
  desc:{
    te:"మీ ఖాతాలు, డిపాజిట్లు, పాలసీలను స్కాన్ చేసి — నామినీ లేనివి చూపిస్తుంది; ఇ-నామినేషన్‌కు మార్గనిర్దేశం చేస్తుంది; వారసత్వ ధృవీకరణ పత్రాలను సిద్ధం చేస్తుంది.",
    hi:"आपके खातों, जमाओं और पॉलिसियों को स्कैन कर — बिना नॉमिनी वालों को दिखाता है; ई-नॉमिनेशन में मार्गदर्शन करता है; उत्तराधिकार प्रमाणपत्र तैयार करता है।",
    en:"Scans your accounts, deposits, and policies; lists every one missing a nominee; guides e-nomination; prepares legal-heir and succession paperwork."},
  steps:[
    {te:"బ్యాంక్ ఖాతాలు, FDలు, PPF, బీమా, మ్యూచువల్ ఫండ్స్, EPF — ఒకే స్కాన్", hi:"बैंक खाते, FD, PPF, बीमा, म्यूचुअल फंड, EPF — एक स्कैन", en:"One scan across bank accounts, FDs, PPF, insurance, mutual funds, EPF"},
    {te:"నామినీ లేని ఖాతాలు స్పష్టంగా — కుటుంబ కష్టాలకు అతిపెద్ద కారణం ఇదే", hi:"बिना नॉमिनी वाले खाते स्पष्ट दिखें — पारिवारिक कठिनाइयों का सबसे बड़ा कारण यही है", en:"See exactly which accounts lack nominees — the single biggest cause of family hardship"},
    {te:"మీ భాషలో మార్గనిర్దేశిత ఇ-నామినేషన్ — ఖాతాకు 2 నిమిషాలు", hi:"आपकी भाषा में निर्देशित ई-नॉमिनेशन — प्रति खाता 2 मिनट", en:"Guided e-nomination in your language, 2 minutes per account"},
    {te:"వారసత్వ ధృవీకరణ పత్రం & సక్సెషన్ సర్టిఫికెట్ ఫ్లోలు — ముందే నింపబడి", hi:"उत्तराधिकार प्रमाणपत्र व सक्सेशन सर्टिफिकेट फ़्लो — पहले से भरे हुए", en:"Legal-heir certificate & succession certificate flows, pre-filled"},
    {te:"నమ్మకమైన వ్యక్తికి ఐచ్ఛిక సీల్డ్ సారాంశం — 'నాకు ఏమైనా జరిగితే'", hi:"विश्वस्त व्यक्ति के लिए वैकल्पिक सीलबंद सारांश — 'मुझे कुछ हो जाए तो'", en:"Optional sealed summary for your trusted contact — 'if something happens to me'"}],
  rails:["Account Aggregator","DigiLocker","eSign / Aadhaar"]
}
];
window.SCAM_TYPES = [
{icon:"📲",
 name:{te:"OTP మోసం", hi:"OTP ठगी", en:"OTP fraud"},
 sign:{te:"'బ్యాంక్ / RBI నుండి' కాల్ చేసి OTP అడుగుతారు", hi:"'बैंक / RBI से' कॉल करके OTP मांगते हैं", en:"A 'bank / RBI' caller asks for your OTP"},
 do:{te:"ఫోన్ పెట్టేయండి. నిజమైన బ్యాంకు OTP అడగదు.", hi:"फ़ोन रख दें। असली बैंक OTP नहीं मांगता।", en:"Hang up. A real bank never asks for OTP."}},
{icon:"📋",
 name:{te:"KYC మోసం", hi:"KYC ठगी", en:"KYC fraud"},
 sign:{te:"'మీ SIM / KYC బ్లాక్ అవుతుంది' అని SMS + లింక్", hi:"'आपका SIM / KYC ब्लॉक होगा' — SMS + लिंक", en:"'Your SIM / KYC will be blocked' SMS with a link"},
 do:{te:"లింక్ నొక్కకండి; బ్రాంచ్‌కు వెళ్లండి లేదా అధికారిక యాప్ వాడండి.", hi:"लिंक न दबाएं; ब्रांच जाएं या आधिकारिक ऐप इस्तेमाल करें।", en:"Don't click; visit the branch or use the official app."}},
{icon:"💸",
 name:{te:"కలెక్ట్-రిక్వెస్ట్ మోసం", hi:"कलेक्ट-रिक्वेस्ट ठगी", en:"Collect-request fraud"},
 sign:{te:"'డబ్బు పొందండి' అని UPI రిక్వెస్ట్ — PIN అడుగుతుంది", hi:"'पैसे पाएं' UPI रिक्वेस्ट — PIN मांगती है", en:"A 'receive money' UPI request asking for your PIN"},
 do:{te:"తిరస్కరించండి. డబ్బు రావడానికి PIN అవసరం లేదు — PIN నమోదు = చెల్లింపు.", hi:"अस्वीकार करें। पैसे पाने के लिए PIN नहीं चाहिए — PIN डालना = भुगतान।", en:"Decline. Receiving money never needs your PIN — entering PIN = paying."}},
{icon:"☎️",
 name:{te:"నకిలీ కస్టమర్ కేర్", hi:"फ़र्ज़ी कस्टमर केयर", en:"Fake customer care"},
 sign:{te:"గూగుల్‌లో దొరికిన నంబర్ — రిమోట్-యాక్సెస్ యాప్ అడుగుతారు", hi:"गूगल पर मिला नंबर — रिमोट-एक्सेस ऐप मांगते हैं", en:"A number found on Google search — asks for a remote-access app"},
 do:{te:"అధికారిక యాప్ / కార్డుపై ఉన్న నంబరే వాడండి.", hi:"आधिकारिक ऐप / कार्ड पर छपा नंबर ही इस्तेमाल करें।", en:"Use only the number printed on the official app/card."}},
{icon:"🎁",
 name:{te:"లాటరీ / బహుమతి మోసం", hi:"लॉटरी / इनाम ठगी", en:"Lottery / prize fraud"},
 sign:{te:"'మీకు లాటరీ తగిలింది — ముందు ట్యాక్స్ కట్టండి'", hi:"'आपको लॉटरी लगी — पहले टैक्स भरें'", en:"'You won a lottery — pay the tax first'"},
 do:{te:"నిజమైన బహుమతులు ముందు డబ్బు అడగవు.", hi:"असली इनाम पहले पैसे नहीं मांगते।", en:"Real prizes never ask for money first."}},
{icon:"📱",
 name:{te:"లోన్-యాప్ వేధింపులు", hi:"लोन-ऐप उत्पीड़न", en:"Loan-app harassment"},
 sign:{te:"తక్షణ లోన్ యాప్ — భారీ వడ్డీ, కాంటాక్ట్‌ల యాక్సెస్", hi:"तुरंत लोन ऐप — भारी ब्याज, कॉन्टैक्ट्स की एक्सेस", en:"Instant-loan apps with huge interest, access to your contacts"},
 do:{te:"RBI-రిజిస్టర్డ్ సంస్థల నుండే అప్పు తీసుకోండి.", hi:"सिर्फ़ RBI-पंजीकृत संस्थाओं से उधार लें।", en:"Borrow only from RBI-registered lenders."}}
];
/* ---- T3: Suraksha UI strings ---- */
window.T3 = {
nav_protect:{te:"🛡️ సురక్ష", hi:"🛡️ सुरक्षा", en:"🛡️ Suraksha"},
nav_learn:{te:"📚 పాఠశాల", hi:"📚 पाठशाला", en:"📚 Paathshala"},
sur_kicker:{te:"🛡️ సురక్ష కవచ్", hi:"🛡️ सुरक्षा कवच", en:"🛡️ Suraksha Kavach"},
sur_h:{te:"మీ ఆస్తి — మీ నియంత్రణలో", hi:"आपकी संपत्ति — आपके नियंत्रण में", en:"Your assets — under your control"},
sur_sub:{te:"భూమి, డబ్బు, గుర్తింపు — మోసాల నుండి రక్షణ, భారత స్టాక్ పై.", hi:"ज़मीन, पैसा, पहचान — धोखाधड़ी से सुरक्षा, इंडिया स्टैक पर।", en:"Land, money, identity — protected from fraud, on India Stack rails."},
sur_how:{te:"ఎలా పనిచేస్తుంది", hi:"कैसे काम करता है", en:"How it works"},
sur_rails:{te:"టెక్ రైల్స్", hi:"टेक रेल", en:"Built on"},
sur_sim:{te:"సిమ్యులేటెడ్ కాన్సెప్ట్", hi:"सिम्युलेटेड कॉन्सेप्ट", en:"Simulated concept"},
scam_h:{te:"🚨 స్కామ్ రాడార్ — చెల్లించే ముందు తనిఖీ చేయండి", hi:"🚨 स्कैम रडार — भुगतान से पहले जांचें", en:"🚨 Scam Radar — check before you pay"},
scam_sub:{te:"UPI ID, ఫోన్ నంబర్ లేదా లింక్ అతికించండి. (డెమో సిమ్యులేషన్ — నిజ వ్యవస్థ లైవ్ మోసాల డేటాబేస్‌లను ప్రశ్నిస్తుంది.)", hi:"UPI ID, फ़ोन नंबर या लिंक पेस्ट करें। (डेमो सिम्युलेशन — असली सिस्टम लाइव धोखाधड़ी डेटाबेस पूछेगा।)", en:"Paste a UPI ID, phone number, or link. (Demo simulation — a live system would query real fraud databases.)"},
scam_ph:{te:"ఉదా: rbi-kyc-update@upi లేదా 98XXXXXXXX", hi:"जैसे: rbi-kyc-update@upi या 98XXXXXXXX", en:"e.g. rbi-kyc-update@upi or 98XXXXXXXX"},
scam_btn:{te:"రిస్క్ తనిఖీ", hi:"जोखिम जांचें", en:"Check risk"},
scam_high:{te:"🔴 అధిక రిస్క్", hi:"🔴 उच्च जोखिम", en:"🔴 HIGH RISK"},
scam_med:{te:"🟡 జాగ్రత్త", hi:"🟡 सावधानी", en:"🟡 CAUTION"},
scam_low:{te:"🟢 తక్కువ రిస్క్ — అయినా జాగ్రత్త", hi:"🟢 कम जोखिम — फिर भी सावधान", en:"🟢 LOW RISK — stay alert anyway"},
scam_flag:{te:"రెడ్ ఫ్లాగ్‌లు", hi:"रेड फ़्लैग", en:"Red flags"},
scam_advice:{te:"ఏం చేయాలి", hi:"क्या करें", en:"What to do"},
scam_report:{te:"📞 1930కు ఫిర్యాదు (సిమ్యులేటెడ్)", hi:"📞 1930 पर शिकायत (सिम्युलेटेड)", en:"📞 Report to 1930 (simulated)"},
scam_reported:{te:"✅ ఫిర్యాదు నమోదైంది (సిమ్యులేషన్) — రెఫరెన్స్: CYB-2026-8841", hi:"✅ शिकायत दर्ज (सिम्युलेशन) — रेफ़रेंस: CYB-2026-8841", en:"✅ Report filed (simulation) — ref: CYB-2026-8841"},
scam_types_h:{te:"అత్యంత సాధారణ 6 మోసాలు — గుర్తుపట్టండి", hi:"6 सबसे आम ठगी — पहचानें", en:"The 6 most common frauds — recognise them"},
scam_sign:{te:"హెచ్చరిక సంకేతం", hi:"चेतावनी संकेत", en:"Warning sign"},
land_h:{te:"🏠 ల్యాండ్ వాల్ట్ సిమ్యులేటర్", hi:"🏠 लैंड वॉल्ट सिम्युलेटर", en:"🏠 Land Vault simulator"},
land_sub:{te:"సర్వే నంబర్ నమోదు చేసి ఫ్రీజ్ ఆన్ చేయండి — ఆపై నకిలీ మ్యుటేషన్ ప్రయత్నం ఏమవుతుందో చూడండి. (సిమ్యులేషన్)", hi:"सर्वे नंबर डालकर फ़्रीज़ चालू करें — फिर फ़र्ज़ी म्यूटेशन प्रयास का नतीजा देखें। (सिम्युलेशन)", en:"Enter a survey number and turn Freeze on — then watch a fake mutation attempt. (Simulation)"},
land_ph:{te:"సర్వే నం. ఉదా: 123/అ", hi:"सर्वे नं. जैसे: 123/अ", en:"Survey no. e.g. 123/A"},
land_btn:{te:"ఫ్రీజ్ ఆన్ చేసి పరీక్షించు", hi:"फ़्रीज़ चालू कर परखें", en:"Turn Freeze on & test"},
land_s1:{te:"🔒 ఫ్రీజ్ ఆన్ — సర్వే నం.", hi:"🔒 फ़्रीज़ चालू — सर्वे नं.", en:"🔒 Freeze ON — survey no."},
land_s2:{te:"⚠️ SRO వద్ద మ్యుటేషన్ ప్రయత్నం గుర్తించబడింది", hi:"⚠️ SRO पर म्यूटेशन प्रयास पकड़ा गया", en:"⚠️ Mutation attempt detected at the SRO"},
land_s3:{te:"📲 మీ బయోమెట్రిక్ అనుమతి కోరబడింది — మీరు స్పందించలేదు", hi:"📲 आपकी बायोमेट्रिक सहमति मांगी गई — आपने जवाब नहीं दिया", en:"📲 Your biometric consent requested — you did not respond"},
land_s4:{te:"🛑 అనుమతి లేకుండా రిజిస్ట్రేషన్ నిరోధించబడింది — మీ భూమి సురక్షితం", hi:"🛑 बिना सहमति रजिस्ट्रेशन रोका गया — आपकी ज़मीन सुरक्षित", en:"🛑 Registration BLOCKED without consent — your land is safe"},
land_s5:{te:"⛓ ఆడిట్ ట్రయిల్‌లో నమోదైంది + మీ భాషలో వాయిస్-కాల్ హెచ్చరిక పంపబడింది", hi:"⛓ ऑडिट ट्रेल में दर्ज + आपकी भाषा में वॉइस-कॉल अलर्ट भेजा गया", en:"⛓ Logged to audit trail + voice-call alert sent in your language"},
};
