import { View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

const SearchBar = ({ term, onTermChange, onSearch }) => {
  return (
    <View style={styles.wrapper}>
      <Icon name="search" style={styles.searchIcon} />
      <TextInput
        placeholder="What do you want to eat.."
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onSearch}
        style={styles.searchInput}
        returnKeyType="done"
      />
    </View>
  );
};

export default SearchBar;
