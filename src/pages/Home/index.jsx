import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Modal, Map } from '../../components';

import { Container, Carousel, Search, Logo, Wrapper, CarouselTitle } from './styles';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState(null);
  const [modalOpened, setModalModalOpened] = useState(true);
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      setQuery(inputValue);
    }
  }

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do Restaurante" />
          <TextField
            label="Pesquisar Restaurantes"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input value={inputValue} onKeyPress={handleKeyPress} onChange={(e) => setInputValue(e.target.value)} />
          </TextField>
          <CarouselTitle>Na sua área</CarouselTitle>
          <Carousel {...settings}>
            <Card photo={restaurante} title="nome do restaurante" />
            <Card photo={restaurante} title="nome do restaurante" />
            <Card photo={restaurante} title="nome do restaurante" />
            <Card photo={restaurante} title="nome do restaurante" />
            <Card photo={restaurante} title="nome do restaurante" />
            <Card photo={restaurante} title="nome do restaurante" />
            <Card photo={restaurante} title="nome do restaurante" />
          </Carousel>
        </Search>
        <RestaurantCard />
      </Container>
      <Map query={query} />
      {/* <Modal open={modalOpened} onClose={() => setModalModalOpened(!modalOpened)} /> */}
    </Wrapper>
  );
};

export default Home;
