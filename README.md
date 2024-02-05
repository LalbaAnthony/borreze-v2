
# 🏠 Borrèze 

Site vitrine responsive et dynamique developpé pour la commune de Borrèze (24590).<br>
Il sera dispo ici dès lors sa mise en ligne: `https://borreze.com`

## 🚀 - Quick Start

***Local***

* Installez et configurez XAMPP si ce n'est pas déjà fait, depuis `https://www.apachefriends.org/fr/index.html`
* LAncez XAMPP, rendez-vous `C:\xampp\htdocs\` et créez un dossier `projects`
* Allez `C:\xampp\htdocs\projects` et executez la commande `git git clone git@github.com:LalbaAnthony/borreze-new.git`
* Installation du front
    * Allez dans `C:\xampp\htdocs\projects\new-vet\front` 
    * Tapez `npm install` pour mettre à jour les dépéndances
    * Puis `npm run dev` afin de lancer le projet
    * Rendez vous ensuite sur l'adresse indiquez par le terminal, par exemple `http://localhost:5173/`
    * C'est bon, vous avez accès au front !

## 🧱 - Structure du projet

Le projet est divisé en deux parties distinctes, le front et le back.<br>

### 📄 - FRONTEND

Le front (`/front`) est la partie emergée de l'iceberg, c'est la partie visible par l'utilisateur.<br>
Il est conçu en VueJS, le style est entierement custom, écrit à la main par nos meilleurs artisans intégrateurs borrèziens. Ceci afin de garantir un style unique et personnalisé.<br>

***Dependances***
* vue: https://vuejs.org/
* vue-router: https://router.vuejs.org/
* pinia: https://pinia.esm.dev/
* headlessui: https://headlessui.dev/
* vue-axios: https://www.npmjs.com/package/vue-axios
* axios: https://axios-http.com/
* vue-toastification: https://vue-toastification.maronato.dev/

***Structure***

* `front/src/assets` contient les fichiers de styles
* `front/src/components` contient les composants réutilisables
* `front/src/router` contient les routes de l'application
* `front/src/stores` contient les stores de l'application, c'est à dire les variables globales, gérées par Pinia
* `front/src/pages` contient les pages de l'application
* `front/src/App.vue` est le composant principal de l'application
* `front/src/main.js` est le point d'entrée de l'application
* `front/public` contient les images et les fichiers statiques, pour des raison de performances, l'extension des images est en `.webp`
* `front/package.json` contient les dépendances du projet

***Accessibilité***

Des `sr-only` sont présents sur les éléments cliquables par l'utilisateur, afin de garantir une bonne accessibilité.<br>

***SEO***

Les balises `meta` sont présentes dans le `index.html` afin de garantir un bon référencement.<br>
Les bonnes pratiques SEO sont respectées; la sémantique des balises `h1`, `h2`, `h3`, `h4`, `h5`, `h6` est respecté, Les images sont dotées d'un attribut `alt` afin de garantir une bonne accessibilité et un référencement optimal, ...<br>

### 📄 - BACKEND

Le back (`/back`) est elle, la partie immergée, c'est la partie invisible par l'utilisateur.<br>
C'est notamment ici que se trouve la base de données, l'interface API REST, et où se trouve le back-office.<br>
Il est une base de Wordpress, configuré en mode headless, ceci afin de pouvoir facilement gérer le contenu du site, et profiter d'une expérience utilisateur solide et fiable.
