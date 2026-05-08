const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccount.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function clearAndSeed() {
    // Sterge produsele vechi
    const snapshot = await db.collection('products').get();
    const deletePromises = snapshot.docs.map(doc => doc.ref.delete());
    await Promise.all(deletePromises);
    console.log('Produse vechi sterse!');

    // Adauga produse noi
    const products = [
        { name: "Boabe Adult Pui", price: 89.99, category: "Uscata", brand: "Royal Canin", weight: "4kg", description: "Hrana uscata cu pui pentru caini adulti" },
        { name: "Boabe Junior Vita", price: 74.99, category: "Uscata", brand: "Purina", weight: "3kg", description: "Hrana uscata cu vita pentru catei" },
        { name: "Boabe Senior Light", price: 109.99, category: "Uscata", brand: "Hill's", weight: "5kg", description: "Hrana uscata pentru caini batrani" },
        { name: "Boabe Miel si Orez", price: 94.99, category: "Uscata", brand: "Eukanuba", weight: "4kg", description: "Hrana uscata cu miel pentru caini sensibili" },
        { name: "Conserva Vita", price: 12.99, category: "Umeda", brand: "Pedigree", weight: "400g", description: "Conserva cu vita in sos pentru caini" },
        { name: "Conserva Pui si Legume", price: 8.99, category: "Umeda", brand: "Cesar", weight: "300g", description: "Conserva cu pui si morcovi pentru caini" },
        { name: "Conserva Miel", price: 14.99, category: "Umeda", brand: "Josera", weight: "400g", description: "Conserva cu miel in aspic pentru caini" },
        { name: "Biscuiti cu Vita", price: 15.99, category: "Snack", brand: "Pedigree", weight: "500g", description: "Recompense crocante cu vita pentru caini" },
        { name: "Batoane cu Pui", price: 18.99, category: "Snack", brand: "Purina", weight: "300g", description: "Batoane moi cu pui pentru recompense" },
        { name: "Osete Dentare", price: 22.99, category: "Snack", brand: "Dentastix", weight: "270g", description: "Recompense pentru igiena dentara" },
    ];

    for (const product of products) {
        await db.collection('products').add(product);
        console.log(`Adaugat: ${product.name}`);
    }
    console.log('Gata!');
    process.exit(0);
}

clearAndSeed();