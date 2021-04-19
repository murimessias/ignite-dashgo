import { Avatar } from '@chakra-ui/avatar';
import { Box, Flex, Text } from '@chakra-ui/layout';

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Murilo Messias</Text>
          <Text color="gray.300" fontSize="small">
            murilo.messias@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Murilo Messias"
        src="https://github.com/murimessias.png"
      />
    </Flex>
  );
}
