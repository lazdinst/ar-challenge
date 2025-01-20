import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem; /* Spacing between items */
  justify-content: space-between;
  align-items: flex-start;

  > div,
  > input,
  > button {
    flex: 1 1 calc(50% - 1rem); /* Adjust the width of each item */
    min-width: 200px; /* Prevent items from becoming too small */
  }

  > button {
    flex: 1 1 100%; /* Make the button span the full row */
    max-width: 300px; /* Optional: Limit button width */
    margin-top: 1rem; /* Add spacing for button */
    align-self: center; /* Center-align the button */
  }
`;

export const FieldWrapper = styled.div`
  flex: 1 1 150px;
  max-width: 200px;
`;
