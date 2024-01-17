import { useParams } from "react-router-dom";

export const MainConcept = () => {
  const { index } = useParams<{ index: string }>();
  const numIndex = Number(index);

  const contents = ["내용1", "내용2", "내용3", "내용4"];

  const content = numIndex !== undefined ? contents[numIndex] : undefined;

  return <div>{content}</div>;
};
