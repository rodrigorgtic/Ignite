import React, { useEffect, useState } from 'react';
import { BackHandler, StatusBar } from 'react-native';
import { CarCards } from '../../components/CarCards';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { CarList, Container, Header, HeaderContent, Logo, Total } from './styles';
import { api } from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';
import { CarLoadingAnimated } from '../../components/CarLoadingAnimated';

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation<any>();

  function handleCarDetails(car: CarDTO) {
    navigation.navigate('CarDetails', { car });
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/cars');
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCars();
  }, []);

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Header>
        <HeaderContent>
          <Logo />

          {!isLoading && <Total>Total de {cars.length} carros</Total>}
        </HeaderContent>
      </Header>
      {isLoading ? (
        <CarLoadingAnimated />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CarCards data={item} onPress={() => handleCarDetails(item)} />}
        />
      )}
    </Container>
  );
}
