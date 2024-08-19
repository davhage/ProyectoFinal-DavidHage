import { Flex, Text } from '@chakra-ui/react';
import { HiMiniShoppingCart } from "react-icons/hi2";

const CarWidget = () => {
    return (
        <Flex alignItems={"center"} justifyContent={"space-between"} height={"100%"} width={"60px"}>
            <HiMiniShoppingCart size={20}/>
            <Text fontSize={'1.5rem'}>0</Text>
        </Flex>
    )
}

export default CarWidget;