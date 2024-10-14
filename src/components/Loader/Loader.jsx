import { Spinner, Flex } from '@chakra-ui/react';

export const Loader = () => {
  return (
    <Flex justifyContent={'center'} alignItems={'center'} h={'90vh'}>
      <Spinner size={'xl'} thickness={'7px'} speed={'0.65s'} empty />
    </Flex>
  );
};
