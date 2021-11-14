import { gql } from "@apollo/client";

export const countryData = gql`
  query Countries {
    countries {
      code
      name
      emoji
    }
  }
`;
