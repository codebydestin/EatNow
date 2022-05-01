import { View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

const SearchBar = ({ term, onTermChange, onSearch }) => {
  return (
    <View style={styles.wrapper}>
      <Icon name="search" size={18} />
      <TextInput
        placeholder="search here"
        value={term}
        //onChangeText={onTermChange}
        onEndEditing={onSearch}
        style={styles.searchInput}
      />
    </View>
  );
};

export default SearchBar;
