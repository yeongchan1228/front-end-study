import { useState } from "react";
import "./App.css";

function App() {
  const [titles, setTitles] = useState(["A-Title", "C-Title", "B-Title"]);
  const [likeCounts, setLikeCount] = useState([0, 0, 0]);
  const [days, setDays] = useState(["02-10", "02-11", "02-12"]);
  const [navTitile] = useState("MyBlog");
  const [contentIdx, setContentIdx] = useState(0);
  const [modal, setModal] = useState(false);
  const [inputTitle, setInputTitle] = useState("");

  const sortTitle = () => {
    const copy = [...titles];
    copy.sort();
    setTitles(copy);
  };

  return (
    <div className="App">
      <Nav navTitile={navTitile} />

      <SortBtn sortTitle={sortTitle} />

      {titles.map((_, idx) => {
        return (
          <Content
            modal={modal}
            setModal={setModal}
            idx={idx}
            titles={titles}
            setTitles={setTitles}
            contentIdx={contentIdx}
            setContentIdx={setContentIdx}
            likeCounts={likeCounts}
            setLikeCount={setLikeCount}
            key={idx}
          />
        );
      })}

      <input
        type="text"
        className="text-input"
        onChange={(event) => {
          setInputTitle(event.target.value);
        }}
        value={inputTitle}
      ></input>
      <button
        onClick={() => {
          titles.unshift(inputTitle);
          setTitles([...titles]);

          likeCounts.unshift(0);
          setLikeCount([...likeCounts]);

          days.unshift("04-29");
          setDays([...days]);

          setInputTitle("");
        }}
      >
        입력
      </button>
      {modal ? (
        <Modal titles={titles} days={days} contentIdx={contentIdx} />
      ) : null}
    </div>
  );
}

const Content = ({
  modal,
  setModal,
  idx,
  titles,
  setTitles,
  contentIdx,
  setContentIdx,
  likeCounts,
  setLikeCount,
}) => {
  const addLikeCount = (idx) => {
    likeCounts[idx]++;
    setLikeCount([...likeCounts]);
  };

  return (
    <div className="content-list">
      <h4
        onClick={() => {
          modal
            ? contentIdx !== idx
              ? setModal(true)
              : setModal(false)
            : setModal(true);
          setContentIdx(idx);
        }}
      >
        {titles[idx] + " "}
        <span
          onClick={(event) => {
            addLikeCount(idx);
            event.stopPropagation();
          }}
        >
          🤞{" "}
        </span>
        {likeCounts[idx]}
      </h4>
      <button
        onClick={() => {
          titles.splice(idx, 1);
          setTitles([...titles]);
        }}
      >
        삭제
      </button>
    </div>
  );
};

const Modal = ({ titles, days, contentIdx }) => {
  return (
    <div className="modal">
      <h4>{titles[contentIdx]}</h4>
      <p>{days[contentIdx]}</p>
      <p>상세 내용</p>
    </div>
  );
};

const SortBtn = ({ sortTitle }) => {
  return (
    <div className="content-sort">
      <button
        onClick={() => {
          sortTitle();
        }}
      >
        제목 정렬하기
      </button>
    </div>
  );
};

const Nav = ({ navTitile }) => {
  return (
    <div className="black-nav">
      <h4>{navTitile}</h4>
    </div>
  );
};

export default App;
