const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const admin = require('firebase-admin');
const axios = require('axios');

dotenv.config();

// Firebase init
const serviceAccount = require('./serviceAccount.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

const app = express();
app.use(cors());
app.use(express.json());

// GET toate produsele
app.get('/api/products', async (req, res) => {
    try {
        const snapshot = await db.collection('products').get();
        const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET un produs dupa id
app.get('/api/products/:id', async (req, res) => {
    try {
        const doc = await db.collection('products').doc(req.params.id).get();
        if (!doc.exists) return res.status(404).json({ error: 'Produs negasit' });
        res.json({ id: doc.id, ...doc.data() });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET imagini caini de la Dog CEO API
app.get('/api/dog-images', async (req, res) => {
    try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random/6');
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST adauga produs
app.post('/api/products', async (req, res) => {
    try {
        const product = req.body;
        const docRef = await db.collection('products').add(product);
        res.json({ id: docRef.id, ...product });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server pornit pe portul ${PORT}`));