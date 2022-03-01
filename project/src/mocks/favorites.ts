import Favorites from '../types/favorites';

const favorites: Favorites[] = [
  {
    id: 1,
    city: 'Cologne',
    offers: [
      {
        city: {
          name: 'Cologne',
          location: {
            latitude: 50.938361,
            longitude: 6.959974,
            zoom: 13,
          },
        },
        previewImage: 'img/apartment-small-03.jpg',
        images: [
          'img/apartment-01.jpg',
          'img/apartment-02.jpg',
          'img/apartment-03.jpg',
        ],
        title: 'The house among olive ',
        isFavorite: false,
        isPremium: true,
        rating: 3.5,
        type: 'house',
        bedrooms: 4,
        maxAdults: 6,
        price: 154,
        goods: [
          'Coffee machine',
          'Breakfast',
          'Laptop friendly workspace',
          'Fridge',
          'Baby seat',
          'Air conditioning',
          'Washer',
          'Towels',
          'Washing machine',
          'Dishwasher',
        ],
        host: {
          id: 25,
          name: 'Angelina',
          isPro: true,
          avatarUrl: 'img/avatar-angelina.jpg',
        },
        description:
          'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
        location: {
          latitude: 50.916361,
          longitude: 6.944974,
          zoom: 16,
        },
        id: 1,
      },
    ],
  },
  {
    id: 2,
    city: 'Paris',
    offers: [
      {
        city: {
          name: 'Paris',
          location: {
            latitude: 48.85661,
            longitude: 2.351499,
            zoom: 13,
          },
        },
        previewImage: 'img/apartment-small-04.jpg',
        images: [
          'img/apartment-01.jpg',
          'img/apartment-02.jpg',
          'img/apartment-03.jpg',
        ],
        title: 'Tile House',
        isFavorite: false,
        isPremium: false,
        rating: 3.8,
        type: 'apartment',
        bedrooms: 1,
        maxAdults: 1,
        price: 238,
        goods: [
          'Breakfast',
          'Laptop friendly workspace',
          'Washer',
          'Baby seat',
          'Air conditioning',
        ],
        host: {
          id: 25,
          name: 'Angelina',
          isPro: true,
          avatarUrl: 'img/avatar-angelina.jpg',
        },
        description:
          'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
        location: {
          latitude: 48.843610000000005,
          longitude: 2.338499,
          zoom: 16,
        },
        id: 2,
      },
    ],
  },
  {
    id: 3,
    city: 'Hamburg',
    offers: [
      {
        city: {
          name: 'Hamburg',
          location: {
            latitude: 53.550341,
            longitude: 10.000654,
            zoom: 13,
          },
        },
        previewImage: 'img/apartment-small-03.jpg',
        images: [
          'img/apartment-01.jpg',
          'img/apartment-02.jpg',
          'img/apartment-03.jpg',
        ],
        title: 'House in countryside',
        isFavorite: false,
        isPremium: false,
        rating: 4,
        type: 'room',
        bedrooms: 1,
        maxAdults: 2,
        price: 123,
        goods: [
          'Laptop friendly workspace',
          'Washer',
          'Towels',
          'Baby seat',
          'Air conditioning',
          'Breakfast',
          'Fridge',
        ],
        host: {
          id: 25,
          name: 'Angelina',
          isPro: true,
          avatarUrl: 'img/avatar-angelina.jpg',
        },
        description:
          'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
        location: {
          latitude: 53.529341,
          longitude: 9.975654,
          zoom: 16,
        },
        id: 3,
      },
    ],
  },
  {
    id: 4,
    city: 'Brussels',
    offers: [
      {
        city: {
          name: 'Brussels',
          location: {
            latitude: 50.846557,
            longitude: 4.351697,
            zoom: 13,
          },
        },
        previewImage: 'img/apartment-small-03.jpg',
        images: [
          'img/apartment-01.jpg',
          'img/apartment-02.jpg',
          'img/apartment-03.jpg',
        ],
        title: 'Wood and stone place',
        isFavorite: false,
        isPremium: false,
        rating: 2.2,
        type: 'room',
        bedrooms: 1,
        maxAdults: 1,
        price: 176,
        goods: ['Washer', 'Laptop friendly workspace', 'Breakfast'],
        host: {
          id: 25,
          name: 'Angelina',
          isPro: true,
          avatarUrl: 'img/avatar-angelina.jpg',
        },
        description:
          'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
        location: {
          latitude: 50.842557,
          longitude: 4.3536969999999995,
          zoom: 16,
        },
        id: 4,
      },
    ],
  },
];

export { favorites };