import { StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MotiView, MotiText } from 'moti';
import User from '../../interfaces/User';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 24 : 72;

type HeaderProps = {
  user: User;
}

export default function Header({ user: { name } }: HeaderProps) {
  return (
    <View style={styles.container}>
      <MotiView style={styles.content} 
      from={{
        translateY: -160,
        opacity: 0,
      }}
      animate={{
        translateY: 0,
        opacity: 1,
      }}
      transition={{
        type: 'timing',
        duration: 240,
        delay: 240,
      }}
      >
        <MotiText style={styles.username}
          from={{
            translateX: -240,
            opacity: 0,
          }}
          animate={{
            translateX: 0,
            opacity: 1,
          }}
          transition={{
            type: 'timing',
            duration: 480,
            delay: 480,
          }}
        >
          {name}
        </MotiText>
        <TouchableOpacity style={styles.userIcon} activeOpacity={0.5}>
          <FontAwesome  name="user-o" size={28} color="black" />
        </TouchableOpacity>
      </MotiView>
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
