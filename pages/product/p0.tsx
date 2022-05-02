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
        <Flex width="40%" height="100%" border={"1px solid"} bgColor='red'>
          <img src="/s1.webp" width={'100%'} alt='loading'></img>
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
            <Text>Affinity Salon</Text>
          </Flex>
          <Flex width="90%" height="59%" bgColor={'	#DCDCDC'} borderRadius="5px" justifyContent={'center'} alignItems='center'>
            <Text>
              Affinity is a unisex salon that offers the best of hair and beauty
              treatments. This salon offers cutting-edge treatments and styles
              in a chic ambience. Their stylists have received training from
              some of the best and reputed institutions, so you can just sit
              back and let them work their magic!
            </Text>
          </Flex> 
          <Flex width="90%" height="15%" bgColor={'	#DCDCDC'} borderRadius="5px" justifyContent={'center'} alignItems='center'>
            <Text>Green Park, Def Col, Khan Market</Text>
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
