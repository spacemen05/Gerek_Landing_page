/* =====================================================================
   GEREK LANDING PAGE: CONTENT CONFIG
   =====================================================================

   This is the only file you need to edit to change what the page says.
   You never need to touch index.html, style.css or main.js.

   HOW TEXT WORKS
   Every piece of text is a pair:   { bm: "Bahasa Malaysia", en: "English" }
   Change either side. If one side is left empty (""), the page shows
   the other language instead, so nothing ever goes blank.

   RULES THAT KEEP THE PAGE WORKING
   - Keep the quote marks "..." around text.
   - Keep the comma at the end of each line/item.
   - Links must start with https://  (anything else is ignored).
   - Image paths are relative to this folder, e.g. "assets/team/aisyah.jpg". 

   After saving, refresh the page in your browser to check it.
   ===================================================================== */

window.GEREK_CONFIG = {

  /* Language shown on first visit: "bm" or "en".
     Visitors can switch with the BM / EN buttons, and the page
     remembers their choice. You can also link to ?lang=en directly. */
  defaultLang: "bm",

  contact: {
    email: "gerekco@gmail.com",
    instagram: "gerekcorp", // handle only, without the @
  },


  /* -------------------------------------------------------------------
     SURVEYS
     -------------------------------------------------------------------
     One card per entry. While  url  is empty ("") the card shows
     "Akan datang / Coming soon". Paste a Google Forms (or any https)
     link into  url  and the card becomes a live button. That's it.

     minutes: rough time to complete, shown on the card. Use null to hide.
     Delete a whole { ... } block to remove a card; copy one to add a card.
  ------------------------------------------------------------------- */
  surveys: [
    {
      url: "",
      minutes: 3,
      title: { bm: "Untuk ibu bapa", en: "For parents" },
      description: {
        bm: "Bagaimana anak anda ke sekolah, apa yang merisaukan anda, dan apa yang anda mahu daripada sebuah aplikasi.",
        en: "How your child gets to school, what worries you, and what you'd want from an app.",
      },
    },
    {
      url: "",
      minutes: 3,
      title: { bm: "Untuk pemandu van dan bas sekolah", en: "For van and school bus drivers" },
      description: {
        bm: "Cara anda menguruskan laluan, penumpang dan yuran hari ini.",
        en: "How you manage your route, passengers and fees today.",
      },
    },
    {
      url: "",
      minutes: 3,
      title: { bm: "Untuk sekolah dan guru", en: "For schools and teachers" },
      description: {
        bm: "Bagaimana urusan hantar dan ambil murid berjalan di pintu pagar sekolah anda.",
        en: "How drop-off and pick-up work at your school gate.",
      },
    },
  ],


  /* -------------------------------------------------------------------
     SURVEY STATS (Problem & proof section)
     -------------------------------------------------------------------
     !! THE NUMBERS BELOW ARE SAMPLES, NOT REAL RESULTS !!
     Replace them with aggregates from your survey responses, then set
     sample: false  to remove the "Sample figures" notice on the page.

     Aggregates only: never put respondent names, emails or quotes here.

     Each stat renders as "count of total" + label, with a row of
     van seats (total seats, count filled). Keep total the same as the
     number of people who answered that question.
  ------------------------------------------------------------------- */
  stats: {
    sample: false,
    source: {
      bm: "Daripada Kajian Pengangkutan Pelajar Gerek: 30 responden (26 ibu bapa atau penjaga) di 9 negeri, Jun hingga Ogos 2026.",
      en: "From the Gerek Student Transportation Survey: 30 respondents (26 parents or guardians) across 9 states, June to August 2026.",
    },
    items: [
      {
        count: 27, total: 30,
        label: {
          bm: "responden akan mempertimbangkan aplikasi khas untuk pengangkutan pelajar",
          en: "respondents would consider a dedicated student transport app",
        },
      },
      {
        count: 26, total: 30,
        label: {
          bm: "responden menyatakan keselamatan sebagai kebimbangan utama",
          en: "respondents named safety as a top concern",
        },
      },
      {
        count: 24, total: 30,
        label: {
          bm: "responden berkata penjejakan masa nyata akan meningkatkan keyakinan mereka",
          en: "respondents said real-time tracking would raise their confidence",
        },
      },
      {
        count: 17, total: 30,
        label: {
          bm: "responden pernah mengalami masalah pengangkutan, paling kerap pemandu lewat",
          en: "respondents have had transport problems, most often a late driver",
        },
      },
    ],
  },


  /* -------------------------------------------------------------------
     TEAM
     -------------------------------------------------------------------
     photo:    path to a square image, e.g. "assets/team/aisyah.jpg"
               (put the file in assets/team/). Leave "" to show initials.
     bio:      optional list of short lines (degree, current role...).
               Leave [] to hide.
     linkedin: full profile URL starting with https://  Leave "" to hide.
     Delete the whole team list contents  team: []  to hide the section.
  ------------------------------------------------------------------- */
  team: [
    {
      name: "Muhammad Iman Thaqif bin Nasaruddin",
      role: { bm: "Pengasas dan Pemilik Produk", en: "Founder and Product Owner" },
      photo: "assets/team/iman.jpg",
      bio: [
        { bm: "Ijazah Sarjana Muda Sains Komputer (Sains Data)", en: "Bachelor of Computer Science (Data Science)" },
        { bm: "Pelatih Sains Data @ Telekom Malaysia", en: "Data Science Intern @ Telekom Malaysia" },
      ],
      linkedin: "https://www.linkedin.com/in/imanthaqif ",
    },
    {
      name: "Amirul Hilman bin Mohd Yazid",
      role: { bm: "Ketua Teknikal dan Operasi", en: "Technical & Operations Lead" },
      photo: "assets/team/amirul.jpg",
      bio: [
        { bm: "Ijazah Sarjana Muda Sains Komputer (Kejuruteraan Perisian)", en: "Bachelor of Computer Science (Software Engineering)" },
        { bm: "Pelatih Kejuruteraan Perisian @ PNB", en: "Software Engineering Intern @ PNB" },
      ],
      linkedin: "https://www.linkedin.com/in/amirul-hilman-2a9b70325 ",
    },
    {
      name: "Nur Arissa Hanani Mohamed Adzlan",
      role: { bm: "Penganalisis Pemasaran", en: "Marketing Analyst" },
      photo: "assets/team/arissa.jpg",
      bio: [
        { bm: "Ijazah Sarjana Muda Sains Komputer (Sains Data)", en: "Bachelor of Computer Science (Data Science)" },
        { bm: "Pelatih Sains Data @ AeroDarat Services", en: "Data Science Intern @ AeroDarat Services" },
      ],
      linkedin: "https://www.linkedin.com/in/nur-arissa-hanani-mohamed-adzlan-666702386 ",
    },
  ],


  /* -------------------------------------------------------------------
     PAGE TEXT
     ------------------------------------------------------------------- */
  copy: {

    meta: {
      title: {
        bm: "Gerek: Jejak van sekolah anak anda",
        en: "Gerek: Track your child's school van",
      },
      description: {
        bm: "Gerek mendigitalkan van makcik dan pakcik serta bas sekolah: jejak secara langsung, makluman naik van dan bayaran yuran dalam satu aplikasi.",
        en: "Gerek digitalises Malaysia's school vans and buses: live tracking, boarding alerts and fee payments in one app.",
      },
    },

    ui: {
      skip: { bm: "Langkau ke kandungan", en: "Skip to content" },
      langGroup: { bm: "Bahasa", en: "Language" },
      themeDark: { bm: "Mod gelap", en: "Dark mode" },
      newTab: { bm: "(dibuka di tab baharu)", en: "(opens in a new tab)" },
      of: { bm: "daripada", en: "of" },
    },

    hero: {
      // The slogan is the brand line, so it stays in English in both
      // languages. Translate the bm side if you want a BM version.
      slogan: {
        bm: "We Carry What Matters Most",
        en: "We Carry What Matters Most",
      },
      pitch: {
        bm: "Satu aplikasi untuk melihat di mana van sekolah anak anda, tahu sebaik sahaja mereka naik, dan membayar yuran bulanan.",
        en: "One app to see where your child's school van is, know the moment they board, and pay the monthly fee.",
      },
      cta: { bm: "Jawab kaji selidik", en: "Take the survey" },

      // The two example phone alerts in the hero illustration.
      alertsLabel: {
        bm: "Contoh makluman Gerek pada telefon ibu bapa",
        en: "Example Gerek alerts on a parent's phone",
      },
      alertBoarded: {
        time: { bm: "7:04 pg", en: "7:04 am" },
        title: { bm: "Ahmad sudah naik van", en: "Ahmad boarded the van" },
        body: { bm: "Dijangka tiba di SMK Hillcrest pada 7:20 pg.", en: "Expected at SMK Hillcrest by 7:20 am." },
      },
      alertNear: {
        time: { bm: "6:58 pg", en: "6:58 am" },
        title: { bm: "Van tiba dalam 5 minit", en: "Van arriving in 5 minutes" },
        body: { bm: "Pak Ragaman hampir sampai. Masa untuk siapkan Ahmad.", en: "Mr. Ragaman is nearly there. Time to get Ahmad ready." },
      },
    },

    survey: {
      heading: { bm: "Bantu kami membentuk Gerek", en: "Help shape Gerek" },
      intro: {
        bm: "Kongsi bagaimana pengangkutan sekolah berjalan untuk anda hari ini. Jawapan anda menentukan apa yang kami bina dahulu.",
        en: "Tell us how school transport works for you today. Your answers decide what we build first.",
      },
      open: { bm: "Buka kaji selidik", en: "Open survey" },
      comingSoon: { bm: "Akan datang", en: "Coming soon" },
      minutes: { bm: "Kira-kira {n} minit", en: "About {n} minutes" },
      // Shown under the cards only while no survey has a link yet.
      waiting: {
        bm: "Kaji selidik akan dibuka tidak lama lagi. Ikuti kami di Instagram untuk tahu bila ia dibuka:",
        en: "Surveys open soon. Follow us on Instagram to hear when they do:",
      },
    },

    proof: {
      heading: {
        bm: "Perjalanan ke sekolah masih bergantung pada WhatsApp",
        en: "The school run still runs on WhatsApp",
      },
      body: {
        bm: "Banyak van sekolah di Malaysia dikendalikan oleh makcik dan pakcik secara persendirian. Ibu bapa berhubung melalui kumpulan WhatsApp, membayar secara tunai, dan tidak dapat melihat di mana van berada sehingga ia tiba di depan rumah.",
        en: "Many of Malaysia's school vans are run by independent makcik and pakcik drivers. Parents coordinate in WhatsApp groups, pay in cash, and can't see where the van is until it pulls up outside.",
      },
      sampleNotice: {
        bm: "Angka contoh. Keputusan sebenar kaji selidik akan dikemas kini.",
        en: "Sample figures. Real survey results are on the way.",
      },
    },

    about: {
      heading: { bm: "Kenapa nama kami Gerek", en: "Why we're called Gerek" },
      word: { bm: "Gerek", en: "Gerek" },
      wordClass: { bm: "kata nama, dialek Kedah lama", en: "noun, old Kedah dialect" },
      meaning: { bm: "basikal.", en: "basikal; a bicycle." },
      origin: {
        bm: "Itulah panggilan generasi lama di Kedah untuk basikal, cara pertama ramai antara kita pergi ke sekolah sendiri. Menghantar anak ke sekolah dengan selamat ialah tugas yang sudah lama wujud. Kami percaya ia patut mendapat alat yang lebih baik.",
        en: "It's what an older generation in Kedah called the bicycle, the first way many of us got ourselves to school. Getting children to school safely is an old job. We think it deserves better tools.",
      },
      missionHeading: { bm: "Apa yang kami lakukan", en: "What we do" },
      mission: {
        bm: "Kami mendigitalkan van makcik dan pakcik serta bas sekolah yang membawa anak-anak Malaysia setiap hari persekolahan, tanpa menggantikan pemandu yang sudah dipercayai oleh keluarga.",
        en: "We're digitalising the makcik and pakcik vans and bas sekolah that carry Malaysia's children every school day, without replacing the drivers families already trust.",
      },
      safetyHeading: { bm: "Keselamatan kanak-kanak didahulukan", en: "Child safety comes first" },
      safety: {
        bm: "Setiap ciri dinilai dengan satu soalan: adakah ia membantu ibu bapa tahu anak mereka selamat? Sebab itu makluman naik van, penjejakan langsung dan butang kecemasan didahulukan.",
        en: "Every feature is judged by one question: does it help a parent know their child is safe? That's why boarding alerts, live tracking and an emergency button come first.",
      },
    },

    objectives: {
      heading: { bm: "Apa yang kami bina", en: "What we're building" },
      intro: {
        bm: "Dua aplikasi yang berhubung antara satu sama lain secara masa nyata.",
        en: "Two apps that talk to each other in real time.",
      },
      apps: [
        {
          name: { bm: "Aplikasi ibu bapa", en: "Parent app" },
          summary: { bm: "Untuk ibu bapa dan pelajar.", en: "For parents and students." },
          features: [
            { bm: "Jejak van secara langsung di peta, dengan anggaran masa tiba", en: "Live tracking on the map, with an arrival estimate" },
            { bm: "Makluman sebaik sahaja anak naik atau turun", en: "An alert the moment your child boards or gets off" },
            { bm: "Yuran bulanan, resit dan sejarah bayaran", en: "Monthly fees, receipts and payment history" },
            { bm: "Butang kecemasan dan penarafan pemandu", en: "An emergency button and driver ratings" },
            { bm: "Bersembang terus dengan pemandu", en: "Chat directly with your driver" },
          ],
        },
        {
          name: { bm: "Aplikasi pemandu", en: "Driver app" },
          summary: { bm: "Untuk makcik dan pakcik van serta pemandu bas sekolah.", en: "For van and school bus drivers." },
          features: [
            { bm: "Mula dan tamatkan perjalanan dengan satu sentuhan", en: "Start and end each trip with one tap" },
            { bm: "Senarai penumpang: tanda murid naik dengan satu sentuhan", en: "Passenger list: mark each child as boarded with one tap" },
            { bm: "Laluan dan hentian untuk hari ini", en: "Today's route and stops" },
            { bm: "Semak siapa sudah membayar bulan ini", en: "See who has paid this month" },
          ],
        },
      ],
      supportHeading: { bm: "Sokongan yang kami cari", en: "Support we're seeking" },
      support: [
        { short: { bm: "KPM", en: "MOE" }, name: { bm: "Kementerian Pendidikan Malaysia", en: "Ministry of Education" } },
        { short: { bm: "KPT", en: "MOHE" }, name: { bm: "Kementerian Pendidikan Tinggi", en: "Ministry of Higher Education" } },
        { short: { bm: "MOT", en: "MOT" }, name: { bm: "Kementerian Pengangkutan", en: "Ministry of Transport" } },
        { short: { bm: "Cradle", en: "Cradle" }, name: { bm: "Dana permulaan daripada Cradle dan badan pembiayaan lain", en: "Startup funding from Cradle and other funding bodies" } },
      ],
    },

    team: {
      heading: { bm: "Pasukan kami", en: "The team" },
      linkedin: { bm: "LinkedIn", en: "LinkedIn" },
    },

    contact: {
      heading: { bm: "Hubungi kami", en: "Get in touch" },
      body: {
        bm: "Ada soalan, ingin bekerjasama, atau mahu mencuba Gerek di sekolah anda? E-mel kami atau hantar mesej di Instagram.",
        en: "Questions, partnerships, or want to try Gerek at your school? Email us or send a message on Instagram.",
      },
      emailLabel: { bm: "E-mel", en: "Email" },
      instagramLabel: { bm: "Instagram", en: "Instagram" },
      rights: { bm: "Gerek. Hak cipta terpelihara.", en: "Gerek. All rights reserved." },
    },
  },
};
