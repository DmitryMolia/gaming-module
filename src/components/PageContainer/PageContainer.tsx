'use client';
import { FC, PropsWithChildren } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

export const PageContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">{children}</Container>
    </>
  );
};
