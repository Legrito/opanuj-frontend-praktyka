// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../types/Product';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    products: builder.query<Product[], void>({
      query: () => 'products',
    }),
    getProductById: builder.query<Product, string | undefined>({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useProductsQuery, useGetProductByIdQuery } = productsApi;
