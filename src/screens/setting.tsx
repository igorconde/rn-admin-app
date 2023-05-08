import React, { useState } from "react";
import {
  Box,
  Text,
  VStack,
  FormControl,
  Input,
  TextArea,
  HStack,
  Button,
  Select,
  Checkbox,
  Stack,
  Image,
  AddIcon,
  Hidden,
} from "native-base";
import type { StackNavigationProp } from "@react-navigation/stack";
import { Layout } from "../components/Layout";

export function Setting({
  navigation,
}: {
  navigation: StackNavigationProp<any>;
}) {

  return (
    <Layout navigation={navigation}>
      <Stack
        my="6"
        space={{ base: "5", md: "16" }}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <VStack space="6" flex="1">
          <VStack space="3">
            <Box>
              <Text bold fontSize="lg" textTransform="uppercase">
                Dados Pessoais
              </Text>
            </Box>
            <VStack space="3">
              <FormControl>
                <FormControl.Label>
                  <Text fontWeight="semibold" fontSize="xs">
                    Nome
                  </Text>
                </FormControl.Label>
                <Input defaultValue="Diogo" />
              </FormControl>
              <FormControl>
                <FormControl.Label>
                  <Text fontWeight="semibold" fontSize="xs">
                    Email
                  </Text>
                </FormControl.Label>
                <Input defaultValue="diogo@gmail.com" />
              </FormControl>
              <FormControl>
                <FormControl.Label>
                  <Text fontWeight="semibold" fontSize="xs">
                    Bio
                  </Text>
                </FormControl.Label>
                <TextArea h={24} />
                <FormControl.HelperText>
                  Brief description for your profile. URLs are hyperlinked.
                </FormControl.HelperText>
              </FormControl>
            </VStack>
          </VStack>
          <VStack space="3">
            <Box>
              <Text bold fontSize="lg" textTransform="uppercase">
                Notificações
              </Text>
            </Box>
            <VStack space="4" my="1">
              <FormControl>
                <Checkbox
                  value="meetup"
                  colorScheme="blue"
                  _text={{ fontSize: "xs" }}
                >
                  Me atualize sobre quaisquer novas notas de exerrcícios
                </Checkbox>
              </FormControl>
              <FormControl>
                <Checkbox
                  defaultIsChecked
                  value="activity"
                  colorScheme="blue"
                  _text={{ fontSize: "xs" }}
                >
                  Me atualize sobre evolução de alunos
                </Checkbox>
              </FormControl>
            </VStack>
          </VStack>
        </VStack>

        <VStack space="2">
          <Hidden till="md">
            <Text fontWeight="semibold" fontSize="xs">
              Profile Photo
            </Text>
          </Hidden>
          <VStack
            space={4}
            justifyContent={{ base: "center", md: "flex-start" }}
            mx={{ base: "auto", md: "0" }}
          >
            <Image
              size={{ base: "32", md: "48" }}
              rounded="sm"
              alt="Imagme Perfil Image"
              source={{
                uri:
                  "https://ionicframework.com/docs/img/demos/avatar.svg",
              }}
            />

            <VStack space="2" w={{ base: "32", md: "48" }} flex="1">
              <Button w={{ base: "32", md: "48" }}>Upload</Button>
              <Button variant="ghost" w={{ base: "32", md: "48" }}>
                Remover foto
              </Button>
            </VStack>
          </VStack>
        </VStack>
      </Stack>
      <HStack space={3} alignItems="flex-end" ml="auto" mt="6" mb="20">
        <Button variant="outline">Cancelar</Button>
        <Button variant="solid">Salvar</Button>
      </HStack>
    </Layout>
  );
}
