import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoDribbble } from 'react-icons/bi';
import { FaSyringe, FaStethoscope, FaHandHoldingMedical, FaProcedures, FaNotesMedical, FaTooth } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { FiPhoneCall } from 'react-icons/fi';

export const categoryItems = [
  {
    id: 1,
    icon: <FaSyringe />,
    title: 'All Products',
  },
  {
    id: 2,
    icon: <FaStethoscope />,
    title: 'Germs Pads',
  },
  {
    id: 3,
    icon: <FaHandHoldingMedical />,
    title: 'Accessories',
  },
  {
    id: 4,
    icon: <FaProcedures />,
    title: 'Medicine Cap',
  },
  {
    id: 5,
    icon: <FaNotesMedical />,
    title: 'Best Deals',
  },
  {
    id: 6,
    icon: <FaTooth />,
    title: 'Dental Item',
  },
  {
    id: 7,
    icon: <FaTooth />,
    title: 'Dental Item',
  },
  {
    id: 8,
    icon: <FaTooth />,
    title: ' Dental Item',
  },
];

export const products = [
  {
    id: 1,
    name: 'Hand Sanitizer',
    path: 'hand-sanitizer',
    price: 32,
    image: '/images/products/handSanitizer.png',
    detailImage: ['/images/products/handSanitizer.png'],
    description: `Show you care about well-being with PURELL Advanced Hand Sanitizer Refreshing Gel, which eliminates 99.99 percent of germs on hands.Features a refreshing clean scent and evaporates quickly for easy, convenient sanitizing when soap and water aren’t available.

    
    Mild formula and a blend of four moisturizers means hands feel soft even with frequent use; it’s free of triclosan, parabens, phthalates, and preservatives so it doesn’t dry out or irritate skin.Place these 1-Liter PURELL pump bottles in high-traffic areas where frequent hand sanitization is needed, including classrooms, office reception areas, breakrooms, and large indoor or outdoor events.
    `,
    sellCount: 430,
  },
  {
    id: 2,
    name: 'Stethoscope',
    path: 'stethoscope',
    price: 80,
    image: '/images/products/stethoscope1.png',
    detailImage: ['/images/products/stethoscope1.png', '/images/products/stethoscope2.png', '/images/products/stethoscope3.png'],
    description: `LIGHT WEIGHT MATERIAL-  Adult size stethoscopes are created from latex-free materials, with an aluminium double head and for all manners of medical professionals. It has an adjustable chrome-plated binaural with PVC ear-tips.

    ACCURATE AND PRECISE  This latex free stethoscope ensures that you get accurate information when it comes to your patients vitals TUNABLE DIAPHRAGM: Hear high or low frequency sounds by slightly adjusting pressure on the chestpiece. 

    Wide range quality performance,Imported Diaphragm,Jointless Tube- MEDICAL GRADE - Excellent stethoscope that makes it perfect for professional medical use. Great for doctors offices, emergency rooms, ICUs, and SDUsSOFT SEALING EAR KNOBS - Ear knobs are made of synthetic material, thus providing a cushion comfort to the ears. Once, placed in the ear canal, they provide excellent acoustic seal, thus preventing any external noises.
    `,
    sellCount: 20,
  },
  {
    id: 3,
    name: 'Blood Pressure Monitor',
    path: 'blood-pressure-monitor',
    price: 95,
    image: '/images/products/bpMonitor.png',
    detailImage: ['/images/products/bpMonitor.png'],
    description: `Our Blood Pressure Monitor with custom-made large LED screens give you a great visual experience, making readings clearer and users can view the results more quickly. Clear large fonts and High-Def Backlit Screen offers clear reading at nighttime for advanced measurement experience. 

    Fully automatic blood pressure checker has advanced measuring techniques, to provide you the most accurate reading. Convenient to track your health every day. The Blood Pressure Machine is fully automatic, just need to press one "Start" button to measure your blood pressure and heart rate. 

    All process just need half minute. Blood Pressure Monitor is sensitive enough to track heartbeat failures that might go unnoticed by you. That is, by measuring the pressure, you can also check your heart rate.`,
    sellCount: 17,
  },
  {
    id: 4,
    name: 'Medical Gloves',
    path: 'medical-gloves',
    price: 5,
    image: '/images/products/gloves.png',
    detailImage: ['/images/products/gloves.png'],
    description: `Created with medical grade synthetic rubber, the Medpride disposable gloves offer higher puncture resistance, are highly stretchable and mighty durable as they feature a beaded handcuff design. Featuring the ideal thickness and textured fingertips, our exam gloves allow for supreme tactile sensitivity and total control in cases where precision control with small equipment is necessary.`,
    sellCount: 700,
  },
  {
    id: 5,
    name: 'Thermometer Gun',
    path: 'thermometer-gun',
    price: 43,
    image: '/images/products/thermometer1.png',
    detailImage: ['/images/products/thermometer1.png', '/images/products/thermometer2.png'],
    description: `Just position the thermometer and click the button; the infrared technology immediately displays the temperature on the large, easy-view screen. This no-touch thermometer won't disturb baby and has a silent, red light alert to let you know right away if a fever is detected. This versatile thermometer features a mode for checking bath water and formula temperatures.`,
    sellCount: 44,
  },
  {
    id: 6,
    name: 'Mask',
    path: 'mask',
    price: 22,
    image: '/images/products/mask.png',
    detailImage: ['/images/products/mask.png'],
    description: `The adjuctable nose clip helps provide a secure seal. Lightweight, vertical flat-fold design provides convenient storage and portability.  3M’s Advanced Electrostatic Media filters dust and other particles while allowing for easy breathing`,
    sellCount: 124,
  },
  {
    id: 7,
    name: 'Safety Glass',
    path: 'safety-glass',
    price: 21,
    image: '/images/products/glass1.png',
    detailImage: ['/images/products/glass1.png', '/images/products/glass2.png'],
    description: `Thermoplastic Polyurethane (TPU) frame, Anti-Fog Coating coating, Polycarbonate lens, Suitable for multi-conditions like construction, DIY Projects, yardwork, Lab Work or daily protective eyewear, light and comfortable to wear. Wrap-Around lenses safety googles to protect your eyes from dust, droplet, flying debris, chemical splash. You can pull out the bottom of goggles leg/ ear frame, adjust the length to fit your face.`,
    sellCount: 70,
  },
  {
    id: 8,
    name: 'Breathing Exerciser',
    path: 'breathing-exerciser',
    price: 17,
    image: '/images/products/breathing.png',
    detailImage: ['/images/products/breathing.png'],
    description: `Compact, high quality break-resistant plastic, 3-ball inhaling breath measurement system. Removal bottom for thorough cleaning and hygiene maintenance. Helps achieve optimum lung capacity and restoring disrupted breathing patterns`,
    sellCount: 67,
  },
  {
    id: 9,
    name: 'Nebulizer',
    path: 'nebulizer',
    price: 24,
    image: '/images/products/nebulizer.png',
    detailImage: ['/images/products/nebulizer.png'],
    description: `With this technology a mesh with 1000–7000 laser drilled holes vibrates at the top of the liquid reservoir, and thereby pressures out a mist of very fine droplets through the holes. This technology is more efficient and achieved shorter times. This unit have been designed to be small, quiet and portable, with the intention of improving convenience and appeal to the user and to allow for the maintenance of an active lifestyle. It's suitable for the whole family`,
    sellCount: 203,
  },
  {
    id: 10,
    name: 'Syringe',
    path: 'syringe',
    price: 3,
    image: '/images/products/syringe.png',
    detailImage: ['/images/products/syringe.png'],
    description: `3ml syringes with 23ga/1",individually packaging,pack of 100.  Luer lock makes the needle will not fall off easily, and the protective cover makes it more secure. Thick barrel, clear & well-printed measuring marks. Suitable for science lab, Chemical analysis or industrial precise applications of measuring liquids,Can be used for ink refilling, measuring and dispensing fluid, garden watering, essential oil, perfume separator, lubricants, sealants, glue adhesives applicator, etc.`,
    sellCount: 312,
  },
  {
    id: 11,
    name: 'Torniquetes',
    path: 'torniquetes',
    price: 12,
    image: '/images/products/torniquetes.png',
    detailImage: ['/images/products/torniquetes.png'],
    description: `Well designed for one-hand operation tourniquet, quickly controls life-threatening extremity bleeding, Even you are traveling outside and unexpectedly injured without nobody accompanied with, you can also be treated by your own with it. Tactical tourniquet made of nylon and cellulose break,The red tip provides users with more obvious visual help. 
    
    Composite buckles designed to resist breaking in cold weather on impact. Hold arms and thighs of all sizes because of adjustable tourniquet.It can be reusable after disinfection.`,
    sellCount: 27,
  },
  {
    id: 12,
    name: 'Medical Box',
    path: 'medical-box',
    price: 35,
    image: '/images/products/medicalBox.png',
    detailImage: ['/images/products/medicalBox.png'],
    description: `With a see-through lid and additional partition, you can easily identify and segregate the contents of the box, ensuring you can quickly find the correct medicine or equipment during an emergency. The box is made of high-quality, BPA-free plastic, which is reusable and recyclable. Don't waste time searching for medical supplies during an emergency - keep them organized and readily accessible with the  Handy First Aid Medical Box. 
    
    Whether you need a first aid kit box, medical tool box, or storage box for medicine, this medical box is an essential addition to your home or office.`,
    sellCount: 41,
  },
];

