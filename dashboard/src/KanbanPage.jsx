import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialData = {
    tasks: {
      'task-1': { id: 'task-1', content: 'Task 1' },
      'task-2': { id: 'task-2', content: 'Task 2' },
      'task-3': { id: 'task-3', content: 'Task 3' },
    },
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'To Do',
        taskIds: ['task-1', 'task-2', 'task-3'],
      },
    },
    columnOrder: ['column-1'],
  };

const KanbanPage = () => {
    const [boardData, setBoardData] = useState(initialData);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) return;

    const start = boardData.columns[source.droppableId];
    const finish = boardData.columns[destination.droppableId];

    const newStartTaskIds = Array.from(start.taskIds);
    newStartTaskIds.splice(source.index, 1);

    const newFinishTaskIds = Array.from(finish.taskIds);
    newFinishTaskIds.splice(destination.index, 0, draggableId);

    const newColumns = {
      ...boardData.columns,
      [start.id]: { ...start, taskIds: newStartTaskIds },
      [finish.id]: { ...finish, taskIds: newFinishTaskIds },
    };

    const newBoardData = {
      ...boardData,
      columns: newColumns,
    };

    setBoardData(newBoardData);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Kanban Board</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="all-columns" direction="horizontal" type="column">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} className="flex">
              {boardData.columnOrder.map((columnId, index) => {
                const column = boardData.columns[columnId];
                const tasks = column.taskIds.map((taskId) => boardData.tasks[taskId]);

                return (
                  <Draggable key={columnId} draggableId={columnId} index={index}>
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        className="p-4 flex-1"
                      >
                        <div className="bg-gray-200 rounded p-4">
                          <h2 className="text-lg font-semibold mb-4">{column.title}</h2>
                          <Droppable droppableId={columnId} type="task">
                            {(provided) => (
                              <div {...provided.droppableProps} ref={provided.innerRef}>
                                {tasks.map((task, index) => (
                                  <Draggable key={task.id} draggableId={task.id} index={index}>
                                    {(provided) => (
                                      <div
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        ref={provided.innerRef}
                                        className="bg-white rounded p-2 mb-2"
                                      >
                                        {task.content}
                                      </div>
                                    )}
                                  </Draggable>
                                ))}
                                {provided.placeholder}
                              </div>
                            )}
                          </Droppable>
                        </div>
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default KanbanPage;
