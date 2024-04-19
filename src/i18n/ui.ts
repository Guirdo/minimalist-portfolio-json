export const showDefaultLang = true;
export const defaultLang = 'en';

export const languages = {
    en: 'EN',
    es: 'ES'
}

export const ui = {
    en: {
        hello:'Hello %s, how are you?',
        curriculum: "%s's curriculum",
        about: 'About',
        education: 'Education',
        experience: 'Work experience',
        projects: 'Projects',
        skills: 'Skills',
        selectLang: 'Select a language:',
        sendEmail: 'Send an email to %s',
        visitProfile: "Check %s's profile on ",
        checkCode: 'Check source code of %s',
        checkWebsite: 'Check $s website',
    },
    es: {
        hello: 'Hola %s, como estas?',
        curriculum: "Curriculum de %s",
        about: 'Sobre mí',
        education: 'Educación',
        experience: 'Experiencia laboral',
        projects: 'Proyectos',
        skills: 'Habilidades',
        selectLang: 'Selecciona un lenguaje:',
        sendEmail: 'Enviar un correo electrónico a %s',
        visitProfile: "Visita el perfil de %s en ",
        checkCode: 'Revisa el código fuente de %s',
        checkWebsite: 'Visita el sitio web de $s',
    }
  } as const;
