import { createStyles, Container, Group, Anchor, rem } from "@mantine/core";
import Link from 'next/link'

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(300),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

interface FooterSimpleProps {
  links: { link: string; label: string }[];
}

export function FooterSimple({ links }: FooterSimpleProps) {
  const { classes } = useStyles();
  const items = links.map((link) => (

    <Anchor
     href={link.link}
      key={link.label}
      size="sm"
      component={Link}
      color="dimmed"
    >
      {link.label}
    </Anchor>
     


  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        ScrapeWeb
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}
