import { useState, useEffect } from 'react';

import { Icon } from '@iconify/react'

import { 
  Button, 
  Header, 
  Input, 
  Typography 
} from "./components"

import { 
  Actions, 
  Badge, 
  ButtonCheckBox, 
  Card,
  Container, 
  Content, 
  ContentText, 
  ItemCard
} from "./styles/app"

interface TaskProps {
  id: string;
  title?: string;
  description: string;
  checked: boolean;
}

const MOCKTASK: TaskProps[] = [
  {
    id: '1',
    title: 'Task #01',
    description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    checked: false,
  },
  {
    id: '2',
    title: 'Task #02',
    description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    checked: false,
  },
  {
    id: '3',
    title: 'Task #03',
    description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    checked: false,
  },
  {
    id: '4',
    title: 'Task #04',
    description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    checked: false,
  },
]

function App() {

  const [loading, setLoading] = useState<boolean>(false);
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [tasksCompleted, setTasksCompleted] = useState<number>(0);

  useEffect(() => {
    setLoading(true);
    
    setTasks(MOCKTASK);

    setLoading(false);
  },[]);

  useEffect(() => {
    const tasksHasCheck: number = tasks.reduce((accumulator , task) => {
      if(task.checked) {
        return accumulator + 1;
      }
  
      return accumulator;
    }, 0);

    setTasksCompleted(tasksHasCheck);
  },[tasks]);



  const handleDeleteTask = (id: string) => {
    setLoading(true);
    
    const tasksFiltered: TaskProps[] = tasks.filter((task) => 
      task.id !== id
    );

    setTasks(tasksFiltered);

    setLoading(false);
  }

  const handleUpdateCheckTask = (id: string) => {
    setLoading(true);

    const updatedTasks: TaskProps[] = tasks.map((task) => {
      if(task.id === id) {
        return (
          { ...task, checked: !task.checked }
        )
      }
    return task; 
    });

    setTasks(updatedTasks);
    
    setLoading(false);
  }

  if(loading) {
    <>
      loading...
    </>
  }

  return (
    <>
    <Header />
    
    <Container>
      <Actions>
        <Input placeholder="Adicione uma nova tarefa" />
        <Button 
          color="primary" 
          text="Criar"
          icon={
            <Icon 
              icon="ei:plus"
              width={20} 
              height={20} 
            />
          } 
        />
      </Actions>

      <Content>
        <ContentText>
          <Typography
            color="primary"
            text="Tarefas Criadas"
            type='bold'
            align='center'
          />
          <Badge>{tasks.length}</Badge>
        </ContentText>
        <ContentText>
          <Typography
            color="secondary"
            text="Concluídas"
            type='bold'
            align='center'
          />
          <Badge>{tasksCompleted} de {tasks.length}</Badge>
        </ContentText>
      </Content>

      <Card>
        {tasks.map((task, idx: number) => task ? (
          <ItemCard key={idx}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div>
                <ButtonCheckBox 
                  value={task.checked} 
                  onClick={() => {
                    handleUpdateCheckTask(task.id)
                  }}
                >
                  {task.checked && (
                    <Icon icon='heroicons-solid:check' width={12} color='white' />
                  )}
                </ButtonCheckBox>
              </div>
              <Typography 
                text={task.description}
                color='light'
                align='left'
                decoration={task.checked ? 'line-through' : 'none'}
              />
            </div>
            <div>
              <Icon 
                icon="dashicons:trash" 
                width={18}
                height={18}
                color='#808080'
                onClick={() => {
                  handleDeleteTask(task.id)
                }} 
              />
            </div>
          </ItemCard>
        ) : (
          <>
            <Icon 
              icon='streamline:interface-file-clipboard-text-edition-form-task-checklist-edit-clipboard'
              color='#333'
              width={56}
              height={56}
            />
            <Typography
              size="large" 
              text="Você ainda não tem tarefas cadastradas"
              type='bold'
            />
            <Typography 
              text="Crie tarefas e organize seus itens a fazer"
              size="large"
            />
          </>
        ))}
      </Card>

    </Container>
    </>
  )
}

export default App
