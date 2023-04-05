import { useContext, useMemo, useState } from "react";

import FilterContainer from "../../components/Filter/FilterContainer";
import Loader from "../../components/Loader/Loader";
import { Question } from "../../types/question";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import { UserContext } from "../../contexts/userContext";
import { filterOutByProperty } from "../../utils/filterByProperty";
import styled from "styled-components";
import { useQuestions } from "../../hooks/questions";
import { white } from "../../consts/colors";

const Home = () => {
  const { user } = useContext(UserContext);
  const token = user?.token ?? "";
  const [sortField, setSortField] = useState<string>("date_posted");
  const [sortOrder, setSortOrder] = useState<string>("desc");
  const { data, isLoading } = useQuestions(token, sortField, sortOrder);
  const [filterOutUnanswered, setFilterOutUnanswered] =
    useState<boolean>(false);
  const [questions, setQuestions] = useState<Question[]>([]);

  const toggleSortOrder = () => {
    const newSortOrder = sortOrder === "desc" ? "asc" : "desc";
    setSortOrder(newSortOrder);
    console.log(newSortOrder);
  };

  const toggleFilterQuestions = () => {
    setFilterOutUnanswered(
      (prevFilterOutUnanswered) => !prevFilterOutUnanswered
    );
  };

  const filteredQuestions = useMemo(() => {
    if (!filterOutUnanswered || !data) {
      return data ?? [];
    }
    return filterOutByProperty(data, "answer_count", 0);
  }, [filterOutUnanswered, data]);

  const sortedQuestions = useMemo(() => {
    if (!data) {
      return [];
    }
    const sortOrderValue = sortOrder === "desc" ? -1 : 1;
    return [...filteredQuestions].sort((a, b) => {
      if (a[sortField] < b[sortField]) return -1 * sortOrderValue;
      if (a[sortField] > b[sortField]) return 1 * sortOrderValue;
      return 0;
    });
  }, [sortField, sortOrder, filteredQuestions, data]);

  const handleQuestionDeleted = (questionId: string) => {
    setQuestions((prevQuestions) =>
      prevQuestions.filter((question) => question._id !== questionId)
    );
  };

  if (isLoading) {
    return (
      <>
        <Loader isLoading={true} />
      </>
    );
  }

  return (
    <>
      <Title>Conversations Sparked so far:</Title>
      <FilterContainer
        handleSorting={toggleSortOrder}
        sortOrder={sortOrder}
        handleFilter={toggleFilterQuestions}
        filterState={filterOutUnanswered}
      />
      {data && data.length > 0 ? (
        <QuestionsContainer>
          {sortedQuestions.map((question: Question) => (
            <QuestionCard
              key={question._id}
              question={question}
              onQuestionDeleted={() => handleQuestionDeleted(question._id)}
            />
          ))}
        </QuestionsContainer>
      ) : (
        <ErrorMessage>There are no questions yet</ErrorMessage>
      )}
    </>
  );
};

export default Home;

const Title = styled.h2`
  font-family: "Montserrat";
  color: ${white};
  font-weight: 700;
  margin-bottom: 32px;
`;

const QuestionsContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const ErrorMessage = styled.p`
  font-family: "Sora";
  font-size: 0.9rem;
  margin-top: 32px;
  color: ${white};
`;
