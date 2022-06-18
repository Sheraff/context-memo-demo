import { createContext, memo, useContext, useMemo, useState } from "react";
import Logger from "./Logger";
import styles from "./styles.module.css";

const MyContext = createContext({});

const Parent = ({ children }) => {
  return <div>{children}</div>;
};

const Ddd = () => {
  return <Logger />;
};

const Ccc = () => {
  return <Ddd />;
};

const Bbb = () => {
  return <Ccc />;
};

const Aaa = () => {
  return <Bbb />;
};

const Tree = () => {
  return (
    <>
      <Logger />
      <Aaa />
    </>
  );
};

const MemoTree = memo(Tree);

const UseMemoTree = () => {
  const log = useMemo(() => <Logger />, []);
  return (
    <>
      {log}
      <Aaa />
    </>
  );
};

const AaaContext = () => {
  const state = useContext(MyContext);
  return <Bbb state={state} />;
};

const TreeContext = () => {
  return (
    <>
      <Logger />
      <AaaContext />
    </>
  );
};

const MemoTreeContext = memo(TreeContext);

export default function App() {
  const [state, setState] = useState({});
  return (
    <>
      <button onClick={() => setState({})}>re-render root</button>
      <div className={styles.grid}>
        <p>simple logger</p>
        <div>
          <Logger />
        </div>
        <p>parent > logger</p>
        <div>
          <Parent>
            <Logger />
          </Parent>
        </div>
        <p>tree</p>
        <div>
          <Tree />
        </div>
        <p>memo tree</p>
        <div>
          <MemoTree />
        </div>
        <p>useMemo tree</p>
        <div>
          <UseMemoTree />
        </div>
        <MyContext.Provider value={state}>
          <p>tree context</p>
          <div>
            <TreeContext />
          </div>
          <p>memo tree context</p>
          <div>
            <MemoTreeContext />
          </div>
        </MyContext.Provider>
      </div>
    </>
  );
}
