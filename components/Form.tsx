import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import {
  TextInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Button,
  Textarea,
} from '@mantine/core';

interface FormData {
  name: string;
  email: string;
  organization: string;
  message: string;
}

export function AuthenticationTitle() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    organization: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter(); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, organization, message } = formData;
    setIsLoading(true);
    setError(null);

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_AIRTABLE_API_URL}/Table%201`,
        {
          records: [
            {
              fields: {
                Name: name,
                Email: email,
                Organization: organization,
                Notes: message,
              },
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

    //   alert('Form submitted successfully!');
      setFormData({ name: '', email: '', organization: '', message: '' });
      router.push('/thanks'); // Add this line
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('There was an error submitting the form. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Join the waitlist
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        {error && <Text color="red">{error}</Text>}
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
            name="name"
          />
          <TextInput
            label="Email"
            placeholder="you@email.com"
            required
            value={formData.email}
            onChange={handleChange}
            name="email"
          />
          <TextInput
            label="Organization"
            placeholder="Your Organization"
            value={formData.organization}
            onChange={handleChange}
            name="organization"
          />

          <Textarea
            label="Why are you interested in Insight"
            placeholder="Why are you interested in Insight"
            required
            value={formData.message}
            onChange={handleChange}
            name="message"
          />

          <Button fullWidth mt="xl" type="submit" disabled={isLoading}>
            {isLoading ? 'Submitting...' : 'Submit'}
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
