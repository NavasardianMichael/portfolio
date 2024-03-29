export enum E_LOCALES {
    en = 'en', 
    am = 'am', 
}

export const LOCALES: E_LOCALES[] = [
    E_LOCALES.en,
    E_LOCALES.am
]

export enum E_TRANSLATIONS {
    lightMode = 'lightMode',
    darkMode = 'darkMode',
    toggleLanguage = 'toggleLanguage',
    avatar = 'avatar',
    fullName = 'fullName',
    facebook = 'facebook',
    linkedin = 'linkedin',
    telegram = 'telegram',
    mail = 'mail',
    orcid = 'orcid',
    call = 'call',
    home = 'home',
    about = 'about',
    skills = 'skills',
    resume = 'resume',
    publications = 'publications',
    contributions = 'contributions',
    copyright = 'copyright',
    iam = 'iam',
    frontEndEngineer = 'frontEndEngineer',
    hopelessOptimist = 'hopelessOptimist',
    bio = 'bio',
    experience = 'experience',
    birthdayKey = 'birthdayKey',
    birthday = 'birthday',
    ageKey = 'ageKey',
    academicDegreeKey = 'academicDegreeKey',
    academicDegree = 'academicDegree',
    phoneKey = 'phoneKey',
    emailKey = 'emailKey',
    location = 'location',
    city = 'city',
    summary = 'summary',
    experienced = 'experienced',
    address = 'address',
    education = 'education',
    phdTitle = 'phdTitle',
    phdStart = 'phdStart',
    phdEnd = 'phdEnd',
    asue = 'asue',
    masterTitle = 'masterTitle',
    masterStart = 'masterStart',
    masterEnd = 'masterEnd',
    bachelorTitle = 'bachelorTitle',
    bachelorStart = 'bachelorStart',
    bachelorEnd = 'bachelorEnd',
    voloPosition = 'voloPosition',
    voloStart = 'voloStart',
    voloEnd = 'voloEnd',
    voloInfo = 'voloInfo',
    boomTechPosition = 'boomTechPosition',
    boomTechStart = 'boomTechStart',
    boomTechEnd = 'boomTechEnd',
    boomTechInfo = 'boomTechInfo',
    soloLearnTitle = 'soloLearnTitle',
    soloLearnStart = 'soloLearnStart',
    soloLearnEnd = 'soloLearnEnd',
    soloLearnInfo = 'soloLearnInfo',
    digiTitle = 'digiTitle',
    digiStart = 'digiStart',
    digiEnd = 'digiEnd',
    digiInfo = 'digiInfo',
}

