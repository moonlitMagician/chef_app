import React, {useState} from "react";
import { Text, View, TextInput, Button, ScrollView, Image} from "react-native";
import { Picker } from '@react-native-picker/picker';
import styles from "./styles.js";
import menuItem from "./menu.json";


export default function Index() {
  const [menu, setMenu] = useState(menuItem);
  const menuTotal = menu.length

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [course, setCourse] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("")
  
  const addMenuItem = () => {
    const newItem = {
      image,
      name,
      description,
      course,
      price: parseFloat(price)
    };
    setMenu([...menu, newItem]);
    setName("");
    setDescription("");
    setCourse("");
    setPrice("");
    setImage("");
  }

  

  return (
    <ScrollView>
      <Text style={styles.textMainHeader}>Chef Christoffel - Private chef </Text>
      <Text style={styles.textMainHeader}>Menu Items: {menuTotal}</Text>
      {menu.map((menuItem, index) => (
        <View style={styles.menuDisplaybox} key={index}>
          <Image
            source={{ uri: menuItem.image}} // For remote images
            style={styles.menuImage } 
          />
          <Text style={styles.textHeader}>{menuItem.name}</Text>
          <Text style={styles.textContent}>
            Description: {menuItem.description}
          </Text>
          <Text style={styles.textContent}>Price: R {menuItem.price}</Text>
          <Text style={styles.textHeader}>Course: {menuItem.course}</Text>
        </View>
      ))}

      <View style={styles.form}>
        <Text style={styles.formHeader}>Add a new menu item:</Text>
        <TextInput
          style={styles.input}
          placeholder="Name of the dish"
          value={name}
          onChangeText={setName}
          />
        <TextInput
          style={styles.input}
          placeholder="Description of the dish"
          value={description}
          onChangeText={setDescription}
          />
        <TextInput
          style={styles.input}
          placeholder="Price of the dish"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
          />
        <Picker
          selectedValue={course}
          onValueChange={(itemValue, itemIndex) => setCourse(itemValue)}
          placeholder="Select your course"
          style={styles.pickerInput}>
            <Picker.Item label="Starter" value="Starter" />
            <Picker.Item label="Main" value="Main" />
            <Picker.Item label="Desert" value="Desert" />
        </Picker>
        <TextInput
          style={styles.input}
          placeholder="Image (Enter the URL)"
          value={image}
          onChangeText={setImage}
          />
        <Button title="Add to menu" onPress={addMenuItem}/>
      </View>
    </ScrollView>
  );
  
}
