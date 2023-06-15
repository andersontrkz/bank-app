import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Actions() {
  return (
    <ScrollView style={styles.container} horizontal showsHorizontalScrollIndicator={false}>
			<TouchableOpacity style={styles.action}>
				<View style={styles.actionButton}>
					<MaterialCommunityIcons name="cash-plus" size={24} color="black" />
				</View>
				<Text style={styles.actionLabel}>Entradas</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.action}>
				<View style={styles.actionButton}>
					<AntDesign name="tagso" size={24} color="black" />
				</View>
				<Text style={styles.actionLabel}>Compras</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.action}>
				<View style={styles.actionButton}>
					<AntDesign name="creditcard" size={24} color="black" />
				</View>
				<Text style={styles.actionLabel}>Cartão</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.action}>
				<View style={styles.actionButton}>
					<Ionicons name="wallet-outline" size={24} color="black" />
				</View>
				<Text style={styles.actionLabel}>Carteira</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.action}>
				<View style={styles.actionButton}>
					<AntDesign name="barcode" size={24} color="black" />
				</View>
				<Text style={styles.actionLabel}>Boletos</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.action}>
				<View style={styles.actionButton}>
					<AntDesign name="filetext1" size={24} color="black" />
				</View>
				<Text style={styles.actionLabel}>Extratos</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.action}>
				<View style={styles.actionButton}>
					<AntDesign name="barschart" size={24} color="black" />
				</View>
				<Text style={styles.actionLabel}>Investimentos</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.action}>
				<View style={styles.actionButton}>
					<Ionicons name="settings-outline" size={24} color="black" />
				</View>
				<Text style={styles.actionLabel}>Configurações</Text>
			</TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 140,
		marginVertical: 16,
		paddingHorizontal: 16,
  },
  action: {
		alignItems: 'center',
		marginRight: 32,
  },
  actionButton: {
    backgroundColor: '#ecf0f1',
		height: 60,
		width: 60,
		borderRadius: 60/2,
		justifyContent: 'center',
		alignItems: 'center',
  },
  actionLabel: {
    marginTop: 4,
		textAlign: 'center',
		fontWeight: '700',
  },
});