export const news = [
  {
    id: 1,
    title: 'In Conversation: What do we know about the gut microbiome in IBD?',
    content1: `Inflammatory bowel disease (IBD) is an umbrella-term that encompasses ulcerative colitis and Crohn’s disease, two chronic gastrointestinal conditions characterized by inflammation of the gut.
    
    Some of the symptoms of IBD include nausea and vomiting, blood in stool, diarrhea, abdominal pain, fatigue, and irregularities in the menstrual cycle — all of these are invisible issues that can severely impactTrusted Source a person’s quality of life on a daily basis.
    IBD affects many people all over the world. In the United States, for example, around 1% of all adults have diagnosed IBD — and while that may seem like a small percentage overall, it actually amounts to approximately 2 million people.

    In the United Kingdom, the most recent estimates suggest that IBD affects around 0.8% of the population, or around 131,000 people.\n 
    And that figure may be a serious underestimate of the real prevalence of IBD, as both Crohn’s and ulcerative colitis have symptoms that can also be attributed to other chronic conditions, which often makes them difficult to diagnose.

    Research from the U.K. published in the Journal of Crohn’s and Colitis in 2020 suggested that an individual could see their doctor in relation to persistent gastrointestinal symptoms for 5 years before they receive the correct diagnosis of IBD.
   `,

    image: '/images/news/news-1.png',
    subTitle: 'A different gut microbiome',
    content2: `Yet recent research shows that in people with IBD, the gut microbiome — the community of bacteria and other microorganisms in the gastrointestinal tract — has certain particularities that set it apart from the microbiomes of healthy individuals, and which may offer clues to better treatments. \n
    In this episode of our In Conversation podcast, we speak to Dr. Marcel de Zoete, an associate professor in the Department of Medical Microbiology at UMC Utrecht, The Netherlands. \n
    In January 2023, Dr. de Zoete and his colleagues published a paper in the International Journal of Systematic and Evolutionary Microbiology, showing that people with IBD had two previously unidentified bacterial species in their intestinal tracts — a new species of Allobaculum mucilyticum, and a new species of Allobaculum fili. This finding may offer important clues about the underlying mechanisms in IBD, as well as potential new treatments.`,
    createDate: new Date().toLocaleString('en-us', { month: 'long', day: '2-digit', year: 'numeric' }),
  },
  {
    id: 2,
    title: 'Running therapy may be as beneficial for depression as antidepressants',
    content1: `Many people experience depression, and sometimes it is situational or mild, which may not require treatment. However, other people experience depression to a more severe degree. \n
    In the case of people with clinical depression, treatments that include psychological therapy and/or specific medications may be appropriate.\n
    According to the National Alliance on Mental Illness, 8.3% of adults in the United States experience a major depressive episode every year. Additionally, the Centers for Disease Control and PreventionTrusted Source (CDC) report that 13.2% of adults take an antidepressant.\n
    Since depression is so prevalent, scientists are interested in improving treatments. Researchers in Amsterdam wondered whether running could be as beneficial as taking an antidepressant.\n
    To do this, the researchers recruited more than 100 people to participate in a study that compared the effects of running and antidepressants on improving depression and anxiety symptoms. Each group followed 16-week regimens of either participating in running therapy or taking an antidepressant.\n
    `,
    image: '/images/news/news-2.png',
    subTitle: 'Boosting endorphins with physical activity',
    content2: `Depression and anxiety are both common mental health issues in the U.S. In addition to the impact these issues have on someone’s mental well-being, they can affect physical health. \n
    American Heart AssociationTrusted Source reports that over time, chronic depression can lead to heart disease because of higher levels of cortisol. \n
    The impacts on both mental and physical health make treating ongoing depression of utmost importance. Many doctors prescribe medications from antidepressant classes such as selective serotonin reuptake inhibitors (SSRIs), serotonin and norepinephrine reuptake inhibitors (SNRIs), and tricyclic antidepressants.
    `,
    createDate: new Date().toLocaleString('en-us', { month: 'long', day: '2-digit', year: 'numeric' }),
  },
  {
    id: 3,
    title: 'Could drinking tea every day reduce type 2 diabetes risk?',
    content1: `Type 2 diabetes occurs when the body is unable to regulate blood sugar levels, usually because the body stops responding correctly to insulin, the hormone that controls blood glucose. If uncontrolled, type 2 diabetes can lead to high blood pressure, cardiovascular disease, nerve damage, vision loss, and kidney damage. \n
    The condition currently affects around 462 million peopleTrusted Source worldwide and numbers are rising. In the United States alone, more than 37 million people have diabetes, and 96 million have prediabetes, a condition where blood glucose levels are higher than they should be, which often leads to type 2 diabetes.\n
    Lifestyle changes are the best way to reduce the risk of developing type 2 diabetes, and, alongside medication, to control symptoms of the condition. Doctors recommend a healthful diet, including plenty of fresh vegetables, whole grains, protein, and heart-healthy fats, together with regular exercise and maintaining a healthy body mass indexTrusted Source (BMI).
    `,
    image: '/images/news/news-3.png',
    subTitle: 'Regular tea drinkers have better blood glucose control',
    content2: `A total of 562 men and 1,361 women ages 20–80 years from eight provinces in China took part in the study. Of them, 436 had diabetes, 352 had prediabetes, and 1,135 had healthy blood glucose levels. \n
    Of the 1,923 people, 1,000 were habitual tea drinkers. They drank different types of tea — 300 reported drinking green tea, 125 black tea, 521 dark tea, and 54 people drank other types of tea. All drank their tea without milk or sugar. \n
    The researchers looked for any association between the frequency and type of tea consumption and the excretion of glucose in the urine, which they assessed using the morning spot urine glucose-to-creatine ratio (UGCR)Trusted Source. They also measured insulin resistance and recorded glycaemic status (a history of type 2 diabetes, current use of antidiabetic medications, or an abnormal 75g oral glucose tolerance test).
    `,
    createDate: new Date().toLocaleString('en-us', { month: 'long', day: '2-digit', year: 'numeric' }),
  },
  {
    id: 4,
    title: 'Walking difficulties could be an early sign of Alzheimer’s disease',
    content1: `People who have difficulty walking may be showing an early indicator of Alzheimer’s disease.That’s according to a new studyTrusted Source published in the journal Current Biology. \n
    In their findings, researchers reported that people with early Alzheimer’s have difficulty turning when walking, according to the study using virtual reality led by researchers from University College London.\n
    The scientists from University College London used a virtual reality process and a computational model to explore the intricacies of navigational errors previously observed in people with Alzheimer’s.
    `,
    image: '/images/news/news-4.png',
    subTitle: 'How the Alzheimer’s walking study was conducted',
    content2: `Professor Neil Burgess and colleagues in the Space and Memory group at the UCL Institute of Cognitive Neuroscience grouped participants into three categories: 31 healthy younger participants, 36 healthy older participants, and 43 subjects with mild cognitive impairment. \n
    The group with mild cognitive impairment was divided into three subgroups based on their cerebrospinal fluid (CSF) biomarker status. Of those, 11 participants tested positive for biomarker evidence of underlying Alzheimer’s disease. \n
    Researchers then asked subjects to complete a task while wearing virtual reality goggles.Participants walked an outbound route guided by numbered cones, consisting of two straight legs connected by a turn. They then had to return to their starting position unguided.\n
    Subjects did the test under three different environmental conditions meant to stress their navigational skills: an unchanged virtual environment, the ground details being replaced by a plain texture, and the temporary removal of all landmarks from the virtual reality world.
    `,
    createDate: new Date().toLocaleString('en-us', { month: 'long', day: '2-digit', year: 'numeric' }),
  },
  {
    id: 5,
    title: 'How to increase hemoglobin: Home remedies',
    content1: `Hemoglobin is an iron-rich protein found in the red blood cells. These are responsible for carrying oxygen throughout the body. \n
    Low levels of hemoglobin may be a sign of anemia. This occurs when a person does not have enough red blood cells or they stop functioning properly. Anemia leads to a lack of oxygen in the body, which may be dangerous.\n
    Nearly 3 millionTrusted Source people in the United States have some type of anemia.In this article, we discuss hemoglobin levels, how to increase them naturally, and the causes of anemia.
    `,
    image: '/images/news/news-5.png',
    subTitle: 'How to increase hemoglobin',
    content2: `Increase iron intake: Iron works to boost the production of hemoglobin, which also helps to form more red blood cells. Low iron levels can result in low levels of red blood cells, which means not enough oxygen will be transported throughout the body. \n
    Increase folate intake: Folate is a type of B vitamin that plays an essential part in hemoglobin production. The body uses folate to produce heme, a component of hemoglobin that helps carry oxygen.Red blood cells will not be able to mature if a person does not get enough folate. This may lead to folate-deficiency anemia and low hemoglobin levels. \n
    Maximize iron absorption: vitamin C, vitamin A, beta-carotene \n
    Take iron supplements: A doctor may advise a person with extremely low hemoglobin levels to take iron supplements.These work by gradually increasing the body’s iron levels over a few weeks. A doctor may also recommend taking them for several months to increase the body’s iron stores.It is important to note that too much iron can be dangerous.
    `,
    createDate: new Date().toLocaleString('en-us', { month: 'long', day: '2-digit', year: 'numeric' }),
  },
  {
    id: 6,
    title: 'Could unsweetened coffee help with weight management?',
    content1: `Coffee might be enjoyable as a beverage, but experts are still working on understanding its full health benefits and how adding other ingredients, such as cream or sugar, may influences potential health benefits. \n
    A study recently published in The American Journal of Clinical Nutrition has now found that drinking unsweetened coffee was associated with a small amount of weight loss, while adding sugar to coffee was associated with some weight gain.\n
    The results indicate that drinking unsweetened coffee might benefit weight management. However, they should be replicated with future research to confirm the findings.
    `,
    image: '/images/news/news-6.png',
    subTitle: 'Does coffee help with weight loss?',
    content2: `For this research, the authors wanted to see if drinking coffee contributed to weight loss. They also wanted to examine how adding cream, sugar, or non-dairy whitener to the coffee influenced the health outcome. \n
    This research examined data from three major health studies: the Nurses’ Health Study, the Nurses’ Health Study II, and the Health Professionals Follow-up Study. This allowed researchers access to a large amount of data and participants. \n
    Researchers were able to look at data from food frequency questionnaires that participants filled out at baseline and then every 4 years. Participants answered how often they consumed coffee, decaffeinated or regular, and how much cream, sugar, or non-dairy whitener they added. Researchers did not examine adding fat-free creamer or whitener or adding milk.
    `,
    createDate: new Date().toLocaleString('en-us', { month: 'long', day: '2-digit', year: 'numeric' }),
  },
];

