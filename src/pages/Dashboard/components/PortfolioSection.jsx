import { HStack, Icon, Stack, Text, Tag, Button } from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiArrowToBottom, BiArrowToTop } from "react-icons/bi";
const PortfolioSection = () => {
  return (
    <HStack
      justify="space-between"
      bg="white"
      borderRadius="xl"
      p="6"
      align={{ base: "flex-start", xl: "center" }}
      flexDir={{ base: "column", xl: "row" }}
      spacing={{ base: 0, xl: 4 }}
    >
      <HStack
        spacing={{ base: 0, xl: 16 }}
        align={{ base: "flex-start", xl: "center" }}
        flexDir={{ base: "column", xl: "row" }}
      >
        <Stack>
          <HStack color="black.80">
            <Text fontSize="14px">Total Portfolio Value</Text>
            <Icon as={AiOutlineInfoCircle} />
          </HStack>
          <Text textStyle="h2" fontWeight="medium">
            ₹ 112,312.24
          </Text>
        </Stack>
        <Stack>
          <HStack color="black.80">
            <Text fontSize="14px">Wallet Balances</Text>
          </HStack>
          <HStack
            spacing={2}
            align={{ base: "flex-start", sm: "center" }}
            flexDir={{ base: "column", sm: "row" }}
          >
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                22.39401000
              </Text>{" "}
              <Tag colorScheme="gray" fontWeight="medium">
                BTC
              </Tag>
            </HStack>
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                ₹ 1,300.00
              </Text>{" "}
              <Tag colorScheme="gray" fontWeight="medium">
                BTC
              </Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>
      <HStack>
        <Button leftIcon={<Icon as={BiArrowToBottom} />}>Deposit</Button>
        <Button leftIcon={<Icon as={BiArrowToTop} />}>Withdraw</Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
