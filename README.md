# Minuteur pour OBS

Par défaut le minuteur est paramétré de la manière suivante :
- Durée = 5 minutes 
- Message de fin = Let's go !
- Couleur primaire = <span style="color:#21eaee">#21eaee</span>
- Couleur secondaire = <span style="color:#fc4101">#fc4101</span>

## Personnalisation

### Timing

Pour personnaliser la durée du minuteur ajoutez dans l'URL le parametre "s=" avec le nombre de seconde voulu :

>*exemple pour 60 secondes :*  
>https://admike82.github.io/CountDown/?s=60
 

### Message de fin de décompte
Pour personnaliser le message de fin de minuteur ajoutez le dans l'URL le paramètre "msg=" avec la message à afficher :

>*exemple pour "c'est parti !" :*  
>[https://admike82.github.io/CountDown/?msg=c'est parti!](https://admike82.github.io/CountDown/?msg=c'est%20parti!)

### Couleur primaire
Vous pouvez changer la couleur primaire en indiquant le code hexadecimal sans le # dans l'URL avec le parmètre "primary=" :

>*exemple pour la couleur #9b59b6 en couleur primaire :*  
> https://admike82.github.io/CountDown/?primary=9b59b6

### Couleur secondaire
Vous pouvez changer la couleur secondaire en indiquant le code hexadecimal sans le # dans l'URL avec le parmètre "secondary=" :

>*exemple pour la couleur #1abc9c en couleur primaire :*  
> https://admike82.github.io/CountDown/?secondary=1abc9c

### Conbinaison
Vous pouvez conbiner tous ces paramètres :

>*combinaison des exemples précédents :*  
> [https://admike82.github.io/CountDown/?s=60&msg=c'est parti!&primary=9b59b6&secondary=1abc9c](https://admike82.github.io/CountDown/?s=60&msg=c'est%20parti!&primary=9b59b6&secondary=1abc9c)