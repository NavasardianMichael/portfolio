import { useTheme } from '@mui/material';

export const useThemeMode = () => {
  return useTheme().palette.mode;
};
