import React, { useState } from 'react';
import { SortType } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { changeSort, loadOffers } from '../../store/actions';
import {sortOffersByFilterType} from '../../utils';

function Sorting(): JSX.Element {
  const [opened, setOpened] = useState<boolean>(false);

  const {sort, cityOffers} = useAppSelector((state) => state);

  const dispatch = useAppDispatch();
  const changeSorting = (sortName: SortType) => {
    dispatch(changeSort(sortName));
    const sortedOffers = sortOffersByFilterType(cityOffers, sortName);
    dispatch(loadOffers(sortedOffers));
  };

  return (
    <form
      onClick={() => setOpened(!opened)}
      className='places__sorting'
      action='#'
      method='get'
    >
      <span className='places__sorting-caption'>Sort by</span>
      <span className='places__sorting-type' tabIndex={0}>
        {sort}
        <svg className='places__sorting-arrow' width='7' height='4'>
          <use xlinkHref='#icon-arrow-select' />
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${
          opened ? 'places__options--opened' : ''
        }`}
      >
        {Object.values(SortType).map((sortName) => (
          <li
            className={`places__option${
              sort === sortName ? ' places__option--active' : ''
            }`}
            key={sortName}
            tabIndex={0}
            onClick={() => changeSorting(sortName)}
          >
            {sortName}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sorting;
