import React from 'react';
import { CITIES, SortType } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { City } from '../../types/city';
import { changeCity, changeSort, loadOffers } from '../../store/actions';

function Cities(): JSX.Element {
  const currentCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const dispatch = useAppDispatch();

  const changeCurrentCity = (city: City) => {
    const newOffers = offers.filter((item) => item.city.title === city.title);
    dispatch(changeCity(city));
    dispatch(loadOffers(newOffers));
    dispatch(changeSort(SortType.Default));
  };

  return (
    <section className='locations container'>
      <ul className='locations__list tabs__list'>
        {CITIES.map((city) => (
          <li key={city.title} className='locations__item'>
            <a
              className={`locations__item-link tabs__item ${
                city.title === currentCity.title ? 'tabs__item--active' : ''
              }`}
              onClick={() => changeCurrentCity(city)}
              href='#'
            >
              <span>{city.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Cities;
