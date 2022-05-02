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
        <img src="/s5.jpg" width={'100%'} alt='loading'></img>
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
            <Text>Martina Wu Salon</Text>
          </Flex>
          <Flex width="90%" height="59%" bgColor={'	#DCDCDC'} borderRadius="5px" justifyContent={'center'} alignItems='center'>
            <Text>
              Martina Wu is known as one of the best hairstylists in Delhi who
              understands all kinds of hair types (especially curly hair) and
              hair woes. Getting an appointment at her salon requires quite a
              bit of determination, so make sure you book well in advance and
              then just let her work her magic. Do remember that these guys are
              shut on Tuesdays, so plan your trip accordingly!
            </Text>
          </Flex>
          <Flex width="90%" height="15%" bgColor={'	#DCDCDC'} borderRadius="5px" justifyContent={'center'} alignItems='center'>
            <Text>C93, Geetanjali Marg, Block C, Shivalik Colony, Malviya Nagar</Text>
          </Flex>
          <Flex width="90%" height="10%" bgColor={'	#DCDCDC'} borderRadius="5px" justifyContent={'center'} alignItems='center'>
            <Text>10 AM - 7:30 PM</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Product;
