import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
// import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";

const Index = () => (
  <Container height="100vh">
    <Hero />
    <Main>
      <Text color="text" mt={8}>
        This website exclusively lists all live projects that are live on
        Boardroom.io
      </Text>

      <List spacing={3} my={0} color="text">
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <ChakraLink
            isExternal
            href="https://boardroom.io/"
            flexGrow={1}
            mr={2}
          >
            Boardroom UI <LinkIcon />
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <ChakraLink
            isExternal
            href="https://swagger.boardroom.info/"
            flexGrow={1}
            mr={2}
          >
            Boardroom API <LinkIcon />
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <ChakraLink
            isExternal
            href="https://docs.boardroom.info/"
            flexGrow={1}
            mr={2}
          >
            Documentation <LinkIcon />
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <ChakraLink
            isExternal
            href="https://discord.gg/EtnpXen9eV"
            flexGrow={1}
            mr={2}
          >
            Discord <LinkIcon />
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <ChakraLink
            isExternal
            href="https://twitter.com/boardroom_info"
            flexGrow={1}
            mr={2}
          >
            Twitter <LinkIcon />
          </ChakraLink>
        </ListItem>
      </List>
    </Main>
    <CTA />

    <Footer></Footer>
  </Container>
);

export default Index;
