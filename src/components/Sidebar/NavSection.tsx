import { Box, Stack, Text } from '@chakra-ui/layout';
import { ReactNode } from 'react';

interface NavSectionProps {
  title: string;
  children: ReactNode;
}

export function NavSection({ title, children }: NavSectionProps) {
  return (
    <Box>
      <Text fontSize="gray.400" fontWeight="bold" color="gray.400">
        {title}
      </Text>
      <Stack spacing="2" mt="6" align="stretch">
        {children}
      </Stack>
    </Box>
  );
}
