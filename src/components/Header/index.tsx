import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 24 : 72;

type HeaderProps = {
  username: string;
}

export default function Header({ username }: HeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.username}>{username}</Text>

        <TouchableOpacity style={styles.userIcon}>
          <FontAwesome  name="user-o" size={28} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffce00',
    flexDirection: 'row',
    paddingVertical: statusBarHeight ,
    paddingHorizontal: 24,
  },
  content: {
    alignItems: 'center',
    backgroundColor: '#ffce00',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: statusBarHeight,
  },
  username: {
    fontSize: 18,
    fontWeight: '700',
  },
  userIcon: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 48/2,
    height: 48,
    justifyContent: 'center',
    width: 48,
  }
});
