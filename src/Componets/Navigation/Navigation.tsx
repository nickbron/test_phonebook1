import { NavigLink, Navig } from "./Navigation.styled";

const Navigation = () => (
  <Navig>
    <NavigLink exact to="/">
      Home
    </NavigLink>
    <NavigLink to="/contacts">Contacts</NavigLink>
    <NavigLink to="/about">About</NavigLink>
  </Navig>
);

export default Navigation;
