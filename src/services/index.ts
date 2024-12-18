import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { TranslationResource } from '../types/types';


const resources: {
    [key: string]: {
        translation: TranslationResource;
    };
} = {
    en: {
        translation: {
            language_name: "English",
            // Hero Section
            heroTitle1: "You are Never too Young to start an Empire and Never too Old to",
            heroTitle2: "Pursue a Dream",
            askHow: "Ask me how",
            // About Section
            aboutUs: "",
            aboutGreet: "About Sagar",
            aboutMe: "I'm Sagar – an Entrepreneur, Business Coach, Educator, Author, and Meditation Practitioner. With over two decades of experience, I've built successful business models, setting up and running multiple ventures.",
            aboutMe2: "My journey, shaped by both successes and failures, has helped me grow into a recognized business leader.",
            connectSagar: "Connect Sagar",
            //About Grid
            entrepreneur: "Entrepreneur",
            entrepreneurDesc: "Built his base on entrepreneurship and CEO of multiple companies.",
            businessCoach: "Business Coach",
            businessCoachDesc: "Help you learn startup, funding, and business development.",
            educator: "Educator",
            educatorDesc: "Taught 1000+ students entrepreneurship and startup skills.",
            speaker: "Speaker",
            speakerDesc: "Spoke at 100+ events and motivate young entrepreneurs.",
            // My Story
            myStory: "My Story",
            storyHeading: "Take A Peek Into My Life And Discover The Various Facts That Made Me One Of The Top Business Leaders In 2021.",
            views: "100+ Million Views",
            BusinessCoach: "Only Marathi Small Business Owner's Coach",
            topLeader: "Top 100 Leader Impact",
            partnerAward: "IBM Best partner award to Comsense",
            course: "Course",
            course1: `"Maharashtra's first-ever business course in Marathi."`,
            tagline1: "From Zero to a 2 Crore Business:",
            tagline2: "A Path to Success",
            chapterInfo: "Dive into the world of entrepreneurship with our comprehensive 15-chapter course, designed specifically for Marathi businessmen. This course will equip you with the knowledge and practical skills to take your business to the next level!",
            chapters: "15 Chapters",
            chaptersContent: "5 hours of video content",
            knowMore: "Know More",
            reasons: "Top 6 Reasons To Approach Me",
            reasonTitle1: "Starting your own business",
            reasonDesc1: "If you wish to start your own business but are unclear on how to methodically approach your vision, I can guide you through the process, making you aware of the finer nuances and aid you through your journey.",
            reasonTitle2: " Need motivation for your employees",
            reasonDesc2: "There is no better motivator than the one who has seen it, been through it, and survived it successfully. I conduct targeted sessions for motivating the employees and aiding them in enhancing their performance.",
            reasonTitle3: "Pondering over quitting that job to start on your own?",
            reasonDesc3: "Many of us wish to be entrepreneurs but most are stuck in the risks of quitting that steady job. If you have an idea but not enough courage to take the leap, I can help you provide transparent and constructive feedback and guidance on if, when, and how to take that leap.",
            reasonTitle4: " A failed business that you wish to restart",
            reasonDesc4: "Started a venture but it did not work? Worry not, I help businesses re-start and assist entrepreneurs become forward looking.",
            reasonTitle5: "Business on a plateau; need to tread the growth path",
            reasonDesc5: "All businesses reach a plateau but the only way to leave a legacy is to constantly endeavor a rising chart. I help entrepreneurs break the barriers and achieve phenomenal growth",
            reasonTitle6: "Seeking a Leadership Skills Speaker for Workplaces, Universities, or Specialized Forums?",
            reasonDesc6: "I enjoy sharing insights and practical experiences with emerging leaders to help them maximize their potential. My mission is to create 1,000 business leaders. If you need a speaker for a leadership session, feel free to reach out.",
            awards: "Awards & Achievements",
            award1Title: "Business leader of the year",
            award1Year: "2021",
            award1Description: "Comsense Technologies, co-founded by Sagar Babar, was awarded Company of the Year at the Business Leader of the Year 2021 by The Economic Times and The World HRD Congress.",
            award2Title: "Amplify 2017 – Meet & Greet with Will Smith",
            award2Year: "2017",
            award2Description: "At Amplify 2017, Sagar Babar had the privilege of connecting with the iconic Will Smith, gaining valuable insights and motivation from the renowned actor during an inspiring meet and greet session.",
            award3Title: "Shivsanman Award",
            award3Year: "2024",
            award3Description: "Sagar Babar received the prestigious Shivsanman Award from Sharadchandraji Pawar on the occasion of Chhatrapati Shivaji Maharaj Jayanti, honoring his outstanding contributions and achievements.",
            absolutly1: "Absolutely",
            worth: "Worth it !",
            contactDesc: "When you connect with me, you're not just making contact—you're stepping into a world of growth and opportunity. Expect personalized guidance, fast responses, and actionable strategies tailored to your unique challenges. Whether it's business insights or support for your next big step, I'm here to ensure your success. This connection is absolutely worth it!",
            footerDesc: "Entrepreneur, Business Coach, Educator, Author, and Meditation Practitioner with 20+ years of experience in building successful business models through continuous learning and innovation.",
            courseTagline: `"Maharashtra's first-ever business course in Marathi."`,
            courseTitle1: "From Zero to a 2 Crore Business:",
            courseTitle2: "A Path to Success",
            courseDesc1: "Dive into the world of entrepreneurship with our comprehensive 15-chapter",
            courseDesc2: "course, designed specifically for Marathi businessmen. This course will equip you",
            courseDesc3: "with the knowledge and practical skills to take your business to the next level!",
            businessTitle: "What You'll Learn",
            businessDescription: `Learn how to create a solid business plan and develop effective strategies.`,
            marketResearchTitle: "Market Research & Niche Identification",
            marketResearchDescription: "Discover techniques for market analysis and finding your unique niche.",
            cashFlowTitle: "Cash flow Management",
            cashFlowDescription: "Master the essentials of managing your business finances effectively.",
            marketingTitle: "Marketing & Sales Growth",
            marketingDescription: "Explore strategies to boost your marketing efforts and increase sales.",
            customerServiceTitle: "Customer Service Excellence",
            customerServiceDescription: "Learn how to provide outstanding customer service to retain and grow your client base.",
            whatYoullLearnHeading1: "What",
            whatYoullLearnHeading2: "You'll Learn",
            whatYoullLearnDescription: `In this course on "How to Start a Business," you'll learn to create a solid business plan, conduct market research, and identify your niche. Master cash flow management and explore effective marketing and sales strategies. Additionally, discover how to provide excellent customer service to retain and grow your client base.`,
            courseWho: "Who",
            courseIs: "is this",
            courseFor: "course for?",
            courseFor1: "Small business owners",
            courseFor2: "Aspiring entrepreneurs",
            courseFor3: "Looking to start Business",
            why1: "Why",
            why2: "this Course?",
            reason1: "Actionable insights for real world business challenges",
            reason2: "Learn in simple Marathi, with examples relevant to local markets",
            reason3: "Accessible online, anytime, anywhere",
            faqTitle: "FREQUENTLY ASKED QUESTIONS",
            q1: "Is this course online or offline?",
            a1: "Yes, this course is entirely online. You will receive recorded sessions and access to doubt-solving workshops. Additionally, there will be a live workshop.",
            q2: "Is there an age limit for this course?",
            a2: "No, there is no age limit. This course is beneficial for anyone who wants to start or grow their business.",
            q3: "Is there lifetime access to the course?",
            a3: "Yes, you will have lifetime access to this course on how to start and grow a business.",
            q4: "Can this course be accessed on mobile?",
            a4: "Yes, you can access this course on any device, including mobile, laptop, or tablet.",
            q5: "Will I receive a certificate upon course completion?",
            a5: "Yes, you will receive a certificate after completing the course.",
            q6: "Can I download the worksheets in the course?",
            a6: "Yes, you can download all the worksheets provided in this course.",
            q7: "Can this course be accessed at any time?",
            a7: "Yes, you can access this course anytime that is convenient for you.",
            q8: "Is the course only available online? Can I download the videos if I have network issues?",
            a8: "Yes, the course is online only, and video downloads are not available. A stable network connection is required. However, you can download the worksheets to solve them offline.",
            q9: "Will I get personal guidance from Sagar Sir if I enroll in this course?",
            a9: "Yes, you will receive complete guidance from Sagar Sir in this course. You can directly ask questions during the online workshop and also reach out via email.",
            q10: "Can I join the course without an email?",
            a10: "No, an email address is required to join the course.",
            q11: "How do I join the course?",
            a11: "For more information on how to join the course, please check this demo video.",
            q12: "Is there a WhatsApp support number for course members?",
            a12: "We do not have a WhatsApp support number. If you have any questions, feel free to reach out via email or the doubt session provided with the course.",
            q13: "I've made the payment; how do I start the course?",
            a13: "You can watch the demo video to understand how to access the course.",
            mentorTitle1: "Meet",
            mentorTitle2: "Your Mentor",
            mentorDesc1: "Sagar Babar is an Entrepreneur, Business Coach, Educator, Author, Meditation Practitioner and Content Creator. With over 20 years of experience, he has mastered the art of learning, unlearning, and applying business strategies that work. Over the years, he has successfully created business models that deliver real results.",
            mentorDesc2: "In addition to his business expertise, Sagar is a content creator with over 2 lakh followers. He shares content related to business to empower the Marathi community, offering valuable insights to help people achieve success in their entrepreneurial journeys."

        }
    },
    mr: {
        translation: {
            language_name: "मराठी",
            heroTitle1: "साम्राज्य उभारण्यासाठी तुम्ही कधीच खूप लहान नसता, आणि स्वप्नं पूर्ण करण्यासाठी कधीच",
            heroTitle2: "खूप मोठे नसता.",
            aboutUs: "आमच्याबद्दल",
            askHow: " मला विचार कसे?",
            aboutGreet: "नमस्कार",
            aboutMe: "मी सागर – एक उद्योजक, व्यवसाय प्रशिक्षक, शिक्षक, लेखक आणि ध्यान साधना करणारा. दोन दशके पेक्षा अधिक अनुभव असलेल्या माझ्या प्रवासात, मी यशस्वी व्यवसाय मॉडेल्स उभारले आहेत आणि अनेक उपक्रम सुरू करून त्यांचे व्यवस्थापन केले आहे.",
            aboutMe2: "यशापयशाच्या अनुभवातून शिकत, मी एक प्रख्यात व्यवसाय लीडर म्हणून ओळख निर्माण केली आहे.",
            connectSagar: "कनेक्ट करा",
            entrepreneur: "उद्योजक",
            entrepreneurDesc: "उद्योजकतेवर आधारित असलेल्या आणि अनेक कंपन्यांचे सीईओ.",
            businessCoach: "व्यवसाय प्रशिक्षक",
            businessCoachDesc: "स्टार्टअप, फंडिंग आणि व्यवसाय वाढवण्याबद्दल शिकवतो.",
            educator: "शिक्षक",
            educatorDesc: "1000+ विद्यार्थ्यांना उद्योजकता आणि स्टार्टअप कौशल्ये शिकवली.",
            speaker: "वक्ता",
            speakerDesc: "100+ कार्यक्रमांमध्ये बोललो आणि तरुण उद्योजकांना प्रेरित केले.",
            myStory: "माझी स्टोरी",
            storyHeading: " माझ्या जीवनाची एक छोटीशी झलक पाहा आणि जाणून घ्या ती काही महत्त्वाची गोष्टी ज्या मला 2021 मध्ये एक टॉप बिझनेस लीडर बनवण्यात मदत केली.",
            views: "100+ मिलियन व्ह्यूज",
            BusinessCoach: "केवळ मराठी स्मॉल बिझनेस ओनर्सचा कोच",
            topLeader: " टॉप 100 लीडर इम्पॅक्ट",
            partnerAward: "कॉमसेंसला IBM कडून बेस्ट पार्टनर अवॉर्ड",
            course: "कोर्स",
            course1: `"महाराष्ट्रातील पहिला व्यवसाय कोर्स मराठीत."`,
            tagline1: "झिरो पासून 2 कोटी व्यवसायापर्यंत:",
            tagline2: "सक्सेसकडे एक मार्ग",
            chapterInfo: " उद्योजकतेच्या जगात पाऊल टाका आमच्या 15-चॅप्टर कोर्ससह, जो खास मराठी व्यवसायिकांसाठी तयार करण्यात आलेला आहे. हा कोर्स तुम्हाला तुमच्या व्यवसायाला पुढच्या पातळीवर नेण्यासाठी आवश्यक असलेले ज्ञान आणि प्रॅक्टिकल कौशल्ये देईल!",
            chapters: "15 चॅप्टर्स",
            chaptersContent: "5 तासांचा व्हिडिओ कंटेंट",
            knowMore: "अधिक जाणून घ्या",
            reasons: "माझ्याकडे येण्याचे टॉप 6 कारणे",
            reasonTitle1: "तुमचा स्वत:चा व्यवसाय सुरू करायचा आहे",
            reasonDesc1: "तुम्हाला तुमचा व्यवसाय सुरू करायचा आहे, पण त्यासाठी व्यवस्थितपणे कसा मार्ग स्वीकारावा हे समजत नसेल, तर मी तुम्हाला या प्रक्रियेत मार्गदर्शन करू शकतो. तुमच्या दृष्टिकोनाची सूक्ष्मताही समजून देईन आणि तुमच्या प्रवासात मदत करू शकतो.",
            reasonTitle2: "तुमच्या कर्मचार्‍यांसाठी प्रेरणा हवी आहे",
            reasonDesc2: "ज्याने ते अनुभवले आहे, त्याच्यापेक्षा चांगला प्रेरक कोणी नसतो. मी कर्मचारी प्रेरणा सत्रे घेतो आणि त्यांच्या कामगिरीत सुधारणा करण्यासाठी मदत करतो.",
            reasonTitle3: "त्या नोकरीला सोडून स्वत:चा व्यवसाय सुरू करायचा विचार करत आहात?",
            reasonDesc3: "आपण सर्वच उद्योजक होण्याची इच्छा बाळगतो, पण स्थिर नोकरी सोडण्याचे धाडस नाही. तुमच्याकडे कल्पना आहे, पण त्या उचलण्याचे धाडस नाही? मी तुम्हाला स्पष्ट आणि बांधकामात्मक अभिप्राय देऊ शकतो आणि कधी, कसा आणि का तुम्हाला उडी घेणे आवश्यक आहे हे सांगू शकतो.",
            reasonTitle4: "अपयशी व्यवसाय ज्याला तुम्ही पुन्हा सुरू करू इच्छिता",
            reasonDesc4: "तुम्ही एखादा उपक्रम सुरू केला पण तो यशस्वी झाला नाही? काळजी करू नका, मी व्यवसायांना पुन्हा सुरू करण्यास मदत करतो आणि उद्योजकांना भविष्यकाळासाठी तयार होण्यास मदत करतो.",
            reasonTitle5: "व्यवसाय स्थिर झाला आहे; वाढीच्या मार्गावर चालायचं आहे",
            reasonDesc5: "सर्व व्यवसाय एक ठराविक ठिकाणी येतात, पण वारंवार उंचावण्यासाठी सतत प्रयत्न करणे आवश्यक आहे. मी उद्योजकांना अडचणी ओलांडून अप्रतिम वाढ साधण्यास मदत करतो.",
            reasonTitle6: "वर्कप्लेस, युनिव्हर्सिटी किंवा विशिष्ट मंचांसाठी लीडरशिप स्किल्स स्पीकर शोधत आहात?",
            reasonDesc6: "मी उदयोन्मुख नेत्यांसोबत अनुभव आणि ज्ञान शेअर करायला आवडतो, ज्यामुळे ते त्यांच्या क्षमता अधिकतम करू शकतात. माझं मिशन आहे 1,000 व्यवसाय नेत्यांची निर्मिती करणे. तुम्हाला लीडरशिप सत्रासाठी स्पीकर हवेत, तर कृपया संपर्क करा.",
            awards: " पुरस्कार आणि यश",
            award1Title: "बिझनेस लीडर ऑफ द ईयर 2021",
            award1Year: "2021",
            award1Description: " सागर बाबर यांनी सह-स्थापित केलेली कॉमसेंस टेक्नोलॉजीसला Business Leader of the Year 2021 पुरस्कार मिळाला, जो The Economic Times आणि The World HRD Congress यांनी दिला.",
            award2Title: "Amplify 2017 – विल स्मिथसोबत भेट",
            award2Year: "2017",
            award2Description: " Amplify 2017 मध्ये, सागर बाबर यांना प्रसिद्ध अभिनेता विल स्मिथसोबत संवाद साधण्याचा मान मिळाला, ज्या भेटीमधून त्यांना मूल्यवान माहिती आणि प्रेरणा मिळाली.",
            award3Title: "शिवसन्मान पुरस्कार 2024",
            award3Year: "2024",
            award3Description: "सागर बाबर यांना शिवसन्मान पुरस्कार मिळाला, जो शरदचंद्रजी पवार यांच्या हस्ते छत्रपती शिवाजी महाराज जयंतीच्या निमित्ताने त्यांची असामान्य योगदान आणि यशासाठी दिला.",
            absolutly1: "अतिशय",
            worth: "फायदेशीर!",
            contactDesc: "जेव्हा तुम्ही माझ्याशी संपर्क साधता, तेव्हा तुम्ही केवळ संपर्क साधत नाही, तर एक वाढीच्या आणि संधींच्या जगात पाऊल ठेवता. तुमच्या विशिष्ट आव्हानांनुसार वैयक्तिक मार्गदर्शन, जलद प्रतिसाद आणि क्रियाशील रणनीतींची अपेक्षा करा. मग ते व्यवसाय संबंधित माहिती असो किंवा तुमच्या पुढच्या मोठ्या पावलासाठी समर्थन, मी तुमच्या यशासाठी येथे आहे. हा संपर्क नक्कीच फायदेशीर आहे!",
            footerDesc: " उद्योजक, व्यवसाय कोच, शिक्षक, लेखक, आणि ध्यान साधक 20+ वर्षांच्या अनुभवासह, सतत शिकण्यास आणि नाविन्याची अंगीकार केल्याने यशस्वी व्यवसाय मॉडेल्स तयार केले आहेत.",
            courseTagline: "",
            courseTitle1: "भरारी: 0-->२ कोटी व्यवसायाचे",
            courseTitle2: "यशस्वी भविष्य",
            courseDesc1: "उद्योजकतेच्या जगात प्रवेश करा .आमच्या १५ chapters च्या अभ्यासक्रमासोबत,",
            courseDesc2: "जो खास मराठी उद्योजकां साठी तयार केला आहे. या अभ्यासक्रमातून तुम्हाला तुमचा व्यवसाय",
            courseDesc3: "पुढील पातळीवर नेण्यासाठी आवश्यक ज्ञानआणि उपयोगी कौशल्ये मिळतील!",
            businessTitle: "व्यवसायाची योजना आणि रणनीती",
            businessDescription: "तुमच्या विशेष उद्दिष्टांनुसार एक मजबूत व्यवसाय योजना कशी तयार करावी ते शिका.",
            marketResearchTitle: "बाजार संशो धन आणिवि शेषता ओळखणे",
            marketResearchDescription: "तुमचा बाजार समजूनघ्या आणि तुमचास्पर्धा त्मक फायदा शोधा.",
            cashFlowTitle: "नगदी प्रवाह आणिवित्ती यव्यवस्था पन",
            cashFlowDescription: "तुमच्या वित्ताचे व्यवस्थापन आणि वाढवण्याचे मूलभूत तत्त्वे शिकून घ्या.",
            marketingTitle: "मार्केटिंग आणि विक्री वाढ",
            marketingDescription: "तुमचा व्यवसाय मार्केट करण्यासाठी आणि विक्री वाढवण्या साठी सिद्ध रणनीती.",
            customerServiceTitle: "ग्राहक सेवा उत्कृष्टता",
            customerServiceDescription: "विश्वास वाढवण्या साठी मजबूत ग्राहक नातेसंबंध निर्माण करण्या च्याटिप्स.",
            whatYoullLearnHeading1: "तुम्हाला काय",
            whatYoullLearnHeading2: "शिकता येईल",
            whatYoullLearnDescription: "",
            courseWho: "हा कोर्स",
            courseIs: "कोणासाठी",
            courseFor: "आहे?",
            courseFor1: "लहान व्यवसायाचे ",
            courseFor2: "उद्योजक बनण्याची इच्छा असणारे",
            courseFor3: "व्यवसाय सुरू करण्यासाठी ,वाढवण्या साठी शोधत असलेले.",
            why1: "हा कोर्स",
            why2: "का घ्यावा ?",
            reason1: "व्यवसायातील खऱ्या अडचणींवर उपयोगी उपाय मिळवा.",
            reason2: "सोप्या मराठीत, आपल्या आजूबाजूच्या बाजारपेठेशी संबंधित उदाहरणांसह शिका .",
            reason3: "कधीही, कुठेही ऑनलाइन सहज उपलब्ध.",
            faqTitle: "कोर्ससंबंधित वारंवार विचारले जाणारे प्रश्न (FAQs)",
            q1: "हा कोर्स ऑनलाइन आहे का ऑफलाइन?",
            a1: "हो, हा कोर्स पूर्णतः ऑनलाइन आहे. तुम्हाला रेकॉर्डेड सेशन्स मिळतील आणि यासोबत वर्कशीट्स सोडवण्यासाठी देखील मिळतील. यासोबतच एक लाइव्ह वर्कशॉप सुद्धा असेल.",
            q2: "या कोर्ससाठी काही वयोमर्यादा आहे का?",
            a2: "या कोर्ससाठी कोणतीही वयोमर्यादा नाही. ज्यांना बिझनेस सुरू करायचा आहे किंवा ज्यांनी व्यवसाय सुरू केला आहे आणि तो वाढवायचा आहे, अशा सर्वांसाठी हा कोर्स उपयुक्त आहे.",
            q3: "कोर्सचे ऍक्सेस किती काळासाठी आहे?",
            a3: "हो, बिझनेस कसा सुरू करावा आणि वाढवावा यासाठीचे कोर्सचे ऍक्सेस तुमच्याकडे आजीवन असेल.",
            q4: "हा कोर्स मोबाइलवर चालतो का?",
            a4: "हो, तुम्ही हा कोर्स कुठल्याही स्मार्टफोनवर, लॅपटॉपवर किंवा टॅबलेटवर पाहू शकता. सर्व डिव्हाइसेसवर हा कोर्स चालतो.",
            q5: "कोर्स पूर्ण केल्यावर सर्टिफिकेट मिळते का?",
            a5: "होय, कोर्स पूर्ण केल्यावर तुम्हाला सर्टिफिकेट दिले जाईल.",
            q6: "या कोर्समधील वर्कशीट्स डाउनलोड करू शकतो का?",
            a6: "होय, तुम्ही या कोर्समधील सर्व वर्कशीट्स डाउनलोड करू शकता.",
            q7: "हा कोर्स कोणत्याही वेळी करू शकतो का?",
            a7: "होय, तुम्ही हा कोर्स तुमच्या सोयीनुसार कोणत्याही वेळी आणि कधीही करू शकता.",
            q8: "हा कोर्स फक्त ऑनलाइनच आहे का? आमच्या परिसरात नेटवर्क कनेक्टिव्हिटी समस्या असल्याने व्हिडिओ डाउनलोड करता येईल का?",
            a8: "हो, हा कोर्स ऑनलाइनच आहे. तुम्ही व्हिडिओ डाउनलोड करू शकत नाही, त्यामुळे नेटवर्क कनेक्टिव्हिटी आवश्यक आहे. मात्र, तुम्ही वर्कशीट्स डाउनलोड करून सोडवू शकता.",
            q9: "जर मी हा कोर्स घेतला तर मला सागर सरांचे मार्गदर्शन मिळेल का?",
            a9: "हो, या कोर्समध्ये तुम्हाला पूर्णतः सागर सरांचे मार्गदर्शन मिळेल. ऑनलाइन वर्कशॉपमध्ये तुम्ही थेट प्रश्न विचारू शकता. त्याशिवाय, तुम्ही तुमचे प्रश्न मेलद्वारेही विचारू शकता.",
            q10: "माझ्याकडे ईमेल नाही आहे तर मी कोर्स जॉईन करू शकतो का?",
            a10: "नाही. तुम्हाला कोर्स जॉईन करण्यासाठी ईमेल पत्ता आवश्यक आहे.",
            q11: "हा कोर्स कसा जॉईन करायचा?",
            a11: "हा कोर्स कसा जॉईन करायचा याबद्दल अधिक माहितीसाठी, [डेमो व्हिडिओ पाहा](https://youtu.be/UWUllzpfLho)",
            q12: "कोर्स मेंबर्ससाठी तुमचा कोणता व्हॉट्सअॅप ग्रुप आहे का?",
            a12: "आमचा कोणताही व्हॉट्सअॅप ग्रुप नाही. जर तुम्हाला काही प्रश्न असतील तर तुम्ही मेलवर किंवा कोर्सच्या डिस्कशन सेक्शनमध्ये विचारू शकता.",
            q13: "पेमेंट केले आहे, पण कोर्स कसा पाहायचा?",
            a13: "तुम्ही [डेमो व्हिडिओ पाहा](https://youtu.be/UWUllzpfLho) या लिंकवर क्लिक करून, ज्यामुळे तुम्हाला कोर्स कसा पाहायचा याची माहिती मिळेल.",
            mentorTitle1: "तुमच्या ",
            mentorTitle2: "मेंटरला भेटा",
            mentorDesc1: "सागर बाबर हे एक उद्योजक, व्यवसाय मार्गदर्शक, शिक्षक, लेखक, ध्यान साधक आणि कंटेंट क्रिएटर आहेत. त्यांना व्यवसाय क्षेत्रात 20 पेक्षा जास्त वर्षांचा अनुभव आहे. त्यांनी शिकणे, विसरणे आणि प्रभावी व्यवसाय धोरणे अंमलात आणण्याची कला आत्मसात केली आहे. या अनुभवाच्या आधारावर, त्यांनी अनेक यशस्वी व्यवसाय मॉडेल्स तयार केली आहेत, जी प्रत्यक्ष परिणाम देण्यात सक्षम आहेत.",
            mentorDesc2: "व्यवसाय कौशल्यांव्यतिरिक्त, सागर बाबर हे कंटेंट क्रिएटर म्हणूनही ओळखले जातात. त्यांचे 2 लाखांहून अधिक फॉलोअर्स आहेत. ते मराठी समाजासाठी व्यवसायाशी संबंधित महत्त्वपूर्ण माहिती आणि मार्गदर्शन शेअर करतात. त्यांच्या कंटेंटच्या माध्यमातून, ते मराठी उद्योजकांना प्रेरणा आणि व्यवसायात यश मिळवण्यासाठी उपयोगी ठरतील असे ज्ञान उपलब्ध करून देतात."

        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem('language') || 'en',
        fallbackLng: "en",
        detection: {
            order: ['localStorage', 'navigator'],
            lookupLocalStorage: 'language',
            caches: ['localStorage']
        },
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;