export const links = {
  companyLinks: [
    {
      id: 1,
      name: 'About',
      to: '/about',
    },
    {
      id: 2,
      name: 'Blog',
      to: '/news',
    },
    {
      id: 3,
      name: 'All Products',
      to: '/products',
    },
    {
      id: 4,
      name: 'Locations',
      to: '/contact',
    },
    {
      id: 5,
      name: 'FAQ',
      to: '/about',
    },
    {
      id: 6,
      name: 'Contact Us',
      to: '/contact',
    },
  ],
  serviceLinks: [
    {
      id: 1,
      name: 'Order Tracking',
      to: '/about',
    },
    {
      id: 2,
      name: 'Wish List',
      to: '/wishlist',
    },
    {
      id: 3,
      name: 'Login',
      to: '/',
    },
    {
      id: 4,
      name: 'My Account',
      to: '/contact',
    },
    {
      id: 5,
      name: 'Terms & Conditions',
      to: '/about',
    },
    {
      id: 6,
      name: 'Promotional Offers',
      to: '/about',
    },
  ],
  customerLinks: [
    {
      id: 1,
      name: 'Login',
      to: '/',
    },
    {
      id: 2,
      name: 'My Account',
      to: '/',
    },
    {
      id: 3,
      name: 'Wish List',
      to: '/wishlist',
    },
    {
      id: 4,
      name: 'Order Tracking',
      to: '/about',
    },
    {
      id: 5,
      name: 'FAQ',
      to: '/about',
    },
    {
      id: 6,
      name: 'Contact Us',
      to: '/contact',
    },
  ],
  socialMedia: [
    {
      id: 1,
      icon: <BiLogoFacebook />,
      href: 'https://www.facebook.com/',
    },
    {
      id: 2,
      icon: <BiLogoTwitter />,
      href: 'https://twitter.com/',
    },
    {
      id: 3,
      icon: <BiLogoInstagram />,
      href: 'https://www.instagram.com/',
    },
    {
      id: 4,
      icon: <BiLogoDribbble />,
      href: 'https://dribbble.com/',
    },
  ],
  contactLinks: [
    {
      id: 1,
      content: '15/A, Nest Tower, NYC',
      icon: <CiLocationOn />,
      href: 'http://maps.google.com/?q=1200 Pennsylvania Ave SE, Washington, District of Columbia, 20003',
    },
    {
      id: 2,
      content: '+0123-456789',
      icon: <FiPhoneCall />,
      href: 'tel:+0123-456789',
    },
    {
      id: 3,
      content: 'info@webmail.com',
      icon: <AiOutlineMail />,
      href: 'mailto:info@webmail.com',
    },
  ],
  navLinks: [
    {
      id: 1,
      name: 'Home',
      to: '/',
    },
    {
      id: 2,
      name: 'About',
      to: '/about',
    },
    {
      id: 3,
      name: 'Shop',
      to: '/products',
    },
    {
      id: 4,
      name: 'News',
      to: '/news',
    },
    {
      id: 5,
      name: 'Contact',
      to: '/contact',
    },
  ],
};
