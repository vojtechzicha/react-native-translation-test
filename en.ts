import { CalendarRange } from '@molecules/CalendarDay/enums'

export const en = {
  Global: {
    baseDateFormat: 'DD/MM/YYYY',
    baseTimeFormat: 'HH:mm',
    more: '10 and more',
    error: 'Error',
    selectModalTitle: 'Choose an option:',
    viewAll: 'View all',
    close: 'Close'
  },
  FormValidation: {
    requiredField: 'Required field',
    emailFormatError: 'Email format not valid',
    fieldIsTooShort: 'This field is too short',
    personalCodeIdentifierError: 'Invalid format',
    phoneNumberError: 'Invalid format',
    emailMismatch: 'Emails are different',
    checkField: 'This field must be checked',
    minNumbers: 'At least {{count}} number',
    minNumbers_plural: 'At least {{count}} numbers'
  },
  Languages: {
    en: 'English',
    cs: 'Czech'
  },
  StoryBlok: {
    dateFormat: 'YYYY-MM-DD HH:mm'
  },
  QuizCta: {
    title: 'Find the right clinic for your needs',
    textCta: 'Take the Quiz',
    dateOfBirth: 'Date of birth',
    dateFormat: 'DD/MM/YYYY'
  },
  BookingCta: {
    title: 'Want to talk with us about your situation?',
    textCta: 'Book an appointment'
  },
  Tabs: {
    home: 'Home',
    clinics: 'Clinics',
    treatments: 'Treatments',
    treatment: 'Treatment',
    quiz: 'Quiz',
    menu: 'Menu',
    messages: 'Messages',
    help: 'Help',
    calendar: 'Calendar'
  },
  Menu: {
    version: 'App version {{version}}',
    url: '{{url}}',
    logoutDescription: 'Book an appointment with one of our clinics or log into your existing account',
    book: 'Book an appointment',
    login: 'Login',
    linkPatientId: 'Link Patient ID with app',
    faq: 'FAQs',
    ctaDescription: 'If you want to know more about our services and how they work please visit our Help Center',
    termsOfService: 'Terms of service',
    privacyPolicy: 'Privacy policy',
    logout: 'Logout',
    documents: 'Documents',
    invoices: 'Invoices',
    myClinic: 'My Clinic',
    questionnaire: 'Patient Questionnaire',
    settings: 'Settings',
    cancel: 'Cancel'
  },
  PathPreference: {
    title: 'Choose your path',
    titleFromMenu: 'Your path',
    subtitle: 'You will be able to change it later from the app settings and preferences.',
    button: 'Confirm',
    buttonFromMenu: 'Save',
    linkPatientID: 'I want to link Patient ID with app',
    baby: {
      name: 'I want to have a baby',
      description: 'If you want to have a baby and need help in understanding the best option for you.'
    },
    fertility: {
      name: 'I want to preserve my fertility',
      description: 'If you want to preserve your fertility freezing your gamets in order to use them in the future.'
    },
    donor: {
      name: 'I want to become a donor',
      description:
        'If you want to become a donor and give your gamets (ovocytes or sperm) so that other patients can use them'
    }
  },
  BookAnAppointment: {
    title: 'Book your appointment',
    subtitleSelectClinic:
      'Please start by selecting your preferred clinic for booking the consultation and possibly carry out the treatment.',
    selectedClinic: 'Selected clinic:',
    subtitleFirstStep: 'Add your personal and contact information to continue.',
    subtitleSecondStep: 'Add your treatment needs and proceed to submit your booking request.',
    firstName: 'First name',
    firstNamePlaceholder: 'Type your first name',
    lastName: 'Last name',
    lastNamePlaceholder: 'Type your last name',
    birthDate: 'Date of birth',
    birthDatePlaceholder: 'Enter your date of birth',
    country: 'Country',
    countryPlaceholder: 'Choose your country',
    personalCodeIdentifier: 'Social number',
    personalCodeIdentifierPlaceholder: 'Type your social number',
    phoneNumber: 'Phone number',
    phoneNumberPlaceholder: 'Type your phone number with + and country code',
    email: 'Email',
    emailPlaceholder: 'Type your email',
    confirmEmail: 'Confirm email',
    confirmEmailPlaceholder: 'Type your email again',
    submit: 'Submit',
    continue: 'Continue',
    clinic: 'Select the clinic',
    clinicPlaceholder: 'Select clinic from the list',
    clinicDescription:
      "If you need help undertanding which clinic is better for  you use our quiz, answer a few questions and you'll find what you are looking for.",
    takeQuiz: 'Take the quiz now',
    relationshipType: 'Relationship type',
    relationshipTypePlaceholder: 'Select option',
    myGender: 'My gender',
    myGenderPlaceholder: 'Select option',
    interestedIn: 'Interested in',
    interestedInPlaceholder: 'Select option',
    message: 'Add a message',
    messagePlaceholder: 'Type your message',
    time: 'Time preferences',
    timePlaceholder: 'Select option',
    preferencesDescription:
      "We'll do our best in order to satisfy your preferences, anyway please keep in mind that we could come back to you with aother timing due to clinic workload",
    agreeUsePersonalData: 'I agree to processing of personal data according to ',
    privacyPolicy: 'Privacy Policy',
    rodcis: 'If you have Czech social number (Rodné číslo), please fill it in. Otherwise leave blank.',
    RelationshipTypeOptions: {
      heterosexual_couple: 'In an heterosexual couple',
      same_sex_couple: 'In a same sex couple',
      single_woman: 'A single woman'
    },
    InterestedInOptions: {
      treatment_with_own_gamets: 'Treatment with own gamets',
      treatment_with_sperm_donation: 'Treatment with sperm donation',
      treatment_with_egg_donation: 'Treatment with egg donation',
      treatment_with_embryo_donation: 'Treatment with embryo donation',
      surrogacy: 'Surrogacy'
    },
    TimePreferencesOptions: {
      morning_appointment: 'Morning appointment',
      afternoon_appointment: 'Afternoon appointment'
    },
    MyGenderOptions: {
      M: 'Male',
      F: 'Female'
    }
  },
  BookAppointmentSuccess: {
    title: 'Thanks for submitting your request',
    subtitle: 'Our staff will get in touch with you as soon as possible.',
    sentEmailTo: 'We sent an email to ',
    sentEmailToDescription:
      ' with a link to set your password, complete it in order to be able to login and access your account. Remember to set password within one hour. ',
    sentEmailToGeneric:
      'We sent an email with a link to set your password, complete it in order to be able to login and access your account. Remember to set password within one hour. ',
    noMailReceived: "Didn't received anything yet?",
    clickHere: 'Click here',
    login: 'Go to login',
    backHome: 'Back to home',
    successToast: {
      title: 'Email',
      text: 'The email was sent successfully'
    }
  },
  BookAppointmentResendMail: {
    successToast: {
      title: 'Email',
      text: 'The email was sent successfully'
    }
  },
  Auth: {
    LoginPage: {
      loginToAccount: 'Log in to your account',
      insertEmail: 'Insert your email address.',
      insertPassword: 'Insert your password.',
      email: 'Email',
      emailPlaceholder: 'Type your email',
      password: 'Password',
      passwordPlaceholder: 'Type your password',
      forgotPassword: 'Forgot your password?',
      continue: 'Continue',
      cta: 'Login'
    },
    PasswordEmailSent: {
      title_set: "We've sent you a link to set your password",
      title_reset: "We've sent you a link to reset your password",
      sentEmailTo: 'We sent an email to ',
      sentEmailToDescription_set:
        ' with a link to set your password, complete it in order to login and access your account. Remember to set password within one hour.',
      sentEmailToDescription_reset:
        ' with a link to reset your password, complete it in order to login and access your account. Remember to reset password within one hour.',
      ctaPrimary: 'Go to Login',
      ctaSecondary: 'Back to Home',
      noMailReceived: "Didn't received anything yet? ",
      clickHere: 'Click here',
      successToast: {
        title: 'Email',
        text: 'The email was sent successfully'
      }
    },
    SetNewPassword: {
      title: 'Set your password',
      description:
        'Set the password for the FutureLife account in order to experience the full app and receive messages from the clinic',
      password: 'Password',
      repeatPassword: 'Repeat password',
      length: '{{count}} character long',
      length_plural: '{{count}} characters long',
      passwordSmallLetters: 'At least {{count}} small letter',
      passwordSmallLetters_plural: 'At least {{count}} small letters',
      passwordCapitalLetters: 'At least {{count}} capital letter',
      passwordCapitalLetters_plural: 'At least {{count}} capital letters',
      passwordNumber: 'At least {{count}} number',
      passwordNumber_plural: 'At least {{count}} numbers',
      passwordSpecialCharacter: 'At least {{count}} special character',
      passwordSpecialCharacter_plural: 'At least {{count}} special characters',
      cta: 'Confirm',
      passwordsMismatch: "Passwords don't match"
    },
    ConfirmEmailCode: {
      title: "Insert the code we've sent to your email",
      subtitle: 'We sent an authorisation code to your email, please enter it here in order to login.',
      code: 'Code',
      codePlaceholder: 'Type the code you received',
      verify: 'Verify',
      noCode: "It may take a minute to receive the code.\nHaven't received it? ",
      sendAgain: 'Send the code again',
      toastTitle: 'Code sent',
      toastText: 'Another code has been sent to your email'
    },
    AccountNotFound: {
      title: 'No account found',
      subtitle: 'The email or password you have provided are not connected to a FutureLife account.',
      tryAgain: 'Try again',
      backHome: 'Back to Home'
    },
    ResetBiometry: {
      message:
        'If you decide to go ahead with the password reset and you have already set up biometrics, you will need to set up biometrics again at your next login.',
      confirmModal: 'Reset Password',
      dismissModal: 'Cancel'
    }
  },
  Errors: {
    E_EXPIRED_TOKEN: 'Session expired',
    E_INVALID_TOKEN: 'Invalid authentication token',
    E_ROUTE_NOT_FOUND: 'Resource not found',
    E_INTERNAL_SERVER_ERROR: 'Generic server error',
    E_UNAUTHORIZED: 'You do not have permission to access this resource',
    E_VALIDATION_FAILURE: 'There are some errors',
    E_ROW_NOT_FOUND: 'Resource not found',
    BASE: 'An error occurred',
    E_FORBIDDEN: 'You do not have permission to access this resource',
    E_INVALID_CREDENTIALS: 'Email or password are wrong',
    E_INVALID_OTP: 'OTP is wrong',
    ER_DUP_ENTRY: 'Email is already registered',
    E_OLD_PASSWORD: 'Password has been already used'
  },
  Clinics: {
    title: 'Clinics',
    Filters: {
      title: 'Filters',
      apply: 'Apply',
      resetAll: 'Reset all',
      country: 'Country',
      allCountries: 'All Countries',
      services: 'Services',
      allServices: 'All Services',
      treatmentCriteria: 'Treatment Criteria',
      allTreatmentCriteria: 'All Criteria',
      filters: 'Filters',
      sortBy: 'Sort by',
      sortByParam: 'Sort by: {{param}}'
    }
  },
  ClinicDetail: {
    Detail: {
      howToReachClinic: 'How to reach the clinic',
      more: 'More',
      totalReviews: '{{total}} reviews',
      clinicForYou: 'Is this the clinic for you?',
      becomeDonor: 'Become a donor',
      bookAppointment: 'Book appointment',
      visitWebsite: 'Visit website',
      DonorBanner: {
        title: 'Donor Program',
        description:
          'If you want to become a donor and give your gamets (ovocytes or sperm) so that other patients can use them.',
        DonorCta: {
          textCta: 'Become a donor'
        }
      },
      FertilityBanner: {
        title: 'Fertility preservation',
        description: 'If you want to preserve your fertility freezing your gamets in order to use them in the future.',
        FertilityCta: {
          textCta: 'Book an appointment'
        }
      }
    }
  },
  DonorScreening: {
    title: 'Become a donor',
    subtitle:
      "This is the very begining of you donor journey, you just have to choose a clinic and fill out some info about yourself and we'll get back to you. This form is sent securely using a safe connection.",
    next: 'Next',
    submit: 'Submit',
    privacyPolicy: ' I have read and agree to the Privacy Policy.',
    storeData:
      "By submitting this form, I consent to the storing of my patient data in FutureLife's register of patients.",
    clinic: 'Select the clinic*',
    clinicPlaceholder: 'Select clinic from the list',
    startTheQuestionnaire: 'Start the questionnaire',
    modalTitle: 'Are you sure to leave the questionnaire?',
    modalDescription: "Your progress won't be saved. You'll have to restart it from the beginning.",
    DonorScreeningEnd: {
      title: 'Thanks for submitting your request',
      subtitle: 'Our staff will get in touch with you as soon as possible.',
      backHome: 'Back to home'
    }
  },
  HelpCenter: {
    rootName: 'Help Center',
    related: 'Related',
    commonQuestions: 'Common Questions',
    Search: {
      homePlaceholder: 'Search...',
      placeholder: 'Search topic...',
      results: 'Search results',
      matches: '{{count}} match',
      matches_plural: '{{count}} matches'
    }
  },
  HomePrivate: {
    todayDateFormat: 'dddd, D MMMM YYYY',
    greetings_morning: 'Good morning, {{name}}',
    greetings_afternoon: 'Good afternoon, {{name}}',
    greetings_evening: 'Good evening, {{name}}',
    PatientQuestionnaireBanner: {
      title: 'Patient Questionnaire',
      description: 'Please answer our questionnaire to help inform your treatment',
      buttonStart: 'Start now',
      buttonContinue: 'Continue'
    }
  },
  Quiz: {
    title: 'Find your clinic',
    subtitle: 'Answer just a few questions and quickly find the clinic that best fits your needs.',
    subtitleCompleted:
      'Access the list of clinics suggested based on your selections, or take the quiz again to find new results.',
    text: 'Complete our Quiz to find the right clinic for you',
    start: 'Start the quiz',
    restart: 'Take the Quiz again',
    clinics_loading: 'Please wait...',
    clinics_count_zero: 'No Clinics Found',
    clinics_count_zero_subtitle: 'Try changing your current selection',
    clinics_count: 'clinic found',
    clinics_count_plural: 'clinics found',
    next: 'Next',
    viewResults: 'View results',
    goToResults: 'Go to results',
    birthdateFormat: 'ddd, D MMM YYYY',
    resultsTitle: 'Here are the clinics for you',
    yourResults: 'Your selections',
    ctaTitle: "Didn't find the clinic you were looking for?",
    ctaText: 'Take the Quiz again',
    clinics_results_count: '{{count}} clinic found',
    clinics_results_count_plural: '{{count}} clinics found',
    gender: 'Gender',
    relationship: 'Relationship',
    birthdate: 'Date of birth',
    partner_birthdate: "Partner's date of birth",
    clinic: 'Clinic',
    need: 'Need',
    treatments: 'Treatments',
    key_factor: 'Key factor',
    modalTitle: 'Are you sure to leave the quiz?',
    modalDescription: "Your progress won't be saved. You'll have to restart it from the beginning."
  },
  StackCancelButton: {
    cancel: 'Cancel'
  },
  ConfirmModal: {
    confirm: 'Yes, I want to leave',
    dismiss: 'No, let me continue'
  },
  WalkThrough: {
    Home: {
      buttonContinue: 'Continue',
      buttonStart: 'Get Started',
      linkPatientID: 'I want to link Patient ID with app'
    }
  },
  Preferences: {
    Tracking: {
      title: 'Privacy Settings',
      description:
        'We use cookies for technical functionality and for measuring the traffic, collecting and processing personal data from devices in order to deliver the best possible service and experience. By choosing “Accept”, you consent to these purposes.',
      learnMore: 'Learn more',
      accept: 'Accept',
      reject: 'Reject'
    }
  },
  Onboarding: {
    title: 'Welcome to FutureLife',
    titleWithName: 'Welcome to FutureLife, {{username}}',
    subtitle: "We are happy to have you with us. Let's see together what this app can do for you.",
    currentTreatment: {
      name: 'Current treatment',
      description:
        'Here you can find your current type of treatment.The treatment type can be changed after the consultation with our IVF specialist.'
    },
    documents: {
      name: 'Documents',
      description:
        'Forget about emails to share documents, here you can see the ones from the clinic and you can upload everything you need to share with us.'
    },
    treatmentProtocol: {
      name: 'Treatment protocol',
      description:
        "After the first consultation your IVF specialist will upload your treatment protocol you'll have to follow for the entire journey."
    },
    calendar: {
      name: 'Calendar',
      description:
        "A calendar view will help you recognise specific periods during your treatment and the actions you'll have to take."
    },
    messages: {
      name: 'Messages',
      description:
        'All your messages in one place, write to the clinic if you need and see the messages from the clinic.'
    },
    embryoDevelopment: {
      name: 'Embryo development',
      description:
        "Once the embryos will be under development you'll be able to see progress on days when clinic checks it."
    },
    pregnancyTest: {
      name: 'Pregnancy test',
      description: 'Once the journey is over, let us know how is it going and if you have a positive pregnancy test.'
    },
    goToHome: 'Go to homepage'
  },
  Loader: {
    loading: 'Loading...'
  },
  PatientQuestionnaire: {
    start: 'Start questionnaire',
    submit: 'Submit',
    saveForLater: 'Save for later',
    next: 'Next',
    cancelModal: {
      title: 'Are you sure to cancel the patient questionnarie?',
      description: "Your progress won't be saved. You'll have to restart it from the beginning.",
      confirmButton: 'Yes, cancel it',
      dismissButton: 'No, let me continue'
    },
    saveForLaterModal: {
      title: 'Are you sure to leave the patient questionnarie?',
      description: "Your progress has been saved. You'll restart from you have interrupted.",
      confirmButton: "Yes, I'll finish later",
      dismissButton: 'No, let me continue'
    },
    ThankYou: {
      title: 'Thank you',
      subtitle:
        'Thank you very much for your time and for completing this questionnaire. We look forward to welcome you at {{clinicName}} as our clients and we will do our best to fulfill your expectations.',
      goToHomepage: 'Go to homepage'
    },
    DonationProgram: {
      interested: "Yes, I'm interested",
      notInterested: 'No, thank you',
      yes: 'yes',
      no: 'no'
    }
  },
  StimulationProtocolSetup: {
    modalTitle: 'Are you sure to leave the stimulation protocol setup?',
    modalDescription: "Your progress won't be saved. You'll have to restart it from the beginning.",
    Actions: {
      start: 'Start Setup',
      restart: 'OK, thank you'
    },
    Start: {
      title: 'Set up your stimulation protocol',
      subtitle: 'If your period has started, you can set up your stimulation protocol and begin treatment.',
      requirements: {
        title: 'Requirements',
        description: 'You can begin the stimulation protocol only on the days of your cycle proposed by the clinic.',
        link: 'Learn more'
      }
    },
    Steps: {
      Actions: {
        next: 'Next',
        notificationsSettings: 'Notifications Settings',
        confirm: 'Confirm & Start'
      },
      PeriodDate: {
        title: 'When did your period come?',
        subtitle: 'Select the day and time in which your period started.'
      },
      StartDate: {
        title: 'When would you like to start your treatment?',
        subtitle: 'These are the available options given the day in which your period started.',
        fallbackInfo:
          "Have you already started taking the required medications by yourself following the doctor's instructions?",
        warning: {
          partOne: 'Please visit our ',
          partTwo: 'Help Center',
          partThree: ' to make sure that you started taking the medications correctly.'
        },
        buttonDateFormat: 'ddd, D MMM YYYY',
        today: 'Today',
        yesterday: 'Yesterday',
        tomorrow: 'Tomorrow',
        startedYesterday: 'I already started yesterday',
        startedToday: 'I already started today',
        comeBack: 'Come back next month'
      },
      MedicationsTimes: {
        title: 'When would you like to take the medications?',
        subtitle: 'Set times that you will be able to maintain every day of the week.',
        alert: 'Times can not be changed later.',
        selectPlaceholder: 'HH:mm',
        label: {
          morning: 'Morning medications',
          noon: 'Noon medications',
          evening: 'Evening medications'
        },
        checksTitle: 'Recommended intervals between medications',
        checkLabel: {
          morningToNoon: 'Morning to Noon: {{min}}–{{max}} hours',
          noonToEvening: 'Noon to Evening: {{min}}–{{max}} hours',
          eveningToMorning: 'Evening to Morning: {{min}}–{{max}} hours'
        }
      },
      Notifications: {
        title: 'We will remind you of each dose',
        subtitle: {
          partOne: 'We will always send you a notification 5 minutes beforehand. Please be sure to have ',
          partTwo: 'notifications enabled',
          partThree: ' in the app settings.'
        }
      },
      Confirm: {
        title: 'Almost done!',
        subtitle: 'Review your choices and confirm to start your Stimulation Protocol.',
        startDate: 'Starting date',
        startDateFormat: 'ddd, D MMM YYYY',
        morning: 'Morning medications',
        noon: 'Noon medications',
        evening: 'Evening medications',
        timesFormat: 'H:mm',
        info: {
          partOne: 'At the beginning, you will see ',
          partTwo: 'placeholder appointments',
          partThree: ' in your calendar. Keep in mind that these can be subject to change from the clinic.'
        }
      }
    },
    Wait: {
      title: "You'll have to wait...",
      firstDescription: 'You missed the window to begin your treatment this time, unfortunately.',
      secondDescription: {
        partOne: 'Please come back ',
        partTwo: 'next month',
        partThree: ' when your period starts.'
      }
    }
  },
  DayHeading: {
    day: 'Day {{number}}',
    dateFormat: 'dddd, D MMMM'
  },
  CalendarSlot: {
    day: 'Day'
  },
  CounterChip: {
    others: '+ {{count}} other',
    others_plural: '+ {{count}} others'
  },
  LastUpdate: {
    inMinutes: 'Updated {{count}} minute ago',
    inMinutes_plural: 'Updated {{count}} minutes ago',
    inHours: 'Updated {{count}} hour ago',
    inHours_plural: 'Updated {{count}} hours ago',
    inDays: 'Updated {{count}} day ago',
    inDays_plural: 'Updated {{count}} days ago'
  },
  StimulationProtocol: {
    Header: {
      title: 'Stimulation Protocol'
    },
    Medications: {
      trigger_medications: 'Trigger medications',
      morning_medications: 'Morning medications',
      lunch_medications: 'Lunch medications',
      evening_medications: 'Evening medications'
    },
    MedicationsList: {
      overdue: 'Overdue'
    },
    MedicationModal: {
      howTo: 'How to take it',
      whatIf: 'What if I forgot it?',
      notFound: 'This is a stimulation medication, please read carefully the instructions in the packaging.'
    },
    ConfirmMedicationsModal: {
      title: 'Medication confirmation',
      description:
        "Did you take the medications for today? In case you didn't you can check on the specific medication tile what to do next.",
      description_plural:
        "Did you take all the {{quantity}} medications for today? In case you didn't you can check on the specific medication tile what to do next.",
      answerNo: 'No, let me check',
      answerYes: "Yes, I'm sure"
    },
    MedicationCard: {
      quantity: 'Quantity: {{qty}}'
    },
    Tabs: {
      all: 'All',
      trigger_medications: 'Trigger',
      morning_medications: 'Morning',
      lunch_medications: 'Lunch',
      evening_medications: 'Evening'
    },
    Upcoming: {
      title: 'Upcoming medications',
      date: 'In {{count}} day',
      date_plural: 'In {{count}} days'
    },
    Appointments: {
      title: 'Appointments',
      date: 'In {{count}} day',
      date_plural: 'In {{count}} days',
      today: 'Today'
    },
    startCta: {
      title: 'Start Stimulation Protocol',
      partOne: 'Your treatment should begin with the ',
      partTwo: 'start of menstruation',
      partThree: '. Once you get it, start here.',
      button: 'I got my period'
    }
  },
  StimulationProtocolOverview: {
    Card: {
      title: 'Stimulation Protocol',
      duration: 'Total duration',
      completed: 'Completed',
      starting: 'Starting',
      today: 'Today',
      days: '{{total}} days',
      day: 'Day {{currentDayCount}}',
      start: 'Ready to start',
      startDate: 'Start date',
      endDate: 'End date',
      scheduled: 'Scheduled',
      scheduledClinic: 'Scheduled by clinic',
      inProgress: 'In progress',
      time: 'Time remaining',
      details: 'Details',
      button: 'I got my period',
      buttonSetup: 'Set notifications',
      buttonStart: 'Explore',
      willStart:
        'Your stimulation protocol has been scheduled. Explore it to preview the treatment roadmap and details.',
      willEnd: 'For info about medication continuity please refer to the stimulation protocol overview.',
      readyToStart: {
        partOne: 'Your treatment should begin with the ',
        partTwo: 'start of menstruation. ',
        partThree: 'Once you get it, start here.'
      },
      trackMedications: {
        completed: 'You are on track with medications today',
        overdue: 'You have overdue medications today'
      },
      notScheduled: 'Your Stimulation Protocol is yet to be scheduled'
    },
    cardTreatment: {
      title: 'My Treatment',
      treatment: 'Treatment',
      services: 'Special IVF laboratory methods',
      dateOfIssue: 'Date of issue',
      specialist: 'Doctor',
      button: 'More details'
    },
    appointments: {
      title: 'Appointments',
      date: 'Day {{count}}',
      intro:
        "During your stimulation protocol you'll have to perform regular ultrasound scans to check the amount and size of follicles and regular blood sample to check the hormone level. The egg retrieval will happen 24/36 hours after the trigger shot in a general anesthesia of 10/15 minutes followed by a 2 hours of monitoring Embryo transfer will happen 5-6 days after the egg retrieval The following appointments and milestones are already scheduled:",
      calendar: 'Calendar',
      noAppointments: 'There are no appointments scheduled at the moment'
    }
  },
  StimulationProtocolOverviewModal: {
    title: 'Stimulation Protocol Overview',
    description: {
      partOne: 'Your stimulation protocol will last ',
      partTwo: '{{number}} days ',
      partThree: 'and it should ',
      partFour: 'start the 1st or 2nd day of the menstrual cycle ',
      partFive: '(with first strong bleeding).',
      partSix:
        'The goal of this treatment is to have a higher number of mature eggs in the ovaries than in a natural cycle.'
    },
    downloadPdf: 'Download (PDF)',
    downloadErrorToast: {
      title: 'Error',
      text: 'Could not download the file'
    },
    appointments: {
      day: 'Day {{day}}',
      learnMore: 'Learn more about appointments'
    },
    medications: {
      learnMore: 'Learn more about medications',
      notes: 'Notes:'
    },
    treatmentDetails: {
      doctor: 'Doctor: {{doctorName}}',
      learnMore: 'Learn more about lab methods',
      dateOfIssue: 'Date of issue: {{- dateOfIssue}}',
      laboratoryMethods: 'Special IVF laboratory methods'
    },
    timing: {
      firstConsultation: 'First Consultation',
      firstDayOfCycle: 'First day of the cycle'
    },
    patientDetails: {
      idCode: 'Id code: {{idCode}}',
      born: 'Born ',
      partner: 'Partner'
    },
    panels: {
      medications: 'Medications',
      appointments: 'Appointments',
      timing: 'Timing',
      patientDetails: 'Patient details',
      treatmentDetails: 'Treatment details'
    }
  },
  StimulationProtocolClinicOverview: {
    alert: 'Temporary display mode',
    disclaimer: "We're working on fixing the connection. Your data are safe, please use the table below temporarily.",
    title: 'Stimulation Protocol Overview',
    swipe: 'Swipe left'
  },
  Settings: {
    subtitle: {
      appSettings: 'App Settings',
      account: 'Account'
    },
    links: {
      path: 'Your path',
      notifications: 'Notifications',
      personalDetails: 'Personal details',
      changePassword: 'Change password',
      treatmentStop: 'Treatment stop',
      onBoarding: 'Onboarding walkthrough',
      language: 'Language',
      biometry: 'Biometry',
      trackingPreference: 'Tracking Preference'
    },
    personalDetails: {
      patientName: "Patient's name",
      birthDate: 'Date of birth',
      email: 'Email',
      patientId: 'Patient ID Code',
      partnerName: "Partner's Name"
    },
    changePassword: {
      descriptionFirst: 'To change your password, we can send you a link to your email ',
      descriptionSecond: ' for you to reset it.',
      button: 'Send email',
      successMessage: 'Email sent!',
      descriptionMessage: 'Use the link to reset your password'
    },
    treatmentStop: {
      firstParagraph:
        'If you need to stop the treatment please contact your doctor or the clinic in order to know what to do.',
      secondParagraph:
        'Only if you already agreed with them on the stop of the treatment please use the button on this page to reset your app.',
      buttonClinic: 'Contact the clinic',
      buttonStop: 'Stop the treatment',
      modal: {
        title: 'Do you really want to stop the treatment?',
        descriptionFirst: 'Stopping the treatment will ',
        descriptionBold: 'reset your app',
        descriptionSecond: " and you'll lose every medications check.",
        confirmButton: 'Yes, stop it',
        rejectButton: 'No, let me continue'
      }
    },
    notifications: {
      description:
        'Here you can decide which notification you want to get from the app, we strongly recommend to leave on the notifications about medications.',
      pushLabel: 'Push notification',
      emailLabel: 'Email',
      categories: {
        all: {
          title: 'All notifications',
          description: 'Here you can decide to hide all notifications from the patient portal'
        },
        appointments: {
          title: 'Calendar appointments',
          description: 'This notification will remind you about upcoming appointments'
        },
        documents: {
          title: 'Documents',
          description: 'This notification will notify you about new documents that the clinic upload'
        },
        embryo_dev: {
          title: 'Embryo development',
          description: 'This notification will notify you about new updates of the embryos'
        },
        invoices: {
          title: 'Invoices',
          description: 'This notification will notify you about new invoices from the clinic'
        },
        medications: {
          title: 'Medications reminders',
          description: 'This notification will remind you to take your medications according to the protocol.'
        },
        pregnancy_test: {
          title: 'Pregnancy test',
          description: 'This notification will remind you when the pregnancy test period will start'
        },
        stimulation_protocol: {
          title: 'Stimulation protocol',
          description: 'This notification will remind you stimulation protocol event'
        }
      }
    },
    biometry: {
      description: 'Here you can decide whether to activate or deactivate access via biometrics',
      toggleLabel: 'Biometric authentication',
      noEnroll: "Device hasn't enrolled into Fingerprint/FaceId",
      toast: {
        successTitle: 'Success',
        successText: 'Biometric authentication enabled',
        errorTitle: 'Error',
        errorText: 'Incorrect password'
      },
      bottomModal: {
        title: 'Confirm biometric authentication',
        button: 'Confirm'
      },
      authenticationPrompt: {
        title: 'Confirm biometric login with {{biometryType}}'
      }
    },
    trackingPreference: {
      description:
        'We use cookies for technical functionality and for measuring the traffic, collecting and processing personal data from devices in order to deliver the best possible service and experience.',
      toggle: 'Accept'
    }
  },
  Calendar: {
    header: 'Calendar',
    dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    monthHeader: {
      format: 'MMMM YYYY'
    },
    addToCalendar: {
      SuccessToast: {
        title: 'Success',
        text: 'The appointment was added to your calendar'
      },
      ErrorToast: {
        title: 'Something went wrong',
        text: 'Please try again.'
      }
    },
    range: {
      [CalendarRange.STIMULATION_PROTOCOL]: 'SP',
      [CalendarRange.EMBRYO_DEV]: 'ED',
      [CalendarRange.PREGNANCY_TEST]: 'PT'
    },
    dayHeader: {
      format: 'dddd, D MMMM YYYY'
    },
    cards: {
      embryoDev: {
        header: 'Embryo Development',
        future: {
          text: "During this period you'll be able to follow updates on the development of your embryos"
        },
        current: {
          text: 'View updates'
        }
      },
      pregnancyTest: {
        header: 'Pregnancy  Test',
        future: {
          text: "During this period you'll be able to report to us your pregnancy test results"
        },
        current: {
          text: 'Let us know your results'
        }
      },
      stimulationProtocol: {
        header: 'Stimulation Protocol',
        future: {
          text: 'Your Stimulation Protocol will start ',
          delta: 'in {{count}} day',
          delta_plural: 'in {{count}} days',
          date: ' on MMMM D'
        },
        current: {
          header: 'Day {{index}} '
        }
      },
      appointment: {
        header: 'Appointment',
        learnMore: 'Learn more',
        dateFormat: 'dddd, D MMMM YYYY',
        call: 'Call Clinic',
        directions: 'Directions'
      },
      noAppointments: 'No appointments for this day'
    }
  },
  ContactModal: {
    phone: 'Phone: ',
    email: 'Email: '
  },
  Messages: {
    new: 'New',
    Create: {
      headerTitle: 'New Message',
      to: 'To:',
      send: 'Send',
      textareaPlaceholder: 'Write message here...',
      successToast: {
        title: 'Message sent',
        text: 'The message was sent successfully'
      },
      errorToast: {
        title: 'Something went wrong',
        text: 'Please try again.',
        linkText: 'Tap here'
      }
    },
    Home: {
      title: 'Messages',
      emptyConversationSubtitle: 'Start messaging the clinic',
      lastMessageToday: 'HH:mm',
      lastMessageNotToday: 'D MMM YYYY'
    },
    Detail: {
      NewConversation: {
        banner:
          'Write in this conversation to communicate directly with the clinic about your treatment, if you need support or information.'
      },
      newMessage: 'New message'
    },
    List: {
      user: 'You'
    }
  },
  Notifications: {
    title: 'Notifications',
    read: 'Mark all as read',
    mostRecent: 'Most recent',
    emptyList: 'No notifications received yet',
    dateLessThanOneHour: 'Just now',
    dateLessThanOneDay: '{{count}} hour ago',
    dateLessThanOneDay_plural: '{{count}} hours ago',
    dateMoreThanOneDay: 'D MMM YYYY - HH:mm',
    markAllAsReadToast: {
      title: 'Notifications',
      text: 'All notifications  successfully marked as read'
    }
  },
  BiometryMessage: {
    title: 'Biometry detected',
    subtitle: 'Set biometric login',
    primaryButton: 'Activate biometric login',
    secondaryButton: 'No, thanks',
    SuccessToast: {
      title: 'Success',
      text: 'Biometric login has been saved'
    }
  },
  Biometry: {
    AuthenticationPrompt: {
      title: 'Fingerprint for FutureLife',
      subtitle: 'Please authenticate with fingerprint',
      description: 'You are logging in on FutureLife',
      cancel: 'Login with email'
    }
  },
  EmbryoDev: {
    headerTitle: 'Embryo development',
    waitingUpdate: 'Waiting for clinic update. Depending on your clinic, updates are commonly shown on day 1, 3 and 5.',
    learnMoreAboutPhases: 'Embryo phases and grading',
    status: {
      inProgress: 'In progress',
      completed: 'Completed'
    },
    EmbryoCard: {
      embryoType: 'Embryo {{embryoNumber}}',
      grade: 'Grade',
      phase: 'Phase'
    },
    Grading: {
      Standard: {
        title: 'Standard development',
        shortTitle: 'Standard development',
        description: 'The embryo is developing right.'
      },
      Slight: {
        title: 'Development with slight irregularities',
        shortTitle: 'Slight irregularities',
        description: 'The embryo is developing with some slight irregularities.'
      },
      Greater: {
        title: 'Development with greater irregularities',
        shortTitle: 'Greater irregularities',
        description: 'The embryo is developing with some greater irregularities.'
      },
      Discarded: {
        title: 'Discarded embryo',
        shortTitle: 'Discarded',
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
    downloadPdf: 'Download (PDF)',
    learnMore: 'Learn more about Embryo Dev',
    downloadErrorToast: {
      title: 'Error',
      text: 'Could not download the file'
    },
    panels: {
      grading: 'Grading',
      embryoPhases: 'Embryo Phases',
      embryoTransfer: 'Embryo Transfer'
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
    title: 'Embryo Development',
    details: 'Details',
    Status: {
      Header: {
        completed: 'Completed',
        progress: 'In progress',
        totalDays: '{{count}} day',
        totalDays_plural: '{{count}} days',
        day: 'Day {{count}}'
      }
    },
    Waiting: {
      text: 'Data will be updated according to the current treatment, if provided by your clinic'
    }
  },
  PregnancyTest: {
    Sections: {
      GreatNews: {
        title: 'This is great news, {{name}}!',
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
        answerYes: 'Yes',
        answerNo: 'No'
      }
    }
  },
  OnboardingExistingPatient: {
    Start: {
      title: 'Link Patient ID with app',
      description: 'Please link your patient ID with our app to seamlessly manage your fertility journey.',
      selectClinic: 'Select your clinic',
      selectClinicPlaceholder: 'Select clinic from the list',
      patientId: 'Patient ID',
      patientIdPlaceholder: 'Write here your patient ID',
      patientIdNotFound:
        "We couldn't find your patient ID in our records. Please ensure you've selected the correct clinic you've visited. If you continue to experience issues, kindly contact the clinic directly for assistance.",
      email: 'Email',
      emailPlaceholder: 'Type your e-mail',
      disclaimer:
        "If you're unsure of your patient ID, please reach out to the clinic you've visited. They will provide you with the necessary information to link your patient ID records.",
      ctaClinicDetail: 'See contact details of your clinic',
      ctaExistingAccount: 'Already have an account?',
      continue: 'Continue',
      backHome: 'Back to Home'
    },
    OTP: {
      title: "Insert the code we've sent to your email",
      description: 'We sent an authorisation code to your email, please enter it here in order to login.',
      codeLabel: 'Code',
      codePlaceholder: 'Type the code you received',
      verify: 'Verify',
      codeNotReceived: "It may take a minute to receive the code.\nHaven't received it? ",
      sendAgain: 'Send the code again',
      invalidOTP: 'OTP is wrong',
      refreshSuccessToast: {
        title: 'Code sent',
        text: 'Another code has been sent to your email'
      }
    },
    Informations: {
      title: 'Link Patient ID with app',
      selectedClinic: 'Selected clinic: ',
      description: 'Add your personal and contact information to continue.',
      first_name: 'First name',
      first_name_placeholder: 'Type your first name',
      last_name: 'Last name',
      last_name_placeholder: 'Type your last name',
      birthdate: 'Date of birth',
      birthdate_placeholder: 'Enter your date of birth',
      my_gender: 'Gender',
      my_gender_placeholder: 'Select your gender',
      my_gender_options: {
        M: 'Male',
        F: 'Female'
      },
      country: 'Country',
      country_placeholder: 'Choose your country',
      personal_code_identifier: 'Social number',
      personal_code_identifier_placeholder: 'Type your social number',
      phone_number: 'Phone number',
      phone_number_placeholder: 'Type your phone number with + and country code',
      email: 'Email',
      email_placeholder: 'Type your email',
      privacy_policy: 'I agree to processing of personal data according to ',
      privacy_policy_link: 'Privacy Policy',
      rodcis: 'If you have Czech social number (Rodné číslo), please fill it in. Otherwise leave blank.',
      submit: 'Submit'
    },
    Feedback: {
      title: 'Thanks for submitting your request',
      subtitle: 'We sent an email to ',
      subtitle2: ' with a link to set your password, complete it in order to be able to login and access your account.',
      goToLogin: 'Go to Login',
      backToHome: 'Back to Home',
      alreadyLinked: {
        title: 'You already linked your Patient ID and have user account with us',
        subtitle:
          "There's no need to link your patient ID again. Simply log in using your existing credentials to access your account."
      }
    }
  }
}
