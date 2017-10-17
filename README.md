# nodeProject
it's simple repo for profile, update single profile and access it.

# Installation
install mysql
install nodejs

cd nodeProject
npm install

change database credential in profiles.js file.

# Apis
GET /profile/:id
RESPONSE {id: id, name : "", email}

POST /profile
REQUEST BODY {id, name, email}
RESPONSE {id, name, email}
