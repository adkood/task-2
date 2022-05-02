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
        // border={"1px solid"}
        borderRadius="5px"
        boxShadow={"5px 10px 10px"}
        bgColor='#F0F0F0'
      >
        <Flex width="40%" height="100%" border={"1px solid"}>
          <img src="/s9.jpg" width={"100%"} alt="loading"></img>
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
          <Flex width="95%" height="10%" bgColor={'	#DCDCDC'} borderRadius="5px" justifyContent={'center'} alignItems='center'>
            <Text>Vikings Salon</Text>
          </Flex>
          <Flex width="95%" height="59%" bgColor={'	#DCDCDC'} borderRadius="5px" justifyContent={'center'} alignItems='center'>
            <Text> 
              This chic and stylish place nestled in GK II is not only an
              exquisite salon but also a speakeasy fashion house. They
              specialize in hair colouring techniques like balayage, ombre and
              global and other treatments like Loreal Mythic Oil Royal Spa, Ola
              Plex Bond Multiplying and lots more that are enough to give your
              hair the much-needed nourishment and care!
            </Text>
          </Flex>
          <Flex width="95%" height="15%" bgColor={'	#DCDCDC'} borderRadius="5px" justifyContent={'center'} alignItems='center'>
            <Text>M 28, M Block Market, GK II </Text>
          </Flex>
          <Flex width="95%" height="10%" bgColor={'	#DCDCDC'} borderRadius="5px" justifyContent={'center'} alignItems='center'>
            <Text>10:30 AM - 8:30 PM</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Product;
