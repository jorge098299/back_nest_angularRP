# Comandos GitHub

## Inicializar el repositorio local

ˋˋˋ

git init

ˋˋˋ

- Referencia del repositorio local con el repositorio remoto (GitHub)


ˋˋˋˋ

git remote add origin 
https://github.com/jorge098299/back_nest_angularRP.git 

ˋˋˋˋ

## Validar Referencia

ˋˋˋˋ
git remote -v
ˋˋˋˋ
-----------------
ˋˋˋ
git add .
git commit -m "proyecto base"
git put origin master 
ˋˋˋ
ˋˋˋ
- Para forzar

git push -f origin master
ˋˋˋ

## Instalacion 

npm i --save @nestjs/jwt passport-jwt bcrypt 
npm i --save-dev @types/passport-jwt

## Arrancamos el proyecto 
ˋˋˋ
npm run start:dev
ˋˋˋ

## Modules & Resources 
ˋˋˋ
nest g mo modules/auth
nest s res modules/users
ˋˋˋ

## Controllers & services 
ˋˋˋ
nest g co modules/auth 
nest g s modules/auth
ˋˋˋ

