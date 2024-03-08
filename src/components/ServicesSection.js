import React from 'react';
import Card from './Card';
import '../styles/ServicesSection.css';
import linkBuildingIcon from '../assets/link-building-4.svg';
import inboundSEOIcon from '../assets/mdi_head-lightbulb-outline.svg';
import eComerceSEOIcon from '../assets/data-driven-pr-1.svg';
import growthContentIcon from '../assets/Edit.svg';
import strategicSEOIcon from '../assets/strategic-seo-1.svg';

function ServiceSection() {
  return (
    <section id="service" className="services-container">
      <section className="services-h2">
        <h2>Conheça nossos serviços</h2>
      </section>

      <div className="first-three-cards">
        <Card
          imageSrc={linkBuildingIcon}
          altText="Icon for service 1"
          title="Link Building 4.0"
          description="Somos uma assessoria de imprensa com foco em criar pautas para conquistar backlinks de veículos com autoridade"
        />
        <Card
          imageSrc={inboundSEOIcon}
          altText="Icon for service 2"
          title="Inbound SEO"
          description="Estratégia e execução de conteúdo para gerar tráfego qualificado"
        />
        <Card
          imageSrc={eComerceSEOIcon}
          altText="Icon for service 3"
          title="E-commerce SEO"
          description="Aumente a visibilidade de seu e-commerce com as estratégias de SE0 validadas por grandes e-commerces"
        />
      </div>

      <div className="last-two-cards">
        <Card
          imageSrc={growthContentIcon}
          altText="Icon for service 4"
          title="Growth Content"
          description="Novo serviço de marketing de conteúdo orientado a gerar maior tráfego qualificado de busca orgânica"
        />
        <Card
          imageSrc={strategicSEOIcon}
          altText="Icon for service 5"
          title="Squad de SEO"
          description="Conte com um time dedicado de profissionais multidisciplinares por um mesmo objetivo"
        />
      </div>
    </section>
  );
}

export default ServiceSection;

