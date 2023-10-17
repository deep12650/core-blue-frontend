import { gql } from '@apollo/client';

export const GET_PRODUCTS_QUERY = gql`
    query GetProducts {
        products {
            paginatorInfo {
                total
                currentPage
                hasMorePages
            }
            data {
                id
                name
                variants
                {
                    name
                    price
                    description
                    sku
                    is_active
                }
            }
        }
    }
`;
