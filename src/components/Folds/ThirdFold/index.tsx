import React from "react";
import {
  HStack,
  Icon,
  VStack,
  Stack,
  Tooltip,
  Text,
  Box,
  Badge,
  Card,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";

export function ThirdFold(props: any) {
  const cardData = [
    {
      percentage: 10,
      profit: true,
      amount: "10",
      label: "Percentual de Conclusão de Exercicios",
      tooltipLabel: "Indicador mostra o quanto da tarefa ou atividade a criança concluiu em relação ao que foi designado. ",
    },
    {
      percentage: 5,
      profit: true,
      amount: "3h40min (Média)",
      label: "Tempo gasto na atividade",
      tooltipLabel: "Esse indicador mostra quanto tempo a criança gastou na tarefa ou atividade.",
    },
    {
      percentage: 8,
      profit: false,
      amount: "85%",
      label: "Nível de desempenho",
      tooltipLabel: "Esse indicador pode ser mostrado como uma escala de 1 a 5 ou como um texto descritivo",
    },
  ];
  return (
    <Box>
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent={{ base: "center", md: "flex-start" }}
        alignItems={{ base: "center", md: "flex-start" }}
        space="3"
      >
        {cardData.map((data: any, index: number) => {
          return (
            <Tooltip key={index} label={data.tooltipLabel} openDelay={500} placement="top">
              <Card
                flex={{ base: "1", lg: "-1" }}
                borderRadius={12}
                overflow="hidden"
                p={5}
                w={{ base: "100%", lg: "100%" }}
                shadow="none"
                borderWidth="1"
                borderColor="coolGray.200"
                bg="warmGray.50"
              >
                <VStack space={2}>
                  <HStack space={2} alignItems="center">
                    <Badge
                      borderColor={data.profit ? "success.500" : "danger.500"}
                      boxSize="5"
                      rounded="full"
                      bg={data.profit ? "success.100" : "danger.100"}
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Icon
                        as={Ionicons}
                        name={data.profit ? "arrow-up" : "arrow-down"}
                        size={3}
                        color={data.profit ? "success.500" : "danger.500"}
                      />
                    </Badge>
                    <Text color={data.profit ? "success.500" : "danger.500"}>
                      {data.percentage}%
                    </Text>
                  </HStack>
                  <Text fontWeight="bold" fontSize="lg">
                    {data.amount}
                  </Text>
                  <Text>{data.label}</Text>
                </VStack>
              </Card>
            </Tooltip>
          );
        })}
      </Stack>
    </Box>
  );
}
