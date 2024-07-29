'use client';
import { FC, PropsWithChildren, Children } from 'react';
import Grid from '@mui/material/Grid';

export const ContainerGrid: FC<PropsWithChildren> = ({ children }) => (
  <Grid container spacing={2} data-cy="PhotoCard_container">
    {Children.map(children, (child) => (
      <Grid item xs={12} sm={6} md={4}>
        {child}
      </Grid>
    ))}
  </Grid>
);
