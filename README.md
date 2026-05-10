PROIECT CLOUD COMPUTING

Stefan Valentin Gabriel 

Grupa 1147

Link video: https://youtu.be/aSeRd-Zf2aU

Link publicare: https://proiect-yjmk.onrender.com

1. Introducere
   
Caini Fericiti este o platformă e-commerce construită pentru proprietarii de câini care doresc să achiziționeze hrană de calitate pentru animalele lor de companie. Aplicația integrează două servicii cloud: Firebase Firestore, folosit pentru gestionarea și stocarea catalogului de produse, și un serviciu de tip media repository care furnizează dinamic imagini cu câini din peste 120 de rase, oferind un conținut vizual variat la fiecare accesare a platformei.

Aplicația este găzduită pe platforma Render cu plan gratuit. Aceasta are o caracteristică prin care serverul backend intră în repaus după o perioadă de inactivitate. La prima accesare, serverul pornește din nou automat, ceea ce poate cauza o întârziere de aproximativ 50 de secunde până când produsele apar pe ecran.

2. Descrierea problemei
   
Ideea proiectului a pornit de la nevoia unui spațiu online simplu și intuitiv unde proprietarii de câini pot găsi rapid hrana potrivită pentru animalele lor. Platforma oferă posibilitatea de a naviga printr-un catalog complet de produse organizate pe categorii, de a filtra hrana după tip și de a vizualiza detalii complete despre fiecare produs.

3. Descriere API
   
Aplicația utilizează două servicii cloud integrate:

•	Firebase Firestore este o bază de date NoSQL în cloud oferită de Google, folosită în cadrul acestei aplicații pentru stocarea și gestionarea catalogului de produse. 

•	Dog CEO API este un serviciu public de tip media repository care pune la dispoziție o colecție de peste 20.000 de imagini cu câini. Serviciul este accesat prin cereri HTTP de tip GET și nu necesită autentificare

4. Flux de date
   
Metode HTTP: aplicația folosește metodele GET și POST pentru comunicarea dintre frontend și backend. Frontend-ul trimite cereri HTTP către serverul Express, care preia datele din Firebase Firestore și le returnează clientului

Autentificare Firebase: Credențialele Service Account sunt stocate securizat pe server ca variabile de mediu (FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY) și nu sunt expuse în cod.

Exemplu Request:

•	GET /api/products – preia lista completă de produse din baza de date Firebase Firestore

Exemplu Response: 

•	Un array JSON care contine produsele din baza de date (nume, pret, categorie, brand, gramaj, descriere)

5. Capturi ecran aplicație
 <img width="975" height="553" alt="image" src="https://github.com/user-attachments/assets/b39f30cd-05ee-465a-956a-013b945b0e38" />
 

 <img width="975" height="545" alt="image" src="https://github.com/user-attachments/assets/228ddd00-085c-417a-88eb-2620720a394c" />



 6. Referințe
    
- https://vuejs.org/
- https://nodejs.org/
- https://expressjs.com/
- https://firebase.google.com/
- https://dog.ceo/dog-api/
- https://render.com/


