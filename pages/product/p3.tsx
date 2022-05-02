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
          <img src="/s6.jpg" width={"100%"} alt="loading"></img>
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
            <Text>Jawed Habib Hair and Beauty Salon</Text>
          </Flex>
          <Flex width="90%" height="59%" bgColor={'	#DCDCDC'} borderRadius="5px" justifyContent={'center'} alignItems='center'>
            <Text>
              Jawed Habib comes from a family which has been in the hair
              business for more than a century. His grandfather, Nazir Ahmed was
              the hairstylist of none other than Jawaharlal Nehru and Lord
              Mountbatten. What we’re saying is that you can expect nothing but
              a great hair experience at this place! So book an appointment
              right away.
            </Text>
          </Flex>
          <Flex width="90%" height="15%" bgColor={'	#DCDCDC'} borderRadius="5px" justifyContent={'center'} alignItems='center'>
            <Text>Lajpat Nagar II, Hauz Khas, Khan Market </Text>
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
