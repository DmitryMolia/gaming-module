'use client';
import Image from 'next/image';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';

export const ImageStyled = styled(Image)`
  position: relative;
  display: block;
  margin: 0 auto;
`;

export const CardStyled = styled(Card)`
  padding: 16px;
  height: 100%;
`;
