import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const task = [
  { id: 1, content: "przejść na Reacta", done: false },
  { id: 2, content: "zjeść obiad", done: true },
];
const hideDoneTasks = false;

function App() {
  return (
    <body>
      <Container>
        <Header title="Lista zadań" />
        <Section
          title="Dodaj nowe zadanie"
          body={<Form />}
        />

        <Section
          title="Lista zadań"
          body={
            <Tasks tasks={task} hideDoneTasks={hideDoneTasks} />
          }
          extraHeaderContent={
            <Buttons tasks={task} hideDoneTasks={hideDoneTasks} />
          }
        />
      </Container>
    </body>
  );
}

export default App;
