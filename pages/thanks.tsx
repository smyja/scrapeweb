/* eslint-disable react/no-unescaped-entities */
// pages/thanks.tsx
import React from 'react';
import Head from 'next/head';
import { Container, Title, Text } from '@mantine/core';

const Thanks: React.FC = () => {
  return (
    <>
      <Head>
        <title>Thanks for submitting!</title>
      </Head>

      <Container size={420} my={40}>
        <Title
          align="center"
          sx={(theme) => ({
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,
          })}
        >
          Thanks for submitting!
        </Title>

        <Text align="center" mt={20}>
          We'll be in touch soon.
        </Text>
      </Container>
    </>
  );
};

export default Thanks;
