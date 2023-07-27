import { useState } from "react";

interface Props {
  defaultPomodoroTime: number;
}

export default function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = useState(props.defaultPomodoroTime)
  return (
    <div>Olá Mundo</div>
  );
}