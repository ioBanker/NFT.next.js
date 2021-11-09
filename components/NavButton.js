import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'
import Link from 'next/link';

import { Button, Text } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { useTheme } from './states';

export default function NavButton(properties) {

  const colorScheme = properties.colorScheme;
  const inputText = properties.inputText;
  const language = properties.language;
  const url = properties.url;

  const { hovered, ref } = useHover();

  return (
    <Link href={url} key={url.replace("/","")}>
      <Button
        ref={ref}
        variant={colorScheme === "dark" ? "outline" : "light"}
        color={colorScheme === "dark" ? "dark" : "gray"}
        sx={{
          boxShadow: `0 0 ${hovered ? 5 : 2}px ${colorScheme === 'dark' ? 'white' : 'grey'}`,
          margin: '5px'
        }}
      >
        <Text locale={language}>{inputText}</Text>
      </Button>
    </Link>
  );
}