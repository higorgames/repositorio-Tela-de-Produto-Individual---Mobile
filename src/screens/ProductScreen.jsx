import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ProductScreen({ route }) {
  const { produto } = route.params;

  function adicionarAoCarrinho() {
    Alert.alert(
      "Produto adicionado!",
      `${produto.nome} foi adicionado ao carrinho.`
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Image
        source={{ uri: produto.imagem }}
        style={styles.productImage}
      />

      <View style={styles.information}>
        <Text style={styles.productName}>
          {produto.nome}
        </Text>

        <Text style={styles.price}>
          {produto.preco}
        </Text>

        <View style={styles.divider} />

        <Text style={styles.title}>
          Sobre a planta
        </Text>

        <Text style={styles.description}>
          {produto.descricao}
        </Text>

        <View style={styles.stockContainer}>
          <Text style={styles.title}>
            Quantidade disponível
          </Text>

          <Text style={styles.stock}>
            {produto.quantidade} unidades
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={adicionarAoCarrinho}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>
            Adicionar ao carrinho
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F4",
  },

  content: {
    paddingBottom: 30,
  },

  productImage: {
    width: "100%",
    height: 320,
    resizeMode: "cover",
  },

  information: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 30,
  },

  productName: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#4A5D23",
    marginBottom: 6,
  },

  price: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#4A5D23",
  },

  divider: {
    height: 1,
    backgroundColor: "#E5E5E5",
    marginVertical: 22,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222222",
    marginBottom: 8,
  },

  description: {
    fontSize: 15,
    color: "#666666",
    lineHeight: 23,
  },

  stockContainer: {
    marginTop: 25,
    marginBottom: 25,
  },

  stock: {
    fontSize: 15,
    color: "#777777",
  },

  button: {
    backgroundColor: "#4A5D23",
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
}); 