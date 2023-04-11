import React from "react";
import { Heading, Icon, IconButton, Menu } from "native-base";
import { useNavigation, useNavigationState } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import { Header } from "../components";

const AppHeader = () => {
  const navigation = useNavigation<any>();
  const routeIndex = useNavigationState((state) => state.index);

  return (
    <Header
      title={
        <Heading color={"gray.100"} size={"md"} textAlign={"center"}>
          fog of war
        </Heading>
      }
      left={
        routeIndex > 0 ? (
          <IconButton
            icon={
              <Icon
                as={Feather}
                name="chevron-left"
                size={"md"}
                color={"white"}
              />
            }
            variant={"solid"}
            onPress={() => navigation.goBack()}
          />
        ) : null
      }
      right={
        <Menu
          width="100"
          offset={4}
          trigger={(triggerProps) => {
            return (
              <IconButton
                icon={
                  <Icon as={Feather} name="user" size={"md"} color={"white"} />
                }
                variant={"solid"}
                {...triggerProps}
              />
            );
          }}
        >
          <Menu.Item onPress={() => navigation.navigate("Auth")}>
            Log in
          </Menu.Item>
        </Menu>
      }
    />
  );
};

export default AppHeader;
