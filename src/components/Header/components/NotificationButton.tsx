import React from "react";
import { Entypo, Fontisto, MaterialIcons } from "@expo/vector-icons";
import {
  Badge,
  Box,
  HStack,
  Icon,
  IconButton,
  Menu,
  Pressable,
  Text,
} from "native-base";

export const data = [
  {
    title: "Nova matrícula realizada com sucesso",
    read: false,
  },
  {
    title: "Aluno(a) João Silva atualizado(a) com sucesso",
    read: true,
  },
  {
    title: "Nota de Português para o aluno(a) Maria Garcia adicionada",
    read: true,
  },
  {
    title: "Novo relatório de desempenho dos alunos disponível",
    read: true,
  },
];

export function NotificationButton() {
  return (
    <Menu
      mr={6}
      placement="bottom right"
      trigger={(triggerProps: any) => {
        return (
          <Box>
            <IconButton
              icon={
                <Icon as={Fontisto} name="bell" size={4} color="coolGray.800" />
              }
              _icon={{ color: "black" }}
              {...triggerProps}
              _hover={{ bg: "blueGray.100" }}
              _pressed={{ bg: "blueGray.100" }}
              _focus={{ bg: "blueGray.100" }}
              bg="indigo.50"
              variant="solid"
              p={2}
              borderRadius="full"
            />
            <Badge
              right="-7"
              top="-7"
              position="absolute"
              rounded="full"
              boxSize="5"
              bg="orange.600"
              variant="solid"
              justifyContent="center"
              alignItems="center"
            >
              1
            </Badge>
          </Box>
        );
      }}
    >
      {data.map((notificationData, index) => {
        return (
          <Menu.Item
            m="2"
            p="0"
            _focus={{ bg: "indigo.50" }}
            key={index}
            rounded="md"
          >
            <HStack px="4" py="2">
              <Icon
                as={Entypo}
                name="dot-single"
                size="sm"
                color={notificationData.read ? "muted.400" : "primary.500"}
              />
              <Text ml="2" fontWeight="500" color="coolGray.800">
                {notificationData.title}
              </Text>
            </HStack>
          </Menu.Item>
        );
      })}
    </Menu>
  );
}
