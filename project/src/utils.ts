import { Offer } from './types/offers';
import { SortType } from './const';

export const sortOffersByFilterType = (
  filteredOffers: Offer[],
  filterType: SortType,
) => {
  switch (filterType) {
    case SortType.TopRatedFirst:
      return filteredOffers
        .slice()
        .sort(
          (a: { rating: number }, b: { rating: number }) => b.rating - a.rating,
        );
    case SortType.PriceHighToLow:
      return filteredOffers
        .slice()
        .sort(
          (a: { price: number }, b: { price: number }) => b.price - a.price,
        );
    case SortType.PriceLowToHigh:
      return filteredOffers
        .slice()
        .sort(
          (a: { price: number }, b: { price: number }) => a.price - b.price,
        );
  }
  return filteredOffers;
};

export const getPercent = (partialValue: number, totalValue: number) => (100 * partialValue) / totalValue;
