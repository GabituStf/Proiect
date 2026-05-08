const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccount.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const products = [
    { name: "Royal Canin Adult", price: 89.99, category: "Uscata", brand: "Royal Canin", weight: "4kg", description: "Hrana uscata completa pentru caini adulti" },
    { name: "Purina Pro Plan", price: 74.99, category: "Uscata", brand: "Purina", weight: "3kg", description: "Formula bogata in proteine pentru caini activi" },
    { name: "Pedigree Beef", price: 12.99, category: "Umeda", brand: "Pedigree", weight: "400g", description: "Hrana umeda cu vita pentru caini de toate rasele" },
    { name: "Hill's Science Diet", price: 109.99, category: "Uscata", brand: "Hill's", weight: "5kg", description: "Hrana premium pentru sanatatea digestiva" },
    { name: "Cesar Gourmet", price: 8.99, category: "Umeda", brand: "Cesar", weight: "300g", description: "Hrana umeda gourmet cu pui si legume" },
    { name: "Eukanuba Adult", price: 94.99, category: "Uscata", brand: "Eukanuba", weight: "4kg", description: "Hrana uscata cu pui pentru caini adulti" },
    { name: "Whiskas Snack", price: 15.99, category: "Snack", brand: "Whiskas", weight: "500g", description: "Recompense delicioase pentru caini" },
    { name: "Josera Balance", price: 64.99, category: "Uscata", brand: "Josera", weight: "3kg", description: "Hrana echilibrata pentru caini de talie medie" }
];

async function seed() {
    for (const product of products) {
        await db.collection('products').add(product);
        console.log(`Adaugat: ${product.name}`);
    }
    console.log('Toate produsele au fost adaugate!');
    process.exit(0);
}

seed();