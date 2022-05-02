import { Flex, Text } from "@chakra-ui/layout";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
const Product = () => {
  const name = useSelector((state: any) => state.salonArr);
  // console.log(name);
  const router = useRouter();
  console.log(router.query.id);
  return (
    <Flex
      width={"100vw"}
      height="100vh"
      justifyContent={"center"}
      alignItems="center"
    >
      <Flex
        width={"95vw"}
        height="60vh"
        bgColor='#F0F0F0'
        borderRadius="5px"
        boxShadow={"5px 10px 10px"}
      >
        <Flex width="40%" height="100%" border={"1px solid"}>
        <img src="/s4 justifyContent={'center'} alignItems='center'.webp" width={'100%'} alt='loading'></img>
        </Flex>
        <Flex
          width="60%"
          height="100%"
          flexDirection={"column"}
          justifyContent="space-around"
          alignItems={"center"}
          fontFamily='mono'
          fontSize={'150%'}
        >
          <Flex width="90%" height="10%" bgColor={'	#DCDCDC'} borderRadius="5px" justifyContent={'center'} alignItems='center'>
            <Text>Monsoon Salon and Spa</Text>
          </Flex>
          <Flex width="90%" height="59%" bgColor={'	#DCDCDC'} borderRadius="5px" justifyContent={'center'} alignItems='center'>
            <Text>
              Their goal is to change the face of hairdressing for a sustainable
              future for the next generation of passionate, artistic and
              articulate hair stylists. You can just come here, tell the stylist
              what you want and just watch them work their magic! And, if you
              want to avail some great discounts, then you can become a member
              of this salon and enjoy up to 50% off on all their services.
            </Text>
          </Flex>
          <Flex width="90%" height="15%" bgColor={'	#DCDCDC'} borderRadius="5px" justifyContent={'center'} alignItems='center'>
            <Text>Dwarka, Rajouri Garden, GGN</Text>
          </Flex>
          <Flex width="90%" height="10%" bgColor={'	#DCDCDC'} borderRadius="5px" justifyContent={'center'} alignItems='center'>
            <Text>10 AM - 8 PM</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Product;
