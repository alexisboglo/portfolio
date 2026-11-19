# Ma présentation complète en ligne

Mon portfolio et mon CV en ligne : [alexis.codeetwords.com](https://alexis.codeetwords.com)

Développeur full-stack web et mobile à Cotonou, Bénin. Laravel, Nuxt, Flutter,

----

## Technologie utilisée

Le site est statique. Fait avec du HTML, du CSS et un fichier JavaScript de quarante lignes.

**Aucune compilation, aucune dépendance, aucun gestionnaire de paquets.** On
clone le dépôt, on ouvre `index.html` dans un navigateur, et le site s'affiche.

C'est un choix, pas un manque. Pour cinq pages qui changent trois fois par an,
ajouter un framework reviendrait à installer un chantier pour planter un clou :
il faudrait l'installer, le compiler, le maintenir et le mettre à jour, pour un
résultat que le navigateur affiche déjà.

----

## Organisation du site web

index.html          le portfolio
cv.html             le CV, lisible à l'écran et imprimable en A4
cv.pdf              le CV en PDF, 2 pages, généré depuis cv.html
css/style.css       styles du portfolio
css/cv.css          styles du CV, règles d'impression comprises
js/main.js          année du pied de page, secours du portrait, apparitions au défilement
assets/             photo, favicon, image de partage
_headers            en-têtes de sécurité appliqués par Cloudflare Pages
robots.txt          autorise l'indexation

----

## Le CV et son PDF

`cv.html` est la source unique. Le PDF en est tiré, jamais l'inverse : une seule
version à tenir à jour.

La page est volontairement **en une seule colonne, sans tableau et sans texte
en image**, pour rester lisible par les logiciels de recrutement qui analysent
les CV automatiquement. Beaucoup de CV élégants sur deux colonnes deviennent
illisibles pour eux, et le candidat disparaît des recherches sans jamais savoir
pourquoi.

Pour régénérer le PDF après une modification : ouvrir `cv.html` dans un
navigateur, Imprimer, puis Enregistrer au format PDF, en décochant les en-têtes
et pieds de page.

----

## Accessibilité et robustesse

Le site fonctionne sans JavaScript : le script n'ajoute que des animations et un
secours si la photo ne charge pas. Si on le désactive, tout le contenu reste
visible.

Un lien d'évitement en tête de page permet d'aller directement au contenu au
clavier.

----

## Mise en ligne

Hébergé sur Cloudflare Pages, déployé automatiquement à chaque envoi sur la
branche `main`. Il n'y a pas d'étape de compilation : Cloudflare sert les
fichiers tels quels.

----

## Licence

Le code est public pour qu'on puisse le lire. Son **contenu**  mon
parcours, mes textes, ma photo et mon CV restent ma propriété et ne sont pas
réutilisable.