import fs from "fs";
import { getAllPosts,create,update } from "../models/postsModel.js";
import gerarDescricaoComGemini from "../services/gemini.js";

export async function list(req, res) {

    const posts = await getAllPosts();
    
    res.status(200).json(posts); 
}

export async function post(req,res) {
    const newPost = req.body;

    try {
        const post = await create(newPost);
        res.status(200).json(post);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({"ERRO":"Falhou requisição"});
    }
}

export async function uploadImage(req,res) {
    const newPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    }

    try {
        const post = await create(newPost);
        const image = `uploads/${post.insertedId}.png`
        fs.renameSync(req.file.path, image);
        res.status(200).json(post);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({"ERRO":"Falhou requisição"});
    }
}

export async function updateImage(req,res) {
    const id = req.params.id;
    const urlImage = `http://localhost:3000/${id}.png`
    
    try {
        const imgBuffer = fs.readFileSync(`uploads/${id}.png`);
        const descricao = await gerarDescricaoComGemini(imgBuffer);

        const dados = {
            imgUrl: urlImage,
            descricao: descricao,
            alt: req.body.alt
        }
        const post = await update(id, dados);
        res.status(200).json(post);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({"ERRO":"Falhou requisição"});
    }
}