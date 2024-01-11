import axios from 'axios';
import { useEffect, useState } from 'react';
import { Snackbar } from 'react-native-paper';

const request = axios.create({
  // It's here only for demo reason
  baseURL: 'http://localhost:3000',
});

export function useRequest() {
  const [snackbarMessage, setSnackbarMessage] = useState<string>();

  useEffect(
    function closeSnackbar() {
      setTimeout(() => {
        setSnackbarMessage(undefined);
      }, 5000);
    },
    [setSnackbarMessage],
  );

  request.interceptors.response.use(
    (response) => response,
    (error) => {
      if (axios.isAxiosError(error)) {
        setSnackbarMessage(error.response?.data?.message ?? error.message);
      } else {
        setSnackbarMessage('Something goes wrong with the network request.');
      }

      throw error;
    },
  );

  return {
    request,
    renderErrorSnack: () => (
      <Snackbar visible={Boolean(snackbarMessage)} onDismiss={() => setSnackbarMessage(undefined)}>
        {snackbarMessage}
      </Snackbar>
    ),
  };
}
