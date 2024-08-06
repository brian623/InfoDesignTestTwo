import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import Consume from '../components/Consume';
import Costs from '../components/Costs';
import Losts from '../components/Losts';
import EnergyTable from '../components/EnergyTable';

const Home: React.FC = () => {
  return (
    <div className="mt-5" data-testid='home-container'>
      <Carousel indicators={false} variant="dark">
        <Carousel.Item>
          <Consume />
        </Carousel.Item>
        <Carousel.Item>
          <Costs />
        </Carousel.Item>
        <Carousel.Item>
          <Losts />
        </Carousel.Item>
      </Carousel>
      <Container className="mt-5">
        <EnergyTable />
      </Container>
    </div>
  );
}

export default Home;
