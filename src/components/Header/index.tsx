import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { MotiView } from 'moti';
import User from '../../interfaces/User';
import { useShowContent } from '../../contexts/useShowContent';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 24 : 72;

type HeaderProps = {
  user: User;
}

export default function Header({ user: { name } }: HeaderProps) {
  const { showContent, setShowContent } = useShowContent();

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
        <MotiView 
          style={styles.containerLeft}
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
          <Text style={styles.username}>
            {name}
          </Text>
          <TouchableOpacity style={styles.eyeIcon} activeOpacity={0.5}>
            {showContent ?
              <Ionicons name="eye-off-outline" size={24} color="black" onPress={setShowContent} /> :
              <Ionicons name="eye-outline" size={24} color="black" onPress={setShowContent} />
            }        
          </TouchableOpacity>
        </MotiView>
  
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
  containerLeft: {
    backgroundColor: '#ffce00',
    flexDirection: 'row',
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
  eyeIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16
  },
  userIcon: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 48/2,
    height: 48,
    justifyContent: 'center',
    width: 48,
    marginLeft: 16
  }
});
