import { Button } from '@chakra-ui/button';

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
}

export function PaginationItem({
  isCurrent = false,
  number,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        w="4"
        fontSize="xs"
        colorScheme="pink"
        disabled
        _disabled={{ bg: 'pink.500', cursor: 'default' }}
      >
        {number}
      </Button>
    );
  }

  return (
    <Button size="sm" w="4" fontSize="xs" bg="gray.700" _bg="gray.500">
      {number}
    </Button>
  );
}
