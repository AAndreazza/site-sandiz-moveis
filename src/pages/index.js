import React from "react"
import Seo from "../components/Seo";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import WhatsappIcon from "../components/WhatsappIcon";
import Sobre from "../components/Sobre";
import Produtos from "../components/Produtos";
import Contato from "../components/Contato";
import Footer from "../components/Footer";

const Index = () => {
    return (
        <div className="bg-gray-100">
            <Seo title='Sandiz Móveis' description='Loja de Móveis em Timbó com produtos de qualidade e com preço direto de fábrica.' />
            <NavBar></NavBar>
            <Hero></Hero>
            <WhatsappIcon></WhatsappIcon>
            <Sobre></Sobre>
            <Produtos></Produtos>
            <Contato></Contato>
            <Footer></Footer>
        </div>
    )
}

export default Index