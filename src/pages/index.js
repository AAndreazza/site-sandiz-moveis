import React from "react"
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Sobre from "../components/Sobre";
import Produtos from "../components/Produtos";
import Contato from "../components/Contato";

const Index = () => {
    return (
        <div className="bg-gray-100">
            <NavBar></NavBar>
            <Hero></Hero>
            <Sobre></Sobre>
            <Produtos></Produtos>
            <Contato></Contato>
        </div>
    )
}

export default Index