import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCountry } from "store/modules/map/actions";
import {
  Container,
  Content,
  MapContainer,
  Map,
  LeftContainer,
  RightContainer,
  Info,
  CityDetails,
  City,
  SubTitle,
} from "./style";

export default function Location() {
  const dispatch = useDispatch();
  const { countryName, cities } = useSelector(state => state.map);
  const [citySelected, setCitySelected] = useState({});
  const [cityKey, setCityKey] = useState(0);

  useEffect(() => {
    dispatch(selectCountry("PT"));
  }, [dispatch]);

  useEffect(() => {
    if (!cities || cities.length === 0) return;
    setCitySelected(cities[0]);
    setCityKey(0);
  }, [cities]);

  function handleSelectCity(city, key) {
    setCitySelected(city);
    setCityKey(key);
  }

  return (
    <Container>
      <Content>
        <LeftContainer>
          <h3>Onde estamos</h3>
          <MapContainer>
            <Map />
            <Info>
              <h4>{countryName}</h4>
              <CityDetails>
                {cities.map((city, key) => (
                  <City
                    selected={city.name === citySelected.name}
                    onClick={() => handleSelectCity(city, key)}
                    eraseLine={key < cityKey}
                  >
                    {city.name}
                  </City>
                ))}
                <ul>
                  <li>{citySelected.name}</li>
                  <li>{citySelected.address1}</li>
                  <li>{citySelected.address2}</li>
                  <li>
                    {citySelected.number}, ${countryName}
                  </li>
                  <li>{citySelected.phone1}</li>
                  <li>{citySelected.phone2}</li>
                  <li>{citySelected.email}</li>
                </ul>
              </CityDetails>
            </Info>
          </MapContainer>
        </LeftContainer>
        <RightContainer>
          <h3>Loren</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            ullamco laboris.
          </p>
        </RightContainer>
      </Content>
      <Content>
        <SubTitle>
          Lorem <strong>#IPSUM</strong>, consectetur adipiscing elit, sed do
          ullamco ...
        </SubTitle>
      </Content>
    </Container>
  );
}
