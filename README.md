# 🧪 Auth Lab avec Next.js, Prisma et NextAuth

Ce projet contient les 3 TPs du cours **"La sécurité des stratégies d'authentification avec JWT, Session, OAuth2 et OIDC"** qui vous permettront de mettre en oeuvre les stratégies d'authentification vues en cours.

# Sommaire

[🛠️ Mise en place du projet](#-mise-en-place-du-projet)  
[1. Forker le projet](#1-forker-le-projet)  
[2. Installer les dépendances](#2-installer-les-dépendances)  
[3. Lancer le projet](#3-lancer-le-projet)  
[4. Création de la base de données](#4-création-de-la-base-de-données)  
[5. Configurer le fichier .env](#5-configurer-le-fichier-env)  
[6. Créer votre première migration Prisma](#6-créer-votre-première-migration-prisma)  
[7. Lancer Prisma Studio](#7-lancer-prisma-studio)  
[📄 TPs](#-tps)  
[📚 Ressources](#-ressources)  

## 🛠️ Mise en place du projet

### 1. **Forker le projet**

Forkez ce dépôt GitHub pour vous créer une copie sur votre compte GitHub  
![image](https://github.com/user-attachments/assets/3bee487e-f515-478f-9464-33ab7f975979)
Accéder à ce dépôt https://github.com/nom-d-utilisateur/auth-lab.git  
Cloner le dépôt et placer vous dans dans le dossier

```bash
git clone git@github.com:nom-d-utilisateur/auth-lab.git
cd auth-lab
```

### 2. Installer les dépendances

Installez les dépendances nécessaires avec npm ou yarn :

```bash
npm install
```

### 3. Lancer le projet

Une fois les dépendances installées, vous serez en mesure de lancez le projet avec la commande suivante :

```bash
npm run dev
```

Accédez au projet dans votre navigateur à l'adresse suivante : [http://localhost:3000](http://localhost:3000)

### 4. Création de la base de données

Si vous avez déjà PostgreSQL installé vérifiez que PostgreSQL est bien installé et en fonctionnement avec la commande suivante :

```bash
sudo service postgresql status
```

Si PostgreSQL est déjà installé, vous pouvez directement créer la base de données comme indiqué à l'étape 4.

1. Installez PostgreSQL

```bash
sudo apt install postgresql
```

2. Ensuite, démarrez le service PostgreSQL

```bash
sudo service postgresql start
```

3. Vérifiez que PostgreSQL fonctionne correctement

```bash
sudo service postgresql status
```

4. Entrez dans le terminal PostgreSQL pour créer une base de données

```bash
sudo -u postgres psql
```

5. Créez une nouvelle base de données

```sql
CREATE DATABASE db_name;
```

6. Quittez le terminal PostgreSQL

```sql
\q
```

### 5. Configurer le fichier .env

Créez un fichier .env à la racine du projet en vous basant sur le fichier exemple **.env.example**. Renseignez les valeurs **DATABASE_URL** et **NEXTAUTH_SECRET** :

```
DATABASE_URL=postgresql://user:password@localhost:5432/db_name
NEXTAUTH_SECRET=un_secret_securisé
```

### 6. Créer votre première migration Prisma

Utilisez Prisma pour initialiser votre base de données et créer la première migration :

```bash
npx prisma migrate dev --name init
```

Cela synchronise le schéma Prisma avec la base de données et crée les tables nécessaires pour le projet. 

On peut ensuite charger les seeders

```bash
npx prisma db seed
```

### 7. Lancer Prisma Studio

Exécutez la commande suivante pour lancer Prisma Studio

```bash
npx prisma studio
```

Accedez à prisma studio via [http://localhost:5555/](http://localhost:5555/)


# 📄 TPs

Les énoncés des TPs sont directement disponibles dans ce projet. Chaque TP peut être réalisé de manière indépendante en recommençant le projet depuis zéro, ou bien en combinant les différents TPs.

# 📚 Ressources

[Prisma Documentation](https://www.prisma.io/docs/orm/more/help-and-troubleshooting/nextjs-help)  
[Next.js Documentation](https://nextjs.org/docs)  
[NextAuth.js Documentation](https://next-auth.js.org/providers/)  

# 🚀 Bon courage !
