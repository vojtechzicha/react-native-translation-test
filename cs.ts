import { CalendarRange } from '@molecules/CalendarDay/enums'

export const cs = {
  Global: {
    baseDateFormat: 'DD/MM/YYYY',
    baseTimeFormat: 'HH:mm',
    more: 'Více ',
    error: 'Chyba',
    selectModalTitle: 'Vybrat:',
    viewAll: 'Všechny služby',
    close: 'Zavřít'
  },
  FormValidation: {
    requiredField: 'Povinný údaj',
    emailFormatError: 'Formát e-mailu není platný',
    fieldIsTooShort: 'Tento údaj je moc krátký',
    personalCodeIdentifierError: 'Neplatný formát',
    phoneNumberError: 'Neplatný formát',
    emailMismatch: 'E-mailové adresy se neshodují',
    checkField: 'Prosím, zkontrolujte toto pole',
    minNumbers: 'Alespoň {{count}} číslice',
    minNumbers_plural: 'Alespoň {{count}} číslic'
  },
  Languages: {
    en: 'Angličtina',
    cs: 'Čeština'
  },
  StoryBlok: {
    dateFormat: 'YYYY-MM-DD HH:mm'
  },
  QuizCta: {
    title: 'Vyberte si kliniku podle svých potřeb',
    textCta: 'Vyplnit dotazník ',
    dateOfBirth: 'Datum narození',
    dateFormat: 'DD/MM/YYYY'
  },
  BookingCta: {
    title: 'Chcete s námi probrat svoji situaci? ',
    textCta: 'Objednat se'
  },
  Tabs: {
    home: 'Domů',
    clinics: 'Kliniky',
    treatments: 'Léčba',
    treatment: 'Léčba',
    quiz: 'Dotazník',
    menu: 'Menu',
    messages: 'Zprávy',
    help: 'FAQ',
    calendar: 'Kalendář'
  },
  Menu: {
    version: 'Verze aplikace {{version}}',
    url: '{{url}}',
    logoutDescription: 'Objednejte se na jednu z našich klinik nebo se přihlaste do svého účtu',
    book: 'Objednat se',
    login: 'Přihlásit se ',
    linkPatientId: 'Propojit ID pacienta s aplikací',
    faq: 'FAQ',
    ctaDescription: 'Pokud chcete více informací o našich službách a jak to funguje, navštivte naše Centrum nápovědy',
    termsOfService: 'Podmínky služby ',
    privacyPolicy: 'Zásady ochrany osobních údajů',
    logout: 'Odhlásit',
    documents: 'Dokumenty',
    invoices: 'Faktury',
    myClinic: 'Moje klinika',
    questionnaire: 'Dotazník',
    settings: 'Nastavení',
    cancel: 'Zrušit'
  },
  PathPreference: {
    title: 'Vyberte si svoji cestu',
    titleFromMenu: 'Vaše cesta',
    subtitle: 'Později to budete moci změnit v nastavení a předvolbách aplikace. ',
    button: 'Potvrdit',
    buttonFromMenu: 'Uložit',
    linkPatientID: 'Chci propojit aplikaci s mým ID pacienta',
    baby: {
      name: 'Chci miminko',
      description: 'Pokud chcete miminko a potřebujete pomoc s výběrem nejlepší varianty. '
    },
    fertility: {
      name: 'Chci zachovat svou plodnost',
      description: 'Pokud chcete zachovat svou plodnost pomocí zamrazení pohlavních buněk pro pozdější využití. '
    },
    donor: {
      name: 'Chci se stát dárcem',
      description:
        'Pokud se chcete stát dárcem a darovat své pohlavní buňky (spermie, vajíčka) k využití jiným pacientům.'
    }
  },
  BookAnAppointment: {
    title: 'Objednat se',
    subtitleSelectClinic:
      'Začněte výběrem preferované kliniky, abyste se mohli objednat na konzultaci a začít s případnou léčbou.',
    selectedClinic: 'Zvolená klinika:',
    subtitleFirstStep: 'Pro pokračování vyplňte své osobní a kontaktní údaje',
    subtitleSecondStep: 'Vyplňte svůj požadavek na léčbu a pokračujte potvrzení objednání',
    firstName: 'Křestní jméno',
    firstNamePlaceholder: 'Vaše křestní jméno',
    lastName: 'Příjmení',
    lastNamePlaceholder: 'Vaše přijmení',
    birthDate: 'Datum narození',
    birthDatePlaceholder: 'Zvolte datum narození',
    country: 'Země',
    countryPlaceholder: 'Zvolte zemi',
    personalCodeIdentifier: 'Rodné číslo',
    personalCodeIdentifierPlaceholder: 'Zvolte rodné číslo',
    phoneNumber: 'Telefonní číslo',
    phoneNumberPlaceholder: 'Formát s předvolbou země +420xxxxxxxxx',
    email: 'E-mail',
    emailPlaceholder: 'E-mail',
    confirmEmail: 'Potvrďte e-mail',
    confirmEmailPlaceholder: 'Zadejte e-mail znovu',
    submit: 'Potvrdit',
    continue: 'Pokračovat',
    clinic: 'Zvolte si kliniku',
    clinicPlaceholder: 'Vyberte ze seznamu',
    clinicDescription:
      'Pokud potřebujete pomoc s rozhodnutím, která klinika je pro vás vhodná, vyplňte náš krátký dotazník a zjistěte, co přesně hledáte. ',
    takeQuiz: 'Dotazník výběru kliniky',
    relationshipType: 'Druh vztahu',
    relationshipTypePlaceholder: 'Zvolte možnost',
    myGender: 'Mé pohlaví',
    myGenderPlaceholder: 'Zvolte možnost',
    interestedIn: 'Zajímá mě',
    interestedInPlaceholder: 'Zvolte možnost',
    message: 'Přidejte vzkaz',
    messagePlaceholder: 'Napište vaši zprávu',
    time: 'Časové preference',
    timePlaceholder: 'Zvolte možnost',
    preferencesDescription:
      'Uděláme vše pro to, abychom se vešli do vašich časových možností, ale mějte prosím na paměti, že vzhledem k vytíženosti kliniky vám můžeme nabídnout i jiný čas.',
    agreeUsePersonalData: 'Souhlasím se zpracováním osobních údajů dle ',
    privacyPolicy: 'Zásad ochrany osobních údajů',
    rodcis: 'Pokud máte české rodné číslo, prosíme o vyplnění. V opačném případě ponechte pole prázdné.',
    RelationshipTypeOptions: {
      heterosexual_couple: 'V heterosexuálním páru',
      same_sex_couple: 'V páru stejného pohlaví',
      single_woman: 'Svobodná žena'
    },
    InterestedInOptions: {
      treatment_with_own_gamets: 'Léčba s vlastními gametami ',
      treatment_with_sperm_donation: 'Léčba s darovanými spermiemi',
      treatment_with_egg_donation: 'Léčba s darovanými vajíčky',
      treatment_with_embryo_donation: 'Léčba s darovanými embryi',
      surrogacy: 'Náhradní mateřství'
    },
    TimePreferencesOptions: {
      morning_appointment: 'Dopolední termín',
      afternoon_appointment: 'Odpolední termín'
    },
    MyGenderOptions: {
      M: 'Muž',
      F: 'Žena'
    }
  },
  BookAppointmentSuccess: {
    title: 'Děkujeme za odeslání žádosti',
    subtitle: 'Náš personál se s vámi co nejdříve spojí.',
    sentEmailTo: 'Poslali jsme e-mail na ',
    sentEmailToDescription:
      ' s odkazem na nastavení hesla. Dokončete nastavení, abyste se mohli přihlásit do svého účtu.',
    sentEmailToGeneric:
      'Poslali jsme e-mail s odkazem na nastavení hesla. Dokončete nastavení, abyste se mohli přihlásit do svého účtu. Na nastavení hesla máte 1 hodinu. ',
    noMailReceived: 'Nepřišel vám e-mail?',
    clickHere: 'Klikněte zde',
    login: 'K přihlášení',
    backHome: 'Zpět na hlavní obrazovku',
    successToast: {
      title: 'E-mail',
      text: 'E-mail byl úspěšně odeslán'
    }
  },
  BookAppointmentResendMail: {
    successToast: {
      title: 'E-mail',
      text: 'E-mail byl úspěšně odeslán'
    }
  },
  Auth: {
    LoginPage: {
      loginToAccount: 'Přihlásit se',
      insertEmail: 'Vyplňte e-mailovou adresu',
      insertPassword: 'Vyplňte své heslo',
      email: 'E-mail',
      emailPlaceholder: 'E-mail',
      password: 'Heslo',
      passwordPlaceholder: 'Zadejte heslo',
      forgotPassword: 'Zapomněli jste své heslo?',
      continue: 'Pokračovat',
      cta: 'Přihlásit se '
    },
    PasswordEmailSent: {
      title_set: 'Poslali jsme e-mail s odkazem na nastavení hesla',
      title_reset: 'Poslali jsme e-mail s odkazem na změnu hesla',
      sentEmailTo: 'Poslali jsme e-mail na ',
      sentEmailToDescription_set:
        's odkazem na nastavení hesla. Dokončete nastavení, abyste se mohli přihlásit do svého účtu. Odkaz je platný jednu hodinu. ',
      sentEmailToDescription_reset:
        's odkazem na změnu hesla. Dokončete nastavení, abyste se mohli přihlásit do svého účtu. Odkaz je platný jednu hodinu. ',
      ctaPrimary: 'K přihlášení',
      ctaSecondary: 'Domů',
      noMailReceived: 'Nepřišel vám e-mail?',
      clickHere: 'Klikněte zde',
      successToast: {
        title: 'E-mail',
        text: 'E-mail byl úspěšně odeslán'
      }
    },
    SetNewPassword: {
      title: 'Nastavte si své heslo',
      description:
        'Nastavte si heslo pro svůj FutureLife účet, abyste mohla naplno využívat aplikaci a dostávat zprávy z kliniky.',
      password: 'Heslo',
      repeatPassword: 'Potvrzení hesla',
      length: '{{count}} znak',
      length_plural: '{{count}} znaků',
      passwordSmallLetters: 'Alespoň {{count}} malé písmeno',
      passwordSmallLetters_plural: 'Alespoň {{count}} malých písmen',
      passwordCapitalLetters: 'Alespoň {{count}} velké písmeno',
      passwordCapitalLetters_plural: 'Alespoň {{count}} velkých písmen',
      passwordNumber: 'Alespoň {{count}} číslice',
      passwordNumber_plural: 'Alespoň {{count}} číslic',
      passwordSpecialCharacter: 'Alespoň {{count}} speciální znak',
      passwordSpecialCharacter_plural: 'Alespoň {{count}} speciální znaky',
      cta: 'Potvrdit',
      passwordsMismatch: 'Hesla se neshodují'
    },
    ConfirmEmailCode: {
      title: 'Vložte kód, který jsme vám poslali na e-mail',
      subtitle: 'Na e-mail jsme vám poslali autorizační kód. Pro přihlášení opište kód zde. ',
      code: 'Kód',
      codePlaceholder: 'Zadejte obdržený kód',
      verify: 'Ověřit',
      noCode: 'Může to chvilku trvat.\nNic vám nepřišlo? ',
      sendAgain: 'Znovu odeslat kód',
      toastTitle: 'Kód byl odeslán',
      toastText: 'Poslali jsme vám na e-mail další kód'
    },
    AccountNotFound: {
      title: 'Účet nebyl nalezen',
      subtitle: 'E-mail nebo heslo, které jste vložili, není propojený s žádným FutureLife účtem.',
      tryAgain: 'Zkusit znovu',
      backHome: 'Domů'
    },
    ResetBiometry: {
      message:
        'Pokud se rozhodnete pro obnovení hesla a již jste si nastavili biometrické přihlášení, budete muset biometriku nastavit znovu při dalším přihlášení. ',
      confirmModal: 'Obnovit heslo',
      dismissModal: 'Zrušit'
    }
  },
  Errors: {
    E_EXPIRED_TOKEN: 'Relace vypršela',
    E_INVALID_TOKEN: 'Chyba přihlášení',
    E_ROUTE_NOT_FOUND: 'Zdroj nebyl nalezen',
    E_INTERNAL_SERVER_ERROR: 'Chyba serveru',
    E_UNAUTHORIZED: 'Nemáte oprávnění k zobrazení',
    E_VALIDATION_FAILURE: 'Ve formuláři jsou chyby',
    E_ROW_NOT_FOUND: 'Nenalezeno',
    BASE: 'Objevila se chyba',
    E_FORBIDDEN: 'Nemáte oprávnění k zobrazení',
    E_INVALID_CREDENTIALS: 'E-mail nebo heslo nejsou správné',
    E_INVALID_OTP: 'Zadaný kód je neplatný',
    ER_DUP_ENTRY: 'E-mail je již zaregistrován',
    E_OLD_PASSWORD: 'Toto heslo již bylo použito'
  },
  Clinics: {
    title: 'Kliniky',
    Filters: {
      title: 'Filtry ',
      apply: 'Zobrazit',
      resetAll: 'Nastavit vše znovu',
      country: 'Země',
      allCountries: 'Všechny země',
      services: 'Služby',
      allServices: 'Všechny služby',
      treatmentCriteria: 'Podmínky léčby ',
      allTreatmentCriteria: 'Všechny podmínky',
      filters: 'Filtry ',
      sortBy: 'Seřadit podle',
      sortByParam: 'Seřadit podle: {{param}}'
    }
  },
  ClinicDetail: {
    Detail: {
      howToReachClinic: 'Jak se dostat na kliniku',
      more: 'Více',
      totalReviews: '{{total}} hodnocení',
      clinicForYou: 'Je tato klinika ta pravá pro vás?',
      becomeDonor: 'Stát se dárcem',
      bookAppointment: 'Objednat se',
      visitWebsite: 'Navštivte webové stránky',
      DonorBanner: {
        title: 'Dárcovský program',
        description:
          'Chcete-li se stát dárcem a darovat své gamety (ovocyty nebo spermie), aby je mohli využít ostatní pacienti.',
        DonorCta: {
          textCta: 'Staňte se dárcem / dárkyní'
        }
      },
      FertilityBanner: {
        title: 'Zachování plodnosti',
        description: 'Pokud si chcete zachovat svou plodnost, zmrazte své gamety, abyste je mohli využít v budoucnu.',
        FertilityCta: {
          textCta: 'Objednat se'
        }
      }
    }
  },
  DonorScreening: {
    title: 'Staňte se dárcem / dárkyní',
    subtitle:
      'Jste na úplném začátku vaší dárcovské cesty. Stačí si vybrat kliniku, vyplnit o sobě pár údajů a my se vám ozveme. Tento formulář bude odeslán bezpečně pomocí zabezpečeného připojení.',
    next: 'Pokračovat',
    submit: 'Potvrdit',
    privacyPolicy: 'Přečetl/a jsem si zásady ochrany osobních údajů a souhlasím s nimi ',
    storeData: 'Odesláním formuláře souhlasím s uložením mých údajů v registru pacientů společnosti FutureLife',
    clinic: 'Zvolte si kliniku*',
    clinicPlaceholder: 'Vyberte ze seznamu',
    startTheQuestionnaire: 'Začít dotazník',
    modalTitle: 'Opravdu chcete opustit dotazník? ',
    modalDescription: 'Váš pokrok nebude uložen. Budete muset začít znovu od začátku. ',
    DonorScreeningEnd: {
      title: 'Děkujeme za objednání / Děkujeme za odeslání žádosti',
      subtitle: 'Náš personál se s vámi co nejdříve spojí',
      backHome: 'Zpět domů'
    }
  },
  HelpCenter: {
    rootName: 'Centrum nápovědy',
    related: 'Související',
    commonQuestions: 'Časté otázky',
    Search: {
      homePlaceholder: 'Hledat...',
      placeholder: 'Hledat téma...',
      results: 'Hledat výsledky',
      matches: '{{count}} výsledek',
      matches_plural: '{{count}} výsledky'
    }
  },
  HomePrivate: {
    todayDateFormat: 'dddd, D MMMM YYYY',
    greetings_morning: 'Dobré ráno,  {{name}}',
    greetings_afternoon: 'Dobrý den,  {{name}}',
    greetings_evening: 'Dobrý večer,  {{name}}',
    PatientQuestionnaireBanner: {
      title: 'Najděte svou kliniku',
      description: 'Odpovězte prosím na náš dotazník, který vám pomůže získat informace o vaší léčbě.',
      buttonStart: 'Začít',
      buttonContinue: 'Pokračovat'
    }
  },
  Quiz: {
    title: 'Najděte svou kliniku',
    subtitle: 'Odpovězte na pár otázek a rychle zjistěte, která klinika nejlépe vyhovuje vašim potřebám.',
    subtitleCompleted:
      'Zobrazte si seznam klinik navržených na základě vašeho výběru nebo vyplňte dotazník znovu pro nové výsledky.',
    text: 'Dokončete krátký dotazník, abychom mohli najít tu pravou kliniku pro vás',
    start: 'Vyplnit dotazník',
    restart: 'Znovu vyplnit dotazník',
    clinics_loading: 'Chvilku strpení, prosím...',
    clinics_count_zero: 'Nenalezeny žádné kliniky',
    clinics_count_zero_subtitle: 'Zkuste změnit aktuální výběr filtrů',
    clinics_count: 'nalezená klinika',
    clinics_count_plural: 'nalezené kliniky',
    next: 'Pokračovat',
    viewResults: 'Zobrazit výsledky',
    goToResults: 'Zobrazit výsledky',
    birthdateFormat: 'ddd, D MMM YYYY',
    resultsTitle: 'Zde jsou vybrané kliniky pro vás',
    yourResults: 'Váš výběr',
    ctaTitle: 'Nenašli jste kliniku, kterou hledáte? ',
    ctaText: 'Znovu vyplnit dotazník',
    clinics_results_count: '{{count}} nalezená klinika',
    clinics_results_count_plural: '{{count}} nalezených klinik',
    gender: 'Pohlaví',
    relationship: 'Vztah',
    birthdate: 'Datum narození',
    partner_birthdate: 'Datum narození partnera',
    clinic: 'Klinika',
    need: 'Potřeba',
    treatments: 'Léčebné metody',
    key_factor: 'Klíčový faktor',
    modalTitle: 'Opravdu chcete opustit dotazník? ',
    modalDescription: 'Váš pokrok nebude uložen. Budete muset začít znovu od začátku. '
  },
  StackCancelButton: {
    cancel: 'Zrušit'
  },
  ConfirmModal: {
    confirm: 'Ano, chci odejít',
    dismiss: 'Ne, chci pokračovat'
  },
  WalkThrough: {
    Home: {
      buttonContinue: 'Pokračovat',
      buttonStart: 'Začít',
      linkPatientID: 'Chci propojit aplikaci s mým ID pacienta'
    }
  },
  Preferences: {
    Tracking: {
      title: 'Nastavení soukromí',
      description:
        'Soubory cookie používáme pro technické funkce a pro měření návštěvnosti, shromažďování a zpracování osobních údajů ze zařízení, abychom mohli poskytovat co nejlepší služby a zkušenost. Výběrem možnosti "Přijmout" s těmito účely souhlasíte.',
      learnMore: 'Více',
      accept: 'Přijmout',
      reject: 'Odmítnout'
    }
  },
  Onboarding: {
    title: 'Vítejte ve FutureLife',
    titleWithName: 'Vítejte ve FutureLife, {{username}}',
    subtitle: 'Máme radost, že jste se k nám přidali. Pojďme se podívat na to, co všechno tato aplikace umí. ',
    currentTreatment: {
      name: 'Probíhající léčba',
      description:
        'Zde najdete právě probíhající léčebný program. Typ léčby lze změnit po konzultaci s naším IVF specialistou. '
    },
    documents: {
      name: 'Dokumenty',
      description:
        'Zapomeňte na posílání dokumentů e-mailem. V aplikaci vidíte všechny dokumenty z kliniky a můžete sem nahrát vše, co nám potřebujete poslat. '
    },
    treatmentProtocol: {
      name: 'Léčebný protokol',
      description:
        'Po první konzultaci váš IVF specialista nahraje do aplikace léčebný protokol, který budete muset dodržovat během celé léčby. '
    },
    calendar: {
      name: 'Kalendář',
      description: 'Kalendář vám pomůže hlídat jednotlivé období léčby a činnosti, které musíte provést.'
    },
    messages: {
      name: 'Zprávy',
      description:
        'Všechny vaše zprávy na jednom místě. Napište na kliniku a dostávejte zprávy z kliniky, kdykoliv potřebujete.'
    },
    embryoDevelopment: {
      name: 'Embryo vývoj',
      description: 'Jakmile budou embrya kultivována, uvidíte zde jejich vývoj ve dny, kdy je klinika kontroluje.'
    },
    pregnancyTest: {
      name: 'Těhotenský test',
      description: 'Jakmile jste prošla léčbou, dejte nám vědět, jak se daří a zda máte pozitivní těhotenský test.'
    },
    goToHome: 'Zpátky domů'
  },
  Loader: {
    loading: 'Chvilku strpení...'
  },
  PatientQuestionnaire: {
    start: 'Začít dotaník',
    submit: 'Potvrdit',
    saveForLater: 'Uložit na později',
    next: 'Pokračovat',
    cancelModal: {
      title: 'Opravdu chcete ukončit dotazník? ',
      description: 'Vaše údaje nebudou uloženy. Budete muset začít znovu od začátku.',
      confirmButton: 'Ano, zrušit',
      dismissButton: 'Ne, pokračovat'
    },
    saveForLaterModal: {
      title: 'Opravdu chcete opustit dotazník? ',
      description: 'Váš postup byl uložen. Budete pokračovat, kde jste skončili. ',
      confirmButton: 'Ano, dokončím později',
      dismissButton: 'Ne, chci pokračovat'
    },
    ThankYou: {
      title: 'Děkujeme vám',
      subtitle:
        'Děkujeme za váš čas, který jste věnovali vyplnění dotazníku. Těšíme se, až vás přivítáme na naší klinice {{clinicName}} jako naše klienty a uděláme vše pro to, abychom splnili vaše očekávání.',
      goToHomepage: 'Zpátky domů'
    },
    DonationProgram: {
      interested: 'Ano, mám zájem',
      notInterested: 'Ne, děkuji',
      yes: 'ano',
      no: 'ne'
    }
  },
  StimulationProtocolSetup: {
    modalTitle: 'Opravdu chcete opustit nastavení stimulačního protokolu? ',
    modalDescription: 'Váš pokrok nebude uložen. Budete muset začít znovu od začátku. ',
    Actions: {
      start: 'Začít s nastavením',
      restart: 'Dobře, děkujeme'
    },
    Start: {
      title: 'Spuštění stimulačního protokolu',
      subtitle: 'S prvním dnem menstruace si nastavte stimulační protokol, abyste mohla začít s léčbou.',
      requirements: {
        title: 'Požadavky',
        description: 'Stimulační protokol můžete zahájit ve dnech cyklu určených klinikou.',
        link: 'Více'
      }
    },
    Steps: {
      Actions: {
        next: 'Pokračovat',
        notificationsSettings: 'Nastavení notifikací',
        confirm: 'Potvrdit a zahájit'
      },
      PeriodDate: {
        title: 'Kdy vám začala menstruace? ',
        subtitle: 'Vyberte den a čas, kdy jste začala krvácet.'
      },
      StartDate: {
        title: 'Kdy chcete začít s léčbou? ',
        subtitle: 'S ohledem na to, kdy začala vaše menstruace máte k dispozici tyto možnosti. ',
        fallbackInfo: 'Začala jste již sama užívat potřebné léky podle pokynů lékaře?',
        warning: {
          partOne: 'Prosím, navštivte naše ',
          partTwo: 'Centrum nápovědy, ',
          partThree: ' abyste se ujistila, že jste začala brát léky správně.'
        },
        buttonDateFormat: 'ddd, D MMM YYYY',
        today: 'Dnes',
        yesterday: 'Včera',
        tomorrow: 'Zítra',
        startedYesterday: 'Již jsem včera začala',
        startedToday: 'Již jsem začala dnes',
        comeBack: 'Vraťte se příští měsíc'
      },
      MedicationsTimes: {
        title: 'V jakou dobu chcete brát léky? ',
        subtitle: 'Nastavte si časy, které budete schopna dodržet stejně každý den.',
        alert: 'Zvolené časy nejde později změnit.',
        selectPlaceholder: 'HH:mm',
        label: {
          morning: 'Ráno',
          noon: 'Poledne',
          evening: 'Večer'
        },
        checksTitle: 'Doporučený rozestup mezi léky ',
        checkLabel: {
          morningToNoon: 'Ráno a poledne: {{min}}–{{max}} hodin',
          noonToEvening: 'Poledne a večer: {{min}}–{{max}} hodin',
          eveningToMorning: 'Večer a ráno: {{min}}–{{max}} hodin'
        }
      },
      Notifications: {
        title: 'Připomeneme vám každou dávku',
        subtitle: {
          partOne: 'Vždy vám pošleme notifikaci 5 minut předem. Ověřte si, že máte ',
          partTwo: 'povoleny notifikace ',
          partThree: 'v nastavení aplikace. '
        }
      },
      Confirm: {
        title: 'Máte skoro hotovo! ',
        subtitle: 'Zkontrolujte si své volby a potvrďte zahájení stimulačního protokolu.',
        startDate: 'Den začátku ',
        startDateFormat: 'ddd, D MMM YYYY',
        morning: 'Ranní léky',
        noon: 'Polední léky',
        evening: 'Večerní léky',
        timesFormat: 'H:mm',
        info: {
          partOne: 'Na začátku uvidíte ',
          partTwo: 'před-rezervované termíny',
          partThree: 've vašem kalendáři. Mějte však na paměti, že klinika může termíny změnit.'
        }
      }
    },
    Wait: {
      title: 'Budete muset počkat...',
      firstDescription: 'Bohužel, tentokrát jste promeškala vhodnou dobu pro zahájení léčby. ',
      secondDescription: {
        partOne: 'Prosíme, vraťte se',
        partTwo: 'příští měsíc',
        partThree: ' až vám začne menstruace.'
      }
    }
  },
  DayHeading: {
    day: 'Den {{number}}',
    dateFormat: 'dddd, D MMMM'
  },
  CalendarSlot: {
    day: 'Den'
  },
  CounterChip: {
    others: '+ {{count}} další',
    others_plural: '+ {{count}} ostatní'
  },
  LastUpdate: {
    inMinutes: 'Aktualizováno před {{count}} minutou',
    inMinutes_plural: 'Aktualizováno před {{count}} minutami',
    inHours: 'Aktualizováno před {{count}} hodinou',
    inHours_plural: 'Aktualizováno před {{count}} hodinami',
    inDays: 'Aktualizováno před {{count}} dnem',
    inDays_plural: 'Aktualizováno před {{count}} dny'
  },
  StimulationProtocol: {
    Header: {
      title: 'Stimulační protokol'
    },
    Medications: {
      trigger_medications: 'Spouštěcí lék',
      morning_medications: 'Ráno',
      lunch_medications: 'Poledne',
      evening_medications: 'Večer'
    },
    MedicationsList: {
      overdue: 'Zpoždění'
    },
    MedicationModal: {
      howTo: 'Jak léky užívat',
      whatIf: 'Co když jsem zapomněla? ',
      notFound: 'Jedná se o stimulační lék, pečlivě si přečtěte pokyny na obalu.'
    },
    ConfirmMedicationsModal: {
      title: 'Potvrzení léků ',
      description:
        'Vzala jste si dnešní léky? V případě, že jste vynechala, kliknutím na dlaždici konkrétního léku zjistíte, co dělat dál. ',
      description_plural:
        'Vzala jste si všech {{quantity}} dnešních léků? V případě, že jste vynechala, kliknutím na dlaždici konkrétního léku zjistíte, co dělat dál.',
      answerNo: 'Ne, ještě se ujistím',
      answerYes: 'Ano, jsem si jistá'
    },
    MedicationCard: {
      quantity: 'Počet dávek: {{qty}}'
    },
    Tabs: {
      all: 'Vše ',
      trigger_medications: 'Spouštěcí lék',
      morning_medications: 'Ráno',
      lunch_medications: 'Poledne',
      evening_medications: 'Večer'
    },
    Upcoming: {
      title: 'Budoucí léky',
      date: 'Za {{count}} den',
      date_plural: 'Za {{count}} dní'
    },
    Appointments: {
      title: 'Naplánované termíny',
      date: 'Za {{count}} den',
      date_plural: 'Za {{count}} dní',
      today: 'Dnes'
    },
    startCta: {
      title: 'Zahájit stimulační protokol',
      partOne: 'Vaše léčba by měla začít se',
      partTwo: 'začátkem menstruace.',
      partThree: 'Jakmile dostanete menstruaci, začněte zde. ',
      button: 'Dostala jsem menstruaci'
    }
  },
  StimulationProtocolOverview: {
    Card: {
      title: 'Stimulační protokol',
      duration: 'Celková doba trvání',
      completed: 'Dokončeno',
      starting: 'Začátek',
      today: 'Dnes',
      days: '{{total}} dny',
      day: 'Den {{currentDayCount}}',
      start: 'Připraven k zahájení',
      startDate: 'Datum zahájení',
      endDate: 'Datum ukončení',
      scheduled: 'Naplánováno',
      scheduledClinic: 'Naplánováno klinikou ',
      inProgress: 'Probíhá',
      time: 'Zbývající čas',
      details: 'Více',
      button: 'Dostala jsem menstruaci',
      buttonSetup: 'Naplánováno klinikou',
      buttonStart: 'Více',
      willStart: 'Váš stimulační protokol byl naplánován. Prozkoumejte jej a prohlédněte si plán léčby a podrobnosti.',
      willEnd: 'Informace o kontinuitě medikace naleznete v přehledu stimulačního protokolu.',
      readyToStart: {
        partOne: 'Vaše léčba by měla začít se ',
        partTwo: 'začátkem menstruace. ',
        partThree: 'Jakmile ji získáte, začněte zde.'
      },
      trackMedications: {
        completed: 'Léky užíváte správně',
        overdue: 'Máte opožděné léky'
      },
      notScheduled: 'Váš stimulační protokol bude teprve naplánován.'
    },
    cardTreatment: {
      treatment: 'Léčba',
      services: 'Speciální laboratorní metody IVF',
      dateOfIssue: 'Datum vydání',
      specialist: 'Lékař',
      button: 'Více'
    },
    appointments: {
      title: 'Naplánované termíny',
      date: 'Den {{count}}',
      extendedDate: '{{count}}',
      intro:
        'Během stimulačního protokolu budete muset pravidelně absolvovat ultrazvukové vyšetření ke kontrole množství a velikosti folikulů a pravidelný odběr krve ke kontrole hladiny hormonů. K odběru vajíček dojde 24/36 hodin po spouštěcí injekci. Odběr probíhá v celkové anestezii trvající 10-15 minut, po níž bude následovat 2-3 hodinové sledování. K embryotransferu dojde 5-6 dní po odběru vajíček. Následující termíny a milníky jsou již naplánované:',
      calendar: 'Kalendář',
      noAppointments: 'V současné době nejsou naplánovány žádné termíny.'
    }
  },
  StimulationProtocolOverviewModal: {
    title: 'Přehled stimulačního protokolu',
    description: {
      partOne: 'Váš stimulační protokol bude trvat',
      partTwo: '{{number}} dní',
      partThree: 'a měl by ',
      partFour: 'začít 1. nebo 2. den vašeho menstruačního cyklu',
      partFive: '(s prvním silnějším krvácením). ',
      partSix: 'Cílem stimulace je získání vyššího počtu zralých vajíček ve vaječnících, než při běžném cyklu.'
    },
    downloadPdf: 'Stáhněte si PDF',
    downloadErrorToast: {
      title: 'Chyba',
      text: 'Nepodařilo se stáhnout soubor'
    },
    appointments: {
      day: 'Den {{day}}',
      learnMore: 'Více informací o termínech'
    },
    medications: {
      learnMore: 'Více informací o lécích',
      notes: 'Poznámky:'
    },
    treatmentDetails: {
      doctor: 'Lékař: {{doctorName}}',
      learnMore: 'Více informací o laboratorních metodách',
      dateOfIssue: 'Datum vydání: {{- dateOfIssue}}',
      laboratoryMethods: 'Speciální laboratorní metody IVF'
    },
    timing: {
      firstConsultation: 'První konzultace',
      firstDayOfCycle: 'První den cyklu'
    },
    patientDetails: {
      idCode: 'Identifikační kód: {{idCode}}',
      born: 'Datum narození',
      partner: 'Partner'
    },
    panels: {
      medications: 'Léky',
      appointments: 'Termíny',
      timing: 'Časový průběh',
      patientDetails: 'Informace o pacientce',
      treatmentDetails: 'Podrobnosti'
    }
  },
  StimulationProtocolClinicOverview: {
    alert: 'Dočasný režim zobrazení',
    disclaimer:
      'Pracujeme na opravě připojení. Vaše data jsou v bezpečí, použijte prosím dávkování léků dle níže uvedené tabulky.',
    title: 'Detaily stimulačního protokolu',
    swipe: 'Přetáhněte doleva'
  },
  Settings: {
    subtitle: {
      appSettings: 'Nastavení aplikace',
      account: 'Účet'
    },
    links: {
      path: 'Vaše cesta',
      notifications: 'Notifikace',
      personalDetails: 'Osobní údaje',
      changePassword: 'Změnit heslo',
      treatmentStop: 'Ukončení léčby',
      onBoarding: 'Spustit náhled aplikace',
      language: 'Jazyk',
      biometry: 'Biometrie',
      trackingPreference: 'Nastavení soukromí'
    },
    personalDetails: {
      patientName: 'Jméno pacientky',
      birthDate: 'Datum narození',
      email: 'E-mail',
      patientId: 'ID pacientky',
      partnerName: 'Jméno partnera'
    },
    changePassword: {
      descriptionFirst: 'Pro změnu hesla vám pošleme odkaz na váš e-mail',
      descriptionSecond: 'pomocí kterého si heslo změníte',
      button: 'Odeslat e-mail',
      successMessage: 'E-mail odeslán!',
      descriptionMessage: 'K obnově hesla použijte odkaz'
    },
    treatmentStop: {
      firstParagraph:
        'Pokud potřebujete ukončit léčbu, prosím, kontaktujte svého lékaře nebo kliniku, abychom se domluvili, co a jak dál. ',
      secondParagraph:
        'Pouze pokud jste se s nimi již dohodla na ukončení léčby, použijte tlačítko na této stránce pro obnovu aplikace.',
      buttonClinic: 'Kontaktovat kliniku',
      buttonStop: 'Ukončit léčbu',
      modal: {
        title: 'Opravdu chcete léčbu ukončit? ',
        descriptionFirst: 'Ukončení léčby ',
        descriptionBold: 'resetuje vaši aplikaci',
        descriptionSecond: 'a přijdete o přehled léků. ',
        confirmButton: 'Ano, ukončit',
        rejectButton: 'Ne, chci pokračovat'
      }
    },
    notifications: {
      description:
        'Zde se můžete rozhodnout, které notifikace chcete z aplikace dostávat. Doporučujeme ponechat zapnutá oznámení o lécích.',
      pushLabel: 'Push notifikace',
      emailLabel: 'E-mail',
      categories: {
        all: {
          title: 'Všechny notifikace',
          description: 'Zde můžete rozhodnout o skrytí všech oznámení z portálu pacienta.'
        },
        appointments: {
          title: 'Termíny v kalendáři',
          description: 'Toto oznámení vám připomene nadcházející termíny.'
        },
        documents: {
          title: 'Dokumenty',
          description: 'Toto oznámení vás upozorní na nové dokumenty, které klinika nahrála.'
        },
        embryo_dev: {
          title: 'Vývoj embrya',
          description: 'Toto oznámení vás upozorní na nové aktualizace vývoje embryí.'
        },
        invoices: {
          title: 'Faktury',
          description: 'Toto oznámení vás upozorní na nové faktury z kliniky.'
        },
        medications: {
          title: 'Připomenutí léků',
          description: 'Toto oznámení vám připomene, abyste si vzali léky dle protokolu.'
        },
        pregnancy_test: {
          title: 'Těhotenský test',
          description: 'Toto oznámení vám připomene, kdy začne období těhotenského testu.'
        },
        stimulation_protocol: {
          title: 'Stimulační protokol',
          description: 'Toto oznámení vám připomene události stimulačního protokolu.'
        }
      }
    },
    biometry: {
      description: 'Zde se můžete rozhodnout, zda aktivovat nebo deaktivovat přístup prostřednictvím biometrie',
      toggleLabel: 'Biometrické ověřování',
      noEnroll: 'Zařízení se nezaregistrovalo do systému Fingerprint/FaceId',
      toast: {
        successTitle: 'Úspěšně dokončeno',
        successText: 'Biometrické ověřování povoleno',
        errorTitle: 'Chyba',
        errorText: 'Nesprávné heslo'
      },
      bottomModal: {
        title: 'Potvrďte biometrické ověření',
        button: 'Potvrďte'
      },
      authenticationPrompt: {
        title: 'Potvrďte biometrické přihlášení pomocí {{biometryType}}'
      }
    },
    trackingPreference: {
      description:
        'Cookies používáme pro technickou funkčnost a pro měření návštěvnosti, shromažďování a zpracování osobních údajů ze zařízení, abychom vám mohli poskytovat ty nejlepší možné služby a zkušenost.',
      toggle: 'Přijmout'
    }
  },
  Calendar: {
    header: 'Kalendář',
    dayNamesShort: ['Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So'],
    monthHeader: {
      format: 'MMMM YYYY'
    },
    addToCalendar: {
      SuccessToast: {
        title: 'Úspěšně dokončeno',
        text: 'Schůzka byla přidána do vašeho kalendáře'
      },
      ErrorToast: {
        title: 'Něco se pokazilo',
        text: 'Prosím zkuste to znovu.'
      }
    },
    range: {
      [CalendarRange.STIMULATION_PROTOCOL]: 'SP',
      [CalendarRange.EMBRYO_DEV]: 'EV',
      [CalendarRange.PREGNANCY_TEST]: 'TT'
    },
    dayHeader: {
      format: 'dddd, D MMMM YYYY'
    },
    cards: {
      embryoDev: {
        header: 'Embryo vývoj',
        future: {
          text: 'Během tohoto období budete mít možnost sledovat aktuální informace o vývoji vašich embryí.'
        },
        current: {
          text: 'Zobrazit aktualizace'
        }
      },
      pregnancyTest: {
        header: 'Těhotenský test',
        future: {
          text: 'Během tohoto období nám můžete poslat výsledky vašich těhotenských testů.'
        },
        current: {
          text: 'Dejte nám vědět výsledek'
        }
      },
      stimulationProtocol: {
        header: 'Stimulační protokol',
        future: {
          text: 'Váš stimulační protokol začne',
          delta: 'za {{delta}}  dní',
          date: ' MMMM D'
        },
        current: {
          header: 'Den {{index}}'
        }
      },
      appointment: {
        header: 'Termín',
        learnMore: 'Více informací',
        dateFormat: 'dddd, D MMMM YYYY',
        call: 'Zavolat na kliniku',
        directions: 'Pokyny'
      },
      noAppointments: 'Žádné termíny nejsou naplánovány'
    }
  },
  ContactModal: {
    phone: 'Telefonní číslo: ',
    email: 'E-mail:'
  },
  Messages: {
    new: 'Nová',
    Create: {
      headerTitle: 'Nová zpráva',
      to: 'Komu:',
      send: 'Poslat',
      textareaPlaceholder: 'Zde napište zprávu...',
      successToast: {
        title: 'Zpráva odeslána',
        text: 'Zpráva byla úspěšně odeslána'
      },
      errorToast: {
        title: 'Něco se nepovedlo',
        text: 'Zkuste to prosím znovu.',
        linkText: 'Klikněte zde'
      }
    },
    Home: {
      title: 'Zprávy',
      emptyConversationSubtitle: 'Začněte psát zprávu pro kliniku',
      lastMessageToday: 'HH:mm',
      lastMessageNotToday: 'D MMM YYYY'
    },
    Detail: {
      NewConversation: {
        banner:
          'Pokud potřebujete podporu nebo informace, napište do této konverzace, abyste mohli o své léčbě komunikovat přímo s klinikou.'
      },
      newMessage: 'Nová zpráva'
    },
    List: {
      user: 'Vy'
    }
  },
  Notifications: {
    title: 'Notifikace',
    read: 'Označit vše jako přečtené',
    mostRecent: 'Nejnovější',
    emptyList: 'Zatím nemáte žádné notifikace',
    dateLessThanOneHour: 'Právě teď',
    dateLessThanOneDay: 'před {{count}} hodinou',
    dateLessThanOneDay_plural: 'před {{count}} hodinami',
    dateMoreThanOneDay: 'D MMM YYYY - HH:mm',
    markAllAsReadToast: {
      title: 'Notifikace',
      text: 'Všechny notifikace označeny jako přečtené'
    }
  },
  BiometryMessage: {
    title: 'Zjištěná biometrie',
    subtitle: 'Nastavení biometrického přihlášení.',
    primaryButton: 'Aktivovat biometrické přihlášení',
    secondaryButton: 'Ne, děkuji',
    SuccessToast: {
      title: 'Nastaveno',
      text: 'Biometrické přihlášení bylo uloženo'
    }
  },
  Biometry: {
    AuthenticationPrompt: {
      title: 'Otisk prstu pro FutureLife',
      subtitle: 'Prosíme, proveďte ověření otiskem prstu',
      description: 'Přihlašujete se do FutureLife',
      cancel: 'Přihlášení e-mailem '
    }
  },
  EmbryoDev: {
    headerTitle: 'Embryo vývoj',
    waitingUpdate:
      'Čekáme na aktualizaci od kliniky. Nejčastěji jsou aktualizace od kliniky zobrazovány ve dnech 1, 3 a 5 embryo vývoje.',
    learnMoreAboutPhases: 'Fáze a vývoj embryí',
    status: {
      inProgress: 'V procesu',
      completed: 'Dokončeno'
    },
    EmbryoCard: {
      embryoType: 'Embryo {{embryoNumber}}',
      grade: 'Hodnocení',
      phase: 'Fáze'
    },
    Grading: {
      Standard: {
        title: 'Standardní vývoj',
        shortTitle: 'Standardní vývoj',
        description: 'Embryo se v pořádku vyvíjí.'
      },
      Slight: {
        title: 'Ve vývoji jsou drobné odchylky',
        shortTitle: 'Drobné odchylky',
        description: 'Embryo se vyvíjí s drobnými odchylkami.'
      },
      Greater: {
        title: 'Ve vývoji jsou ochylky.',
        shortTitle: 'Odchylky',
        description: 'Embryo se vyvíjí s odchylkami.'
      },
      Discarded: {
        title: 'Vyřazené embryo',
        shortTitle: 'Vyřazeno',
        description: "The embryo isn't developed right and it's discarded."
      }
    },
    StatusDetails: {
      totalEmbryos: 'Total embryos',
      embryosLeft: 'Embryos left',
      discardedEmbryos: 'Discarded embryos',
      inStandardEmbryo: 'In standard development',
      lastUpdate: 'Last updated'
    },
    Phases: {
      0: {
        title: 'Collection of Gametes',
        description:
          'Collection of eggs and sperm and consequent fertilization. Mature egg is necessary for fertilization. Mature egg is at a stage of metaphase II and has a polar body. (M2)'
      },
      1: {
        title: 'Fertilization check',
        description:
          'Within 16 to 20 hours following fertilization, fertilization is evaluated based on the number of created pronucleus (PN) and the number of polar bodies (PB).With a fertilized egg we can identify two pronuclei (2PN): 1st pronucleus – maternal genetic information and 2nd pronucleus – paternal genetic information.'
      },
      2: {
        title: 'Cleavage check',
        description:
          'Within 36 to 48 hours following fertilization, embryos are evaluated based on the number of blastomeres, degree of fragmentation, granulation and vacuolization. After 36 hours – 2 identical cells. After 48 hours – 4 identical cells. Embryonal development is not commonly assessed that day'
      },
      3: {
        title: 'Cleavage check',
        description:
          'Within 72 hours following fertilization, correctly developing embryo has 6-8 cells on this day. Embryos can develop slower or faster.'
      },
      4: {
        title: 'Embryonic Quality Check',
        description:
          'Within 96 hours following fertilization. Cells of the embryo are getting smaller, their number is constantly growing, border line among cells is disappearing. The cavity is formed in the central part of the embryo.'
      },
      5: {
        title: 'Embryonic Quality Check',
        description:
          'Within 120 hours following fertilization. The cavity in the central part of the embryo is growing – blastocyst is emerging. Embryo transfer (ET) or preimplantation genetic diagnosis (PGD) are also carried out on the 5th day of cultivation, or additional good quality embryos are frozen.'
      },
      6: {
        title: 'Embryonic Quality Check',
        description:
          'Within 144 hours following fertilization, after the embryo‘s quality evaluation, all surplus embryos are frozen. Embryos should be at the stage of expanded (XB),hatching (HB) blastocysts or fully hatched blastocyst (FHB).'
      },
      none: {
        title: 'Missing title',
        description: 'Missing description'
      }
    }
  },
  EmbryoDevOverviewModal: {
    title: 'Embryonic development overview',
    description: {
      partOne: 'Embryo develepment is the development and formation of the human embryo.',
      partTwo: 'Embryo development is uploaded from day 1 to 5. Day 0 shows the number of matured oocytes.',
      partThree: 'The embryo development is not carried out on Sunday.'
    },
    downloadPdf: 'Stáhnout PDF',
    learnMore: 'Více',
    downloadErrorToast: {
      title: 'Chyba',
      text: 'Soubor se nepodařilo stáhnout'
    },
    panels: {
      grading: 'Hodnocení',
      embryoPhases: 'Fáze kultivace',
      embryoTransfer: 'Embryo transfer'
    },
    Grading: {
      description: 'The grade of an embryo measures its actual health status.'
    },
    EmbryoPhases: {
      description: 'A phase is the state of the embryo in a specific day. We could have 7 phases.',
      checkingEmbryos: '*Checking of embryos is done 1st, 3rd and 5th day of cultivation.',
      or: 'or',
      day: 'Day',
      Phases: {
        twoCell: '2-cell Embryo',
        fourCell: '4-cell Embryo',
        eightCell: '8-cell Embryo',
        twelveCell: '12-cell Embryo',
        blastocyst: 'Blastocyst (B)',
        compactMorulaWithCavitation: 'Compact morula with cavitation (CM+)',
        compactMorula: 'Compact morula (CM)',
        earlyMlastocyst: 'Early Mlastocyst (EB)',
        expandedBlastocyst: 'Expanded Blastocyst (XB)',
        fertilizedEgg: 'Fertilized Egg (2PN)',
        hatchingBlastocyst: 'Hatching Blastocyst (HB)',
        immatureEgg: 'Immature Egg (GV)',
        incorrectlyFertilizedEgg: 'Incorrectly Fertilized Egg (3PN)',
        matureEgg: 'Mature Egg (M2)'
      }
    },
    EmbryoTransfer: {
      subTitle: 'Following you Embryo Transfer',
      learnMore: 'Learn more about Embryo Transfer',
      Description: {
        partOne: 'The embryo transfer is most often carried out on the 5th or 3rd day of cultivation.',
        partTwo:
          'Please consult our physician regarding the right timing. Embryo transfer is painless and is not carried out with anaesthesia (you do not have to come with an empty stomach).',
        partThree:
          'It is not necessary to have a completely full bladder but we do recommend that you do not use the toilet immediately prior to your embryo transfer.',
        partFour:
          'The embryo transfer is always carried out as an outpatient procedure. Your partner may be present for the procedure too. You will remain laying down for about 10-15 minutes immediately following the transfer of your embryos',
        partFive:
          'You will be instructed on how to proceed further after your embryo transfer is complete, and you will receive a detailed report about the course of your treatment and the condition of your embryos.',
        partSix: 'You will also be issued a bill for your treatment payable at our accounting department.'
      }
    }
  },
  EmbryoDevOverview: {
    title: 'Embryo vývoj',
    details: 'Detaily',
    Status: {
      Header: {
        completed: 'Dokončeno',
        progress: 'V procesu',
        totalDays: '{{count}} den',
        totalDays_plural: '{{count}} dny',
        day: 'Den {{count}}'
      }
    },
    Waiting: {
      text: 'Aktualizace proběhnou dle Vaší léčby nastavené klinikou.'
    }
  },
  PregnancyTest: {
    Sections: {
      GreatNews: {
        title: 'To jsou skvělé zprávy, {{name}}!',
        subTitle:
          'In order to be completely sure, it’s important that you confirm your results by taking a blood test. \n\n Have you taken a ',
        subTitle2: 'blood pregnancy test?',
        yes: 'Yes, I did already',
        no: 'Not yet'
      },
      Congratulations: {
        title: 'Congratulations on your pregnancy!',
        subTitle:
          'This is such an exciting time for you and your family. Your hard work and dedication to your fertility treatment has paid off, and you are on your way to starting a new chapter in your life. \n\n Wishing you a healthy and happy pregnancy!',
        thankYou: 'Thank you!'
      },
      YourJourney: {
        title: 'Your journey is not over yet, {{name}}!',
        subTitle: 'Please get in touch with the clinic to decide on your next steps.',
        contact: 'Contact the clinic',
        contactMe: 'Have them contact me'
      },
      TheClinic: {
        title: 'The clinic will get in touch with you soon',
        subTitle: 'We sent your request to the clinic, and they will contact you as soon as possible. ',
        subTitle2: 'to schedule your ',
        subTitle3: 'blood test',
        backToHome: 'Back to home'
      }
    },
    ScheduleBloodTest: {
      title: 'Schedule a blood test',
      subTitle: 'Please get in touch with the clinic to schedule a blood test and confirm your pregnancy results. ',
      schedule: 'Schedule it with {{clinicName}}',
      need: 'I need to do it somewhere else'
    },
    ConfirmBloodTest: {
      title: 'Are you sure?',
      subtitlePartOne: 'In case you are unable to organize a blood test at our clinic, please visit our ',
      helpCenter: 'Help Center ',
      subtitlePartTwo: 'for more information about it. \n\n Are you sure you want to do the blood test somewhere else?',
      confirm: "Yes, I'm sure",
      learnMore: 'Learn more about blood test'
    }
  },
  PregnancyTestOverview: {
    title: 'Pregnancy Test',
    helpCenter: 'Help',
    Waiting: {
      placeholder: 'Data will be updated according to the current treatment, if provided by your clinic',
      Status: {
        regularText: 'The recommended period for pregnancy test starts ',
        boldText: 'in {{count}} day',
        boldText_plural: 'in {{count}} days'
      },
      Details: {
        Phase1: {
          description:
            'You have just undergone your Embryo transfer. We hope you feel well and we would like to wish you best of luck!'
        },
        Phase2: {
          description: 'We would like to kindly ask you to let us know, how do you like our clinic?',
          textCta: 'Take Survey'
        },
        Phase3: {
          description: 'If in the meantime you already get a positive result, please let us know.',
          textCta: 'I got a positive result'
        }
      }
    },
    Started: {
      Status: {
        regularText: 'The recommended period for pregnancy test ',
        boldText: 'has started'
      },
      Details: {
        description:
          'Be sure to take the recommended pregnancy tests during this period.\n\n If you get a positive test result, please let us know from here.',
        textCta: 'I got a positive result'
      }
    },
    Completed: {
      Status: {
        regularText: '$t(PregnancyTestOverview.Started.Status.regularText)',
        boldText: 'has ended'
      },
      Details: {
        description:
          "If you didn't get a positive test result, please be sure to get in touch with the clinic to know your next steps.",
        textCta: 'Get in touch',
        textCta2: 'I got a positive result'
      }
    },
    Result: {
      infoBox: "We've sent your request to the clinic, they will contact you soon.",
      WaitingBloodTestResults: {
        title: 'This is great news, {{name}}!',
        description: 'In order to confirm your pregnancy, please wait for the results of your blood test.'
      },
      NegativeBloodTestResults: {
        title: "Your journey isn't over yet",
        description: 'Please get in touch with the clinic to decide on your next steps.'
      },
      Success: {
        title: 'Congratulations on your pregnancy!',
        description:
          'Your hard work and dedication to your fertility treatment has paid off, and you are on your way to starting a new chapter in your life.'
      },
      BloodTest: {
        partOne: 'Are the ',
        partTwo: 'blood test ',
        partThree: 'results positive?',
        answerYes: 'Ano',
        answerNo: 'Ne'
      }
    }
  },
  OnboardingExistingPatient: {
    Start: {
      title: 'Propojit ID pacienta s aplikací',
      description: 'Propojte své ID pacienta s FutureLife aplikací, abyste mohla jednoduše sledovat vaší cestu.',
      selectClinic: 'Vyberte Vaší kliniku',
      selectClinicPlaceholder: 'Vyberte kliniku ze seznamu',
      patientId: 'ID pacienta',
      patientIdPlaceholder: 'Zadejte ID pacienta',
      patientIdNotFound:
        'Nepodařilo se dohledat Vaše ID pacienta v naší databázi. Prosím, ujistěte se, že jste si vybrala ze seznamu Vaší kliniku. Pokud se Vám nadále nepůjde přihlásit, kontaktujte kliniku pro pomoc.',
      email: 'E-mail',
      emailPlaceholder: 'E-mail',
      disclaimer:
        'Pokud si neznáte Vaše ID pacienta, kontaktuje Vaší kliniku. Poskytne Vám všechny potřebné údaje a podporu.',
      ctaClinicDetail: 'Zobrazit kontaktní údaje kliniky',
      ctaExistingAccount: 'Máte již účet aplikace FutureLife?',
      continue: 'Pokračovat',
      backHome: 'Zpátky domů'
    },
    OTP: {
      title: 'Vložte kód, který jsme vám poslali na e-mail',
      description: 'Na e-mail jsme vám poslali autorizační kód. Pro přihlášení opište kód zde.',
      codeLabel: 'Kód',
      codePlaceholder: 'Zadejte obdržený kód',
      verify: 'Ověřit',
      codeNotReceived: 'Může to chvilku trvat. Nic vám nepřišlo?',
      sendAgain: 'Znovu odeslat kód',
      invalidOTP: 'Neplatný kód',
      refreshSuccessToast: {
        title: 'Kód byl odeslán',
        text: 'Poslali jsme vám na e-mail další kód'
      }
    },
    Informations: {
      title: 'Propojit ID pacienta s aplikací',
      selectedClinic: 'Vybraná klinika',
      description: 'Doplňte Vaše osobní a kontaktní údaje.',
      first_name: 'Křestní jméno',
      first_name_placeholder: 'Vaše křestní jméno',
      last_name: 'Příjmení',
      last_name_placeholder: 'Vaše přijmení',
      birthdate: 'Datum narození',
      birthdate_placeholder: 'Zvolte datum narození',
      my_gender: 'Mé pohlaví',
      my_gender_placeholder: 'Vyberte',
      my_gender_options: {
        M: 'Muž',
        F: 'Žena'
      },
      country: 'Země',
      country_placeholder: 'Zvolte zemi',
      personal_code_identifier: 'Rodné číslo',
      personal_code_identifier_placeholder: 'Zvolte rodné číslo',
      phone_number: 'Telefonní číslo',
      phone_number_placeholder: 'Formát s předvolbou země +420 xxx xxx xxx',
      email: 'E-mail',
      email_placeholder: 'Zadejte e-mail',
      privacy_policy: 'Souhlasím se zpracováním osobních údajů dle ',
      privacy_policy_link: 'Zásad ochrany osobních údajů',
      rodcis: 'Pokud máte české rodné číslo, prosíme o vyplnění. V opačném případě ponechte pole prázdné.',
      submit: 'Odeslat'
    },
    Feedback: {
      title: 'Děkujeme za odeslání žádosti',
      subtitle: 'Poslali jsme e-mail na ',
      subtitle2:
        ' s odkazem na nastavení hesla. Dokončete nastavení, abyste se mohli přihlásit do svého účtu. Odkaz je platný jednu hodinu.',
      goToLogin: 'K přihlášení',
      backToHome: 'Domů',
      alreadyLinked: {
        title: 'ID pacienta je již propojeno s naším uživatelským účtem',
        subtitle:
          'Není třeba propojovat ID pacienta s naším účtem znovu. Jednodušše se přihlašte s Vašimi přihlašovacími údaji.'
      }
    }
  }
}
