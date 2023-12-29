import { Flex, Heading, Box, Button, Menu, MenuButton, MenuItem, MenuList, Avatar } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import Link from "next/link";

function Header() {
  return (
    <Flex justifyContent="space-between" alignItems="center" padding="1rem">
      <Link href="/" passHref>
        <Heading as="h1">Roadmap Crafter</Heading>
      </Link>
      <Flex align="center">
        <Link href="/build" passHref>
          <Button>Build</Button>
        </Link>
        <Link href="/explore" passHref>
          <Button colorScheme="blue" marginLeft="1rem">
            Explore
          </Button>
        </Link>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            <Avatar size="sm" name="User Name" src="https://via.placeholder.com/150" />
          </MenuButton>
          <MenuList>
            <NextLink href="/profile" passHref>
              <MenuItem>Profile</MenuItem>
            </NextLink>
            <MenuItem onClick={() => console.log("Log out")}>Log out</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}

export default Header;
