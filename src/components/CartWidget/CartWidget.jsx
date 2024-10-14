import { Flex, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { HiMiniShoppingCart } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context';

export const CartWidget = () => {
  const { cartState } = useContext(CartContext);
  const qtyTotalItems = cartState.reduce((acc, item) => acc + item.qtyItem, 0);

  return (
    <Link to='/checkout'>
      <Flex
        alignItems={'center'}
        justifyContent={'space-between'}
        height={'100%'}
        width={'60px'}
      >
        <HiMiniShoppingCart size={20} />
        <Text fontSize={'1.5rem'}>{qtyTotalItems}</Text>
      </Flex>
    </Link>
  );
};
