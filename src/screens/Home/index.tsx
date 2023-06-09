import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  Image,
} from "react-native";
import { Task } from "../../components/Task";
import { styles } from "./styles";

export function Home() {
  const [task, setTask] = useState<string[]>([]);
  const [tasks, setTasks] = useState("");
  var data = new Date();

  function handleAdd() {
    setTask((prevState) => [...prevState, tasks]);
    setTasks("");
    console.log(data);
  }

  function handleRemove(name: string) {
    setTask((prevState) =>
      prevState.filter((participant) => participant !== name)
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>What do we have to do today?</Text>
      <Text style={styles.eventDate}> {data.toUTCString()} </Text>
      <TextInput
        onChangeText={setTasks}
        placeholder="Enter here"
        placeholderTextColor="#6b6b6b"
        style={styles.input}
        value={tasks}
      />
      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>ADD TASK</Text>
      </TouchableOpacity>
      <FlatList
        data={task}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Task key={item} name={item} onRemove={() => handleRemove(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.emptyDiv}>
            <Image
              style={styles.image}
              source={require("./../../../assets/empty-bg.png")}
            />
            <Text style={styles.listEmpty}>
              {/* <Image source={} /> */}
              Your list is empty, let's get lost!
            </Text>
          </View>
        )}
      />
    </View>
  );
}
