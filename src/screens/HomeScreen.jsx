import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

export default function HomeScreen({ navigation }) {
  const monstera = {
    nome: "Monstera Deliciosa",
    preco: "R$ 89,90",
    imagem:
      "https://images.unsplash.com/photo-1545241047-6083a3684587",
    descricao:
      "A Monstera Deliciosa é uma planta tropical conhecida por suas folhas grandes e características. É uma ótima opção para trazer mais vida e beleza para ambientes internos.",
    quantidade: 10,
  };

  const rosaDoDeserto = {
    nome: "Rosa do Deserto",
    preco: "R$ 109,90",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPYvaOAkyxl-ZKAKfHtl8PIvkPj1DhdbESvMOpkJ9_0A&s=10",
    descricao:
      "A Rosa do Deserto é uma planta ornamental conhecida por suas belas flores e seu caule marcante. Gosta de bastante luz e pode ser cultivada em vasos.",
    quantidade: 6,
  };

  function abrirProduto(produto) {
    navigation.navigate("Produto", {
      produto: produto,
    });
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.welcome}>
        Olá, visitante!
      </Text>

      <Text style={styles.subtitle}>
        Encontre a planta perfeita para o seu lar.
      </Text>

      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
        }}
        style={styles.banner}
      />

      <Text style={styles.sectionTitle}>
        Produtos Populares
      </Text>

      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.8}
        onPress={() => abrirProduto(monstera)}
      >
        <Image
          source={{ uri: monstera.imagem }}
          style={styles.cardImage}
        />

        <Text style={styles.plantName}>
          {monstera.nome}
        </Text>

        <Text style={styles.price}>
          {monstera.preco}
        </Text>

        <Text style={styles.details}>
          Toque para ver detalhes
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.8}
        onPress={() => abrirProduto(rosaDoDeserto)}
      >
        <Image
          source={{ uri: rosaDoDeserto.imagem }}
          style={styles.cardImage}
        />

        <Text style={styles.plantName}>
          {rosaDoDeserto.nome}
        </Text>

        <Text style={styles.price}>
          {rosaDoDeserto.preco}
        </Text>

        <Text style={styles.details}>
          Toque para ver detalhes
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  welcome: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4A5D23",
    marginTop: 10,
  },

  subtitle: {
    fontSize: 16,
    color: "#665",
    marginTop: 5,
    marginBottom: 20,
  },

  banner: {
    width: "100%",
    height: 200,
    borderRadius: 15,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 15,
    color: "#4A5D23",
  },

  card: {
    backgroundColor: "#F5F5F5",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },

  cardImage: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },

  plantName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222222",
  },

  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4A5D23",
    marginTop: 5,
  },

  details: {
    fontSize: 13,
    color: "#777777",
    marginTop: 8,
  },
});