import React from 'react';
import { CITIES, SortType } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { City } from '../../types/city';
import {changeCity, changeSort, loadCurrentOffers} from '../../store/actions';

function Cities(): JSX.Element {
  const currentCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const dispatch = useAppDispatch();

  const changeCurrentCity = (city: City) => {
    const newOffers = offers.filter((item) => item.city.name === city.name);
    dispatch(changeCity(city));
    dispatch(loadCurrentOffers(newOffers));
    dispatch(changeSort(SortType.Default));
  };

  return (
    <section className='locations container'>
      <ul className='locations__list tabs__list'>
        {CITIES.map((city) => (
          <li key={city.name} className='locations__item'>
            <a
              className={`locations__item-link tabs__item ${
                city.name === currentCity.name ? 'tabs__item--active' : ''
              }`}
              onClick={() => changeCurrentCity(city)}
              href='#'
            >
              <span>{city.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Cities;
