import SOCIAL from '@salesforce/resourceUrl/SOCIAL'
import nikhil from '@salesforce/resourceUrl/ProfielFoto';
export const PROFILE_IMAGE = nikhil

export const SOCIAL_LINKS=[
    {
        type:'github',
        label:"github/svendw91",
        link: "https://github.com/svendw91",
        icon:SOCIAL + '/SOCIAL/github.svg'
    },

    {
        type: "linkedin",
        label: "linkedin/sven-de-wijk/",
        link: "https://www.linkedin.com/in/sven-de-wijk/",
        icon: SOCIAL + '/SOCIAL/linkedin.svg'
    },

    {
        type: "trailhead",
        label: "trailhead/sdewijk",
        link: "https://trailblazer.me/id/sdewijk",
        icon: SOCIAL + '/SOCIAL/trailhead.svg'
    }
]

export const USER_DETAILS={
    NAME:'Sven de Wijk',
    ROLE:'Applicatiebeheerder',
    EMAIL:'svendw@live.nl',
    PHONE:'0649313722',
    Adres: 'Koekoekstraat 10 9481EC Vries',
    BurgelijkeStaat : 'Gehuwd',
    Geboortedatum: '07-01-1991'
}

export const CAREER_SUMMARY={
    HEADING:"Persoonlijk Profiel",
    DESCRIPTION: "Nadat ik mijn propedeuse HBO-Rechten heb behaald, ben ik in de ICT gaan werken. En daar heb ik geen seconde spijt van gekregen. In mijn carriere heb ik tot nu toe al verschillende functies gehad, van servicesdesk medewerker tot consultant. Op dit moment ben ik werkzaam als applicatiebeheerder van Salesforce. Vooral het programmeren en automatiseren vind ik leuk om te doen en wil ik graag in doorgroeien. Ik kom het beste tot mijn recht in een omgeving waar ruimte is voor mijn enthousiasme, inspiratie en behoefte is aan nieuwe ideeën, waar de onverwachte invalshoek de meest waardevolle blijkt te zijn. Mijn belangrijkste compententies zijn dan ook: ",
    KEYS_POINTS:[
        "Diplomatiek",
        "Snel schakelen ",
        "Out of the box denken",
        "Enthousiast",
    ]
}

export const EXPERIENCE_DATA={
    HEADING:'WERK ERVARING',
    EXPERIENCES:[
        {
            ROLE:"Applicatiebeheerder",
            COMPANY_NAME:"Freia Shared Services",
            DURATION:"2019 - Heden",
            DESCRIPTION:
            "Freia is een BV met 7 opleidingsbedrijven. Samen met een klein team beheren we de Salesforce omgeving voor deze bedrijven. Mijn werkzaamheden zijn daardoor heel afwisselend. Van het implementeren en bedenken van nieuwe functionaliteten tot het beheren van de Salesforce omgeving." ,
            DESCRIPTION_POINTS:[
                "Implementeren van nieuwe requirements.",
                "Trainen van medewerkers.",
                "Proces automatisering.",
                "Dashboards en Reports maken.",
                "Overige beheer taken",
            ],
            TECHNOLOGIES_USED:{
                HEADING:'Tools gebruikt',
                LIST:[
                    "Salesforce",
                    "Apex",
                    "Javascript",
                    "HTML/CSS",
                    "Power BI",
                    "Lightning Flows",
                    "Process Builder",

                ]
            }

        },
        {
            ROLE:"ICT Consultant",
            COMPANY_NAME:"Maximus ICT",
            DURATION:"2019",
            DESCRIPTION:"Maximus-ICT neemt alle ICT zorgen voor de klant weg. Het klantenbestand bestond uit zzp'ers en klein mbk waarbij ik de vaste aanspreekpunt was.Mijn werkzaamheden bestonden naast het het technische aspect, ook een adviserende rol, trainen van de klant en sales",
            DESCRIPTION_POINTS:[
                "accounts aanmaken in Active Directory",
                "mailserver overzetten",
                "reparen defecten hardware",
                "plaatsen nieuwe hardware",
                "VOIP implementeren",
                "Data recovery"

            ],
            TECHNOLOGIES_USED:{
                HEADING:'Tools gebruikt',
                LIST:[
                    "Wordpress",
                    "Office 365",
                    "Topdesk",
                    "Powershell",
                    "Azure",
                    "Xelion"

                ]
            }

        },
        {
            ROLE:"Business Intelligence/Dynamics 365 consultant",
            COMPANY_NAME:"High Software",
            DURATION:"2018",
            DESCRIPTION:"High software is een internationale organisatie die zich bezig houdt met het implementeren van Microsoft Dynamics. Ik zit samen met één collega in het team output management. En mijn rol was Business intelligence consultant. Mijn werkzaamheden bestonden uit het schrijven van query’s in t-sql. Toevoegen van nieuwe kubussen d.m.v. SSIS en SSAS. Nieuwe dimensies toevoegen aan de kubus vanuit Microsoft Dynamics d.m.v. SQL server en SSAS. Dashboards maken voor klanten met Targit en Power BI. Ondersteuning bieden aan klanten met issues in Microsoft Dynamics en SQL server. In lasernet, een output applicatie voor Microsoft Dynamics, nieuwe documenten en/of bewerken. Het geven van individuele trainingen op het gebied van het maken van rapportages in Targit, dynamics 365 functionaliteiten uitleggen en lasernet kennisoverdracht",
            DESCRIPTION_POINTS:[
                "Schrijven van query's in t-sql",
                "Toevoegen nieuwe kubussen",
                "Dashboards en Reports maken",
                "Nieuwe documenten maken in lasernet",
                "Trainingen geven"
            ],
            TECHNOLOGIES_USED:{
                HEADING:'Tools gebruikt',
                LIST:[
                    "MSSQL",
                    "SSIS",
                    "T-SQL",
                    "SSAS",
                    "TARGIT",
                    "POWER BI",
                    "Dynamics 365/2012/AX",
                    "Lasernet"
                ]
            }

        },
       
    ]
}


 export const EDUCATION_DATA={
     ICON: SOCIAL + '/SOCIAL/education.svg',
     HEADING: "OPLEIDING",
     LIST:[
         {
             NAME: "Propedeuse HBO-Rechten",
             UNIVERSITY_NAME: "Hanze Hogeschool",
             DURATION: "2012 - 2014",
         },
         {
             NAME: "HAVO",
             UNIVERSITY_NAME: "Alfa college",
             DURATION: "2006-2011",
         }
     ]
 }



