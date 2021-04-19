import { Button } from '@chakra-ui/button';
import { Box, Stack } from '@chakra-ui/layout';

export function Pagination() {
  return (
    <Stack
      direction="row"
      justify="space-between"
      align="center"
      mt="8"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <Button
          size="sm"
          w="4"
          fontSize="xs"
          colorScheme="pink"
          disabled
          _disabled={{ bg: 'pink.500', cursor: 'default' }}
        >
          1
        </Button>
        <Button size="sm" w="4" fontSize="xs" bg="gray.700" _bg="gray.500">
          2
        </Button>
        <Button size="sm" w="4" fontSize="xs" bg="gray.700" _bg="gray.500">
          3
        </Button>
        <Button size="sm" w="4" fontSize="xs" bg="gray.700" _bg="gray.500">
          4
        </Button>
      </Stack>
    </Stack>
  );
}
