import { ThemeIcon, Text, Title, Container, SimpleGrid, createStyles, rem } from '@mantine/core';
import { IconGauge, IconCookie, IconUser, IconMessage2, IconLock } from '@tabler/icons-react';
import attributes from './features.json';
export const MOCKDATA = [
  {
    icon: IconGauge,
    title: 'Extreme performance',
    description:
      'Harness the power of our cutting-edge AI to streamline medical research, producing faster and more accurate results than traditional methods.',
  },
  {
    icon: IconUser,
    title: 'Privacy focused',
    description:
      'Our technology prioritizes user privacy, ensuring that your data is protected and secure throughout the research process.',
  },

  {
    icon: IconLock,
    title: 'Secure by default',
    description:
      'From the ground up, Insight is designed with security in mind, providing a safe environment for all your medical research needs.',
  },

];

interface FeatureProps {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}
export function Feature({
    icon: Icon = IconGauge,     
    title = 'Default Title',
    description = 'Default Description',
  }: FeatureProps) {
  return (
    <div>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon size="1.1rem" stroke={1.5} />
      </ThemeIcon>
      <Text mt="sm" mb={7}>
        {title}
      </Text>
      <Text size="sm" color="dimmed" sx={{ lineHeight: 1.6 }}>
        {description}
      </Text>
    </div>
  );
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(28),
      textAlign: 'left',
    },
  },

  description: {
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      textAlign: 'left',
    },
  },
}));
interface FeaturesGridProps {
    title?: React.ReactNode;
    description?: React.ReactNode;
    data?: FeatureProps[];
  }
  
  export function FeaturesGrid({
    title = attributes.props.title,
    description = attributes.props.description,
    data = MOCKDATA,
  }: FeaturesGridProps) {
    const { classes } = useStyles();
    const features = data.map((feature, index) => <Feature {...feature} key={index} />);
  

  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>{title}</Title>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          {description}
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={3}
        spacing={50}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: 'xl' },
          { maxWidth: 755, cols: 1, spacing: 'xl' },
        ]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}