import { Avatar, Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

interface ProfileProps {
  showProfileData?: boolean
}


export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Filipe Dias</Text>
          <Text color="gray.300" fontSize="small">filipdiasdelima@gmail.com</Text>
        </Box>
      )}

      <Avatar size="md" name="Filipe Dias" src="https://github.com/filipediaslima.png" />
    </Flex>
  )
}