import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from '@chakra-ui/react';

const TodoFilter = ({ filter, setFilter }) => {
  return (
    <ButtonGroup spacing={4} mt={4}>
      <Button
        onClick={() => setFilter('全部')}
        colorScheme={filter === '全部' ? 'blue' : 'gray'}
        variant={filter === '全部' ? 'solid' : 'outline'}
      >
        全部
      </Button>
      <Button
        onClick={() => setFilter('尚未完成')}
        colorScheme={filter === '尚未完成' ? 'blue' : 'gray'}
        variant={filter === '尚未完成' ? 'solid' : 'outline'}
      >
        尚未完成
      </Button>
      <Button
        onClick={() => setFilter('完成')}
        colorScheme={filter === '完成' ? 'blue' : 'gray'}
        variant={filter === '完成' ? 'solid' : 'outline'}
      >
        已完成
      </Button>
    </ButtonGroup>
  );
};

// 為 props 增加 PropTypes 驗證
TodoFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default TodoFilter;
