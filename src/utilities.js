import keyBy from 'lodash/keyBy';

const url = `${process.env.PUBLIC_URL}/ads.json`;

export const mapById = (data) => {
  let mappedData = {};

  data.forEach(({ ads }) => {
    mappedData = { ...mappedData, ...keyBy(ads, 'id') };
  });

  return mappedData;
};

export const fetchCached = () => caches.match(url)
  .then(resp => resp
    || fetch(url)
      .then(response => caches.open('ads')
        .then(async (cache) => {
          cache.put(url, response);
          return response;
        })));

export default { mapById, fetchCached };
