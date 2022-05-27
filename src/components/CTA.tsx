import { Link as ChakraLink, Button } from '@chakra-ui/react'

import { Container } from './Container'

export const CTA = () => (
  <Container
    flexDirection="row"
    position="fixed"
    bottom={4}
    width="full"
    maxWidth="3xl"
    py={5}
  >
    <Button
      as={ChakraLink}
      isExternal
      href="https://boardroom.io/"
      variant="outline"
      colorScheme="blue"
      rounded="button"
      flexGrow={1}
      mx={2}
      width="full"
    >
      Boardroom UI
    </Button>
    <Button
      as={ChakraLink}
      href="/intergations"
      variant="solid"
      colorScheme="blue"
      rounded="button"
      flexGrow={3}
      mx={2}
      width="full"
    >
      View List of Protocols
    </Button>
  </Container>
)
