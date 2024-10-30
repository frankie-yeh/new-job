import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, Checkbox, Text, IconButton } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

const TodoItem = ({ task, toggleComplete, deleteTask }) => {
  console.log('Rendering TodoItem with task:', task);

  return (
    <ListItem
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p={3}
      mb={2}
      borderRadius="md"
      bg={task.completed ? 'gray.200' : 'orange.100'}
      border="1px solid"
      borderColor={task.completed ? 'gray.300' : 'orange.300'}
      transition="background-color 0.3s"
      _hover={{ backgroundColor: 'orange.200' }}
    >
      <Checkbox
        isChecked={task.completed}
        onChange={toggleComplete}
        mr={2}
        size="lg"
      />
      <Text
        as={task.completed ? 'del' : 'span'}
        flex="1"
        fontSize="lg"
        color={task.completed ? 'gray.500' : 'gray.700'}
        cursor="pointer"
        onClick={toggleComplete}
      >
        {task.text}
      </Text>
      <IconButton
        icon={<CloseIcon />}
        onClick={deleteTask}
        size="sm"
        colorScheme="red"
        variant="ghost"
        aria-label="Delete task"
        _hover={{ backgroundColor: 'red.100' }}
      />
    </ListItem>
  );
};

TodoItem.propTypes = {
  task: PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TodoItem;
