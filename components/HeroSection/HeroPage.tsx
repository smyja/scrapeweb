import {
  createStyles,
  Title,
  Text,
  Button,
  Container,
  rem,
  Center,
} from "@mantine/core";


const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: rem(120),
    paddingBottom: rem(80),

    [theme.fn.smallerThan("sm")]: {
      paddingTop: rem(80),
      paddingBottom: rem(60),
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  dots: {
    position: "absolute",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[1],

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  dotsLeft: {
    left: 0,
    top: 0,
  },

  title: {
    textAlign: "center",
    fontWeight: 800,
    fontSize: rem(60),
    letterSpacing: -1,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
      textAlign: "left",
    },
  },

  highlight: {
    color:
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6],
  },

  description: {
    textAlign: "center",

    [theme.fn.smallerThan("xs")]: {
      textAlign: "left",
      fontSize: theme.fontSizes.md,
    },
  },

  controls: {
    marginTop: theme.spacing.lg,
    display: "flex",
    justifyContent: "center",

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  control: {
    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    [theme.fn.smallerThan("xs")]: {
      height: rem(42),
      fontSize: theme.fontSizes.md,

      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },
}));

export function HeroText() {
  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper} size={1400}>
      <div className={classes.inner}>
    
        <Title className={classes.title}>Harness the power of web scraping effortlessly.</Title>

        <Container p={0} size={600}>
          <Text size="lg" color="dimmed" className={classes.description}>
          Scrapeweb is the ultimate platform for developers to build, deploy, and monitor web scraping and browser automation tools.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href="https://airtable.com/shr73jknWEfeNg6Ei"
            styles={(theme) => ({
              root: {
                backgroundColor: "#000000",
                border: 0,
                height: rem(42),
                borderRadius: rem(200),
                paddingLeft: rem(40),
                paddingRight: rem(40),
                "&:not([data-disabled])": theme.fn.hover({
                  backgroundColor: theme.fn.darken("#00acee", 0.05),
                }),
              },
            })}
          >
            Get early access
          </Button>
        </div>
      </div>
    </Container>
  );
}
