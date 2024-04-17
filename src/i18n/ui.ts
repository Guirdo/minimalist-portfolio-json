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
    }
  } as const;
