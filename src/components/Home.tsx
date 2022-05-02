import { Flex, Text } from "@chakra-ui/layout";
import Product from "./Product";

const Home = () => {
  return (
    <Flex
      width={"100vw"}
      height="100vh"
      justifyContent="space-around"
      alignItems="center"
      flexDirection={"column"}
      bgColor="#F5F5F5"
      bgImage={'/brick.jpg'}
      // backgroundRepeat='no-repeat'
    >
      <Flex
        width={"90%"}
        height="10%"
        justifyContent={"center"}
        alignItems="center"
      >
        {/* <Text fontSize={'400%'} fontFamily='mono'>IT IS SALOON TIME</Text> */}
        <Flex justifyContent="space-around" position={'absolute'} top='20%' left='30%' fontSize={'300%'}>
          <Flex className="sign" >
            <span>Salon</span>
            <span className="flicker">Time</span>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        width="100vw"
        height="70vh"
        justifyContent={"space-evenly"}
        alignItems="center"
      >
        <Product
          path="/product/p0"
          id={0}
          imgUrl="s1.webp"
          name="Affinity Salon"
          adress="Green Park, Def Col, Khan Market"
        ></Product>
        <Product
          path="/product/p1"
          id={1}
          imgUrl="s5.jpg"
          name="Martina Wu Salon"
          adress={
            "C93, Geetanjali Marg, Block C, Shivalik Colony, Malviya Nagar"
          }
        ></Product>
        <Product
          path="/product/p2"
          id={2}
          imgUrl="s4.webp"
          name="Monsoon Salon and Spa"
          adress="Dwarka, Rajouri Garden,"
        ></Product>
        <Product
          path="/product/p3"
          id={3}
          imgUrl="s6.jpg"
          name="Jawed Habib Hair, Beauty Salon"
          adress="Lajpat Nagar II, Hauz Khas, Khan Market "
        ></Product>
        <Product
          path="/product/p4"
          id={4}
          imgUrl="s9.jpg"
          name="Vikings Salon"
          adress="M 28, M Block Market, GK II"
        ></Product>
      </Flex>
    </Flex>
  );
};

export default Home;
