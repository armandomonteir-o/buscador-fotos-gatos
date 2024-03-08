import React, { useState } from 'react';
import '../styles/SearchSection.css';

function SearchSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const breedResponse = await fetch(`https://api.thecatapi.com/v1/breeds/search?q=${searchTerm}`);
      const breedData = await breedResponse.json();
  
      if (breedData.length === 0) {
        setErrorMessage(`Nenhuma raça de gato encontrada com o nome "${searchTerm}".`);
      } else {
        const breedId = breedData[0].id;
  
        const imageResponse = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&limit=2&api_key=live_ymkh1G32Xxxbzw98JKtmMk07UWWWdRaBrt9izxcKukQNHGL8WuAijxAM0NVu9PuS`);
        const imageData = await imageResponse.json();
  
        if (imageData.length === 0) {
          setErrorMessage(`Nenhuma imagem encontrada para a raça de gato "${searchTerm}".`);
        } else {
          setSearchResults(imageData);
          setErrorMessage('');
        }
      }
    } catch (error) {
      console.error('Error fetching cat photos:', error);
      setErrorMessage(`Ocorreu um erro ao buscar o gato. Por favor, tente novamente mais tarde.`);
    }
  };

  return (
    <section id="search" className="search">
      <h2>Sistema de busca de fotos de gatos</h2>
      <div className="input-container">
        <form id="form" name='form' onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Pesquisar Gato (em inglês)" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Pesquisar</button>
        </form>
      </div>

      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <div className="cat-gallery">
        {searchResults.map((result, index) => (
          <div className="cat-image" key={index}>
            <img src={result.url} alt={`Cat ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default SearchSection;

