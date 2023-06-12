import { Text, Image, ScrollView } from "react-native";

const Perfil = () => {
  return (
    <ScrollView>
      <Text
        style={{
          textAlign: "center",
          fontWeight: "bold",
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        Javier Santiago Diaz Arcila
      </Text>
      <Image
        source={require("../img/1.jpg")}
        style={{
          width: 340,
          height: 400,
          alignSelf: "center",
          borderRadius: 500,
          marginBottom: 25,
        }}
        resizeMode="stretch"
      />
      <Text style={{ textAlign: "center", marginBottom: 10 }}>
        Soy un desarrollador web full stack y desarrollador móvil con
        experiencia en React Native. Mi pasión es crear soluciones digitales
        eficientes y atractivas que combinen lo mejor de las aplicaciones web y
        móviles. Con habilidades sólidas en HTML, CSS y JavaScript, puedo crear
        sitios web modernos y responsivos que brinden una excelente experiencia
        de usuario en cualquier dispositivo. También tengo experiencia en el
        desarrollo de aplicaciones móviles utilizando React Native, lo que me
        permite crear aplicaciones nativas para iOS y Android.
        {/*  ///////////////////////////////////////// */}
        Si estás buscando un profesional versátil en el desarrollo web y móvil,
        estoy aquí para ayudarte. Podemos discutir tus ideas y trabajar juntos
        para crear soluciones digitales que cumplan con tus necesidades y
        objetivos. No dudes en contactarme para discutir tu proyecto. Estaré
        encantado de ser parte de tu éxito y brindarte mi experiencia en el
        desarrollo web full stack y en el desarrollo móvil con React Native.
        Espero tener la oportunidad de trabajar contigo y convertir tus ideas en
        realidad. ¡Contáctame hoy mismo y comencemos a construir algo grandioso
        juntos!{" "}
      </Text>
    </ScrollView>
  );
};
export default Perfil;
