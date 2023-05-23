import {
  createStyles,
  Menu,
  Header,
  Container,
  Group,
  Button,
  Burger,
  rem,
  Text,
  Title,
  Center,
  Space,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import { HeroText } from "../components/HeroSection/HeroPage";
import { FeaturesGrid } from "../components/Features/Features";
import { FooterSimple } from "../components/Footer";
import { AuthenticationTitle } from "../components/Form";
import linkjson from "../components/lii";
const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: rem(5),
  },
}));

export default function IndexPage() {
  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const items = linkjson.links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={rem(12)} stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <>
      <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }} mb={120}>
        <Container className={classes.inner} fluid>
          <Group>

            <Text size="xl" weight={700} color="black">
              Insight
            </Text>
          </Group>
        </Container>
      </Header>
      <HeroText />
      <Title
        order={1}
        size="h2"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
        weight={600}
        align="center"
        color={"purple"}
      >
        Insight is Featured In
      </Title>

      <Space h={20} />
      <Text
      sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
      weight={900}
      align="center"
      >
      🦙🧪  Llama Lab 🧬🦙
      </Text>
      <Space h={20} />

      <AuthenticationTitle />

      <FeaturesGrid />
     
      <FooterSimple links={linkjson.links} />
    </>
  );
}
