import "dotenv/config"
import { ObjectId } from "mongodb"
import conectarAoBanco from "../config/dbConfig.js"

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

export async function getAllPosts(){
    const db = conexao.db("nodeDb")
    const colecao = db.collection("posts")
    return colecao.find().toArray()
}

export async function create(newPost) {
    const db = conexao.db("nodeDb")
    const colecao = db.collection("posts")
    return colecao.insertOne(newPost);
}

export async function update(id,newPost) {
    const db = conexao.db("nodeDb");
    const colecao = db.collection("posts");
    const objID = ObjectId.createFromHexString(id);
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set:newPost});
}

