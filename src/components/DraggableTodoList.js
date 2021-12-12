import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import styles from "../styles/TodoList.module.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const DraggableTodoList = ({ toDoList, setToDoList, filteredList, setFilteredList, slct }) => {

  const reOrderList = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onEnd = (result) => {
    setFilteredList(
      reOrderList(filteredList, result.source.index, result.destination.index)
    );
    setToDoList(
      reOrderList(filteredList, result.source.index, result.destination.index)
    );
  };

  return (
    <DragDropContext onDragEnd={onEnd}>
      <Droppable droppableId="123456">
        {(provided, snapshot) => (
          <div ref={provided.innerRef}>
            <div className={styles["toDoListContainer"]}>
              <ul className={styles["toDoList"]}>
                {filteredList.map((item, index) => (
                  <Draggable
                    draggableId={item.id.toString()}
                    index={index}
                    key={item.id}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <TodoItem
                          // key={item.id}
                          clickedItem={item}
                          toDoList={toDoList}
                          setToDoList={setToDoList}
                          slct={slct}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
              </ul>
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DraggableTodoList;