export const TRANSLATIONS: {
    [key in E_LOCALES]: { [key in E_TRANSLATIONS]: string }
} = {
    [E_LOCALES.en]: {
        lightMode: 'Light Mode',
        darkMode: 'Dark Mode',
        toggleLanguage: 'Toggle Language',
        avatar: 'Avatart',
        fullName: 'Michael Navasardyan',
        facebook: 'Facebook',
        linkedin: 'Linkedin',
        telegram: 'Telegram',
        mail: 'Mail',
        orcid: 'Orcid',
        call: 'Phone',
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        resume: 'Resume',
        publications: 'Publications',
        contributions: 'Contributions',
        copyright: 'Copyright',
        iam: "I'm",
        frontEndEngineer: 'Front-End Engineer',
        hopelessOptimist: 'Hopeless Optimist',
        bio: `I am an experienced software front-end engineer with a passion for designing and implementing innovative
        programs that promote the efficiency and effectiveness of society. Well-versed in modern technology and writing
        code to create systems that are scalable, reliable, and user-friendly. Supporter of servant leadership, have an
        ability to motivate and educate. Strategic thinker and innovative creator aimed at developing software that is
        customized to highlight organizational core competencies, and further their success. Ph.D. student with academic
        experience, who tries to make the world a better place.`,
        birthdayKey: 'Birthday',
        birthday: '24 Novermber 1997',
        ageKey: 'Age',
        academicDegreeKey: 'Academic Degree',
        academicDegree: 'PhD student',
        phoneKey: 'Phone',
        emailKey: 'Email',
        location: 'Location',
        city: 'Yerevan, Armenia',
        summary: 'Summary',
        experienced: 'Experienced',
        address: 'Eghishe Tadevosyan 5, Yerevan, Armenia',
        education: 'Education',
        phdTitle: 'PhD student of Macroeconomics',
        phdStart: 'September 2021',
        phdEnd: 'Present',
        asue: 'Armenian State University of Economics',
        masterTitle: 'Master of Macroeconomics',
        masterStart: 'September 2019',
        masterEnd: 'June 2021',
        bachelorTitle: 'Bachelor of Mathematical Methods and Modelling',
        bachelorStart: 'September 2015',
        bachelorEnd: 'June 2019',
        experience: 'Experience',
        voloPosition: 'JavaScript Developer',
        voloStart: 'April 2022',
        voloEnd: 'Present',
        voloInfo: 'VOLO, Yerevan, Armenia',
        boomTechPosition: 'Software Engineer',
        boomTechStart: 'July 2020',
        boomTechEnd: 'May 2022',
        boomTechInfo: 'BoomTech, Yerevan, Armenia',
        soloLearnTitle: 'Code Coaches Writer',
        soloLearnStart: 'August 2020',
        soloLearnEnd: 'January 2021',
        soloLearnInfo: 'SoloLearn, Yerevan, Armenia',
        digiTitle: 'Front-End Developer',
        digiStart: 'October 2019',
        digiEnd: 'June 2020',
        digiInfo: 'Digitial Brains, Yerevan, Armenia'
    },
    [E_LOCALES.am]: {
        lightMode: 'Light Mode',
        darkMode: 'Dark Mode',
        toggleLanguage: 'Toggle Language',
        avatar: 'Avatart',
        fullName: 'Միքայել Նավասարդյան',
        facebook: 'Facebook',
        linkedin: 'Linkedin',
        telegram: 'Telegram',
        mail: 'Mail',
        orcid: 'Orcid',
        call: 'Phone',
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        resume: 'Resume',
        publications: 'Publications',
        contributions: 'Contributions',
        copyright: 'Copyright',
        iam: "I'm",
        frontEndEngineer: 'Front-End Engineer',
        hopelessOptimist: 'Hopeless Optimist',
        bio: `I am an experienced software front-end engineer with a passion for designing and implementing innovative
        programs that promote the efficiency and effectiveness of society. Well-versed in modern technology and writing
        code to create systems that are scalable, reliable, and user-friendly. Supporter of servant leadership, have an
        ability to motivate and educate. Strategic thinker and innovative creator aimed at developing software that is
        customized to highlight organizational core competencies, and further their success. Ph.D. student with academic
        experience, who tries to make the world a better place.`,
        birthdayKey: 'Birthday',
        birthday: '24 Novermber 1997',
        ageKey: 'Age',
        academicDegreeKey: 'Academic Degree',
        academicDegree: 'PhD student',
        phoneKey: 'Phone',
        emailKey: 'Email',
        location: 'Location',
        city: 'Yerevan, Armenia',
        summary: 'Summary',
        experienced: 'Experienced',
        address: 'Eghishe Tadevosyan 5, Yerevan, Armenia',
        education: 'Education',
        phdTitle: 'PhD student of Macroeconomics',
        phdStart: 'September 2021',
        phdEnd: 'Present',
        asue: 'Armenian State University of Economics',
        masterTitle: 'Master of Macroeconomics',
        masterStart: 'September 2019',
        masterEnd: 'June 2021',
        bachelorTitle: 'Bachelor of Mathematical Methods and Modelling',
        bachelorStart: 'September 2015',
        bachelorEnd: 'June 2019',
        experience: 'Experience',
        voloPosition: 'JavaScript Developer',
        voloStart: 'April 2022',
        voloEnd: 'Present',
        voloInfo: 'VOLO, Yerevan, Armenia',
        boomTechPosition: 'Software Engineer',
        boomTechStart: 'July 2020',
        boomTechEnd: 'May 2022',
        boomTechInfo: 'BoomTech, Yerevan, Armenia',
        soloLearnTitle: 'Code Coaches Writer',
        soloLearnStart: 'August 2020',
        soloLearnEnd: 'January 2021',
        soloLearnInfo: 'SoloLearn, Yerevan, Armenia',
        digiTitle: 'Front-End Developer',
        digiStart: 'October 2019',
        digiEnd: 'June 2020',
        digiInfo: 'Digitial Brains, Yerevan, Armenia'
    },
}