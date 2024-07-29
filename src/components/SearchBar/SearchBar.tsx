'use client';
import { FC, useState, useMemo, useCallback, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import debounce from 'debounce';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { PaperStyled, IconButtonStyled } from './styled';

interface Props {
  initTitle?: string;
}

export const SearchBar: FC<Props> = ({ initTitle = '' }) => {
  const router = useRouter();

  const [title, setTitle] = useState<string>(initTitle);

  const debouncedRouterPush = useMemo(
    () =>
      debounce(({ title }: { title: string }) => {
        router.push(`?title=${title}`);
      }, 200),
    [router]
  );

  const handleTitleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      
      // Allow only alphabets characters
      const re = /^[A-Za-z]+$/;

      if (value === '' || re.test(value)) {
        setTitle(value);
        debouncedRouterPush({ title: value });
      }
    },
    [setTitle, debouncedRouterPush]
  );

  return (
    <PaperStyled>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Filter by title"
        onChange={handleTitleChange}
        value={title}
      />
      <IconButtonStyled type="button" aria-label="search">
        <SearchIcon />
      </IconButtonStyled>
    </PaperStyled>
  );
};
