export const fetchData = async (page?: number) => {
  const request = await fetch(
    `https://reqres.in/api/products?page=${page}&per_page=5`
  );

  const response = await request.json();
  return response;
};

export const fetchFilteredData = async (id?: number) => {
  return fetch(`https://reqres.in/api/products/${id}`).then(res => res.json());
};
