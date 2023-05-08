import "react-native-gesture-handler";
import React from "react";
import {
  Box,
  HStack,
  Text,
  Icon,
  VStack,
  Link,
  Badge,
  IconButton,
  Hidden,
} from "native-base";
import { Feather } from "@expo/vector-icons";

export const Table = () => {
  const tableData = [
    {
      date: "Português",
      desc: "Aluno 1",
      amount: "08/10",
      status: "Concluido",
      color: "success",
    },
    {
      date: "Matematica",
      desc: "Aluno 1",
      amount: "03/10",
      status: "Concluido",
      color: "success",
    },
    {
      date: "Leitura",
      desc: "Maria Garcia",
      amount: "09/10",
      status: "Passou",
      color: "lightBlue",
    },
    {
    date: "Matematica",
    desc: "Aluno 2",
    amount: "06/10",
    status: "Concluido",
    color: "success",
  },
  {
    date: "Leitura",
    desc: "João Silva",
    amount: "08/10",
    status: "Passou",
    color: "lightBlue",
  },
  {
    date: "História",
    desc: "Aluno 3",
    amount: "07/10",
    status: "Concluido",
    color: "success",
  },
  {
    date: "Geografia",
    desc: "Aluno 4",
    amount: "05/10",
    status: "Não concluido",
    color: "warning",
  },
  {
    date: "Ciências",
    desc: "Aluno 5",
    amount: "10/10",
    status: "Passou",
    color: "lightGreen",
  },
  ];

  function TableHeader() {
    return (
      <HStack justifyContent="space-between">
        <Text bold fontSize="lg">
            Últimas Atualizações
        </Text>
        <Link
          _text={{
            textDecorationLine: "none",
            color: "indigo.700",
            fontWeight: "medium",
          }}
        >
          Visualizar tudo
        </Link>
      </HStack>
    );
  }
  return (
    <Box mt={10}>
      <Hidden till="lg">
        <VStack
          space="8"
          bg="warmGray.50"
          p="6"
          borderWidth="1"
          borderColor="coolGray.200"
          borderRadius="10"
        >
          <TableHeader />
          <VStack space="5">
            {tableData.map((data: any, index: number) => {
              return (
                <HStack key={index} flex="1" justifyContent="space-between" space="16">
                  <Text flex="1" fontWeight="medium">
                    {data.date}
                  </Text>
                  <Text
                    flex="2"
                    //@ts-ignore
                    flexShrink="0"
                    fontWeight="medium"
                  >
                    {data.desc}
                  </Text>
                  <Text
                    flex="1"
                    //@ts-ignore
                    flexShrink="0"
                    fontWeight="medium"
                  >
                    {data.amount}
                  </Text>
                  <Box flex="1.5">
                    <Badge colorScheme={data.color} borderRadius="10">
                      {data.status}
                    </Badge>
                  </Box>
                  <IconButton
                    icon={<Icon as={Feather} name="more-horizontal" />}
                    _icon={{ color: "trueGray.400", size: "6" }}
                  />
                </HStack>
              );
            })}
          </VStack>
        </VStack>
      </Hidden>
      <Hidden from="lg">
        <VStack space="3">
          <TableHeader />
          <VStack space="3">
            {tableData.map((data, index) => {
              return (
                <VStack
                  key={index}
                  bg="warmGray.50"
                  p="4"
                  borderWidth="1"
                  borderColor="coolGray.200"
                  borderRadius="10"
                  space="1"
                >
                  <Text fontWeight="medium" fontSize="md">
                    {data.desc}
                  </Text>
                  <VStack space="3">
                    <Text fontSize="xs">{data.date}</Text>
                    <Text>{data.amount}</Text>
                    <Badge colorScheme={data.color} borderRadius="10" w="32">
                      {data.status}
                    </Badge>
                  </VStack>
                </VStack>
              );
            })}
          </VStack>
        </VStack>
      </Hidden>
    </Box>
  );
};
