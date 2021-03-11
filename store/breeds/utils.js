export const mapBreedsTreeToFlatList = (breeds) =>
  Object.entries(breeds).reduce(
    (result, [breed, subBreeds]) =>
      subBreeds.length > 0
        ? [
            ...result,
            ...subBreeds.map((subBreed) => ({
              id: `${breed}/${subBreed}`,
              value: `${subBreed} ${breed}`,
            })),
          ]
        : [...result, { id: breed, value: breed }],
    []
  )
