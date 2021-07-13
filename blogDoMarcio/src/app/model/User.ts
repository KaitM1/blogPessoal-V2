import { Postagem } from "./Postagem"

export default class User {
    public id: number
    public nome: String
    public usuario:String
    public senha: String
    public foto: String
    public tipo: String
    public postagem: Postagem[]
}