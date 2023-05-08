import React from "react";
import { HStack, Icon, VStack, Tooltip, Text } from "native-base";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

export function SecondFold(props: any) {
  const cardData = [
    {
      tooltipLabel: "Cadastre um novo exercicio",
      color: "emerald",
      iconLibrary: FontAwesome5,
      iconName: "child",
      label: "Novo Exercicio",
    },
    {
      tooltipLabel: "Liberar Acesso",
      color: "orange",
      iconLibrary: FontAwesome5,
      iconName: "unlock",
      label: "Liberar Acesso",
    },
    {
      tooltipLabel: "Adicionar novo aluno",
      color: "lightBlue",
      iconLibrary: Ionicons,
      iconName: "ios-add-circle-sharp",
      label: "Adicionar Aluno",
    }
  ];
  return (
    <HStack mb="6" mt={{ base: "6" }} space={{ base: "3", lg: "6" }}>
      {cardData.map((data: any, index: number) => {
        return (
            <Tooltip key={index} label={data.tooltipLabel} openDelay={500} placement="top">
            <VStack
              space={6}
              px={4}
              py={6}
              bg={`${data.color}.100`}
              rounded="xl"
              maxW="32"
              flex="1"
            >
              <Icon
                as={data.iconLibrary}
                name={data.iconName}
                size={8}
                color={`${data.color}.500`}
              />
              <Text color={`${data.color}.500`} fontWeight={500}>
                {data.label}
              </Text>
            </VStack>
          </Tooltip>
        );
      })}
    </HStack>
  );
}