export const CERTIFICATION_DATA={
    ICON: SOCIAL + '/SOCIAL/certification.svg',
    HEADING: "CERTIFICATEN",
    LIST: [
        {
            NAME: "Salesforce Administrator",
        },
        {
            NAME: "Salesforce Platform App Builder",
        },
        {
            NAME: "EXIN ITIL Foundation IT Service Management",
        },
        {
            NAME: "Microsoft Windows 70-698 Installing and Configuring Windows 10",
        },
        {
            NAME: "Microsoft Outlook specialist",
        }
    ]
}

export const LANGUAGES_DATA={
    HEADING: "Talen",
    LIST: [
        {
            NAME: "Nederlands",
            LEVEL: "Moedertaal",
        },
        {
            NAME: "Engels",
            LEVEL: "Goed",
        },
    ]
}


export const SKILLS_DATA ={
    HEADING: "SKILLS & TOOLS",
    SKILLS:[
        {
            HEADING: "Hard Skills",
            SKILLS_LIST: [
                { NAME: "JavaScript(ES5/ES6/ES7/ES8)", LEVEL: "50" },
                { NAME: "HTML5/CSS3", LEVEL: "70" },
                { NAME: "Apex", LEVEL: "30" },
                { NAME: "Wordpress", LEVEL: "80" },
                { NAME: "MSSQL", LEVEL: "50" },
                { NAME: "Power BI", LEVEL: "80" },
            ],
        },
        {
            HEADING: "Salesforce",
            SKILLS_LIST: [
                { NAME: "Process Automatisering", LEVEL: "80" },
                { NAME: "Sales Cloud", LEVEL: "90" },
                { NAME: "Security", LEVEL: "85" },
                { NAME: "Reports/dashboards", LEVEL: "100" },
                { NAME: "Security", LEVEL: "90" },
                { NAME: "User Interface", LEVEL: "100" },
            ],
        },
        {
            HEADING: "Soft Skills",
            SKILLS_LIST: [
                { NAME: "Communicatie", LEVEL: "90" },
                { NAME: "Creativiteit", LEVEL: "75" },
                { NAME: "Flexibel", LEVEL: "90" },
                { NAME: "inlevingsvermogen", LEVEL: "85" },
                { NAME: "verantwoordelijkheidsgevoel", LEVEL: "85" },
            ],
        }
    ],

}
    
export const INTERESTS_DATA = {
    HEADING: "Interesses",
    LIST: ["Voetbal", "Mountainbike", "Lezen", "Hardlopen", "Koken", "Films en Series"]
}