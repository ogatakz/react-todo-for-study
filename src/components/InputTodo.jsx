import React from "react";

// javascriptで書く場合は、キャメルケースで書く必要がある。
// cssと違い要素で書く必要があるので「""」で括る事と「;を,」への修正を実施する。
const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

// inputエリアのコンポーネント化
export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    // <div className="input-area">
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
