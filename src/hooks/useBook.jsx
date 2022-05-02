import { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';

const apiUrl = process.env.REACT_APP_GOTCHA_API;

function useBook() {
  const [bookId, setBookId] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  useEffect(() => {
    async function postBook() {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`
        },
        body: JSON.stringify({ name: "Harry Porter" })
      };

      fetch(`${apiUrl}/api/public/books`, requestOptions)
        .then(response => response.json())
        .then(data => setBookId(data.isbn))
        .catch(err => setErrorMessage(err.toString()))
        ;
    }
    postBook();
  });

  return { bookId, errorMessage };
}

export default useBook;