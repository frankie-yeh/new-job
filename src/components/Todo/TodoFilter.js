import React from 'react';
import PropTypes from 'prop-types'; // 引入 PropTypes

const TodoFilter = ({ filter, setFilter }) => {
  return (
    <div className="filter-buttons">
      <button
        onClick={() => setFilter('全部')}
        className={filter === '全部' ? 'active' : ''}
      >
        全部
      </button>
      <button
        onClick={() => setFilter('尚未完成')}
        className={filter === '尚未完成' ? 'active' : ''}
      >
        尚未完成
      </button>
      <button
        onClick={() => setFilter('完成')}
        className={filter === '完成' ? 'active' : ''}
      >
        已完成
      </button>
    </div>
  );
};

// 為 props 添加 PropTypes 驗證
TodoFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default TodoFilter;
