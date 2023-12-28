import { defineStore } from 'pinia'

export const useConseillerStore = defineStore('conseiller', {
  state: () => ({
    conseillers: [
      {
        profilePicturePath: '',
        firstname: 'Josette',
        lastname: 'BARUTHEL-JARZAC',
        gender: 'F',
        job: 'Ancienne agricultrice exploitante',
        birthDate: '24/11/1948',
        roleLibelle: 'Conseillère',
        roleRank: 1,
      },
      {
        profilePicturePath: '',
        firstname: 'Véronique',
        lastname: 'BERTHY',
        gender: 'F',
        job: 'Employé administratif d\'entreprise',
        birthDate: '13/11/1968',
        roleLibelle: 'Conseiller',
        roleRank: 1,
      },
      {
        profilePicturePath: '',
        firstname: 'Emmanuel',
        lastname: 'CARBONNIERE',
        gender: 'M',
        job: 'Cadre de la fonction publique',
        birthDate: '22/05/1969',
        roleLibelle: 'Conseiller',
        roleRank: 1,
      },
      {
        profilePicturePath: '',
        firstname: 'Thierry',
        lastname: 'CHASSAING',
        gender: 'M',
        job: 'Agriculteur sur moyenne exploitation',
        birthDate: '27/06/1969',
        roleLibelle: 'Maire',
        roleRank: 5,
      },
      {
        profilePicturePath: '',
        firstname: 'Pierre',
        lastname: 'CHEVALIER',
        gender: 'M',
        job: 'Ancien cadres',
        birthDate: '09/05/1957',
        roleLibelle: 'Conseiller',
        roleRank: 1,
      },
      {
        profilePicturePath: '',
        firstname: 'Serge',
        lastname: 'GATINEL',
        gender: 'M',
        job: 'Ancien agriculteur exploitant',
        birthDate: '26/02/1958',
        roleLibelle: '1er Adjoint',
        roleRank: 4,
      },
      {
        profilePicturePath: '',
        firstname: 'Dominique',
        lastname: 'HERMENAULT',
        gender: 'M',
        job: 'Ancien cadre',
        birthDate: '02/06/1949',
        roleLibelle: 'Conseiller',
        roleRank: 1,
      },
      {
        profilePicturePath: '',
        firstname: 'Corinne',
        lastname: 'LALAY',
        gender: 'F',
        job: 'Cadre de la fonction publique',
        birthDate: '01/08/1963',
        roleLibelle: '2ème Adjointe',
        roleRank: 3,
      },
      {
        profilePicturePath: '',
        firstname: 'Alain',
        lastname: 'LALBIAT',
        gender: 'M',
        job: 'Ancien ouvrier',
        birthDate: '16/09/1955',
        roleLibelle: '3ème Adjoint',
        roleRank: 2,
      },
      {
        profilePicturePath: '',
        firstname: 'Joëlle',
        lastname: 'PEYTAVIE',
        gender: 'F',
        job: 'Profession intermédiaire de la santé et du travail social',
        birthDate: '23/12/1961',
        roleLibelle: 'Conseillère',
        roleRank: 1,
      },
      {
        profilePicturePath: '',
        firstname: 'Edouard',
        lastname: 'ROULLET',
        gender: 'M',
        job: 'Agriculteur sur petite exploitation',
        birthDate: '29/06/1975',
        roleLibelle: 'Conseiller',
        roleRank: 1,
      },
    ],
  }),

  actions: {
    sortConseillers() {
      this.conseillers.sort((a, b) => {
        if (a.roleRank !== b.roleRank) {
          return b.roleRank - a.roleRank;
        } else {
          return a.lastname.localeCompare(b.lastname);
        }
      });
    }
  },
})
