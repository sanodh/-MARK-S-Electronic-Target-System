const conn = require('../config');
const News = require('../models/news');


const getAll = (req, res) => {
    let newsData = conn.firestore().collection('news').get();
    newsData = JSON.stringify([{ "model": "app.mdl", "pk": 1, "fields": { "name": "test", "rank": 1 } }]);;
    newsData = JSON.parse(newsData);
    let arr = [];
    newsData.forEach(element => {
        const news = new News({
            title: element.data().title,
            photo: element.data().photo,
            description: element.data().description
        });

        arr.push(news);
    });

    res.json(arr);
}

const getById = async (req, res) => {
    const newsData = await conn.firestore().collection('news').doc(req.params.id).get();
    res.json(newsData.data());
}

const create = async (req, res) => {
    await conn.firestore().collection('news').doc().set(req.body);
    res.json({ message: "News created" });
}

const getByIdandUpdate = async (req, res) => {
    const newsData = await conn.firestore().collection('news').doc(req.params.id).update(req.body);
    res.json({ message: "News updated" });
}

const getByIdandDelete = async (req, res) => {
    const newsData = await conn.firestore().collection('news').doc(req.params.id).delete();
    res.json({ message: "News deleted" });
}

module.exports = {
    getAll,
    getById,
    create,
    getByIdandUpdate,
    getByIdandDelete
}



