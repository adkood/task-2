import { Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
const Product: React.FC<{path: string, id: number, imgUrl: string , name: string , adress: string }> = (props) => {
    const router = useRouter();
    const onClickFunc = () => {
        router.push(props.path);
    }
  return (
    <Flex
      width="300px"
      height="400px"
    //   border={"2px solid"}
      borderRadius="10px"
      overflow={"hidden"}
      flexDirection="column"
      justifyContent={"space-between"}
      alignItems='center'
      boxShadow='5px 10px 10px'
      bgColor={'white'}
      _hover={{
          width: '350px',
          height: '450px'
      }}
    onClick={onClickFunc}
    >
      <Image
        src={props.imgUrl}
        alt="loading"
        height={"50%"}
        width="100%"
        borderRadius={"10px"}
      />
      <Flex height="23%" width="90%" borderRadius='10px' justifyContent={'center'} alignItems='center'>
          <Text fontFamily={'mono'} fontSize='150%'>{props.name}</Text>
      </Flex>
      <Flex height="23%" width="90%" borderRadius='10px' justifyContent={'center'} alignItems='center'>
      <Text fontFamily={'mono'} fontSize='110%'>{props.adress}</Text>
      </Flex>
    </Flex>
  );
};

export default Product;
