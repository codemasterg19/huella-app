import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";

import { useState } from "react";
import { loginWithEmail } from "./auth.service";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await loginWithEmail(email, password);
      console.log("Login OK:", res.user.uid);
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
  };

  return (
  <SafeAreaView style={styles.safe}>
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.container}>
        <Text style={styles.title}>HUELLA</Text>
        <Text style={styles.subtitle}>
          Conectando personas, mascotas y refugios
        </Text>

        <View style={styles.card}>
          <TextInput
            placeholder="Correo electrónico"
            placeholderTextColor="#888"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />

          <TextInput
            placeholder="Contraseña"
            placeholderTextColor="#888"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={styles.input}
          />

          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && { opacity: 0.7 },
            ]}
            onPress={() => {
              Keyboard.dismiss(); // 🔑 CLAVE
              handleLogin();
            }}
          >
            <Text style={styles.buttonText}>Ingresar</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  </SafeAreaView>
);

}


const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#F6F5F2", // crema
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    color: "#2E7D32", // verde huella
    marginBottom: 4,
  },
  subtitle: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 24,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    color: "#333333",
    backgroundColor: "#FFFFFF",
  },
  button: {
    backgroundColor: "#F9A825", // naranja cálido
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 8,
  },
  buttonText: {
    color: "#333333",
    fontWeight: "700",
    textAlign: "center",
    fontSize: 16,
  },
});
